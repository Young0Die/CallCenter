import '../css/hoctaiTdtuPage.css';
import Header from './Header';
import Footer from './Footer';
export default function HocTaiTdtuPage() {
    return (
        <>
        <Header/>
        <div className="hoc-tai-tdtu-container">
            <h2 className="hoc-tai-tdtu-title">
                CHỌN HỌC TẠI <span className="blue">TDTU</span>, <span className="red">TẠI SAO ?</span>
            </h2>
            <p className="hoc-tai-tdtu-subtitle">
                Trường Đại học Tôn Đức Thắng (TDTU) là trường đại học công lập đa ngành, hội nhập quốc tế. Chương trình đào tạo của Trường được kiểm định và công nhận bởi các tổ chức quốc tế như HCERES, FIBAA, ASIIN, AUN-QA. Môi trường giáo dục tại TDTU cung cấp điều kiện tốt nhất cho người học.
            </p>
            <img className="hoc-tai-tdtu-banner" src="https://admission.tdtu.edu.vn/sites/admission23/files/TDTU/CSVC/why-header.png" alt="TDTU Banner" />

            <div className="feature-block">
                <h3>HỆ THỐNG CƠ SỞ VẬT CHẤT HIỆN ĐẠI</h3>
                <div className="feature-row">
                    <p>
                        QS-stars (Anh Quốc) đánh giá TDTU là trường học có cơ sở vật chất 5 sao/5 sao. Tất cả phòng học lý thuyết có máy điều hòa, máy chiếu, thiết bị hỗ trợ học tập. Thiết bị thực hành, mô phỏng chuyên nghiệp. Thư viện hiện đại với nguồn tài nguyên phong phú, phục vụ 24/7.
                    </p>
                    <img src="https://admission.tdtu.edu.vn/sites/admission23/files/TDTU/CSVC/CSVC-2.jpg" alt="Cơ sở vật chất" />
                </div>
            </div>

            <div className="feature-block">
                <h3>MÔI TRƯỜNG RÈN LUYỆN TỐT</h3>
                <div className="feature-row reverse">
                    <img src="https://admission.tdtu.edu.vn/sites/admission23/files/TDTU/SV/SV-1.jpg" alt="Môi trường rèn luyện" />
                    <p>
                        Kỷ luật, Lễ phép, Chuyên nghiệp, Sáng tạo, Phụng sự là đặc trưng của sinh viên TDTU. Sinh viên được giáo dục 3 nội dung đạo đức: “Học tập tốt để báo hiếu cha mẹ; Tôn trọng pháp luật và các quy định của Trường; Ứng xử vì cộng đồng, không ích kỷ”.
                    </p>
                </div>
            </div>

            <div className="feature-block">
                <h3>ĐIỀU KIỆN PHÁT TRIỂN THỂ CHẤT VÀ NĂNG KHIẾU TOÀN DIỆN</h3>
                <div className="feature-row">
                    <p>
                        Nhà thi đấu đa năng quy mô 3.000 chỗ, sân bóng đá chuẩn FIFA 2 sao quy mô 7.000 chỗ, hồ bơi, sân tennis, bóng chuyền, bóng rổ, phòng gym, phòng mô phỏng Golf 3D và nhiều tiện ích thể thao khác. 17 môn thể thao tự chọn phù hợp với từng cá nhân. Hơn 63 CLB giúp sinh viên phát triển.
                    </p>
                    <img src="https://admission.tdtu.edu.vn/sites/admission23/files/TDTU/The-chat/The-chat-1.jpg" alt="Phát triển năng khiếu" />
                </div>
            </div>

            <div className="feature-block">
                <h3>CHUẨN ĐẦU RA ĐÁP ỨNG TỐT YÊU CẦU THỊ TRƯỜNG LAO ĐỘNG</h3>
                <div className="feature-row reverse">
                    <img src="https://admission.tdtu.edu.vn/sites/admission23/files/TDTU/CDR/CDR-2.png" alt="Chuẩn đầu ra" />
                    <p>
                        Sinh viên tốt nghiệp vững lý thuyết, giỏi thực hành, tác phong chuyên nghiệp, thích ứng tốt với môi trường làm việc trong và ngoài nước.
                    </p>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    );
}
