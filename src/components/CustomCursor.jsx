import React, { useState, useEffect } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [ringPosition, setRingPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  // Smooth trailing effect for the ring (lerp)
  useEffect(() => {
    let rId;
    const updateRing = () => {
      setRingPosition((prev) => {
        const dx = position.x - prev.x;
        const dy = position.y - prev.y;
        return {
          x: prev.x + dx * 0.15,
          y: prev.y + dy * 0.15,
        };
      });
      rId = requestAnimationFrame(updateRing);
    };
    rId = requestAnimationFrame(updateRing);
    return () => cancelAnimationFrame(rId);
  }, [position]);

  // Track hover status on interactive components
  useEffect(() => {
    const addHoverListeners = () => {
      const interactives = document.querySelectorAll(
        'a, button, select, input, textarea, .showroom-nav-btn, .tab-btn, [style*="cursor: pointer"]'
      );
      interactives.forEach((el) => {
        el.addEventListener('mouseenter', () => setIsHovered(true));
        el.addEventListener('mouseleave', () => setIsHovered(false));
      });
    };

    addHoverListeners();

    const observer = new MutationObserver(addHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className={isHovered ? 'custom-cursor-hover' : ''}>
      <div
        className="custom-cursor-dot"
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      />
      <div
        className="custom-cursor-ring"
        style={{ left: `${ringPosition.x}px`, top: `${ringPosition.y}px` }}
      />
    </div>
  );
};

export default CustomCursor;
