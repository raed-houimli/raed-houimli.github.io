import React from 'react';
import { motion } from 'framer-motion';
import { Contact as ContactSection } from '../components/sections/Contact';

export const Contact: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="min-h-screen page-shell"
    >
      <ContactSection />
    </motion.div>
  );
};
