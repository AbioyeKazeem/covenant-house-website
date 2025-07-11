import {
  clearEventState,
  deleteEvent,
  fetchEvents,
  updateEvent,
  uploadEvent,
} from "../../store/eventSlice";
import { useAppDispatch, useAppSelector } from "../../api/hooks";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Spinner from "../../components/Spinner";
import Modal from "../../components/Modal";

interface EventFormData {
  title: string;
  description: string;
  ministry: string;
  date: string;
  // time:string;
  venue: string;
}

const EventUpload: React.FC = () => {
  const dispatch = useAppDispatch();
  const { events, loading, error, success } = useAppSelector(
    (state) => state.events
  );

  // Form state
  const [formData, setFormData] = useState<EventFormData>({
    title: "",
    description: "",
    ministry: "",
    date: "",
    // time: "",
    venue: "",
  });
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [editingId, setEditingId] = useState<number | null>(null);

  // Modal state
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalType, setModalType] = useState<
    "success" | "error" | "info" | "warning"
  >("info");
  const [modalMessage, setModalMessage] = useState<string>("");
  const [eventToDelete, setEventToDelete] = useState<number | null>(null);

  // Fetch events on component mount
  useEffect(() => {
    dispatch(fetchEvents());
  }, [dispatch]);

  // Handle success and error states
  useEffect(() => {
    if (success) {
      setIsModalOpen(true);
      setModalType("success");
      setModalMessage(
        editingId
          ? "Event updated successfully!"
          : "Event uploaded successfully!"
      );
      resetForm();

      // Clear success state after showing modal
      setTimeout(() => {
        dispatch(clearEventState());
      }, 3000);
    }

    if (error) {
      setIsModalOpen(true);
      setModalType("error");
      setModalMessage(error);

      // Clear error state after showing modal
      setTimeout(() => {
        dispatch(clearEventState());
      }, 3000);
    }
  }, [success, error, dispatch, editingId]);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setSelectedImage(file);

    // Create preview
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setImagePreview(reader.result as string);
    };
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate required fields
    if (
      !formData.title.trim() ||
      !formData.description.trim() ||
      !formData.ministry.trim() ||
      !formData.date.trim() ||
      // !formData.time.trim() ||
      !formData.venue.trim() ||
      (!selectedImage && !editingId)
    ) {
      setIsModalOpen(true);
      setModalType("error");
      setModalMessage("All fields are required!");
      return;
    }

    // Create FormData object for API
    const eventFormData = new FormData();
    eventFormData.append("title", formData.title);
    eventFormData.append("description", formData.description);
    eventFormData.append("ministry", formData.ministry);
    eventFormData.append("date", formData.date);
    // eventFormData.append("time", formData.time);
    eventFormData.append("venue", formData.venue);
    if (selectedImage) {
      eventFormData.append("eventImage", selectedImage);
    }

    if (editingId !== null) {
      dispatch(updateEvent({ id: editingId, formData: eventFormData }));
      dispatch(fetchEvents());
    } else {
      dispatch(uploadEvent(eventFormData));
      dispatch(fetchEvents());
    }
  };

  const handleDelete = (id: number) => {
    // Instead of window.confirm, show the modal
    setEventToDelete(id);
    setIsModalOpen(true);
    setModalType("warning");
    setModalMessage("Are you sure you want to delete this event?");
  };

  const confirmDelete = () => {
    if (eventToDelete !== null) {
      dispatch(deleteEvent(eventToDelete));
      setEventToDelete(null);
      setIsModalOpen(false);
    }
  };

  const handleEdit = (event: any) => {
    setFormData({
      title: event.title,
      description: event.description || "",
      ministry: event.ministry || "",
      date: event.date,
      // time:event.time,
      venue: event.venue,
    });
    setImagePreview(event.image);
    setEditingId(event.id);

    // Scroll to form
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const resetForm = () => {
    setFormData({
      title: "",
      description: "",
      ministry: "",
      date: "",
      // time: "",
      venue: "",
    });
    setSelectedImage(null);
    setImagePreview(null);
    setEditingId(null);
  };

  const handleCancel = () => {
    resetForm();
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    // Reset eventToDelete if this was a canceled delete operation
    if (modalType === "warning") {
      setEventToDelete(null);
    }
  };

  return (
    <div className="p-6 md:p-10 max-w-5xl mx-auto bg-white shadow-md rounded-xl w-full">
      <h2 className="text-3xl font-bold mb-6 text-center">
        {editingId ? "Update Event" : "Upload Event"}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Image Preview */}
        {imagePreview && (
          <div className="mb-4">
            <p className="mb-2 text-sm font-medium text-gray-700">
              Image Preview:
            </p>
            <img
              src={imagePreview}
              alt="Event preview"
              className="w-full h-48 object-cover rounded-lg border"
            />
          </div>
        )}

        {/* File Upload */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Event Image {!editingId && "(required)"}
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="border p-3 w-full rounded-lg"
          />
        </div>

        {/* Title */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Title (required)
          </label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            placeholder="Event Title"
            className="border p-3 w-full rounded-lg"
            required
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Description (required)
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            placeholder="Event Description"
            className="border p-3 w-full rounded-lg min-h-[100px]"
            required
          />
        </div>

        {/* Ministry */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Ministry (required)
          </label>
          <input
            type="text"
            name="ministry"
            value={formData.ministry}
            onChange={handleInputChange}
            placeholder="Ministry"
            className="border p-3 w-full rounded-lg"
            required
          />
        </div>

        {/* Date */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Date (required)
          </label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleInputChange}
            className="border p-3 w-full rounded-lg"
            required
          />
        </div>

        {/* Time */}
        {/* <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            time (required)
          </label>
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleInputChange}
            className="border p-3 w-full rounded-lg"
            required
          />
        </div> */}

        {/* Venue */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Venue (required)
          </label>
          <input
            type="text"
            name="venue"
            value={formData.venue}
            onChange={handleInputChange}
            placeholder="Venue"
            className="border p-3 w-full rounded-lg"
            required
          />
        </div>

        {/* Submit and Cancel Buttons */}
        <div className="flex justify-center space-x-4 pt-4">
          <button
            type="submit"
            disabled={loading}
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg text-sm flex items-center"
          >
            {loading && <Spinner size="small" color="text-white" />}
            {editingId ? "Update Event" : "Upload Event"}
          </button>

          {editingId && (
            <button
              type="button"
              onClick={handleCancel}
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-5 py-2 rounded-lg text-sm"
            >
              Cancel
            </button>
          )}
        </div>
      </form>

      {/* Event List */}
      <div className="mt-16">
        <h3 className="text-2xl font-bold mb-6">Events List</h3>

        {loading && !events.length && (
          <div className="flex justify-center py-8">
            <Spinner size="large" />
          </div>
        )}

        {!loading && !events.length && (
          <p className="text-center text-gray-500 py-8">No events found.</p>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-white shadow-lg rounded-xl overflow-hidden w-full border"
            >
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold text-blue-600">
                  {event.title}
                </h3>
                <p className="text-gray-600 mt-1 text-sm">
                  {new Date(event.date).toLocaleDateString()} | {event.venue}
                </p>
                <p className="text-gray-500 mt-2 text-sm line-clamp-2">
                  {event.description}
                </p>
                <div className="flex justify-between mt-4">
                  <button
                    onClick={() => handleEdit(event)}
                    className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded-lg text-sm"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(event.id)}
                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg text-sm"
                  >
                    Delete
                  </button>
                  <Link
                    to={`/event/${event.id}`}
                    className="text-blue-600 hover:text-blue-800 font-medium text-sm"
                  >
                    Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Notification Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        title={
          modalType === "success"
            ? "Success"
            : modalType === "error"
            ? "Error"
            : modalType === "warning"
            ? "Confirm Delete"
            : "Information"
        }
        type={modalType}
      >
        <p className="text-sm">{modalMessage}</p>

        {/* Show action buttons only for warning/confirmation modals */}
        {modalType === "warning" && (
          <div className="flex justify-end mt-4 space-x-2">
            <button
              onClick={handleModalClose}
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-1 rounded-lg text-sm"
            >
              Cancel
            </button>
            <button
              onClick={confirmDelete}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded-lg text-sm"
            >
              Delete
            </button>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default EventUpload;
