import {
  clearErrors,
  clearSuccess,
  deleteDeskPost,
  fetchDeskPosts,
  updateDeskPost,
  uploadDeskPost,
} from "../../store/pastorDeskSlice";
import { useAppDispatch, useAppSelector } from "../../api/hooks";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Spinner from "../../components/Spinner";
import Modal from "../../components/Modal";
import { RootState } from "../../store/store"; // Make sure to import your RootState type

const PastorDeskUpload = () => {
  const dispatch = useAppDispatch();
  const { posts, loading, error, success } = useAppSelector(
    (state: RootState) => state.pastorDesk
  );

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [title, setTitle] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [message, setMessage] = useState("");
  const [editingId, setEditingId] = useState<number | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState<
    "success" | "error" | "info" | "warning"
  >("info");
  const [modalMessage, setModalMessage] = useState("");
  const [pendingDeleteId, setPendingDeleteId] = useState<number | null>(null);

  console.log(posts);

  useEffect(() => {
    dispatch(fetchDeskPosts());
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      setModalType("error");
      setModalMessage(error);
      setShowModal(true);
      dispatch(clearErrors());
    }
    if (success) {
      setModalType("success");
      setModalMessage(success);
      setShowModal(true);
      dispatch(clearSuccess());
    }
  }, [error, success, dispatch]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setSelectedFile(file);

    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => {
      setSelectedImage(reader.result as string);
    };
  };

  const handleSubmit = () => {
    if (
      (!selectedFile && !editingId) ||
      !title.trim() ||
      !month.trim() ||
      !year.trim() ||
      !message.trim()
    ) {
      setModalType("error");
      setModalMessage("Please fill in all required fields");
      setShowModal(true);
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("month", month);
    formData.append("year", year);
    formData.append("message", message);

    if (selectedFile) {
      formData.append("postImage", selectedFile);
    }

    if (editingId !== null) {
      dispatch(updateDeskPost({ id: editingId, formData }))
        .unwrap()
        .then(() => {
          resetForm();
          // Refresh posts after update to ensure we have the latest data
          dispatch(fetchDeskPosts());
        })
        .catch((error) => {
          console.error("Failed to update post:", error);
        });
    } else {
      dispatch(uploadDeskPost({ formData }))
        .unwrap()
        .then(() => {
          resetForm();
          // Refresh posts after upload to ensure we have the latest data
          dispatch(fetchDeskPosts());
        })
        .catch((error) => {
          console.error("Failed to upload post:", error);
        });
    }
  };

  const resetForm = () => {
    setSelectedFile(null);
    setSelectedImage(null);
    setTitle("");
    setMonth("");
    setYear("");
    setMessage("");
    setEditingId(null);
  };

  const handleDelete = (id: number) => {
    setPendingDeleteId(id);
    setModalType("warning");
    setModalMessage("Are you sure you want to delete this post?");
    setShowModal(true);
  };

  const confirmDelete = () => {
    if (pendingDeleteId !== null) {
      dispatch(deleteDeskPost(pendingDeleteId));
      setPendingDeleteId(null);
      setShowModal(false);
    }
  };

  const handleEdit = (post: any) => {
    if (!post) return;

    setTitle(post.title || "");
    setMonth(post.month || "");
    setYear(post.year || "");
    setMessage(post.message || "");
    setEditingId(post.id);
    setSelectedImage(post.image || null);
  };

  const handleModalClose = () => {
    setShowModal(false);
    // Reset pendingDeleteId if user closes the modal without confirming deletion
    if (modalType === "warning") {
      setPendingDeleteId(null);
    }
  };

  // Derived state for better conditional rendering
  const isLoading = loading && (!posts || posts.length === 0);
  const isEmpty = !loading && (!posts || posts.length === 0);
  const hasPosts = !loading && posts && posts.length > 0;

  return (
    <div className="p-10 max-w-5xl mx-auto bg-white shadow-md rounded-xl w-full">
      <h2 className="text-3xl font-bold mb-6 text-center">
        Upload Pastor Desk Message
      </h2>

      {/* Form Section */}
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Post Image
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="border p-3 w-full rounded-lg"
          />
          {selectedImage && (
            <div className="mt-2">
              <img
                src={selectedImage}
                alt="Selected"
                className="h-40 object-cover rounded"
              />
            </div>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
            className="border p-3 w-full rounded-lg"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Month
            </label>
            <input
              type="text"
              value={month}
              onChange={(e) => setMonth(e.target.value)}
              placeholder="Month"
              className="border p-3 w-full rounded-lg"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Year
            </label>
            <input
              type="text"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              placeholder="Year"
              className="border p-3 w-full rounded-lg"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Message
          </label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Message"
            className="border p-3 w-full rounded-lg h-32"
          ></textarea>
        </div>

        <div className="flex justify-center">
          <button
            onClick={handleSubmit}
            disabled={loading}
            className="bg-lightpurple text-white px-6 py-2 rounded-lg text-sm flex items-center"
          >
            {loading ? (
              <>
                <Spinner size="small" color="text-white" />
                <span className="ml-2">Processing...</span>
              </>
            ) : editingId ? (
              "Update"
            ) : (
              "Submit"
            )}
          </button>
          {editingId && (
            <button
              onClick={resetForm}
              className="bg-gray-500 text-white px-6 py-2 rounded-lg text-sm ml-2"
            >
              Cancel
            </button>
          )}
        </div>
      </div>

      {/* Posts Section */}
      <div className="mt-10">
        {isLoading && (
          <div className="text-center py-12 flex flex-col items-center">
            <Spinner size="large" color="text-lightpurple" />
            <p className="mt-4 text-gray-600">Loading posts...</p>
          </div>
        )}

        {hasPosts && (
          <>
            <h3 className="text-xl font-bold mb-4">
              Pastor's Desk Messages ({posts?.length})
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts
                ?.filter((post) => post && post.id && post.image)
                .map((post) => (
                  <div
                    key={post.id}
                    className="bg-white shadow-lg rounded-xl overflow-hidden w-full"
                  >
                    <img
                      src={post.image || ""}
                      alt={post.title || "Post image"}
                      className="w-full h-60 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="text-lg font-bold text-blue-600">{`${
                        post.month || ""
                      } ${post.year || ""} – ${post.title || ""}`}</h3>
                      <p className="text-gray-600 mt-2 text-sm line-clamp-2">
                        {post.message || ""}
                      </p>
                      <div className="flex justify-between mt-4">
                        <button
                          onClick={() => handleEdit(post)}
                          className="bg-yellow-500 text-white px-4 py-2 rounded-lg text-xs"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(post.id)}
                          className="bg-red-500 text-white px-4 py-2 rounded-lg text-xs"
                        >
                          Delete
                        </button>
                        <Link
                          to={`/admin/post/${post.id}`}
                          className="bg-green-500 text-white px-4 py-2 rounded-lg text-xs"
                        >
                          View
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </>
        )}

        {isEmpty && (
          <div className="text-center py-8 text-gray-500">
            No pastor desk messages found. Add your first message now.
          </div>
        )}
      </div>

      {/* Notification Modal */}
      <Modal
        isOpen={showModal}
        onClose={handleModalClose}
        type={modalType}
        title={
          modalType === "success"
            ? "Success"
            : modalType === "error"
            ? "Error"
            : modalType === "warning"
            ? "Confirm Delete"
            : "Information"
        }
      >
        <div className="text-sm">
          <p>{modalMessage}</p>

          {modalType === "warning" && (
            <div className="flex justify-end mt-4 space-x-2">
              <button
                onClick={handleModalClose}
                className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg text-xs"
              >
                Cancel
              </button>
              <button
                onClick={confirmDelete}
                className="bg-red-500 text-white px-4 py-2 rounded-lg text-xs"
              >
                Delete
              </button>
            </div>
          )}
        </div>
      </Modal>
    </div>
  );
};

export default PastorDeskUpload;
