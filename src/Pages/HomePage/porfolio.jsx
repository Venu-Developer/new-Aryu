import { useEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useAnimation,
  useTransform,
} from "framer-motion";
import img from '../../assets/Images/Homepage/Porfolio/DeltaStudy.png'
const IMGS = [{url:img,alt:"50 Bucks restaurant website featuring a pizza, burgers, fries, and wraps with a modern design by Aryu Technologies"},{url:"",alt:"Digital Benchmark website showcasing business benchmarking solutions with insights on growth, ESG, and reputation management"},{url:"",alt:"Emergency 911 website by Aryu Technologies, featuring medical alert systems with fall detection, GPS, and fast response"},{url:"",alt:"Kamaraj Women's College website by Aryu Technologies, showcasing admissions, facilities, and academic details in Thoothukudi."},{url:"",alt:"Kamaraj College website by Aryu Technologies, featuring course highlights, student achievements, and campus events in Thoothukudi."},{url:"",alt:"The Kindness Solution website by Aryu Technologies, featuring inspiration, lifestyle resources, and wellness content."},{url:"",alt:"Medics Research website by Aryu Technologies, showcasing electronic data capture for clinical research with accuracy and efficiency."},{url:"",alt:""},{url:"",alt:""},{url:"",alt:""},{url:"",alt:""},{url:"",alt:""},{url:"",alt:""}
];

const RollingGallery = ({ autoplay = false, pauseOnHover = false, images = [] }) => {
  images = images.length > 0 ? images : IMGS;

  const [isScreenSizeSm, setIsScreenSizeSm] = useState(window.innerWidth <= 640);
  useEffect(() => {
    const handleResize = () => setIsScreenSizeSm(window.innerWidth <= 640);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const faceCount = images.length;
  const containerWidth = window.innerWidth;
  const faceWidth = containerWidth / 3; // 3 images visible at a time
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
      const currentAngle = rotation.get();
      startInfiniteSpin(currentAngle);
    } else {
      controls.stop();
    }
  }, [autoplay]);

  const handleUpdate = (latest) => {
    if (typeof latest.rotateY === "number") {
      rotation.set(latest.rotateY);
    }
  };

  const handleDrag = (_, info) => {
    controls.stop();
    rotation.set(rotation.get() + info.offset.x * dragFactor);
  };

  const handleDragEnd = (_, info) => {
    const finalAngle = rotation.get() + info.velocity.x * dragFactor;
    rotation.set(finalAngle);

    if (autoplay) {
      startInfiniteSpin(finalAngle);
    }
  };

  const handleMouseEnter = () => {
    if (autoplay && pauseOnHover) {
      controls.stop();
    }
  };
  const handleMouseLeave = () => {
    if (autoplay && pauseOnHover) {
      const currentAngle = rotation.get();
      startInfiniteSpin(currentAngle);
    }
  };

  return (
    <div className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
      <div className="flex w-[90%] h-full items-center justify-center [perspective:2000px] [transform-style:preserve-3d]">
        <motion.div
          drag="x"
          dragElastic={0}
          onDrag={handleDrag}
          onDragEnd={handleDragEnd}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          animate={controls}
          onUpdate={handleUpdate}
          style={{ transform: transform, rotateY: rotation, width: cylinderWidth, transformStyle: "preserve-3d" }}
          className="flex min-h-[200px] cursor-grab items-center justify-center [transform-style:preserve-3d]"
        >
          {images.map((url, i) => (
            <div
              key={i}
              className="group absolute flex h-fit items-center justify-center"
              style={{
                width: `${faceWidth}px`,
                transform: `rotateY(${(360 / faceCount) * i}deg) translateZ(${radius}px)`,
              }}
            >
              <img
                src={url}
                alt={url.alt}
                className="pointer-events-none w-full h-[300px] md:w-[80%] md:h-[300px] rounded-md border-[3px] border-white
                           transition-transform duration-300 ease-out group-hover:scale-105 object-contain "
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default RollingGallery;
