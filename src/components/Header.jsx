import React, { useState, useEffect } from 'react';
import './Header.css';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeNav, setActiveNav] = useState('TRANG CHỦ');
  const [currentLang, setCurrentLang] = useState('VI');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navItems = [
    { label: 'TRANG CHỦ', href: '#' },
    { label: 'GIỚI THIỆU', href: '#gioi-thieu' },
    { label: 'PHÒNG NGHỈ', href: '#phong-nghi' },
    { label: 'TRẢI NGHIỆM', href: '#trai-nghiem' },
    { label: 'THƯ VIỆN', href: '#thu-vien' },
    { label: 'LIÊN HỆ', href: '#lien-he' },
  ];

  const handleNavClick = (label) => {
    setActiveNav(label);
    setMobileMenuOpen(false);
  };

  return (
    <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        {/* Left: Logo */}
        <a href="#" className="logo-brand" onClick={() => setMobileMenuOpen(false)}>
          <div className="logo-icon">
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 22V13M12 13C12 9 8 5 4 5C4 9 7 13 12 13ZM12 13C12 9 16 5 20 5C20 9 17 13 12 13ZM12 17C10 15 7 14 4 14C4 17 7 19 12 17ZM12 17C14 15 17 14 20 14C20 17 17 19 12 17Z"
                stroke="url(#goldGradient)"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <defs>
                <linearGradient id="goldGradient" x1="4" y1="5" x2="20" y2="22" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#F6E09E" />
                  <stop offset="0.5" stopColor="#E2BD73" />
                  <stop offset="1" stopColor="#B38938" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="logo-text-group">
            <span className="logo-title">CÔN ĐẢO</span>
            <span className="logo-subtitle">HOMESTAY</span>
          </div>
        </a>

        {/* Center: Desktop Navigation Menu */}
        <nav className="header-nav">
          <ul className="nav-list">
            {navItems.map((item) => (
              <li key={item.label} className="nav-item">
                <a
                  href={item.href}
                  className={`nav-link ${activeNav === item.label ? 'active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.label);
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right: Actions & Mobile Hamburger */}
        <div className="header-actions">
          <button className="btn-booking desktop-booking">
            <span>ĐẶT PHÒNG</span>
            <svg
              className="btn-arrow"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>

          <div className="lang-switcher desktop-lang">
            <button
              className={`lang-btn ${currentLang === 'VI' ? 'active' : ''}`}
              onClick={() => setCurrentLang('VI')}
            >
              VI
            </button>
            <span className="lang-divider">|</span>
            <button
              className={`lang-btn ${currentLang === 'EN' ? 'active' : ''}`}
              onClick={() => setCurrentLang('EN')}
            >
              EN
            </button>
          </div>

          {/* Mobile Hamburger Toggle Button */}
          <button
            className={`btn-mobile-menu ${mobileMenuOpen ? 'open' : ''}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            <span className="hamburger-line" />
            <span className="hamburger-line" />
            <span className="hamburger-line" />
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <div className={`mobile-nav-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-nav-backdrop" onClick={() => setMobileMenuOpen(false)} />
        <div className="mobile-nav-content">
          <ul className="mobile-nav-list">
            {navItems.map((item) => (
              <li key={item.label} className="mobile-nav-item">
                <a
                  href={item.href}
                  className={`mobile-nav-link ${activeNav === item.label ? 'active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.label);
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="mobile-nav-footer">
            <button className="btn-booking mobile-btn-booking">
              <span>ĐẶT PHÒNG NGAY</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>

            <div className="mobile-lang-switcher">
              <button
                className={`lang-btn ${currentLang === 'VI' ? 'active' : ''}`}
                onClick={() => setCurrentLang('VI')}
              >
                Tiếng Việt (VI)
              </button>
              <span className="lang-divider">/</span>
              <button
                className={`lang-btn ${currentLang === 'EN' ? 'active' : ''}`}
                onClick={() => setCurrentLang('EN')}
              >
                English (EN)
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
