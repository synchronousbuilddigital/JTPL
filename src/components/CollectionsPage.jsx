import React from 'react';
import { COLLECTIONS_DATA } from '../constants/data';

const CollectionsPage = ({
  activeSuiteIndex,
  setActiveSuiteIndex,
  handlePrevSuite,
  handleNextSuite,
  getCoverflowStyle,
  setCurrentPage
}) => {
  return (
    <section className="collections-page-wrapper">
      <div className="container" style={{ position: 'relative' }}>
        {/* Breadcrumb Path */}
        <div style={{ marginBottom: '24px', fontFamily: 'monospace', fontSize: '0.85rem', letterSpacing: '0.1em', textAlign: 'left' }}>
          <span style={{ color: 'var(--text-muted)', cursor: 'pointer' }} onClick={() => { setCurrentPage('home'); window.scrollTo(0, 0); }}>/</span>
          <span style={{ color: 'var(--accent)', marginLeft: '6px' }}>collections</span>
        </div>
        <div className="text-center" style={{ marginBottom: '32px' }}>
          <span className="badge" style={{ color: 'var(--accent)', letterSpacing: '0.22em', textTransform: 'uppercase', fontSize: '0.75rem', fontWeight: 700 }}>
            Product Range Room
          </span>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.3rem, 4.5vw, 3.6rem)', color: '#FAF8F5', marginTop: '8px' }}>
            Our collections
          </h2>
          <p className="text-secondary" style={{ fontSize: '1.1rem', maxWidth: '600px', margin: '12px auto 0', lineHeight: '1.6' }}>
            Browse our range of GOTS-certified combed cotton towels, premium bedroom sheetings, lint-free kitchen textiles, and industrial wear.
          </p>
        </div>

        {/* 3D Coverflow Carousel Container */}
        <div className="coverflow-container" style={{ margin: '60px 0' }}>
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

        {/* Back to Home CTA */}
        <div style={{ textAlign: 'center', marginTop: '64px', borderTop: '1px solid var(--border-color)', paddingTop: '48px', marginBottom: '32px' }}>
          <button 
            className="hero-company-profile-link" 
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
            onClick={() => {
              setCurrentPage('home');
              window.scrollTo(0, 0);
            }}
          >
            &larr; Return to Home Portal
          </button>
        </div>
      </div>
    </section>
  );
};

export default CollectionsPage;
