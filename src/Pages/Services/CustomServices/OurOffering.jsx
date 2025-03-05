import React from "react";

function OurOffering({ourOfferings}) {
  

  return (
    <div className="w-full overflow-hidden py-8 px-4">
        <h2 className="text-2xl lg:text-4xl xl:text-5xl text-[#00619F] font-bold text-center ">Our Offerings</h2>
      <div className="flex justify-center">
        
        <div className="w-full lg:w-[80%] grid grid-cols-1 lg:grid-cols-3 xl:grid-flow-col-3 gap-8 mt-10 lg:mt-20">
          {ourOfferings.map((value, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-lg border border-gray-200">
              <h2 className="text-xl lg:text-2xl xxl:text-3xl font-semibold text-black text-bold">{value.head}</h2>
              <p className="text-gray-600 mt-3 lg:mt-5 lg:text-xl xxl:text-2xl">{value.des}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OurOffering;
