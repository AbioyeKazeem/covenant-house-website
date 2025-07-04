import { Outlet, useLocation } from "react-router-dom";
import AdminHeader from "./adminPages/adminHeader";
import AdminSidebar from "./adminPages/adminSidebar";
import AdminFooter from "./adminPages/adminFooter";
import { useState } from "react";

const AdminLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation(); // Get current route

  return (
    <div className="flex h-screen flex-col md:flex-row">
      
      <AdminSidebar isOpen={sidebarOpen} />
      <div className="flex-1 flex flex-col">
        
        <AdminHeader toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />

        {/* Page Content */}
        <main className="flex-1 p-4 bg-gray-200 overflow-auto">
          
          {location.pathname === "/admin/" && (
            <div className="flex items-center justify-center min-h-screen pt-10">
              <div className="text-center">
                <h1 className="text-3xl font-bold">Welcome to the Covenant House of God Admin Dashboard</h1>
                <p className="mt-2 text-lg text-gray-700">
                  Please click on any of the actions on the sidebar to upload Sliders, Pastor's monthly desk, and upcoming events.
                </p>
                <img src="https://img.icons8.com/ios-filled/200/admin-settings-male.png" alt="Admin Icon" className="mt-4 w-48 mx-auto rounded-lg shadow" />
              </div>
            </div>
          )}

          <Outlet />
        </main>

        <AdminFooter />
      </div>
    </div>
  );
};

export default AdminLayout;
