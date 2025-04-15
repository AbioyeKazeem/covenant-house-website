import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import MainLayout from "../../MainLayout";
import { getEventById } from "../../service/eventService";
import { Event } from "../../types/event";
import HeaderWithBackButton from "../../components/HeaderWithBackButton";

const EventDetails: React.FC = () => {
  const { id } = useParams();
  const [event, setEvent] = useState<Event | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (id) {
      const eventData = getEventById(id);
      if (eventData) {
        setEvent(eventData);
      }
      setLoading(false);
    }
  }, [id]);

  if (loading) {
    return (
      <MainLayout>
        <div className="pt-[43px] pb-[80px] flex justify-center items-center">
          <p>Loading event details...</p>
        </div>
      </MainLayout>
    );
  }

  if (!event) {
    return (
      <MainLayout>
        <div className="pt-[43px] pb-[80px] flex flex-col items-center">
          <h1 className="text-2xl font-bold text-indigo-900 mb-4">
            Event Not Found
          </h1>
          <p className="mb-4">
            The event you're looking for doesn't exist or has been removed.
          </p>
          <Link to="/events" className="text-indigo-600 hover:text-indigo-800">
            Return to Events Calendar
          </Link>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="pt-[43px] pb-[80px]">
        <div className="max-w-6xl mx-auto px-4">
          <HeaderWithBackButton title="EVENT DETAILS" />

          <div className="bg-white rounded-[13px] border-[#B9B7B9] font-poppins shadow-sm overflow-hidden">
            <div className="p-6 md:p-8">
              <div className="flex flex-col md:flex-row gap-8">
                {/* Left: Image */}
                <div className="w-full md:w-1/2">
                  <div className="rounded-lg overflow-hidden shadow-md">
                    <img
                      src="/event.png"
                      alt={event.title}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>

                {/* Right: Event Info */}
                <div className="w-full md:w-1/2">
                  <h2 className="text-2xl font-medium text-[#000000] mb-4">
                    {event.title}
                  </h2>
                  <p className="font-normal text-lg mb-6">
                    {event.description}
                  </p>

                  <div className="mb-8">
                    <span className="inline-flex items-center px-3 py-1 text-lg rounded-full font-medium ">
                      <span className="w-4 h-4 bg-[#6E5BEB]  rounded-full mr-2"></span>
                      {event.category}
                    </span>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h3 className="text-indigo-600 text-xl font-medium mb-1">
                        Date:
                      </h3>
                      <p className="text-2xl font-poppins font-medium">
                        {event.formattedDate}
                      </p>
                    </div>
                    <div>
                      <h3 className="text-indigo-600 text-xl font-medium mb-1">
                        Time:
                      </h3>
                      <p className="text-2xl font-poppins font-medium">
                        {event.time}
                      </p>
                    </div>
                    <div>
                      <h3 className="text-indigo-600 text-xl font-medium mb-1">
                        Venue:
                      </h3>
                      <p className="text-2xl font-poppins font-medium">
                        {event.venue}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default EventDetails;
