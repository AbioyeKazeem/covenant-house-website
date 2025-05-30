import React from "react";

interface HeaderProps {
  title: string;
  description?: string;
}

const HeaderWithBackButton: React.FC<HeaderProps> = ({
  title,
  description,
}) => {

  return (
    <div className="flex md:px-[93px] px-4 flex-col md:flex-row">
      {/* Title & Description */}
      <div className="text-center flex-1 items-center">
        <h2 className="text-2xl font-bold text-[#2F2860] mb-2">{title}</h2>
        <p className="text-[#000000] font-normal text-center max-w-[773px] mx-auto font-poppins ">
          {description}
        </p>
      </div>
    </div>
  );
};

export default HeaderWithBackButton;
