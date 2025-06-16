import React, { useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchEvents } from "../../store/eventSlice";
import MainLayout from "../../MainLayout";
import HeaderWithBackButton from "../../components/HeaderWithBackButton";
import { AppDispatch, RootState } from "../../store/store";

// Event interface based on Redux state
interface Event {
  id: number;
  title: string;
  description: string;
  ministry: string;
  date: string;
  venue: string;
  image: string;
}

interface EventsByMinistry {
  [ministry: string]: Event[];
}

interface EventCardProps {
  event: Event;
}

const AllEvents: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { events, loading, error } = useSelector(
    (state: RootState) => state.events
  );

  useEffect(() => {
    // Fetch events if not already loaded
    if (events.length === 0) {
      dispatch(fetchEvents());
    }
  }, [dispatch, events.length]);

  // Group events by ministry using useMemo for performance
  const eventsByMinistry: EventsByMinistry = useMemo(() => {
    return events.reduce((acc: EventsByMinistry, event: Event) => {
      const ministry = event.ministry || "General";
      if (!acc[ministry]) {
        acc[ministry] = [];
      }
      acc[ministry].push(event);
      return acc;
    }, {});
  }, [events]);

  // Format date for display
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

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
              src={event.image || "/event.png"}
              alt={event.title}
              className="w-full h-48 object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "/event.png";
              }}
            />
          </div>
        </div>

        {/* Event Info */}
        <h3 className="text-sm font-medium mb-1">{event.title}</h3>
        <p className="text-sm mb-3 font-normal">{formatDate(event.date)}</p>

        <Link
          to={`/events/${event.id}`}
          className="text-sm text-right text-[#2F2860] font-medium hover:underline"
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

  if (error) {
    return (
      <MainLayout>
        <div className="pt-[43px] pb-[80px] flex justify-center items-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-red-600 mb-4">Error</h1>
            <p className="mb-4">{error}</p>
            <button
              onClick={() => dispatch(fetchEvents())}
              className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 mr-4"
            >
              Retry
            </button>
            <Link
              to="/events"
              className="text-indigo-600 hover:text-indigo-800"
            >
              Return to Calendar
            </Link>
          </div>
        </div>
      </MainLayout>
    );
  }

  // Show message if no events are available
  if (events.length === 0) {
    return (
      <MainLayout>
        <div className="pt-[43px] pb-[80px]">
          <HeaderWithBackButton
            title="ALL EVENTS"
            description="A Celebration of Faith – Explore All Our Church Gatherings"
          />
          <div className="max-w-[1059px] mx-auto px-4 mt-[70px] text-center">
            <h2 className="text-xl font-medium text-gray-600 mb-4">
              No events available at the moment
            </h2>
            <p className="text-gray-500 mb-6">
              Check back later for upcoming church events and activities.
            </p>
            <Link
              to="/events"
              className="text-indigo-600 hover:text-indigo-800 font-medium"
            >
              Return to Calendar
            </Link>
          </div>
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
            {Object.entries(eventsByMinistry).map(
              ([ministry, ministryEvents]) => (
                <div key={ministry}>
                  <div className="bg-[#2F2860] text-white py-2 px-10 inline-block mb-6">
                    <h2 className="text-lg font-medium font-poppins">
                      {ministry}
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {ministryEvents.map((event) => (
                      <EventCard key={event.id} event={event} />
                    ))}
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default AllEvents;
