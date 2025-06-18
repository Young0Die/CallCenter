import React from "react";
import '../css/pttsPage.css';
import Header from "./Header";
import Footer from "./Footer";
export default function PhuongThucTuyenSinh() {
    return (
        <>
        <Header/>
        <div className="tdtu-method-wrapper">
            <div className="tdtu-method-container">
                <h1 className="method-title">Phương thức tuyển sinh năm 2025</h1>
                <p className="method-meta">TDTU, 30/12/2024 | 09:27, GMT+7</p>
                <hr />
                <p>
                    Năm 2025, Trường Đại học Tôn Đức Thắng (TDTU) dự kiến tuyển sinh 7.070 chỉ tiêu trình độ đại học cho 43 ngành chương
                    trình tiêu chuẩn, 21 ngành chương trình tiên tiến, 11 ngành chương trình đại học bằng tiếng Anh, 10 ngành chương trình dự
                    bị đại học bằng tiếng Anh, 13 ngành chương trình học tại phân hiệu Khánh Hòa, 13 ngành chương trình liên kết đào tạo quốc tế,
                    12 ngành chương trình dự bị liên kết đào tạo quốc tế theo các phương thức xét tuyển:
                </p>
                <ul className="method-list">
                    <li><strong>Phương thức 1:</strong> Xét tuyển theo kết quả quá trình học tập Trung học phổ thông (kết quả 6HK và các thành tích học tập khác)</li>
                    <li><strong>Phương thức 2:</strong> Xét tuyển theo kết quả thi tốt nghiệp THPT năm 2025</li>
                    <li><strong>Phương thức 3:</strong> Xét tuyển theo kết quả bài thi đánh giá năng lực năm 2025 của Đại học Quốc gia TP.HCM</li>
                    <li><strong>Phương thức 4:</strong> Ưu tiên xét tuyển theo quy định của TDTU và tuyển thẳng theo quy định của Bộ GD&ĐT</li>
                </ul>
                <p className="method-link">Danh mục ngành tuyển sinh đại học năm 2025 (<a href="#">xem tại đây</a>)</p>

                <h2 className="method-subtitle">1. Phương thức 1: Xét theo kết quả quá trình học tập Trung học phổ thông</h2>
                <h3 className="method-subsub">a. Đối tượng</h3>
                <ul className="method-list">
                    <li>
                        Thí sinh là học sinh lớp 12 bậc Trung học phổ thông (THPT) tại các trường THPT ký kết hợp tác với TDTU, tốt nghiệp THPT năm 2025
                        (riêng chương trình liên kết đào tạo quốc tế tuyển sinh tốt nghiệp THPT từ năm 2021 đến năm 2025) xét tuyển vào tất cả các chương trình;
                        bảo đảm đúng ngành đào tạo và xét tuyển theo quy định của TDTU.
                    </li>
                    <li>
                        Thí sinh là học sinh lớp 12 bậc THPT tại các trường THPT chưa ký hợp tác với TDTU tốt nghiệp THPT từ năm 2021 đến năm 2025
                        xét tuyển vào chương trình liên kết quốc tế hoặc các chương trình theo ngành quy định riêng của TDTU.
                    </li>
                    <li>
                        Thí sinh tra cứu danh sách các trường THPT ký kết/chưa ký kết tại trang: https://tracuutruongkyket.tdtu.edu.vn.
                    </li>
                </ul>
                <h3 className="method-subsub">b. Phạm vi xét tuyển:</h3>
                    <p className="method-p">
                        Tất cả các ngành giáo dục đại học chương trình tiêu chuẩn, chương trình tiên tiến, chương trình học tại Phân hiệu Khánh Hòa, chương trình đại học bằng tiếng Anh, chương trình dự bị đại học bằng tiếng Anh, chương trình liên kết đào tạo quốc tế, chương trình dự bị liên kết đào tạo quốc tế.
                    </p>
                <h3 className="method-subsub">c. Nguyên tắc xét tuyển</h3>
                    <ul className="method-list">
                        <li>Xét tuyển kết quả học tập THPT 6HK (HK1,2 lớp 10; HK1,2 lớp 11; HK1,2 lớp 12) theo tổ hợp môn và các thành tích học tập khác. Chương trình đại học tiếng Anh, thí sinh có thể xét tuyển theo tổ hợp môn có chứng chỉ tiếng Anh quốc tế. Chương trình liên kết đào tạo quốc tế, thí sinh có thể xét tuyển theo tổ hợp môn có chứng chỉ tiếng Anh hoặc tổ hợp môn có Phỏng vấn.</li>
                        <li>Thí sinh đăng ký nguyện vọng xét tuyển (NVXT) trên hệ thống của Bộ GD&ĐT không giới hạn số lượng nguyện vọng và các nguyện vọng được xếp thứ tự từ 1 đến hết (nguyện vọng 1 là nguyện vọng cao nhất). Thí sinh đăng ký nguyện vọng gồm các thông tin: Thứ tự nguyện vọng; Mã trường, Tên trường; Mã ngành; Tên ngành/chương trình.</li>
                        <li>Thí sinh phải đạt ngưỡng đảm bảo chất lượng quy đổi của phương thức 1 mới đủ điều kiện xét tuyển.</li>
                        <li>TDTU xác định quy tắc quy đổi tương đương ngưỡng đầu vào và điểm trúng tuyển của các phương thức xét tuyển theo hướng dẫn thống nhất của Bộ GD&ĐT sau khi có kết quả thi tốt nghiệp THPT 2025.</li>
                        <li>TDTU thực hiện xét tuyển theo thứ tự nguyện vọng thí sinh đăng ký trên hệ thống của Bộ GD&ĐT, theo nguyên tắc xét tuyển xử lý nguyện vọng do Bộ GD&ĐT quy định.</li>
                        <li>Kết quả trúng tuyển chính thức của thí sinh được công bố sau khi Trường thực hiện xét tuyển lọc ảo theo quy định và kế hoạch của Bộ GD&ĐT.</li>
                    </ul>
                <h3 className="method-subsub">d. Thời gian đăng ký xét tuyển trên hệ thống của TDTU</h3>
                    <ul className="method-list">
                        <li>
                            Từ ngày 25/5/2025 đến ngày 25/7/2025: thí sinh đăng ký nộp chứng chỉ tiếng Anh và minh chứng cộng điểm khuyến khích trực tuyến trên hệ thống
                            <a href="#" target="_blank" rel="noopener noreferrer">https://xettuyen.tdtu.edu.vn</a>.
                            Thí sinh không nộp chứng chỉ tiếng Anh hoặc minh chứng cộng điểm khuyến khích hợp lệ theo quy định trên hệ thống của TDTU sẽ không được hưởng các chính sách khuyến khích dành cho đối tượng này.
                        </li>
                        <li>
                            Từ ngày 16/7/2025 đến 17g00 ngày 28/7/2025 (thời gian đăng ký theo hướng dẫn của Bộ GD&ĐT): thí sinh đăng ký nguyện vọng xét tuyển (NVXT) trên hệ thống của Bộ GD&ĐT.
                            Trường xét tuyển theo nguyện vọng thí sinh đăng ký trên hệ thống của Bộ GD&ĐT.
                        </li>
                        <li>
                            TDTU công bố ngưỡng đảm bảo chất lượng quy đổi của các phương thức xét tuyển theo hướng dẫn của Bộ GD&ĐT (sau khi có kết quả thi tốt nghiệp THPT 2025).
                        </li>
                        <li>
                            Từ ngày 29/7/2025 đến 17g00 ngày 05/8/2025 (thời gian đăng ký theo hướng dẫn của Bộ GD&ĐT): thí sinh nộp lệ phí xét tuyển trực tuyến trên hệ thống của Bộ GD&ĐT.
                        </li>
                        <li>
                            <strong>Lưu ý:</strong> Kế hoạch thời gian đăng ký NVXT trên hệ thống Bộ GD&ĐT và thời gian nộp lệ phí xét tuyển trên hệ thống của Bộ GD&ĐT được cập nhật theo hướng dẫn của Bộ GD&ĐT.
                        </li>
                    </ul>
                    <h3 className="method-subsub">e. Điều kiện xét tuyển</h3>
                    <ul className="method-list">
                        <li>
                            Thí sinh phải đạt ngưỡng đảm bảo đầu vào do Trường Đại học Tôn Đức Thắng công bố chính thức sau khi có điểm thi tốt nghiệp THPT 2025 và hướng dẫn quy đổi điểm tương đương của Bộ GD&ĐT.
                            Thí sinh tham khảo ngưỡng đảm bảo đầu vào dự kiến (phụ lục 1 - <em>xem tại đây</em>).
                        </li>
                        <li>
                            Thí sinh xét tuyển theo tổ hợp có môn năng khiếu (ngành Thiết kế đồ họa, Thiết kế nội thất, Thiết kế thời trang, Kiến trúc, Quản lý thể dục thể thao)
                            phải đăng ký dự thi môn năng khiếu do TDTU tổ chức tại
                            <a href="#" target="_blank" rel="noopener noreferrer">https://thinangkhieu.tdtu.edu.vn</a>.
                            Thí sinh có thể dự thi cả 3 đợt thi năng khiếu để dùng điểm cao nhất của 3 đợt thi xét tuyển. TDTU không nhận kết quả thi năng khiếu của Trường khác để xét tuyển.
                        </li>
                        <li>
                            Thí sinh xét tuyển theo phương thức 1 bằng tổ hợp có môn phỏng vấn vào chương trình liên kết đào tạo quốc tế, chương trình dự bị liên kết đào tạo quốc tế
                            phải đăng ký tham dự phỏng vấn do TDTU tổ chức tại
                            <a href="#" target="_blank" rel="noopener noreferrer">https://xettuyen.tdtu.edu.vn</a>.
                        </li>
                        <li>
                            Thí sinh đăng ký xét tuyển vào ngành "Dược học" phải có kết quả học tập cả năm lớp 12 được đánh giá mức Tốt (học lực xếp từ loại Giỏi trở lên) hoặc điểm xét tốt nghiệp THPT từ 8.0 trở lên.
                        </li>
                        <li>
                            Điều kiện tiếng Anh của thí sinh xét tuyển vào chương trình đại học bằng tiếng Anh, chương trình liên kết đào tạo quốc tế:
                            <ul className= "method-ul">
                                <li>
                                    Thí sinh phải nộp chứng chỉ tiếng Anh quốc tế trình độ B1 tương đương IELTS 5.0 trở lên (chương trình đại học bằng tiếng Anh),
                                    chứng chỉ tiếng Anh trình độ B2 tương đương IELTS 5.5 trở lên (chương trình liên kết đào tạo quốc tế) có giá trị từ ngày 01/10/2023 và còn giá trị đến ngày 01/10/2025.
                                    Thí sinh không nộp chứng chỉ tiếng Anh theo quy định về TDTU sẽ không đủ điều kiện xét tuyển.
                                </li>
                                <li>
                                    Thí sinh không có chứng chỉ tiếng Anh theo quy định có thể đăng ký xét tuyển vào chương trình dự bị đại học bằng tiếng Anh, chương trình dự bị liên kết đào tạo quốc tế.
                                    Trong 01 năm học, thí sinh phải nộp chứng chỉ tiếng Anh theo quy định để chuyển vào chương trình chính thức. Sau 01 năm học, thí sinh không nộp chứng chỉ tiếng Anh theo quy định sẽ phải dừng học.
                                </li>
                                <li>
                                    Danh mục chứng chỉ ngoại ngữ tuyển sinh đại học năm 2025 (phụ lục 5 - <em>xem tại đây</em>).
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <h3 className="method-subsub">f. Cách thức đăng ký</h3>
                    <ul class="method-list">
                        <li>Bước 1: Thí sinh đăng ký nộp chứng chỉ tiếng Anh và minh chứng cộng điểm khuyến khích...</li>
                        <li>Bước 2: Thí sinh đăng ký NVXT lên hệ thống của Bộ GD&ĐT...</li>
                        <li>Bước 3: Thí sinh thanh toán lệ phí xét tuyển theo hướng dẫn...</li>
                        <ul className="method-ul">
                            <li>Thí sinh đăng ký dự thi năng khiếu tại website: https://thinangkhieu.tdtu.edu.vn.</li>
                            <li>Thí sinh đăng ký tham gia bài phỏng vấn tại website https://xettuyen.tdtu.edu.vn.</li>
                        </ul>
                    </ul>
                    <h3 className="method-subsub">g. Lệ phí xét tuyển, phỏng vấn</h3>
                    <ul className="method-list">
                        <li>Lệ phí phỏng vấn xét tuyển chương trình liên kết đào tạo quốc tế theo phương thức 1: 200.000 đồng/đợt. Thí sinh nộp về Trường Đại học Tôn Đức Thắng theo thông báo hướng dẫn. Trường không hoàn trả lệ phí phỏng vấn.</li>
                        <li> Thí sinh thực hiện thanh toán lệ phí xét tuyển theo hướng dẫn của Bộ GD&ĐT.</li>
                    </ul>
                    <h3 className="method-subsub">h. Công thức tính điểm</h3>
                    <ul className="method-list">
                        <li><b>Điểm trung bình môn học ở học kỳ thứ n:</b> ĐTBmh HKn (với n từ 1 đến 6, tương ứng 6 học kỳ: 2 học kỳ lớp 10, lớp 11 và lớp 12).</li>
                        <li><i>Thí dụ:</i> ĐTBmh HK1 Toán: Điểm trung bình Toán Học kỳ 1 lớp 10</li>
                        <li><b>Điểm trung bình 6 học kỳ của môn học</b> (làm tròn đến 2 chữ số thập phân):<br />
                            ĐTB 6HK mh = (ĐTBmh HK2 + ĐTBmh HK3 + ĐTBmh HK4 + ĐTBmh HK5 + ĐTBmh HK6)/6</li>
                        <li><b>Điểm xét tuyển 6 học kỳ (ĐXT 6HK):</b> Tổng điểm trung bình 6 học kỳ của các môn theo Tổ hợp xét tuyển cộng với điểm khuyến khích (học sinh trường THPT, thành tích học sinh giỏi, chứng chỉ tiếng Anh quốc tế,...) và cộng Điểm ưu tiên đối tượng, khu vực.<br />
                            <br />
                            <b>ĐXT 6HK = Đ6HK THM + Điểm ưu tiên</b></li>
                        <b>Trong đó:</b><br />
                        <li>
                            <b>Đ6HK Tổ hợp môn = ĐTB 6HK mh1 + ĐTB 6HK mh2 + ĐTB 6HK mh3 * 2 + Điểm KKHT</b>
                        </li>
                        <li><b>Công thức tính Điểm quy đổi (ĐQĐ) từ Đ6HK Tổ hợp môn</b> sẽ được nhà trường cập nhật khi có hướng dẫn chính thức từ Bộ GD&ĐT.</li>
                        <li>Thang điểm xét tuyển là thang 40 điểm, làm tròn đến 02 chữ số thập phân. Nếu tổng điểm của thí sinh lớn hơn 40 điểm thì thí sinh được hưởng điểm tối đa là 40.00 điểm.</li>
                        <li>Tổng điểm khuyến khích tối đa là 4.0 điểm. Nếu tổng điểm khuyến khích của thí sinh lớn hơn 4.0 điểm thì thí sinh được hưởng tối đa là 4.0 điểm. Điểm khuyến khích gồm có:</li>
                        <ul className="method-ul">
                            <li> Điểm hệ số trường THPT do TDTU quy định (trường chuyên/năng khiếu/trường trực thuộc TDTU được cộng 2.00; trường thường được cộng 1.00; trường không cộng 0.00). Danh sách trường chuyên/năng khiếu/trường trực thuộc TDTU xem tại phụ lục 14.</li>
                            <li> Điểm khuyến khích dành cho thí sinh có chứng chỉ tiếng Anh quốc tế còn thời hạn, diện tiến tiến, học tại Phân hiệu.</li>
                            <li> Điểm thành tích học sinh giỏi: học sinh đạt giải trong kỳ thi chọn học sinh giỏi cấp tỉnh/thành phố/quốc gia, đạt giải trong cuộc thi khoa học kỹ thuật cấp quốc gia, học sinh có kết quả học tập xếp loại Tốt/Giỏi 3 năm liền.</li>
                            <li> Điểm cộng khuyến khích dành cho phương thức 1 (phụ lục 7).</li>
                        </ul>
                        <li><b>Điểm ưu tiên khu vực, đối tượng</b> với điểm Đ6HK THM từ 30.00 (thang điểm 40) trở lên được xác định theo công thức sau:</li>
                        <li><b>Điểm ưu tiên (thang điểm 40) = [40 – (Đ6HK THM)/10] × (Điểm ưu tiên khu vực + Điểm ưu tiên đối tượng)</b></li>
                        <li> Điểm ưu tiên đối tượng, khu vực (quy về thang 40) bằng 4/3 lần điểm ưu tiên quy định của Bộ GD&ĐT theo thang điểm 30.</li>
                    </ul>
                    <h2 className="method-subtitle">2. Phương thức 2: xét tuyển theo kết quả thi tốt nghiệp THPT 2025</h2>  
                    <ul className="method-list">
                        <li>Từ ngày 25/5/2025 đến ngày 25/7/2025: thí sinh đăng ký nộp chứng chỉ ngoại ngữ và minh chứng cộng điểm khuyến khích trực tuyến trên hệ thống <a href="https://xettuyen.tdtu.edu.vn" target="_blank">https://xettuyen.tdtu.edu.vn</a>. Thí sinh không nộp chứng chỉ tiếng Anh hoặc minh chứng cộng điểm khuyến khích hợp lệ theo quy định trên hệ thống của TDTU sẽ không được hưởng các chính sách khuyến khích dành cho đối tượng này.</li>
                        <li>Từ ngày 16/7/2025 đến 17g00 ngày 28/7/2025 (thời gian đăng ký theo hướng dẫn của Bộ GD&ĐT), thí sinh đăng ký NVXT trên hệ thống của Bộ GD&ĐT. Các nguyện vọng của thí sinh ĐKXT trên hệ thống của Bộ GD&ĐT được xếp thứ tự từ 1 đến hết (nguyện vọng 1 là nguyện vọng cao nhất). Thí sinh đăng ký nguyện vọng gồm các thông tin: Thứ tự nguyện vọng; Mã trường, Tên trường; Mã ngành, Tên ngành/chương trình.</li>
                        <li>Từ ngày 29/7/2025 đến 17g00 ngày 05/8/2025 (thời gian đăng ký theo hướng dẫn của Bộ GD&ĐT), thí sinh thanh toán lệ phí xét tuyển trên hệ thống của Bộ GD&ĐT.</li>
                        <li>Ngưỡng đảm bảo chất lượng đầu vào phương thức 2 sẽ được TDTU công bố sau khi có điểm thi tốt nghiệp THPT năm 2025 và theo hướng dẫn của Bộ GD&ĐT về việc quy đổi điểm tương đương. Đối với ngành Dược học, thí sinh đăng ký vào ngành Dược học phải đảm bảo ngưỡng điểm đảm bảo chất lượng của Bộ GD&ĐT công bố theo thang điểm 30 và đảm bảo ngưỡng đảm bảo chất lượng của TDTU công bố theo thang 40 mới đủ điều kiện nộp hồ sơ.</li>
                        <li>TDTU xác định quy tắc quy đổi tương đương ngưỡng đầu vào và điểm trúng tuyển của các phương thức xét tuyển theo hướng dẫn thống nhất của Bộ GD&ĐT sau khi có kết quả thi tốt nghiệp THPT 2025.</li>
                        <li>Nguyên tắc xét tuyển, điểm xét tuyển thực hiện theo Quy chế tuyển sinh đại học hiện hành của Trường và của Bộ GD&ĐT. Trong đó, Điểm xét tuyển phương thức 2 (thang 40 điểm) là tổng điểm các môn theo tổ hợp xét tuyển (có môn nhân hệ số 2) cộng với điểm ưu tiên và điểm khuyến khích. TDTU thực hiện xét tuyển theo thứ tự nguyện vọng thí sinh đăng ký trên hệ thống của Bộ GD&ĐT, theo nguyên tắc xét tuyển xử lý nguyện vọng do Bộ GD&ĐT quy định.</li>
                        <li>Đối với tổ hợp xét tuyển có môn ngoại ngữ (Tiếng Anh, Tiếng Trung), TDTU sử dụng kết quả điểm thi môn ngoại ngữ trong kỳ thi tốt nghiệp THPT năm 2025 hoặc điểm quy đổi chứng chỉ ngoại ngữ quy định tại Danh mục chứng chỉ ngoại ngữ tuyển sinh đại học năm 2025 (phụ lục 5 - xem tại đây) để xét tuyển.</li>
                        <li>TDTU không sử dụng điểm thi được bảo lưu theo quy định tại Quy chế xét công nhận tốt nghiệp THPT để xét tuyển.</li>
                        <li>Thí sinh xét tuyển theo tổ hợp có môn năng khiếu (ngành Thiết kế đồ họa, Thiết kế nội thất, Thiết kế thời trang, Kiến trúc, Quy hoạch vùng và đô thị, Quản lý thể dục thể thao) phải đăng ký dự thi môn năng khiếu do TDTU tổ chức tại <a href="https://thinangkhieu.tdtu.edu.vn" target="_blank">https://thinangkhieu.tdtu.edu.vn</a>. Thí sinh có thể dự thi cả 3 đợt thi năng khiếu để dùng điểm cao nhất của 3 đợt thi xét tuyển. TDTU không sử dụng kết quả thi của các trường khác chuyển sang.</li>
                        <li><b>Điều kiện tiếng Anh của Thí sinh xét tuyển vào chương trình đại học bằng tiếng Anh, chương trình liên kết đào tạo quốc tế:</b>
                            <ul className="method-ul">
                                <li>Thí sinh phải nộp chứng chỉ tiếng Anh quốc tế trình độ B1 tương đương IELTS 5.0 trở lên (chương trình đại học bằng tiếng Anh), chứng chỉ tiếng Anh trình độ B2 tương đương IELTS 5.5 trở lên (chương trình liên kết đào tạo quốc tế) có giá trị từ ngày 01/10/2023 và còn giá trị đến ngày 01/10/2025 về TDTU. Thí sinh không nộp chứng chỉ tiếng Anh theo quy định về TDTU sẽ không đủ điều kiện xét tuyển.</li>
                                <li>Thí sinh không có chứng chỉ tiếng Anh theo quy định có thể đăng ký xét tuyển vào chương trình dự bị đại học bằng tiếng Anh, chương trình dự bị liên kết đào tạo quốc tế. Trong 01 năm học, thí sinh phải nộp chứng chỉ tiếng Anh theo quy định để chuyển vào chương trình chính thức. Sau 01 năm học, thí sinh không nộp chứng chỉ tiếng Anh theo quy định sẽ phải dừng học.</li>
                            </ul>
                        </li>
                        <li>Thí sinh thuộc các đối tượng sau đăng ký nộp hồ sơ minh chứng ưu tiên cộng điểm khuyến khích theo phương thức 2 về TDTU trong thời gian quy định:
                            <ul className="method-ul">
                                <li>Thí sinh theo quy định tại khoản 1, 2 Điều 8 Thông tư số 08/2022/TT-BGDĐT và khoản 2 Điều 2 Thông tư số 06/2025/TT-BGDĐT không dùng quyền xét tuyển thẳng; thí sinh đoạt giải khuyến khích trong kỳ thi chọn học sinh giỏi quốc gia; thí sinh đoạt giải tư trong cuộc thi khoa học, kỹ thuật cấp quốc gia dự tuyển vào ngành phù hợp với môn thi hoặc nội dung đề tài dự thi.</li>
                                <li>Thí sinh đoạt huy chương vàng, bạc, đồng các giải thể dục thể thao cấp quốc gia tổ chức một lần trong năm; thí sinh được Tổng cục Thể dục thể thao (TDTT) có quyết định công nhận là kiện tướng quốc gia khi xét tuyển vào ngành Quản lý thể dục thể thao, thời gian được tính để hưởng ưu tiên là không quá 4 năm tính tới thời điểm xét tuyển.</li>
                                <li>Thí sinh đoạt giải chính thức trong các cuộc thi Mỹ thuật chuyên nghiệp chính thức toàn quốc khi xét tuyển vào nhóm ngành Mỹ thuật ứng dụng, thời gian đoạt giải không quá 4 năm tính tới thời điểm xét tuyển.</li>
                            </ul>
                        </li>
                        <li>Tổng điểm cộng khuyến khích của phương thức 2 không quá 4.0 điểm. Các đối tượng được cộng điểm khuyến khích phù hợp với ngành/lĩnh vực đạt giải theo quy định tại phụ lục 9 - xem tại đây</li>
                        <li>Danh mục ngành, tổ hợp xét tuyển theo phương thức 2 dự kiến (phụ lục 2 - xem tại đây)</li>
                        <li>Quy định điểm ưu tiên khu vực, đối tượng (phụ lục 6 - xem tại đây)</li>
                        <li>Quy định điểm cộng khuyến khích dành cho phương thức 2 (phụ lục 8 - xem tại đây)</li>
                    </ul>

            </div>
        </div>
        <Footer/>
        </>
    );
}
