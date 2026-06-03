import React from 'react';
import qualityLabTest from '../assets/quality_lab_test.png';
import qualityCommitmentActual from '../assets/quality_commitment_actual.png';
import qualityWarehouseActual from '../assets/quality_warehouse_actual.png';
import qualityComplianceActual from '../assets/quality_compliance_actual.png';
import qualityContinuousImprovementActual from '../assets/quality_continuous_improvement_actual.png';

const QualityPage = ({ setCurrentPage }) => {
  return (
    <section className="quality-page-wrapper">
      <div className="container">
        
        {/* Breadcrumb Path */}
        <div style={{ marginBottom: '24px', fontFamily: 'monospace', fontSize: '0.85rem', letterSpacing: '0.1em', textAlign: 'left' }}>
          <span style={{ color: 'var(--text-muted)', cursor: 'pointer' }} onClick={() => { setCurrentPage('home'); window.scrollTo(0, 0); }}>/</span>
          <span style={{ color: 'var(--accent)', marginLeft: '6px' }}>quality</span>
        </div>

        {/* Section 1: Hero split banner */}
        <div className="about-page-hero-grid" style={{ marginBottom: '64px' }}>
          <div>
            <span className="badge" style={{ color: 'var(--accent)', letterSpacing: '0.22em', textTransform: 'uppercase', fontSize: '0.75rem', fontWeight: 700 }}>
              Quality: We Are Responsible
            </span>
            <h1 style={{ marginTop: '12px', fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.3rem, 4.5vw, 3.6rem)', color: 'var(--accent)', lineHeight: '1.15' }}>
              Quality Policy
            </h1>
            <p className="text-secondary" style={{ fontSize: '1.1rem', lineHeight: '1.75', marginTop: '20px', maxWidth: '640px' }}>
              We embed uncompromising standards across our entire supply chain. From the selection of organic cotton fiber to precision spinning, automated air-jet weaving, wet processing, and packing, every stage is audited for compliance.
            </p>
            <p className="text-secondary" style={{ fontSize: '0.95rem', lineHeight: '1.7', marginTop: '16px', maxWidth: '640px', color: 'var(--text-muted)' }}>
              Our in-house quality assurance laboratory verifies weave density, tensile strength, GSM variance, and color fastness index parameters continuously.
            </p>
          </div>
          <div className="about-hero-image-frame" style={{ border: '1px solid rgba(184, 144, 71, 0.2)', boxShadow: 'var(--gold-glow)' }}>
            <img src={qualityLabTest} alt="Automated laser inspection scanning towels" style={{ objectPosition: 'center' }} />
            <div className="about-hero-image-overlay"></div>
          </div>
        </div>

        {/* 4-Column Grid */}
        <div className="quality-page-grid-4col">
          
          {/* Card 1: Compliance */}
          <div className="quality-page-card">
            <div>
              <div className="quality-card-img-wrapper">
                <img src={qualityComplianceActual} alt="Lean manufacturing line compliance" className="quality-card-header-img" />
              </div>
              <div className="quality-page-card-icon" style={{ marginBottom: '16px' }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <polyline points="9 11 11 13 15 9" />
                </svg>
              </div>
              <h3 className="quality-page-card-title">Compliance</h3>
              <ul className="quality-page-card-list">
                <li>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Lean Manufacturing for production efficiency</span>
                </li>
                <li>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Traffic light system in sewing lines</span>
                </li>
                <li>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Quality compliance across complete supply chain and Product</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Card 2: Commitment */}
          <div className="quality-page-card">
            <div>
              <div className="quality-card-img-wrapper">
                <img src={qualityCommitmentActual} alt="Textile quality audits and folding inspection lines" className="quality-card-header-img" />
              </div>
              <div className="quality-page-card-icon" style={{ marginBottom: '16px' }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="8" r="5" />
                  <path d="M9 12.7L6 22l6-3 6 3-3-9.3" />
                </svg>
              </div>
              <h3 className="quality-page-card-title">Commitment</h3>
              <ul className="quality-page-card-list">
                <li>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Testing laboratory equipped with all facilities right from yarn till packing materials</span>
                </li>
                <li>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Audits and Inspections to assure process control at all levels</span>
                </li>
                <li>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Uncompromising commitment to Quality</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Card 3: Continuous Improvement */}
          <div className="quality-page-card">
            <div>
              <div className="quality-card-img-wrapper">
                <img src={qualityContinuousImprovementActual} alt="Fabric roll stacks on inspection tables" className="quality-card-header-img" />
              </div>
              <div className="quality-page-card-icon" style={{ marginBottom: '16px' }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 1l4 4-4 4" />
                  <path d="M3 5h18" />
                  <path d="M7 23l-4-4 4-4" />
                  <path d="M21 19H3" />
                </svg>
              </div>
              <h3 className="quality-page-card-title">Continuous Improvement</h3>
              <ul className="quality-page-card-list">
                <li>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Continuously developing skills to improve efficiency</span>
                </li>
                <li>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Consistent performance by “Analyze, Refine, Improve”</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Card 4: Warehouse Management */}
          <div className="quality-page-card">
            <div>
              <div className="quality-card-img-wrapper">
                <img src={qualityWarehouseActual} alt="Logistical warehousing and cotton storage bales" className="quality-card-header-img" />
              </div>
              <div className="quality-page-card-icon" style={{ marginBottom: '16px' }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                  <line x1="12" y1="22.08" x2="12" y2="12" />
                </svg>
              </div>
              <h3 className="quality-page-card-title">Warehouse Management</h3>
              <ul className="quality-page-card-list">
                <li>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Fabric racking system helps to store 2 million linear meters</span>
                </li>
                <li>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Finished Goods Warehouse capable to store for 30 containers</span>
                </li>
              </ul>
            </div>
          </div>

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

export default QualityPage;
