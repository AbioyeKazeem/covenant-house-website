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
    title:
      "We Desire To Worship God In Spirit And In Truth In Our Private And Public Worship.",
    description:
      "The LORD only shall be the object of our worship. We seek to hear from God and also desire the presence of His glory in our gatherings. 1 Kings 8:1; 1 Chronicles 12:9; Psalm 96:9; John 4:23-24; Revelation 22:9",
  },
  {
    title:
      "We Desire To Worship God In Spirit And In Truth In Our Private And Public Worship.",
    description:
      "The LORD only shall be the object of our worship. We seek to hear from God and also desire the presence of His glory in our gatherings. 1 Kings 8:1; 1 Chronicles 12:9; Psalm 96:9; John 4:23-24; Revelation 22:9",
  },
  {
    title:
      "We Desire To Worship God In Spirit And In Truth In Our Private And Public Worship.",
    description:
      "The LORD only shall be the object of our worship. We seek to hear from God and also desire the presence of His glory in our gatherings. 1 Kings 8:1; 1 Chronicles 12:9; Psalm 96:9; John 4:23-24; Revelation 22:9",
  },
  {
    title:
      "We Desire To Worship God In Spirit And In Truth In Our Private And Public Worship.",
    description:
      "The LORD only shall be the object of our worship. We seek to hear from God and also desire the presence of His glory in our gatherings. 1 Kings 8:1; 1 Chronicles 12:9; Psalm 96:9; John 4:23-24; Revelation 22:9",
  },
  {
    title:
      "We Desire To Worship God In Spirit And In Truth In Our Private And Public Worship.",
    description:
      "The LORD only shall be the object of our worship. We seek to hear from God and also desire the presence of His glory in our gatherings. 1 Kings 8:1; 1 Chronicles 12:9; Psalm 96:9; John 4:23-24; Revelation 22:9",
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
        <div className="mt-8 w-full grid grid-cols-1 md:grid-cols-2 gap-6">
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
