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
            <Header />
            <div className="hocphi-container">
                <h1>Học phí – học bổng 2025</h1>

                <h2>I. Chính sách học phí năm 2025 (dự kiến)</h2>

                <div className="accordion">
                    <div className="accordion-item">
                        <div className="accordion-header">Chương trình tiêu chuẩn</div>
                        <div className="accordion-body">
                            <div className="scrollable-table">
                                <p className="text-table">1. Học phí trung bình theo khối ngành đào tạo tại TP. Hồ Chí Minh:</p>
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
                        <div className="accordion-header">Chương trình tiên tiến</div>
                        <div className="accordion-body">
                            <div className="scrollable-table">
                                <p className="text-table"> 1. Học phí theo lộ trình đào tạo:</p>
                                <p className = "text-table">Học phí được xác định theo lộ trình đào tạo (04 năm đối với chương trình cử nhân, 05 năm đối với chương trình kỹ sư, kiến trúc sư). Mức học phí này không bao gồm học phí kỹ năng tiếng Anh ngoại trừ ngành Ngôn ngữ Anh.</p>
                                <table>
                                    <thead>
                                        <tr>
                                            <th>STT</th>
                                            <th>Tên ngành</th>
                                            <th>Học phí trung bình năm học 2025-2026</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr><td>1</td>
                                            <td>
                                                Kế toán, Tài chính - Ngân hàng, Luật (Chuyên ngành Luật kinh tế), Luật (Chuyên ngành Luật thương mại quốc tế)
                                            </td>
                                            <td>Từ 54 đến 55 triệu đồng/năm</td>
                                        </tr>
                                        <tr><td>2</td>
                                            <td>
                                                Xã hội học
                                            </td>
                                            <td>Từ 53 đến 54 triệu đồng/năm</td></tr>
                                        <tr><td>3</td>
                                            <td>Kinh doanh quốc tế, Marketing, Quản trị kinh doanh (Chuyên ngành Quản trị nguồn nhân lực), Quản trị kinh doanh (Chuyên ngành Quản trị nhà hàng - khách sạn)</td>
                                            <td>Từ 62 đến 64 triệu đồng/năm</td>
                                        </tr>
                                        <tr><td>4</td>
                                            <td>Ngôn ngữ Anh</td>
                                            <td>Từ 63 đến 64 triệu đồng/năm</td>
                                        </tr>
                                        <tr><td>5</td>
                                            <td>Ngôn ngữ Trung Quốc</td>
                                            <td>Từ 62 đến 63 triệu đồng/năm</td>
                                        </tr>
                                        <tr><td>6</td>
                                            <td>Thiết kế đồ họa, Công nghệ sinh học, Khoa học máy tính, Kỹ thuật điện, Kỹ thuật điện tử - viễn thông, Kỹ thuật điều khiển và tự động hóa, Kỹ thuật hóa học, Kỹ thuật phần mềm, Kỹ thuật xây dựng, Kiến trúc</td>
                                            <td>Từ 55 đến 57 triệu đồng/năm</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <p className="text-table"> 2. Học phí kỹ năng tiếng Anh</p>
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Chương trình</th>
                                            <th>Môn học</th>
                                            <th>Học phí trung bình</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    <tr><td>Dự bị</td>
                                        <td>
                                            <p>- Tiếng Anh dự bị 1</p>
                                            <p>- Tiếng Anh dự bị 2</p>
                                            <p>- Tiếng Anh dự bị 3</p>
                                            <p>- Tiếng Anh dự bị 4</p>
                                            <p>- Tiếng Anh dự bị 5</p>
                                        </td>
                                        <td>4,5 triệu đồng/cấp độ</td>
                                    </tr>
                                    <tr><td>Chính Khóa</td>
                                        <td>
                                            <p>- Tiếng Anh 1</p>
                                            <p>- Tiếng Anh 2</p>
                                            <p>- Tiếng Anh 3</p>
                                            <p>- Tiếng Anh 4</p>
                                            <p>- Tiếng Anh 5</p>
                                        </td>
                                        <td>4,5 triệu đồng/cấp độ</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <div className="accordion-header">Chương trình đại học bằng Tiếng Anh</div>
                        <div className="accordion-body">
                        <div className="scrollable-table">
                            <p className="text-table"> 1. Học phí theo lộ trình đào tạo:</p>
                                <p className="text-table">Học phí được xác định theo lộ trình đào tạo (04 năm đối với chương trình cử nhân, 05 năm đối với chương trình kỹ sư). Mức học phí này không bao gồm học phí Kỹ năng tiếng Anh ngoại trừ ngành Ngôn ngữ Anh.</p>
                            <table>
                                <thead>
                                    <tr>
                                        <th>STT</th>
                                        <th>Tên ngành</th>
                                        <th>Học phí trung bình năm học 2025-2026</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr><td>1</td>
                                        <td>
                                            Kế toán (Chuyên ngành: Kế toán quốc tế),  Tài chính ngân hàng
                                        </td>
                                        <td>Từ 79 đến 80 triệu đồng/năm</td>
                                    </tr>
                                    <tr><td>2</td>
                                        <td>
                                            Ngôn ngữ Anh
                                        </td>
                                        <td>Từ 78 đến 79 triệu đồng/năm</td></tr>
                                    <tr><td>3</td>
                                            <td>Kinh doanh quốc tế, Marketing, Quản trị kinh doanh (Chuyên ngành: Quản trị nhà hàng - khách sạn)</td>
                                        <td>Từ 83 đến 84 triệu đồng/năm</td>
                                    </tr>
                                    <tr><td>4</td>
                                        <td>Kỹ thuật điều khiển và tự động hóa, Kỹ thuật xây dựng, Khoa học máy tính, Kỹ thuật phần mềm, Công nghệ sinh học</td>
                                        <td>Từ 81 đến 83 triệu đồng/năm</td>
                                    </tr>
                                </tbody>
                            </table>
                            <p className="text-table"> 2. Học phí kỹ năng tiếng Anh</p>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Chương trình</th>
                                        <th>Môn học</th>
                                        <th>Học phí trung bình</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr><td>Dự bị</td>
                                        <td>
                                            <p>- Intensive Preliminary English 1 (75 tiết)</p>
                                            <p>- Intensive Preliminary English 2 (75 tiết)</p>
                                            <p>- Intensive Preliminary English 3 (75 tiết)</p>
                                        </td>
                                        <td>5,4 triệu đồng/cấp độ</td>
                                    </tr>
                                    <tr><td>Chính Khóa</td>
                                        <td>
                                            <p>- Influencer English (120 tiết)</p>
                                            <p>- Researcher English (120 tiết)</p>
                                            <p>- Master English (135 tiết)</p>                
                                        </td>
                                        <td>11,5 triệu đồng/cấp độ</td>
                                    </tr>
                                </tbody>
                            </table>
                                <p className="text-table"> 3. Học phí chương trình dự bị đại học bằng tiếng Anh: 16,3 triệu đồng/học kỳ</p>
                        </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <div className="accordion-header">Chương trình liên kết đạo tạo quốc tế</div>
                        <div className="accordion-body">
                            <div className="scrollable-table">
                                <p className="text-table"> 1. Học phí giai đoạn 01 học tại TDTU theo lộ trình đào tạo (chưa bao gồm học phí kỹ năng tiếng Anh)</p>
                                <table>
                                    <thead>
                                        <tr>
                                            <th>STT</th>
                                            <th>Tên ngành</th>
                                            <th>Học phí trung bình năm học 2025-2026</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr><td>1</td>
                                            <td>
                                                Công nghệ thông tin (song bằng 2+2) - Chương trình liên kết Đại học La Trobe (Úc)
                                            </td>
                                            <td>Từ 76 đến 77 triệu đồng/năm</td>
                                        </tr>
                                        <tr><td>2</td>
                                            <td>
                                                Kế toán (song bằng 3+1) - Chương trình liên kết Đại học West of England, Bristol (Vương Quốc Anh)
                                            </td>
                                            <td>Từ 77 đến 78 triệu đồng/năm</td></tr>
                                        <tr><td>3</td>
                                            <td>Khoa học máy tính (đơn bằng 2+2) - Chương trình liên kết Đại học Kỹ thuật Ostrava (CH Séc)</td>
                                            <td>Từ 76 đến 77 triệu đồng/năm</td>
                                        </tr>
                                        <tr><td>4</td>
                                            <td>Kinh doanh (Tài chính, Kinh doanh quốc tế, Marketing, Kế toán, Quản trị nguồn nhân lực & Quan hệ lao động) (đơn bằng 2+1,5) - Chương trình liên kết Đại học Massey (New Zealand)</td>
                                            <td>75 triệu đồng/năm</td>
                                        </tr>
                                        <tr>
                                            <td>5</td>
                                            <td>
                                                Kinh doanh quốc tế (song bằng 3 +1) - Chương trình liên kết Đại học La Trobe (Úc)
                                            </td>
                                            <td>Từ 82 đến 83 triệu đồng/năm</td>
                                        </tr>
                                        <tr>
                                            <td>6</td>
                                            <td>
                                                Kỹ thuật điện – điện tử (song bằng 2,5+1,5) - Chương trình liên kết Đại học khoa học ứng dụng Saxion (Hà Lan)
                                            </td>
                                            <td>Từ 78 đến 79 triệu đồng/năm</td>
                                        </tr>
                                        <tr>
                                            <td>7</td>
                                            <td>
                                                Kỹ thuật xây dựng (song bằng 2+2) - Chương trình liên kết Đại học La Trobe (Úc)
                                            </td>
                                            <td>Từ 76 đến 77 triệu đồng/năm</td>
                                        </tr>
                                        <tr>
                                            <td>8</td>
                                            <td>
                                                Quản trị kinh doanh (đơn bằng 3+1) – Chương trình liên kết Đại học Lunghwa (Đài Loan)
                                            </td>
                                            <td>Từ 82 đến 83 triệu đồng/năm</td>
                                        </tr>
                                        <tr>
                                            <td>9</td>
                                            <td>
                                                Quản trị kinh doanh (song bằng 2+2) - Chương trình liên kết Trường Đại học Kinh tế và Kinh doanh Praha (Cộng Hòa Séc)
                                            </td>
                                            <td>Từ 78 đến 79 triệu đồng/năm</td>
                                        </tr>
                                        <tr>
                                            <td>10</td>
                                            <td>
                                                Quản trị kinh doanh toàn cầu (đơn bằng 2+2) - Chương trình liên kết Trường Kinh doanh Emlyon (Pháp)
                                            </td>
                                            <td>78 triệu đồng/năm</td>
                                        </tr>
                                        <tr>
                                            <td>11</td>
                                            <td>
                                                Quản trị nhà hàng - khách sạn (song bằng 2,5+1,5) - Chương trình liên kết Đại học Taylor’s (Malaysia)
                                            </td>
                                            <td>Từ 80 đến 81 triệu đồng/năm</td>
                                        </tr>
                                        <tr>
                                            <td>12</td>
                                            <td>
                                                Tài chính và kiểm soát (song bằng 3+1) - Chương trình liên kết Đại học khoa học ứng dụng Saxion (Hà Lan)
                                            </td>
                                            <td>Từ 78 đến 79 triệu đồng/năm</td>
                                        </tr>
                                        <tr>
                                            <td>13</td>
                                            <td>
                                                Ngôn ngữ Anh (đơn bằng 3+1) - Chương trình liên kết Đại học West of England, Bristol (Vương Quốc Anh)
                                            </td>
                                            <td>78 triệu đồng/năm</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>   
                        </div>
                    </div>
                    <div className="accordion-item">
                        <div className="accordion-header">Chương trình học tại Phân hiệu Khánh hòa</div>
                        <div className="accordion-body">
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
                                            <p>- Du lịch (Chuyên ngành Hướng dẫn du lịch)</p>
                                            <p>- Kế toán</p>
                                            <p>- Luật</p>
                                            <p>- Marketing</p>
                                            <p>- Ngôn ngữ Anh</p>
                                            <p>- Quan hệ lao động (Chuyên ngành Quản lý quan hệ lao động, Chuyên ngành Hành vi tổ chức)</p>
                                            <p>- Quản lý thể dục thể thao (Chuyên ngành Kinh doanh thể thao và tổ chức sự kiện)</p>
                                            <p>- Quản trị kinh doanh (Chuyên ngành Quản trị nhà hàng - khách sạn)</p>
                                        </td>
                                        <td>20.500.000 đồng/năm</td>
                                    </tr>
                                    <tr><td>Nhóm 2</td>
                                        <td>
                                            <p>- Bảo hộ lao động</p>
                                            <p>- Khoa học máy tính</p>
                                            <p>- Kỹ thuật phần mềm</p>
                                            <p>- Quản lý xây dựng</p>
                                            <p>- Thiết kế đồ họa</p>
                                        </td>
                                        <td>24.000.000 đồng/năm</td>
                                    </tr>
                                </tbody>
                            </table>
                            </div>
                        </div>
                    </div>
                </div>

                <h2>II. Chính sách học bổng năm 2025</h2>
                <p>TDTU cấp hơn <span className="red">80 tỷ đồng</span> học bổng với nhiều loại:</p>
                {/* <div className="scrollable-table">
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
                </div> */}
                <div class="scholarship-table-container">
                    <table class="scholarship-table">
                        <thead>
                            <tr>
                                <th>Loại học bổng</th>
                                <th>Học bổng</th>
                                <th>Đối tượng</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td rowspan="3"><strong>100% học phí năm học 2025 - 2026</strong></td>
                                <td>- Học bổng Thủ khoa đầu vào</td>
                                <td>Dành cho tân sinh viên có điểm xét tuyển cao nhất</td>
                            </tr>
                            <tr>
                                <td>- Học bổng tân sinh viên áp dụng cho học sinh thuộc các tỉnh đã ký kết hợp tác với TDTU</td>
                                <td>Dành cho học sinh thỏa điều kiện xét học bổng TDTU của các tỉnh hợp tác toàn diện với Trường <em>(Bình Thuận, Bình Định, Gia Lai, Lâm Đồng, Quảng Ngãi)</em></td>
                            </tr>
                            <tr>
                                <td>- Học bổng tân sinh viên áp dụng cho học sinh thuộc các Trường THPT ký kết hợp tác với TDTU</td>
                                <td>Dành cho học sinh các Trường THPT có ký kết hợp tác với TDTU thỏa điều kiện xét học bổng của từng học kỳ</td>
                            </tr>
                            <tr>
                                <td>Học bổng dành cho tân sinh viên là học sinh xếp mức Tốt/Giỏi của trường THPT chuyên, trọng điểm</td>
                                <td></td>
                                <td>Học sinh xếp mức Tốt/Giỏi 3 năm các trường THPT chuyên, trường trọng điểm thỏa điều kiện xét học bổng của TDTU</td>
                            </tr>
                            <tr>
                                <td>Học bổng chương trình đại học bằng tiếng Anh</td>
                                <td ></td>
                                <td><strong>100% tân sinh viên</strong> chương trình đại học bằng tiếng Anh được học bổng học kỳ đầu nếu thỏa điều kiện</td>
                            </tr>
                            <tr>
                                <td>Học bổng chương trình liên kết đào tạo quốc tế</td>
                                <td ></td>
                                <td><strong>100% tân sinh viên</strong> chương trình liên kết đào tạo quốc tế được cấp học bổng khi thỏa điều kiện của TDTU</td>
                            </tr>
                            <tr>
                                <td>Học bổng dành cho ngành có chính sách thu hút</td>
                                <td ></td>
                                <td>
                                    <p><strong>100% tân sinh viên</strong> các ngành thu hút được cấp học bổng, bao gồm:</p>
                                    <p>- Công tác xã hội</p>
                                    <p>- Công nghệ kỹ thuật môi trường</p>
                                    <p>- Khoa học môi trường</p>
                                    <p>- Bảo hộ lao động</p>
                                    <p>- Quy hoạch vùng và đô thị</p>
                                    <p>- Kỹ thuật xây dựng công trình giao thông</p>
                                    <p>- Quản lý thể dục thể thao - Chuyên ngành Golf</p>
                                    <p>- Kỹ thuật điện tử - viễn thông - chuyên ngành Kỹ thuật thiết kế vi mạch bán dẫn</p>
                                </td>
                            </tr>
                            <tr>
                                <td>Học bổng dành cho sinh viên là thế hệ đầu tiên trong gia đình học đại học</td>
                                <td ></td>
                                <td>Tân sinh viên là thế hệ đầu tiên trong gia đình học đại học trúng tuyển vào các ngành thu hút được xét cấp học bổng theo điều kiện của TDTU</td>
                            </tr>
                            <tr>
                                <td>Học bổng dành cho sinh viên là học sinh VFIS xét tuyển vào TDTU</td>
                                <td ></td>
                                <td>Học sinh đã hoàn thành chương trình lớp 12 tại VFIS xét tuyển vào TDTU và thỏa điều kiện của TDTU</td>
                            </tr>
                            <tr>
                                <td>Học bổng dành cho học sinh đạt giải trong kỳ thi học sinh giỏi cấp quốc gia, quốc tế và cuộc thi khoa học kỹ thuật cấp quốc gia, quốc tế</td>
                                <td ></td>
                                <td>Học sinh đạt thành tích cao trong các kỳ thi, cuộc thi cấp quốc gia hoặc quốc tế được xét cấp học bổng theo điều kiện của TDTU</td>
                            </tr>
                            <tr>
                                <td>Học bổng dành cho sinh viên là con ruột của giáo viên các trường THPT ký kết hợp tác với Trường Đại học Tôn Đức Thắng</td>
                                <td ></td>
                                <td>Sinh viên là con ruột của giáo viên thuộc trường THPT ký kết hợp tác và học tại Trường THPT ký kết hợp tác với TDTU được xét cấp học bổng theo điều kiện của TDTU</td>
                            </tr>
                            <tr>
                                <td>Học bổng khuyến khích cho nữ sinh viên học ngành kỹ thuật</td>
                                <td ></td>
                                <td><strong>100% nữ sinh viên</strong> học các ngành kỹ thuật: Kỹ thuật điện, Kỹ thuật điện tử viễn thông, Kỹ thuật điện tử - viễn thông - chuyên ngành Kỹ thuật thiết kế vi mạch bán dẫn, Kỹ thuật điều khiển và tự động hóa, Kỹ thuật cơ điện tử, Kỹ thuật xây dựng, Kỹ thuật xây dựng công trình giao thông, Quy hoạch vùng và đô thị, Bảo hộ lao động, Công nghệ kỹ thuật môi trường được cấp học bổng khuyến khích theo điều kiện của TDTU</td>
                            </tr>
                            <tr>
                                <td>Học bổng TDTU - Nâng bước sinh viên</td>
                                <td ></td>
                                <td>Sinh viên vượt khó, học tốt được cấp học bổng hỗ trợ theo điều kiện của TDTU</td>
                            </tr>
                            <tr>
                                <td>Học bổng dành cho sinh viên tại Phân hiệu</td>
                                <td ></td>
                                <td><strong>100% tân sinh viên</strong> học tại Phân hiệu Khánh Hòa được xét cấp học bổng theo điều kiện của TDTU</td>
                            </tr>
                            <tr>
                                <td>Các loại học bổng khác</td>
                                <td ></td>
                                <td>
                                    <p>- Học bổng anh/chị em ruột học tại TDTU</p>
                                    <p>- Học bổng cho con, anh/chị em ruột cán bộ công đoàn</p>
                                    <p>- Học bổng dành cho sinh viên khuyết tật có hoàn cảnh khó khăn</p>
                                    <p>- Học bổng dành cho tân sinh viên có thành tích tiếng Anh đầu vào cao</p>
                                    <p>- Học bổng dành cho sinh viên nội trú Ký túc xá</p>
                                    <p>- Và nhiều loại học bổng khác với đa dạng đối tượng và hình thức</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <Footer />
        </>
    );
}