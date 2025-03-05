import React, { useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
function Faq({faqData}) {
    // state
  let [CurrentIndex, setCurrentIndex] = useState(false);
  let [open, setOpen] = useState(false);
    console.log("comeing",faqData)
    //onclick events
  function handleClick(index) {
    if (CurrentIndex == index) {
      setOpen(!open);
    } else {
      setOpen(true);
    }
    setCurrentIndex(index);
  }
  return (
    <div>
         <div className="mt-10 md:mt-20  ">
        <div
          whileInView={{ x: 0, opacity: 1 }}
          initial={{ x: -100, opacity: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-center  text-xl sm:text-2xl md:text-3xl font-bold"
        >
          <h1>FAQ's</h1>
        </div>
        <div className="flex justify-center mt-5 md:mt-10">
          <div
            className={`flex flex-col md:flex-row justify-center items-center w-full md:w-3/4 `}
          >
            <div className="w-full md:ps-10 p-5 md:p-0">
              {faqData.map((value, index) => {
                return (
                  <div
                    whileInView={{ y: 0, opacity: 1 }}
                    initial={{ y: -100, opacity: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    key={index}
                    className="  rounded-lg  flex justify-center  
               transition-transform  duration-700 ease-in-out 
                      transform   mt-5 p-5  border border-blue-300"
                  >
                    <div className="w-[90%] ">
                      <div>
                        <p className="text-md lg:text-xl">{value.question}</p>
                      </div>
                      {CurrentIndex == index && open && (
                        <div className="mt-2">
                          <p className={`text-blue-500`}>
                            {value.answer}
                          </p>
                        </div>
                      )}
                    </div>
                    <div className="w-[10%] flex justify-center items-start self-start">
                      {CurrentIndex == index && open ? (
                        <p
                          className={`cursor-pointer border border-blue-500 rounded-full bg-text-blue-500 p-1`}
                          onClick={() => handleClick(index)}
                        >
                          <IoIosArrowDown className="text-blue-500  "/>
                        </p>
                      ) : (
                        <p
                          onClick={() => handleClick(index)}
                          className={`cursor-pointer border border-blue-500 rounded-full  p-1`}
                        >
                          <IoIosArrowForward className={`text-blue-500 `} />
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Faq