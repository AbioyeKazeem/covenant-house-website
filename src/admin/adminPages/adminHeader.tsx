
interface AdminHeaderProps {
    toggleSidebar: () => void;
  }
  
  const AdminHeader: React.FC<AdminHeaderProps> = ({ toggleSidebar }) => {
    return (
      <header className="bg-blue-500 text-white p-4 flex flex-col md:flex-row justify-between items-center">
        <button onClick={toggleSidebar} className="text-white md:hidden text-2xl">
          ☰
        </button>
        <h1 className="text-lg md:text-xl font-bold">Admin Panel</h1>
      </header>
    );
  };
  
  export default AdminHeader;
  