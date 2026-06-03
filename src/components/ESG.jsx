import React from 'react';
import { ESG_INITIATIVES } from '../constants/data';

const ESG = ({ activeEsgIndex, setActiveEsgIndex }) => {
  return (
    <section id="responsibility" className="section-padding" style={{ borderBottom: '1px solid var(--border-color)', transition: 'background-color var(--transition)' }}>
      <div className="container">
        <div className="text-center reveal-on-scroll reveal-up" style={{ marginBottom: '64px' }}>
          <span className="badge">Ethical & Green Commitment</span>
          <h2>We are responsible</h2>
          <p className="text-secondary" style={{ maxWidth: '650px', margin: '16px auto 0' }}>
            We orchestrate our entire B2B textile pipeline with deep ecological stewardship and community care.
          </p>
        </div>

        <div className="esg-dashboard-container reveal-on-scroll reveal-up delay-150">
          {/* Left 3 Pills */}
          <div className="esg-pills-col left-pills">
            {ESG_INITIATIVES.slice(0, 3).map((item, idx) => (
              <div
                key={item.id}
                className={`esg-interactive-pill ${activeEsgIndex === idx ? 'active' : ''}`}
                onMouseEnter={() => setActiveEsgIndex(idx)}
              >
                <div className="pill-icon-frame">{item.icon}</div>
                <div className="pill-text-frame">
                  <h4>{item.title}</h4>
                  <span className="pill-subtitle">{item.subtitle}</span>
                </div>
                <div className="pill-laser-line"></div>
              </div>
            ))}
          </div>

          {/* Central Orbital Pulse Emblem */}
          <div className="esg-center-hub">
            <div className={`esg-orbit-rim pulse-${ESG_INITIATIVES[activeEsgIndex].id}`}>
              <div className="esg-orbit-rim-dashed"></div>
              <div className="esg-core-emblem">
                <span className="esg-emblem-logo">JTPL</span>
                <span className="esg-emblem-indicator">{ESG_INITIATIVES[activeEsgIndex].label}</span>
              </div>
            </div>
          </div>

          {/* Right 3 Pills */}
          <div className="esg-pills-col right-pills">
            {ESG_INITIATIVES.slice(3, 6).map((item, idx) => {
              const globalIdx = idx + 3;
              return (
                <div
                  key={item.id}
                  className={`esg-interactive-pill ${activeEsgIndex === globalIdx ? 'active' : ''}`}
                  onMouseEnter={() => setActiveEsgIndex(globalIdx)}
                >
                  <div className="pill-icon-frame">{item.icon}</div>
                  <div className="pill-text-frame">
                    <h4>{item.title}</h4>
                    <span className="pill-subtitle">{item.subtitle}</span>
                  </div>
                  <div className="pill-laser-line"></div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Active Detail Showcase Panel */}
        <div className="esg-detail-panel reveal-on-scroll reveal-up delay-300">
          <div className="esg-detail-content">
            <div className="esg-detail-meta">
              <span className="badge-meta">INITIATIVE 0{activeEsgIndex + 1}</span>
              <h3>{ESG_INITIATIVES[activeEsgIndex].title} — {ESG_INITIATIVES[activeEsgIndex].subtitle}</h3>
            </div>
            <p className="esg-detail-desc">{ESG_INITIATIVES[activeEsgIndex].description}</p>
            <div className="esg-detail-metric">
              <span className="metric-label">VERIFIED ESG IMPACT</span>
              <span className="metric-value">{ESG_INITIATIVES[activeEsgIndex].metric}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ESG;
