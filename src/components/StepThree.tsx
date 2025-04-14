import React, { useState } from "react";

const StepThree = ({ onPrevious, onSubmit, totalDonation = 6000 }) => {
  const [frequency, setFrequency] = useState("");

  const handleSubmit = () => {
    if (!frequency) return alert("Please select a donation frequency");
    onSubmit({ frequency });
  };

  return (
    <div className="max-w-2xl mx-auto p-8 space-y-6 font-poppins">
      {/* Step Indicator */}
      <div className="flex items-center justify-end space-x-2 text-sm">
        <div className="w-20 h-1 bg-indigo-600 rounded-full" />
        <div className="w-20 h-1 bg-indigo-600 rounded-full" />
        <div className="w-20 h-1 bg-indigo-600 rounded-full" />
        <span className="ml-2">3/3</span>
      </div>

      {/* Header */}
      <h2 className="text-lg font-semibold font-roboto underline underline-offset-4">
        Your Payment Information
      </h2>

      {/* Frequency Options */}
      <div className="space-y-2">
        <p className="font-medium">Frequency</p>
        <label className="flex items-center space-x-2">
          <input
            type="radio"
            name="frequency"
            value="single"
            checked={frequency === "single"}
            onChange={() => setFrequency("single")}
            className="form-radio"
          />
          <span>Single Gift</span>
        </label>
        <label className="flex items-center space-x-2">
          <input
            type="radio"
            name="frequency"
            value="monthly"
            checked={frequency === "monthly"}
            onChange={() => setFrequency("monthly")}
            className="form-radio"
          />
          <span>Monthly Support</span>
        </label>
      </div>

      {/* Total Donation */}
      <div>
        <p className="font-medium">Your Total Donation</p>
        <p className="text-green-600 font-semibold text-lg">
          ₦{totalDonation.toLocaleString()}.00
        </p>
      </div>

      {/* Credit Card Placeholder */}
      <div>
        <p className="font-medium">Credit Card</p>
        <p className="text-sm text-red-700">
          The credit card field will initiate once the payment condition is met.
        </p>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between pt-6">
        <button
          onClick={onPrevious}
          className="text-[#2F2860] uppercase underline text-sm"
        >
          Previous
        </button>
        <button
          onClick={handleSubmit}
          className="bg-[#2F2860] text-white px-6 py-2 rounded-md hover:bg-indigo-700"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default StepThree;
