import React from "react";
import flyingrobot from "../assets/Images/flyingrobot.gif";

function ContactUs() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!");
  };

  return (
    <div className="w-full overflow-hidden py-10 ">
      <div className="flex justify-center items-center w-[90%] lg:w-[80%] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left Section */}
          <div className="space-y-6">
            <div className="leading-tight">
              {/* Flex container to align text & image */}
              <div className="flex items-end">
                {/* Text (40% width) */}

                <p className="bg-contact-background bg-clip-text text-transparent p-2 text-2xl lg:text-4xl  font-[700]">
                  Let’s Work
                </p>
                <img
                  src={flyingrobot}
                  alt="Flying Robot"
                  className="w-full max-w-[150px] md:max-w-[250px] h-auto"
                />
              </div>

              {/* "Together" text without extra spacing */}
              <p className="bg-contact-background bg-clip-text text-transparent font-[700] text-5xl lg:text-7xl p-2">
                Together
              </p>
            </div>

            {/* Paragraph text */}
            <p className="text-[#333333] text-lg sm:text-xl font-[500]">
              We offer full-cycle technology solutions that streamline your
              digital transformation journey. With leading-edge technical
              expertise, we simplify complex business challenges with innovative
              solutions for rapidly growing enterprises.
            </p>
          </div>

          {/* Right Section - Contact Form */}
          <div className=" p-6 rounded-3xl shadow-2xl w-full max-w-lg mx-auto mt-10 r border border-lg">
            <div className="text-center text-3xl lg:text-4xl font-bold mb-6 bg-[#FFFFFF] ">
              <p className="text-[#00619F]">Contact Us</p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-3 border border-[#C9D6E1] rounded-full bg-[#F4F8FA]   focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 border border-[#C9D6E1] rounded-full bg-[#F4F8FA]   focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full p-3 border border-[#C9D6E1] rounded-full bg-[#F4F8FA]  focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <textarea
                placeholder="Message"
                className="w-full p-3 border border-[#C9D6E1] rounded-3xl bg-[#F4F8FA]  h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <button
                type="submit"
                className="bg-[#00619F] hover:bg-blue-700 transition-all  duration-300 text-white font-semibold py-3 px-10 rounded-full"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
