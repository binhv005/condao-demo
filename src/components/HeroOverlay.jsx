import React, { useState } from 'react';
import './HeroOverlay.css';

const ARC_DESTINATIONS = [
  {
    id: 1,
    title: 'Bãi Đầm Trầu',
    subtitle: 'Côn Đảo, Bà Rịa',
    img: '/frames/ezgif-frame-001.jpg',
  },
  {
    id: 2,
    title: 'Quầy Bar Sân Vườn',
    subtitle: 'Côn Đảo Homestay',
    img: '/2aOboQzC6iUcp0Q24CFXoM1NvAL9axH026hijUGm.jpg',
  },
  {
    id: 3,
    title: 'Côn Đảo Homestay',
    subtitle: 'Vườn nhiệt đới về đêm',
    img: '/2aOboQzC6inZlrD8BUPoX9dwRxztteSKVuTWTNmC.jpg',
  },
  {
    id: 4,
    title: 'Bãi Nhát',
    subtitle: 'Hoàng hôn tuyệt mỹ',
    img: '/frames/ezgif-frame-090.jpg',
  },
  {
    id: 5,
    title: 'Vịnh Đầm Tre',
    subtitle: 'Thiên nhiên hoang sơ',
    img: '/frames/ezgif-frame-185.jpg',
  },
];

export default function HeroOverlay({ overlay1Ref, overlay2Ref, overlay3Ref }) {
  const [activeArc, setActiveArc] = useState(2);
  return (
    <>
      {/* ========================================================= */}
      {/* LAYER 1: FRAME 1 OVERLAY (ARC WHEEL DESTINATION LAYOUT)   */}
      {/* ========================================================= */}
      <div ref={overlay1Ref} className="hero-overlay layer-initial arc-layout-layer">
        {/* Left Column: Script Title, Description & Glass Pill CTA */}
        <div className="arc-left-col">
          <h1 className="arc-hero-title">
            <span>Trải nghiệm vượt trên</span>
            <span>mọi mong đợi</span>
          </h1>

          <p className="arc-hero-desc">
            Khám phá những điểm đến độc đáo, hòa mình vào không gian an yên giữa thiên nhiên trong lành. Chậm lại, cảm nhận nhiều hơn và trọn vẹn từng khoảnh khắc tại Côn Đảo Homestay.
          </p>

          <button className="arc-glass-btn">
            <span>Khám phá điểm đến</span>
            <svg className="arc-btn-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </button>
        </div>

        {/* Right Column: Arc of Circular Destinations */}
        <div className="arc-gallery-wrapper">
          <div className="arc-nodes-list">
            {ARC_DESTINATIONS.map((item, index) => {
              const isActive = activeArc === index;
              return (
                <div
                  key={item.id}
                  className={`arc-node-row arc-node-${index} ${isActive ? 'is-active' : ''}`}
                  onClick={() => setActiveArc(index)}
                >
                  <div className="arc-text-group">
                    <span className="arc-item-title">{item.title}</span>
                    <span className="arc-item-sub">{item.subtitle}</span>
                  </div>
                  <div
                    className="arc-circle-thumb"
                    style={{ backgroundImage: `url(${item.img})` }}
                  >
                    <div className="arc-circle-ring" />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Far Right Vertical Dots */}
          <div className="arc-dots-nav">
            {ARC_DESTINATIONS.map((item, index) => (
              <button
                key={item.id}
                className={`arc-dot-pill ${activeArc === index ? 'active' : ''}`}
                onClick={() => setActiveArc(index)}
                aria-label={`Slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* LAYER 2: FRAME 90 OVERLAY (CENTERED HERO TITLE LAYOUT)    */}
      {/* ========================================================= */}
      <div ref={overlay2Ref} className="hero-overlay layer-gate layer-center-hero">
        {/* Center Main Content */}
        <div className="center-hero-content">
          <div className="center-script-kicker">
            Chào mừng đến
          </div>

          <h1 className="center-main-title">
            CÔN ĐẢO HOMESTAY
          </h1>

          <p className="center-desc">
            <span className="desc-line">Khám phá không gian nghỉ dưỡng lý tưởng,</span>{' '}
            <span className="desc-line">hòa mình vào thiên nhiên trong lành và cảm nhận trọn vẹn</span>{' '}
            <span className="desc-line">từng khoảnh khắc bình yên giữa biển trời Côn Đảo.</span>
          </p>

          <div className="center-cta-wrap">
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

        {/* Bottom Row */}
        <div className="hero-bottom-row">
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

        {/* Center-Left Main Content */}
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
            {/* Button 1: Đặt phòng ngay */}
            <button className="btn-booking-nature">
              <span className="btn-nature-text">Đặt phòng ngay</span>
              <svg className="btn-nature-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </button>

            {/* Button 2: Khám phá không gian */}
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
      </div>
    </>
  );
}
