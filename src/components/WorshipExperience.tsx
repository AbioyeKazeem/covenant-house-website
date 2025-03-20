import React from "react";

const WorshipExperience = () => {
  return (
    <section className="bg-white py-16 px-6 text-center">
      <h2 className="text-lg md:text-2xl font-bold text-[#2F2860]">
        Come as You Are, Experience God's Love
      </h2>

      <p className="mt-[1px] text-sm md:text-base text-[#000000] max-w-[827px] mx-auto">
        Rooted in faith, committed to love, and dedicated to serving. Our doors
        are open to all who seek a deeper connection with God and community.
      </p>

      <div className="mt-[31px] flex justify-center">
        <img
          src="/worship-experience.png"
          alt="Worship Experience"
          className="w-full max-w-[1083px] object-cover rounded-tl-[50px] rounded-tr-[50px]"
        />
      </div>
    </section>
  );
};

export default WorshipExperience;
