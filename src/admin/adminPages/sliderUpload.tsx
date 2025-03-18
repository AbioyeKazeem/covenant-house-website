import { useState, useEffect } from "react";

interface Slider {
  id: number;
  image: string;
  title: string;
  verse: string;
}

const SliderUpload = () => {
  const [sliders, setSliders] = useState<Slider[]>(() => {
    const savedSliders = localStorage.getItem("sliders");
    return savedSliders ? JSON.parse(savedSliders) : [];
  });

  const [selectedImage, setSelectedImage] = useState<{ image: string; title: string; verse: string } | null>(null);
  const [title, setTitle] = useState("");
  const [verse, setVerse] = useState("");
  const [editingId, setEditingId] = useState<number | null>(null);

  useEffect(() => {
    localStorage.setItem("sliders", JSON.stringify(sliders));
  }, [sliders]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => {
      setSelectedImage({ image: reader.result as string, title: "", verse: "" });
    };
  };

  const handleSubmit = () => {
    if (!selectedImage || !title.trim() || !verse.trim()) return;

    if (editingId !== null) {
      setSliders(sliders.map(slider => slider.id === editingId ? { ...slider, title, verse } : slider));
      setEditingId(null);
    } else {
      const updatedSliders = [...sliders, { id: Date.now(), image: selectedImage.image, title, verse }];

      if (updatedSliders.length > 5) {
        updatedSliders.shift();
      }
      setSliders(updatedSliders);
    }

    setSelectedImage(null);
    setTitle("");
    setVerse("");
  };

  const deleteSlider = (id: number) => {
    if (!window.confirm("Are you sure?")) return;
    setSliders(sliders.filter((s) => s.id !== id));
  };

  const editSlider = (slider: Slider) => {
    setTitle(slider.title);
    setVerse(slider.verse);
    setEditingId(slider.id);
  };

  return (
    <div className="p-6 max-w-3xl mx-auto bg-white rounded-lg shadow-md">
      <h2 className="text-3xl font-bold mb-5 text-center">Upload Slider</h2>

      <div className="flex flex-col items-center gap-4">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter overlay text"
          className="border px-3 py-2 w-full rounded text-lg"
        />
        <input
          type="text"
          value={verse}
          onChange={(e) => setVerse(e.target.value)}
          placeholder="Enter Bible verse"
          className="border px-3 py-2 w-full rounded text-lg"
        />
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="border p-2 w-full rounded cursor-pointer"
        />

        {selectedImage && (
          <div className="w-full flex flex-col items-center gap-3 relative">
            <div className="relative w-32 h-32">
              <img src={selectedImage.image} alt="Preview" className="w-full h-full object-cover rounded-lg shadow" />
              <div className="absolute bottom-8 left-0 right-0 bg-black bg-opacity-50 text-white text-center py-1 text-xs rounded-b-lg text-sm">
                {title || "Preview Title"}
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center py-1 text-xs rounded-b-lg text-sm">
                {verse || "Bible Verse"}
              </div>
            </div>

            <button
              onClick={handleSubmit}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2 rounded shadow transition-all"
              disabled={!title.trim() || !verse.trim()}
            >
              {editingId !== null ? "Update" : "Submit"}
            </button>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
        {sliders.map((slider) => (
          <div key={slider.id} className="bg-gray-100 rounded-lg shadow-md p-4 relative">
            <div className="relative w-full h-32">
              <img src={slider.image} alt={slider.title} className="w-full h-full object-cover rounded-lg" />
              <div className="absolute bottom-8 left-0 right-0 bg-black bg-opacity-50 text-white text-center py-1 text-xs rounded-b-lg text-sm">
                {slider.title}
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center py-1 text-xs rounded-b-lg text-sm">
                {slider.verse}
              </div>
            </div>
            <button
              onClick={() => editSlider(slider)}
              className="mt-3 w-full bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded shadow transition-all"
            >
              Edit
            </button>
            <button
              onClick={() => deleteSlider(slider.id)}
              className="mt-2 w-full bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded shadow transition-all"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SliderUpload;
