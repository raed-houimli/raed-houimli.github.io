import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';

const navigation = [
  { name: 'Services', href: '/services' },
  { name: 'Experience', href: '/experience' },
  { name: 'Projects', href: '/projects' },
  { name: 'Tech Stack', href: '/tech-stack' },
  { name: 'Education', href: '/education' },
  { name: 'Articles', href: '/articles' },
];

export const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 bg-gradient-to-r from-accent-primary/10 via-accent-secondary/10 to-accent-primary/10 backdrop-blur-2xl border-b border-accent-primary/20 dark:border-accent-primary/10 shadow-sm"
    >
      <nav className="container-custom" aria-label="Main navigation">
        <div className="flex items-center justify-between h-16">
          {/* Logo - Premium */}
          <motion.a 
            href="/"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="relative group"
          >
            <div className="absolute -inset-3 bg-gradient-to-r from-accent-primary to-accent-secondary rounded-lg blur-xl opacity-0 group-hover:opacity-40 transition-all duration-300"></div>
            <div className="relative px-4 py-2 text-lg md:text-xl font-black tracking-tighter bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent hover:opacity-80 transition-all duration-300 group-hover:drop-shadow-lg">
              Raed Houimli
            </div>
          </motion.a>

          {/* Desktop Navigation - Premium Enhanced */}
          <div className="hidden md:flex items-center gap-1 px-2 py-1 bg-gradient-to-r from-accent-primary/5 via-accent-secondary/5 to-accent-primary/5 rounded-full border border-accent-primary/10 backdrop-blur-sm">
            {navigation.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                onMouseEnter={() => setHoveredItem(index)}
                onMouseLeave={() => setHoveredItem(null)}
                whileHover={{ y: -1 }}
                whileTap={{ y: 0 }}
                className="relative group px-4 py-2 rounded-lg transition-all duration-200 overflow-hidden"
              >
                {/* Premium background effect */}
                <motion.div
                  animate={{
                    opacity: hoveredItem === index ? 1 : 0,
                    scale: hoveredItem === index ? 1 : 0.95,
                  }}
                  transition={{ duration: 0.2 }}
                  className="absolute inset-0 bg-gradient-to-br from-accent-primary/30 to-accent-secondary/20 rounded-lg -z-10"
                />

                {/* Animated border on hover */}
                <motion.div
                  animate={{
                    opacity: hoveredItem === index ? 1 : 0,
                    scaleX: hoveredItem === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="absolute bottom-1 left-2 right-2 h-0.5 bg-gradient-to-r from-accent-primary via-accent-secondary to-accent-primary rounded-full origin-center"
                />

                {/* Text */}
                <span className={`relative z-10 text-sm font-semibold transition-all duration-200 ${
                  hoveredItem === index 
                    ? 'text-accent-primary drop-shadow-lg' 
                    : 'text-text-secondary-light dark:text-text-secondary-dark'
                }`}>
                  {item.name}
                </span>
              </motion.a>
            ))}
          </div>

          {/* Right side actions - Premium */}
          <div className="flex items-center gap-2">
            {/* Theme Toggle - Enhanced */}
            <motion.button
              onClick={toggleTheme}
              whileHover={{ scale: 1.08, rotate: 10 }}
              whileTap={{ scale: 0.95 }}
              className="relative p-2.5 rounded-full border border-border-light/60 dark:border-border-dark/60 bg-transparent hover:bg-surface-light/60 dark:hover:bg-surface-dark/60 transition-all duration-300 backdrop-blur-sm"
              aria-label="Toggle theme"
            >
              <span className="relative z-10 flex items-center justify-center w-5 h-5 text-text-secondary-light dark:text-text-secondary-dark">
                {theme === 'light' ? (
                  <motion.svg
                    key="moon"
                    initial={{ rotate: -180, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 180, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </motion.svg>
                ) : (
                  <motion.svg
                    key="sun"
                    initial={{ rotate: 180, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -180, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.536l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.707.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zm5.414 5.414a1 1 0 01.414.586l5.464-5.464a1 1 0 11-1.414-1.414L9.172 10.05a1 1 0 01.586.414zM5 8a1 1 0 100-2H4a1 1 0 000 2h1z" clipRule="evenodd" />
                  </motion.svg>
                )}
              </span>
            </motion.button>

            {/* CTA Button - Premium */}
            <motion.a 
              href="/contact"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="hidden md:flex btn-primary text-sm py-2.5 px-6 relative group overflow-hidden font-semibold tracking-wide"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                initial={{ x: '-100%' }}
                whileHover={{ x: '200%' }}
                transition={{ duration: 0.5 }}
              />
              <span className="relative z-10">Start Consulting</span>
            </motion.a>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              whileTap={{ scale: 0.95 }}
              className="md:hidden p-2.5 rounded-xl hover:bg-surface-light dark:hover:bg-surface-dark transition-all duration-200 relative group backdrop-blur-sm"
              aria-label="Toggle menu"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-accent-primary/20 to-accent-secondary/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200"
              />
              <motion.svg
                className="w-5 h-5 relative z-10"
                animate={{ rotate: isOpen ? 90 : 0 }}
                transition={{ duration: 0.2 }}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </motion.svg>
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation - Premium */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? 'auto' : 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden bg-gradient-to-b from-accent-primary/5 via-accent-secondary/5 to-accent-primary/5"
        >
          <motion.div className="pb-4 space-y-1 border-t border-accent-primary/20 dark:border-accent-primary/10 mt-4">
            {navigation.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ x: 4 }}
                className="block px-4 py-3 rounded-lg text-text-secondary-light dark:text-text-secondary-dark hover:bg-accent-primary/10 hover:text-accent-primary transition-all group relative"
              >
                <span className="font-semibold text-sm">{item.name}</span>
                <motion.div
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-accent-primary rounded-full opacity-0 group-hover:opacity-100 transition-all"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              </motion.a>
            ))}

            {/* Mobile CTA */}
            <motion.a
              href="/contact"
              onClick={() => setIsOpen(false)}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navigation.length * 0.05 + 0.1 }}
              className="block mt-4 mx-2 btn-primary text-center py-3 relative group overflow-hidden font-semibold"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                initial={{ x: '-100%' }}
                whileHover={{ x: '200%' }}
                transition={{ duration: 0.5 }}
              />
              <span className="relative z-10">Start Consulting</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </nav>
    </motion.header>
  );
};
