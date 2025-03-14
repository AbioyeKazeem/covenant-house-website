import { useState } from "react";
import { Link } from "react-router-dom";

const AdminSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <aside className="bg-gray-800 text-white p-4 min-h-screen fixed md:relative w-64 md:w-72 transition-all">
      {/* Hamburger Menu */}
      <button
        className="md:hidden mb-4 text-white text-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>

      {/* Sidebar Links */}
      <ul className={`space-y-4 ${isOpen ? "block" : "hidden md:block"}`}>
        <li>
          <Link to="/admin/upload-slider" className="block hover:underline">
            Upload Slider
          </Link>
        </li>
        <li>
          <Link to="/admin/upload-sermon" className="block hover:underline">
            Upload Sermon
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default AdminSidebar;
