import React, { useState, useEffect } from 'react';
import './App.css';

// Import constants
import { COLLECTIONS_DATA } from './constants/data';

// Import modular components
import Header from './components/Header';
import MobileMenu from './components/MobileMenu';
import Hero from './components/Hero';
import Collections from './components/Collections';
import About from './components/About';
import Facilities from './components/Facilities';
import Quality from './components/Quality';
import ESG from './components/ESG';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Import full pages
import AboutPage from './components/AboutPage';
import FacilitiesPage from './components/FacilitiesPage';
import CollectionsPage from './components/CollectionsPage';
import QualityPage from './components/QualityPage';

function App() {
  // Theme state
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark'; // Defaulting to dark theme
  });

  // UI state
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeEsgIndex, setActiveEsgIndex] = useState(0);
  const [activeFacilityIndex, setActiveFacilityIndex] = useState(0);
  const [currentPage, setCurrentPage] = useState('home');
  const [heroTab, setHeroTab] = useState(0);
  const [hoveredHotspot, setHoveredHotspot] = useState(null);
  const [activeQualityPillar, setActiveQualityPillar] = useState(0);

  // Coverflow Carousel State
  const [activeSuiteIndex, setActiveSuiteIndex] = useState(3);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handlePrevSuite = () => {
    setActiveSuiteIndex((prev) => (prev === 0 ? COLLECTIONS_DATA.length - 1 : prev - 1));
  };

  const handleNextSuite = () => {
    setActiveSuiteIndex((prev) => (prev === COLLECTIONS_DATA.length - 1 ? 0 : prev + 1));
  };

  const getCoverflowStyle = (index) => {
    let diff = index - activeSuiteIndex;
    const count = COLLECTIONS_DATA.length;
    const half = Math.floor(count / 2);

    // Shortest path circular offset mapping to ensure infinite symmetry on both sides
    diff = ((diff + half) % count + count) % count - half;
    const absDiff = Math.abs(diff);

    const isMobile = windowWidth < 768;
    const isTablet = windowWidth >= 768 && windowWidth < 1024;

    // Scale down translation for smaller screens
    const baseTranslate = isMobile ? 70 : (isTablet ? 120 : 180);

    let rotateY = 0;
    let translateX = 0;
    let translateZ = 0;
    let scale = 1;
    let zIndex = 10 - absDiff;
    let opacity = 1;

    if (diff < 0) {
      rotateY = isMobile ? 12 : 25;
      translateX = -baseTranslate * absDiff;
      translateZ = -120 * absDiff;
      scale = isMobile ? 0.8 : 0.85;
      opacity = absDiff === 3 ? 0 : (isMobile ? (absDiff === 1 ? 0.45 : 0) : (absDiff === 1 ? 0.75 : 0.35));
    } else if (diff > 0) {
      rotateY = isMobile ? -12 : -25;
      translateX = baseTranslate * absDiff;
      translateZ = -120 * absDiff;
      scale = isMobile ? 0.8 : 0.85;
      opacity = absDiff === 3 ? 0 : (isMobile ? (absDiff === 1 ? 0.45 : 0) : (absDiff === 1 ? 0.75 : 0.35));
    } else {
      rotateY = 0;
      translateX = 0;
      translateZ = 50;
      scale = isMobile ? 1.05 : 1.12;
      zIndex = 20;
      opacity = 1;
    }

    return {
      transform: `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
      zIndex: zIndex,
      opacity: opacity,
      transition: 'all 0.6s cubic-bezier(0.25, 1, 0.3, 1)',
      pointerEvents: absDiff === 0 ? 'auto' : 'none'
    };
  };

  // Hash Routing Listener
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash || '#/home';
      const pathWithQuery = hash.replace('#/', '').replace('#', '');
      const [path, queryString] = pathWithQuery.split('?');

      const validPages = ['home', 'about', 'collections', 'facilities', 'quality', 'contact'];
      if (validPages.includes(path)) {
        setCurrentPage(path);
        if (path === 'facilities' && queryString) {
          const params = new URLSearchParams(queryString);
          const tab = params.get('tab');
          if (tab === 'spinning') setActiveFacilityIndex(0);
          else if (tab === 'weaving') setActiveFacilityIndex(1);
          else if (tab === 'wet_processing') setActiveFacilityIndex(2);
          else if (tab === 'manufacturing') setActiveFacilityIndex(3);
        } else if (path === 'collections' && queryString) {
          const params = new URLSearchParams(queryString);
          const tab = params.get('tab');
          if (tab === 'bath_blankets') setActiveSuiteIndex(6);
          else if (tab === 'duvet_covers') setActiveSuiteIndex(1);
          else if (tab === 'kitchen_linen') setActiveSuiteIndex(2);
          else if (tab === 'n_series') setActiveSuiteIndex(0);
          else if (tab === 'p_series') setActiveSuiteIndex(0);
          else if (tab === 'safety_wear') setActiveSuiteIndex(4);
          else if (tab === 'salon_towels') setActiveSuiteIndex(3);
          else if (tab === 'thermal') setActiveSuiteIndex(5);
          else if (tab === 'towels') setActiveSuiteIndex(0);
          else if (tab === 'overview') setActiveSuiteIndex(0);
        }
      } else {
        setCurrentPage('home');
      }
      window.scrollTo({ top: 0, behavior: 'instant' });
    };
    window.addEventListener('hashchange', handleHashChange);
    // Initial mount check
    handleHashChange();
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Sync theme with DOM
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Handle header changes on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <>
      {/* HEADER SECTION */}
      <Header
        scrolled={scrolled}
        currentPage={currentPage}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        toggleTheme={toggleTheme}
      />

      {/* MOBILE OVERLAY MENU */}
      <MobileMenu
        mobileMenuOpen={mobileMenuOpen}
        currentPage={currentPage}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      {currentPage === 'home' ? (
        <>
          {/* HERO SECTION */}
          <Hero
            heroTab={heroTab}
            setHeroTab={setHeroTab}
            setCurrentPage={setCurrentPage}
          />

          {/* COLLECTIONS COVERFLOW SECTION */}
          <Collections
            activeSuiteIndex={activeSuiteIndex}
            setActiveSuiteIndex={setActiveSuiteIndex}
            handlePrevSuite={handlePrevSuite}
            handleNextSuite={handleNextSuite}
            getCoverflowStyle={getCoverflowStyle}
            setCurrentPage={setCurrentPage}
          />

          {/* HERITAGE & OVERVIEW SECTION */}
          <About
            setCurrentPage={setCurrentPage}
          />

          {/* OPERATIONS / MANUFACTURING FACILITIES */}
          <Facilities
            activeFacilityIndex={activeFacilityIndex}
            setActiveFacilityIndex={setActiveFacilityIndex}
            hoveredHotspot={hoveredHotspot}
            setHoveredHotspot={setHoveredHotspot}
            setCurrentPage={setCurrentPage}
          />

          {/* QUALITY CONTROL CENTER */}
          <Quality />

          {/* RESPONSIBILITY & ESG SECTION */}
          <ESG
            activeEsgIndex={activeEsgIndex}
            setActiveEsgIndex={setActiveEsgIndex}
          />
        </>
      ) : currentPage === 'about' ? (
        /* DEDICATED FULL-PAGE ABOUT US SECTION */
        <AboutPage setCurrentPage={setCurrentPage} />
      ) : currentPage === 'facilities' ? (
        /* DEDICATED FULL-PAGE FACILITIES SECTION */
        <FacilitiesPage
          activeFacilityIndex={activeFacilityIndex}
          setActiveFacilityIndex={setActiveFacilityIndex}
          hoveredHotspot={hoveredHotspot}
          setHoveredHotspot={setHoveredHotspot}
          setCurrentPage={setCurrentPage}
        />
      ) : currentPage === 'collections' ? (
        /* DEDICATED FULL-PAGE COLLECTIONS SECTION */
        <CollectionsPage
          activeSuiteIndex={activeSuiteIndex}
          setActiveSuiteIndex={setActiveSuiteIndex}
          handlePrevSuite={handlePrevSuite}
          handleNextSuite={handleNextSuite}
          getCoverflowStyle={getCoverflowStyle}
          setCurrentPage={setCurrentPage}
        />
      ) : currentPage === 'quality' ? (
        /* DEDICATED FULL-PAGE QUALITY SECTION */
        <QualityPage setCurrentPage={setCurrentPage} />
      ) : (
        /* DEDICATED FULL-PAGE CONTACT & RFQ SECTION */
        <Contact setCurrentPage={setCurrentPage} />
      )}

      {/* FOOTER SECTION */}
      <Footer setCurrentPage={setCurrentPage} />
    </>
  );
}

export default App;
