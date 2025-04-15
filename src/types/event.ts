// types/event.ts

export interface Event {
  id: number;
  title: string;
  date: Date;
  formattedDate: string;
  time: string;
  venue: string;
  description: string;
  image: string;
  category: string;
  ministry: string;
  color: string;
}

export type EventsByMinistry = Record<string, Event[]>;
