import { useNavigate } from "react-router-dom";

interface AdminHeaderProps {
  toggleSidebar: () => void;
}

const AdminHeader: React.FC<AdminHeaderProps> = ({ toggleSidebar }) => {
  const navigate = useNavigate();
  const adminName = localStorage.getItem("adminName") || "Admin";

  const handleLogout = () => {
    localStorage.removeItem("adminName");
    localStorage.removeItem("authToken"); // Remove authentication token
    navigate("/login"); 
  };

  return (
    <header className="bg-darkslateblue text-white p-4 flex flex-col md:flex-row justify-between items-center">
  <button onClick={toggleSidebar} className="text-white md:hidden text-2xl">
    ☰
  </button>
  <h1 className="text-lg md:text-xl font-bold">
    <a href="/admin/" className="text-white">Admin Panel</a>
  </h1>
  <div className="flex items-center space-x-4">
    <span className="font-medium">{adminName}</span>
    <button
      onClick={handleLogout}
      className="bg-red-600 px-3 py-1 rounded hover:bg-red-800 transition">
      Logout
    </button>
  </div>
</header>

  );
};

export default AdminHeader;
