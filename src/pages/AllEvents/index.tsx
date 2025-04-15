import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MainLayout from "../../MainLayout";
import { getEventsByMinistry } from "../../service/eventService";
import { Event, EventsByMinistry } from "../../types/event";
import HeaderWithBackButton from "../../components/HeaderWithBackButton";

interface EventCardProps {
  event: Event;
}

const AllEvents: React.FC = () => {
  const [eventsByMinistry, setEventsByMinistry] = useState<EventsByMinistry>(
    {}
  );
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const ministryEvents = getEventsByMinistry();
    setEventsByMinistry(ministryEvents);
    setLoading(false);
  }, []);

  const EventCard: React.FC<EventCardProps> = ({ event }) => {
    return (
      <div className="flex flex-col bg-white shadow-sm border-[#B9B7B9] p-[17px] font-poppins">
        {/* Event Image */}
        <div className="mb-3 border border-gray-200 rounded-md overflow-hidden">
          <div className="relative">
            <div className="absolute top-2 right-2 bg-blue-500 text-white text-xs font-medium py-1 px-2 rounded">
              RCCG LIFE
            </div>
            <img
              src="/event.png"
              alt={event.title}
              className="w-full h-48 object-cover"
            />
          </div>
        </div>

        {/* Event Info */}
        <h3 className="textx-sm font-medium mb-1">{event.title}</h3>
        <p className="text-sm mb-3 font-normal">{event.formattedDate}</p>

        <Link
          to={`/events/${event.id}`}
          className="text-sm text-right text-[#2F2860] font-medium"
        >
          See Details
        </Link>
      </div>
    );
  };

  if (loading) {
    return (
      <MainLayout>
        <div className="pt-[43px] pb-[80px] flex justify-center items-center">
          <p>Loading events...</p>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="pt-[43px] pb-[80px]">
        <HeaderWithBackButton
          title="ALL EVENTS"
          description="A Celebration of Faith – Explore All Our Church Gatherings"
        />
        <div className="max-w-[1059px] mx-auto px-4 mt-[70px]">
          {/* Events Grouped by Ministry */}
          <div className="space-y-16">
            {Object.entries(eventsByMinistry).map(([ministry, events]) => (
              <div key={ministry}>
                <div className="bg-[#2F2860] text-white py-2 px-10 inline-block mb-6">
                  <h2 className="text-lg font-medium font-poppins">
                    {ministry}
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {events.map((event) => (
                    <EventCard key={event.id} event={event} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default AllEvents;
