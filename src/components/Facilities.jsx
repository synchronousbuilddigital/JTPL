import React from 'react';
import { FACILITY_STEPS } from '../constants/data';

const Facilities = ({ 
  activeFacilityIndex, 
  setActiveFacilityIndex, 
  hoveredHotspot, 
  setHoveredHotspot,
  setCurrentPage
}) => {
  return (
    <section id="facilities" className="facilities-cards-section section-padding">
      <div className="container">
        <div className="text-center" style={{ marginBottom: '56px' }}>
          <span className="badge" style={{ color: 'var(--accent)', letterSpacing: '0.22em', textTransform: 'uppercase', fontSize: '0.75rem', fontWeight: 700 }}>
            Manufacturing Hubs
          </span>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.2rem, 4vw, 3rem)', fontWeight: 500, color: '#FAF8F5', marginTop: '8px' }}>
            Our Facilities
          </h2>
          <p className="text-secondary" style={{ maxWidth: '600px', margin: '12px auto 0', fontSize: '1rem', lineHeight: '1.6' }}>
            Explore our integrated operations. Hover over each card to view technical specifications, coordinates, and real-time efficiency metrics.
          </p>
        </div>

        {/* 3D Animated Card Grid */}
        <div className="facilities-cards-grid">
          {FACILITY_STEPS.map((facility, idx) => {
            return (
              <div
                key={idx}
                className="facility-interactive-card"
              >
                {/* Top Header Row */}
                <div className="facility-card-header">
                  <span className="card-div-num">DIV 0{idx + 1}</span>
                  <span className="card-div-coords">{facility.coordinates}</span>
                </div>

                {/* Image Viewport Pane */}
                <div className="facility-card-image-pane">
                  <img
                    className="facility-card-img"
                    src={facility.image}
                    alt={facility.title}
                  />
                  <div className="facility-card-image-overlay"></div>

                  {/* Minimal Hotspots */}
                  <div className="facility-card-hotspot" style={{ top: '35%', left: '55%' }}>
                    <span className="card-hotspot-core"></span>
                    <span className="card-hotspot-halo"></span>
                  </div>
                  <div className="facility-card-hotspot secondary" style={{ top: '65%', left: '30%' }}>
                    <span className="card-hotspot-core"></span>
                    <span className="card-hotspot-halo"></span>
                  </div>
                </div>

                {/* Card Content Slate */}
                <div className="facility-card-content">
                  <span className="facility-card-loc">{facility.location}</span>
                  <h3 className="facility-card-title">{facility.title}</h3>
                  <p className="facility-card-desc">{facility.description}</p>
                </div>

                {/* Hover Slide-up Animated Detail Drawer */}
                <div className="facility-card-drawer">
                  <div className="drawer-inner">
                    <span className="drawer-label">TECHNICAL SPECIFICATIONS</span>
                    <div className="drawer-specs">
                      {Object.entries(facility.specs).map(([key, val]) => (
                        <div className="drawer-spec-row" key={key}>
                          <span className="drawer-spec-key">{key}</span>
                          <span className="drawer-spec-val">{val}</span>
                        </div>
                      ))}
                    </div>

                    <span className="drawer-label" style={{ marginTop: '20px' }}>OPERATIONAL EFFICIENCY</span>
                    <div className="drawer-metrics-row">
                      {facility.metrics.map((metric, i) => (
                        <div className="drawer-metric-box" key={i}>
                          <span className="drawer-metric-num">{metric.value}%</span>
                          <span className="drawer-metric-label">{metric.label}</span>
                        </div>
                      ))}
                    </div>

                    <span className="drawer-label" style={{ marginTop: '20px' }}>HIGHLIGHTS</span>
                    <div className="drawer-highlights">
                      {facility.highlights.map((h, i) => (
                        <span className="drawer-highlight-tag" key={i}>{h}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Facilities;
