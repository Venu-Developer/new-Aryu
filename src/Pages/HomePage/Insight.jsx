import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { MdOutlineArrowOutward } from "react-icons/md";

function Insight() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(
      "https://blog.aryutechnologies.com/wp-json/wp/v2/posts?per_page=5&_embed=true"
    )
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error("Error fetching posts:", error));
  }, []);

  return (
    <div className="w-full max-w-5xl mx-auto mt-10 lg:mt-20">
      {/* Heading */}
      <h2 className="text-xl lg:text-4xl xxl:text-5xl font-bold bg-text-heading bg-clip-text text-transparent p-2 text-center lg:mb-10">
        INSIGHTS
      </h2>

      {/* Swiper Slider */}
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="w-full"
      >
        {posts.map((post) => (
          <SwiperSlide key={post.id}>
            <div className="border rounded-md shadow-md bg-white group overflow-hidden transition-all duration-300">
              
              {/* Image with Hover Effect */}
              <div className="relative group overflow-hidden rounded-t-md">
                {post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ? (
                  <img
                    src={post._embedded["wp:featuredmedia"][0].source_url}
                    alt={post.title.rendered}
                    className="w-full h-48 object-cover rounded-t-md transition-transform duration-500 ease-in-out transform group-hover:scale-110"
                  />
                ) : (
                  <div className="w-full h-48 bg-gray-300 flex items-center justify-center rounded-md">
                    No Image
                  </div>
                )}
                
                {/* Overlay Effect on Hover */}
                <div className="absolute inset-0 bg-black bg-opacity-0 transition-all duration-500 group-hover:bg-opacity-40"></div>
              </div>

              {/* Content */}
              <div className="p-4">
                {/* Post Title */}
                <h3 className="text-sm font-bold text-[#333333]">
                  {post.title.rendered}
                </h3>

                {/* Read More Section */}
                <div className="flex justify-between items-center mt-3 text-xs">
                  <div className="border border-[#004496] p-1 rounded-md transition-all duration-300 group-hover:bg-[#004496]">
                    <a
                      href={post.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-[#004496] font-medium transition-colors duration-300 group-hover:text-white"
                    >
                      DATA ENGINEERING
                      <MdOutlineArrowOutward className="ml-1 transition-all duration-300 text-[#004496] group-hover:text-white group-hover:rotate-40" />
                    </a>
                  </div>
                  <div className="border border-[#004496] p-1 rounded-md transition-all duration-300 group-hover:bg-[#004496]">
                    <a
                      href={post.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-[#004496] font-medium transition-colors duration-300 group-hover:text-white"
                    >
                      TECHNOLOGY
                      <MdOutlineArrowOutward className="ml-1 transition-all duration-300 text-[#004496] group-hover:text-white group-hover:rotate-40" />
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Insight;
