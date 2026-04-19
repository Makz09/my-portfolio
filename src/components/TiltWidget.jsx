import React, { useRef, useState } from 'react';

const TiltWidget = ({ children, className = "" }) => {
  const tiltRef = useRef(null);
  const [tiltStyle, setTiltStyle] = useState({
    transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
    transition: '400ms cubic-bezier(0.03, 0.98, 0.52, 0.99)',
  });

  const handleMouseMove = (e) => {
    if (!tiltRef.current) return;
    const rect = tiltRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Limits max 8 degree 3D rotation for more standard cards to feel natural
    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;
    
    setTiltStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`,
      transition: '50ms linear', // instant physical snappy response when tracking
    });
  };

  const handleMouseLeave = () => {
    setTiltStyle({
      // Resets specifically to the user's requested idle transition variables
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
      transition: '400ms cubic-bezier(0.03, 0.98, 0.52, 0.99)',
    });
  };

  return (
    <div 
      ref={tiltRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ ...tiltStyle, willChange: 'transform' }}
      className={`w-full relative z-20 ${className}`}
    >
      {children}
    </div>
  );
};

export default TiltWidget;
