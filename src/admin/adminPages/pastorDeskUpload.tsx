import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

interface Post {
  id: number;
  image: string;
  thumbnail: string;
  title: string;
  month: string;
  year: string;
  message: string;
}

const PastorDeskUpload = () => {
  const [posts, setPosts] = useState<Post[]>(() => {
    const savedPosts = localStorage.getItem("pastorDeskPosts");
    return savedPosts ? JSON.parse(savedPosts) : [];
  });

  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [thumbnail, setThumbnail] = useState<string | null>(null);
  const [title, setTitle] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [message, setMessage] = useState("");
  const [editingId, setEditingId] = useState<number | null>(null);

  useEffect(() => {
    localStorage.setItem("pastorDeskPosts", JSON.stringify(posts));
  }, [posts]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => {
      setSelectedImage(reader.result as string);
      setThumbnail(reader.result as string);
    };
  };

  const handleSubmit = () => {
    if (!selectedImage || !title.trim() || !month.trim() || !year.trim() || !message.trim()) return;

    if (editingId !== null) {
      setPosts(
        posts.map(post =>
          post.id === editingId ? { ...post, image: selectedImage, thumbnail: thumbnail!, title, month, year, message } : post
        )
      );
      setEditingId(null);
    } else {
      const newPost: Post = {
        id: Date.now(),
        image: selectedImage,
        thumbnail: thumbnail!,
        title,
        month,
        year,
        message,
      };
      setPosts([newPost, ...posts]);
    }

    setSelectedImage(null);
    setThumbnail(null);
    setTitle("");
    setMonth("");
    setYear("");
    setMessage("");
  };

  const handleDelete = (id: number) => {
    setPosts(posts.filter(post => post.id !== id));
  };

  const handleEdit = (post: Post) => {
    setSelectedImage(post.image);
    setThumbnail(post.thumbnail);
    setTitle(post.title);
    setMonth(post.month);
    setYear(post.year);
    setMessage(post.message);
    setEditingId(post.id);
  };

  return (
    <div className="p-10 max-w-5xl mx-auto bg-white shadow-md rounded-xl w-full">
      <h2 className="text-3xl font-bold mb-6 text-center">Upload Pastor Desk Message</h2>
      <div className="space-y-4">
        <input type="file" accept="image/*" onChange={handleFileChange} className="border p-3 w-full rounded-lg" />
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" className="border p-3 w-full rounded-lg" />
        <div className="grid grid-cols-2 gap-4">
          <input type="text" value={month} onChange={(e) => setMonth(e.target.value)} placeholder="Month" className="border p-3 w-full rounded-lg" />
          <input type="text" value={year} onChange={(e) => setYear(e.target.value)} placeholder="Year" className="border p-3 w-full rounded-lg" />
        </div>
        <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Message" className="border p-3 w-full rounded-lg h-32"></textarea>
        <button onClick={handleSubmit} className="bg-blue-600 text-white px-6 py-3 rounded-lg w-full text-lg">{editingId ? "Update" : "Submit"}</button>
      </div>
      
      <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <div key={post.id} className="bg-white shadow-lg rounded-xl overflow-hidden w-full">
            <img src={post.thumbnail} alt={post.title} className="w-full h-60 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-bold text-blue-600">{`${post.month} ${post.year} – ${post.title}`}</h3>
              <p className="text-gray-600 mt-2 text-sm line-clamp-2">{post.message}</p>
              <div className="flex justify-between mt-4">
                <button onClick={() => handleEdit(post)} className="bg-yellow-500 text-white px-4 py-2 rounded-lg">Edit</button>
                <button onClick={() => handleDelete(post.id)} className="bg-red-500 text-white px-4 py-2 rounded-lg">Delete</button>
                <Link to={`/post/${post.id}`} className="bg-green-500 text-white px-4 py-2 rounded-lg">View</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PastorDeskUpload;
