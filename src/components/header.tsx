import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { FiMenu, FiX, FiChevronDown, FiChevronUp } from "react-icons/fi";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [dropdownTimeout, setDropdownTimeout] = useState<NodeJS.Timeout | null>(
    null
  );
  const [expandedMobileItem, setExpandedMobileItem] = useState<string | null>(
    null
  );

  // Clean up timeout on unmount
  useEffect(() => {
    return () => {
      if (dropdownTimeout) {
        clearTimeout(dropdownTimeout);
      }
    };
  }, [dropdownTimeout]);

  const handleMouseEnter = () => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout);
      setDropdownTimeout(null);
    }
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 200);
    setDropdownTimeout(timeout);
  };

  const toggleMobileDropdown = (itemName: string) => {
    if (expandedMobileItem === itemName) {
      setExpandedMobileItem(null);
    } else {
      setExpandedMobileItem(itemName);
    }
  };

  const churchDropdownItems = [
    {
      title: "Who We Are",
      links: [
        { name: "Our Mission", path: "/our-mission" },
        { name: "Our Values", path: "/our-values" },
        { name: "Our Priorities", path: "/our-priorities" },
        { name: "Our Origin", path: "/our-origin" },
        { name: "Our Legacy", path: "/our-legacy" },
      ],
    },
    {
      title: "Leadership",
      links: [
        { name: "General Overseer", path: "/general-overseer" },
        { name: "Church Leadership", path: "/church-leaders" },
      ],
    },
  ];

  return (
    <header className="w-full bg-[#FDFBFE]">
      {/* Logo & Mobile Menu */}
      <div className="flex justify-between items-center px-4 font-medium md:px-[93px] py-[16px]">
        <div className="hidden md:block text-[#100E22]">
          <Link to="/prayer-request" className="hover:text-lightpurple">
            PRAYER REQUEST
          </Link>{" "}
          |
          <Link to="/our-beliefs" className="hover:text-lightpurple">
            {" "}
            OUR BELIEFS
          </Link>
        </div>
        <div>
     <img src="/BlueLogonoback.png" 
     alt="Church Logo" 
     className="w-[180px] h-[100px]" 
     />
        </div>
        <div className="hidden md:block text-[#100E22]">
          <Link to="#" className="hover:text-lightpurple">
            rPAD
          </Link>{" "}
          |
          <Link to="/login" className="hover:text-lightpurple">
            {" "}
            ADMIN
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#1E1B4B] text-2xl"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Main Navbar */}
      <div className="bg-[#2F2860] hidden md:flex py-2 items-center relative">
        {/* Navigation - Desktop */}
        <nav className="hidden md:flex flex-1 justify-center items-center space-x-6 lg:space-x-10 text-sm font-semibold">
          {[
            { name: "HOME", path: "/" },
            { name: "THE CHURCH", path: "/", hasDropdown: true },
            { name: "MINISTRIES", path: "/ministries" },
            { name: "RESOURCES", path: "/resources" },
            { name: "EVENTS", path: "/events" },
            { name: "CONTACT", path: "/contact" },
          ].map((link) => (
            <div
              key={link.name}
              className="relative group"
              onMouseEnter={link.hasDropdown ? handleMouseEnter : undefined}
              onMouseLeave={link.hasDropdown ? handleMouseLeave : undefined}
            >
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `relative pb-2 ${
                    isActive
                      ? "border-b-2 border-white text-white"
                      : "text-[#FDFBFE]"
                  }`
                }
              >
                {link.name}
              </NavLink>

              {link.hasDropdown && isDropdownOpen && (
                <div
                  className="absolute left-0 top-8 bg-white shadow-lg rounded-md w-[280px] lg:w-[500px] p-4 text-[#595859] z-50"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    {churchDropdownItems.map((section, index) => (
                      <div key={index} className="flex flex-col space-y-2">
                        <h4 className="text-lg font-semibold text-gray-800">
                          {section.title}
                        </h4>
                        {section.links.map((item) => (
                          <NavLink
                            key={item.name}
                            to={item.path}
                            className="hover:text-[#2F2860]"
                          >
                            {item.name}
                          </NavLink>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Donate Button (Right Aligned) */}
        <div className="hidden md:block pr-[93px]">
          <NavLink
            to="/donate"
            className="bg-gray-200 text-gray-900 px-4 py-1 rounded-md text-sm"
          >
            DONATE
          </NavLink>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#2F2860] text-white px-4 py-4 flex flex-col space-y-4">
          {[
            { name: "HOME", path: "/" },
            {
              name: "THE CHURCH",
              path: "/",
              hasDropdown: true,
              dropdownItems: churchDropdownItems,
            },
            { name: "MINISTRIES", path: "/ministries" },
            { name: "RESOURCES", path: "/resources" },
            { name: "EVENTS", path: "/events" },
            { name: "CONTACT", path: "/contact" },
          ].map((link) => (
            <div key={link.name} className="flex flex-col">
              <div className="flex items-center justify-between">
                <NavLink
                  to={link.path}
                  className="text-white hover:underline"
                  onClick={() => {
                    if (!link.hasDropdown) {
                      setIsMobileMenuOpen(false);
                    }
                  }}
                >
                  {link.name}
                </NavLink>
                {link.hasDropdown && (
                  <button
                    onClick={() => toggleMobileDropdown(link.name)}
                    className="text-white p-2"
                  >
                    {expandedMobileItem === link.name ? (
                      <FiChevronUp />
                    ) : (
                      <FiChevronDown />
                    )}
                  </button>
                )}
              </div>

              {link.hasDropdown && expandedMobileItem === link.name && (
                <div className="ml-4 mt-2 flex flex-col space-y-3">
                  {link.dropdownItems.map((section, index) => (
                    <div key={index}>
                      <h4 className="font-semibold text-white/80">
                        {section.title}
                      </h4>
                      <div className="ml-2 mt-1 flex flex-col space-y-2">
                        {section.links.map((item) => (
                          <NavLink
                            key={item.name}
                            to={item.path}
                            className="text-white/70 hover:text-white"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {item.name}
                          </NavLink>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
          <NavLink
            to="/donate"
            className="bg-gray-200 text-gray-900 px-4 py-2 rounded-md text-sm"
          >
            DONATE
          </NavLink>
        </div>
      )}
    </header>
  );
};
export default Header;
