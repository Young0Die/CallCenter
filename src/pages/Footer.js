import "../css/admissionPortalHome.css";
import { BubbleChat } from "flowise-embed-react";
export default function Footer() {
    return (
        <>
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
        </>
    );
}