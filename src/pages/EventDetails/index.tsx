import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import MainLayout from "../../MainLayout";
import { fetchEvents } from "../../store/eventSlice";
import HeaderWithBackButton from "../../components/HeaderWithBackButton";
import { AppDispatch, RootState } from "../../store/store";

const EventDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch<AppDispatch>();

  const { events, loading, error } = useSelector(
    (state: RootState) => state.events
  );

  // Find the specific event by ID
  const event = events.find((e) => e.id === parseInt(id || "0"));

  useEffect(() => {
    // Fetch events if not already loaded
    if (events.length === 0) {
      dispatch(fetchEvents());
    }
  }, [dispatch, events.length]);

  if (loading) {
    return (
      <MainLayout>
        <div className="pt-[43px] pb-[80px] flex justify-center items-center">
          <p>Loading event details...</p>
        </div>
      </MainLayout>
    );
  }

  if (error) {
    return (
      <MainLayout>
        <div className="pt-[43px] pb-[80px] flex flex-col items-center">
          <h1 className="text-2xl font-bold text-red-600 mb-4">Error</h1>
          <p className="mb-4">{error}</p>
          <Link to="/events" className="text-indigo-600 hover:text-indigo-800">
            Return to Events Calendar
          </Link>
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

  // Extract time from date string (assuming it includes time)
  const formatTime = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

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
                      src={event.image || "/event.png"}
                      alt={event.title}
                      className="w-full h-auto object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = "/event.png";
                      }}
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
                    <span className="inline-flex items-center px-3 py-1 text-lg rounded-full font-medium">
                      <span className="w-4 h-4 bg-[#6E5BEB] rounded-full mr-2"></span>
                      {event.ministry}
                    </span>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h3 className="text-indigo-600 text-xl font-medium mb-1">
                        Date:
                      </h3>
                      <p className="text-2xl font-poppins font-medium">
                        {formatDate(event.date)}
                      </p>
                    </div>
                    <div>
                      <h3 className="text-indigo-600 text-xl font-medium mb-1">
                        Time:
                      </h3>
                      <p className="text-2xl font-poppins font-medium">
                        {formatTime(event.date)}
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
