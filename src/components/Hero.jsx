import React, { useEffect, useState } from 'react';
import { HERO_TABS } from '../constants/data';
import weavingLoomsImg from '../assets/weaving_looms.png';
import kitchenLinenImg from '../assets/kitchen_linen.png';

const TypingTitle = ({ text }) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    setDisplayedText('');
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayedText(text.substring(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 35);

    return () => clearInterval(interval);
  }, [text]);

  const words = displayedText.split(' ');
  return (
    <>
      {words.map((word, i, arr) => {
        if (i === arr.length - 1) {
          return <span key={i}>{word}</span>;
        }
        return word + ' ';
      })}
      <span className="hero-typing-cursor">|</span>
    </>
  );
};

const Hero = ({ heroTab, setHeroTab, setCurrentPage }) => {
  useEffect(() => {
    const timer = setInterval(() => {
      setHeroTab((prev) => (prev + 1) % HERO_TABS.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [heroTab, setHeroTab]);
  return (
    <section id="home" className="hero-unique-section">
      <div className="ambient-radar-glow-1"></div>
      <div className="ambient-radar-glow-2"></div>

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <div className="hero-unique-grid">

          {/* LEFT COLUMN: Interactive tab content */}
          <div className="hero-unique-content reveal-on-scroll reveal-left">
            {/* Step Switcher Tabs */}
            <div className="hero-tab-bar">
              {HERO_TABS.map((tab, idx) => (
                <button
                  key={idx}
                  className={`hero-tab-btn ${heroTab === idx ? 'active' : ''}`}
                  onClick={() => setHeroTab(idx)}
                  aria-label={`Select ${tab.label}`}
                >
                  <span className="tab-num">0{idx + 1}</span>
                  <span className="tab-label">{tab.label}</span>
                </button>
              ))}
            </div>

            {/* Text Content */}
            <div className="hero-dynamic-text-panel" key={heroTab}>
              <span className="hero-dynamic-tag">{HERO_TABS[heroTab].tag}</span>
              <h1 className="hero-unique-title">
                <TypingTitle text={HERO_TABS[heroTab].title} />
              </h1>

              {/* Mobile-Only Showcase (Positioned between typing title and content description) */}
              <div className="hero-mobile-only-showcase">
                <div className="kinetic-showcase-wrapper" style={{ margin: '0 auto' }}>
                  <div className="kinetic-capsule main-frame">
                    <img
                      className="kinetic-img"
                      src={HERO_TABS[heroTab].image}
                      alt={HERO_TABS[heroTab].label}
                      key={heroTab}
                    />
                    <div className="capsule-frame-label">{HERO_TABS[heroTab].badgeText}</div>
                  </div>
                  <div className="kinetic-capsule offset-frame-back">
                    <img
                      className="kinetic-img"
                      src={weavingLoomsImg}
                      alt="Integrated weaving loom line operations"
                    />
                  </div>
                  <div className="kinetic-capsule spotlight-frame">
                    <img
                      className="kinetic-img"
                      src={kitchenLinenImg}
                      alt="Macro stitching details"
                    />
                  </div>
                </div>
              </div>

              <p className="hero-unique-desc">
                {HERO_TABS[heroTab].desc}
              </p>
            </div>

            {/* Buttons */}
            <div className="hero-btn-group">
              <a href="#suites" className="hero-pill-btn-gold">
                Explore Collections
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ marginLeft: '10px' }}>
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </a>
            </div>

            {/* ISO Badges with hover micro-tooltips */}
            <div className="hero-cert-bar">
              <div className="cert-badge-pill">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                <span>ISO 9001:2015</span>
                <div className="cert-tooltip">Quality Management Systems</div>
              </div>
              <div className="cert-badge-pill">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 2 2 4a7 7 0 0 1-10 14z" />
                </svg>
                <span>ISO 14001:2015</span>
                <div className="cert-tooltip">Environmental Management Standards</div>
              </div>
              <div className="cert-badge-pill">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                <span>ISO 45001:2018</span>
                <div className="cert-tooltip">Occupational Health & Safety Guarded</div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Asymmetric Multi-Layered Kinetic Showcase */}
          <div className="hero-interactive-showcase-side reveal-on-scroll reveal-right delay-200">
            <div className="kinetic-showcase-wrapper">
              {/* Main Focal Frame */}
              <div className="kinetic-capsule main-frame">
                <img
                  className="kinetic-img"
                  src={HERO_TABS[heroTab].image}
                  alt={HERO_TABS[heroTab].label}
                  key={heroTab}
                />
                <div className="capsule-frame-label">{HERO_TABS[heroTab].badgeText}</div>
              </div>

              {/* Secondary Background Layer - Loom Frame */}
              <div className="kinetic-capsule offset-frame-back">
                <img
                  className="kinetic-img"
                  src={weavingLoomsImg}
                  alt="Integrated weaving loom line operations"
                />
              </div>

              {/* Tertiary Spotlight Layer - Macro Stitch Detail */}
              <div className="kinetic-capsule spotlight-frame">
                <img
                  className="kinetic-img"
                  src={kitchenLinenImg}
                  alt="Macro stitching details"
                />
              </div>


            </div>
          </div>

        </div>

        {/* Bottom Trust strip */}
        <div className="hero-bottom-trust-strip reveal-on-scroll reveal-up delay-400">
          <div className="trust-strip-item">
            <div className="stat-num">35K+</div>
            <div className="stat-desc">
              <h6>Rieter Spindles</h6>
              <p>Madurai facility spinning line</p>
            </div>
          </div>
          <div className="trust-strip-item">
            <div className="stat-num">120+</div>
            <div className="stat-desc">
              <h6>Toyota Airlooms</h6>
              <p>High-insertion weft density</p>
            </div>
          </div>
          <div className="trust-strip-item">
            <div className="stat-num">98%</div>
            <div className="stat-desc">
              <h6>ZLD Recycled</h6>
              <p>Strict water stewardship</p>
            </div>
          </div>
          <div className="trust-strip-item">
            <div className="stat-num">100%</div>
            <div className="stat-desc">
              <h6>GOTS Sourced</h6>
              <p>Organic cotton certification</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
