import React from 'react';
import { motion } from 'framer-motion';
import { Header } from './Header';
import { Footer } from './Footer';
import { ScrollProgress } from './ScrollProgress';
import { BackToTop } from './BackToTop';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col site-shell text-text-primary-light dark:text-text-primary-dark">
      <ScrollProgress />
      <Header />
      
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ 
          duration: 0.4, 
          ease: "easeInOut"
        }}
        className="flex-grow w-full"
      >
        {children}
      </motion.main>

      <Footer />
      <BackToTop />
    </div>
  );
};
