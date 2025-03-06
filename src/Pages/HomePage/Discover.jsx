import React from "react";
import gif from "../../assets/Images/Homepage/Discover/gif.gif";
import t1 from "../../assets/Images/Homepage/Discover/DevOps Services - Aryu Technologies.png";
import t2 from "../../assets/Images/Homepage/Discover/Robotic Process Automation  Development Services - Aryu Technologies.jpg";
import t3 from "../../assets/Images/Homepage/Discover/VR & AR Development Services - Aryu Technologies.png";
import t4 from "../../assets/Images/Homepage/Discover/Blockchain Development Services - Aryu Technologies.png";
import t5 from "../../assets/Images/Homepage/Discover/Data Analytics Services  - Aryu Technologies.png";
import t6 from "../../assets/Images/Homepage/Discover/Cloud Consulting Services  - Aryu Technologies.png";
import t7 from "../../assets/Images/Homepage/Discover/CRM & ERP Solution   - Aryu Technologies.png";
import t8 from "../../assets/Images/Homepage/Discover/E-Commerce Services - Aryu Technologies.png";

function Discover() {
  const imageData = [
    {
      imageSrc: t1,
      title: "DevOps",
      hoverText: "Quickly Gain DevOps Experience",
      link: "/devops-services",
    },
    {
      imageSrc: t2,
      title: "Robotic Process Automation",
      hoverText: "Smart Automation Changes Business",
      link: "/rpa-development-services",
    },
    {
      imageSrc: t3,
      title: "VR & AR",
      hoverText: "Build Powerful Virtual Experience",
      link: "/vr-ar-development-services",
    },
    {
      imageSrc: t4,
      title: "Blockchain Development",
      hoverText: "Secure Transactions on Blockchain",
      link: "/blockchain-development-services",
    },
    {
      imageSrc: t5,
      title: "Data and Analytics",
      hoverText: "Planned, Informative, and Perceptive",
      link: "/data-analytics-services",
    },
    {
      imageSrc: t6,
      title: "Cloud Services",
      hoverText: "Simple, safe, and quick cloud transfer",
      link: "/cloud-consulting-services",
    },
    {
      imageSrc: t7,
      title: "CRM & ERP",
      hoverText: "Smart automation changes business",
      link: "/ai-and-ml-services",
    },
    {
      imageSrc: t8,
      title: "E-Commerce",
      hoverText: "Increase your online visibility",
      link: "/ecommerce-services",
    },
  ];

  return (
    <div className="w-full mt-10">
      {/* GIF Section */}
      <div className="flex justify-center">
        <img src={gif} alt="Aryu Technologies Robot" className="w-20 lg:w-40 xl:w-50" />
      </div>

      {/* Intro Section */}
      <div className="flex justify-center px-4">
        <div className="max-w-3xl text-center">
          <p className="text-lg lg:text-xl xxl:text-2xl font-semibold text-gray-700">
            Your partner for digital business and technology services,
            transforming businesses with innovative solutions. As a leading
            business transformation company, we turn your vision into reality
            and drive growth.
          </p>
        </div>
      </div>

      {/* Grid Section */}
      <div className="container mx-auto mt-10">
        <h2 className="text-center text-3xl lg:text-4xl xxl:text-5xl font-bold text-gray-600 mb-6">
          DISCOVER OUR SERVICES
        </h2>

        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-6 lg:gap-10 mt-10 lg:mt-16 px-4">
            {imageData.map((item, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-lg shadow-lg w-full max-w-xs h-96 mx-auto"
              >
                {/* Background Image with Blur Effect on Hover */}
                <div className="w-full h-full overflow-hidden">
                  <img
                    src={item.imageSrc}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-200 group-hover:blur-md"
                  />
                </div>

                {/* Title Always Visible */}
                <div className="absolute top-3 left-3 text-white text-xl lg:text-2xl font-bold  bg-opacity-60 px-3 py-1 rounded-md">
                  {item.title}
                </div>

                {/* Hover Text - Left to Right Transition */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-white text-lg font-semibold  bg-opacity-70 px-4 py-2 rounded-md opacity-0 translate-x-[-100%] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-in-out">
                    {item.hoverText}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Discover;
