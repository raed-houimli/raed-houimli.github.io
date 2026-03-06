import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';

const navigation = [
  { name: 'About', id: 'about' },
  { name: 'Services', id: 'services' },
  { name: 'Experience', id: 'experience' },
  { name: 'Projects', id: 'projects' },
  { name: 'Stack', id: 'tech-stack' },
  { name: 'Education', id: 'education' },
  { name: 'Blog', id: 'articles' },
];

export const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Desktop Navigation Sidebar */}
      <motion.aside
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="hidden lg:flex fixed left-0 top-0 h-screen flex-col gap-3 p-4 z-50 pointer-events-none"
        role="navigation"
        aria-label="Main navigation"
      >
        {/* Nav Container with pointer-events enabled */}
        <div className="pointer-events-auto flex flex-col gap-3 w-fit">
          {/* Logo/Brand */}
          <motion.button
            onClick={() => scrollToSection('hero')}
            whileHover={{ scale: 1.05 }}
            className="w-12 h-12 rounded-lg bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark flex items-center justify-center font-bold text-text-primary-light dark:text-text-primary-dark hover:border-accent-primary transition-all"
            aria-label="Raed Houimli - Go to home"
            title="Go to home"
          >
            RH
          </motion.button>

          {/* Navigation Links */}
          <div className="flex flex-col gap-2">
            {navigation.map((item) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.id)}
                whileHover={{ scale: 1.05, x: 4 }}
                className="px-3 py-2 text-xs font-semibold rounded-lg bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark text-text-secondary-light dark:text-text-secondary-dark hover:text-text-primary-light dark:hover:text-text-primary-dark hover:border-accent-primary transition-all whitespace-nowrap"
                aria-label={`Go to ${item.name}`}
                title={`Navigate to ${item.name} section`}
              >
                {item.name}
              </motion.button>
            ))}
          </div>

          {/* Theme Toggle */}
          <motion.button
            onClick={toggleTheme}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-3 py-2 text-xs font-semibold rounded-lg bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark text-text-secondary-light dark:text-text-secondary-dark hover:text-text-primary-light dark:hover:text-text-primary-dark hover:border-accent-primary transition-all"
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            <span>
              {theme === 'light' ? '🌙' : '☀️'}
            </span>
          </motion.button>

          {/* Contact Button */}
          <motion.button
            onClick={() => scrollToSection('contact')}
            whileHover={{ scale: 1.05, x: 4 }}
            className="px-3 py-2 text-xs font-semibold rounded-lg bg-accent-primary text-white hover:bg-sky-600 transition-all"
            aria-label="Go to Contact section"
            title="Navigate to Contact section"
          >
            Contact
          </motion.button>
        </div>
      </motion.aside>

      {/* Mobile Bottom Navigation */}
      <motion.nav
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="lg:hidden fixed bottom-0 left-0 right-0 bg-surface-light/95 dark:bg-surface-dark/95 backdrop-blur border-t border-border-light dark:border-border-dark z-50"
        aria-label="Mobile navigation"
        role="navigation"
      >
        <div className="max-w-full overflow-x-auto">
          <div className="flex gap-1 p-2 min-w-min">
            {navigation.slice(0, 4).map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.id)}
                className="px-3 py-2 text-xs font-semibold rounded-lg bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark text-text-secondary-light dark:text-text-secondary-dark hover:text-text-primary-light dark:hover:text-text-primary-dark hover:border-accent-primary transition-all whitespace-nowrap"
                aria-label={`Go to ${item.name}`}
                title={`Navigate to ${item.name} section`}
              >
                {item.name}
              </button>
            ))}
            
            <button 
              onClick={toggleTheme} 
              className="px-3 py-2 text-xs font-semibold rounded-lg bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark hover:border-accent-primary text-text-secondary-light dark:text-text-secondary-dark transition-all whitespace-nowrap"
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
              title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
              <span>
                {theme === 'light' ? '🌙' : '☀️'}
              </span>
            </button>

            <button
              onClick={() => scrollToSection('contact')}
              className="px-3 py-2 text-xs font-semibold rounded-lg bg-accent-primary text-white hover:bg-sky-600 transition-all whitespace-nowrap"
              aria-label="Go to Contact section"
              title="Navigate to Contact section"
            >
              Contact
            </button>
          </div>
        </div>
      </motion.nav>
    </>
  );
};
