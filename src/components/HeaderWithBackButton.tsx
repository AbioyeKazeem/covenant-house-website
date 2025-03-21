import React from "react";
import { useNavigate } from "react-router-dom";

interface HeaderProps {
  title: string;
  description: string;
}

const HeaderWithBackButton: React.FC<HeaderProps> = ({
  title,
  description,
}) => {
  const navigate = useNavigate();

  return (
    <div className="flex px-[93px]">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="self-start flex text-[#2F2860] font-semibold mb-4"
      >
        <img
          className="mr-2 font-poppins"
          src="/icons/move-left.svg"
          alt="back"
        />
        Back
      </button>

      {/* Title & Description */}
      <div className="text-center flex-1 items-center">
        <h2 className="text-2xl font-bold text-[#2F2860] mb-2">{title}</h2>
        <p className="text-[#000000] font-semibold text-center max-w-[773px] mx-auto font-poppins">
          {description}
        </p>
      </div>
    </div>
  );
};

export default HeaderWithBackButton;
