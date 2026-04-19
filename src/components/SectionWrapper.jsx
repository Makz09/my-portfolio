import React from 'react';
import { motion } from 'framer-motion';

export default function SectionWrapper({ id, children, className = "" }) {
  return (
    <section id={id} className={`pt-24 pb-16 min-h-screen flex items-center ${className}`}>
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="max-w-7xl mx-auto px-6 lg:px-8 w-full"
      >
        {children}
      </motion.div>
    </section>
  );
}
