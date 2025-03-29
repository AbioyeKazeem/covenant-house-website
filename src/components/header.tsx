// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";

// const Header = () => {
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//   return (
//     <header className="w-full border-gray-300 bg-gray-100">
//       {/* Top Bar */}
//       <div className="flex justify-between items-center py-2 text-xs font-semibold text-[#000000] border-[#2F2860] border-b-2">
//         <div className="pl-[93px]">PRAYER REQUEST | OUR BELIEFS</div>
//       </div>

//       {/* Logo & Right Text */}
//       <div className="flex justify-between items-center px-[93px] py-[16px]">
//         <div>
//           <img src="/logo.png" alt="Church Logo" />
//         </div>
//         <div className="text-[#100E22]">rPAD | IN THE COMMUNITY</div>
//       </div>

//       {/* Main Navbar */}
//       <div className="bg-[#2F2860] py-2 flex items-center relative">
//         {/* Centered Navigation Links */}
//         <nav className="flex-1 flex justify-center items-center space-x-8 text-sm font-semibold">
//           {[
//             { name: "HOME", path: "/" },
//             { name: "THE CHURCH", path: "/church" },
//             { name: "MINISTRIES", path: "/ministries" },
//             { name: "RESOURCES", path: "/resources" },
//             { name: "EVENTS", path: "/events" },
//             { name: "CONTACT", path: "/contact" },
//           ].map((link) => (
//             <div
//               key={link.name}
//               className="relative"
//               onMouseEnter={() =>
//                 link.name === "THE CHURCH" && setIsDropdownOpen(true)
//               }
//               onMouseLeave={() =>
//                 link.name === "THE CHURCH" && setIsDropdownOpen(false)
//               }
//             >
//               <NavLink
//                 to={link.path}
//                 className={({ isActive }) =>
//                   `relative pb-2 ${
//                     isActive
//                       ? "border-b-2 border-white text-white"
//                       : "text-[#FDFBFE]"
//                   }`
//                 }
//               >
//                 {link.name}
//               </NavLink>

//               {/* Dropdown for 'THE CHURCH' */}
//               {link.name === "THE CHURCH" && isDropdownOpen && (
//                 <div className="absolute left-0 top-8 bg-white shadow-lg font-normal font-poppins rounded-md w-[506px] p-4 text-[#595859] z-50">
//                   <div className="grid grid-cols-2 gap-4">
//                     <div className="flex flex-col space-y-3">
//                       <h4 className="text-lg font-semibold">Who We Are</h4>
//                       <NavLink
//                         to="/our-mission"
//                         className="hover:text-[#2F2860]  hover:font-semibold "
//                       >
//                         Our Mission
//                       </NavLink>
//                       <NavLink
//                         to="/values"
//                         className="hover:text-[#2F2860] hover:font-semibold"
//                       >
//                         Our Values
//                       </NavLink>
//                       <NavLink
//                         to="/our-priorities"
//                         className="hover:text-[#2F2860] hover:font-semibold"
//                       >
//                         Our Priorities
//                       </NavLink>
//                       <NavLink
//                         to="/origin"
//                         className="hover:text-[#2F2860] hover:font-semibold"
//                       >
//                         Our Origin
//                       </NavLink>
//                       <NavLink
//                         to="/legacy"
//                         className="hover:text-[#2F2860] hover:font-semibold"
//                       >
//                         Our Legacy
//                       </NavLink>
//                       <NavLink
//                         to="/faith"
//                         className="hover:text-[#2F2860] hover:font-semibold"
//                       >
//                         Statement of Faith
//                       </NavLink>
//                     </div>
//                     <div className="flex flex-col space-y-2">
//                       <h4 className="font-semibold text-lg ">Leadership</h4>
//                       <NavLink
//                         to="/overseer"
//                         className="hover:text-[#2F2860] hover:font-semibold"
//                       >
//                         General Overseer
//                       </NavLink>
//                       <NavLink
//                         to="/continental"
//                         className="hover:text-[#2F2860] hover:font-semibold"
//                       >
//                         Continental Leadership
//                       </NavLink>
//                       <NavLink
//                         to="/poise"
//                         className="hover:text-[#2F2860] hover:font-semibold"
//                       >
//                         Our Poise
//                       </NavLink>
//                       <NavLink
//                         to="/community"
//                         className="hover:text-[#2F2860] hover:font-semibold"
//                       >
//                         In The Community
//                       </NavLink>
//                     </div>
//                   </div>
//                 </div>
//               )}
//             </div>
//           ))}
//         </nav>

//         {/* Donate Button (Right Aligned) */}
//         <div className="pr-[93px]">
//           <button className="bg-gray-200 text-gray-900 px-4 py-1 rounded-md text-sm">
//             DONATE
//           </button>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;

import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi"; // Icons for mobile menu

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-[#FDFBFE]">
      {/* Logo & Mobile Menu */}
      <div className="flex justify-between items-center px-4 font-medium md:px-[93px] py-[16px]">
        <div className="hidden md:block">PRAYER REQUEST | OUR BELIEFS</div>
        <div>
          <img src="/logo.png" alt="Church Logo" className="" />
        </div>
        <div className="hidden md:block text-[#100E22]">rPAD | ADMIN</div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#1E1B4B] text-2xl"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Main Navbar */}
      <div className="bg-[#2F2860] hidden md:flex py-2  items-center relative">
        {/* Navigation - Desktop */}
        <nav className="hidden md:flex flex-1 justify-center items-center space-x-6 lg:space-x-10 text-sm font-semibold">
          {[
            { name: "HOME", path: "/" },
            { name: "THE CHURCH", path: "/church" },
            { name: "MINISTRIES", path: "/ministries" },
            { name: "RESOURCES", path: "/resources" },
            { name: "EVENTS", path: "/events" },
            { name: "CONTACT", path: "/contact" },
          ].map((link) => (
            <div
              key={link.name}
              className="relative"
              onMouseEnter={() =>
                link.name === "THE CHURCH" && setIsDropdownOpen(true)
              }
              onMouseLeave={() =>
                link.name === "THE CHURCH" && setIsDropdownOpen(false)
              }
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

              {/* Dropdown for 'THE CHURCH' */}
              {link.name === "THE CHURCH" && isDropdownOpen && (
                <div className="absolute left-0 top-8 bg-white shadow-lg rounded-md w-[280px] lg:w-[500px] p-4 text-[#595859] z-50">
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
                      <NavLink to="/values" className="hover:text-[#2F2860]">
                        Our Values
                      </NavLink>
                      <NavLink
                        to="/our-priorities"
                        className="hover:text-[#2F2860]"
                      >
                        Our Priorities
                      </NavLink>
                      <NavLink to="/origin" className="hover:text-[#2F2860]">
                        Our Origin
                      </NavLink>
                      <NavLink
                        to="/our-legacy"
                        className="hover:text-[#2F2860]"
                      >
                        Our Legacy
                      </NavLink>
                      <NavLink to="/faith" className="hover:text-[#2F2860]">
                        Statement of Faith
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
                        Continental Leadership
                      </NavLink>
                      <NavLink to="/poise" className="hover:text-[#2F2860]">
                        Our Poise
                      </NavLink>
                      <NavLink to="/community" className="hover:text-[#2F2860]">
                        In The Community
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
