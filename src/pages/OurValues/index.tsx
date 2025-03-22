import React from "react";
import ValueCard from "../../components/ValueCard";
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
    title: "We Value The Mercy Of God",
    description:
      "We shall always recognize in humility that all the goodness we receive from God is a result of His mercies, even those blessings we may regard as “rights” because of our relationship with Him as children. We shall therefore seek to extend mercy to another and to all who come under the ministry of the church. Psalm 52:8; Lamentation 3:22-23; Colossians 3:12; James 5:11",
  },
  {
    icon: "/icons/value.svg",
    title: "We Value Marital Fidelity",
    description:
      "Where husband and wife can depend on each other to provide spiritual, emotional and intimate needs. Proverbs 5:15-19; 1 Corinthians 7:3-5, Galatians 5:19-20; Hebrews 13:4",
  },
  {
    icon: "/icons/plus-value.svg",
    title: "We Value Godly Family Life",
    description:
      "Where parents live as examples and cultivate an environment in which the spiritual, emotional and social growth of their children can be fully accomplished. Deuteronomy 6:7; Proverbs 22:6; 2 Timothy 3:15",
  },
  {
    icon: "/icons/value.svg",
    title: "We Love Unity In The Body of Christ.",
    description:
      "We Love Unity In The Body of Christ. We agree with the scriptures that all who believe in Jesus Christ as Lord and Savior belong to one body of Christ. We shall seek to maintain the unity with all such believers. Psalm 133:1; Romans 12:5; Ephesians 4:3-6,13",
  },
];

const ValuesPage = () => {
  return (
    <MainLayout>
      <div className=" pt-[43px] pb-[80px] ">
        <HeaderWithBackButton
          title="OUR VALUES"
          description="Our values guide everything we do, shaping our faith, community, and service. We are committed to living out these principles as we grow together in Christ"
        />

        {/* Value Cards */}
        <div className="mt-8 flex px-4 md:px-0 flex-wrap font-poppins gap-[43px] justify-center lg:justify-between mx-auto max-w-[934px] ">
          {valuesData.map((value, index) => (
            <ValueCard key={index} {...value} />
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default ValuesPage;
