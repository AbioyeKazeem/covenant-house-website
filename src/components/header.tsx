import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [dropdownTimeout, setDropdownTimeout] = useState<NodeJS.Timeout | null>(
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

  return (
    <header className="w-full bg-[#FDFBFE]">
      {/* Logo & Mobile Menu */}
      <div className="flex justify-between items-center px-4 font-medium md:px-[93px] py-[16px]">
        <div className="hidden md:block text-[#100E22]">
          <Link to="prayer-request" className="hover:text-lightpurple">
            PRAYER REQUEST
          </Link>{" "}
          |
          <Link to="#" className="hover:text-lightpurple">
            {" "}
            OUR BELIEFS
          </Link>
        </div>
        <div>
          <img src="/logo.png" alt="Church Logo" className="" />
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
            { name: "THE CHURCH", path: "/church", hasDropdown: true },
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
                    <div className="flex flex-col space-y-2">
                      <h4 className="text-lg font-semibold text-gray-800">
                        Who We Are
                      </h4>
                      <NavLink
                        to="/our-mission"
                        className="hover:text-[#2F2860]"
                      >
                        Our Mission
                      </NavLink>
                      <NavLink
                        to="/our-values"
                        className="hover:text-[#2F2860]"
                      >
                        Our Values
                      </NavLink>
                      <NavLink
                        to="/our-priorities"
                        className="hover:text-[#2F2860]"
                      >
                        Our Priorities
                      </NavLink>
                      <NavLink
                        to="/our-origin"
                        className="hover:text-[#2F2860]"
                      >
                        Our Origin
                      </NavLink>
                      <NavLink
                        to="/our-legacy"
                        className="hover:text-[#2F2860]"
                      >
                        Our Legacy
                      </NavLink>
                    </div>
                    <div className="flex flex-col space-y-2">
                      <h4 className="font-semibold text-lg text-gray-800">
                        Leadership
                      </h4>
                      <NavLink
                        to="/general-overseer"
                        className="hover:text-[#2F2860]"
                      >
                        General Overseer
                      </NavLink>
                      <NavLink
                        to="/continental"
                        className="hover:text-[#2F2860]"
                      >
                        Church Leadership
                      </NavLink>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Donate Button (Right Aligned) */}
        <div className="hidden md:block pr-[93px]">
          <button className="bg-gray-200 text-gray-900 px-4 py-1 rounded-md text-sm">
            DONATE
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#2F2860] text-white px-4 py-4 flex flex-col space-y-4">
          {[
            { name: "HOME", path: "/" },
            { name: "THE CHURCH", path: "/church" },
            { name: "MINISTRIES", path: "/ministries" },
            { name: "RESOURCES", path: "/resources" },
            { name: "EVENTS", path: "/events" },
            { name: "CONTACT", path: "/contact" },
          ].map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className="text-white hover:underline"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </NavLink>
          ))}
          <button className="bg-gray-200 text-gray-900 px-4 py-2 rounded-md text-sm">
            DONATE
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
