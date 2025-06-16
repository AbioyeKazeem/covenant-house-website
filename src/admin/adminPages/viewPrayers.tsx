// import React, { useEffect, useState } from "react";

// type Prayer = {
//   id: string;
//   first_name: string;
//   last_name: string;
//   email: string;
//   phone: string;
//   prayer_request: string;
//   createdAt: string;
// };

// // Dummy data
// const dummyPrayers: Prayer[] = [
//   {
//     id: "1",
//     first_name: "John",
//     last_name: "Doe",
//     email: "john@example.com",
//     phone: "1234567890",
//     prayer_request: "Please pray for my health.",
//     createdAt: new Date().toISOString(),
//   },
//   {
//     id: "2",
//     first_name: "Jane",
//     last_name: "Smith",
//     email: "jane@example.com",
//     phone: "9876543210",
//     prayer_request: "Guidance in my career.",
//     createdAt: new Date().toISOString(),
//   },
// ];

// const ViewPrayerRequests: React.FC = () => {
//   const [prayers, setPrayers] = useState<Prayer[]>(dummyPrayers);
//   const [selectedPrayer, setSelectedPrayer] = useState<Prayer | null>(null);
//   const [page, setPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1);

//   const useApi = false;

//   const fetchPrayers = async (currentPage = 1) => {
//     try {
//       const res = await fetch(`/api/prayer-requests?page=${currentPage}`);
//       const data = await res.json();
//       setPrayers(data.prayers);
//       setTotalPages(data.totalPages);
//     } catch (error) {
//       console.error("Failed to fetch prayer requests", error);
//     }
//   };

//   useEffect(() => {
//     if (useApi) {
//       fetchPrayers(page);
//     } else {
//       setPrayers(dummyPrayers);
//       setTotalPages(1);
//     }
//   }, [page, useApi]);

//   const openModal = (prayer: Prayer) => setSelectedPrayer(prayer);
//   const closeModal = () => setSelectedPrayer(null);

//   return (
//     <div className="p-6 max-w-4xl mx-auto">
//       <h1 className="text-2xl font-semibold mb-4">Prayer Requests</h1>

//       <div className="space-y-4">
//         {prayers.map((prayer) => (
//           <div
//             key={prayer.id}
//             className="p-4 border rounded shadow hover:bg-gray-50 cursor-pointer"
//             onClick={() => openModal(prayer)}
//           >
//             <p className="font-medium">
//               {prayer.first_name} {prayer.last_name}
//             </p>
//             <p className="text-sm text-gray-600">{prayer.email}</p>
//             <p className="text-xs text-gray-400">
//               {new Date(prayer.createdAt).toLocaleString()}
//             </p>
//           </div>
//         ))}
//       </div>

//       {/* Pagination */}
//       <div className="mt-6 flex justify-center gap-2">
//         <button
//           onClick={() => setPage((p) => Math.max(p - 1, 1))}
//           className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
//           disabled={page === 1}
//         >
//           Previous
//         </button>
//         <span className="px-2 text-sm text-gray-700">
//           Page {page} of {totalPages}
//         </span>
//         <button
//           onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
//           className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
//           disabled={page === totalPages}
//         >
//           Next
//         </button>
//       </div>

//       {/* Modal */}
//       {selectedPrayer && (
//         <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
//           <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-lg relative">
//             <button
//               onClick={closeModal}
//               className="absolute top-2 right-3 text-gray-500 hover:text-black text-xl"
//             >
//               &times;
//             </button>
//             <h2 className="text-lg font-semibold mb-2">Prayer Request Details</h2>
//             <p>
//               <strong>Name:</strong> {selectedPrayer.first_name} {selectedPrayer.last_name}
//             </p>
//             <p>
//               <strong>Email:</strong> {selectedPrayer.email}
//             </p>
//             <p>
//               <strong>Phone:</strong> {selectedPrayer.phone}
//             </p>
//             <p className="mt-2">
//               <strong>Prayer:</strong>
//             </p>
//             <p className="mt-1 bg-gray-100 p-2 rounded whitespace-pre-wrap">
//               {selectedPrayer.prayer_request}
//             </p>
//             <p className="text-sm text-gray-400 mt-3">
//               Submitted on {new Date(selectedPrayer.createdAt).toLocaleString()}
//             </p>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ViewPrayerRequests;

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../store/store";
import {
  clearPrayerRequestState,
  deletePrayerRequest,
  fetchPrayerRequests,
} from "../../store/prayerSlice";

// Updated Prayer type to match the Redux interface
type Prayer = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  prayer_request: string;
  contact_team?: boolean;
  created_at?: string;
  updated_at?: string;
};

