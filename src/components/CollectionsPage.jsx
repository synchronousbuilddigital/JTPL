import React, { useState, useEffect } from 'react';
import { COLLECTIONS_DATA } from '../constants/data';

// Import photographic assets
import heroTowelsImg from '../assets/hero_towels.png';
import nSeriesMain from '../assets/n_series_main.png';
import luxuryTerryTowel from '../assets/luxury_terry_towel.png';
import kitchenLinenImg from '../assets/kitchen_linen.png';
import duvetCoversCat from '../assets/duvet_covers_cat.png';
import salonTowelsCat from '../assets/salon_towels_unblurred.png';
import safetyPpeGown from '../assets/safety_ppe_gown.png';
import safetyMaskBlue from '../assets/safety_mask_blue.png';
import safetyMaskWhite from '../assets/safety_mask_white.png';
import thermalBlanketWhite from '../assets/thermal_blanket_white.png';
import thermalBlanketBlue from '../assets/thermal_blanket_blue.png';
import thermalBlanketPastel from '../assets/thermal_blanket_pastel.png';
import thermalBlanketMulti from '../assets/thermal_blanket_multi.png';
import bathBlanketMain from '../assets/bath_blanket_main.png';
import bathBlanketPink from '../assets/bath_blanket_pink.png';
import bathBlanketOrange from '../assets/bath_blanket_orange.png';
import bathBlanketCoral from '../assets/bath_blanket_coral.png';
import bathBlanketWhite from '../assets/bath_blanket_white.png';
import insulatedOvenMitts from '../assets/insulated_oven_mitts.png';
import percaleCrispCover from '../assets/percale_crisp_cover.png';
import kitchenLinenBlue from '../assets/kitchen_linen_blue.png';
import kitchenLinenStripe from '../assets/kitchen_linen_stripe.png';
import kitchenLinenWaffle from '../assets/kitchen_linen_waffle.png';
import kitchenLinenTealBlue from '../assets/kitchen_linen_teal_blue.png';
import nSeriesWhite from '../assets/n_series_white.png';
import nSeriesBrown from '../assets/n_series_brown.png';
import nSeriesCoral from '../assets/n_series_coral.png';
import nSeriesPeach from '../assets/n_series_peach.png';
import nSeriesMagenta from '../assets/n_series_magenta.png';
import pSeriesMain from '../assets/p_series_main.png';
import pSeriesGold from '../assets/p_series_gold.png';

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

  const [selectedImages, setSelectedImages] = useState({});

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

  // IntersectionObserver for scroll-reveal of collection cards & overview category cards
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.1 }
    );
    const elements = document.querySelectorAll('.collection-product-card, .collection-category-card');
    elements.forEach((el) => observer.observe(el));
    return () => {
      elements.forEach((el) => observer.unobserve(el));
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
              image: bathBlanketMain,
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
              image: percaleCrispCover,
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
              images: {
                main: kitchenLinenImg,
                blue: kitchenLinenBlue,
                stripe: kitchenLinenStripe,
                waffle: kitchenLinenWaffle,
                teal_blue: kitchenLinenTealBlue
              },
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
              image: thermalBlanketWhite,
              images: {
                white: thermalBlanketWhite,
                blue: thermalBlanketBlue,
                pastel: thermalBlanketPastel,
                classic: thermalBlanketMulti
              },
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
      case 'n_series':
      case 'towels':
        return {
          title: 'N-Series Institutional Terry Collections',
          badge: '01A // INSTITUTIONAL TERRY',
          description: 'Ultra-absorbent combed cotton towels with reinforced double-stitched borders designed for global hospitality and institutional usage.',
          coordinates: '9.9176° N, 78.1560° E',
          subProducts: [
            {
              id: 'n_series_suite',
              title: 'N-Series Luxury Institutional Towels',
              tag: 'TERRY // INSTITUTIONAL',
              desc: 'Engineered for exceptional durability and rapid moisture absorption. Made with premium combed ring-spun cotton and reinforced double-stitched side hems to withstand intensive commercial wash cycles.',
              image: nSeriesMain,
              images: {
                main: nSeriesMain,
                white: nSeriesWhite,
                brown: nSeriesBrown,
                coral: nSeriesCoral,
                peach: nSeriesPeach,
                magenta: nSeriesMagenta
              },
              specs: {
                'Cotton Grade': '100% Combed Ring-Spun Cotton',
                'GSM Weight': '600 GSM Commercial Grade',
                'Border Style': 'Reinforced Double-Stitched Borders',
                'Lifespan': '300+ Commercial Wash Cycles'
              },
              metrics: [
                { label: 'Wash Cycle Life', value: '300+ Washes' },
                { label: 'Absorbency Speed', value: '98%' }
              ]
            }
          ]
        };
      case 'p_series':
        return {
          title: 'P-Series Retail & Luxury Terry Collections',
          badge: '01B // RETAIL LUXURY',
          description: 'Premium ring-spun towels featuring elegant low-profile dobby borders designed for high-end retail brands and boutique resorts.',
          coordinates: '9.9176° N, 78.1560° E',
          subProducts: [
            {
              id: 'p_series_suite',
              title: 'P-Series Combed Terry Towel Suite',
              tag: 'TERRY // LUXURY RETAIL',
              desc: 'The ultimate luxury standard. Combines GOTS-certified long-staple organic cotton yarn with high-density 650 GSM construction. Features a sophisticated low-profile dobby border and ultra-plush skin feel.',
              image: pSeriesMain,
              images: {
                main: pSeriesMain,
                gold: pSeriesGold
              },
              specs: {
                'Cotton Grade': '100% GOTS-Certified Combed Cotton',
                'GSM Weight': '650 GSM High Density',
                'Border Style': 'Sophisticated Low-Profile Dobby Borders',
                'Texture': 'Ultra-Plush Premium Handfeel'
              },
              metrics: [
                { label: 'Softness Score', value: '100%' },
                { label: 'Absorbency Speed', value: '99%' }
              ]
            }
          ]
        };
      default:
        return {
          title: 'N-Series Institutional Terry Collections',
          badge: '01A // INSTITUTIONAL TERRY',
          description: 'Ultra-absorbent combed cotton towels with reinforced double-stitched borders designed for global hospitality and institutional usage.',
          coordinates: '9.9176° N, 78.1560° E',
          subProducts: [
            {
              id: 'n_series_suite',
              title: 'N-Series Luxury Institutional Towels',
              tag: 'TERRY // INSTITUTIONAL',
              desc: 'Engineered for exceptional durability and rapid moisture absorption. Made with premium combed ring-spun cotton and reinforced double-stitched side hems to withstand intensive commercial wash cycles.',
              image: nSeriesMain,
              images: {
                main: nSeriesMain,
                white: nSeriesWhite,
                brown: nSeriesBrown,
                coral: nSeriesCoral,
                peach: nSeriesPeach,
                magenta: nSeriesMagenta
              },
              specs: {
                'Cotton Grade': '100% Combed Ring-Spun Cotton',
                'GSM Weight': '600 GSM Commercial Grade',
                'Border Style': 'Reinforced Double-Stitched Borders',
                'Lifespan': '300+ Commercial Wash Cycles'
              },
              metrics: [
                { label: 'Wash Cycle Life', value: '300+ Washes' },
                { label: 'Absorbency Speed', value: '98%' }
              ]
            }
          ]
        };
    }
  };

  // Handler to route active coverflow clicks directly into tabs
  const handleActiveCardClick = (index) => {
    const tabs = [
      'n_series',
      'p_series',
      'duvet_covers',
      'kitchen_linen',
      'salon_towels',
      'safety_wear',
      'thermal',
      'bath_blankets'
    ];
    const targetTab = tabs[index] || 'n_series';
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
          <div className="collection-cards-grid">
            {detailData.subProducts.map((prod, idx) => {
              const defaultKey = prod.images ? (prod.images.main ? 'main' : Object.keys(prod.images)[0]) : null;
              const activeImg = prod.images ? (prod.images[selectedImages[prod.id] || defaultKey] || prod.image) : prod.image;

              return (
                <div className="collection-product-card reveal-on-scroll reveal-up" key={prod.id}>
                  {/* Card Left: Image Container */}
                  <div className="collection-product-card-visuals">
                    {/* Card Image Area */}
                    <div className="collection-product-card-img-wrapper">
                      <img
                        className="collection-img"
                        src={activeImg}
                        alt={prod.title}
                        key={activeImg}
                      />
                    </div>
                  </div>

                  {/* Info Pane */}
                  <div className="collection-product-info">
                    <span className="collection-product-tag">{prod.tag}</span>
                    <h3 className="collection-product-title">{prod.title}</h3>
                    <p className="collection-product-desc">{prod.desc}</p>

                    {/* Color Swatch Selector (if multiple images are available) */}
                    {prod.images && (
                      <div className="collection-product-colors" style={{ marginBottom: '24px' }}>
                        <span className="collection-card-specs-title" style={{ display: 'block', marginBottom: '8px' }}>AVAILABLE SHADES</span>
                        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                          {Object.entries(prod.images).map(([colorKey, colorImg]) => {
                            const isSelected = (selectedImages[prod.id] || defaultKey) === colorKey;

                            // Map color key to clean CSS backgrounds
                            const colorMap = {
                              main: '#EAE6DF',
                              white: '#FFFFFF',
                              pink: '#F5C6CB',
                              orange: '#EF8354',
                              coral: '#FF7F50',
                              beige: '#D1C2A5',
                              cream: '#F3EFE0',
                              blue: '#3B6E8C',
                              pastel: '#E5D3B3',
                              classic: '#5F8575',
                              teal_blue: '#4A8588'
                            };

                            return (
                              <button
                                key={colorKey}
                                className={`color-swatch-btn ${isSelected ? 'active' : ''}`}
                                style={{
                                  width: '24px',
                                  height: '24px',
                                  borderRadius: '50%',
                                  border: isSelected ? '2px solid var(--accent)' : '1px solid rgba(0,0,0,0.15)',
                                  backgroundColor: colorMap[colorKey] || '#ccc',
                                  cursor: 'pointer',
                                  padding: 0,
                                  boxShadow: isSelected ? '0 0 5px rgba(184, 144, 71, 0.4)' : 'none',
                                  transition: 'all 0.2s ease',
                                  transform: isSelected ? 'scale(1.15)' : 'scale(1)'
                                }}
                                onClick={() => {
                                  setSelectedImages(prev => ({
                                    ...prev,
                                    [prod.id]: colorKey
                                  }));
                                }}
                                title={colorKey.toUpperCase()}
                              />
                            );
                          })}
                        </div>
                      </div>
                    )}

                    {/* Specs Box */}
                    <div className="collection-card-specs">
                      <span className="collection-card-specs-title">PRODUCT SPECIFICATIONS</span>
                      <div className="collection-card-specs-list">
                        {Object.entries(prod.specs).map(([key, val]) => (
                          <div className="collection-card-spec-row" key={key}>
                            <span className="collection-card-spec-key">{key}</span>
                            <span className="collection-card-spec-val">{val}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>
                </div>
              );
            })}
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

        {/* Category Showroom Grid */}
        <div className="collections-overview-grid">
          {COLLECTIONS_DATA.map((item, index) => {
            const getTabFromTitle = (title) => {
              const mapping = {
                'N-Series Towels': 'towels',
                'P-Series Towels': 'towels',
                'Duvet Covers': 'duvet_covers',
                'Kitchen Linen': 'kitchen_linen',
                'Salon Towels': 'salon_towels',
                'Safety Wear': 'safety_wear',
                'Thermal Wear': 'thermal',
                'Bath Blankets': 'bath_blankets'
              };
              return mapping[title] || 'towels';
            };
            const targetTab = getTabFromTitle(item.title);

            return (
              <div
                key={index}
                className="collection-category-card reveal-on-scroll reveal-up"
                onClick={() => {
                  window.location.hash = `#/collections?tab=${targetTab}`;
                  window.scrollTo(0, 0);
                }}
              >
                <div className="collection-category-card-img-box">
                  <div className="collection-category-card-badge">
                    {targetTab === 'safety_wear' ? 'PPE' : targetTab === 'bath_blankets' ? 'Clinical' : 'Terry & Linens'}
                  </div>
                  <img
                    className="collection-category-card-img"
                    src={item.image}
                    alt={item.title}
                    style={{
                      objectFit: item.title === 'Safety Wear' ? 'contain' : 'cover',
                      backgroundColor: item.title === 'Safety Wear' ? '#808080' : 'transparent',
                    }}
                  />
                  <div className="collection-category-card-overlay"></div>
                </div>

                <div className="collection-category-card-info">
                  <span className="collection-category-card-subtitle">{item.subtitle}</span>
                  <h3 className="collection-category-card-title">{item.title}</h3>
                  <p className="collection-category-card-desc">{item.desc}</p>

                  <button className="collection-category-card-btn">
                    <span>Explore Specifications</span>
                    <span style={{ fontSize: '1rem' }}>&rarr;</span>
                  </button>
                </div>
              </div>
            );
          })}
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
