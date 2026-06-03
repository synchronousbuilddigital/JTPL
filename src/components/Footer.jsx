import React from 'react';

const Footer = ({ setCurrentPage }) => {
  return (
    <footer id="footer" className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <span className="logo-text" style={{ fontSize: '1.25rem', fontFamily: 'var(--font-serif)', color: '#FAF8F5', fontWeight: 500 }}>Jasmine Towels</span>
            <span className="logo-accent" style={{ display: 'block', marginTop: '4px' }}>PVT. LTD. • EST. MADURAI</span>
            <p className="text-secondary" style={{ fontSize: '0.88rem', lineHeight: '1.6', margin: '16px 0 24px', maxWidth: '300px' }}>
              Leading manufacturer and global exporter of GOTS-certified organic terry towels, home furnishings, and specialized B2B textiles.
            </p>

            {/* Address / Contacts */}
            <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span>Perungudi, Madurai, Tamil Nadu, India - 625022</span>
              </div>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <span>+91 452 2690321 / export@jasminetowels.com</span>
              </div>
            </div>
            <div className="footer-socials">
              <a href="#footer" aria-label="LinkedIn Profile">LN</a>
              <a href="#footer" aria-label="Twitter Feed">TW</a>
              <a href="#footer" aria-label="Export India Hub">IN</a>
            </div>
          </div>

          <div className="footer-column">
            <h4>Direct Navigation</h4>
            <ul className="footer-links">
              <li>
                <button
                  style={{ background: 'none', border: 'none', color: 'inherit', font: 'inherit', cursor: 'pointer', padding: 0 }}
                  onClick={() => { setCurrentPage('home'); window.scrollTo(0, 0); }}
                >
                  Home Portal
                </button>
              </li>
              <li>
                <button
                  style={{ background: 'none', border: 'none', color: 'inherit', font: 'inherit', cursor: 'pointer', padding: 0 }}
                  onClick={() => { setCurrentPage('about'); window.scrollTo(0, 0); }}
                >
                  Company Profile
                </button>
              </li>
              <li>
                <button
                  style={{ background: 'none', border: 'none', color: 'inherit', font: 'inherit', cursor: 'pointer', padding: 0 }}
                  onClick={() => { setCurrentPage('collections'); window.scrollTo(0, 0); }}
                >
                  Our Collections
                </button>
              </li>
              <li>
                <button
                  style={{ background: 'none', border: 'none', color: 'inherit', font: 'inherit', cursor: 'pointer', padding: 0 }}
                  onClick={() => { setCurrentPage('facilities'); window.scrollTo(0, 0); }}
                >
                  Operational Mills
                </button>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Operations Floor</h4>
            <ul className="footer-links">
              <li><a href="#/facilities?tab=spinning">Spinning Yarns</a></li>
              <li><a href="#/facilities?tab=weaving">Weaving Looms</a></li>
              <li><a href="#/facilities?tab=wet_processing">Wet Processing</a></li>
              <li><a href="#/facilities?tab=manufacturing">Manufacturing</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Eco Commitment</h4>
            <ul className="footer-links">
              <li><a href="#quality">Zero Liquid Discharge (ZLD)</a></li>
              <li><a href="#quality">GOTS Organic Certified</a></li>
              <li><a href="#quality">Oeko-Tex Standard 100</a></li>
              <li><a href="#quality">Madurai Weavers Aid</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} Jasmine Towels Pvt. Ltd. All rights reserved.
          </p>
          <ul className="footer-bottom-links">
            <li>
              <button
                style={{ background: 'none', border: 'none', color: 'inherit', font: 'inherit', cursor: 'pointer', padding: 0 }}
                onClick={() => { setCurrentPage('about'); window.scrollTo(0, 0); }}
              >
                Privacy Policy
              </button>
            </li>
            <li>
              <button
                style={{ background: 'none', border: 'none', color: 'inherit', font: 'inherit', cursor: 'pointer', padding: 0 }}
                onClick={() => { setCurrentPage('about'); window.scrollTo(0, 0); }}
              >
                Terms of Service
              </button>
            </li>
            <li>
              <button
                style={{ background: 'none', border: 'none', color: 'inherit', font: 'inherit', cursor: 'pointer', padding: 0 }}
                onClick={() => { setCurrentPage('home'); window.scrollTo(0, 0); }}
              >
                Export Guidelines
              </button>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
