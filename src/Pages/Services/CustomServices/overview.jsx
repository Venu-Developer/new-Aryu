import React from "react";
// import img1 from "../../../assets/Images/Services/webDevelopment.gif";
import img1 from "../../../assets/Images/Services/Webdevelopment/webDevelopment.gif";

function Overview({overview}) {
  console.log("hello",overview);
  return (
    <div className="w-full  overflow-hidden px-4 py-8 ">
      <div className="flex justify-center">
      <div className="w-full lg:w-[90%] grid grid-cols-1 lg:grid-cols-2 gap-16 items-center md:p-2">
        {overview.map((value, index) => (
          <React.Fragment key={index}>
            {/* Left Section - Image */}
            <div className="relative flex justify-center  h-full w-full ">
              <div className="w-[25%] md:w-[40%] lg:w-[30%] relative">
                <div className=" w-[70%] lg:w-[90%] h-[40%] bg-[#CCE9FF] absolute right-5  rounded-lg"></div>
                <div className=" w-[35%] lg:w-[50%] h-[25%] bg-[#CCE9FF]   absolute top-[44%] right-5 rounded-lg"></div>
              </div>
              <div className="w-[60%] h-[30vh] md:h-auto ">
                <img
                  src={value.img}
                  alt="Web Development"
                  className=" w-full h-[100%] rounded-lg shadow-lg "
                />
              </div>
            </div>

            {/* Right Section - Text Content */}
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl xxl:text-5xl font-bold text-gray-700">
                {value.header}
              </h2>
              <p className="text-xl lg:text-xl xl:text-2xl  font-bold text-[#00619F] ">
                {value.headerdis}
              </p>
              <div className="text-sm lg:text-md xl:text-xl text-gray-600 space-y-4">
                <p className="text-sm lg:text-md xl:text-xl">{value.des1}</p>
                <p className="text-sm lg:text-md xl:text-xl">{value.des2}</p>
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>

      </div>
     
    </div>
  );
}

export default Overview;
