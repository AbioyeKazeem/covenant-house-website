import { useState, useEffect } from "react";

interface Slider {
  id: number;
  image: string;
  title: string;
}

const SliderUpload = () => {
  const [sliders, setSliders] = useState<Slider[]>(() => {
    const savedSliders = localStorage.getItem("sliders");
    return savedSliders ? JSON.parse(savedSliders) : [];
  });

  const [selectedImage, setSelectedImage] = useState<{ image: string; title: string } | null>(null);
  const [title, setTitle] = useState("");

  useEffect(() => {
    localStorage.setItem("sliders", JSON.stringify(sliders));
  }, [sliders]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => {
      setSelectedImage({ image: reader.result as string, title: "" });
    };
  };

  const handleSubmit = () => {
    if (!selectedImage || !title.trim()) return;

    const updatedSliders = [...sliders, { id: Date.now(), image: selectedImage.image, title }];

    if (updatedSliders.length > 5) {
      updatedSliders.shift();
    }

    setSliders(updatedSliders);
    setSelectedImage(null);
    setTitle("");
  };

  const deleteSlider = (id: number) => {
    if (!window.confirm("Are you sure?")) return;
    setSliders(sliders.filter((s) => s.id !== id));
  };

  return (
    <div className="p-6 max-w-3xl mx-auto bg-white rounded-lg shadow-md">
      <h2 className="text-3xl font-bold mb-5 text-center">Upload Slider</h2>

      <div className="flex flex-col items-center gap-4">
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="border p-2 w-full rounded cursor-pointer"
        />

        {selectedImage && (
          <div className="w-full flex flex-col items-center gap-3">
            <img src={selectedImage.image} alt="Preview" className="w-48 h-48 object-cover rounded-lg shadow" />

            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter slider title"
              className="border px-3 py-2 w-full rounded text-lg"
            />

            <button
              onClick={handleSubmit}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2 rounded shadow transition-all"
              disabled={!title.trim()}
            >
              Submit
            </button>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
        {sliders.map((slider) => (
          <div key={slider.id} className="bg-gray-100 rounded-lg shadow-md p-4">
            <img src={slider.image} alt={slider.title} className="w-full h-48 object-cover rounded-lg" />
            <p className="mt-2 text-center font-semibold text-lg">{slider.title}</p>
            <button
              onClick={() => deleteSlider(slider.id)}
              className="mt-3 w-full bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded shadow transition-all"
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