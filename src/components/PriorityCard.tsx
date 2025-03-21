import React from "react";

interface PriorityCardProps {
  title: string;
  description: string;
  isFirst: boolean; // Determines if it's the first card in a row
}

const PriorityCard: React.FC<PriorityCardProps> = ({
  title,
  description,
  isFirst,
}) => {
  return (
    <div
      className={`w-full max-w-[590px] bg-[#DAD8F961] font-poppins text-center p-6
        ${isFirst ? "md:rounded-r-full" : "md:rounded-l-full ml-auto"}
        rounded-none`}
    >
      <h3 className="text-[#2F2860] font-bold text-sm max-w-[358px] mx-auto">
        {title}
      </h3>
      <p className="text-[#2F2860] text-sm mt-2 max-w-[464px] mx-auto">
        {description}
      </p>
    </div>
  );
};

export default PriorityCard;
