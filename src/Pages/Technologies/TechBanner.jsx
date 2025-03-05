import React from 'react';
import gif from '../../assets/Images/Technologies/Technologies.gif';

const TechBanner = () => {
  return (
    <div className="overflow-hidden w-full">
      <div className="relative w-full min-h-[50vh] flex flex-col items-center justify-center bg-black text-white">
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Content */}
        <div className="relative z-10 text-center px-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 text-white">
            Digital Transformation with Aryu Technology
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl max-w-xl mx-auto text-white mt-5">
            Aryu Technology makes digital transformation. Your vision with our technology will shape the success of tomorrow.
          </p>
        </div>

        {/* Background GIF */}
        <img 
          src={gif} 
          alt="Digital Transformation with Aryu Technology" 
          className="absolute inset-0 w-full h-[50vh] object-cover opacity-40" 
        />
      </div>
    </div>
  );
};

export default TechBanner;
