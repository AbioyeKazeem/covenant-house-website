import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

interface Event {
  id: number;
  image: string;
  title: string;
  date: string;
  venue: string;
}

const EventUpload = () => {
  const [events, setEvents] = useState<Event[]>(() => {
    const savedEvents = localStorage.getItem("events");
    return savedEvents ? JSON.parse(savedEvents) : [];
  });

  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [venue, setVenue] = useState("");
  const [editingId, setEditingId] = useState<number | null>(null);

  useEffect(() => {
    localStorage.setItem("events", JSON.stringify(events));
  }, [events]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => {
      setSelectedImage(reader.result as string);
    };
  };

  const handleSubmit = () => {
    if (!selectedImage || !title.trim() || !date.trim() || !venue.trim()) return;

    if (editingId !== null) {
      setEvents(
        events.map(event =>
          event.id === editingId ? { ...event, image: selectedImage, title, date, venue } : event
        )
      );
      setEditingId(null);
    } else {
      const newEvent: Event = {
        id: Date.now(),
        image: selectedImage,
        title,
        date,
        venue,
      };
      setEvents([newEvent, ...events]);
    }

    setSelectedImage(null);
    setTitle("");
    setDate("");
    setVenue("");
  };

  const handleDelete = (id: number) => {
    setEvents(events.filter(event => event.id !== id));
  };

  const handleEdit = (event: Event) => {
    setSelectedImage(event.image);
    setTitle(event.title);
    setDate(event.date);
    setVenue(event.venue);
    setEditingId(event.id);
  };

  return (
    <div className="p-10 max-w-5xl mx-auto bg-white shadow-md rounded-xl w-full">
      <h2 className="text-3xl font-bold mb-6 text-center">Upload Event</h2>
      <div className="space-y-4">
        <input type="file" accept="image/*" onChange={handleFileChange} className="border p-3 w-full rounded-lg" />
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" className="border p-3 w-full rounded-lg" />
        <input type="text" value={date} onChange={(e) => setDate(e.target.value)} placeholder="Date" className="border p-3 w-full rounded-lg" />
        <input type="text" value={venue} onChange={(e) => setVenue(e.target.value)} placeholder="Venue" className="border p-3 w-full rounded-lg" />
        <button onClick={handleSubmit} className="bg-blue-600 text-white px-6 py-3 rounded-lg w-full text-lg">{editingId ? "Update" : "Submit"}</button>
      </div>
      
      <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event) => (
          <div key={event.id} className="bg-white shadow-lg rounded-xl overflow-hidden w-full">
            <img src={event.image} alt={event.title} className="w-full h-60 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-bold text-blue-600">{event.title}</h3>
              <p className="text-gray-600 mt-2 text-sm">{event.date} | {event.venue}</p>
              <div className="flex justify-between mt-4">
                <button onClick={() => handleEdit(event)} className="bg-yellow-500 text-white px-4 py-2 rounded-lg">Edit</button>
                <button onClick={() => handleDelete(event.id)} className="bg-red-500 text-white px-4 py-2 rounded-lg">Delete</button>
                <Link to={`/event/${event.id}`} className="text-blue-600 font-bold">See Details</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventUpload;