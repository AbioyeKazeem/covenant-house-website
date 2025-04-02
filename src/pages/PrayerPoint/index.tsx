import HeaderWithBackButton from "../../components/HeaderWithBackButton";
import MainLayout from "../../MainLayout";
import React from "react";

const PrayerPoint = () => {
  return (
    <MainLayout>
      <div className="mt-[58px]">
        <HeaderWithBackButton title="PRAYER POINT" />
        <div className="flex justify-between max-w-[1023px] mx-auto my-[53px]">
          {/* Left Side - Image */}
          <div className="max-w-[391px]">
            <img
              src="/prayer-request.png"
              alt="Woman Praying"
              className="rounded-lg shadow-lg w-full"
            />
          </div>

          {/* Right Side - Text Content */}
          <div className="max-w-[570px] text-justify font-normal font-poppins">
            <h2 className="font-medium text-lg uppercase text-[#2F2860] mb-[16px] ">
              PRAYER GUIDE FOR 30 DAYS FASTING & 2025 HOLY GHOST CONGRESS
            </h2>
            <p className="mb-[16px]">
              When the LORD turned again the captivity of Zion, we were like
              them that dream. Then was our mouth filled with laughter, and our
              tongue with singing: then said they among the heathen, The LORD
              hath done great things for them. The LORD hath done great things
              for us; whereof we are glad. Turn again our captivity, O LORD, as
              the streams in the south. They that sow in tears shall reap in
              joy. He that goeth forth and weepeth, bearing precious seed, shall
              doubtless come again with rejoicing, bringing his sheaves with
              him.
            </p>
            <p className=" ">
              {" "}
              <span className="font-semibold">PREAMBLE:</span>
              The above passage is an expression of a great turn around. Story
              precedes glory. Captivity is full of stories while deliverance
              therefrom is glory personified. Every great turn-around is like a
              dream. As recorded in the above passage, it will be the same
              testimony for all of us as we sow in waiting on the Lord for
              another season of encounter with the Almighty in the forth coming
              Holy Ghost Congress. God is about to release great blessings
              through our father-in-the-Lord, Pastor E.A Adeboye, that will
              cause great turn-around. Indeed, God is about to do a new thing.
            </p>
            <p className="mb-[16px]">
              The following are prayer guidelines that will be helpful to usher
              us into the season of “Great Turn-around” as we go through the
              fasting starting from Friday 1st to Saturday 30th November, 2025.
              May you be blessed in the Name of Jesus.
            </p>
            <div className="flex justify-end">
              <button className="bg-[#ABB8E2ED]  px-6 py-2 rounded-md shadow-md hover:bg-blue-700">
                Download The 2025 Prayer Guide
              </button>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default PrayerPoint;
