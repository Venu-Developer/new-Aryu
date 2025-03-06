import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";
import { RiDoubleQuotesL } from "react-icons/ri";
import "swiper/css";
import "swiper/css/effect-coverflow";

const Client = () => {
  const clients = [
    {
      des: "“I recently partnered with Aryu Enterprises for custom software development, and I'm thoroughly impressed. Their team is professional, responsive, and skilled, delivering top-notch solutions tailored to our business needs...”",
      name: "Pradeep Subramani",
    },
    {
      des: "A very talented, family-owned, web development company. Would gladly work with again.",
      name: "Aaron Sakhai",
    },
    {
      des: "Their service was exceptional, and they delivered beyond expectations. Highly recommended!",
      name: "John Doe",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#01000c] px-4">
      <h1 className="text-white text-4xl md:text-5xl font-bold mb-12 text-center">
        What Our Clients Say
      </h1>

      <div className="w-full max-w-4xl">
        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView="auto"
          coverflowEffect={{
            rotate: 15,
            stretch: 0,
            depth: 200,
            modifier: 1,
            slideShadows: true,
          }}
          loop={true}
          modules={[EffectCoverflow]}
          className="w-full"
        >
          {clients.map((client, index) => (
            <SwiperSlide key={index} className="w-[250px]">
              <div className="border rounded-xl shadow-lg bg-white p-6 text-center transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                <div className="text-blue-500 text-4xl mb-4 flex justify-center">
                  <RiDoubleQuotesL />
                </div>
                <p className="text-gray-700 italic">{client.des}</p>
                <p className="mt-4 font-bold text-gray-900">{client.name}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Client;