const ViewPrayerRequests: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const {
    prayerRequests: prayers,
    loading,
    error,
    success,
  } = useSelector((state: RootState) => state.prayerRequest);

  const [selectedPrayer, setSelectedPrayer] = useState<Prayer | null>(null);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState<number | null>(
    null
  );

  useEffect(() => {
    // Fetch prayer requests when component mounts
    dispatch(fetchPrayerRequests());

    // Clear any previous state
    return () => {
      dispatch(clearPrayerRequestState());
    };
  }, [dispatch]);

  const handleDeletePrayer = async (prayerId: number) => {
    try {
      await dispatch(deletePrayerRequest(prayerId)).unwrap();
      setShowDeleteConfirm(null);
      // Optionally show a success message
      console.log("Prayer request deleted successfully");
    } catch (error) {
      console.error("Failed to delete prayer request:", error);
    }
  };

  const openModal = (prayer: Prayer) => setSelectedPrayer(prayer);
  const closeModal = () => setSelectedPrayer(null);

  const getFullName = (prayer: Prayer) => {
    return `${prayer.first_name} ${prayer.last_name}`.trim();
  };

  const formatDate = (dateString?: string) => {
    if (!dateString) return "N/A";
    return new Date(dateString).toLocaleString();
  };

  if (loading) {
    return (
      <div className="p-6 max-w-4xl mx-auto">
        <div className="flex justify-center items-center h-32">
          <div className="text-lg">Loading prayer requests...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-6 max-w-4xl mx-auto">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          <strong>Error:</strong> {error}
        </div>
        <button
          onClick={() => dispatch(fetchPrayerRequests())}
          className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold">Prayer Requests</h1>
        <button
          onClick={() => dispatch(fetchPrayerRequests())}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded text-sm"
        >
          Refresh
        </button>
      </div>

      {prayers.length === 0 ? (
        <div className="text-center py-8 text-gray-500">
          No prayer requests found.
        </div>
      ) : (
        <div className="space-y-4">
          {prayers.map((prayer) => (
            <div
              key={prayer.id}
              className="p-4 border rounded shadow hover:bg-gray-50 cursor-pointer relative"
              onClick={() => openModal(prayer)}
            >
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <p className="font-medium">{getFullName(prayer)}</p>
                  <p className="text-sm text-gray-600">{prayer.email}</p>
                  <p className="text-sm text-gray-600">{prayer.phone}</p>
                  {prayer.contact_team && (
                    <p className="text-xs text-blue-600 font-medium mt-1">
                      📞 Requested team contact
                    </p>
                  )}
                  <p className="text-xs text-gray-400 mt-1">
                    {formatDate(prayer.created_at)}
                  </p>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowDeleteConfirm(prayer.id);
                  }}
                  className="text-red-500 hover:text-red-700 ml-4"
                  title="Delete prayer request"
                >
                  🗑️
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Prayer Request Details Modal */}
      {selectedPrayer && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-lg shadow-lg relative max-h-96 overflow-y-auto">
            <button
              onClick={closeModal}
              className="absolute top-2 right-3 text-gray-500 hover:text-black text-xl"
            >
              &times;
            </button>
            <h2 className="text-lg font-semibold mb-4">
              Prayer Request Details
            </h2>

            <div className="space-y-3">
              <div>
                <strong>Name:</strong> {getFullName(selectedPrayer)}
              </div>
              <div>
                <strong>Email:</strong> {selectedPrayer.email}
              </div>
              <div>
                <strong>Phone:</strong> {selectedPrayer.phone}
              </div>
              {selectedPrayer.contact_team && (
                <div className="bg-blue-50 p-2 rounded">
                  <span className="text-blue-800 font-medium">
                    📞 This person has requested to be contacted by the prayer
                    team
                  </span>
                </div>
              )}
              <div>
                <strong>Prayer Request:</strong>
                <div className="mt-1 bg-gray-100 p-3 rounded max-h-40 overflow-y-auto whitespace-pre-wrap">
                  {selectedPrayer.prayer_request}
                </div>
              </div>
              <div className="text-sm text-gray-400 pt-2 border-t">
                Submitted on {formatDate(selectedPrayer.created_at)}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {showDeleteConfirm && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-sm shadow-lg">
            <h3 className="text-lg font-semibold mb-4">Confirm Delete</h3>
            <p className="text-gray-600 mb-6">
              Are you sure you want to delete this prayer request? This action
              cannot be undone.
            </p>
            <div className="flex justify-end space-x-3">
              <button
                onClick={() => setShowDeleteConfirm(null)}
                className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={() => handleDeletePrayer(showDeleteConfirm)}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ViewPrayerRequests;
