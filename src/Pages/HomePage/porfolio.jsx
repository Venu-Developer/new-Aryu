import { useEffect, useState } from "react";
import { motion, useMotionValue, useAnimation, useTransform } from "framer-motion";
import img from '../../assets/Images/Homepage/Porfolio/DeltaStudy.png' 
const RollingGallery = ({ autoplay = false, pauseOnHover = false }) => {
  const [posts, setPosts] = useState([]);
  const [containerWidth, setContainerWidth] = useState(0);

  // Fetch images on mount
  useEffect(() => {
    fetch("https://backoffice.aryuacademy.com/api/v1/images-list")
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error("Error fetching posts:", error));
  }, []);
  console.log(posts)

  // Handle responsive screen size & container width
  useEffect(() => {
    const updateSize = () => setContainerWidth(window.innerWidth);
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  // 3 images visible at a time
  const faceCount = posts.length;
  const faceWidth = containerWidth / 3;
  const cylinderWidth = faceWidth * faceCount;
  const radius = cylinderWidth / (2 * Math.PI);

  const dragFactor = 0.05;
  const rotation = useMotionValue(0);
  const controls = useAnimation();

  const transform = useTransform(rotation, (val) => `rotate3d(0,1,0,${val}deg)`);

  const startInfiniteSpin = (startAngle) => {
    controls.start({
      rotateY: [startAngle, startAngle - 360],
      transition: {
        duration: 20,
        ease: "linear",
        repeat: Infinity,
      },
    });
  };

  useEffect(() => {
    if (autoplay) {
      startInfiniteSpin(rotation.get());
    } else {
      controls.stop();
    }
  }, [autoplay, controls, rotation]);

  const handleDrag = (_, info) => {
    controls.stop();
    rotation.set(rotation.get() + info.offset.x * dragFactor);
  };

  const handleDragEnd = (_, info) => {
    const finalAngle = rotation.get() + info.velocity.x * dragFactor;
    rotation.set(finalAngle);
    if (autoplay) startInfiniteSpin(finalAngle);
  };

  return (
    <div className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
      <div className="flex w-[90%] h-full items-center justify-center [perspective:2000px]">
        <motion.div
          drag="x"
          dragElastic={0}
          onDrag={handleDrag}
          onDragEnd={handleDragEnd}
          animate={controls}
          style={{ transform, rotateY: rotation, width: cylinderWidth, transformStyle: "preserve-3d" }}
          className="flex min-h-[200px] cursor-grab items-center justify-center"
        >
          {posts.map((item, i) => (
            <div
              key={i}
              className="group absolute flex h-fit items-center justify-center"
              style={{
                width: `${faceWidth}px`,
                transform: `rotateY(${(360 / faceCount) * i}deg) translateZ(${radius}px)`,
              }}
            >
              <img
                src={`https://backoffice.aryuacademy.com/${item.images}`}
                // alt={item?.alternate_text || "Portfolio Image"}
                className="pointer-events-none w-full h-[300px] md:w-[50%] md:h-[300px]  border-[3px] border-white
                           transition-transform duration-300 ease-out group-hover:scale-105 object-contain rounded-3xl"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default RollingGallery;
