import MainLayout from "../../MainLayout";
import Accordion from "../../components/Accordion";
import HeaderWithBackButton from "../../components/HeaderWithBackButton";
import React from "react";

const OurBelief = () => {
  return (
    <MainLayout>
      <div className=" pt-[43px] pb-[80px] ">
        <HeaderWithBackButton
          title="WE BELIEVE IN"
          description="Our faith is rooted in the unchanging truth of God’s Word. We believe in the power of the Gospel to transform lives and guide us in our daily walk with Christ."
        />

        {/* Accordions */}
        <div className="mt-8 flex flex-col gap-4 w-full max-w-[773px] mx-auto">
          <Accordion
            title="The Bible"
            content="We believe that the Bible is 'God’s Word'. The truths revealed in it did not have their origin with men, but with God. The Holy Spirit inspired the human authors of the Bible. We therefore believe that the Bible is without error, completely true, relevant and an up-to-date book."
          />
          <Accordion
            title="God"
            content="We believe in one God, who exists in three persons: the Father, the Son, and the Holy Spirit."
          />
          <Accordion
            title="Jesus Christ"
            content="We believe that Jesus Christ is the Son of God, fully divine and fully human, and the only way to salvation."
          />
          <Accordion
            title="The Bible"
            content="The Bible is our foundation, and we believe it contains the inspired and infallible Word of God."
          />
          <Accordion
            title="God"
            content="God is sovereign, holy, and worthy of all worship."
          />
          <Accordion
            title="Jesus Christ"
            content="Jesus Christ is our Lord and Savior who redeemed humanity through His sacrifice."
          />
        </div>
      </div>
    </MainLayout>
  );
};

export default OurBelief;
