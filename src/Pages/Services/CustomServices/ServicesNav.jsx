import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

function ServicesNav() {
  const [activeSection, setActiveSection] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const sections = ["overview", "ourofferings", "business-benefits", "industry-use-cases", "faq", "contact-us"];

  // Scroll Listener
  useEffect(() => {
    const handleScroll = () => {
      let currentSection = "";
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            currentSection = section;
          }
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="left-0 w-full bg-white shadow-md z-50 sticky top-0">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-evenly items-center py-4 relative">
          {/* Nav Links */}
          <div className="hidden md:flex space-x-6 relative">
            {sections.map((section) => (
              <Link
                key={section}
                to={section}
                smooth={true}
                duration={500}
                className={`relative cursor-pointer px-4 py-2 text-gray-600 hover:text-[#00619F] transition-all duration-500 ease-in-out p-4  ${
                  activeSection === section ? "text-[#00619F] font-semibold bg-[#00B3F41A] rounded-lg" : ""
                }`}
              >
                {section.replace("-", " ")}
                {/* Underline Animation */}
                {activeSection === section && (
                  <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#00619F] transition-all duration-300"></span>
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden flex flex-col space-y-4 py-4">
            {sections.map((section) => (
              <Link
                key={section}
                to={section}
                smooth={true}
                duration={500}
                className="block text-gray-600 hover:text-[#00619F] text-center"
                onClick={() => setMenuOpen(false)}
              >
                {section.replace("-", " ")}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}

export default ServicesNav;
