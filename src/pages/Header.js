import '../css/header.css'
import logo from '../img/logo_2.png'
const menuItems = [
    { label: 'Trang chủ', href: '/' },
    { label: 'Giới thiệu', href: '/gioi-thieu' },
    { label: 'Thông báo', href: '/thong-bao' },
    { label: 'Tư vấn tuyển sinh', href: '/tu-van' },
    { label: 'Hỏi - Đáp', href: '/hoi-dap' },
    { label: 'Liên hệ', href: '/lien-he' },
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
                            <a key={idx} href={item.href} className="tdtu-nav-link">
                                {item.label}
                            </a>
                        ))}
                    </nav>
                </div>
            </div>
        </header>
    );
  }
