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
    <section id="suites" className="section-padding" style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)', overflow: 'hidden' }}>
      <div className="container" style={{ position: 'relative' }}>
        <div className="text-center reveal-on-scroll reveal-up" style={{ marginBottom: '32px' }}>
          <span className="badge" style={{ color: 'var(--accent)', letterSpacing: '0.22em', textTransform: 'uppercase', fontSize: '0.75rem', fontWeight: 700 }}>
            Product Range
          </span>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 3.5vw, 2.6rem)', fontWeight: 500, color: 'var(--text-primary)', marginTop: '8px' }}>
            Our collections
          </h2>
        </div>

        {/* 3D Coverflow Container */}
        <div className="coverflow-container reveal-on-scroll reveal-scale delay-200">
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
                  <div
                    className="coverflow-card-bg"
                    style={{
                      backgroundImage: `url(${item.image})`,
                      backgroundSize: item.title === 'Safety Wear' ? 'contain' : 'cover',
                      backgroundColor: item.title === 'Safety Wear' ? '#808080' : 'transparent',
                      backgroundRepeat: 'no-repeat'
                    }}
                  ></div>
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

        {/* Controls Bar with Navigation and Pagination */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '24px', marginTop: '40px' }} className="coverflow-controls-bar">
          <button
            onClick={handlePrevSuite}
            aria-label="Previous Slide"
            style={{
              background: 'rgba(26, 25, 23, 0.45)',
              border: '1px solid rgba(250, 248, 245, 0.08)',
              color: '#FAF8F5',
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              backdropFilter: 'blur(8px)',
              padding: 0
            }}
            className="coverflow-bottom-nav-btn"
          >
            <span style={{ fontSize: '1.2rem', display: 'block', transform: 'translateY(-1px)' }}>&larr;</span>
          </button>

          {/* Pagination dots */}
          <div className="coverflow-dots" style={{ margin: 0 }}>
            {COLLECTIONS_DATA.map((_, index) => (
              <button
                key={index}
                className={`coverflow-dot ${index === activeSuiteIndex ? 'active' : ''}`}
                onClick={() => setActiveSuiteIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
              ></button>
            ))}
          </div>

          <button
            onClick={handleNextSuite}
            aria-label="Next Slide"
            style={{
              background: 'rgba(26, 25, 23, 0.45)',
              border: '1px solid rgba(250, 248, 245, 0.08)',
              color: '#FAF8F5',
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              backdropFilter: 'blur(8px)',
              padding: 0
            }}
            className="coverflow-bottom-nav-btn"
          >
            <span style={{ fontSize: '1.2rem', display: 'block', transform: 'translateY(-1px)' }}>&rarr;</span>
          </button>
        </div>

        {/* Explore More Button */}
        <div style={{ textAlign: 'center', marginTop: '40px' }} className="reveal-on-scroll reveal-up delay-300">
          <button
            onClick={() => {
              setCurrentPage('collections');
              window.location.hash = '#/collections';
            }}
            className="btn btn-secondary"
            style={{ 
              padding: '14px 32px', 
              fontSize: '0.8rem', 
              letterSpacing: '0.15em',
              fontWeight: 600,
              textTransform: 'uppercase',
              border: '1px solid var(--accent)',
              cursor: 'pointer'
            }}
          >
            Explore Full Collection
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ marginLeft: '8px', verticalAlign: 'middle', transform: 'translateY(-1px)' }}>
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
};

export default Collections;
