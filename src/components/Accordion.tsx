import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";

interface AccordionProps {
  title: string;
  content: string;
}

const Accordion: React.FC<AccordionProps> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full max-w-[773px] font-poppins   rounded-lg overflow-hidden ">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left px-6 py-[10px] border-l-[4px] border-[#2F2860] bg-[#C5C3F49E] text-[#2F2860] font-semibold flex justify-between items-center"
      >
        {title}
        <span className="text-xl">
          {isOpen ? <FaChevronUp size={14} /> : <FaChevronDown size={14} />}
        </span>
      </button>
      {isOpen && (
        <div className="px-6 py-4 text-[#100E22]">
          <p>{content}</p>
        </div>
      )}
    </div>
  );
};

export default Accordion;
