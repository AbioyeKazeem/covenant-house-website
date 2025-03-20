import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full border-b border-gray-300 bg-gray-100">
      {/* Top Bar */}
      <div className="flex justify-between items-center  py-2 text-xs font-semibold text-[#000000] border-[#2F2860] border-b-2">
        <div className="pl-[93px]">PRAYER REQUEST | OUR BELIEFS</div>
      </div>

      {/* Logo & Right Text */}
      <div className="flex justify-between items-center px-[93px] py-[16px]">
        <div>
          <img src="/logo.png" alt="Church Logo" />
        </div>
        <div className="text-[#100E22]">rPAD | IN THE COMMUNITY</div>
      </div>

      {/* Main Navbar */}
      <div className="bg-[#1E1B4B]  py-2 flex items-center">
        {/* Centered Navigation Links */}
        <nav className="flex-1 flex justify-center items-center space-x-8  text-sm font-semibold">
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
          ))}
        </nav>

        {/* Donate Button (Right Aligned) */}
        <div className="pr-[93px]">
          <button className="bg-gray-200 text-gray-900 px-4 py-1 rounded-md text-sm">
            DONATE
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
