import React from 'react';
import aboutTowelStack from '../assets/about_towel_stack.png';
import aboutWeavingDetail from '../assets/about_weaving_detail.png';

const AboutPage = ({ setCurrentPage }) => {
  return (
    <section className="about-page-wrapper">
      <div className="container">
        {/* Breadcrumb Path */}
        <div style={{ marginBottom: '24px', fontFamily: 'monospace', fontSize: '0.85rem', letterSpacing: '0.1em', textAlign: 'left' }}>
          <span style={{ color: 'var(--text-muted)', cursor: 'pointer' }} onClick={() => { setCurrentPage('home'); window.scrollTo(0, 0); }}>/</span>
          <span style={{ color: 'var(--accent)', marginLeft: '6px' }}>about</span>
        </div>

        {/* Section 1: Hero Header Row */}
        <div className="about-page-hero-grid">
          <div>
            <span className="badge" style={{ color: 'var(--accent)', letterSpacing: '0.25em', textTransform: 'uppercase', fontSize: '0.75rem', fontWeight: 700 }}>
              Corporate Heritage & Philosophy
            </span>
            <h1 style={{ marginTop: '12px', fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.3rem, 4.5vw, 3.6rem)', color: '#FAF8F5', lineHeight: '1.15' }}>
              About JTPL
            </h1>
            <p className="text-secondary" style={{ fontSize: '1.1rem', lineHeight: '1.75', marginTop: '20px', maxWidth: '640px' }}>
              Established in 1994 at Madurai, Tamil Nadu, Jasmine Towels Private Limited has built an elite reputation as a premier vertical manufacturer and worldwide exporter of organic cotton Terry Towels, bedroom textiles, and customized institutional fabrics.
            </p>
            <p className="text-secondary" style={{ fontSize: '0.95rem', lineHeight: '1.7', marginTop: '16px', maxWidth: '640px', color: 'var(--text-muted)' }}>
              From spinning high-grade raw cotton into premium yarn to weaving detailed dobby and jacquard designs, we control the entire lifecycle to guarantee compliance with universal standards for clients in the US, Europe, and India.
            </p>
          </div>
          <div className="about-hero-image-frame">
            <img src={aboutTowelStack} alt="Luxury organic folded cotton towels stack" />
            <div className="about-hero-image-overlay"></div>
          </div>
        </div>

        {/* Section 2: Heritage Timeline & Process Showcase */}
        <div className="about-heritage-row" style={{ marginTop: '80px' }}>
          <div className="about-side-image-pane">
            <img src={aboutWeavingDetail} alt="Automated weaving loom operations detail" />
          </div>
          <div className="about-heritage-content">
            <span className="badge" style={{ marginBottom: '12px' }}>Established Lineage</span>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', color: '#FAF8F5', marginBottom: '24px' }}>
              Our Journey Timeline
            </h2>
            <div className="about-history-timeline">
              <div className="history-timeline-item" style={{ display: 'flex', gap: '16px', marginBottom: '24px' }}>
                <span className="history-timeline-year" style={{ fontFamily: 'var(--font-serif)', color: 'var(--accent)', fontWeight: 600, fontSize: '1.2rem', minWidth: '60px' }}>1979</span>
                <div>
                  <h4 style={{ color: '#FAF8F5', fontSize: '1rem', margin: '0 0 4px 0' }}>Parent Company Foundation</h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: '1.5', margin: 0 }}>
                    Our parent company Enkay Enterprises was founded, building a highly respected trading legacy and foundation in premium cotton textiles.
                  </p>
                </div>
              </div>
              <div className="history-timeline-item" style={{ display: 'flex', gap: '16px', marginBottom: '24px' }}>
                <span className="history-timeline-year" style={{ fontFamily: 'var(--font-serif)', color: 'var(--accent)', fontWeight: 600, fontSize: '1.2rem', minWidth: '60px' }}>1994</span>
                <div>
                  <h4 style={{ color: '#FAF8F5', fontSize: '1rem', margin: '0 0 4px 0' }}>Establishment of Jasmine Towels</h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: '1.5', margin: 0 }}>
                    The company launched operations at Madurai to spin and weave customized luxury fabrics, targeting international export quality.
                  </p>
                </div>
              </div>
              <div className="history-timeline-item" style={{ display: 'flex', gap: '16px' }}>
                <span className="history-timeline-year" style={{ fontFamily: 'var(--font-serif)', color: 'var(--accent)', fontWeight: 600, fontSize: '1.2rem', minWidth: '60px' }}>1998</span>
                <div>
                  <h4 style={{ color: '#FAF8F5', fontSize: '1rem', margin: '0 0 4px 0' }}>Legacy Vision Expansion</h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: '1.5', margin: 0 }}>
                    Expanded by Mr. Nayan Mulji Thakker to invest in high-capacity vertical air-jet loom factories and direct B2B buyer custom programs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 3: Core Mandates & Values */}
        <div style={{ marginTop: '80px' }}>
          <div className="text-center" style={{ marginBottom: '40px' }}>
            <span className="badge">Corporate Philosophy</span>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', color: '#FAF8F5', marginTop: '8px' }}>
              Mission & Vision
            </h2>
          </div>
          <div className="about-values-grid">
            {/* Mission */}
            <div className="about-val-box">
              <h3 style={{ fontFamily: 'var(--font-serif)', color: 'var(--accent)', fontSize: '1.3rem', margin: '0 0 20px' }}>
                Our Mission
              </h3>
              <ul className="about-values-list" style={{ listStyle: 'none', paddingLeft: 0, color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.7' }}>
                <li style={{ marginBottom: '12px', display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="3" style={{ marginTop: '4px', flexShrink: 0 }}>
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Serve as the seamless bridge between client requirements, expert craftsmanship, and modern production.</span>
                </li>
                <li style={{ marginBottom: '12px', display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="3" style={{ marginTop: '4px', flexShrink: 0 }}>
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Deliver highly consistent B2B textile products at optimal pricing matrices.</span>
                </li>
                <li style={{ marginBottom: '12px', display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="3" style={{ marginTop: '4px', flexShrink: 0 }}>
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Transition our operations to draw at least 75% of energy requirements from clean solar power plants.</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="3" style={{ marginTop: '4px', flexShrink: 0 }}>
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Pioneer low-water organic processes using zero-liquid-discharge (ZLD) treatment.</span>
                </li>
              </ul>
            </div>

            {/* Vision */}
            <div className="about-val-box">
              <h3 style={{ fontFamily: 'var(--font-serif)', color: 'var(--accent)', fontSize: '1.3rem', margin: '0 0 20px' }}>
                Our Vision
              </h3>
              <ul className="about-values-list" style={{ listStyle: 'none', paddingLeft: 0, color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.7' }}>
                <li style={{ marginBottom: '12px', display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="3" style={{ marginTop: '4px', flexShrink: 0 }}>
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Expand our international presence, supporting hospitality, healthcare, and retail programs globally.</span>
                </li>
                <li style={{ marginBottom: '12px', display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="3" style={{ marginTop: '4px', flexShrink: 0 }}>
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Reduce ecological footprints across all sectors of raw spinning, dyeing, and shipping.</span>
                </li>
                <li style={{ marginBottom: '12px', display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="3" style={{ marginTop: '4px', flexShrink: 0 }}>
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Continuously implement precision sensor telemetry to audit weft inserting and yarn counts.</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="3" style={{ marginTop: '4px', flexShrink: 0 }}>
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Empower our 800+ expert operators through safety, structural upskilling, and teamwork.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Return Button */}
        <div style={{ textAlign: 'center', marginTop: '64px', borderTop: '1px solid var(--border-color)', paddingTop: '40px' }}>
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

export default AboutPage;
