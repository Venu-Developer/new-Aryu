import React from 'react';
import gif1 from '../../assets/Images/Technologies/Blockchain.gif';
import gif2 from '../../assets/Images/Technologies/touch-screen.gif';
import gif3 from '../../assets/Images/Technologies/Ai.gif';
import gif4 from '../../assets/Images/Technologies/Robot.gif';
import gif5 from '../../assets/Images/Technologies/Cloud.gif';
import gif6 from '../../assets/Images/Technologies/Management.gif';
import arrow from '../../assets/Images/Technologies/Vector.png';

function TechCards() {
  const TechDetails = [
    {
      icon: gif1,
      title: "Blockchain",
      description: "Blockchain is no longer just a technology; it is a revolution that is picking up momentum. It is being implemented across an array of industries with outstanding results. Blockchain helps businesses simplify and streamline processes for keeping up with the speed of business, transparency, reduced costs, and the traceability of data shared across business networks."
    },
    {
      icon: gif2,
      title: "Mobility",
      description: "With the mobile user base touching new peaks every day, businesses no longer wish to miss out on leveraging this medium and translating it into growth. As the end-customer turns more mobile, businesses will have to work on improving mobility-based accessibility. Develop engaging applications that operate on multiple operating systems and devices and integrate with your business’s digital framework."
    },
    {
      icon: gif3,
      title: "Business Intelligence",
      description: "Business Intelligence (BI) empowers businesses to stay a step ahead of their competition by retrieving, analyzing, transforming, and reporting business decisions against data. The meaningful insights obtained through this succession of actions must be available over a unified dashboard so that these critical decisions can be taken in real-time to maintain an edge or adapt to changing conditions."
    },
    {
      icon: gif4,
      title: "Robotic Process Automation",
      description: "Modern-day robots are highly capable and can autonomously perform a wide range of actions, from capturing data to processing it to derive useful insights. Robotic Process Automation (RPA) harnesses this quality and allows businesses to build and deploy solutions that can perform routine and rule-based activities without trading off the quality and the time required."
    },
    {
      icon: gif5,
      title: "Open Source",
      description: "Cloud technology is offering a quicker, economical, and low-maintenance alternative to on-premise solutions. At the same time, it can scale in real-time and maintain performance, security, and reliability while handling enterprise data. Migrate your complete stack to the cloud and embrace an ecosystem of continuous development and continuous improvement. Pick a type and model that suits your business needs."
    },
    {
      icon: gif6,
      title: "Microsoft",
      description: "Content Management Systems (CMS) are empowering businesses to take the reign of establishing their digital presence. However, after a point, the scalability of the system and its data organization capabilities are bound to pose a limitation to growth. Develop a hands-on approach to managing data effectively and capitalize on customer engagement and business outcome opportunities."
    },
    {
        icon: gif5,
        title: "Open Source",
        description:"Cloud technology is offering a quicker, economical, and low-maintenance alternative to on-premise solutions. At the same time, it can scale in real-time and maintain performance, security, and reliability while handling enterprise data. Migrate your complete stack to the cloud and embrace an ecosystem of continuous development and continuous improvement. Pick a type and model that suits your business needs."
    },
    {
        icon: gif5,
    title: "Open Source",
    description:"Cloud technology is offering a quicker, economical, and low-maintenance alternative to on-premise solutions. At the same time, it can scale in real-time and maintain performance, security, and reliability while handling enterprise data. Migrate your complete stack to the cloud and embrace an ecosystem of continuous development and continuous improvement. Pick a type and model that suits your business needs."
    }
  ];

  return (
    <div className="w-full overflow-hidden px-4 py-8">
      <div className="w-full max-w-6xl mx-auto">
        <h2 className="text-[#00619F] text-2xl lg:text-4xl xxl:text-5xl font-bold text-center mb-8 md:mt-10">
          Maintain a Competitive Edge Leveraging the Possibilities
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {TechDetails.map((value, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-6 text-center">
              <img src={value.icon} alt={value.title} className="w-24 h-24 mx-auto mb-4" />
              <h3 className="text-lg lg:text-2xl font-bold text-[#000000]">{value.title}</h3>
              <p className="text-sm lg:text-xl text-gray-600 mt-2">{value.description}</p>
              <div className="flex justify-center mt-4">
                <img src={arrow} alt="arrow" className="w-6 h-6" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TechCards;
