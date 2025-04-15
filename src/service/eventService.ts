// services/eventService.ts
import { Event, EventsByMinistry } from "../types/event";

export const events: Event[] = [
  {
    id: 1,
    title: "Teenagers and Youth Hangout-Elevate",
    date: new Date(2024, 11, 28), // Dec 28, 2024
    formattedDate: "Sat, 28th Dec, 2024",
    time: "1:00 PM Prompt",
    venue: "Victoria Island, Lagos, Nigeria.",
    description:
      "Join us for an exciting Christian Teenagers and Youth Hangout - a time of fun, fellowship, and faith-building! Connect with like-minded young believers, engage in uplifting conversations, and enjoy activities that strengthen your spiritual journey. Don't miss this chance to grow in faith and friendship!",
    image: "/events/elevate-youth.jpg",
    category: "Children Ministry",
    ministry: "YOUTH MINISTRY",
    color: "bg-purple-500",
  },
  {
    id: 2,
    title: "Men's Prayer Breakfast",
    date: new Date(2025, 2, 23), // March 23, 2025
    formattedDate: "Sun, 23rd Mar, 2025",
    time: "8:00 AM",
    venue: "Church Main Hall, Victoria Island, Lagos",
    description:
      "Join the men of the church for a powerful morning of prayer, fellowship, and breakfast. This monthly gathering is designed to strengthen the bonds of brotherhood and provide spiritual encouragement.",
    image: "/events/mens-breakfast.jpg",
    category: "Men Ministry",
    ministry: "MEN MINISTRY",
    color: "bg-green-500",
  },
  {
    id: 3,
    title: "Women's Conference",
    date: new Date(2025, 2, 24), // March 24, 2025
    formattedDate: "Mon, 24th Mar, 2025",
    time: "10:00 AM - 4:00 PM",
    venue: "Church Auditorium, Victoria Island",
    description:
      "A special conference for women focusing on spiritual growth, leadership, and fellowship. Special guest speakers will share insights on faith, family, and purpose.",
    image: "/events/womens-conference.jpg",
    category: "Women Ministry",
    ministry: "WOMEN MINISTRY",
    color: "bg-green-500",
  },
  {
    id: 4,
    title: "Sunday Worship Service",
    date: new Date(2025, 3, 1), // March 1, 2025
    formattedDate: "Sun, 1st Mar, 2025",
    time: "9:00 AM",
    venue: "Main Sanctuary",
    description:
      "Join us for our weekly Sunday worship service with praise, worship, and an inspiring message from our pastor.",
    image: "/event.png",
    category: "Church Service",
    ministry: "MAIN SERVICE",
    color: "bg-red-500",
  },
];

export const getEventById = (id: number | string): Event | undefined => {
  return events.find((event) => event.id === Number(id));
};

export const getEventsByMinistry = (): EventsByMinistry => {
  const ministryMap: EventsByMinistry = {};

  events.forEach((event) => {
    if (!ministryMap[event.ministry]) {
      ministryMap[event.ministry] = [];
    }
    ministryMap[event.ministry].push(event);
  });

  return ministryMap;
};

export const getEventsForMonth = (year: number, month: number): Event[] => {
  return events.filter((event) => {
    return event.date.getFullYear() === year && event.date.getMonth() === month;
  });
};
