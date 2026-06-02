import React from 'react';
import { FACILITY_STEPS } from '../constants/data';

const FacilitiesPage = ({
  activeFacilityIndex,
  setActiveFacilityIndex,
  hoveredHotspot,
  setHoveredHotspot,
  setCurrentPage
}) => {
  const currentFacility = FACILITY_STEPS[activeFacilityIndex];

  return (
    <section className="facilities-page-wrapper">
      <div className="container">
        
        {/* Breadcrumb Path */}
        <div style={{ marginBottom: '24px', fontFamily: 'monospace', fontSize: '0.85rem', letterSpacing: '0.1em', textAlign: 'left' }}>
          <span style={{ color: 'var(--text-muted)', cursor: 'pointer' }} onClick={() => { setCurrentPage('home'); window.scrollTo(0, 0); }}>/</span>
          <span style={{ color: 'var(--accent)', marginLeft: '6px' }}>facilities</span>
        </div>

        {/* Header banner */}
        <div className="facilities-page-hero" style={{ textAlign: 'center', marginBottom: '48px' }}>
          <span className="badge" style={{ color: 'var(--accent)', letterSpacing: '0.25em', textTransform: 'uppercase', fontSize: '0.75rem', fontWeight: 700 }}>
            Operations & Infrastructure
          </span>
          <h1 style={{ marginTop: '12px', fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.3rem, 4.5vw, 3.6rem)', color: '#FAF8F5' }}>
            Operational Control Center
          </h1>
          <p className="text-secondary" style={{ fontSize: '1.1rem', maxWidth: '600px', margin: '12px auto 0', lineHeight: '1.6' }}>
            Real-time status overview and technical metrics across our high-capacity Madurai and Sivagangai plants.
          </p>
        </div>

        {/* Redesigned Panoramic Control Console */}
        <div className="facilities-panoramic-layout facility-switch-transition" key={activeFacilityIndex}>
          
          {/* LEFT COLUMN: Premium Viewport with Hotspots */}
          <div className="facilities-gallery-viewport-side">
            <div className="editorial-image-wrapper" style={{ aspectRatio: '16/10', borderRadius: '16px', overflow: 'hidden', border: '1px solid var(--border-color)', position: 'relative' }}>
              <img
                className="viewport-reference-img"
                src={currentFacility.image}
                alt={currentFacility.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8 }}
              />
              <div className="editorial-image-overlay" style={{ background: 'linear-gradient(to top, rgba(14,13,11,0.8) 0%, rgba(14,13,11,0.2) 60%, rgba(14,13,11,0.5) 100%)' }}></div>

              {/* Pulsing Hotspots */}
              <div
                className="editorial-hotspot"
                style={{ top: '35%', left: '55%' }}
                onMouseEnter={() => setHoveredHotspot('sensor')}
                onMouseLeave={() => setHoveredHotspot(null)}
              >
                <span className="hotspot-dot-core"></span>
                <span className="hotspot-pulse-halo"></span>
                <span className="hotspot-mini-label">Telemetry Node</span>
              </div>
              
              <div
                className="editorial-hotspot secondary"
                style={{ top: '65%', left: '30%' }}
                onMouseEnter={() => setHoveredHotspot('hydraulics')}
                onMouseLeave={() => setHoveredHotspot(null)}
              >
                <span className="hotspot-dot-core"></span>
                <span className="hotspot-pulse-halo"></span>
                <span className="hotspot-mini-label">Actuator Group</span>
              </div>

              {/* Interactive Tooltip Card */}
              {hoveredHotspot && (
                <div className="editorial-tooltip" style={{ background: 'rgba(22, 21, 19, 0.95)', border: '1px solid var(--accent)', padding: '16px', borderRadius: '8px', backdropFilter: 'blur(12px)' }}>
                  <h5 style={{ color: 'var(--accent)', margin: '0 0 6px 0', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                    {hoveredHotspot === 'sensor' ? 'SECURE TELEMETRY NODE' : 'PNEUMATIC ACTUATOR'}
                  </h5>
                  <p style={{ color: '#FAF8F5', fontSize: '0.82rem', margin: 0, lineHeight: '1.4' }}>
                    {hoveredHotspot === 'sensor'
                      ? 'Status: ONLINE | Vibration: 0.12mm/s | Count Profiler: PASS'
                      : 'Load: 6.4 Bar | Flow Rate: 12.8 L/s | Seal Integrity: 100%'}
                  </p>
                </div>
              )}
            </div>

            {/* Description & Core Highlights */}
            <div className="viewport-caption-details" style={{ marginTop: '24px', textAlign: 'left' }}>
              <p className="info-description" style={{ fontSize: '1rem', lineHeight: '1.7', color: 'var(--text-secondary)' }}>
                {currentFacility.description}
              </p>
              
              <div style={{ marginTop: '20px', display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {currentFacility.highlights && currentFacility.highlights.map((highlight, idx) => (
                  <span 
                    key={idx} 
                    style={{ 
                      fontSize: '0.78rem', 
                      background: 'rgba(184, 144, 71, 0.08)', 
                      color: 'var(--accent)', 
                      border: '1px solid rgba(184, 144, 71, 0.25)', 
                      padding: '6px 12px', 
                      borderRadius: '30px' 
                    }}
                  >
                    {highlight}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Spec Table & Real-Time Sensor Telemetry */}
          <div className="facilities-info-slate-side">
            <div className="editorial-info-pane" style={{ background: 'rgba(22, 21, 19, 0.45)', border: '1px solid var(--border-color)', borderRadius: '16px', padding: '32px' }}>
              <div className="info-pane-header" style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'monospace', fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '16px' }}>
                <span className="info-location" style={{ color: 'var(--accent)' }}>{currentFacility.location}</span>
                <span className="info-coords">{currentFacility.coordinates}</span>
              </div>

              <h3 className="info-title" style={{ fontSize: '1.8rem', fontFamily: 'var(--font-serif)', color: '#FAF8F5', marginBottom: '24px' }}>
                {currentFacility.title}
              </h3>

              {/* Technical Specifications */}
              <div className="editorial-specs-section" style={{ marginBottom: '28px' }}>
                <span className="editorial-section-label" style={{ fontSize: '0.72rem', letterSpacing: '0.15em', color: 'var(--text-muted)', display: 'block', marginBottom: '14px' }}>
                  TECHNICAL SPECIFICATIONS
                </span>
                <div className="editorial-specs-list" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {Object.entries(currentFacility.specs).map(([key, val]) => (
                    <div className="editorial-spec-row" key={key} style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '8px' }}>
                      <span className="spec-label" style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>{key}</span>
                      <span className="spec-value" style={{ color: '#FAF8F5', fontSize: '0.85rem', fontWeight: 500 }}>{val}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Operational State Index */}
              <div className="editorial-metrics-section">
                <span className="editorial-section-label" style={{ fontSize: '0.72rem', letterSpacing: '0.15em', color: 'var(--text-muted)', display: 'block', marginBottom: '14px' }}>
                  OPERATIONAL STATE INDEX
                </span>
                <div className="editorial-metrics-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  {currentFacility.metrics.map((metric, i) => (
                    <div className="editorial-metric-card" key={i} style={{ background: '#161513', border: '1px solid rgba(255,255,255,0.05)', padding: '16px', borderRadius: '10px' }}>
                      <span className="metric-large-number" style={{ display: 'block', fontSize: '1.6rem', color: 'var(--accent)', fontFamily: 'var(--font-serif)', fontWeight: 600 }}>
                        {metric.value}%
                      </span>
                      <span className="metric-label-text" style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                        {metric.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mock Telemetry Sinus Graph Stream */}
              <div className="dashboard-sine-stream">
                <div className="dashboard-sine-header">
                  <span>
                    <span className="facilities-pulse-led"></span>
                    LIVE TELEMETRY STREAM
                  </span>
                  <span>SYS_HEALTH: OPTIMAL</span>
                </div>
                <div style={{ background: '#161513', borderRadius: '8px', padding: '12px', border: '1px solid rgba(255,255,255,0.03)' }}>
                  <svg viewBox="0 0 100 25" width="100%" height="32" style={{ display: 'block', overflow: 'visible' }}>
                    <path
                      d="M0,12 L10,12 L13,2 L16,22 L19,12 L35,12 L37,8 L39,16 L41,12 L60,12 L63,3 L66,21 L69,12 L80,12 L82,10 L84,14 L86,12 L100,12"
                      fill="none"
                      stroke="var(--accent)"
                      strokeWidth="1.2"
                      strokeDasharray="150"
                      style={{
                        strokeDashoffset: 150,
                        animation: 'sinusDash 3s linear infinite'
                      }}
                    />
                  </svg>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* TIMELINE HUB: Selector Navigation */}
        <div className="facilities-panoramic-nav" style={{ marginTop: '60px', borderTop: '1px solid var(--border-color)', paddingTop: '40px' }}>
          <span className="editorial-section-label" style={{ textAlign: 'center', marginBottom: '24px', display: 'block', fontSize: '0.72rem', letterSpacing: '0.15em' }}>
            OPERATIONAL DIVISIONS SELECTOR
          </span>
          <div className="editorial-nav-tabs" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '12px' }}>
            {FACILITY_STEPS.map((step, idx) => {
              const isActive = activeFacilityIndex === idx;
              return (
                <button
                  key={idx}
                  className={`editorial-tab-btn ${isActive ? 'active' : ''}`}
                  style={{
                    background: isActive ? 'var(--accent)' : 'rgba(22, 21, 19, 0.45)',
                    color: isActive ? '#0E0D0B' : 'var(--text-secondary)',
                    border: '1px solid var(--border-color)',
                    padding: '12px 24px',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    transition: 'all 0.3s ease'
                  }}
                  onClick={() => {
                    setActiveFacilityIndex(idx);
                    setHoveredHotspot(null);
                  }}
                >
                  <span style={{ fontSize: '0.75rem', opacity: 0.8, fontFamily: 'monospace' }}>0{idx + 1}.</span>
                  <span style={{ fontWeight: 600, fontSize: '0.85rem' }}>{step.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* B2B Virtual Tour Request */}
        <div className="facilities-tour-booking-box" style={{ marginTop: '80px', background: 'rgba(22, 21, 19, 0.45)', border: '1px solid var(--border-color)', borderRadius: '20px', padding: '40px' }}>
          <h3 className="tour-box-title" style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', color: '#FAF8F5', marginBottom: '12px', textAlign: 'center' }}>
            Request B2B Virtual Factory Audit
          </h3>
          <p className="tour-box-desc" style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6', maxWidth: '640px', margin: '0 auto 28px', textAlign: 'center' }}>
            Arrange a real-time secure telemetry walkthrough or scheduling consult of our Madurai spinning and weaving plants with our operational directors.
          </p>
          
          <form className="tour-booking-form" style={{ maxWidth: '720px', margin: '0 auto' }} onSubmit={(e) => { e.preventDefault(); alert("B2B Factory Audit Request Submitted. Our team will contact you shortly."); }}>
            <div className="tour-form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
              <div className="form-group" style={{ display: 'flex', flexDirection: 'column', gap: '6px', textAlign: 'left' }}>
                <label style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', fontWeight: 600 }}>Corporate Name</label>
                <input type="text" placeholder="e.g. Standard Textiles Inc." required style={{ background: '#161513', border: '1px solid var(--border-color)', color: '#FAF8F5', padding: '12px 16px', borderRadius: '8px', fontSize: '0.88rem' }} />
              </div>
              <div className="form-group" style={{ display: 'flex', flexDirection: 'column', gap: '6px', textAlign: 'left' }}>
                <label style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', fontWeight: 600 }}>Work Email</label>
                <input type="email" placeholder="e.g. buyer@company.com" required style={{ background: '#161513', border: '1px solid var(--border-color)', color: '#FAF8F5', padding: '12px 16px', borderRadius: '8px', fontSize: '0.88rem' }} />
              </div>
            </div>
            
            <div className="form-group" style={{ display: 'flex', flexDirection: 'column', gap: '6px', textAlign: 'left', marginBottom: '28px' }}>
              <label style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', fontWeight: 600 }}>Audited Division</label>
              <select style={{ background: '#161513', border: '1px solid var(--border-color)', color: '#FAF8F5', padding: '12px 16px', borderRadius: '8px', fontSize: '0.88rem', cursor: 'pointer', width: '100%' }}>
                <option>Perungudi Spinning Mill (Madurai)</option>
                <option>Sivagangai Air-Jet Looms (Weaving)</option>
                <option>Continuous Processing (ZLD Wet Dyeing)</option>
                <option>Precision Stitching & Packing Complex</option>
              </select>
            </div>
            
            <div style={{ textAlign: 'center' }}>
              <button type="submit" className="tour-submit-btn" style={{ background: 'var(--accent)', color: '#0E0D0B', border: 'none', padding: '14px 32px', borderRadius: '8px', fontSize: '0.9rem', fontWeight: 700, cursor: 'pointer', transition: 'transform 0.2s ease' }}>
                Schedule Operations Audit
              </button>
            </div>
          </form>
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

export default FacilitiesPage;
