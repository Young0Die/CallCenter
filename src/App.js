import './App.css';
import AdmissionPortalHome from './pages/AdmissionPortalHome'
import PhuongThucTuyenSinh from './pages/PttsPage';
import TdtuPage from './pages/TdtuPage';
import HocPhiHocBongPage from './pages/HocPhiHocBongPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <Router>
      <Routes>
          {/* Trang chủ */}
          <Route path="/" element={<AdmissionPortalHome />} />

          {/* Phương thức tuyển sinh */}
          <Route path="/phuong-thuc-tuyen-sinh" element={<PhuongThucTuyenSinh />} />

          {/* Học tại TDTU */}
          <Route path="/hoc-tai-tdtu" element={<TdtuPage />} />
          {/*Học Phí Học bổng Page*/}
          <Route path="/hoc-phi-hoc-bong" element={<HocPhiHocBongPage />} />
      </Routes>
    </Router>
  );
}

export default App;
