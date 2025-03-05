import React from 'react'
import img from '../../assets/Images/Technologies/Computer.jpg'
function Solution() {
  return (
    <div className='w-full overflow-hidden mt-10 lg:mt-20'>
          <div className='w-full flex justify-center'>
                        <div className='w-full lg:w-[80%] '>
                            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
                                <div className='flex justify-center items-center p-4'>
                                    <img src={img} alt="Success" className='w-auto h-full md:h-[70%] max-w-full mx-auto rounded-2xl' />
                                </div>
                                <div className='flex items-center justify-center p-6'>
                                    <div>
                                        <h2 className='text-[#00619F] text-xl md:text-2xl lg:text-5xl font-bold mb-4'>
                                         Outpace Your Competition with Futuristic Solutions
                                        </h2>
                                        <p className='text-[#666666] text-sm lg:text-2xl md:text-base leading-relaxed'>
                                            <span className='text-[#00619F] font-semibold'>Aryu Enterprise</span>  was established in 2016 and incorporated in 2017 by a group of highly skilled people. To assist our clients in building a strong online presence, we provide website development, graphic design, custom software development, digital marketing, and other related services. Our team members are dedicated to providing customized solutions that satisfy our clients expectations and together have more than 15+ years of expertise in their specialized industries.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
    </div>
  )
}

export default Solution