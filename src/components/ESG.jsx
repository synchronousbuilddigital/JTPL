import React, { useState, useEffect, useRef } from 'react';
import { ESG_INITIATIVES } from '../constants/data';

const ESG = ({ activeEsgIndex, setActiveEsgIndex }) => {
  const [allCoords, setAllCoords] = useState([]);
  const [hoveredEsgIndex, setHoveredEsgIndex] = useState(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const updateCoords = () => {
      if (!containerRef.current) return;
      const containerRect = containerRef.current.getBoundingClientRect();
      const centerHub = containerRef.current.querySelector('.esg-orbit-rim');
      if (!centerHub) return;

      const hubRect = centerHub.getBoundingClientRect();
      const hubCenterX = (hubRect.left + hubRect.width / 2) - containerRect.left;
      const hubCenterY = (hubRect.top + hubRect.height / 2) - containerRect.top;
      const hubRadius = hubRect.width / 2;

      const coordsArray = [];
      const pills = containerRef.current.querySelectorAll('.esg-interactive-pill');
      
      pills.forEach((pill, idx) => {
        const pillRect = pill.getBoundingClientRect();
        const isLeftPill = idx < 3;

        const startX = isLeftPill
          ? (pillRect.right - containerRect.left)
          : (pillRect.left - containerRect.left);
        const startY = (pillRect.top + pillRect.height / 2) - containerRect.top;

        const dx = startX - hubCenterX;
        const dy = startY - hubCenterY;
        const angle = Math.atan2(dy, dx);

        const endX = hubCenterX + hubRadius * Math.cos(angle);
        const endY = hubCenterY + hubRadius * Math.sin(angle);

        const pathD = `M ${startX} ${startY} C ${(startX + endX) / 2} ${startY}, ${(startX + endX) / 2} ${endY}, ${endX} ${endY}`;

        coordsArray.push({ startX, startY, endX, endY, isLeftPill, pathD });
      });

      setAllCoords(coordsArray);
    };

    const timer = setTimeout(updateCoords, 100);

    window.addEventListener('resize', updateCoords);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', updateCoords);
    };
  }, [activeEsgIndex]);

  const currentDisplayIdx = hoveredEsgIndex !== null ? hoveredEsgIndex : activeEsgIndex;

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

        <div ref={containerRef} className="esg-dashboard-container reveal-on-scroll reveal-up delay-150">
          {/* Dynamic Interactive SVG Connections */}
          {allCoords.length > 0 && (
            <svg className="esg-connection-svg">
              {allCoords.map((coords, idx) => {
                const isHovered = hoveredEsgIndex === idx;
                const isActive = activeEsgIndex === idx;
                return (
                  <g key={idx}>
                    {/* Background Connection Path - Darkened for better visibility */}
                    <path
                      d={coords.pathD}
                      stroke={isHovered ? "var(--accent)" : isActive ? "rgba(184, 144, 71, 0.75)" : "rgba(184, 144, 71, 0.55)"}
                      strokeWidth={isHovered ? "3" : isActive ? "2.2" : "1.6"}
                      fill="none"
                      strokeLinecap="round"
                      style={{
                        transition: 'stroke 0.4s ease, stroke-width 0.4s ease'
                      }}
                    />

                    {/* Active Traveling Dot and Pulsing Ending Dot - ONLY runs when hovered */}
                    {isHovered && (
                      <>
                        <circle
                          r="4"
                          fill="var(--accent)"
                          style={{
                            offsetPath: `path("${coords.pathD}")`,
                            animation: 'travelAlongPath 1.6s infinite cubic-bezier(0.25, 0.1, 0.25, 1)'
                          }}
                          className="esg-conn-travel-dot"
                        />
                        <circle
                          cx={coords.endX}
                          cy={coords.endY}
                          r="4"
                          fill="var(--accent)"
                          className="esg-conn-dot"
                        />
                        <circle
                          cx={coords.endX}
                          cy={coords.endY}
                          r="4"
                          fill="none"
                          stroke="var(--accent)"
                          strokeWidth="1.5"
                          className="esg-conn-dot-pulse"
                        />
                      </>
                    )}
                  </g>
                );
              })}
            </svg>
          )}

          {/* Left 3 Pills */}
          <div className="esg-pills-col left-pills">
            {ESG_INITIATIVES.slice(0, 3).map((item, idx) => (
              <div
                key={item.id}
                className={`esg-interactive-pill ${activeEsgIndex === idx ? 'active' : ''} ${hoveredEsgIndex === idx ? 'hovered' : ''}`}
                onMouseEnter={() => {
                  setActiveEsgIndex(idx);
                  setHoveredEsgIndex(idx);
                }}
                onMouseLeave={() => setHoveredEsgIndex(null)}
                onClick={() => {
                  setActiveEsgIndex(idx);
                  setHoveredEsgIndex(idx);
                }}
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
            <div className={`esg-orbit-rim ${hoveredEsgIndex !== null ? `pulse-${ESG_INITIATIVES[hoveredEsgIndex].id}` : ''}`}>
              <div className="esg-orbit-rim-dashed"></div>
              <div className="esg-core-emblem">
                <span className="esg-emblem-logo">JTPL</span>
                <span className="esg-emblem-indicator">{ESG_INITIATIVES[currentDisplayIdx].label}</span>
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
                  className={`esg-interactive-pill ${activeEsgIndex === globalIdx ? 'active' : ''} ${hoveredEsgIndex === globalIdx ? 'hovered' : ''}`}
                  onMouseEnter={() => {
                    setActiveEsgIndex(globalIdx);
                    setHoveredEsgIndex(globalIdx);
                  }}
                  onMouseLeave={() => setHoveredEsgIndex(null)}
                  onClick={() => {
                    setActiveEsgIndex(globalIdx);
                    setHoveredEsgIndex(globalIdx);
                  }}
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
          <div className="esg-detail-content" key={activeEsgIndex}>
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
