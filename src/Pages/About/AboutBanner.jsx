import React, { useState, useEffect } from 'react';
import gif from '../../assets/Images/AboutPage/about.gif'
const TypingAnimation = ({ text }) => {
  const [typedText, setTypedText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (index < text.length) {
        setTypedText(prevTypedText => prevTypedText + text[index]);
        setIndex(prevIndex => prevIndex + 1);
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [index, text]);

  return <>{typedText}</>;
};
function AboutBanner() {
  return (
    <div className='overflow-hidden w-100vw '>
        <div className="relative w-full min-h-[70vh] flex flex-col items-center justify-center bg-black text-white">
    <div className="absolute inset-0 bg-black opacity-50"></div>
    <div className="relative z-10 text-center px-4">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 text-[#FFFFFF]">
        <TypingAnimation text="GET A GLIMPSE OF" />
      </h1>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-[#00B3F4]">
        <TypingAnimation text="ARYU TECHNOLOGIES" />
      </h2>
      <p className="text-sm sm:text-base md:text-lg lg:text-xl max-w-xl mx-auto text-[#FFFFFF]">
        A bunch of curious and ambitious minds teamed up to deliver the best technological and digital solutions.
      </p>
    </div>
    <img 
      src={gif} 
      alt="GET A GLIMPSE OF ARYU TECHNOLOGIES" 
      className="absolute inset-0 w-full h-[50vh] object-cover opacity-40" 
    />
  </div>
    </div>
    
  
    );
}

export default AboutBanner