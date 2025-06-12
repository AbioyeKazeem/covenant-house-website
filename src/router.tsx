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
import Donate from "./pages/Donation";
import GiveByText from "./pages/GiveByText";
import OnlineDonation from "./pages/OnlineDonation";
import ChurchLeaders from "./pages/ChurchLeaders";
//import Event from "./pages/Event";
import EventsCalendar from "./pages/Event";
import EventDetails from "./pages/EventDetails";
import AllEvents from "./pages/AllEvents";
import ContactPage from "./pages/Contact";
import MinistriesPage from "./pages/Ministries";
import MenMinistry from "./pages/Ministries/Men";
import WomenMinistry from "./pages/Ministries/Women";
import YouthMinistry from "./pages/Ministries/Youth";
import ChildrenMinistry from "./pages/Ministries/Children";
import ViewContacts from "./admin/adminPages/viewContact";
import ViewPrayerRequests from "./admin/adminPages/viewPrayers";

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
        <Route path="view-contacts" element={<ViewContacts />} /> 
        <Route path="view-prayers" element={<ViewPrayerRequests />} />
      </Route>
      <Route path="/" element={<HomePage />} />
      <Route path="/our-values" element={<ValuesPage />} />
      <Route path="/our-beliefs" element={<OurBelief />} />
      <Route path="/our-priorities" element={<OurPriorities />} />
      <Route path="/our-mission" element={<MissionPage />} />
      <Route path="/church-leaders" element={<ChurchLeaders />} />
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
      <Route path="/donate" element={<Donate />} />
      <Route path="/give-by-text" element={<GiveByText />} />
      <Route path="/online-donation" element={<OnlineDonation />} />
      <Route path="/events" element={<EventsCalendar />} />
      <Route path="/events/:id" element={<EventDetails />} />
      <Route path="/events/all" element={<AllEvents />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/ministries" element={<MinistriesPage />} />
      <Route path="/men-ministry" element={<MenMinistry />} />
      <Route path="/women-ministry" element={<WomenMinistry />} />
      <Route path="/youth-ministry" element={<YouthMinistry />} />
      <Route path="/children-ministry" element={<ChildrenMinistry />} />
      </Routes>
  );
}

export default AppRouter;
