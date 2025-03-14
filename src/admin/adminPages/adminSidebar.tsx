import { Link } from "react-router-dom";
import { Image, Mic, CalendarDays } from "lucide-react";

const AdminSidebar: React.FC<{ isOpen: boolean }> = ({ isOpen }) => {
  return (
    <aside
      className={`bg-white text-orange-500 w-64 min-h-screen p-5 fixed md:relative z-50 transition-transform duration-300
      ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
    >
      <nav className="mt-40 space-y-6">
        <Link to="/admin/upload-slider" className="flex items-center gap-3 py-2 px-4 text-lg font-medium hover:bg-gray-700 rounded border-b border-gray-300">
          <Image size={22} /> Upload Slider
        </Link>
        <Link to="/admin/upload-sermon" className="flex items-center gap-3 py-2 px-4 text-lg font-medium hover:bg-gray-700 rounded border-b border-gray-300">
          <Mic size={22} /> Upload Pst's Desk
        </Link>
        <Link to="/admin/upload-event" className="flex items-center gap-3 py-2 px-4 text-lg font-medium hover:bg-gray-700 rounded border-b border-gray-300">
          <CalendarDays size={22} /> Upload Event
        </Link>
      </nav>
    </aside>
  );
};

export default AdminSidebar;
