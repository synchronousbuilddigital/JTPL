import React from 'react';
import { COLLECTIONS_DATA } from '../constants/data';

const Collections = ({ 
  activeSuiteIndex, 
  setActiveSuiteIndex, 
  handlePrevSuite, 
  handleNextSuite, 
  getCoverflowStyle,
  setCurrentPage
}) => {
  return (
    <section id="suites" className="section-padding bg-secondary" style={{ borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)', overflow: 'hidden' }}>
      <div className="container" style={{ position: 'relative' }}>
        <div className="text-center" style={{ marginBottom: '32px' }}>
          <span className="badge" style={{ color: 'var(--accent)', letterSpacing: '0.22em', textTransform: 'uppercase', fontSize: '0.75rem', fontWeight: 700 }}>
            Product Range
          </span>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 3.5vw, 2.6rem)', fontWeight: 500, color: '#FAF8F5', marginTop: '8px' }}>
            Our collections
          </h2>
        </div>

        {/* 3D Coverflow Container */}
        <div className="coverflow-container">
          {/* Nav Arrows */}
          <button className="coverflow-nav-btn prev" onClick={handlePrevSuite} aria-label="Previous Slide">
            &larr;
          </button>
          <button className="coverflow-nav-btn next" onClick={handleNextSuite} aria-label="Next Slide">
            &rarr;
          </button>

          <div className="coverflow-wrapper">
            {COLLECTIONS_DATA.map((item, index) => {
              const isActive = index === activeSuiteIndex;
              return (
                <div
                  key={index}
                  className={`coverflow-card ${isActive ? 'active' : ''}`}
                  style={getCoverflowStyle(index)}
                  onClick={() => {
                    if (!isActive) {
                      setActiveSuiteIndex(index);
                    } else {
                      // Click active card to trigger navigation to contact
                      setCurrentPage('contact');
                      window.scrollTo(0, 0);
                    }
                  }}
                >
                  <div className="coverflow-card-bg" style={{ backgroundImage: `url(${item.image})` }}></div>
                  <div className="coverflow-card-overlay"></div>
                  <div className="coverflow-info">
                    <h3>{item.title}</h3>
                    <p>{item.subtitle}</p>
                    {isActive && (
                      <p style={{ textTransform: 'none', color: 'var(--text-muted)', fontSize: '0.78rem', marginTop: '8px', lineHeight: '1.4', letterSpacing: 'normal' }}>
                        {item.desc}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Pagination dots */}
        <div className="coverflow-dots">
          {COLLECTIONS_DATA.map((_, index) => (
            <button
              key={index}
              className={`coverflow-dot ${index === activeSuiteIndex ? 'active' : ''}`}
              onClick={() => setActiveSuiteIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
            ></button>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Collections;
