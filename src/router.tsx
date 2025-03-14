import { Routes, Route } from "react-router-dom";
import AdminLayout from "./admin/adminLayout";
import AdminLogin from "./admin/adminLogin";
// import UploadSlider from "./adminPages/UploadSlider";
// import UploadSermon from "./adminPages/UploadSermon";

function AppRouter() {
  return (
    <Routes>
       <Route path="/login" element={<AdminLogin />} />
       <Route path="/admin" element={<AdminLayout />}>
        {/* <Route path="upload-slider" element={<UploadSlider />} />
        <Route path="upload-sermon" element={<UploadSermon />} />
        <Route path="upload-event" element={<UploadEvent />} /> */}
      </Route>
    </Routes>
  );
}

export default AppRouter;
