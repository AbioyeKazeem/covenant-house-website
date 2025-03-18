interface AdminHeaderProps {
  toggleSidebar: () => void;
}

const AdminHeader: React.FC<AdminHeaderProps> = ({ toggleSidebar }) => {
  // Retrieve admin name from localStorage
  const adminName = localStorage.getItem("adminName") || "Admin";

  return (
    <header className="bg-darkslateblue text-white p-4 flex flex-col md:flex-row justify-between items-center">
      <button onClick={toggleSidebar} className="text-white md:hidden text-2xl">
        ☰
      </button>
      <h1 className="text-lg md:text-xl font-bold">Admin Panel</h1>
      <span className="text-sm md:text-lg font-semibold">Welcome, {adminName}</span>
    </header>
  );
};

export default AdminHeader;
