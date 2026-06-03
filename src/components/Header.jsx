import React from 'react';

const Header = ({ scrolled, currentPage, mobileMenuOpen, setMobileMenuOpen }) => {
  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <a
          href="#/home"
          className={`logo-wrapper ${currentPage === 'home' ? 'active' : ''}`}
          style={{ flexDirection: 'column', alignItems: 'flex-start', gap: '2px' }}
        >
          <span className="logo-text">Jasmine Towels</span>
          <span className="logo-accent">PVT. LTD. • EST. MADURAI</span>
        </a>

        <nav>
          <ul className="nav-menu">
            <li><a href="#/about" className={`nav-link ${currentPage === 'about' ? 'active' : ''}`}>ABOUT</a></li>
            <li className="nav-dropdown-wrapper">
              <a href="#/collections" className={`nav-link ${currentPage === 'collections' ? 'active' : ''}`} style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                COLLECTIONS
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" style={{ transition: 'transform 0.3s ease' }}>
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </a>
              <ul className="nav-dropdown-menu">
                <li><a href="#/collections?tab=bath_blankets">Bath blankets</a></li>
                <li><a href="#/collections?tab=duvet_covers">Duvet covers</a></li>
                <li><a href="#/collections?tab=kitchen_linen">Kitchen linen</a></li>
                <li><a href="#/collections?tab=n_series">N series</a></li>
                <li><a href="#/collections?tab=p_series">P series</a></li>
                <li><a href="#/collections?tab=safety_wear">Safety wear</a></li>
                <li><a href="#/collections?tab=salon_towels">Salon towels</a></li>
                <li><a href="#/collections?tab=thermal">Thermal</a></li>
                <li><a href="#/collections?tab=towels">Towels</a></li>
                <li><a href="#/collections?tab=overview">Overview</a></li>
              </ul>
            </li>
            <li className="nav-dropdown-wrapper">
              <a href="#/facilities" className={`nav-link ${currentPage === 'facilities' ? 'active' : ''}`} style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                FACILITIES
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" style={{ transition: 'transform 0.3s ease' }}>
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </a>
              <ul className="nav-dropdown-menu">
                <li><a href="#/facilities?tab=spinning">Spinning</a></li>
                <li><a href="#/facilities?tab=weaving">Weaving</a></li>
                <li><a href="#/facilities?tab=wet_processing">Wet processing</a></li>
                <li><a href="#/facilities?tab=manufacturing">Manufacturing</a></li>
              </ul>
            </li>
            <li><a href="#/quality" className={`nav-link ${currentPage === 'quality' ? 'active' : ''}`}>QUALITY</a></li>
            <li><a href="#/contact" className={`nav-link ${currentPage === 'contact' ? 'active' : ''}`}>CONTACT</a></li>
          </ul>
        </nav>

        <div className="nav-actions">
          {/* Mobile Menu Toggle Button */}
          <div
            className={`nav-hamburger ${mobileMenuOpen ? 'active' : ''}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
