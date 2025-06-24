import React from "react";
import ValueCard from "../../components/ValueCard";
import MainLayout from "../../MainLayout";
import HeaderWithBackButton from "../../components/HeaderWithBackButton";
import {
  FaPrayingHands,
  FaHandHoldingHeart,
  FaCross,
  FaHandsHelping,
  FaHome,
  FaHandHoldingUsd,
  FaRing,
  FaBalanceScale,
  FaUserTie,
  FaUsers,
  FaChurch,
  FaLeaf,
  FaUser,
  FaTshirt,
} from "react-icons/fa";

const valuesData = [
  {
    icon: <FaPrayingHands />,
    title: "We Value The Pursuit Of God",
    description:
      "We thirst for His presence and to know more of Him through private and public worship, the Word and prayer Psalm 42:1-2, 63:1-3; Matt 5:23; Luke 6:21",
  },
  {
    icon: <FaHandHoldingHeart />,
    title: "We Value The Servant Leadership",
    description:
      "Our leaders shall serve the members of the church as Christ did selflessly and not for profit or self-glorification. Matthew 10:42; John 13:13-15; Acts 20:18-19 ",
  },
  {
    icon: <FaCross />,
    title: "We Value Christlikeness",
    description:
      "We want to be like the Lord and savior in all conduct. We want to minister by serving people the way He did with compassion, under the power and anointing of the Holy Spirit. We shall convey the love, mercy and power of God through the ministry of the church. Luke 14:16-20; John 20:21; Ephesians 5:2; Colossians 3:12",
  },
  {
    icon: <FaHandsHelping />,
    title: "We Value The Mercy Of God",
    description:
      "We shall always recognize in humility that all the goodness we receive from God is a result of His mercies, even those blessings we may regard as “rights” because of our relationship with Him as children. We shall therefore seek to extend mercy to another and to all who come under the ministry of the church. Psalm 52:8; Lamentation 3:22-23; Colossians 3:12; James 5:11",
  },
  {
    icon: <FaHome />,
    title: "We Value Godly Family Life",
    description:
      "Where parents live as examples and cultivate an environment in which the spiritual, emotional and social growth of their children can be fully accomplished. Deuteronomy 6:7; Proverbs 22:6; 2 Timothy 3:15",
  },
  {
    icon: <FaHandHoldingUsd />,
    title: "We Value Giving",
    description:
      "We shall always recognize in humility that all the goodness we receive from God is a result of His mercies, even those blessings we may regard as “rights” because of our relationship with Him as children. We shall therefore seek to extend mercy to another and to all who come under the ministry of the church. Psalm 52:8; Lamentation 3:22-23; Colossians 3:12; James 5:11",
  },
  {
    icon: <FaRing />,
    title: "We Value Marital Fidelity",
    description:
      "Where husband and wife can depend on each other to provide spiritual, emotional and intimate needs. Proverbs 5:15-19; 1 Corinthians 7:3-5, Galatians 5:19-20; Hebrews 13:4",
  },
  {
    icon: <FaBalanceScale />,
    title: "We Value Personal And Corporate Integrity",
    description:
      "and therefore shall deal and conduct our affairs truthfully and honestly such that the gospel of Jesus Christ shall not suffer any reproach because of our conduct. 2 Corinthians 13:8; Ephesians 4:15, 5:9; 6:14; James 5:12",
  },
  {
    icon: <FaUserTie />,
    title: "We Value Purposeful Singleness",
    description:
      "where the uniqueness of being single (unmarried) should be used to bless the church. Matthew 19:12c; 1 Corinthians 7:32-34",
  },
  {
    icon: <FaUsers />,
    title: "We Love Unity In The Body of Christ",
    description:
      "We Love Unity In The Body of Christ. We agree with the scriptures that all who believe in Jesus Christ as Lord and Savior belong to one body of Christ. We shall seek to maintain the unity with all such believers. Psalm 133:1; Romans 12:5; Ephesians 4:3-6,13",
  },

  {
    icon: <FaChurch />,
    title: "We Value The Church Of God As The Body Of Christ.",
    description:
      "Our desire shall be to seek its good, growth and prosperity. Matthew 16:18; Ephesians 3:9-11; 5:25-27; 1 Timothy 3:5",
  },

  {
    icon: <FaLeaf />,
    title: "We Value Simplicity",
    description:
      "and desire to do nothing in our private and public worship just for “effects” and “showing off”. Philippians 2:3; Colossians 3:17",
  },

  {
    icon: <FaUser />,
    title: "We Value The Individual Members Of The Church",
    description:
      "and shall seek to treat one another with respect and appropriate courtesy irrespective of gender, social and physical status. We shall seek to help members to grow in the grace and to fully realize their God given potentials. John 13:35, Romans 12: 9-10, Galatians 6:10, Thessalonians 3:12, Colossians 3:12-14.",
  },

  {
    icon: <FaTshirt />,
    title: "We Value Modesty In Our Lifestyle.",
    description:
      "We shall seek to be generous and gracious in our speech, firm in our convictions and chaste in our dressing. Galatians 5:26; Philippians 2:3; 1 Timothy 4:14; 1 Peter 3:3-4; 1 John 2:15-17",
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
        <div className="mt-8 flex px-4 md:px-0 flex-wrap gap-[43px] justify-center lg:justify-between mx-auto max-w-[934px] ">
          {valuesData.map((value, index) => (
            <ValueCard key={index} {...value} />
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default ValuesPage;
