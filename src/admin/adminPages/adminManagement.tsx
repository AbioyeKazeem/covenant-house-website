import React, { useState } from "react";
import { FaSave, FaEdit, FaTrash, FaTimes } from "react-icons/fa";

interface User {
  id: number;
  name: string;
  email: string;
}

const AdminUsers: React.FC = () => {
  const [users, setUsers] = useState<User[]>([
    { id: 1, name: "Abioye Kazeem", email: "abioyebabatunde@gmail.com" },
    { id: 2, name: "Adesola Adewale", email: "solaadewale@yahoo.com" },
  ]);
  const [editingUserId, setEditingUserId] = useState<number | null>(null);
  const [editName, setEditName] = useState("");
  const [editEmail, setEditEmail] = useState("");

  const handleEditClick = (user: User) => {
    setEditingUserId(user.id);
    setEditName(user.name);
    setEditEmail(user.email);
  };

  const handleSave = (id: number) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === id ? { ...user, name: editName, email: editEmail } : user
      )
    );
    setEditingUserId(null);
  };

  const handleDelete = (id: number) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Admin User Management</h1>

      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-3 text-left">Name</th>
              <th className="border p-3 text-left">Email</th>
              <th className="border p-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="border">
                {editingUserId === user.id ? (
                  <>
                    <td className="border p-3">
                      <input
                        type="text"
                        value={editName}
                        onChange={(e) => setEditName(e.target.value)}
                        className="w-full border p-2 rounded"
                      />
                    </td>
                    <td className="border p-3">
                      <input
                        type="email"
                        value={editEmail}
                        onChange={(e) => setEditEmail(e.target.value)}
                        className="w-full border p-2 rounded"
                      />
                    </td>
                    <td className="border p-3 flex space-x-2">
                      <button onClick={() => handleSave(user.id)} className="text-green-500">
                        <FaSave />
                      </button>
                      <button onClick={() => setEditingUserId(null)} className="text-gray-500">
                        <FaTimes />
                      </button>
                    </td>
                  </>
                ) : (
                  <>
                    <td className="border p-3">{user.name}</td>
                    <td className="border p-3">{user.email}</td>
                    <td className="border p-3 flex space-x-2">
                      <button onClick={() => handleEditClick(user)} className="text-blue-500">
                        <FaEdit />
                      </button>
                      <button onClick={() => handleDelete(user.id)} className="text-red-500">
                        <FaTrash />
                      </button>
                    </td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminUsers;
