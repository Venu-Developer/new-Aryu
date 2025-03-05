import React from "react";
import img1 from "../../assets/Images/Homepage/Choose/user.gif";
import img2 from "../../assets/Images/Homepage/Choose/diversity.gif";
import img3 from "../../assets/Images/Homepage/Choose/earth.gif";
import img4 from "../../assets/Images/Homepage/Choose/hourglass.gif";

function Choose() {
  const Details = [
    {
      icon: img1,
      heading: "THE RIGHT PEOPLE",
      description:
        "The appropriate individuals are on my team to provide software creation services.",
      alt: "user",
    },
    {
      icon: img2,
      heading: "THE RIGHT TEAM",
      description:
        "From solo engineers to multi-team engagements. Flexible project management options.",
      alt: "diversity",
    },
    {
      icon: img3,
      heading: "THE RIGHT PLACE",
      description:
        "Our team members will be available with strong communication skills while you're online.",
      alt: "earth",
    },
    {
      icon: img4,
      heading: "THE RIGHT TIME",
      description:
        "Teams that begin as soon as you require them. Easy to scale up or down.",
      alt: "hourglass",
    },
  ];

  return (
    <div className="w-full px-4 py-10 overflow-hidden lg:mt-5">
      {/* Section Title */}
      <div className="text-center">
        <h2 className="text-xl lg:text-4xl xxl:text-5xl font-bold bg-text-heading bg-clip-text text-transparent p-2">
          Why Choose Us?
        </h2>
        <p className="text-lg lg:text-2xl font-bold text-gray-600 mt-5">
          The best solutions for your business needs.
        </p>
      </div>

      {/* Grid Container */}
      <div className="flex justify-center w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-5 lg:gap-8 w-full lg:w-[80%] mt-5 lg:mt-10">
          {Details.map((value, index) => (
            <div
              key={index}
              className="w-full bg-white p-6 rounded-lg transition-all duration-500 ease-in-out hover:shadow-2xl hover:scale-105"
            >
              <div className="flex items-center space-x-4">
                {/* Icon Section */}
                <div className="w-16 h-16 flex-shrink-0">
                  <img
                    src={value.icon}
                    alt={value.alt}
                    className="h-full w-full"
                  />
                </div>

                {/* Text Section */}
                <div className="flex-1">
                  <h2 className="text-xl lg:text-2xl xxl:text-3xl font-bold">{value.heading}</h2>
                  <p className="text-[#585858] text-md lg:text-xl xxl:text-2xl font-semibold mt-5">
                    {value.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Choose;
