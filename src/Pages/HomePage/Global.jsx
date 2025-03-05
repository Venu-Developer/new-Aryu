import React from "react";
import global from "../../assets/Images/Homepage/Global/global.gif";

function Global() {
  return (
    <div className="w-full bg-background-global py-5 md:py-10">
      <div className="flex justify-center">
        <div className="w-full lg:w-[80%] grid grid-cols-1 lg:grid-cols-2 gap-10 px-4 sm:px-10">
          {/* Left Section */}
          <div className="mt-3 sm:mt-5 lg:mt-10 flex justify-center items-center">
            <div>
              <p className="text-white font-semibold text-xl md:text-xl">
                Global Scale
              </p>

              <p
                className="text-2xl lg:text-4xl xxl:text-5xl font-bold leading-tight 
  bg-[linear-gradient(270deg,#FFFFFF,#B8E4FF)] 
  bg-clip-text text-transparent mt-3 sm:mt-3 lg:mt-5 py-2"
              >
                Companies across the globe leverage Aryu’s trusted registry
              </p>

              <p className="text-[#C3CFFF]  text-lg lg:text-xl xxl:text-2xl font-semibold mt-3 sm:mt-5 lg:mt-10">
                Companies across the globe can leverage Aryu's trusted registry
                of 1 billion+ identity tokens to supercharge identity
                verification and authentication. Our global teams are here to
                support you wherever you and your consumers operate.
              </p>
            </div>
          </div>

          {/* Right Section - Image */}
          <div className="flex justify-center">
            <img
              src={global}
              alt="Global Scale"
              className="w-auto max-w-full max-h-full mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Global;
