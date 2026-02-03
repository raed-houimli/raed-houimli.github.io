import React from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { QuoteBanner } from './QuoteBanner';
import { ScrollProgress } from './ScrollProgress';
import { BackToTop } from './BackToTop';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col bg-background-light dark:bg-background-dark text-text-primary-light dark:text-text-primary-dark">
      <ScrollProgress />
      <Header />
      <QuoteBanner />
      
      <motion.main
        key={location.pathname}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ 
          duration: 0.5, 
          ease: "easeInOut"
        }}
        className="flex-grow w-full"
      >
        {/* Page transition background effect */}
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 1 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-gradient-to-b from-accent-primary to-accent-secondary origin-top pointer-events-none z-40"
        />
        
        {children}
      </motion.main>

      <Footer />
      <BackToTop />
    </div>
  );
};
