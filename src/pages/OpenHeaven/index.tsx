import HeaderWithBackButton from "../../components/HeaderWithBackButton";
import MainLayout from "../../MainLayout";
import React from "react";

const OpenHeaven = () => {
  return (
    <MainLayout>
      <div className="mt-[58px]">
        <HeaderWithBackButton title="OPEN HEAVENS" />
        <div className="flex justify-between max-w-[1023px] mx-auto font-poppins text-justify my-[53px]">
          {/* Left Side - Image */}
          <div className="max-w-[391px]">
            <img
              src="/openheaven.png"
              alt="Open Heavens Book Cover"
              className="rounded-lg shadow-lg"
            />
          </div>

          {/* Right Side - Text Content */}
          <div className="max-w-[570px]">
            <p className="font-medium text-[#2F2860]">
              Open Heavens is the daily devotional for our time, written by the
              general overseer Pastor E.A Adeboye, the Open Heavens is indeed
              the guide in resolving daily christian issues and lifestyle.
            </p>
            <h2 className="font-semibold text-lg my-[24px]">
              Ordering Your Own Copy
            </h2>
            <p className=" ">
              Order your OPEN HEAVENS 2017 Devotionals by Pastor E.A. Adeboye
              now.
            </p>
            <p>Send your Money Order/Bank Drafts/Personal Check to:</p>
            <p className="">
              OPEN HEAVENS | 9710 BREWARD STREET | LAUREL, MD 20723.
            </p>
            <p className="">
              Credit/debit cards payments and Online Orders are not currently
              available. For more information, buying directly, faster service
              and direct deposit, please call 240 593 4515.
            </p>
            <ul className="list-disc list-inside mt-2 ">
              <li>50 Copies and above Less than 50 Copies</li>
              <li>US $13.00 per copy US $15.00 per copy</li>
              <li>Shipping & handling included</li>
              <li>International Orders?</li>
              <li>Processing fees will apply Outside USA?</li>
            </ul>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default OpenHeaven;
