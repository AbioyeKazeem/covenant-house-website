import HeaderWithBackButton from "../../components/HeaderWithBackButton";
import MainLayout from "../../MainLayout";
import React from "react";

const PrayerForm = () => {
  return (
    <MainLayout>
      <div className="py-[66px]">
        <HeaderWithBackButton
          title="PRAYER REQUEST"
          description="Call to Me, and I will answer you and show you great and mighty things which you do not know."
        />
        <p className="font-semibold text-center">Jeremiah 33:3</p>
        <div className="flex justify-center font-poppins p-4">
          <form className="w-full max-w-[810px] p-6 ">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[40px]">
              <div>
                <label className="block text-base font-medium text-[#000000]">
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your first name"
                  className="w-full mt-1 px-[16px] py-[11.5px] border rounded-md bg-[#C1C9E57D] focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-base font-medium text-[#000000]">
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your last name"
                  className="w-full mt-1 px-[16px] py-[11.5px] border rounded-md bg-[#C1C9E57D] focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-base font-medium text-[#000000]">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full mt-1 px-[16px] py-[11.5px] border rounded-md bg-[#C1C9E57D] focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-base font-medium text-[#000000]">
                  Phone
                </label>
                <input
                  type="text"
                  placeholder="Enter your phone number"
                  className="w-full mt-1 px-[16px] py-[11.5px] border rounded-md bg-[#C1C9E57D] focus:outline-none"
                />
              </div>
            </div>

            <div className="mt-4">
              <label className="block text-base font-medium text-[#000000]">
                Have our prayer team contact you?
              </label>
              <div className="flex items-center mt-2 space-x-4">
                <label className="flex items-center space-x-2">
                  <input type="radio" name="contact" className="form-radio" />
                  <span>Yes</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="radio" name="contact" className="form-radio" />
                  <span>No</span>
                </label>
              </div>
            </div>

            <div className="mt-4">
              <label className="block text-base font-medium text-[#000000]">
                Prayer Request
              </label>
              <textarea
                placeholder="Enter your prayer request"
                className="w-[385px] min-h-[277px] mt-1 px-[16px] py-[11.5px] rounded-md bg-[#C1C9E57D] focus:outline-none h-32"
              ></textarea>
            </div>

            <div className="mt-6 max-w-[215px]">
              <button
                type="submit"
                className=" bg-[#2F2860] font-roboto text-white py-2 rounded-md w-full"
              >
                SEND
              </button>
            </div>
          </form>
        </div>
      </div>
    </MainLayout>
  );
};

export default PrayerForm;
