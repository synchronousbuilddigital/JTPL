import React from 'react';

const Quality = () => {
  return (
    <section id="quality" className="quality-redesign-section section-padding">
      <div className="container">
        {/* Section Header */}
        <div className="text-center" style={{ marginBottom: '56px' }}>
          <span className="badge" style={{ color: 'var(--accent)', letterSpacing: '0.22em', textTransform: 'uppercase', fontSize: '0.75rem', fontWeight: 700 }}>
            Uncompromising Standards
          </span>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.2rem, 3.8vw, 2.8rem)', fontWeight: 500, color: '#FAF8F5', marginTop: '8px' }}>
            Quality Control Center
          </h2>
        </div>

        {/* 3-Column Grid */}
        <div className="quality-grid-3col">
          
          {/* Card 1: Compliance */}
          <div className="quality-card-ref">
            <div className="quality-card-top">
              <span className="quality-card-num">01</span>
              <div className="quality-card-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <polyline points="9 11 11 13 15 9" />
                </svg>
              </div>
              <h3 className="quality-card-title">Compliance</h3>
              <p className="quality-card-desc">
                Lean manufacturing drives production efficiency. Traffic light systems in sewing lines keep every stage visible and audit-ready at all times.
              </p>
            </div>
            <div>
              <div className="quality-card-divider"></div>
              <div className="quality-card-footer">
                <span className="quality-card-pct">99.8%</span>
                <span>AQL compliant</span>
              </div>
            </div>
          </div>

          {/* Card 2: Commitment */}
          <div className="quality-card-ref">
            <div className="quality-card-top">
              <span className="quality-card-num">02</span>
              <div className="quality-card-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="8" r="5" />
                  <path d="M9 12.7L6 22l6-3 6 3-3-9.3" />
                </svg>
              </div>
              <h3 className="quality-card-title">Commitment</h3>
              <p className="quality-card-desc">
                A fully equipped testing laboratory covers everything from yarn to packing materials, backed by scheduled audits at every production stage.
              </p>
            </div>
            <div>
              <div className="quality-card-divider"></div>
              <div className="quality-card-footer">
                <span className="quality-card-pct">98.5%</span>
                <span>SOP compliance index</span>
              </div>
            </div>
          </div>

          {/* Card 3: Continuous Improvement */}
          <div className="quality-card-ref">
            <div className="quality-card-top">
              <span className="quality-card-num">03</span>
              <div className="quality-card-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 1l4 4-4 4" />
                  <path d="M3 5h18" />
                  <path d="M7 23l-4-4 4-4" />
                  <path d="M21 19H3" />
                </svg>
              </div>
              <h3 className="quality-card-title">Continuous improvement</h3>
              <p className="quality-card-desc">
                Ongoing skill development and operational diagnostics feed a consistent refinement cycle, raising production consistency bi-weekly.
              </p>
            </div>
            <div>
              <div className="quality-card-divider"></div>
              <div className="quality-card-footer">
                <span className="quality-card-pct">99.2%</span>
                <span>Process refinement loop</span>
              </div>
            </div>
          </div>

        </div>



      </div>
    </section>
  );
};

export default Quality;
