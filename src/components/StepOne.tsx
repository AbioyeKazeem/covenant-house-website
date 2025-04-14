import React, { useState } from "react";

const StepOne = ({ onNext }) => {
  const [form, setForm] = useState({
    firstFruits: "",
    offering: "",
    buildingFund: "",
    pastorsWivesForum: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="max-w-2xl mx-auto p-4 space-y-6">
      {/* Header and Step Indicator */}
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-medium">Your Gift</h2>
        <div className="flex items-center space-x-1">
          <div className="w-8 h-1 bg-[#2F2860] rounded-full" />
          <div className="w-8 h-1 bg-gray-200 rounded-full" />
          <div className="w-8 h-1 bg-gray-200 rounded-full" />
          <span className="ml-2 text-xs">1/3</span>
        </div>
      </div>

      {/* Form Fields */}
      <div className="space-y-4 font-poppins">
        <div className="space-y-1">
          <label className="text-sm md:text-base font-medium">
            First Fruits
          </label>
          <input
            type="text"
            name="firstFruits"
            value={form.firstFruits}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-[#E8EDF4] rounded"
          />
        </div>

        <div className="space-y-1">
          <label className="text-sm md:text-base font-medium">Offering</label>
          <input
            type="text"
            name="offering"
            value={form.offering}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-[#C1C9E57D] rounded"
          />
        </div>

        <div className="space-y-1">
          <label className="text-sm md:text-base font-medium">
            Building Fund
          </label>
          <input
            type="text"
            name="buildingFund"
            value={form.buildingFund}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-[#C1C9E57D] rounded"
          />
        </div>

        <div className="space-y-1">
          <label className="text-sm md:text-base font-medium">
            Pastor's Wives Forum
          </label>
          <input
            type="text"
            name="pastorsWivesForum"
            value={form.pastorsWivesForum}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-[#C1C9E57D] rounded"
          />
        </div>
      </div>

      {/* Next Button */}
      <div>
        <button
          onClick={() => onNext(form)}
          className="bg-[#2F2860] text-white px-6 py-2 rounded"
        >
          NEXT
        </button>
      </div>
    </div>
  );
};

export default StepOne;
