import React from "react";
import HeaderWithBackButton from "../../components/HeaderWithBackButton";
import MainLayout from "../../MainLayout";

const Baptismal = () => {
  return (
    <MainLayout>
      <div className="mt-[58px]">
        <HeaderWithBackButton title="BAPTISMAL MANUAL" />
        <div className="max-w-[1031px] mx-auto ">
          <h2 className="text-center text-xl font-bold mt-[48px]">
            Dead to Sin Alive to Christ
          </h2>

          <div className="flex px-4 flex-col items-center md:flex-row mt-[58px] mb-[114px] gap-[60px]">
            <div className="max-w-[485.5px] ">
              <img src="/baptismal.png" alt="Baptism" className="" />
            </div>

            <div className="max-w-[485.5px] flex flex-col gap-[49px] font-poppins p-[8px] h-full">
              <div className="flex-1 ">
                <p className="italic text-sm text-[#100E22] font-[300]">
                  I am crucified with Christ: nevertheless I live; yet not I,
                  but Christ liveth in me: and the life which I now live in the
                  flesh I live by the faith of the Son of God, who loved me, and
                  gave himself for me.
                </p>
                <p className="text-right text-sm font-semibold mt-[12px]">
                  - <span className="italic">Galatians 2:20 (KJV)</span>
                </p>

                <h3 className="mt-4 font-bold text-[#2F2860]">
                  RCCG BAPTISMAL MANUAL
                </h3>
                <ul className="list-disc list-inside text-sm mt-4 space-y-1">
                  <li>Understanding The New Birth</li>
                  <li>Repentance From Dead Works</li>
                  <li>Discovering Your New Self: Part I</li>
                  <li>Discovering Your New Self: Part II</li>
                  <li>Learning About The Bible, The Trinity And The Devil</li>
                  <li>Quiet Time</li>
                  <li>
                    Teaching on Baptism: Three Baptisms For True Believers
                  </li>
                  <li>Personal Evangelism</li>
                  <li>Christian Conduct and Discipline Part I</li>
                  <li>Christian Conduct and Discipline Part II</li>
                  <li>Biblical Fasting and Prayer</li>
                  <li>Divine Healing</li>
                  <li>Restitution and Holy Marriage</li>
                  <li>Tithes, Offerings And Vows</li>
                  <li>Deliverance Introduction</li>
                </ul>
              </div>

              <div className="mt-auto flex justify-end">
                <button className="bg-[#ABB8E2ED] px-6 py-2 rounded-md shadow-md hover:bg-blue-700">
                  Download manual
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Baptismal;
