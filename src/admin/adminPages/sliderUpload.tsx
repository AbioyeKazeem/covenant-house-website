import Spinner from "../../components/Spinner";
import {
  clearSliderError,
  deleteSlider,
  fetchSliders,
  updateSlider,
  uploadSlider,
  Slider,
} from "../../store/sliderSlice";
import { AppDispatch, RootState } from "../../store/store";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const SliderUpload = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { sliders, loading, error } = useSelector(
    (state: RootState) => state.slider
  );

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [title, setTitle] = useState("");
  const [verse, setVerse] = useState("");
  const [editingId, setEditingId] = useState<number | null>(null);

  useEffect(() => {
    dispatch(fetchSliders());
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        dispatch(clearSliderError());
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [error, dispatch]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setSelectedFile(file);

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setPreviewImage(reader.result as string);
    };
  };

  const handleSubmit = async () => {
    if (editingId !== null) {
      await dispatch(updateSlider({ id: editingId, title, verse }));
      dispatch(fetchSliders());
      resetForm();
    } else {
      if (!selectedFile) return;
      await dispatch(uploadSlider({ image: selectedFile, title, verse }));
      dispatch(fetchSliders());
      resetForm();
    }
  };

  const resetForm = () => {
    setTitle("");
    setVerse("");
    setSelectedFile(null);
    setPreviewImage(null);
    setEditingId(null);
  };

  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [sliderToDelete, setSliderToDelete] = useState<number | null>(null);

  const handleDeleteClick = (id: number) => {
    setSliderToDelete(id);
    setShowDeleteConfirm(true);
  };

  const handleConfirmDelete = async () => {
    if (sliderToDelete !== null) {
      await dispatch(deleteSlider(sliderToDelete));
      setShowDeleteConfirm(false);
      setSliderToDelete(null);
    }
  };

  const handleCancelDelete = () => {
    setShowDeleteConfirm(false);
    setSliderToDelete(null);
  };

  const handleEditSlider = (slider: Slider) => {
    setTitle(slider.title);
    setVerse(slider.verse);
    setEditingId(slider.id);
  };

  const getImageUrl = (imagePath: string | undefined) => {
    if (!imagePath) return "";
    if (imagePath.startsWith("http")) return imagePath;
    return `https://api.covenanthouserccg.org/${imagePath}`;
  };

  return (
    <div className="p-6 max-w-3xl mx-auto bg-white rounded-lg shadow-md">
      <h2 className="text-3xl font-bold mb-5 text-center">Upload Slider</h2>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          <p>{error}</p>
        </div>
      )}

      <div className="flex flex-col items-center gap-4">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter overlay text (optional)"
          className="border px-3 py-2 w-full rounded text-lg"
        />
        <input
          type="text"
          value={verse}
          onChange={(e) => setVerse(e.target.value)}
          placeholder="Enter Bible verse (optional)"
          className="border px-3 py-2 w-full rounded text-lg"
        />

        {editingId === null && (
          <input
            type="file"
            accept="image/*"
            name="sliderImage"
            onChange={handleFileChange}
            className="border p-2 w-full rounded cursor-pointer"
          />
        )}

        {(previewImage || editingId !== null) && (
          <div className="w-full flex flex-col items-center gap-3 relative">
            {previewImage && (
              <div className="relative w-32 h-32">
                <img
                  src={previewImage}
                  alt="Preview"
                  className="w-full h-full object-cover rounded-lg shadow"
                />
                {title && (
                  <div className="absolute bottom-8 left-0 right-0 bg-black bg-opacity-50 text-white text-center py-1 text-xs rounded-b-lg text-sm">
                    {title}
                  </div>
                )}
                {verse && (
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center py-1 text-xs rounded-b-lg text-sm">
                    {verse}
                  </div>
                )}
              </div>
            )}

            <div className="flex gap-2">
              <button
                onClick={handleSubmit}
                disabled={loading || (editingId === null && !selectedFile)}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2 rounded shadow transition-all disabled:bg-blue-300"
              >
                {loading ? (
                  <span className="flex items-center">
                    <Spinner /> Processing...
                  </span>
                ) : editingId !== null ? (
                  "Update"
                ) : (
                  "Submit"
                )}
              </button>

              {editingId !== null && (
                <button
                  onClick={resetForm}
                  className="bg-gray-500 hover:bg-gray-600 text-white font-semibold px-5 py-2 rounded shadow transition-all"
                >
                  Cancel
                </button>
              )}
            </div>
          </div>
        )}
      </div>

      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4">Uploaded Sliders</h3>

        {loading && !editingId && (
          <div className="flex justify-center my-8">
            <Spinner size="large" />
          </div>
        )}

        {!loading && sliders.length === 0 && (
          <p className="text-center text-gray-500">No sliders uploaded yet.</p>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-2">
          {sliders.map((slider) => (
            <div
              key={slider.id}
              className="bg-gray-100 rounded-lg shadow-md p-4 relative"
            >
              <div className="relative w-full h-32">
                <img
                  src={getImageUrl(slider.image)}
                  alt={slider.title}
                  className="w-full h-full object-cover rounded-lg"
                />
                {slider.title && (
                  <div className="absolute bottom-8 left-0 right-0 bg-black bg-opacity-50 text-white text-center py-1 text-xs rounded-b-lg text-sm">
                    {slider.title}
                  </div>
                )}
                {slider.verse && (
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center py-1 text-xs rounded-b-lg text-sm">
                    {slider.verse}
                  </div>
                )}
              </div>

              <div className="flex flex-col gap-2 mt-3">
                <button
                  onClick={() => handleEditSlider(slider)}
                  disabled={loading}
                  className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded shadow transition-all disabled:bg-green-300"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteClick(slider.id)}
                  disabled={loading}
                  className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded shadow transition-all disabled:bg-red-300"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {showDeleteConfirm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
            <h3 className="text-xl font-bold mb-4">Confirm Delete</h3>
            <p className="mb-6">Are you sure you want to delete this slider?</p>
            <div className="flex justify-end space-x-3">
              <button
                onClick={handleCancelDelete}
                className="px-4 py-2 bg-gray-300 hover:bg-gray-400 text-gray-800 rounded transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmDelete}
                className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded transition-colors"
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

export default SliderUpload;
