import React from 'react';
import aboutShowcaseImg from '../assets/about_showcase.png';

const About = ({ setCurrentPage }) => {
  return (
    <section id="about" className="section-padding">
      <div className="container">
        <div className="overview-grid">
          <div className="overview-visual reveal-on-scroll reveal-left">
            <img
              className="overview-main-img"
              src={aboutShowcaseImg}
              alt="Vertical spinning and weaving manufacturing facilities at Jasmine Madurai"
            />
            <div className="overview-offset-card">
              <h4>Established 1994</h4>
              <p className="text-secondary" style={{ fontSize: '0.8rem' }}>
                Operating GOTS-certified vertical spinning and weaving factories with over 800+ expert artisans.
              </p>
            </div>
          </div>

          <div className="overview-content reveal-on-scroll reveal-right" style={{ textAlign: 'left', display: 'flex', flexDirection: 'column', justifycontent: 'center' }}>
            <span className="badge" style={{ alignSelf: 'flex-start' }}>Reliable B2B Partner</span>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 3.5vw, 2.6rem)', fontWeight: 500, color: 'var(--text-primary)', marginTop: '10px', marginBottom: '24px' }}>
              About Jasmine
            </h2>
            <p className="text-secondary" style={{ fontSize: '1.05rem', lineHeight: '1.75', marginBottom: '32px' }}>
              Jasmine Towels Pvt Ltd is a reliable name for textile exports and has built a clientele in countries like the USA besides a domestic clientele. Headquartered at Madurai, we have two state-of-the-art factories located at Madurai and Sivagangai. Starting from spinning raw cotton into yarn to making the finished products, we have the infrastructure and workforce to meet bulk / customized requirements.
            </p>

            <div>
              <button
                className="hero-company-profile-link"
                style={{ fontSize: '0.85rem', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
                onClick={() => {
                  setCurrentPage('about');
                  window.scrollTo(0, 0);
                }}
              >
                Read more
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ marginLeft: '8px', display: 'inline-block', verticalAlign: 'middle' }}>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
