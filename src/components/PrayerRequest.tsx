import React, { useState } from "react";
import { motion } from "framer-motion";

const PrayerRequest = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    isVisible && (
      <motion.div
        initial={{ x: "-100%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="fixed top-[15%]  md:top-1  left-0  shadow-lg  rounded-r-lg  md:w-[592.7px] text-center z-50"
      >
        <div
          className="relative w-full h-full py-[117px] px-[53px] bg-cover bg-center"
          style={{
            backgroundImage: `url('/prayer-request.jpeg')`,
          }}
        >
          <div className="absolute inset-0 bg-[#441a30] opacity-80" />
          <button
            onClick={() => setIsVisible(false)}
            className="absolute text-white top-4 right-6  text-2xl"
          >
            ✖
          </button>
          <div className="relative px-[57px] pt-[36px] pb-[69px] font-medium font-poppins text-white  rounded-lg bg-white/15 backdrop-blur-sm text-center shadow-lg">
            <h3 className=" text-2xl italic font-bold ">
              Need Prayer <br /> or <br />{" "}
              <span className="font-bold">Spiritual Support?</span>
            </h3>
            <p className=" text-lg mt-2">
              No matter what you're going through, we believe in the power of
              prayer. Our pastors and prayer team are here to listen, support,
              and stand with you in faith.
            </p>
            <button className="mt-4 px-4 py-2 border border-white text-white text-sm rounded-md  transition">
              Request Prayer
            </button>
          </div>
        </div>
      </motion.div>
    )
  );
};

export default PrayerRequest;
