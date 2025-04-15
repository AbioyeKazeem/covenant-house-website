import React, { useState, useEffect, JSX } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { events } from "../../service/eventService";
import MainLayout from "../../MainLayout";
import { Event } from "../../types/event";

const EventsCalendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date(2025, 2)); // March 2025
  const [monthEvents, setMonthEvents] = useState<Event[]>([]);

  useEffect(() => {
    // Filter events for the current month
    const filteredEvents = events.filter(
      (event) =>
        event.date.getMonth() === currentMonth.getMonth() &&
        event.date.getFullYear() === currentMonth.getFullYear()
    );
    setMonthEvents(filteredEvents);
  }, [currentMonth]);

  // Get days in month
  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  // Get day of week of first day in month (0 = Sunday, 6 = Saturday)
  const getFirstDayOfMonth = (year, month) => {
    return new Date(year, month, 1).getDay();
  };

  // Navigate to previous month
  const prevMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1)
    );
  };

  // Navigate to next month
  const nextMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1)
    );
  };

  // Format month name
  const formatMonth = (date) => {
    return date.toLocaleString("default", { month: "long" });
  };

  // Check if a date has events
  const getEventsForDate = (day) => {
    return monthEvents.filter((event) => event.date.getDate() === day);
  };

  // Generate calendar grid
  const renderCalendar = () => {
    const daysInMonth = getDaysInMonth(
      currentMonth.getFullYear(),
      currentMonth.getMonth()
    );
    const firstDayOfMonth = getFirstDayOfMonth(
      currentMonth.getFullYear(),
      currentMonth.getMonth()
    );

    // Previous month calculations
    const prevMonthYear =
      currentMonth.getMonth() === 0
        ? currentMonth.getFullYear() - 1
        : currentMonth.getFullYear();
    const prevMonthIndex =
      currentMonth.getMonth() === 0 ? 11 : currentMonth.getMonth() - 1;
    const daysInPrevMonth = getDaysInMonth(prevMonthYear, prevMonthIndex);

    const days: JSX.Element[] = [];

    // Previous month days
    for (let i = firstDayOfMonth - 1; i >= 0; i--) {
      days.push(
        <div
          key={`prev-${daysInPrevMonth - i}`}
          className="h-24 border-t border-b ml-1 shadow-sm border-[#000000] p-2 text-gray-400"
        >
          {daysInPrevMonth - i}
        </div>
      );
    }

    // Current month days
    for (let day = 1; day <= daysInMonth; day++) {
      const dateEvents = getEventsForDate(day);

      days.push(
        <div
          key={`current-${day}`}
          className="h-24 border-t ml-1 border-b shadow-sm border-[#000000] p-2 relative"
        >
          <span className="text-gray-700">{day}</span>
          {dateEvents.map((event) => (
            <Link
              to={`/events/${event.id}`}
              key={event.id}
              className={`${event.color} text-white text-xs py-1 px-2 mt-2 rounded truncate block hover:opacity-90 transition`}
            >
              {event.title}
            </Link>
          ))}
        </div>
      );
    }

    // Next month days
    const totalCells = Math.ceil((firstDayOfMonth + daysInMonth) / 7) * 7;
    const nextMonthDays = totalCells - (firstDayOfMonth + daysInMonth);

    for (let i = 1; i <= nextMonthDays; i++) {
      days.push(
        <div
          key={`next-${i}`}
          className="h-24 border-t border-b ml-1 shadow-sm border-[#000000] p-2 text-gray-400"
        >
          {i}
        </div>
      );
    }

    return days;
  };

  return (
    <MainLayout>
      <div className="pt-12 pb-20">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-[#2F2860] mb-2">EVENTS</h1>
          <p className="text-[#000000] font-normal text-lg font-poppins">
            Stay Connected – Discover and Plan for Upcoming Church Events
          </p>
        </div>

        {/* Calendar and All Events sections */}
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between gap-8">
            {/* Our Calendar Section */}
            <div className="w-full md:w-3/4 mx-auto">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-medium font-poppins text-[#2F2860]">
                  Our Calendar
                </h2>
                <Link
                  to="/events/all"
                  className="text-2xl font-medium text-[#2F2860] font-poppins hover:underline"
                >
                  All Events
                </Link>
              </div>

              <div className="bg-white">
                {/* Month navigation */}
                <div className="flex justify-between items-center mb-8 ">
                  <button
                    onClick={prevMonth}
                    className="p-[20px] rounded-md bg-[#F2F0FAD9] hover:bg-gray-200 text-[#2F2860]"
                  >
                    <ChevronLeft size={30} />
                  </button>
                  <h3 className="text-2xl font-medium text-gray-700">
                    {formatMonth(currentMonth)}
                  </h3>
                  <button
                    onClick={nextMonth}
                    className="p-[20px] rounded-md bg-[#F2F0FAD9] hover:bg-gray-200 text-[#2F2860]"
                  >
                    <ChevronRight size={30} />
                  </button>
                </div>

                {/* Days of week header */}
                <div className="grid grid-cols-7 gap-0 mb-2 font-poppins">
                  {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
                    (day, index) => (
                      <div
                        key={index}
                        className="py-2 font-medium text-gray-500 text-center"
                      >
                        {day}
                      </div>
                    )
                  )}
                </div>

                {/* Calendar grid */}
                <div className="grid grid-cols-7 gap-0 border-collapse font-poppins">
                  {renderCalendar()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default EventsCalendar;
