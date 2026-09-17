import React from 'react';
import './HeroOverlay.css';

export default function HeroOverlay({ overlay1Ref, overlay2Ref, overlay3Ref }) {
  return (
    <>
      {/* ========================================================= */}
      {/* LAYER 1: FRAME 1 OVERLAY ("Trở về Với những điều thật đẹp") */}
      {/* ========================================================= */}
      <div ref={overlay1Ref} className="hero-overlay layer-initial">
        {/* Top Right: Healing Quote */}
        <div className="initial-top-right-quote">
          <div className="quote-badge">
            <span className="quote-mark">“</span>
            <p className="quote-content">
              Không chỉ là một nơi lưu trú,<br />
              mà là một phần của hành trình chữa lành.”
            </p>
          </div>
        </div>

        {/* Center-Left Main Content */}
        <div className="initial-left-content">
          <div className="initial-script-kicker">
            <span>Trở về</span>
          </div>

          <h1 className="initial-title">
            <span className="title-row">Với những điều</span>
            <span className="title-row">thật đẹp</span>
          </h1>

          <p className="initial-desc">
            Một homestay giữa thiên nhiên Côn Đảo,<br />
            nơi bạn có thể chậm lại, hít thở sâu và cảm nhận cuộc sống.
          </p>

          <div className="initial-btn-group">
            {/* Button 1: Khám phá ngay */}
            <button className="btn-gold-pill">
              <span className="pill-text">KHÁM PHÁ NGAY</span>
              <svg className="pill-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </button>

            {/* Button 2: Xem Video Hành trình */}
            <button className="btn-video-action">
              <span className="btn-video-circle">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
              </span>
              <div className="btn-video-texts">
                <span className="btn-video-title">XEM VIDEO</span>
                <span className="btn-video-sub">Hành trình tại Côn Đảo</span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* LAYER 2: FRAME 90 OVERLAY ("Chào mừng đến Côn Đảo Homestay") */}
      {/* ========================================================= */}
      <div ref={overlay2Ref} className="hero-overlay layer-gate">
        {/* Left Main Content */}
        <div className="hero-left-col">
          <div className="hero-badge">
            <span className="badge-text">CHÀO MỪNG ĐẾN</span>
          </div>

          <h1 className="hero-main-title">
            <span className="title-line">CÔN ĐẢO</span>
            <span className="title-line">HOMESTAY</span>
          </h1>

          <p className="hero-tagline">
            Một nơi để chậm lại,<br />
            và cảm nhận trọn vẹn thiên nhiên
          </p>

          <div className="hero-cta-group">
            <button className="btn-explore">
              <span className="btn-text">KHÁM PHÁ NGAY</span>
              <span className="btn-icon-circle">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </span>
            </button>
          </div>
        </div>

        {/* Right Features */}
        <div className="hero-right-col">
          <div className="feature-item">
            <h3 className="feature-title">THIÊN NHIÊN</h3>
            <p className="feature-desc">Trong lành</p>
          </div>
          <div className="feature-divider" />
          <div className="feature-item">
            <h3 className="feature-title">KHÔNG GIAN</h3>
            <p className="feature-desc">Tinh tế</p>
          </div>
          <div className="feature-divider" />
          <div className="feature-item">
            <h3 className="feature-title">TRẢI NGHIỆM</h3>
            <p className="feature-desc">Đáng nhớ</p>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="hero-bottom-row">
          <div className="bottom-location">
            <div className="location-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#E2BD73" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" fill="#E2BD73" />
              </svg>
            </div>
            <div className="location-text">
              <h4 className="location-title">Côn Đảo, Bà Rịa - Vũng Tàu</h4>
              <p className="location-sub">Thiên nhiên nguyên sơ, trải nghiệm khác biệt</p>
            </div>
          </div>

          <div className="bottom-scroll-prompt">
            <div className="scroll-capsule">
              <svg className="scroll-arrow-down" width="12" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="5" x2="12" y2="19" />
                <polyline points="19 12 12 19 5 12" />
              </svg>
            </div>
            <div className="scroll-texts">
              <span className="scroll-title">Cuộn xuống</span>
              <span className="scroll-sub">để khám phá thêm</span>
            </div>
          </div>

          <div className="bottom-cards">
            {/* Card 1: XEM VIDEO */}
            <div className="banner-card video-card" style={{ backgroundImage: 'url(/frames/ezgif-frame-001.jpg)' }}>
              <div className="banner-card-overlay" />
              <div className="banner-card-content">
                <div className="banner-play-circle">
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="8 5 19 12 8 19 8 5" />
                  </svg>
                </div>
                <div className="banner-text-group">
                  <span className="banner-title">XEM VIDEO</span>
                  <p className="banner-desc">Trải nghiệm cùng chúng tôi</p>
                </div>
                <div className="banner-arrow">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="4" y1="12" x2="20" y2="12" />
                    <polyline points="14 6 20 12 14 18" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Card 2: KHÁM PHÁ */}
            <div className="banner-card explore-card" style={{ backgroundImage: 'url(/frames/ezgif-frame-090.jpg)' }}>
              <div className="banner-card-overlay" />
              <div className="banner-card-content">
                <div className="banner-text-group banner-text-solo">
                  <span className="banner-title">KHÁM PHÁ</span>
                  <p className="banner-desc">Vẻ đẹp Côn Đảo</p>
                </div>
                <div className="banner-arrow">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="4" y1="12" x2="20" y2="12" />
                    <polyline points="14 6 20 12 14 18" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* LAYER 3: FRAME 150 OVERLAY ("Chạm thiên nhiên Giữa lòng Côn Đảo") */}
      {/* ========================================================= */}
      <div ref={overlay3Ref} className="hero-overlay layer-nature">
        {/* Top Right: Calligraphy & Quote */}
        <div className="nature-top-right">
          <div className="nature-script-group">
            <span className="script-line">More</span>
            <span className="script-line">than a stay</span>
            <span className="script-line emphasis">A feeling</span>
          </div>
          <div className="nature-quote-card">
            <p className="nature-quote-text">
              “Những điều đẹp đẽ<br />
              luôn bắt đầu từ sự bình yên…”
            </p>
          </div>
        </div>

        {/* Far Right: Vertical Scroll Indicator */}
        <div className="nature-right-scroll">
          <div className="scroll-pill-icon">
            <div className="scroll-pill-dot" />
          </div>
          <span className="scroll-vert-text">SCROLL</span>
        </div>

        {/* Center-Left Content */}
        <div className="nature-left-content">
          <div className="nature-kicker">
            <span>Một nơi để trở về</span>
          </div>

          <h1 className="nature-title">
            <span className="title-row">Chạm thiên nhiên</span>
            <span className="title-row">Giữa lòng Côn Đảo</span>
          </h1>

          <p className="nature-desc">
            Homestay yên bình giữa thiên nhiên trong lành,<br />
            nơi những trải nghiệm chân thật và cảm xúc trọn vẹn<br />
            bắt đầu từ những điều giản dị nhất.
          </p>

          <div className="nature-btn-group">
            {/* Button 1: Booking Now */}
            <button className="btn-booking-nature">
              <span className="btn-nature-text">Đặt phòng ngay</span>
              <svg className="btn-nature-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </button>

            {/* Button 2: Explore Space */}
            <button className="btn-explore-nature">
              <span className="btn-nature-play">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
              </span>
              <span className="btn-nature-text-light">Khám phá không gian</span>
            </button>
          </div>
        </div>

        {/* Bottom Panel (Curved Glassmorphism Floating Bar) */}
        <div className="nature-bottom-panel">
          <div className="panel-features-grid">
            <div className="panel-feature-item">
              <div className="panel-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
                  <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
                </svg>
              </div>
              <div className="panel-text">
                <h5 className="panel-item-title">Thiên nhiên trong lành</h5>
                <p className="panel-item-desc">Biển xanh, núi rừng, không khí tinh khiết</p>
              </div>
            </div>

            <div className="panel-feature-item">
              <div className="panel-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
              </div>
              <div className="panel-text">
                <h5 className="panel-item-title">Không gian riêng tư</h5>
                <p className="panel-item-desc">Ấm cúng như ở nhà</p>
              </div>
            </div>

            <div className="panel-feature-item">
              <div className="panel-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                </svg>
              </div>
              <div className="panel-text">
                <h5 className="panel-item-title">Trải nghiệm địa phương</h5>
                <p className="panel-item-desc">Ẩm thực, văn hóa, con người Côn Đảo</p>
              </div>
            </div>

            <div className="panel-feature-item">
              <div className="panel-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div className="panel-text">
                <h5 className="panel-item-title">Vị trí thuận tiện</h5>
                <p className="panel-item-desc">Gần biển, dễ dàng khám phá</p>
              </div>
            </div>
          </div>

          <div className="panel-gallery-group">
            <div className="panel-thumbs">
              <div className="panel-thumb" style={{ backgroundImage: 'url(/frames/ezgif-frame-001.jpg)' }} />
              <div className="panel-thumb" style={{ backgroundImage: 'url(/frames/ezgif-frame-070.jpg)' }} />
              <div className="panel-thumb" style={{ backgroundImage: 'url(/frames/ezgif-frame-143.jpg)' }} />
            </div>
            <div className="panel-nav-arrows">
              <button className="panel-arrow-btn">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>
              <button className="panel-arrow-btn">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
