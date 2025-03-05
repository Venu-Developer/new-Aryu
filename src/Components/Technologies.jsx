import React from 'react'
import TechBanner from '../Pages/Technologies/TechBanner'
import Sloution from '../Pages/Technologies/Solution'
import Insight from '../Pages/Technologies/Insight'
import TechCards from '../Pages/Technologies/TechCards'
function Technologies() {
  return (
    <div className='mt-20'>
        <TechBanner/>
        <Sloution/>
        <Insight/>
        <TechCards/>
    </div>
  )
}

export default Technologies