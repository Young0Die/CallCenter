import '../css/hocPhiHocBongPage.css';
import { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
export default function HocPhiHocBongPage() {
    useEffect(() => {
        const headers = document.querySelectorAll('.accordion-header');
        headers.forEach(header => {
            header.addEventListener('click', () => {
                const item = header.parentElement;
                const body = item.querySelector('.accordion-body');
                if (body.classList.contains('open')) {
                    body.classList.remove('open');
                } else {
                    document.querySelectorAll('.accordion-body').forEach(b => b.classList.remove('open'));
                    body.classList.add('open');
                }
            });
        });
    }, []);

    return (
        <>
        <Header/>
        <div className="hocphi-container">
            <h2 className="title">HỌC PHÍ - HỌC BỔNG 2025</h2>

            <h3 className="red">I. Chính sách học phí năm 2025 (dự kiến)</h3>

            <div className="accordion">
                <div className="accordion-item">
                    <div className="accordion-header">Chương trình tiêu chuẩn</div>
                    <div className="accordion-body open">
                        <p><strong>1. Học phí trung bình theo khối ngành đào tạo tại TP. HCM:</strong></p>
                        <div className="scrollable-table">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Nhóm ngành</th>
                                        <th>Tên ngành</th>
                                        <th>Học phí trung bình năm học 2025-2026</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td rowSpan={7}>Kinh tế - Quản trị</td>
                                        <td>Công tác xã hội</td>
                                        <td>20.500.000 đồng/năm</td>
                                    </tr>
                                    <tr><td>Du lịch (Hướng dẫn)</td><td>23.000.000 đồng/năm</td></tr>
                                    <tr><td>Du lịch (Quản lý)</td><td>23.000.000 đồng/năm</td></tr>
                                    <tr><td>Kế toán</td><td>23.500.000 đồng/năm</td></tr>
                                    <tr><td>Kiểm toán</td><td>23.500.000 đồng/năm</td></tr>
                                    <tr><td>Kinh doanh quốc tế</td><td>24.000.000 đồng/năm</td></tr>
                                    <tr><td>Luật</td><td>22.000.000 đồng/năm</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <div className="accordion-item">
                    <div className="accordion-header">Chương trình tiên tiến</div>
                    <div className="accordion-body">
                        <p><strong>2. Chương trình tiên tiến:</strong> Mức học phí dự kiến: từ 35.000.000 đến 40.000.000 đồng/năm.</p>
                    </div>
                </div>

                <div className="accordion-item">
                    <div className="accordion-header">Chương trình đại học bằng tiếng Anh</div>
                    <div className="accordion-body">
                        <p><strong>3. Chương trình đại học bằng tiếng Anh:</strong> Mức học phí dự kiến: từ 35.000.000 đến 45.000.000 đồng/năm.</p>
                    </div>
                </div>

                <div className="accordion-item">
                    <div className="accordion-header">Chương trình liên kết đào tạo quốc tế</div>
                    <div className="accordion-body">
                        <p><strong>4. Chương trình liên kết đào tạo quốc tế:</strong> Học phí dự kiến từ 50.000.000 đến 60.000.000 đồng/năm (tùy chương trình và đối tác).</p>
                    </div>
                </div>

                <div className="accordion-item">
                    <div className="accordion-header">Chương trình học tại Phân hiệu Khánh Hòa</div>
                    <div className="accordion-body">
                        <p><strong>5. Chương trình học tại Phân hiệu Khánh Hòa:</strong> Mức học phí dự kiến thấp hơn 10-15% so với TP.HCM.</p>
                    </div>
                </div>
            </div>

            <div className="table-section">
                <h3 className="red">II. Chính sách học bổng năm 2025</h3>
                <p>
                    Năm 2025, Trường Đại học Tôn Đức Thắng (TDTU) dành hơn <span className="red">80 tỷ đồng</span> cấp học bổng cho người học với đa dạng hình thức.
                </p>
                <div className="scrollable-table">
                    <table>
                        <thead>
                            <tr>
                                <th>Loại học bổng</th>
                                <th>Đối tượng</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Học bổng Thủ khoa đầu vào</td>
                                <td>Dành cho tân sinh viên có điểm xét tuyển cao nhất của từng ngành</td>
                            </tr>
                            <tr>
                                <td>Học bổng toàn phần và bán phần</td>
                                <td>Dành cho thí sinh đạt thành tích học tập xuất sắc và/hoặc hoàn cảnh khó khăn</td>
                            </tr>
                            <tr>
                                <td>Học bổng dành cho học sinh thuộc diện hợp tác với TDTU</td>
                                <td>Dành cho học sinh thuộc các tỉnh/thành ký kết hợp tác với nhà trường</td>
                            </tr>
                            <tr>
                                <td>Học bổng khuyến khích học tập</td>
                                <td>Dành cho sinh viên đang theo học có kết quả học tập và rèn luyện tốt</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    );
}

