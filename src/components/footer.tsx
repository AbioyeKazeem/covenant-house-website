import React from "react";
import PhoneIcon from "../assets/icons/phone.svg";

const Footer = () => {
  return (
    <footer className="bg-[#2F2860] text-white py-10">
      <div className="flex flex-col justify-between md:flex-row gap-8">
        {/* Key Ministries & Quick Links Section */}
        <div className="max-w-[665px] w-full">
          <div className="bg-white text-[#2F2860] pl-[98px] py-[8px] flex justify-between">
            <h3 className="w-1/2 font-bold uppercase text-left ">
              Key Ministries
            </h3>
            <h3 className="w-1/2 font-bold uppercase text-left">Quick Links</h3>
          </div>
          <div className="grid grid-cols-2 pl-[98px] mt-[28px]">
            <ul className="space-y-[12px] ">
              <li>Men Ministry</li>
              <li>Women Ministry</li>
              <li>Youth Ministry</li>
              <li>Children Ministry</li>
              <button className="mt-[24px] bg-[#ABB8E2ED] text-[#FEFDFF] px-4 py-2 rounded ">
                View All Ministries
              </button>
            </ul>
            <ul className="space-y-[12px] ">
              <li>Pastor's Helpline</li>
              <li>Prayer Request</li>
              <li>Open Heavens</li>
              <li>RCCG Docs</li>
              <li>Sunday School Manual</li>
              <button className="mt-[24px] bg-[#ABB8E2ED] text-[#FEFDFF] px-4 py-2 rounded ">
                View All Resources
              </button>
            </ul>
          </div>
        </div>

        {/* Contact Information Section */}
        <div className="max-w-[542px] w-full bg-white text-[#2D2463] p-6 rounded-tl-lg rounded-bl-lg flex flex-col justify-between">
          <h3 className="font-bold uppercase pb-2">Contact Information</h3>
          <p className="mt-4 text-sm">
            We'd love to hear from you! Whether you have a question, need
            prayer, or want to visit us, feel free to reach out. We're here for
            you.
          </p>
          <div className="mt-4 space-y-4">
            <div className="flex gap-3">
              <img src="/email.png" alt="Email" />

              <div>
                <p className="font-bold">Email</p>
                <p>rccgCH123@gmail.com</p>
              </div>
            </div>
            <div className="flex gap-3">
              <PhoneIcon />
              <div>
                <p className="font-bold">Phone</p>
                <p>+234 1234 567 78</p>
              </div>
            </div>
            <div className="flex gap-3">
              <img src="/location.png" alt="Location" height={2} />
              <div>
                <p className="font-bold">Location</p>
                <p>123 Street, Lagos, Nigeria.</p>
              </div>
            </div>
          </div>
          <div className="flex space-x-4 mt-4 text-2xl">
            <img src="/facebook.png" alt="Facebook" width={30} height={30} />
            <img src="/youtube.png" alt="YouTube" width={30} height={30} />
            <img src="/twitter.png" alt="Email" width={30} height={30} />
            <img src="/email.png" alt="Email" width={30} height={30} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
