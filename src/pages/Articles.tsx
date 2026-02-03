import React from 'react';
import { motion } from 'framer-motion';
import { Articles as ArticlesSection } from '../components/sections/Articles';

export const Articles: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="min-h-screen"
    >
      <ArticlesSection />
    </motion.div>
  );
};
