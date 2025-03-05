import React from 'react'
import Marquee from "react-fast-marquee";
import img1 from '../../assets/Images/Homepage/LogoSlider/img1.png'
import img2 from '../../assets/Images/Homepage/LogoSlider/img2.png'
function Logoslider() {
    const logoSlider=[
        {
           img:img1,alt:"hello"

        },{
            img:img2,alt:"hello"
 
         },
         {
            img:img1,alt:"hello"
 
         },{
             img:img2,alt:"hello"
  
          }, {
            img:img1,alt:"hello"
 
         },{
             img:img2,alt:"hello"
  
          }, {
            img:img1,alt:"hello"
 
         },{
             img:img2,alt:"hello"
  
          }
    ]
  return (
    <div className=' bg-black p-10'>
        <Marquee
              className="flex justify-between gap-10 [--duration:5s]"
              speed={30}
              gradient={false}
              pauseOnHover={false}
            >
              {logoSlider.map((content, index) => (
                <div key={index} className="flex items-center space-x-5">
                  <img
                    src={content.img}
                    alt={content.alt}
                    className=" ml-20"
                    loading="lazy"
                  />
                  {/* <span>{content.name}</span> */}
                </div>
              ))}
            </Marquee>

    </div>
  )
}

export default Logoslider