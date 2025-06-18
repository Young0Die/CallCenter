import '../css/header.css';
import { Link } from 'react-router-dom';
const menuItems = [
    { label: 'Trang chủ', href: '/' },
    { label: 'Phương Thức Tuyển Sinh', href: '/phuong-thuc-tuyen-sinh' },
    { label: 'Học phí - Học bổng', href: '/hoc-phi-hoc-bong' },
    { label: 'Học Tại TDTU', href: '/hoc-tai-tdtu' },
  ];
export default function Header() {
    return (
        <header className="tdtu-header">
            <div className="tdtu-header-container">
                <div className="tdtu-header-left">
                    <a href="/" className="tdtu-logo">
                        <img
                            src ="https://admission.tdtu.edu.vn/sites/admission23/files/Admission-2023/Logo-admission.png"
                            alt="logo tdtu"
                        />
                    </a>
                </div>
                <div className="tdtu-header-right">
                    <nav className="tdtu-nav">
                        {menuItems.map((item, idx) => (
                            <Link key={idx} to={item.href} className="tdtu-nav-link">
                                {item.label}
                            </Link>
                        ))}
                    </nav>
                </div>
            </div>
        </header>
    );
  }
