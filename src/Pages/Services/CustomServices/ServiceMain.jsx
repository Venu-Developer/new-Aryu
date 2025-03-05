import React, { useState, useEffect } from "react";
import home1 from '../../../assets/Images/Services/Webdevelopment/Web Development Solution.png'


const slides = [
  {
    heading: "Web Development Solutions",
    description:
      "Fast, secure web development services for businesses of all sizes worldwide.",
    image: home1,
  },
  {
    heading: "Web Development Solutions",
    description:
      "Fast, secure web development services for businesses of all sizes worldwide.",
    image: home1,
  },
  
];

const ServiceMain = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const cycleInterval = 5000; // Total cycle time (5 seconds)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false); // Start fade out effect
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % slides.length); // Change content
        setIsVisible(true); // Fade in new content
      }, 1000); // Sync fade-out duration
    }, cycleInterval);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden flex items-center justify-center">
      {/* Background Slideshow */}
      <div className="absolute inset-0 w-full h-full flex items-center justify-center">
        {slides.map((slide, index) => (
          <img
            key={index}
            src={slide.image}
            alt={slide.heading}
            className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-start px-6 md:px-12 lg:px-24 text-white">
        <div
          className={`transition-opacity duration-1000 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold max-w-2xl leading-tight">
            {slides[currentIndex].heading}
          </h1>
          <p className="mt-4 lg:mt-10 text-sm sm:text-lg md:text-xl xl:text-2xl font-bold max-w-2xl">
            {slides[currentIndex].description}
          </p>
          <button className="mt-6 lg:mt-10 px-6 py-2 sm:px-8 sm:py-3 bg-white text-black transition-all duration-300 ease-in-out transform hover:scale-105 rounded-full text-sm sm:text-lg font-semibold shadow-md hover:shadow-lg">
            Learn More
          </button>
          
        </div>
      </div>
    </div>
  );
};

export default ServiceMain;
