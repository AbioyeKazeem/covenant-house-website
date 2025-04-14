import HeaderWithBackButton from "../../components/HeaderWithBackButton";
import MainLayout from "../../MainLayout";
import React from "react";

const GiveByText = () => {
  return (
    <MainLayout>
      <div className="pt-[43px] pb-[80px]">
        <HeaderWithBackButton title="GIVE BY TEXT" />

        <div className="max-w-[963px] mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 text-[#000000]">
            {/* Text Section */}
            <div className="md:max-w-[437px] text-center md:text-left">
              <p className="text-lg">
                To give, text <span className="font-bold">"GIVE"</span> to
                RCCGNA <br /> number{" "}
                <span className="font-bold">903-218-9595</span>.
              </p>
              <p className="mt-4 text-base">
                Please{" "}
                <span className="font-semibold">
                  create an account <br />
                </span>{" "}
                so RCCG can give you a receipt <br /> at the end of the year.
              </p>
            </div>

            {/* Image Section */}
            <div className="md:flex-1 flex justify-center">
              <img
                src="/givebytext.png"
                alt="Give by Text"
                className="rounded-lg w-full max-w-sm object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default GiveByText;
