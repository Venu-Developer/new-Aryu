import React from 'react';
import img1 from '../../assets/Images/Technologies/SoftwareDevelopment.jpg';
import img2 from '../../assets/Images/Technologies/sharepoint.png';
import img3 from '../../assets/Images/Technologies/dataanalysts.jpg';

function Insight() {
  const Details = [
    { img: img1, des: ".NET Software Development: A Guide to Choosing the Right .NET Tools" },
    { img: img2, des: "Transform Intranet Experiences With SharePoint Application Development" },
    { img: img3, des: "Data Analytics: Leveraging Insights for Business Growth" }
  ];

  return (
    <div className='w-full  px-4 py-8 overflow-hidden mt-10 lg:mt-20'>
      <h2 className='text-center sm:text-2xl lg:text-4xl xl:text-5xl  font-bold mb-4 text-[#00619F]'>Insights</h2>
      <p className='text-center text-xl md:text-2xl lg:text-3xl text-gray-600 mb-8 font-medium mt-10'>
        Dive deeper into our subject matter expertise to explore new possibilities.
      </p>
      <div className='w-full max-w-6xl mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-32 lg:gap-8'>
          {Details.map((value, index) => (
            <div key={index} className='relative  rounded-lg shadow-lg '>
              <img src={value.img} alt={value.des} className='w-full h-44 object-cover rounded-xl' />
              <div className='text-[#101010] text-sm md:text-lg absolute font-medium bg-white bg-opacity-90 top-[60%] text-center w-[95%] h-32 rounded-xl shadow-md m-2 flex items-center p-2'>
                {value.des}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Insight;
