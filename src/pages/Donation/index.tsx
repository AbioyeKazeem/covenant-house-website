import MainLayout from "../../MainLayout";
import React from "react";
import { useNavigate } from "react-router-dom";

const donationOptions = [
  {
    label: "Give by Text",
    image: "/give-by-text.png",
    path: "/give-by-text",
  },
  {
    label: "Online Donation",
    image: "/online-donation.png",
    path: "/online-donation",
  },
  {
    label: "Zelle",
    image: "/zelle.png",
    path: "/",
  },
  {
    label: "Givelify",
    image: "/givelify.png",
    path: "/",
  },
];

const Donate = () => {
  const navigate = useNavigate();

  const handleDonationClick = (path) => {
    navigate(path);
  };

  return (
    <MainLayout>
      <div className="max-w-[995px] mx-auto px-4 py-12 text-center">
        <h2 className="text-2xl font-bold text-indigo-900 uppercase">Donate</h2>
        <p className="mt-2 italic mx-auto max-w-[852px]">
          Each of you should give what you have decided in your heart to give,
          not reluctantly or under compulsion, for God loves a cheerful giver.
        </p>
        <p className="mt-1 text-sm md:text-base text-[#000000]">
          – 2 Corinthians 9:7
        </p>

        <div className="mt-10 mb-[70px] grid grid-cols-1 sm:grid-cols-2 gap-6">
          {donationOptions.map((option, index) => (
            <div
              key={index}
              className="bg-white rounded-lg cursor-pointer shadow-md p-[42px] flex flex-col items-center hover:shadow-lg transition"
              onClick={() => handleDonationClick(option.path)}
            >
              <img
                src={option.image}
                alt={option.label}
                className="w-20 h-20 object-cover rounded-full mb-[20px]"
              />
              <p className="text-lg font-medium text-gray-800">
                {option.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default Donate;
