import HeaderWithBackButton from "../../components/HeaderWithBackButton";
import MainLayout from "../../MainLayout";
import { useState } from "react";

const PastorProfile = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (index) => {
    setOpenSection(openSection === index ? null : index);
  };

  const sections = [
    {
      title: "His Early Life and Career",
      content: "Details about his early life and career...",
    },
    {
      title: "Becoming A Born Again Christian",
      content: "How he became a born again Christian...",
    },
    {
      title: "Growth And Development In The Lord",
      content: "His journey and development in faith...",
    },
    {
      title: "The Divine Call To Leadership",
      content: "His calling to lead the church...",
    },
  ];

  return (
    <MainLayout>
      <div className="pt-[58px] pb-[102px]">
        <HeaderWithBackButton title="THE GENERAL OVERSEER" />
        <div className="max-w-[1033px] mx-auto mt-[51px]">
          <div className="">
            <div className="flex justify-between gap-[40px]">
              <div className="max-w-[423px]">
                <img
                  src="/overseer1.png"
                  alt="Pastor"
                  className="rounded-lg mx-auto md:mx-0"
                />
              </div>
              <div className="max-w-[570px]">
                <p className="font-normal text-[#000000] text-justify">
                  The General Overseer (G.O) of the Redeemed Christian Church of
                  God (RCCG) Pastor Enoch Adejare Adeboye is a man of God, who
                  has been a tremendous blessing and inspiration to numerous
                  people and drawn lost souls to salvation by the grace of God.
                </p>
                <p className="font-normal text-[#000000] text-justify">
                  Although he leads one of the fastest growing Christian
                  Churches in the country and probably in Africa today, majority
                  of the flock he ably shepherds apart from calling him “Daddy”
                  or “Father in the Lord” know little or nothing about him. This
                  is probably because of a philosophy which seems to emphasize
                  the power and glory of God in all that he does, rather than
                  highlight his own personal achievements or contribution to the
                  phenomenal growth of the church and the body of Christ. As he
                  will say whenever commended, “Glory be to God”.
                </p>
              </div>
            </div>

            <div className="flex pt-[91px] justify-between gap-[40px]">
              <div className="max-w-[540px]">
                <p className="text-justify">
                  In any case, the humility of Pastor Adeboye is so well-known
                  and reflected in everything that surrounds him. It has also
                  become the hallmark of the Redeemed Christian Church of God,
                  which he has led since he was appointed the head of the Church
                  in 1981. This piece is an attempt to bridge the gap regarding
                  necessary information about the General Overseer. The
                  intention is that the member of his congregation as well as
                  other Christians and Non-Christian alike can learn something
                  about his life, humble beginnings, relationship with God,
                  career and Christian ministry, and also that it is only
                  through total dedication and commitment to God that man can
                  achieve true holiness and elevation.
                </p>
                <div className="mt-[40px]">
                  {sections.map((section, index) => (
                    <div key={index} className="mb-2 ">
                      <button
                        className="w-full text-[#000000] font-bold text-left border-[#B9B7B9] border-b px-[8px] py-[16px] flex justify-between items-center"
                        onClick={() => toggleSection(index)}
                      >
                        {section.title}
                        <span>{openSection === index ? "-" : "+"}</span>
                      </button>
                      {openSection === index && (
                        <p className="mt-2 text-gray-600 text-sm p-2  rounded-md">
                          {section.content}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="max-w-[467px]">
                <img
                  src="/overseer2.png"
                  alt="Pastor Preaching"
                  className="rounded-lg mx-auto md:mx-0"
                />
              </div>
            </div>
          </div>

          <div className="flex space-x-4 mt-[33px] text-2xl">
            <img src="/facebook.png" alt="Facebook" width={30} height={30} />
            <img src="/youtube.png" alt="YouTube" width={30} height={30} />
            <img src="/twitter.png" alt="Email" width={30} height={30} />
            <img src="/email.png" alt="Email" width={30} height={30} />
          </div>

          <div className="mt-6 text-center">
            <button className="border-[#2F2860 px-[39px] py-[50px] rounded-md text-[#2F2860] text-[20px] font-bold">
              View This Year’s Prophecies
            </button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default PastorProfile;
