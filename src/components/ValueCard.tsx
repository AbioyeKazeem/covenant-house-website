import React, { ReactNode } from "react";

interface ValueCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const ValueCard: React.FC<ValueCardProps> = ({ icon, title, description }) => {
  return (
    <div className="max-w-[417px] bg-white flex flex-col items-center  shadow-md shadow-black/25 p-[34px] rounded-lg text-center">
      <div className="flex text-[40px] text-[#2F2860] justify-center mb-[34px] border w-[89px] border-[#2F2860] rounded-[13.53px] h-[77.61px] items-center">
        {icon}
      </div>
      <h3 className="text-lg font-bold mb-[26px] text-[#2F2860]">{title}</h3>
      <p className="text-sm text-[#000000] mt-2">{description}</p>
    </div>
  );
};

export default ValueCard;
