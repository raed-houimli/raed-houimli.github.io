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
      <motion.aside
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="nav-rail"
        role="navigation"
        aria-label="Main navigation"
      >
        {/* Profile Picture - Centered */}
        <motion.button
          onClick={() => scrollToSection('hero')}
          whileHover={{ scale: 1.05 }}
          className="w-12 h-12 rounded-full overflow-hidden border-2 border-accent mx-auto mb-4 flex items-center justify-center flex-shrink-0"
          aria-label="Raed Houimli - Go to home"
          title="Go to home"
        >
          <img
            src="https://avatars.githubusercontent.com/raed-houimli"
            alt="Raed Houimli"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </motion.button>

        <div className="nav-rail-group">
          {navigation.map((item) => (
            <motion.button
              key={item.name}
              onClick={() => scrollToSection(item.id)}
              whileHover={{ scale: 1.05 }}
              className="nav-item text-center"
              aria-label={`Go to ${item.name}`}
              title={`Navigate to ${item.name} section`}
            >
              <span className="nav-item-label font-semibold">{item.name}</span>
            </motion.button>
          ))}
        </div>

        <div className="nav-rail-actions space-y-2">
          <motion.button
            onClick={toggleTheme}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="nav-item w-full relative overflow-hidden"
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {/* Glow effect */}
            {theme === 'dark' && (
              <motion.div
                animate={{
                  opacity: [0.5, 1, 0.5],
                  scale: [1, 1.2, 1]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 bg-gradient-to-r from-yellow-400/30 via-amber-500/30 to-yellow-400/30 blur-md"
              />
            )}
            {theme === 'light' && (
              <motion.div
                animate={{
                  opacity: [0.5, 1, 0.5],
                  scale: [1, 1.2, 1]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 bg-gradient-to-r from-blue-400/30 via-indigo-500/30 to-blue-400/30 blur-md"
              />
            )}
            
            <span className="nav-item-label font-semibold relative z-10">
              {theme === 'light' ? 'Dark' : 'Light'}
            </span>
          </motion.button>

          <motion.button
            onClick={() => scrollToSection('contact')}
            whileHover={{ scale: 1.05 }}
            className="nav-item nav-item-accent w-full"
            aria-label="Go to Contact section"
            title="Navigate to Contact section"
          >
            <span className="nav-item-label font-semibold">Contact</span>
          </motion.button>
        </div>
      </motion.aside>

      <motion.nav
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="nav-rail-mobile"
        aria-label="Mobile navigation"
        role="navigation"
      >
        {navigation.slice(0, 4).map((item) => (
          <button
            key={item.name}
            onClick={() => scrollToSection(item.id)}
            className="nav-pill-mobile text-xs font-semibold"
            aria-label={`Go to ${item.name}`}
            title={`Navigate to ${item.name} section`}
          >
            <span className="nav-item-label">{item.name}</span>
          </button>
        ))}
        
        <button 
          onClick={toggleTheme} 
          className="nav-pill-mobile relative overflow-hidden text-xs font-semibold" 
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
          {/* Mobile glow effect */}
          {theme === 'dark' && (
            <motion.div
              animate={{
                opacity: [0.4, 0.8, 0.4]
              }}
              transition={{
                duration: 2,
                repeat: Infinity
              }}
              className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 via-amber-500/20 to-yellow-400/20 blur-sm"
            />
          )}
          {theme === 'light' && (
            <motion.div
              animate={{
                opacity: [0.4, 0.8, 0.4]
              }}
              transition={{
                duration: 2,
                repeat: Infinity
              }}
              className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-indigo-500/20 to-blue-400/20 blur-sm"
            />
          )}
          
          <span className="nav-item-label relative z-10">
            {theme === 'light' ? 'Dark' : 'Light'}
          </span>
        </button>
      </motion.nav>
    </>
  );
};
