import MainLayout from "../../MainLayout";
import React from "react";
import {
  FaBook,
  FaChurch,
  FaUserTie,
  FaClipboard,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const resources = [
  {
    title: "Key Resources",
    description: "Key resources for members and pastors",
    link: "/key-resources",
    icon: <FaBook className="text-4xl text-[#2F2860]" />,
  },
  {
    title: "Key Ministries",
    description: "Key resources for members and pastors",
    link: "/ministries",
    icon: <FaChurch className="text-4xl text-[#2F2860]" />,
  },
  {
    title: "Pastor’s Desk",
    description: "Monthly motivations from the Chairman",
    link: "/pastor-desk",
    icon: <FaUserTie className="text-4xl text-[#2F2860]" />,
  },
  {
    title: "rPad Portal",
    description: "Official Pastor’s reporting platforms",
    link: "#",
    icon: <FaClipboard className="text-4xl text-[#2F2860]" />,
  },
  {
    title: "YouTube Channel",
    description:
      "Follow us on YouTube to keep up with us and our various events through the years.",
    link: "#",
    icon: <FaYoutube className="text-4xl text-[#2F2860]" />,
  },
];

const Resources = () => {
  return (
    <MainLayout>
      <section className="bg-gray-50 py-[88px] px-4 md:px-10 lg:px-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.slice(0, 3).map((resource, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition duration-300"
            >
              <div className="flex justify-center items-center mb-[35px]">
                {resource.icon}
              </div>
              <h3 className="text-lg text-[#2F2860] font-semibold mb-[4px]">
                {resource.title}
              </h3>
              <p className="text-[#2F2860] text-sm mb-[10px] md:px-[44px] ">
                {resource.description}
              </p>
              <Link
                to={resource.link}
                className="text-[#2F2860] font-medium underline text-lg"
              >
                View
              </Link>
            </div>
          ))}
        </div>
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
          {resources.slice(3).map((resource, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition duration-300"
            >
              <div className="flex justify-center items-center mb-4">
                {resource.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{resource.title}</h3>
              <p className="text-gray-600 mb-4">{resource.description}</p>
              <a
                href={resource.link}
                className="text-[#2F2860] font-medium hover:underline"
              >
                View
              </a>
            </div>
          ))}
        </div>
      </section>
    </MainLayout>
  );
};

export default Resources;
