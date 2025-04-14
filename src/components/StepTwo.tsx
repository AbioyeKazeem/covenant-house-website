import React, { useState } from "react";

const StepTwo = ({ onNext, onPrevious }) => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    streetAddress: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="max-w-[898px] mx-auto p-4 space-y-6">
      {/* Header and Step Indicator */}
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-medium">Your Billing Information</h2>
        <div className="flex items-center space-x-1">
          <div className="w-8 h-1 bg-[#2F2860] rounded-full" />
          <div className="w-8 h-1 bg-[#2F2860] rounded-full" />
          <div className="w-8 h-1 bg-gray-200 rounded-full" />
          <span className="ml-2 text-xs">2/3</span>
        </div>
      </div>

      {/* Name Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-poppins">
        <div className="space-y-1">
          <label className="text-sm">
            First Name <span className="text-[#000000] italic">(Required)</span>
          </label>
          <input
            type="text"
            name="firstName"
            value={form.firstName}
            onChange={handleChange}
            placeholder="Enter your first name"
            className="w-full px-4 py-2 bg-[#C1C9E57D] rounded"
          />
        </div>
        <div className="space-y-1">
          <label className="text-sm">
            First Name <span className="text-[#000000] italic">(Required)</span>
          </label>
          <input
            type="text"
            name="lastName"
            value={form.lastName}
            onChange={handleChange}
            placeholder="Enter your last name"
            className="w-full px-4 py-2 bg-[#C1C9E57D] rounded"
          />
        </div>
      </div>

      {/* Email and Phone */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-1">
          <label className="text-sm">
            Email <span className="text-[#000000] italic">(Required)</span>
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Enter your email address"
            className="w-full px-4 py-2 bg-[#C1C9E57D] rounded"
          />
        </div>
        <div className="space-y-1">
          <label className="text-sm">
            Phone <span className="text-[#000000] italic">(Required)</span>
          </label>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Enter your phone number"
            className="w-full px-4 py-2 bg-[#C1C9E57D] rounded"
          />
        </div>
      </div>

      {/* Address Section */}
      <div className="space-y-4">
        <h3 className="text-md font-medium">Address</h3>

        <div className="space-y-1">
          <label className="text-sm">Street Address</label>
          <input
            type="text"
            name="streetAddress"
            value={form.streetAddress}
            onChange={handleChange}
            placeholder="Please enter street address"
            className="w-full px-4 py-2 bg-[#C1C9E57D] rounded"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="text-sm">City</label>
            <input
              type="text"
              name="city"
              value={form.city}
              onChange={handleChange}
              placeholder="Enter your city"
              className="w-full px-4 py-2 bg-[#C1C9E57D] rounded"
            />
          </div>

          <div className="space-y-1">
            <label className="text-sm">State / Province / Region</label>
            <input
              type="text"
              name="state"
              value={form.state}
              onChange={handleChange}
              placeholder="Enter your State / Province / Region"
              className="w-full px-4 py-2 bg-[#C1C9E57D] rounded"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="text-sm">Zip Code</label>
            <input
              type="text"
              name="zipCode"
              value={form.zipCode}
              onChange={handleChange}
              placeholder="Enter your zip code"
              className="w-full px-4 py-2 bg-[#C1C9E57D] rounded"
            />
          </div>

          <div className="space-y-1">
            <label className="text-sm">Country</label>
            <select
              name="country"
              value={form.country}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-[#C1C9E57D] rounded appearance-none"
            >
              <option value="">Select your country</option>
              <option value="USA">United States</option>
              <option value="Canada">Canada</option>
              <option value="UK">United Kingdom</option>
              {/* Add more countries as needed */}
            </select>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between pt-4">
        <button
          onClick={onPrevious}
          className="bg-transparent text-[#2F2860] underline px-6 py-2 uppercase"
        >
          Previous
        </button>
        <button
          onClick={() => onNext(form)}
          className="bg-[#2F2860] text-white px-6 py-2 rounded uppercase"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default StepTwo;
