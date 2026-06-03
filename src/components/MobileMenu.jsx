import React from 'react';

const MobileMenu = ({ mobileMenuOpen, currentPage, setMobileMenuOpen }) => {
  return (
    <div className={`mobile-menu ${mobileMenuOpen ? 'active' : ''}`}>
      <ul className="mobile-menu-links">
        <li>
          <a
            href="#/about"
            className={`mobile-menu-link ${currentPage === 'about' ? 'active' : ''}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            ABOUT
          </a>
        </li>
        <li>
          <a
            href="#/collections"
            className={`mobile-menu-link ${currentPage === 'collections' ? 'active' : ''}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            COLLECTIONS
          </a>
          <ul style={{ listStyle: 'none', paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '10px', marginBottom: '10px' }}>
            <li><a href="#/collections?tab=bath_blankets" onClick={() => setMobileMenuOpen(false)} style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', textDecoration: 'none', display: 'block', padding: '2px 0' }}>↳ Bath blankets</a></li>
            <li><a href="#/collections?tab=duvet_covers" onClick={() => setMobileMenuOpen(false)} style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', textDecoration: 'none', display: 'block', padding: '2px 0' }}>↳ Duvet covers</a></li>
            <li><a href="#/collections?tab=kitchen_linen" onClick={() => setMobileMenuOpen(false)} style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', textDecoration: 'none', display: 'block', padding: '2px 0' }}>↳ Kitchen linen</a></li>
            <li><a href="#/collections?tab=n_series" onClick={() => setMobileMenuOpen(false)} style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', textDecoration: 'none', display: 'block', padding: '2px 0' }}>↳ N series</a></li>
            <li><a href="#/collections?tab=p_series" onClick={() => setMobileMenuOpen(false)} style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', textDecoration: 'none', display: 'block', padding: '2px 0' }}>↳ P series</a></li>
            <li><a href="#/collections?tab=safety_wear" onClick={() => setMobileMenuOpen(false)} style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', textDecoration: 'none', display: 'block', padding: '2px 0' }}>↳ Safety wear</a></li>
            <li><a href="#/collections?tab=salon_towels" onClick={() => setMobileMenuOpen(false)} style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', textDecoration: 'none', display: 'block', padding: '2px 0' }}>↳ Salon towels</a></li>
            <li><a href="#/collections?tab=thermal" onClick={() => setMobileMenuOpen(false)} style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', textDecoration: 'none', display: 'block', padding: '2px 0' }}>↳ Thermal</a></li>
            <li><a href="#/collections?tab=towels" onClick={() => setMobileMenuOpen(false)} style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', textDecoration: 'none', display: 'block', padding: '2px 0' }}>↳ Towels</a></li>
            <li><a href="#/collections?tab=overview" onClick={() => setMobileMenuOpen(false)} style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', textDecoration: 'none', display: 'block', padding: '2px 0' }}>↳ Overview</a></li>
          </ul>
        </li>
        <li>
          <a
            href="#/facilities"
            className={`mobile-menu-link ${currentPage === 'facilities' ? 'active' : ''}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            FACILITIES
          </a>
          <ul style={{ listStyle: 'none', paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '10px', marginBottom: '10px' }}>
            <li>
              <a href="#/facilities?tab=spinning" onClick={() => setMobileMenuOpen(false)} style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', textDecoration: 'none', display: 'block', padding: '4px 0' }}>
                ↳ Spinning
              </a>
            </li>
            <li>
              <a href="#/facilities?tab=weaving" onClick={() => setMobileMenuOpen(false)} style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', textDecoration: 'none', display: 'block', padding: '4px 0' }}>
                ↳ Weaving
              </a>
            </li>
            <li>
              <a href="#/facilities?tab=wet_processing" onClick={() => setMobileMenuOpen(false)} style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', textDecoration: 'none', display: 'block', padding: '4px 0' }}>
                ↳ Wet processing
              </a>
            </li>
            <li>
              <a href="#/facilities?tab=manufacturing" onClick={() => setMobileMenuOpen(false)} style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', textDecoration: 'none', display: 'block', padding: '4px 0' }}>
                ↳ Manufacturing
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a
            href="#/quality"
            className={`mobile-menu-link ${currentPage === 'quality' ? 'active' : ''}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            QUALITY
          </a>
        </li>
        <li>
          <a
            href="#/contact"
            className={`mobile-menu-link ${currentPage === 'contact' ? 'active' : ''}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            CONTACT
          </a>
        </li>
      </ul>
      <div className="mobile-menu-footer">
        <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
          © {new Date().getFullYear()} Jasmine Towels Pvt. Ltd.
        </p>
      </div>
    </div>
  );
};

export default MobileMenu;
