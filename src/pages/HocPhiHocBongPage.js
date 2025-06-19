import '../css/hocPhiHocBongPage.css';
import { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
export default function HocPhiHocBongPage() {
    useEffect(() => {
        const headers = document.querySelectorAll('.accordion-header');

        const toggleHandler = (e) => {
            const body = e.target.nextElementSibling;
            body.classList.toggle('open');
        };

        headers.forEach(header => {
            header.addEventListener('click', toggleHandler);
        });

        return () => {
            headers.forEach(header => {
                header.removeEventListener('click', toggleHandler);
            });
        };
    }, []);
    return (
        <>
        <Header/>
        <div className="hocphi-container">
            <h1>Học phí – học bổng 2025</h1>

            <h2>I. Chính sách học phí năm 2025 (dự kiến)</h2>

            <div className="accordion">
                <div className="accordion-item">
                    <div className="accordion-header">Chương trình tiêu chuẩn</div>
                    <div className="accordion-body">
                        <p>1. Học phí trung bình theo khối ngành đào tạo tại TP. Hồ Chí Minh:</p>
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
                                    <tr><td>Nhóm 1</td>
                                            <td>
                                                <p>- Công tác xã hội</p>
                                                <p>- Du lịch (Chuyên ngành Hướng dẫn du lịch)</p>
                                                <p>- Du lịch (Chuyên ngành Quản lý du lịch)</p>
                                                <p>- Du lịch (Chuyên ngành Hướng dẫn du lịch)</p>
                                                <p>- Kế toán</p>
                                                <p>- Kiểm toán (Chuyên ngành Kiểm toán và Phân tích dữ liệu)</p>
                                                <p>- Kinh doanh quốc tế</p>
                                                <p>- Luật</p>
                                                <p>- Marketing</p>
                                                <p>- Ngôn ngữ Anh</p>
                                                <p>- Ngôn ngữ Trung Quốc</p>
                                                <p>- Quan hệ lao động (Chuyên ngành Quản lý quan hệ lao động, Chuyên ngành Hành vi tổ chức)</p>
                                                <p>- Quản lý thể dục thể thao (Chuyên ngành Golf)</p>
                                                <p>- Quản lý thể dục thể thao (Chuyên ngành Kinh doanh thể thao và tổ chức sự kiện)</p>
                                                <p>- Quản trị kinh doanh (Chuyên ngành Quản trị chuỗi cung ứng)</p>
                                                <p>- Quản trị kinh doanh (Chuyên ngành Quản trị nguồn nhân lực)</p>
                                                <p>- Quản trị kinh doanh (Chuyên ngành Quản trị nhà hàng - khách sạn)</p>
                                                <p>- Tài chính - Ngân hàng</p>
                                                <p>- Tài chính - Ngân hàng (Chuyên ngành Tài chính quốc tế)</p>
                                                <p>- Thống kê</p>
                                                <p>- Toán ứng dụng</p>
                                                <p>- Xã hội học</p>
                                            </td>
                                        <td>29.770.000 đồng/năm</td>
                                    </tr>
                                    <tr><td>Nhóm 2</td>
                                            <td>
                                                <p>- Bảo hộ lao động</p>
                                                <p>- Công nghệ kỹ thuật môi trường (Chuyên ngành cấp thoát nước và môi trường nước)</p>
                                                <p>- Công nghệ sinh học</p>
                                                <p>- Khoa học máy tính</p>
                                                <p>- Khoa học môi trường</p>
                                                <p>- Kiến trúc</p>
                                                <p>- Kỹ thuật cơ điện tử</p>
                                                <p>- Kỹ thuật điện</p>
                                                <p>- Kỹ thuật điện tử - viễn thông</p>
                                                <p>- Kỹ thuật điện tử - viễn thông (Chuyên ngành Kỹ thuật thiết kế vi mạch bán dẫn)</p>
                                                <p>- Kỹ thuật điều khiển và tự động hóa</p>
                                                <p>- Kỹ thuật hóa học</p>
                                                <p>- Kỹ thuật phần mềm</p>
                                                <p>- Kỹ thuật xây dựng</p>
                                                <p>- Kỹ thuật xây dựng công trình giao thông</p>
                                                <p>- Mạng máy tính và truyền thông dữ liệu</p>
                                                <p>- Quy hoạch vùng và đô thị</p>
                                                <p>- Thiết kế đồ họa</p>
                                                <p>- Thiết kế nội thất</p>
                                                <p>- Thiết kế thời trang</p>
                                            </td>
                                        <td>34.850.000 đồng/năm</td></tr>
                                    <tr><td>Nhóm 3</td>
                                        <td>Dược học</td>
                                    <td>66.790.000 đồng/năm</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <div className="accordion-item">
                    <div className="accordion-header">Chương trình đại học bằng tiếng Anh</div>
                    <div className="accordion-body">
                        <p>Học phí từ 40.000.000 – 45.000.000 đồng/năm</p>
                    </div>
                </div>

                <div className="accordion-item">
                    <div className="accordion-header">Chương trình liên kết quốc tế</div>
                    <div className="accordion-body">
                        <p>Tùy đối tác: khoảng 50.000.000 – 60.000.000 đồng/năm</p>
                    </div>
                </div>
            </div>

            <h2>II. Chính sách học bổng năm 2025</h2>
            <p>TDTU cấp hơn <span className="red">80 tỷ đồng</span> học bổng với nhiều loại:</p>
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
                            <td>Học bổng Thủ khoa</td>
                            <td>Tân sinh viên có điểm cao nhất ngành</td>
                        </tr>
                        <tr>
                            <td>Học bổng toàn/bán phần</td>
                            <td>Thành tích cao, hoàn cảnh khó khăn</td>
                        </tr>
                        <tr>
                            <td>Học bổng hợp tác</td>
                            <td>Học sinh tỉnh có ký kết hợp tác</td>
                        </tr>
                        <tr>
                            <td>Học bổng khuyến khích</td>
                            <td>Sinh viên đang học có kết quả tốt</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <Footer/>
        </>
    );
  }