import React from 'react'

function Industry({industry}) {
  
  return (
    <div className="w-full px-4  overflow-hidden ">
      {/* Section Title */}
      <div className="text-center">
        <h2 className=" text-3xl xl:text-5xl font-bold  md:p-2 text-black">
        Industry Use Cases
        </h2>

        {/* <p className="text-2xl font-bold text-gray-600 mt-5">
          The best solutions for your business needs.
        </p> */}
      </div>

      {/* Grid Container */}
      <div className="flex justify-center w-full  p-2 mt-5 lg:mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 rounded-lg w-full lg:w-[80%] mt-5 lg:mt-10">
          {industry.map((value, index) => (
            <div
              key={index}
              className="w-full bg-white p-6   hover:shadow-2xl transition rounded-2xl shadow-lg"
            >
                {/* Icon Section */}
                <div className="w-16 h-16 flex-shrink-0">
                  {/* <img
                    src={value.icon}
                    alt={value.alt}
                    className="h-full w-full"
                  /> */}
                </div>
                {/* Text Section */}
                <div className="flex-1">
                  <h2 className="text-md  md:text-2xl lg:text-2xl xxl:3xl font-bold">
                    {value.heading}
                  </h2>
                  <p className="text-[#585858] text-sm lg:text-lg xxl:text-2xl  mt-5">
                    {value.description}
                  </p>
                </div>
              </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Industry