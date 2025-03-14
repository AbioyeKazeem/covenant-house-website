import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminLayout from "./components/admin/adminLayout"; 
import UploadSlider from "./components/admin/adminPages/uploadSliders";
import UploadSermon from "./components/admin/adminPages/uploadSermon";

function App() {
  return (
    <Router>
      <Routes>
  <Route path="/admin" element={<AdminLayout />}>
    <Route path="upload-slider" element={<UploadSlider />} />
    <Route path="upload-sermon" element={<UploadSermon />} />
  </Route>
</Routes>

    </Router>
  );
}

export default App;
