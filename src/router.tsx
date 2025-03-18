import { Routes, Route } from "react-router-dom";
import AdminSignup from "./admin/adminPages/adminSignUp";
import AdminLayout from "./admin/adminLayout";
import AdminLogin from "./admin/adminLogin";
import SliderUpload from "./admin/adminPages/sliderUpload";
import PastorDeskUpload from "./admin/adminPages/pastorDeskUpload";
import EventUpload from "./admin/adminPages/eventUpload";

function AppRouter() {
  return (
    <Routes>
       <Route path="/signup" element={<AdminSignup/>} />
       <Route path="/login" element={<AdminLogin />} />
       <Route path="/admin" element={<AdminLayout />}>
       <Route path="upload-slider" element={<SliderUpload />} />
       <Route path="upload-pastordesk" element={<PastorDeskUpload />} />
       <Route path="upload-event" element={<EventUpload />} /> 
      </Route>
    </Routes>
  );
}

export default AppRouter;
