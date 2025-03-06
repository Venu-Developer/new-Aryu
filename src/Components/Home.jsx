import React, { useEffect, useState } from 'react'
import Mainpage from '../Pages/HomePage/Mainpage'
import Discover from '../Pages/HomePage/Discover'
import Choose from '../Pages/HomePage/Choose'
import Global from '../Pages/HomePage/Global'
import Growing from '../Pages/HomePage/Growing'
import Logoslider from '../Pages/HomePage/Logoslider'
import RollingGallery from '../Pages/HomePage/porfolio'
import ContactUs from '../Pages/ContactUs'
import Insight from '../Pages/HomePage/Insight'
import Client from '../Pages/HomePage/Client'


function Home() {
 

  return (
    <div className=''>
        <Mainpage/>
        {/* <Logoslider/> */}
        <Discover/>
        <Growing/>
        <Choose/>
        <Global/>
        <Client/>
        <Insight/>
        <div className='mt-10 md:mt-15 '>
            <div className='mb-15'><h2 className='text-center text-3xl lg:text-4xl  xl:text-5xl font-bold mt-2 bg-text-heading bg-clip-text text-transparent p-2'>Porfolio</h2></div>
        <RollingGallery autoplay={true} pauseOnHover={false}  />
        </div>
        
        <ContactUs/>
    </div>
  )
}

export default Home