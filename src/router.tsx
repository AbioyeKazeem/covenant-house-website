import { Routes, Route } from "react-router-dom";
import AdminSignup from "./admin/adminPages/adminSignUp";
import AdminLayout from "./admin/adminLayout";
import AdminLogin from "./admin/adminLogin";
import SliderUpload from "./admin/adminPages/sliderUpload";
import PastorDeskUpload from "./admin/adminPages/pastorDeskUpload";
import EventUpload from "./admin/adminPages/eventUpload";
import HomePage from "./pages/home";
import ValuesPage from "./pages/OurValues";
import OurBelief from "./pages/OurBelief";
import OurPriorities from "./pages/OurPriorities";
import MissionPage from "./pages/OurMission";
import OurLegacy from "./pages/OurLegacy";

function AppRouter() {
  return (
    <Routes>
      <Route path="/signup" element={<AdminSignup />} />
      <Route path="/login" element={<AdminLogin />} />
      <Route path="/admin" element={<AdminLayout />}>
        <Route path="upload-slider" element={<SliderUpload />} />
        <Route path="upload-pastordesk" element={<PastorDeskUpload />} />
        <Route path="upload-event" element={<EventUpload />} />
      </Route>
      <Route path="/" element={<HomePage />} />
      <Route path="/values" element={<ValuesPage />} />
      <Route path="/our-beliefs" element={<OurBelief />} />
      <Route path="/our-priorities" element={<OurPriorities />} />
      <Route path="/our-mission" element={<MissionPage />} />
      <Route path="/our-legacy" element={<OurLegacy />} />
    </Routes>
  );
}

export default AppRouter;
