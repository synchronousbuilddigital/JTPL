import React, { useState, useEffect } from 'react';
import { COLLECTIONS_DATA } from '../constants/data';

// Import photographic assets
import heroTowelsImg from '../assets/hero_towels.png';
import kitchenLinenImg from '../assets/kitchen_linen.png';
import duvetCoversCat from '../assets/duvet_covers_cat.png';
import salonTowelsCat from '../assets/salon_towels_cat.png';
import safetyPpeGown from '../assets/safety_ppe_gown.png';
import safetyMaskBlue from '../assets/safety_mask_blue.png';
import safetyMaskWhite from '../assets/safety_mask_white.png';
import thermalBlanketsCat from '../assets/thermal_blankets_cat.png';
import bathBlanketMain from '../assets/bath_blanket_main.png';
import bathBlanketPink from '../assets/bath_blanket_pink.png';
import bathBlanketOrange from '../assets/bath_blanket_orange.png';
import bathBlanketCoral from '../assets/bath_blanket_coral.png';
import bathBlanketWhite from '../assets/bath_blanket_white.png';

import './CollectionsPage.css';

const CollectionsPage = ({
  activeSuiteIndex,
  setActiveSuiteIndex,
  handlePrevSuite,
  handleNextSuite,
  getCoverflowStyle,
  setCurrentPage
}) => {
  // Sync tab state directly from URL hash
  const [activeTab, setActiveTab] = useState(() => {
    const hash = window.location.hash || '';
    const [_, queryString] = hash.split('?');
    if (queryString) {
      const params = new URLSearchParams(queryString);
      return params.get('tab');
    }
    return null;
  });

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash || '';
      const [_, queryString] = hash.split('?');
      if (queryString) {
        const params = new URLSearchParams(queryString);
        setActiveTab(params.get('tab'));
      } else {
        setActiveTab(null);
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // IntersectionObserver for scroll-reveal of collection rows
  useEffect(() => {
    if (!activeTab || activeTab === 'overview') return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.15 }
    );
    const rows = document.querySelectorAll('.collection-row');
    rows.forEach((row) => observer.observe(row));
    return () => {
      rows.forEach((row) => observer.unobserve(row));
    };
  }, [activeTab]);

  // Lookup data for each detailed collection page
  const getCollectionDetail = (tab) => {
    switch (tab) {
      case 'bath_blankets':
        return {
          title: 'Patient Care Napped Bath Blankets',
          badge: '07 // CLINICAL',
          description: 'Double-sided heavily napped hospital flannel wraps designed to provide instant patient warmth, clinical security, and maximum comfort.',
          coordinates: '9.9254° N, 78.1402° E',
          subProducts: [
            {
              id: 'napped_flannel',
              title: 'Heavy-Napped Flannel Wraps',
              tag: 'CLINICAL // WRAPS',
              desc: 'Double-sided heavy flannel sheets designed for post-operative patient care. Retains body heat rapidly while maintaining a soft, non-abrasive touch against sensitive skin, standing up to intensive hospital laundry sanitization.',
              images: {
                main: bathBlanketMain,
                pink: bathBlanketPink,
                orange: bathBlanketOrange,
                coral: bathBlanketCoral,
                white: bathBlanketWhite
              },
              specs: {
                'Fiber Blend': '80% Organic Cotton / 20% Polyester',
                'Napping Style': 'Double-sided high-density brushed nap',
                'Border Hem': 'Overlocked high-tensile whip-stitching',
                'Average Weight': '380 GSM Medical Grade'
              },
              metrics: [
                { label: 'Thermal Retention', value: '98%' },
                { label: 'Hypoallergenic Rating', value: '100%' }
              ]
            }
          ]
        };
      case 'duvet_covers':
        return {
          title: 'Premium Bedroom & Duvet Coverings',
          badge: '02 // BEDROOM',
          description: 'Fine-weave cotton sateen and percale duvet casings featuring elegant invisible zippers, secure corner ties, and certified long-staple fibers.',
          coordinates: '9.8433° N, 78.4809° E',
          subProducts: [
            {
              id: 'sateen_luster',
              title: 'Luxury Sateen Luster Covers',
              tag: 'SATEEN // LUSTER',
              desc: '400 Thread Count combed organic cotton sateen sheets featuring a luxurious drape, smooth touch, and hidden secure button enclosures for retail and boutique hospitality.',
              image: duvetCoversCat,
              specs: {
                'Thread Count': '400 TC (Single-Pick Structure)',
                'Weave Pattern': '4/1 Satin structural weave',
                'Closure Style': 'Invisible YKK Zipper & Corner Ties',
                'Finish Type': 'Calendared Silky Luster Finish'
              },
              metrics: [
                { label: 'Luster Gloss Index', value: '95%' },
                { label: 'Drape Quality Rating', value: '98%' }
              ]
            },
            {
              id: 'percale_crisp',
              title: 'Classic Crisp Percale Covers',
              tag: 'PERCALE // CRISP',
              desc: '300 Thread Count long-staple cotton percale covers that are highly breathable, crisp to the touch, and perfect for hot climates and luxury resorts.',
              image: duvetCoversCat,
              specs: {
                'Thread Count': '300 TC Premium Grid',
                'Weave Pattern': '1/1 plain weave structure',
                'Fabric Feel': 'Crisp, matte finish',
                'Yarn Count': '60s combed compact yarn'
              },
              metrics: [
                { label: 'Breathability Index', value: '99%' },
                { label: 'Crispness Score', value: '96%' }
              ]
            }
          ]
        };
      case 'kitchen_linen':
        return {
          title: 'Culinary & Heavy-Duty Kitchen Linens',
          badge: '03 // CULINARY',
          description: 'Lint-free waffle weave tea towels, heavy-duty insulated oven mitts, and double-layered chef aprons designed for professional kitchens.',
          coordinates: '9.9312° N, 78.1218° E',
          subProducts: [
            {
              id: 'waffle_tea',
              title: 'Streak-Free Waffle Tea Towels',
              tag: 'WAFFLE // TEA',
              desc: 'Super absorbent and completely lint-free tea towels for drying glass, silver, and crystal without leaving fibers or streaks.',
              image: kitchenLinenImg,
              specs: {
                'Material': '100% Combed Cotton',
                'Weave Style': 'Deep cell waffle structure',
                'Dimensions': '20" x 30" standard cut',
                'Laundering': 'Vat-dyed to withstand boiling washes'
              },
              metrics: [
                { label: 'Absorbency Speed', value: '98%' },
                { label: 'Lint Rating', value: '0% Lint' }
              ]
            },
            {
              id: 'oven_mitts',
              title: 'Insulated Canvas Oven Mitts',
              tag: 'PROTECTION // MITTS',
              desc: 'Double-layered heavy cotton canvas mitts with heat-resistant silicone textured padding and integrated hanging loops.',
              image: kitchenLinenImg,
              specs: {
                'Inner Filling': 'Double needle quilted felt padding',
                'Grip Type': 'Flame-resistant silicone grip print',
                'Thermal Limit': 'Certified up to 250°C',
                'Stitching': 'Nomex heat-resistant threads'
              },
              metrics: [
                { label: 'Thermal Shielding', value: '99%' },
                { label: 'Flexibility Index', value: '94%' }
              ]
            }
          ]
        };
      case 'salon_towels':
        return {
          title: 'Professional Vat-Dyed Salon Towels',
          badge: '04 // PROFESSIONAL',
          description: 'Vats-dyed salon and barbershop linens, chemically resistant to peroxides, bleaches, and professional hair dyes.',
          coordinates: '9.9176° N, 78.1560° E',
          subProducts: [
            {
              id: 'salon_bleach',
              title: 'Bleach-Resistant Vat Towels',
              tag: 'VAT-DYED // SALON',
              desc: 'Towels specially treated with industrial vat dyes to resist color fading or spotting from bleach, hair dyes, and salon sanitizers.',
              image: salonTowelsCat,
              specs: {
                'Fiber Composition': '100% Combed Cotton Terry',
                'Resist Tech': 'Vat dyed at high temperature',
                'Dimensions': '16" x 27" and 16" x 30"',
                'Border': 'Double-needle hemmed borders'
              },
              metrics: [
                { label: 'Bleach Resistance', value: '100%' },
                { label: 'Color Fastness Rating', value: 'Grade 5' }
              ]
            }
          ]
        };
      case 'safety_wear':
        return {
          title: 'Industrial Safety & Protective Wear',
          badge: '05 // PROTECTIVE',
          description: 'Flame-retardant industrial aprons and certified high-visibility utility coveralls featuring triple-stitched structural seams.',
          coordinates: '9.9254° N, 78.1402° E',
          subProducts: [
            {
              id: 'ppe_gowns',
              title: 'Disposable Protective PPE Suit/Gown',
              tag: 'SAFETY // PPE SUIT',
              desc: 'High-barrier disposable isolation gowns designed for clinical and sanitary environments, offering fluid resistance and full coverage protection.',
              image: safetyPpeGown,
              specs: {
                'Material': 'Non-woven SMS Polypropylene',
                'Treatment': 'Anti-static and fluid repellent',
                'Design': 'Elastic cuffs with tie-back collar',
                'Certification': 'AAMI Level 3 Protection Compliant'
              },
              metrics: [
                { label: 'Fluid Barrier Rating', value: '100%' },
                { label: 'Tear Resistance', value: '98%' }
              ]
            },
            {
              id: 'surgical_masks_blue',
              title: '3-Ply Surgical Face Mask (Blue)',
              tag: 'PROTECTION // SURGICAL',
              desc: 'Medical-grade 3-ply filtration masks featuring high fluid resistance and comfortable ear loops for everyday protection.',
              image: safetyMaskBlue,
              specs: {
                'Filtration Efficiency': 'BFE ≥ 98% (Surgical Standard)',
                'Inner Layer': 'Soft skin-friendly fabric',
                'Nose Clip': 'Malleable aluminum nose bridge',
                'Sterility': 'Non-sterile cleanroom packed'
              },
              metrics: [
                { label: 'Bacterial Filtration', value: '99%' },
                { label: 'Breathability Differential', value: 'Grade 1' }
              ]
            },
            {
              id: 'n95_masks_white',
              title: 'N95 Protective Face Mask (White)',
              tag: 'FILTRATION // N95',
              desc: 'High-efficiency particulate respirator masks providing secure seal fitting and low breathing resistance.',
              image: safetyMaskWhite,
              specs: {
                'Filtration Standard': 'N95 / FFP2 Certified',
                'Filter Medium': 'Electrostatic melt-blown microfiber',
                'Strap Style': 'Dual headband loops',
                'Aerosol Resistance': 'Non-oil based particulates'
              },
              metrics: [
                { label: 'Particulate Filtration', value: '95%' },
                { label: 'Fit Test Pass Rate', value: '100%' }
              ]
            }
          ]
        };
      case 'thermal':
        return {
          title: 'Leno Cellular Thermal Blankets',
          badge: '06 // THERMAL',
          description: 'Classic cellular blankets constructed in breathable leno structures, providing temperature self-regulation and patient comfort.',
          coordinates: '9.8433° N, 78.4809° E',
          subProducts: [
            {
              id: 'leno_cellular',
              title: 'Breathable Leno Blankets',
              tag: 'CELLULAR // INSULATION',
              desc: 'Classic open-grid cellular design. The cross-warp leno weave structures trap air pockets to insulate in cool conditions while venting body heat in warm environments.',
              image: thermalBlanketsCat,
              specs: {
                'Weave Tech': 'Leno structural cross-warp looms',
                'Fiber Grade': '100% Organic Ring-spun Cotton',
                'Shrinkage': 'Pre-shrunk under tensionless dryers',
                'Hems': 'Wide woven borders on all sides'
              },
              metrics: [
                { label: 'Breathability Index', value: '100%' },
                { label: 'Thermal Comfort Score', value: '98%' }
              ]
            }
          ]
        };
      case 'towels':
      case 'n_series':
      case 'p_series':
      default:
        return {
          title: 'Institutional & Luxury Terry Collections',
          badge: '01 // TERRY',
          description: 'Ultra-absorbent combed cotton towels with reinforced double-stitched borders and elegant low-profile dobby borders.',
          coordinates: '9.9176° N, 78.1560° E',
          subProducts: [
            {
              id: 'n_series',
              title: 'N Series Institutional Towels',
              tag: 'TERRY // N SERIES',
              desc: 'Engineered for extreme wash-durability in high-end hotels. Features double-loop pile construction, lock-stitch side hems, and rapid moisture absorption.',
              image: heroTowelsImg,
              specs: {
                'Cotton Grade': '100% Combed Ring-Spun Cotton',
                'GSM Weight': '600 GSM High Density',
                'Border Style': 'Reinforced Double-Stitched Borders',
                'Certifications': 'GOTS Certified Organic Thread'
              },
              metrics: [
                { label: 'Wash Cycle Life', value: '300+ Washes' },
                { label: 'Absorbency Speed', value: '99%' }
              ]
            },
            {
              id: 'p_series',
              title: 'P Series Premium Retail Towels',
              tag: 'TERRY // P SERIES',
              desc: 'Crafted with premium long-staple combed cotton for supreme plushness. Features elegant low-profile dobby borders that match high-end home and boutique aesthetics.',
              image: heroTowelsImg,
              specs: {
                'Cotton Grade': '100% Egyptian long-staple cotton',
                'GSM Weight': '650 GSM Ultra Plush',
                'Border Style': 'Low-profile textured dobby design',
                'Softness Finish': 'Tensionless eco-friendly softening'
              },
              metrics: [
                { label: 'Softness Rating', value: '98%' },
                { label: 'Pile Density Score', value: '97%' }
              ]
            }
          ]
        };
    }
  };

  // Handler to route active coverflow clicks directly into tabs
  const handleActiveCardClick = (index) => {
    const tabs = [
      'towels',
      'duvet_covers',
      'kitchen_linen',
      'salon_towels',
      'safety_wear',
      'thermal',
      'bath_blankets'
    ];
    const targetTab = tabs[index] || 'towels';
    window.location.hash = `#/collections?tab=${targetTab}`;
  };

  const isOverview = !activeTab || activeTab === 'overview';

  if (!isOverview) {
    const detailData = getCollectionDetail(activeTab);

    return (
      <section className="collections-page-wrapper" style={{ minHeight: '100vh' }}>

        <div className="container">
          {/* Breadcrumbs */}
          <div style={{ marginBottom: '24px', fontFamily: 'monospace', fontSize: '0.85rem', letterSpacing: '0.1em', textAlign: 'left' }}>
            <span style={{ color: 'var(--text-muted)', cursor: 'pointer' }} onClick={() => { window.location.hash = '#/home'; }}>/</span>
            <span style={{ color: 'var(--text-muted)', cursor: 'pointer', marginLeft: '6px' }} onClick={() => { window.location.hash = '#/collections'; }}>collections</span>
            <span style={{ color: 'var(--accent)', marginLeft: '6px' }}>/ {activeTab}</span>
          </div>

          {/* Editorial Header */}
          <div className="collection-header-bar">
            <span className="badge" style={{ marginBottom: '12px' }}>
              {detailData.badge}
            </span>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.2rem, 4vw, 3.4rem)', color: 'var(--accent)', lineHeight: '1.15', fontWeight: 400 }}>
              {detailData.title}
            </h1>
            <p className="text-secondary" style={{ marginTop: '8px', fontSize: '0.98rem', maxWidth: '600px' }}>
              {detailData.description}
            </p>
          </div>

          {/* Showroom Cards List */}
          <div>
            {detailData.subProducts.map((prod, idx) => (
              <div className="collection-row" key={prod.id}>

                {/* Image Pane Container */}
                <div className="collection-img-pane">
                  {prod.images ? (
                    <div className="collection-multi-grid">
                      {/* Left main image */}
                      <div className="collection-img-frame" style={{ height: '100%' }}>
                        <div className="collection-camera-grid"></div>
                        <div className="collection-img-overlay" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <span className="collection-rec-dot"></span>
                          CATALOG // {prod.tag}
                        </div>
                        <img
                          className="collection-img"
                          src={prod.images.main}
                          alt={prod.title}
                        />
                        <div className="collection-img-coordinates">
                          <span>COORDS: {detailData.coordinates}</span>
                          <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                            <span className="collection-rec-dot" style={{ backgroundColor: '#22c55e', animation: 'collectionRecPulse 2s infinite' }}></span>
                            VERIFIED // OK
                          </span>
                        </div>
                      </div>
                      {/* Right 2x2 grid of small images */}
                      <div className="collection-small-grid">
                        <div className="collection-img-frame" style={{ height: '100%' }}>
                          <img className="collection-img" src={prod.images.pink} alt="Pink variety" />
                        </div>
                        <div className="collection-img-frame" style={{ height: '100%' }}>
                          <img className="collection-img" src={prod.images.orange} alt="Orange variety" />
                        </div>
                        <div className="collection-img-frame" style={{ height: '100%' }}>
                          <img className="collection-img" src={prod.images.coral} alt="Coral variety" />
                        </div>
                        <div className="collection-img-frame" style={{ height: '100%' }}>
                          <img className="collection-img" src={prod.images.white} alt="White variety" />
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="collection-img-frame">
                      <div className="collection-camera-grid"></div>
                      <div className="collection-img-overlay" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span className="collection-rec-dot"></span>
                        CATALOG // {prod.tag}
                      </div>
                      <img
                        className="collection-img"
                        src={prod.image}
                        alt={prod.title}
                      />
                      <div className="collection-img-coordinates">
                        <span>COORDS: {detailData.coordinates}</span>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                          <span className="collection-rec-dot" style={{ backgroundColor: '#22c55e', animation: 'collectionRecPulse 2s infinite' }}></span>
                          VERIFIED // OK
                        </span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Info & Telemetry Pane */}
                <div className="collection-info-pane">
                  <span className="collection-tag">{prod.tag}</span>
                  <h2 className="collection-title">{prod.title}</h2>
                  <p className="collection-desc">{prod.desc}</p>

                  {/* Specs & Metrics data grids */}
                  <div className="collection-data-grid">

                    {/* Specifications Box */}
                    <div className="collection-spec-box">
                      <span className="collection-spec-title">PRODUCT SPECIFICATIONS</span>
                      {Object.entries(prod.specs).map(([key, val]) => (
                        <div className="collection-spec-row" key={key}>
                          <span className="collection-spec-key">{key}</span>
                          <span className="collection-spec-val">{val}</span>
                        </div>
                      ))}
                    </div>

                    {/* Metrics Box */}
                    <div className="collection-metric-box">
                      {prod.metrics.map((metric, mIdx) => {
                        const isPercentage = metric.value.endsWith('%');
                        const numericVal = isPercentage ? parseFloat(metric.value) : null;

                        return (
                          <div className="collection-metric-card" key={mIdx}>
                            <div className="collection-metric-icon">
                              {mIdx === 0 && (
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                </svg>
                              )}
                              {mIdx === 1 && (
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                  <circle cx="12" cy="12" r="10" />
                                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                                  <path d="M2 12h20" />
                                </svg>
                              )}
                            </div>

                            <div className="collection-metric-details">
                              <span className="collection-metric-label">{metric.label}</span>
                              {isPercentage ? (
                                <>
                                  <div className="collection-metric-value-row">
                                    <span className="collection-metric-value">{metric.value}</span>
                                    <span style={{ fontSize: '0.62rem', color: '#55c57a', fontWeight: 'bold', fontFamily: 'monospace' }}>COMPLIANT</span>
                                  </div>
                                  <div className="collection-metric-bar-track">
                                    <div className="collection-metric-bar-fill" style={{ width: `${numericVal}%` }}></div>
                                  </div>
                                </>
                              ) : (
                                <span className="collection-metric-tag">{metric.value}</span>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>

                  </div>

                </div>

              </div>
            ))}
          </div>

          {/* Action CTAs */}
          <div style={{ marginTop: '80px', borderTop: '1px solid var(--border-color)', paddingTop: '48px', display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
            <button
              className="hero-company-profile-link"
              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
              onClick={() => {
                window.location.hash = '#/collections';
              }}
            >
              &larr; Return to Collections Portal
            </button>
          </div>

        </div>
      </section>
    );
  }

  // Coverflow Carousel Overview View
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
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.3rem, 4.5vw, 3.6rem)', color: 'var(--accent)', marginTop: '8px' }}>
            Our collections
          </h2>
          <p className="text-secondary" style={{ fontSize: '1.1rem', maxWidth: '600px', margin: '12px auto 0', lineHeight: '1.6' }}>
            Browse our range of GOTS-certified combed cotton towels, premium bedroom sheetings, lint-free kitchen textiles, and industrial wear.
          </p>
        </div>

        {/* 3D Coverflow Carousel Container */}
        <div className="coverflow-container" style={{ margin: '60px 0' }}>
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
                      handleActiveCardClick(index);
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
