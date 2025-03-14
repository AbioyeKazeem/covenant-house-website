import { Outlet } from "react-router-dom";
import AdminHeader from "./adminPages/adminHeader";
import AdminSidebar from "./adminPages/adminSidebar";
import AdminFooter from "./adminPages/adminFooter";

const AdminLayout = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <AdminSidebar />
      <div className="flex-1 flex flex-col min-h-screen">
        <AdminHeader />
        <main className="flex-1 p-6 bg-gray-100">
          <Outlet /> {/* Child pages will be rendered here */}
        </main>
        <AdminFooter />
      </div>
    </div>
  );
};

export default AdminLayout;
