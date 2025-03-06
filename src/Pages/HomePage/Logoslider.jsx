import React from 'react'
import Marquee from "react-fast-marquee";
import img1 from '../../assets/Images/Homepage/LogoSlider/gadget mart.svg'
import img2 from '../../assets/Images/Homepage/LogoSlider/biokomrtick of texas usa.svg'
import img3 from '../../assets/Images/Homepage/LogoSlider/conversion.svg'
import img4 from '../../assets/Images/Homepage/LogoSlider/skincare-usa.svg'
import img5 from '../../assets/Images/Homepage/LogoSlider/Urbangrid.svg'
function Logoslider() {
    const logoSlider=[
        {
           img:img1,alt:"gadget mart"

        },{
            img:img2,alt:" Logo of Biokosmetik of Texas USA, featuring elegant black uppercase text with a subtle blue underline. Listed under Our Clients by Aryu Technologies"
 
         },
         {
            img:img3,alt:" Logo of Conversion Media Group with CONVERSION in bold red text and MEDIA GROUP in smaller gray text, featuring a red and gray swoosh design. Listed under Our Clients by Aryu Technologies"
 
         },{
             img:img4,alt:"Skincare-USA Logo - Our Clients - Aryu Technologies"
  
          }, {
            img:img5,alt:"Urbangrid"
 
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