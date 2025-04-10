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
import AdminUsers from "./admin/adminPages/adminManagement";
import MissionPage from "./pages/OurMission";
import OurLegacy from "./pages/OurLegacy";
import OurOrigin from "./pages/OurOrigin";
import PastorProfile from "./pages/GeneralOverseer";
import Prophecies from "./pages/Prophecies";
import PrayerForm from "./pages/PayerRequest";
import Resources from "./pages/Resources";
import KeyResources from "./pages/KeyRousources";
import OpenHeaven from "./pages/OpenHeaven";
import SundaySchool from "./pages/SundaySchool";
import HomeFellowship from "./pages/HomeFellowship";
import Baptismal from "./pages/Baptismal";
import PrayerPoint from "./pages/PrayerPoint";
import OpreationAdrew from "./pages/OperationAndrew";
import PastorDesk from "./pages/PastorDesk";
import NewsletterDetail from "./pages/NewsletterDetail";

function AppRouter() {
  return (
    <Routes>
      <Route path="/signup" element={<AdminSignup />} />
      <Route path="/login" element={<AdminLogin />} />
      <Route path="/admin" element={<AdminLayout />}>
        <Route path="admin-management" element={<AdminUsers />} />
        <Route path="upload-slider" element={<SliderUpload />} />
        <Route path="upload-pastordesk" element={<PastorDeskUpload />} />
        <Route path="upload-event" element={<EventUpload />} />
      </Route>
      <Route path="/" element={<HomePage />} />
      <Route path="/our-values" element={<ValuesPage />} />
      <Route path="/our-beliefs" element={<OurBelief />} />
      <Route path="/our-priorities" element={<OurPriorities />} />
      <Route path="/our-mission" element={<MissionPage />} />
      <Route path="/our-legacy" element={<OurLegacy />} />
      <Route path="/our-origin" element={<OurOrigin />} />
      <Route path="/general-overseer" element={<PastorProfile />} />
      <Route path="/prophecies" element={<Prophecies />} />
      <Route path="/prayer-request" element={<PrayerForm />} />
      <Route path="/resources" element={<Resources />} />
      <Route path="/key-resources" element={<KeyResources />} />
      <Route path="/open-heaven" element={<OpenHeaven />} />
      <Route path="/prayer-point" element={<PrayerPoint />} />
      <Route path="/sunday-school" element={<SundaySchool />} />
      <Route path="/home-fellowship" element={<HomeFellowship />} />
      <Route path="/baptismal" element={<Baptismal />} />
      <Route path="/operation-andrew" element={<OpreationAdrew />} />
      <Route path="/pastor-desk" element={<PastorDesk />} />
      <Route path="/pastor-desk/:id" element={<NewsletterDetail />} />
    </Routes>
  );
}

export default AppRouter;
