import React from "react";
import ValueCard from "../../components/ValueCard";
import { useNavigate } from "react-router-dom";
import MainLayout from "../../MainLayout";
import HeaderWithBackButton from "../../components/HeaderWithBackButton";

const valuesData = [
  {
    icon: "/icons/value.svg",
    title: "We Value Giving",
    description:
      "We shall always recognize in humility that all the goodness we receive from God is a result of His mercies, even those blessings we may regard as “rights” because of our relationship with Him as children. We shall therefore seek to extend mercy to another and to all who come under the ministry of the church. Psalm 52:8; Lamentation 3:22-23; Colossians 3:12; James 5:11",
  },
  {
    icon: "/icons/plus-value.svg",
    title: "We Value Christlikeness",
    description:
      "We want to be like the Lord and savior in all conduct. We want to minister by serving people the way He did with compassion, under the power and anointing of the Holy Spirit. We shall convey the love, mercy and power of God through the ministry of the church. Luke 14:16-20; John 20:21; Ephesians 5:2; Colossians 3:12",
  },

  {
    icon: "/icons/plus-value.svg",
    title: "We Value Christlikeness",
    description:
      "We want to be like the Lord and savior in all conduct. We want to minister by serving people the way He did with compassion, under the power and anointing of the Holy Spirit. We shall convey the love, mercy and power of God through the ministry of the church. Luke 14:16-20; John 20:21; Ephesians 5:2; Colossians 3:12",
  },
  {
    icon: "/icons/value.svg",
    title: "We Value Giving",
    description:
      "We shall always recognize in humility that all the goodness we receive from God is a result of His mercies, even those blessings we may regard as “rights” because of our relationship with Him as children. We shall therefore seek to extend mercy to another and to all who come under the ministry of the church. Psalm 52:8; Lamentation 3:22-23; Colossians 3:12; James 5:11",
  },
  {
    icon: "/icons/plus-value.svg",
    title: "We Value Christlikeness",
    description:
      "We want to be like the Lord and savior in all conduct. We want to minister by serving people the way He did with compassion, under the power and anointing of the Holy Spirit. We shall convey the love, mercy and power of God through the ministry of the church. Luke 14:16-20; John 20:21; Ephesians 5:2; Colossians 3:12",
  },
  {
    icon: "/icons/value.svg",
    title: "We Value Giving",
    description:
      "We shall always recognize in humility that all the goodness we receive from God is a result of His mercies, even those blessings we may regard as “rights” because of our relationship with Him as children. We shall therefore seek to extend mercy to another and to all who come under the ministry of the church. Psalm 52:8; Lamentation 3:22-23; Colossians 3:12; James 5:11",
  },
];

const ValuesPage = () => {
  const navigate = useNavigate();

  return (
    <MainLayout>
      <div className=" pt-[43px] pb-[80px] ">
        <HeaderWithBackButton
          title="OUR VALUES"
          description="Our values guide everything we do, shaping our faith, community, and service. We are committed to living out these principles as we grow together in Christ"
        />

        {/* Value Cards */}
        <div className="mt-8 flex flex-wrap font-poppins gap-[43px] justify-between mx-auto max-w-[934px] ">
          {valuesData.map((value, index) => (
            <ValueCard key={index} {...value} />
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default ValuesPage;
