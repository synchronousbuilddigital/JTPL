import React from 'react';
import responsibilityGreenFactory from '../assets/responsibility_green_factory.png';
import responsibilitySolarPanels from '../assets/responsibility_solar_panels.png';
import responsibilityWaterGrove from '../assets/responsibility_water_grove.png';

const ResponsibilityPage = ({ setCurrentPage }) => {
  return (
    <section className="responsibility-page-wrapper">
      <div className="container">
        
        {/* Breadcrumb Path */}
        <div style={{ marginBottom: '24px', fontFamily: 'monospace', fontSize: '0.85rem', letterSpacing: '0.1em', textAlign: 'left' }}>
          <span style={{ color: 'var(--text-muted)', cursor: 'pointer' }} onClick={() => { setCurrentPage('home'); window.scrollTo(0, 0); }}>/</span>
          <span style={{ color: 'var(--accent)', marginLeft: '6px' }}>responsibility</span>
        </div>

        {/* Section 1: Hero Banner */}
        <div className="about-page-hero-grid" style={{ marginBottom: '64px' }}>
          <div>
            <span className="badge" style={{ color: 'var(--accent)', letterSpacing: '0.22em', textTransform: 'uppercase', fontSize: '0.75rem', fontWeight: 700 }}>
              Ethical & Green Commitment
            </span>
            <h1 style={{ marginTop: '12px', fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.3rem, 4.5vw, 3.6rem)', color: 'var(--accent)', lineHeight: '1.15' }}>
              We Are Responsible
            </h1>
            <p className="text-secondary" style={{ fontSize: '1.1rem', lineHeight: '1.75', marginTop: '20px', maxWidth: '640px' }}>
              Sustainability is not an afterthought; it is woven into the very fabric of our operations. From protecting our people to investing in clean energy and zero-waste water cycles, we strive to build a future-positive B2B pipeline.
            </p>
            <p className="text-secondary" style={{ fontSize: '0.95rem', lineHeight: '1.7', marginTop: '16px', maxWidth: '640px', color: 'var(--text-muted)' }}>
              Our Madurai manufacturing plant operates under GOTS, Oeko-Tex, and ISO audits to ensure absolute compliance with global ecological standards.
            </p>
          </div>
          <div className="about-hero-image-frame" style={{ border: '1px solid rgba(184, 144, 71, 0.2)', boxShadow: 'var(--gold-glow)' }}>
            <img src={responsibilityGreenFactory} alt="Premium solar-powered green textile factory in Madurai" style={{ objectPosition: 'center' }} />
            <div className="about-hero-image-overlay"></div>
          </div>
        </div>

        {/* Section 2: Three Main Pillars Grid */}
        <div className="responsibility-pillars-stack" style={{ display: 'flex', flexDirection: 'column', gap: '56px', marginTop: '48px' }}>
          
          {/* Pillar 1: People */}
          <div className="responsibility-row" style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '48px', alignItems: 'center' }}>
            <div className="responsibility-content">
              <span className="badge" style={{ color: 'var(--accent)', fontSize: '0.7rem' }}>PILLAR 01 // HUMAN CAPITAL</span>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', marginTop: '8px', color: 'var(--text-primary)' }}>Our People</h2>
              <p className="text-secondary" style={{ fontSize: '1rem', lineHeight: '1.7', marginTop: '16px' }}>
                We believe people are the single best competitive advantage a company has and we cannot replicate them. Providing a safe, fair, and enriching environment is our top priority. We support our workforce with essential facilities:
              </p>
              
              <div className="responsibility-checklist" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginTop: '24px' }}>
                <div className="checklist-item" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-color)', borderRadius: '10px', padding: '16px', display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <div style={{ color: 'var(--accent)', marginTop: '2px' }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <div>
                    <h4 style={{ fontSize: '0.9rem', color: 'var(--text-primary)', margin: 0 }}>Free Transport</h4>
                    <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', margin: '4px 0 0 0' }}>Safe transit options for all operational shifts.</p>
                  </div>
                </div>
                
                <div className="checklist-item" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-color)', borderRadius: '10px', padding: '16px', display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <div style={{ color: 'var(--accent)', marginTop: '2px' }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <div>
                    <h4 style={{ fontSize: '0.9rem', color: 'var(--text-primary)', margin: 0 }}>Free Healthcare</h4>
                    <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', margin: '4px 0 0 0' }}>Comprehensive medical coverage and on-site checkups.</p>
                  </div>
                </div>

                <div className="checklist-item" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-color)', borderRadius: '10px', padding: '16px', display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <div style={{ color: 'var(--accent)', marginTop: '2px' }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <div>
                    <h4 style={{ fontSize: '0.9rem', color: 'var(--text-primary)', margin: 0 }}>Subsidised Food</h4>
                    <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', margin: '4px 0 0 0' }}>Nutritious, high-quality meals served daily in our canteens.</p>
                  </div>
                </div>

                <div className="checklist-item" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-color)', borderRadius: '10px', padding: '16px', display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <div style={{ color: 'var(--accent)', marginTop: '2px' }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <div>
                    <h4 style={{ fontSize: '0.9rem', color: 'var(--text-primary)', margin: 0 }}>Child Education</h4>
                    <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', margin: '4px 0 0 0' }}>Academic scholarships and learning aids for employees' children.</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Visual Callout */}
            <div className="responsibility-callout-box" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-color)', borderRadius: '16px', padding: '36px', position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div style={{ position: 'absolute', top: '24px', right: '30px', fontFamily: 'monospace', fontSize: '2rem', color: 'rgba(184, 144, 71, 0.12)', fontWeight: 700 }}>JTPL</div>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.35rem', color: 'var(--accent)' }}>Supporting our communities</h3>
              <p className="text-secondary" style={{ fontSize: '0.9rem', lineHeight: '1.6', marginTop: '12px' }}>
                "By investing in transportation, medical safety, healthy meals, and child education, we establish a robust community standard that directly boosts quality, care, and consistency in our global B2B textile export shipments."
              </p>
            </div>
          </div>

          <div style={{ height: '1px', background: 'var(--border-color)' }}></div>

          {/* Pillar 2: Solar Power */}
          <div className="responsibility-row" style={{ display: 'grid', gridTemplateColumns: '0.9fr 1.1fr', gap: '48px', alignItems: 'center' }}>
            
            {/* Solar Panels Image Frame with responsive class */}
            <div className="responsibility-image-frame">
              <img src={responsibilitySolarPanels} alt="Terracotta rooftop solar panel installation at Jasmine Towels facility" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div className="about-hero-image-overlay" style={{ background: 'linear-gradient(to top, rgba(10, 10, 10, 0.8), transparent)', position: 'absolute', inset: 0 }}></div>
              <div style={{ position: 'absolute', bottom: '24px', left: '24px', zIndex: 2 }}>
                <span className="badge" style={{ color: '#22c55e', border: '1px solid rgba(34, 197, 94, 0.3)', background: 'rgba(34, 197, 94, 0.05)', fontSize: '0.72rem' }}>ACTIVE GENERATION</span>
                <h4 style={{ color: '#fff', fontSize: '1.15rem', marginTop: '8px', marginBottom: '2px', fontFamily: 'var(--font-serif)' }}>Terracotta Rooftop Arrays</h4>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.75rem', margin: 0 }}>Madurai Mill #2 Solar Grid Integration</p>
              </div>
            </div>

            <div className="responsibility-content">
              <span className="badge" style={{ color: 'var(--accent)', fontSize: '0.7rem' }}>PILLAR 02 // CLEAN POWER</span>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', marginTop: '8px', color: 'var(--text-primary)' }}>Solar Power</h2>
              <p className="text-secondary" style={{ fontSize: '1rem', lineHeight: '1.7', marginTop: '16px' }}>
                We are actively moving away from traditional grid fossil energy. By integrating solar roof arrays and subscribing to local utility solar grids, we ensure that the thermal and kinetic operations in spinning, weaving, and sewing lines run on clean electricity.
              </p>
              <p className="text-secondary" style={{ fontSize: '0.9rem', lineHeight: '1.6', marginTop: '12px', color: 'var(--text-muted)' }}>
                This shift protects local air quality, decreases regional resource pressure, and yields sustainable certificates that B2B clients can verify for their global ESG audits.
              </p>
            </div>
          </div>

          <div style={{ height: '1px', background: 'var(--border-color)' }}></div>

          {/* Pillar 3: Water Management */}
          <div className="responsibility-row" style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '48px', alignItems: 'center' }}>
            <div className="responsibility-content">
              <span className="badge" style={{ color: 'var(--accent)', fontSize: '0.7rem' }}>PILLAR 03 // ZERO SPILLAGE</span>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', marginTop: '8px', color: 'var(--text-primary)' }}>Water Management to Go Green</h2>
              <p className="text-secondary" style={{ fontSize: '1rem', lineHeight: '1.7', marginTop: '16px' }}>
                Textile processing is traditionally water-intensive. To eliminate our footprint, we have integrated a state-of-the-art **Zero Liquid Discharge (ZLD)** plant in our wet-dyeing facility.
              </p>
              <p className="text-secondary" style={{ fontSize: '0.9rem', lineHeight: '1.65', marginTop: '12px', color: 'var(--text-muted)' }}>
                This complex system recycles 99.8% of process water. All dyes, chemical salts, and waste materials are recovered, crystallized, and stored securely, ensuring that zero toxic effluent runs off into Madurai's local aquifers.
              </p>
            </div>

            {/* Water Grove Image Frame with responsive class */}
            <div className="responsibility-image-frame">
              <img src={responsibilityWaterGrove} alt="Eco irrigated palm groves with peacocks near Madurai facility" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div className="about-hero-image-overlay" style={{ background: 'linear-gradient(to top, rgba(10, 10, 10, 0.8), transparent)', position: 'absolute', inset: 0 }}></div>
              <div style={{ position: 'absolute', bottom: '24px', left: '24px', zIndex: 2 }}>
                <span className="badge" style={{ color: '#22c55e', border: '1px solid rgba(34, 197, 94, 0.3)', background: 'rgba(34, 197, 94, 0.05)', fontSize: '0.72rem' }}>ECO-RESTORATION</span>
                <h4 style={{ color: '#fff', fontSize: '1.15rem', marginTop: '8px', marginBottom: '2px', fontFamily: 'var(--font-serif)' }}>Zero Aquifer Footprint</h4>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.75rem', margin: 0 }}>Recycled Water Supporting Local Peacocks & Palms</p>
              </div>
            </div>
          </div>

        </div>

        {/* Back to Home CTA */}
        <div style={{ textAlign: 'center', marginTop: '72px', borderTop: '1px solid var(--border-color)', paddingTop: '48px', marginBottom: '32px' }}>
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

export default ResponsibilityPage;
