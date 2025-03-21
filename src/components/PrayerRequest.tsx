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
        className="fixed top-1/3 left-0 bg-white shadow-lg p-6 rounded-r-lg w-[280px] md:w-[350px] text-center z-50"
      >
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-2 right-2 text-gray-700 text-xl"
        >
          ✖
        </button>
        <h3 className="font-semibold text-lg italic text-gray-900">
          Need Prayer <br /> or <br />{" "}
          <span className="font-bold">Spiritual Support?</span>
        </h3>
        <p className="text-gray-700 text-sm mt-2">
          No matter what you're going through, we believe in the power of
          prayer. Our pastors and prayer team are here to listen, support, and
          stand with you in faith.
        </p>
        <button className="mt-4 px-4 py-2 bg-[#1E1B4B] text-white text-sm rounded-md hover:bg-[#3a3678] transition">
          Request Prayer
        </button>
      </motion.div>
    )
  );
};

export default PrayerRequest;
