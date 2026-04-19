import React, { useState, useEffect } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export default function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  
  // Motion values for smooth tracking
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Springs for the trailing effect
  const ringX = useSpring(mouseX, { stiffness: 150, damping: 20 });
  const ringY = useSpring(mouseY, { stiffness: 150, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseHover = (e) => {
      // Check if target or parent is interactive
      const isClickable = e.target.closest('a, button, input, textarea, [role="button"]');
      setIsHovered(!!isClickable);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseHover);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseHover);
    };
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden hidden md:block">
      {/* Central Dot */}
      <motion.div 
        className="fixed w-1.5 h-1.5 bg-[#ff2a2a] rounded-full shadow-[0_0_10px_rgba(255,42,42,0.8)]"
        style={{ x: mouseX, y: mouseY, left: -3, top: -3 }}
      />

      {/* Trailing Ring */}
      <motion.div 
        className="fixed border-2 border-[#ff2a2a]/30 rounded-full"
        style={{ 
          x: ringX, 
          y: ringY, 
          left: isHovered ? -30 : -20, 
          top: isHovered ? -30 : -20,
          width: isHovered ? 60 : 40,
          height: isHovered ? 60 : 40,
          backgroundColor: isHovered ? 'rgba(255,42,42,0.05)' : 'rgba(255,42,42,0)',
        }}
        animate={{
          scale: isHovered ? 1.5 : 1,
          borderColor: isHovered ? 'rgba(255,42,42,0.8)' : 'rgba(255,42,42,0.3)',
        }}
        transition={{ type: 'spring', stiffness: 250, damping: 25 }}
      >
        {/* Internal Glow for ring */}
        <div className={`absolute inset-0 rounded-full transition-opacity duration-300 ${isHovered ? 'opacity-40 shadow-[inset_0_0_15px_rgba(255,42,42,0.5)]' : 'opacity-0'}`} />
      </motion.div>
    </div>
  );
}
