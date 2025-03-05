import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { MdArrowOutward } from "react-icons/md";
import { IoIosArrowRoundForward } from "react-icons/io";
import aryulogo from "../assets/Images/AryuTechnologies.png";
import aryulogoblack from "../assets/Images/AryuTechnologiesLogo.png";

export default function Navbar() {
  const location = useLocation();
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { menu: "Home", path: "/" },
    { menu: "About", path: "/about" },
    { menu: "Services", path: "/services" },
    { menu: "Technologies", path: "/technologies" },
    { menu: "Our Team", path: "/our-team" },
    { menu: "Our Work", path: "/our-work" },
    { menu: "Blog", path: "/blog" },
  ];

  const services = [
    {
      title: "Web & Mobile Development",
      links: [
        { name: "Web Development", path: "/services/web-development" },
        { name: "Mobile Application", path: "/services/mobile-application" },
        {
          name: "Low Code Application Development",
          path: "/services/low-code",
        },
      ],
    },
    {
      title: "AI, Data & Automation",
      links: [
        { name: "AI & ML Services", path: "/services/ai-ml" },
        { name: "RPA Development Service", path: "/services/rpa" },
        { name: "Data Analytics", path: "/services/data-analytics" },
      ],
    },
    {
      title: "Cloud & Infrastructure",
      links: [
        {
          name: "Cloud Consulting Service",
          path: "/services/cloud-consulting",
        },
        { name: "DevOps", path: "/services/devops" },
      ],
    },
    {
      title: "Product Engineering & E-Commerce",
      links: [
        {
          name: "Product Engineering Service",
          path: "/services/product-engineering",
        },
        { name: "E-Commerce Service", path: "/services/ecommerce" },
      ],
    },
    {
      title: "Business & IT Leadership",
      links: [
        { name: "Virtual CTO", path: "/services/virtual-cto" },
        { name: "IT Staffing", path: "/services/it-staffing" },
      ],
    },
    {
      title: "Design & Digital Marketing",
      links: [
        { name: "Designing Service", path: "/services/designing" },
        { name: "Digital Marketing", path: "/services/digital-marketing" },
      ],
    },
    {
      title: "Advanced Technologies & Testing",
      links: [
        {
          name: "Blockchain Development Service",
          path: "/services/blockchain",
        },
        { name: "VR/AR Development Service", path: "/services/vr-ar" },
        { name: "QA and Testing", path: "/services/qa-testing" },
      ],
    },
  ];

  return (
    <nav
      className={`z-30 fixed top-0 left-0 w-full transition-all duration-300 ${
        scrolling ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center px-6 py-4 w-full">
        {/* Logo */}
        {scrolling ? (
          <Link to="/" className="flex items-center">
            <img
              src={aryulogoblack}
              alt="ARYU Technologies logo with a stylized blue 'A' design on a black background
"
              className="h-10"
            />
          </Link>
        ) : (
          <Link to="/" className="flex items-center">
            <img
              src={aryulogo}
              alt="ARYU Technologies logo with a stylized blue 'A' design on a black background
"
              className="h-10"
            />
          </Link>
        )}

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((item, index) =>
            item.menu === "Services" ? (
              <div key={index} className="group ">
                <button
                  className={`transition duration-300 ${
                    scrolling
                      ? "text-black hover:text-blue-500"
                      : "text-white hover:text-blue-300"
                  }`}
                >
                  Services
                </button>
                <div className="absolute left-0 mt-6 bg-white w-[100vw] shadow-lg border-t border-gray-200 opacity-0 invisible transition-all duration-300 transform scale-95 group-hover:opacity-100 group-hover:visible group-hover:scale-100 grid grid-cols-3 gap-10 p-5 rounded-lg">
                  {services.map((category, catIndex) => (
                    <div key={catIndex} className="space-y-5">
                      <div className="flex items-start ">
                        <div className="flex items-center justify-center border rounded-full border-black h-full p-1">
                          <MdArrowOutward />
                        </div>
                        <div className="ml-3 space-y-2 font-medium">
                          <p className="font-semibold text-gray-900">
                            {category.title}
                          </p>
                          {category.links.map((link, linkIndex) => (
                            <p
                              key={linkIndex}
                              className="flex items-center group/link"
                            >
                              <Link
                                to={link.path}
                                className="hover:text-[#00B3F4] px-2 py-1 rounded flex items-center transition duration-300 font-medium"
                              >
                                {link.name}
                              </Link>
                              <IoIosArrowRoundForward className="group-hover/link:text-[#00B3F4] ml-1 transform transition-transform duration-300 translate-x-0 opacity-0 group-hover/link:translate-x-2 group-hover/link:opacity-100" />
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={index}
                to={item.path}
                className={` py-2 rounded-lg transition duration-300 ${
                  location.pathname === item.path
                    ? "text-blue-500 font-semibold"
                    : scrolling
                    ? "text-black hover:text-blue-500"
                    : "text-white hover:text-blue-300"
                }`}
              >
                {item.menu}
              </Link>
            )
          )}

          {/* Get a Quote Button */}
          <Link to="/contact">
            <button
              className={`px-4 py-2 rounded-lg transition duration-300 font-medium ${
                scrolling
                  ? "bg-blue-500 text-white hover:bg-blue-600"
                  : "bg-white text-black hover:bg-gray-200"
              }`}
            >
              Get a Quote
            </button>
          </Link>
        </div>
        {/* Mobile Menu Button */}
        <button
          className={`md:hidden ${scrolling ? "text-black" : "text-white"}`}
        >
          ☰
        </button>
      </div>
    </nav>
  );
}
