// import React, { useEffect, useState } from "react";

// type Contact = {
//   id: string;
//   name: string;
//   email: string;
//   message: string;
//   createdAt: string;
// };

// // Dummy data to show now
// const dummyContacts: Contact[] = [
//   {
//     id: "1",
//     name: "John Doe",
//     email: "john@example.com",
//     message: "Hello, this is a test message.",
//     createdAt: new Date().toISOString(),
//   },
//   {
//     id: "2",
//     name: "Jane Smith",
//     email: "jane@example.com",
//     message: "Another test message here!",
//     createdAt: new Date().toISOString(),
//   },
// ];

// const ViewContacts: React.FC = () => {
//   const [contacts, setContacts] = useState<Contact[]>(dummyContacts);
//   const [selectedContact, setSelectedContact] = useState<Contact | null>(null);
//   const [page, setPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1);

//   // Flag to control if we want to fetch from API or use dummy data
//   const useApi = false;
//   const fetchContacts = async (currentPage = 1) => {
//     try {
//       const res = await fetch(`/api/contacts?page=${currentPage}`);
//       const data = await res.json();
//       setContacts(data.contacts);
//       setTotalPages(data.totalPages);
//     } catch (error) {
//       console.error("Failed to fetch contacts", error);
//     }
//   };

//   useEffect(() => {
//     if (useApi) {
//       fetchContacts(page);
//     } else {
//       setTotalPages(1);
//       setContacts(dummyContacts);
//     }
//   }, [page, useApi]);

//   const openModal = (contact: Contact) => setSelectedContact(contact);
//   const closeModal = () => setSelectedContact(null);

//   return (
//     <div className="p-6 max-w-4xl mx-auto">
//       <h1 className="text-2xl font-semibold mb-4">Contact Submissions</h1>

//       <div className="space-y-4">
//         {contacts.map((contact) => (
//           <div
//             key={contact.id}
//             className="p-4 border rounded shadow hover:bg-gray-50 cursor-pointer"
//             onClick={() => openModal(contact)}
//           >
//             <p className="font-medium">{contact.name}</p>
//             <p className="text-sm text-gray-600">{contact.email}</p>
//             <p className="text-xs text-gray-400">
//               {new Date(contact.createdAt).toLocaleString()}
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
//       {selectedContact && (
//         <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
//           <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-lg relative">
//             <button
//               onClick={closeModal}
//               className="absolute top-2 right-3 text-gray-500 hover:text-black text-xl"
//             >
//               &times;
//             </button>
//             <h2 className="text-lg font-semibold mb-2">Contact Details</h2>
//             <p>
//               <strong>Name:</strong> {selectedContact.name}
//             </p>
//             <p>
//               <strong>Email:</strong> {selectedContact.email}
//             </p>
//             <p>
//               <strong>Message:</strong>
//             </p>
//             <p className="mt-1 bg-gray-100 p-2 rounded">{selectedContact.message}</p>
//             <p className="text-sm text-gray-400 mt-3">
//               Submitted on {new Date(selectedContact.createdAt).toLocaleString()}
//             </p>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ViewContacts;

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../store/store";
import {
  clearContactState,
  deleteContactMessage,
  fetchContactMessages,
} from "../../store/contactSlice";

// Updated Contact type to match the Redux interface
type Contact = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  message: string;
  created_at?: string;
  updated_at?: string;
};

const ViewContacts: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const {
    messages: contacts,
    loading,
    error,
    success,
  } = useSelector((state: RootState) => state.contact);

  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState<number | null>(
    null
  );

  useEffect(() => {
    // Fetch contacts when component mounts
    dispatch(fetchContactMessages());

    // Clear any previous state
    return () => {
      dispatch(clearContactState());
    };
  }, [dispatch]);

  const handleDeleteContact = async (contactId: number) => {
    try {
      await dispatch(deleteContactMessage(contactId)).unwrap();
      setShowDeleteConfirm(null);
      // Optionally show a success message
      console.log("Contact deleted successfully");
    } catch (error) {
      console.error("Failed to delete contact:", error);
    }
  };

  const openModal = (contact: Contact) => setSelectedContact(contact);
  const closeModal = () => setSelectedContact(null);

  const getFullName = (contact: Contact) => {
    return `${contact.first_name} ${contact.last_name}`.trim();
  };

  const formatDate = (dateString?: string) => {
    if (!dateString) return "N/A";
    return new Date(dateString).toLocaleString();
  };

  if (loading) {
    return (
      <div className="p-6 max-w-4xl mx-auto">
        <div className="flex justify-center items-center h-32">
          <div className="text-lg">Loading contacts...</div>
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
          onClick={() => dispatch(fetchContactMessages())}
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
        <h1 className="text-2xl font-semibold">Contact Submissions</h1>
        <button
          onClick={() => dispatch(fetchContactMessages())}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded text-sm"
        >
          Refresh
        </button>
      </div>

      {contacts.length === 0 ? (
        <div className="text-center py-8 text-gray-500">
          No contact messages found.
        </div>
      ) : (
        <div className="space-y-4">
          {contacts.map((contact) => (
            <div
              key={contact.id}
              className="p-4 border rounded shadow hover:bg-gray-50 cursor-pointer relative"
              onClick={() => openModal(contact)}
            >
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <p className="font-medium">{getFullName(contact)}</p>
                  <p className="text-sm text-gray-600">{contact.email}</p>
                  <p className="text-sm text-gray-600">{contact.phone}</p>
                  <p className="text-xs text-gray-400 mt-1">
                    {formatDate(contact.created_at)}
                  </p>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowDeleteConfirm(contact.id);
                  }}
                  className="text-red-500 hover:text-red-700 ml-4"
                  title="Delete contact"
                >
                  🗑️
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Contact Details Modal */}
      {selectedContact && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-lg relative max-h-96 overflow-y-auto">
            <button
              onClick={closeModal}
              className="absolute top-2 right-3 text-gray-500 hover:text-black text-xl"
            >
              &times;
            </button>
            <h2 className="text-lg font-semibold mb-4">Contact Details</h2>

            <div className="space-y-3">
              <div>
                <strong>Name:</strong> {getFullName(selectedContact)}
              </div>
              <div>
                <strong>Email:</strong> {selectedContact.email}
              </div>
              <div>
                <strong>Phone:</strong> {selectedContact.phone}
              </div>
              <div>
                <strong>Message:</strong>
                <div className="mt-1 bg-gray-100 p-3 rounded max-h-32 overflow-y-auto">
                  {selectedContact.message}
                </div>
              </div>
              <div className="text-sm text-gray-400 pt-2 border-t">
                Submitted on {formatDate(selectedContact.created_at)}
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
              Are you sure you want to delete this contact message? This action
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
                onClick={() => handleDeleteContact(showDeleteConfirm)}
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

export default ViewContacts;
