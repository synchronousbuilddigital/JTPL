import React from 'react';

const Footer = ({ setCurrentPage }) => {
  return (
    <footer id="footer" className="footer">
      <div className="container">
        <div className="footer-grid">
          
          {/* Brand & Address Column */}
          <div className="footer-brand">
            <span className="logo-text" style={{ fontSize: '1.4rem', fontFamily: 'var(--font-serif)', color: 'var(--text-primary)', fontWeight: 500, letterSpacing: '0.02em' }}>
              Jasmine Towels
            </span>
            <span className="logo-accent" style={{ display: 'block', marginTop: '4px', fontSize: '0.7rem', color: 'var(--accent)', fontWeight: 700, letterSpacing: '0.12em' }}>
              PVT. LTD. • EST. MADURAI
            </span>
            <p className="text-secondary" style={{ fontSize: '0.85rem', lineHeight: '1.6', margin: '16px 0 20px', maxWidth: '320px' }}>
              Leading manufacturer and global exporter of GOTS-certified organic terry towels, home furnishings, and specialized B2B textiles.
            </p>

            {/* Contacts Info with SVG Icons */}
            <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', display: 'flex', flexDirection: 'column', gap: '12px' }} className="footer-contact-details">
              <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span>Perungudi, Madurai, Tamil Nadu, India - 625022</span>
              </div>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <span>+91 452 2690321 / export@jasminetowels.com</span>
              </div>
            </div>

            {/* Social Glass Badges */}
            <div className="footer-socials" style={{ marginTop: '24px' }}>
              <a href="#footer" className="social-glass-badge" aria-label="LinkedIn Profile">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a href="#footer" className="social-glass-badge" aria-label="Twitter Profile">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </a>
              <a href="#footer" className="social-glass-badge" aria-label="Global Export Hub">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="2" y1="12" x2="22" y2="12"></line>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation Links Column */}
          <div className="footer-column">
            <h4>Direct Navigation</h4>
            <ul className="footer-links">
              <li>
                <button
                  className="footer-nav-btn"
                  onClick={() => { setCurrentPage('home'); window.scrollTo(0, 0); }}
                >
                  Home Portal
                </button>
              </li>
              <li>
                <button
                  className="footer-nav-btn"
                  onClick={() => { setCurrentPage('about'); window.scrollTo(0, 0); }}
                >
                  Company Profile
                </button>
              </li>
              <li>
                <button
                  className="footer-nav-btn"
                  onClick={() => { setCurrentPage('collections'); window.scrollTo(0, 0); }}
                >
                  Our Collections
                </button>
              </li>
              <li>
                <button
                  className="footer-nav-btn"
                  onClick={() => { setCurrentPage('facilities'); window.scrollTo(0, 0); }}
                >
                  Operational Mills
                </button>
              </li>
              <li>
                <button
                  className="footer-nav-btn"
                  onClick={() => { setCurrentPage('careers'); window.scrollTo(0, 0); }}
                >
                  Careers
                </button>
              </li>
            </ul>
          </div>

          {/* Operations Floor Links Column */}
          <div className="footer-column">
            <h4>Operations Floor</h4>
            <ul className="footer-links">
              <li><a href="#/facilities?tab=spinning">Spinning Yarns</a></li>
              <li><a href="#/facilities?tab=weaving">Weaving Looms</a></li>
              <li><a href="#/facilities?tab=wet_processing">Wet Processing</a></li>
              <li><a href="#/facilities?tab=manufacturing">Manufacturing</a></li>
            </ul>
          </div>

          {/* Eco Commitment Column */}
          <div className="footer-column">
            <h4>Eco Commitment</h4>
            <ul className="footer-links">
              <li><a href="#responsibility">Zero Liquid Discharge</a></li>
              <li><a href="#responsibility">GOTS Organic Certified</a></li>
              <li><a href="#responsibility">Oeko-Tex Standard 100</a></li>
              <li><a href="#responsibility">Madurai Weavers Aid</a></li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom segment */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            © {new Date().getFullYear()} Jasmine Towels Pvt. Ltd. All rights reserved.
          </p>
          <ul className="footer-bottom-links">
            <li>
              <button
                className="footer-bottom-link-btn"
                onClick={() => { setCurrentPage('about'); window.scrollTo(0, 0); }}
              >
                Privacy Policy
              </button>
            </li>
            <li>
              <button
                className="footer-bottom-link-btn"
                onClick={() => { setCurrentPage('about'); window.scrollTo(0, 0); }}
              >
                Terms of Service
              </button>
            </li>
            <li>
              <button
                className="footer-bottom-link-btn"
                onClick={() => { setCurrentPage('home'); window.scrollTo(0, 0); }}
              >
                Export Guidelines
              </button>
            </li>
            <li>
              <button
                className="footer-bottom-link-btn"
                onClick={() => { setCurrentPage('careers'); window.scrollTo(0, 0); }}
              >
                Careers
              </button>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
