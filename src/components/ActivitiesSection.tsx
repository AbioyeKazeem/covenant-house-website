import React from "react";

const activities = [
  {
    title: "rPad",
    description: "Directing and reporting portal for pastors and parishes",
    buttonText: "Login to rPad",
  },
  {
    title: "Events",
    description: "Upcoming events, conventions and meetings",
    buttonText: "View all Events",
  },
  {
    title: "Live Streaming",
    description: "Watch the 24th annual convention live now!",
    buttonText: "Watch",
  },
  {
    title: "Continental Overseer’s Desk",
    description: "Monthly inspirational messages from the pastor",
    buttonText: "Read Message",
  },
];

const ActivitiesSection = () => {
  return (
    <section
      id="activities-section"
      className="bg-[#1E1B4B] text-white py-12 px-6"
    >
      <div className="lg:px-[93px] grid grid-cols-1 md:grid-cols-4 gap-6 p-6">
        {activities.map((activity, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center py-[20px] px-4 relative h-[220px]"
          >
            {/* Divider Line (except first column) */}
            {index !== 0 && (
              <div className="hidden md:block absolute left-0 top-1/2 h-full border-l-2 border-[#FDFBFE] transform -translate-y-1/2"></div>
            )}

            {/* Content wrapped in flex-grow */}
            <div className="flex flex-col flex-grow">
              <h3 className="text-lg font-bold">{activity.title}</h3>
              <p className="text-sm font-normal mt-2 text-[#FFFFFF">
                {activity.description}
              </p>
            </div>

            {/* Button aligned at bottom */}
            <button className="mt-auto border-2 border-white text-white px-5 py-2 rounded-md text-sm font-semibold hover:bg-white hover:text-[#1E1B4B] transition">
              {activity.buttonText}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ActivitiesSection;
