import React, { useEffect, useState } from "react";

type Prayer = {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  prayer_request: string;
  createdAt: string;
};

// Dummy data
const dummyPrayers: Prayer[] = [
  {
    id: "1",
    first_name: "John",
    last_name: "Doe",
    email: "john@example.com",
    phone: "1234567890",
    prayer_request: "Please pray for my health.",
    createdAt: new Date().toISOString(),
  },
  {
    id: "2",
    first_name: "Jane",
    last_name: "Smith",
    email: "jane@example.com",
    phone: "9876543210",
    prayer_request: "Guidance in my career.",
    createdAt: new Date().toISOString(),
  },
];

const ViewPrayerRequests: React.FC = () => {
  const [prayers, setPrayers] = useState<Prayer[]>(dummyPrayers);
  const [selectedPrayer, setSelectedPrayer] = useState<Prayer | null>(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const useApi = false;

  const fetchPrayers = async (currentPage = 1) => {
    try {
      const res = await fetch(`/api/prayer-requests?page=${currentPage}`);
      const data = await res.json();
      setPrayers(data.prayers);
      setTotalPages(data.totalPages);
    } catch (error) {
      console.error("Failed to fetch prayer requests", error);
    }
  };

  useEffect(() => {
    if (useApi) {
      fetchPrayers(page);
    } else {
      setPrayers(dummyPrayers);
      setTotalPages(1);
    }
  }, [page, useApi]);

  const openModal = (prayer: Prayer) => setSelectedPrayer(prayer);
  const closeModal = () => setSelectedPrayer(null);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-semibold mb-4">Prayer Requests</h1>

      <div className="space-y-4">
        {prayers.map((prayer) => (
          <div
            key={prayer.id}
            className="p-4 border rounded shadow hover:bg-gray-50 cursor-pointer"
            onClick={() => openModal(prayer)}
          >
            <p className="font-medium">
              {prayer.first_name} {prayer.last_name}
            </p>
            <p className="text-sm text-gray-600">{prayer.email}</p>
            <p className="text-xs text-gray-400">
              {new Date(prayer.createdAt).toLocaleString()}
            </p>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-6 flex justify-center gap-2">
        <button
          onClick={() => setPage((p) => Math.max(p - 1, 1))}
          className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
          disabled={page === 1}
        >
          Previous
        </button>
        <span className="px-2 text-sm text-gray-700">
          Page {page} of {totalPages}
        </span>
        <button
          onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
          className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
          disabled={page === totalPages}
        >
          Next
        </button>
      </div>

      {/* Modal */}
      {selectedPrayer && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-lg relative">
            <button
              onClick={closeModal}
              className="absolute top-2 right-3 text-gray-500 hover:text-black text-xl"
            >
              &times;
            </button>
            <h2 className="text-lg font-semibold mb-2">Prayer Request Details</h2>
            <p>
              <strong>Name:</strong> {selectedPrayer.first_name} {selectedPrayer.last_name}
            </p>
            <p>
              <strong>Email:</strong> {selectedPrayer.email}
            </p>
            <p>
              <strong>Phone:</strong> {selectedPrayer.phone}
            </p>
            <p className="mt-2">
              <strong>Prayer:</strong>
            </p>
            <p className="mt-1 bg-gray-100 p-2 rounded whitespace-pre-wrap">
              {selectedPrayer.prayer_request}
            </p>
            <p className="text-sm text-gray-400 mt-3">
              Submitted on {new Date(selectedPrayer.createdAt).toLocaleString()}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ViewPrayerRequests;
