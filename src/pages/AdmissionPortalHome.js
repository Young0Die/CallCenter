import "../css/admissionPortalHome.css";
import Header from "../pages/Header";
import Chatbot from "../pages/Chatbot";
import { BubbleChat } from "flowise-embed-react";

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
            📞 Tư vấn trực tiếp Đại học
          </a>
          <a
            href="https://example.com/tu-van-online"
            className="connect-button"
          >
            🌐 Tư vấn trực tuyến Đại học
          </a>
          <a href="tel:0944314466" className="connect-button">
            📞 Tư vấn tuyển sinh Sau đại học
          </a>
        </div>
      </div>
      <footer className="tdtu-footer">
        <div className="tdtu-footer-columns">
          <div className="footer-col">
            <h4>Liên hệ</h4>
            <p>
              <strong>Trường Đại học Tôn Đức Thắng</strong>
            </p>
            <p>
              Số 19 Nguyễn Hữu Thọ, Phường Tân Phong,
              <br />
              Quận 7, TP. Hồ Chí Minh, Việt Nam
            </p>
            <p>
              <strong>Tư vấn tuyển sinh đại học:</strong>
            </p>
            <p>
              Hotline: 19002024
              <br />
              Email: tuvantuyensinh@tdtu.edu.vn
            </p>
            <p>
              <strong>Tư vấn tuyển sinh sau đại học:</strong>
            </p>
            <p>
              Hotline: 0944 314 466
              <br />
              Email: saudaihoc@tdtu.edu.vn
            </p>
            <p>
              <strong>Hotline:</strong> 0935 035 270
              <br />
              Email: tuvantuyensinhkqt@tdtu.edu.vn
            </p>
          </div>

          <div className="footer-col">
            <h4>Đại học</h4>
            <p>Phương thức tuyển sinh 2025</p>
            <p>Quy chế tuyển sinh 2025</p>
            <p>Danh mục ngành</p>
            <p>Tra cứu hồ sơ</p>
            <p>Phân hiệu Khánh Hòa</p>
          </div>

          <div className="footer-col">
            <h4>Sau đại học</h4>
            <p>Hồ sơ dự tuyển</p>
            <p>Đăng ký dự tuyển</p>
            <p>Danh mục ngành</p>
            <p>Chương trình thạc sĩ</p>
            <p>Chương trình tiến sĩ</p>
          </div>

          <div className="footer-col">
            <h4>Hỗ trợ</h4>
            <p>Học phí - học bổng</p>
            <p>Ký túc xá</p>
            <p>Tư vấn</p>
            <p>Hỗ trợ sinh viên</p>
          </div>

          <div className="footer-col">
            <h4>Thông tin</h4>
            <p>Công khai thông tin</p>
            <p>Cơ sở vật chất</p>
            <p>Trải nghiệm TDTU</p>
          </div>
        </div>
        <div className="tdtu-footer-bottom">
          Copyright © 2025 Ton Duc Thang University
        </div>
      </footer>
      <BubbleChat
        chatflowid="1503e118-61bf-48f7-8160-ba252e8c7991"
        apiHost="http://localhost:4000"
      />
      {/* <Chatbot /> */}
    </div>
  );
}
