import HeaderWithBackButton from "../../components/HeaderWithBackButton";
import MainLayout from "../../MainLayout";
import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const sections = [
  {
    title: "Pricing",
    content: (
      <div className="flex flex-col gap-[16px] font-normal ">
        <p>
          Students Manual
          <br />
          N1200 per copy
        </p>
        <p>
          Teachers Manual
          <br />
          N1200 per copy
        </p>
        <p>
          House Fellowship Manual
          <br />
          N1000 per copy
        </p>
        <p>
          Order of Service Manual
          <br />
          N500 per copy
        </p>
      </div>
    ),
  },
  {
    title: "How to Order",
    content: (
      <div className="flex flex-col gap-[16px] font-normal ">
        <p>
          Write the quantities requested on paper and put a cost on the orders.
          Include your shipping address and a phone number where we can reach
          you.
        </p>
        <div>
          <p>Attach a check to cover the cost and mail to:</p>
          <p>
            RCCG – Sunday School
            <br />
            P.O. Box 480098
            <br />
            Charlotte, NC 28269
          </p>
        </div>
        <p>
          No orders by phone or e-mail. We will begin to take orders from the
          middle of December.
        </p>
        <p>
          We will NOT sell to individuals, they should buy through their
          parishes.
        </p>
      </div>
    ),
  },
  {
    title: "Contact Us",
    content: (
      <p>
        For questions about your order, <br /> please send an email to{" "}
        <a href="mailto:rccgsundayschool@yahoo.com">
          rccgsundayschool@yahoo.com
        </a>
      </p>
    ),
  },
];

const SundaySchool = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (index) => {
    setOpenSection(openSection === index ? null : index);
  };
  return (
    <MainLayout>
      <div className="mt-[58px]">
        <HeaderWithBackButton title="PRAYER POINT" />
        <div className="flex gap-[26px] max-w-[1000px] mx-auto mt-[58px] mb-[99px]">
          {/* Left Side - Image */}
          <div className="max-w-[538px]">
            <img
              src="/sunday-school.png"
              alt="Sunday School Manual"
              className=""
            />
          </div>

          {/* Right Side - Text Content */}
          <div className="max-w-[462px] font-poppins">
            <h2 className="font-semibold text-lg">2025 YOUTH ZEAL!</h2>
            <p className="mt-4 font-semibold">Available for order:</p>
            <p className=" text-sm">RCCGNA Youth Sunday School Manual</p>
            <p className=" text-sm">$12 per copy</p>

            <p className="mt-4 font-semibold">Send order by mail:</p>
            <p className=" text-sm">
              Include in your order: name, address, email or telephone
            </p>
            <p className=" text-sm">
              Bola Elegbe, 38, Brookfield Drive, Jackson, NJ 08527
            </p>

            <p className="mt-4 font-semibold">To order by phone:</p>
            <p className=" text-sm">Text 732-485-3222</p>
          </div>
        </div>

        <div className=" max-w-[1000px] mx-auto  mb-[99px]">
          <p className="text-center text-[24px] font-bold">
            Search The Scriptures
          </p>
          <p className="italic font-[300] text-[#100E22] text-center px-4">
            Study to shew thyself approved unto God, a workman that needeth not
            to be ashamed, rightly dividing the word of truth.
          </p>
          <p className="mt-[12px] italic text-center"> – Timothy 2:15 (KJV)</p>

          <div>
            <div className="max-w-[791px] mx-auto mt-[38px] px-[29px]">
              <img src="/manual.png" alt="Sunday School Manual" className="" />
            </div>
          </div>

          <div className="max-w-[791px] mx-auto mt-[38px] px-[29px] font-poppins">
            {sections.map((section, index) => (
              <div key={index} className="border-b pb-2 mx-0 md:mx-[74px]">
                <button
                  onClick={() => toggleSection(index)}
                  className="flex justify-between items-center w-full py-2 text-lg text-[#2F2860] font-bold focus:outline-none"
                >
                  {section.title}
                  {openSection === index ? <ChevronUp /> : <ChevronDown />}
                </button>
                {openSection === index && (
                  <div className="">{section.content}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default SundaySchool;
