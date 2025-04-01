import HeaderWithBackButton from "../../components/HeaderWithBackButton";
import MainLayout from "../../MainLayout";
import React from "react";

const resources = [
  {
    title: "Open Heavens",
    link: "#",
    image: "/resources1.png",
  },
  {
    title: "Prayer Points",
    link: "#",
    image: "/resources2.png",
  },
  {
    title: "Sunday School",
    link: "#",
    image: "/resources3.png",
  },
  {
    title: "Home Fellowship",
    link: "#",
    image: "/resources4.png",
  },
  {
    title: "Baptismal Manual",
    link: "#",
    image: "/resources5.png",
  },
  {
    title: "Prayer Requests",
    link: "/prayer-requests",
    image: "/resources6.png",
  },
  {
    title: "Operation Andrew",
    link: "#",
    image: "/resources7.png",
  },
];

const KeyResources = () => {
  return (
    <MainLayout>
      <div className="pt-[66px]">
        <HeaderWithBackButton title="KEY RESOURCES" />
        <section className=" py-[88px] px-4 md:px-10 lg:px-20">
          {/* First row of resources */}
          <div className="max-w-[960px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources.slice(0, 4).map((resource, index) => (
              <div
                key={index}
                className="bg-white cursor-pointer shadow-md rounded-lg p-6 text-center hover:shadow-lg transition duration-300 flex flex-col items-center"
              >
                <img
                  className="w-24 h-24 object-cover rounded-full mb-4"
                  alt="img"
                  src={resource.image}
                />
                <h3 className="text-lg text-[#2F2860] font-semibold">
                  {resource.title}
                </h3>
              </div>
            ))}
          </div>

          {/* Second row with centered last three cards */}
          <div className="max-w-[960px] mx-auto flex flex-wrap justify-center gap-6 mt-6">
            {resources.slice(4).map((resource, index) => (
              <div
                key={index}
                className="bg-white cursor-pointer shadow-md rounded-lg p-6 text-center hover:shadow-lg transition duration-300 flex flex-col items-center"
              >
                <img
                  className="w-24 h-24 object-cover rounded-full mb-4"
                  alt="img"
                  src={resource.image}
                />
                <h3 className="text-lg text-[#2F2860] font-semibold">
                  {resource.title}
                </h3>
              </div>
            ))}
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default KeyResources;
