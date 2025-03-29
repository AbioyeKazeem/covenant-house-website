import HeaderWithBackButton from "../../components/HeaderWithBackButton";
import MainLayout from "../../MainLayout";
import { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa6";

const Prophecies = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (index) => {
    setOpenSection(openSection === index ? null : index);
  };

  const sections = [
    { title: "For Individuals", content: "Bible verses for individuals..." },
    {
      title: "For Nigeria",
      content: (
        <div className="text-[#000000] font-normal">
          <span className="">
            Lamentations 3:22-23 King James Version (KJV)
          </span>
          <p>
            22 It is of the Lord’s mercies that we are not consumed, because His
            compassions fail not.
          </p>
          <p>23 They are new every morning: Great is Thy faithfulness.</p>
        </div>
      ),
    },
    {
      title: "For International",
      content: "Bible verses for international audiences...",
    },
  ];

  return (
    <MainLayout>
      <div className="py-[58px]">
        <HeaderWithBackButton
          title="THIS YEAR’S PROPHECIES"
          description="2025 Prophecies from the General Overseer (G.O) of the Redeemed Christian Church of God (RCCG)"
        />
        <p className="font-semibold text-center">
          Pastor Enoch Adejare Adeboye.
        </p>

        <div className="max-w-[1081px] mx-auto">
          <div className="flex justify-between gap-[40px]  mt-[40px] items-center">
            <div className="text-center md:text-left">
              <img src="/prophecies.png" alt="Pastor" className="" />
            </div>
            <div className="max-w-[583px]">
              {sections.map((section, index) => (
                <div key={index} className="mb-2 border-b border-gray-200 pb-2">
                  <button
                    className="w-full text-left  p-3 rounded-md flex justify-between items-center font-semibold"
                    onClick={() => toggleSection(index)}
                  >
                    <span className={`text-[#000000] font-bold text-[18px]`}>
                      {section.title}
                    </span>
                    <span>
                      {openSection === index ? <FaAngleUp /> : <FaAngleDown />}
                    </span>
                  </button>
                  {openSection === index && (
                    <div className="mt-2 text-sm p-2 rounded-md">
                      {section.content}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Prophecies;
