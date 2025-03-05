import React from 'react'

function Bussiness({bussiness}) {
    //  const bussiness = [
    //     {
    //     //   icon: img1,
    //       heading: "THE RIGHT PEOPLE",
    //       description:
    //         "The appropriate individuals are on my team to provide software creation services.",
    //       alt: "user",
    //     },
    //     {
    //     //   icon: img2,
    //       heading: "THE RIGHT TEAM",
    //       description:
    //         "From solo engineers to multi-team engagements. Flexible project management options.",
    //       alt: "diversity",
    //     },
    //     {
    //     //   icon: img3,
    //       heading: "THE RIGHT PLACE",
    //       description:
    //         "Our team members will be available with strong communication skills while you're online.",
    //       alt: "earth",
    //     },
    //     {
    //     //   icon: img4,
    //       heading: "THE RIGHT TIME",
    //       description:
    //         "Teams that begin as soon as you require them. Easy to scale up or down.",
    //       alt: "hourglass",
    //     },
    // ]
  return (
    <div className="w-full px-4 py-10 overflow-hidden bg-custom-gradient">
      {/* Section Title */}
      <div className="text-center">
        <h2 className="text-white text-3xl md:text-5xl font-bold  md:p-2">
        Business Benefits
        </h2>

        {/* <p className="text-2xl font-bold text-gray-600 mt-5">
          The best solutions for your business needs.
        </p> */}
      </div>

      {/* Grid Container */}
      <div className="flex justify-center w-full  p-2">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-col-3 xl:grid-cols-4 rounded-    w-full lg:w-[80%] mt-5 lg:mt-10">
          {bussiness.map((value, index) => (
            <div
              key={index}
              className="w-full bg-white p-6   hover:shadow-lg transition border-l-2 border rounded-2xl"
            >
                {/* Icon Section */}
                <div className="w-16 h-16 flex-shrink-0 ">
                  {/* <img
                    src={value.icon}
                    alt={value.alt}
                    className="h-full w-full"
                  /> */}
                </div>
                {/* Text Section */}
                <div className="flex-1 ">
                  <h2 className="text-xl lg:text-2xl xxl:text-3xl font-bold">
                    {value.heading}
                  </h2>
                  <p className="text-[#585858] text-md lg:text-xl xxl:text-2xl  mt-5">
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

export default Bussiness