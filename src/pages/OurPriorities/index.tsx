import MainLayout from "../../MainLayout";
import HeaderWithBackButton from "../../components/HeaderWithBackButton";
import PriorityCard from "../../components/PriorityCard";
import React from "react";

const priorities = [
  {
    title:
      "We Desire To Worship God In Spirit And In Truth In Our Private And Public Worship.",
    description:
      "The LORD only shall be the object of our worship. We seek to hear from God and also desire the presence of His glory in our gatherings. 1 Kings 8:1; 1 Chronicles 12:9; Psalm 96:9; John 4:23-24; Revelation 22:9",
  },
  {
    title: "We Desire To Live Holy, Sanctified Lives",
    description:
      "Such that at any time we are able to hear from God and receive His blessings. Psalm 16:1-2; Leviticus 11:45; 1 Corinthians 1:30; 2 Corinthians 7:1; 1 Thessalonians 4:3, 5:23; Hebrews 12:4.",
  },
  {
    title: "We Desire To Be Led All The Time By The Spirit Of God",
    description:
      "Such that we are always able to do His will. Romans 8:14-18, 12:1-2; Ephesians 5:17, 6:6",
  },
  {
    title: "We Want To Teach And Learn The Word Of God",
    description:
      "In the power and anointing of the Holy Spirit for edification, refreshing, encouragement and comfort. Isaiah 2:3; Matthew 28:19-20; Romans 15:4; 1 Timothy 4:13; 2 Timothy 2:2",
  },
  {
    title:
      "We desire to be active in proclaiming the good news of Jesus Christ",
    description:
      "To every soul through direct involvement and support of missionary activities and evangelism. Isaiah 52:7; Matthew 28:19-20; Acts 17:30-31; Romans 12:13-15",
  },
  {
    title: "We want to honor God and bring glory to His name",
    description:
      "By the way we conduct ourselves in all our social interactions. We shall not seek to bring reproach to the name of our Lord. 1 Corinthians 10:31-33; Philippians 1:27; 1 Thessalonians 4:11-12",
  },
  {
    title: "We want to build the church of God with our spiritual gifts",
    description:
      "As the Lord gives opportunity for the advancement of the kingdom of God and the spiritual growth of the members. Romans 13:3-8; 1 Corinthians 3:6-9, 12:7; Ephesians 4:11-12",
  },
  {
    title: "We want to develop one another through interpersonal ministry",
    description:
      "And service that will enhance the spiritual and social enrichment of individual members. Colossians 3:16; John 4:36, 13:13-15,17; Galatians 6:9-10; Ephesians 4:29; Hebrews 13:16",
  },
];

const OurPriorities = () => {
  return (
    <MainLayout>
      <div className=" pt-[43px] pb-[80px] ">
        {/* Header */}
        <HeaderWithBackButton
          title="OUR PRIORITIES"
          description="Our mission is guided by key priorities that reflect our commitment to God, our community, and the world. These priorities shape our actions and help us fulfill our calling as a church"
        />

        {/* Priority Cards Grid */}
        <div className="mt-8 w-full grid grid-cols-1 md:grid-cols-2 gap-6 px-4 md:px-0">
          {priorities.map((priority, index) => (
            <PriorityCard
              key={index}
              title={priority.title}
              description={priority.description}
              isFirst={index % 2 === 0}
            />
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default OurPriorities;
