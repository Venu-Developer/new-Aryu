import React, { useState, useEffect } from "react";
import home1 from "../../assets/Images/Homepage/Futuristic Digital Transformation with Neon Cubes.svg";
import home2 from "../../assets/Images/Homepage/VR and Software Development Solutions.svg";
import home3 from "../../assets/Images/Homepage/Futuristic Cloud Computing and Digital Data Integration.svg";
import Logoslider from "./Logoslider";

const slides = [
  {
    heading: "Digital Transformation company simplifying digital success",
    description:
      "Aryu Technologies is a leading digital transformation company providing all tech solutions.",
    image: home1,
  },
  {
    heading: "Innovative Software Development Solutions",
    description:
      "We specialize in delivering top-notch software development services tailored to your needs.",
    image: home2,
  },
  {
    heading: "Drive Success with Business Consulting Services",
    description:
      "Maximize growth with customized consulting solutions for your business.",
    image: home3,
  },
];

const Mainpage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cycleInterval = 5000; // Slide change every 5 seconds

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length); // Change slide
    }, cycleInterval);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden flex items-center justify-center ">
<div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent from-70% to-black"></div>
      
      {/* Background Slideshow (Without Opacity Transition) */}
      <div className="absolute inset-0 w-full h-full flex items-center justify-center">
        <img
          src={slides[currentIndex].image}
          alt={slides[currentIndex].heading}
          className="absolute w-full h-full object-cover"
        />
      </div>

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-start px-6 md:px-12 lg:px-24 text-white">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-[600] max-w-2xl leading-tight">
          {slides[currentIndex].heading}
        </h1>
        <p className="mt-4 lg:mt-10 text-sm sm:text-lg md:text-xl xl:text-2xl font-[400] max-w-2xl">
          {slides[currentIndex].description}
        </p>
        <button className="mt-6 lg:mt-10 px-5 py-2 sm:px-5 sm:py-2 bg-[#FFFFFF] text-[#000000] font-[600]  transition-all duration-300 ease-in-out transform hover:scale-105 hover:brightness-110 hover:shadow-[0_0_15px_rgba(255,255,255,0.7)] rounded-lg text-sm sm:text-lg shadow-md">
        Reach us
</button>



      </div>
      <div className="absolute bottom-0 "><Logoslider/></div>
      
    </div>
  );
};

export default Mainpage;
