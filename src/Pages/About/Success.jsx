import React from 'react';
import img from '../../assets/Images/AboutPage/GroupofSuccess.jpg';
import img1 from '../../assets/Images/AboutPage/friends.jpg'

function Success() {
    const details = [
        { number: "01", heading: "Timely Delivery", description: "We are aware of how essential your time is, we guarantee delivery in accordance with your needs." },
        { number: "02", heading: "Satisfying Client Needs", description: "Client satisfaction is our top priority, and we go above and beyond to fulfill their requests." },
        { number: "03", heading: "100% Quality", description: "We wouldn't sacrifice quality of work for the sake of the volume of work." },
        { number: "04", heading: "Positive ROI", description: "You hope to make a profit when you invest. The returns on your investment are positive." }
    ];

    return (
        <div className='w-full overflow-hidden px-4 py-8'>
            <div className='w-full flex justify-center '>
                <div className='w-full lg:w-[80%]'>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
                        <div className='flex justify-center items-center p-4'>
                            <img src={img} alt="Success" className='w-auto h-full md:h-[70%] max-w-full mx-auto rounded-2xl' />
                        </div>
                        <div className='flex items-center justify-center p-6'>
                            <div>
                                <h2 className='text-[#00619F] text-xl md:text-2xl lg:text-5xl font-bold mb-4'>
                                    Perseverance and passion is what gives us success.
                                </h2>
                                <p className='text-[#666666] text-sm lg:text-2xl md:text-base leading-relaxed'>
                                    <span className='text-[#00619F] font-semibold'>Aryu Enterprise</span> was established in 2016 and incorporated in 2017 by a group of highly skilled people. To assist our clients in building a strong online presence, we provide website development, graphic design, custom software development, digital marketing, and other related services. Our team members are dedicated to providing customized solutions that satisfy our clients' expectations and together have more than 15+ years of expertise in their specialized industries.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*  */}
            <div className='w-full bg-[#00B3F40D] py-8 lg:mt-10'>
                <div className='flex justify-center items-center'>
                    <div className='w-full lg:w-[80%]  grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 md:gap-6 p-4'>
                        {details.map((value, index) => (
                            <div key={index} className='hover:bg-white p-6 rounded-lg hover:shadow-md '>
                                <p className='text-[#00619F] text-2xl  lg:text-5xl font-bold'>{value.number}</p>
                                <h3 className='text-[#4B4B4B] text-lg lg:text-3xl font-semibold mt-2'>{value.heading}</h3>
                                <p className='text-[#000000] text-sm lg:text-xl mt-1 font-normal'>{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* Why Us */}
            <div className='flex justify-center mt-10 md:mt-20'>
                
                <div className='w-full lg:w-[80%] '>
                    <div className='text-center text-2xl text-[#00619F] lg:text-5xl font-bold'><h2>Why Us</h2></div>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
                       
                        <div className='flex items-center justify-center p-6'>
                            <div>
                                {/* <h2 className='text-[#00619F] text-xl md:text-2xl lg:text-2xl font-bold mb-4'>
                                    Perseverance and passion is what gives us success.
                                </h2> */}
                                <p className='text-[#666666] text-sm lg:text-2xl md:text-base leading-relaxed'>
                                    <span className='text-[#00619F] font-semibold'>We take care of anything and everything you require to advance your company. We strive to work closely with our clients and involve them in the process with our wide range of services, so that you are always aware of what we’re doing as well. After watching you continue to develop, developing an emotional connection with the customer will always be our first goal.</span>
                                </p>
                            </div>
                        </div>
                        <div className='flex justify-center items-center p-4'>
                            <img src={img1} alt="Success" className='w-auto h-full md:h-[70%] max-w-full mx-auto rounded-2xl' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Success;