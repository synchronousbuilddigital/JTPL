import React from 'react';

const CareersPage = ({ setCurrentPage }) => {
  return (
    <section className="responsibility-page-wrapper">
      <div className="container">

        {/* Breadcrumb Path */}
        <div style={{ marginBottom: '24px', fontFamily: 'monospace', fontSize: '0.85rem', letterSpacing: '0.1em', textAlign: 'left' }}>
          <span style={{ color: 'var(--text-muted)', cursor: 'pointer' }} onClick={() => { setCurrentPage('home'); window.scrollTo(0, 0); }}>/</span>
          <span style={{ color: 'var(--accent)', marginLeft: '6px' }}>careers</span>
        </div>

        {/* Section 1: Hero Banner */}
        <div className="about-page-hero-grid" style={{ marginBottom: '64px' }}>
          <div>
            <span className="badge" style={{ color: 'var(--accent)', letterSpacing: '0.22em', textTransform: 'uppercase', fontSize: '0.75rem', fontWeight: 700 }}>
              Join Our Team
            </span>
            <h1 style={{ marginTop: '12px', fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.9rem, 4.5vw, 3.4rem)', color: 'var(--accent)', lineHeight: '1.15' }}>
              Careers at JTPL
            </h1>
            <p className="text-secondary" style={{ fontSize: '1.05rem', lineHeight: '1.7', marginTop: '20px', maxWidth: '640px' }}>
              Jasmine Towels Pvt. Ltd. is an equal opportunity employer. We focus primarily on the candidate’s skill sets, experience, and ability to work in teams. We provide a congenial work environment and practice an enlightened people management system.
            </p>
            <p className="text-secondary" style={{ fontSize: '0.95rem', lineHeight: '1.65', marginTop: '16px', maxWidth: '640px', color: 'var(--text-muted)' }}>
              We have earned a global reputation for our product quality and provide constant training to maintain and enhance the same. We welcome applications from qualified people who have an earnest commitment to succeed.
            </p>
          </div>

          {/* Telemetry HUD and CV Submission Card */}
          <div className="careers-callout-box">
            <div className="careers-callout-header">
              <span className="badge" style={{ color: 'var(--accent)', fontSize: '0.68rem' }}>
                STATUS // ACTIVE HIRING
              </span>
              <span className="careers-sys-tag">
                SYS // HR_RECRUITMENT
              </span>
            </div>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', color: 'var(--text-primary)', marginBottom: '16px' }}>
              Submit Your Profile
            </h3>
            <p className="text-secondary" style={{ fontSize: '0.88rem', lineHeight: '1.6', marginBottom: '24px' }}>
              Candidates could post their bio-data clearly indicating the position that they have applied for. Our HR team will process the application and respond to you immediately.
            </p>

            <a
              href="mailto:careers@jasminetowels.com?subject=Job Application - Jasmine Towels Pvt. Ltd."
              className="btn btn-primary"
              style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px', textDecoration: 'none', padding: '14px 28px', borderRadius: '8px', fontWeight: 650 }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              Send us your CV
            </a>
          </div>
        </div>

        {/* Section 2: Values & Culture pillars */}
        <div style={{ marginTop: '64px' }}>
          <div className="text-center" style={{ marginBottom: '40px' }}>
            <span className="badge">Our Philosophy</span>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', marginTop: '8px' }}>Why Jasmine?</h2>
          </div>

          <div className="careers-grid">

            <div className="careers-card">
              <div style={{ color: 'var(--accent)', marginBottom: '16px' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h4 style={{ color: 'var(--text-primary)', marginBottom: '10px', fontSize: '1.15rem' }}>Equal Opportunity</h4>
              <p className="text-secondary" style={{ fontSize: '0.88rem', lineHeight: '1.6' }}>
                We focus primarily on the candidate’s skill sets, experience, and ability to work in teams without bias.
              </p>
            </div>

            <div className="careers-card">
              <div style={{ color: 'var(--accent)', marginBottom: '16px' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h4 style={{ color: 'var(--text-primary)', marginBottom: '10px', fontSize: '1.15rem' }}>Congenial Environment</h4>
              <p className="text-secondary" style={{ fontSize: '0.88rem', lineHeight: '1.6' }}>
                We nurture safe, collaborative workspaces that support personal growth and high-performance synergy.
              </p>
            </div>

            <div className="careers-card">
              <div style={{ color: 'var(--accent)', marginBottom: '16px' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                </svg>
              </div>
              <h4 style={{ color: 'var(--text-primary)', marginBottom: '10px', fontSize: '1.15rem' }}>Constant Training</h4>
              <p className="text-secondary" style={{ fontSize: '0.88rem', lineHeight: '1.6' }}>
                Continuous training and upskilling programs are conducted to maintain our high standard of global product quality.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default CareersPage;
