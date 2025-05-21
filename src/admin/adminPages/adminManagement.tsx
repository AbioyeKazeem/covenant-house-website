import {
  clearError,
  deleteAdminUser,
  fetchAdminUsers,
  updateAdminUser,
  addAdminUser,
} from "../../store/authSlice";
import { useAppDispatch, useAppSelector } from "../../api/hooks";
import React, { useState, useEffect } from "react";
import { FaSave, FaEdit, FaTrash, FaTimes, FaPlus } from "react-icons/fa";

interface UserForm {
  name: string;
  email: string;
}

interface NewUserForm extends UserForm {
  password: string;
}

const AdminUsers = () => {
  const dispatch = useAppDispatch();
  const { adminUsers, loading, error } = useAppSelector((state) => state.auth);
  const [editingUserId, setEditingUserId] = useState<number | null>(null);
  const [editForm, setEditForm] = useState<UserForm>({ name: "", email: "" });
  const [isAdding, setIsAdding] = useState(false);
  const [newUser, setNewUser] = useState<NewUserForm>({
    name: "",
    email: "",
    password: "",
  });

  console.log({ adminUsers });

  useEffect(() => {
    dispatch(fetchAdminUsers());
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        dispatch(clearError());
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [error, dispatch]);

  const handleEditClick = (user: {
    id: number;
    name: string;
    email: string;
  }) => {
    setEditingUserId(user.id);
    setEditForm({ name: user.name, email: user.email });
  };

  const handleEditChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = async (id: number) => {
    try {
      await dispatch(
        updateAdminUser({
          id,
          name: editForm.name,
          email: editForm.email,
        })
      ).unwrap();
      dispatch(fetchAdminUsers());

      setEditingUserId(null);
    } catch (error) {
      console.error("Failed to update user:", error);
    }
  };

  const handleDelete = async (id: number) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      try {
        await dispatch(deleteAdminUser(id)).unwrap();
      } catch (error) {
        console.error("Failed to delete user:", error);
      }
    }
  };

  const handleAddUser = () => {
    setIsAdding(true);
    setNewUser({ name: "", email: "", password: "" });
  };

  const handleNewUserChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await dispatch(addAdminUser(newUser)).unwrap();
      setIsAdding(false);
    } catch (error) {
      console.error("Failed to add user:", error);
    }
  };

  if (loading) return <div className="p-4 text-center">Loading...</div>;

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Admin User Management
      </h1>

      {error && (
        <div className="mb-4 p-2 bg-red-100 text-red-700 rounded">{error}</div>
      )}

      {/* <div className="mb-4 flex justify-end">
        <button
          onClick={handleAddUser}
          className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded flex items-center"
        >
          <FaPlus className="mr-2" /> Add User
        </button>
      </div> */}

      {isAdding && (
        <form
          onSubmit={handleAddSubmit}
          className="mb-6 p-4 bg-gray-50 rounded"
        >
          <h2 className="text-xl font-semibold mb-4">Add New User</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                name="name"
                value={newUser.name}
                onChange={handleNewUserChange}
                className="w-full border p-2 rounded"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={newUser.email}
                onChange={handleNewUserChange}
                className="w-full border p-2 rounded"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Password</label>
              <input
                type="password"
                name="password"
                value={newUser.password}
                onChange={handleNewUserChange}
                className="w-full border p-2 rounded"
                required
              />
            </div>
          </div>
          <div className="flex space-x-2">
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded"
              disabled={loading}
            >
              Save
            </button>
            <button
              type="button"
              onClick={() => setIsAdding(false)}
              className="bg-gray-500 hover:bg-gray-700 text-white py-2 px-4 rounded"
            >
              Cancel
            </button>
          </div>
        </form>
      )}

      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-3 text-left">Name</th>
              <th className="border p-3 text-left">Email</th>
              <th className="border p-3 text-left">Role</th>
              <th className="border p-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {adminUsers?.map((user) => (
              <tr key={user.id} className="border hover:bg-gray-50">
                {editingUserId === user.id ? (
                  <>
                    <td className="border p-3">
                      <input
                        type="text"
                        name="name"
                        value={editForm.name}
                        onChange={handleEditChange}
                        className="w-full border p-2 rounded"
                      />
                    </td>
                    <td className="border p-3">
                      <input
                        type="email"
                        name="email"
                        value={editForm.email}
                        onChange={handleEditChange}
                        className="w-full border p-2 rounded"
                      />
                    </td>
                    <td className="border p-3">{user.role}</td>
                    <td className="border p-3 flex space-x-2">
                      <button
                        onClick={() => handleSave(user.id)}
                        className="text-green-500 hover:text-green-700"
                        disabled={loading}
                      >
                        <FaSave />
                      </button>
                      <button
                        onClick={() => setEditingUserId(null)}
                        className="text-gray-500 hover:text-gray-700"
                      >
                        <FaTimes />
                      </button>
                    </td>
                  </>
                ) : (
                  <>
                    <td className="border p-3">{user.name}</td>
                    <td className="border p-3">{user.email}</td>
                    <td className="border p-3 capitalize">{user.role}</td>
                    <td className="border p-3 flex space-x-2">
                      <button
                        onClick={() => handleEditClick(user)}
                        className="text-blue-500 hover:text-blue-700"
                      >
                        <FaEdit />
                      </button>
                      <button
                        onClick={() => handleDelete(user.id)}
                        className="text-red-500 hover:text-red-700"
                      >
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
