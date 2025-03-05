import React, { useState, useEffect, useRef } from "react";
import { MdArrowOutward } from "react-icons/md";

function Counter({ value, isVisible }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return; // Start counting only when visible

    let start = 0;
    const duration = 2000; // Animation duration (2 seconds)
    const increment = value / (duration / 50);

    const counter = setInterval(() => {
      start += increment;
      if (start >= value) {
        clearInterval(counter);
        setCount(value);
      } else {
        setCount(Math.ceil(start));
      }
    }, 50);

    return () => clearInterval(counter);
  }, [value, isVisible]);

  return (
    <span className="text-[#FFFFFF]  font-bold text-3xl sm:text-4xl lg:text-5xl">
      {count}+
    </span>
  );
}

function Growing() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setTimeout(() => setIsVisible(false), 2500); // Reset after animation
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div ref={sectionRef} className="w-full bg-custom-gradient y-5 md:py-10 mt-10 lg:mt-20">
      <div className="flex justify-center">
        <div className="w-full lg:w-[80%]  grid sm:grid-cols-1 lg:grid-cols-2 gap-10 p-6 sm:p-10">
          {/* Left Section */}
          <div className="mt-3">
            <p
              className="text-3xl md:text-4xl  font-bold leading-tight 
  bg-[linear-gradient(270deg,#FFFFFF,#B8E4FF)] 
  bg-clip-text text-transparent md:p-1"
            >
              We are growing fast,<br className="hidden sm:block" />
              <span className="block mt-3">so should you</span>
            </p>

            <div className="mt-0 md:mt-10">
              <p className="text-[#FFFFFF]  mt-4 text-lg sm:text-xl font-semibold">
                Because we believe in{" "}
                <span className="font-semibold">#GrowingTogether and</span><br/>
                <span className="font-semibold">#KeepRaisingTheBar</span>
              </p>
              
            </div>

            <div className="mt-8">
              <button className="bg-white text-blue-900 px-6 py-3 font-semibold rounded-full hover:transition  flex items-center justify-center">
                Get in Touch
                <MdArrowOutward className="ml-2 text-xl" />
              </button>
              
            </div>
          </div>

          {/* Right Section - Counters */}
          <div className="grid grid-cols-2 gap-6">
            {[
              { value: 100, text: "Projects Completed" },
              { value: 25, text: "Years of Experience" },
              { value: 15, text: "Professional Team Members" },
              { value: 500, text: "Fortune companies put trust in check" },
            ].map((item, index) => (
              <div key={index} className="border-t-2 border-[#00B5FF] p-4">
                <Counter value={item.value} isVisible={isVisible} />
                <div className="flex items-center mt-2">
                  <div className="w-[80%]">
                    <p className="text-[#FFFFFF] text-md lg:text-xl">
                      {item.text}
                    </p>
                  </div>
                  <div className="w-[20%]">
                    <MdArrowOutward className="ml-2 text-5xl text-[#00B5FF]" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Growing;
