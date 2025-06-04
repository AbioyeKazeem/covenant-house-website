import React, { useEffect, useState } from "react";


type Contact = {
  id: string;
  name: string;
  email: string;
  message: string;
  createdAt: string;
};

// Dummy data to show now
const dummyContacts: Contact[] = [
  {
    id: "1",
    name: "John Doe",
    email: "john@example.com",
    message: "Hello, this is a test message.",
    createdAt: new Date().toISOString(),
  },
  {
    id: "2",
    name: "Jane Smith",
    email: "jane@example.com",
    message: "Another test message here!",
    createdAt: new Date().toISOString(),
  },
];

const ViewContacts: React.FC = () => {
  const [contacts, setContacts] = useState<Contact[]>(dummyContacts);
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  // Flag to control if we want to fetch from API or use dummy data
  const useApi = false;
  const fetchContacts = async (currentPage = 1) => {
    try {
      const res = await fetch(`/api/contacts?page=${currentPage}`);
      const data = await res.json();
      setContacts(data.contacts);
      setTotalPages(data.totalPages);
    } catch (error) {
      console.error("Failed to fetch contacts", error);
    }
  };

  useEffect(() => {
    if (useApi) {
      fetchContacts(page);
    } else {
      setTotalPages(1);
      setContacts(dummyContacts);
    }
  }, [page, useApi]);

  const openModal = (contact: Contact) => setSelectedContact(contact);
  const closeModal = () => setSelectedContact(null);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-semibold mb-4">Contact Submissions</h1>

      <div className="space-y-4">
        {contacts.map((contact) => (
          <div
            key={contact.id}
            className="p-4 border rounded shadow hover:bg-gray-50 cursor-pointer"
            onClick={() => openModal(contact)}
          >
            <p className="font-medium">{contact.name}</p>
            <p className="text-sm text-gray-600">{contact.email}</p>
            <p className="text-xs text-gray-400">
              {new Date(contact.createdAt).toLocaleString()}
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
      {selectedContact && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-lg relative">
            <button
              onClick={closeModal}
              className="absolute top-2 right-3 text-gray-500 hover:text-black text-xl"
            >
              &times;
            </button>
            <h2 className="text-lg font-semibold mb-2">Contact Details</h2>
            <p>
              <strong>Name:</strong> {selectedContact.name}
            </p>
            <p>
              <strong>Email:</strong> {selectedContact.email}
            </p>
            <p>
              <strong>Message:</strong>
            </p>
            <p className="mt-1 bg-gray-100 p-2 rounded">{selectedContact.message}</p>
            <p className="text-sm text-gray-400 mt-3">
              Submitted on {new Date(selectedContact.createdAt).toLocaleString()}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ViewContacts;
