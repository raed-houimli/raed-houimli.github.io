import React from 'react';
import { motion } from 'framer-motion';
import { Experience as ExperienceSection } from '../components/sections/Experience';

export const Experience: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="min-h-screen"
    >
      <ExperienceSection />
    </motion.div>
  );
};
