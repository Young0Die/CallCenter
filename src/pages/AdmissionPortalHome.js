import "../css/admissionPortalHome.css";
import Header from "../pages/Header";
import Footer from "../pages/Footer";

export default function AdmissionPortalHome() {
  return (
    <div className="tdtu-page-wrapper">
      <Header />
      <div className="tdtu-hero-section">
        <div className="tdtu-hero-overlay" />
        <div className="tdtu-hero-content">
          <h1 className="tdtu-hero-title">Cổng thông tin tuyển sinh</h1>
          <p className="tdtu-hero-subtitle">Trường Đại học Tôn Đức Thắng</p>
        </div>
      </div>
      <div className="tdtu-contact-connect">
        <h2 className="connect-title">
          Kết nối ngay với bộ phận tư vấn tuyển sinh TDTU
        </h2>
        <div className="connect-buttons">
          <a href="tel:19002024" className="connect-button">
            📞 Tư vấn trực tiếp Đại học : 02871078643
          </a>
          {/* <a
            href="https://example.com/tu-van-online"
            className="connect-button"
          >
            🌐 Tư vấn trực tuyến Đại học
          </a>
          <a href="tel:0944314466" className="connect-button">
            📞 Tư vấn tuyển sinh Sau đại học
          </a> */}
        </div>
      </div>
          <div className="tdtu-content-layout">
              <div className="tdtu-announcement-column">
                  <div className="tdtu-announcements">
                      <h3 className="announcement-title">Tuyển sinh đại học</h3>
                      <ul className="announcement-list">
                          <li><a href="#" target="_blank">➜ Thông báo công bố Thông tin tuyển sinh đại học chính quy năm 2025</a></li>
                          <li><a href="#" target="_blank">➜ Thông báo lịch thi các môn năng khiếu năm 2025 - Đợt 2</a></li>
                          <li><a href="#" target="_blank">➜ Thông báo xét tuyển thẳng năm 2025 theo Quy chế tuyển sinh của Bộ GD&ĐT</a></li>
                      </ul>
                      <h3 className="announcement-title">Tuyển sinh cao học</h3>
                      <ul className="announcement-list">
                          <li><a href="#" target="_blank">➜ Thông báo lịch thi đánh giá năng lực ngoại ngữ đầu vào trình độ thạc sĩ đợt 1 năm 2025</a></li>
                          <li><a href="#" target="_blank">➜ Cập nhật thông tin tuyển sinh trình độ thạc sĩ năm 2025 tại Phân hiệu Khánh Hòa</a></li>
                      </ul>
                      <h3 className="announcement-title">Tuyển nghiên cứu sinh</h3>
                      <ul className="announcement-list">
                          <li><a href="#" target="_blank">➜ Thông báo tuyển sinh đào tạo trình độ tiến sĩ đợt 1 năm 2025</a></li>
                      </ul>
                  </div>
              </div>
              <div className="tdtu-banner-section tdtu-banner-sidebar">
                  <img src="https://admission.tdtu.edu.vn/sites/admission23/files/Tuyen-sinh/2025/highlight/hocbong.png" alt="Học bổng" className="tdtu-banner-img" />
                  <img src="https://admission.tdtu.edu.vn/sites/admission23/files/Tuyen-sinh/2025/highlight/nangkhieu_0.png" alt="Năng khiếu" className="tdtu-banner-img" />
                  <img src="https://admission.tdtu.edu.vn/sites/admission23/files/Tuyen-sinh/2025/highlight/xet-tuyen-thang.png" alt="Xét tuyển thẳng" className="tdtu-banner-img" />
              </div>
          </div>
      <Footer/>
    </div>
  );
}
