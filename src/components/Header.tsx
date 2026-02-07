import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';

const navigation = [
  { name: 'Services', id: 'services' },
  { name: 'Experience', id: 'experience' },
  { name: 'Projects', id: 'projects' },
  { name: 'Tech Stack', id: 'tech-stack' },
  { name: 'Education', id: 'education' },
  { name: 'Articles', id: 'articles' },
  { name: 'Contact', id: 'contact' },
];

export const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 bg-gradient-to-r from-black via-slate-950 to-black backdrop-blur-xl border-b border-green-500/20 shadow-[0_0_20px_rgba(0,255,0,0.1)]"
    >
      {/* Scanlines effect */}
      <div className="absolute inset-0 pointer-events-none opacity-5 bg-repeat" style={{
        backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,255,0,0.03) 2px, rgba(0,255,0,0.03) 4px)'
      }}></div>

      <nav className="container-custom relative z-10" aria-label="Main navigation">
        <div className="flex items-center justify-between h-16">
          {/* Logo - Terminal Style */}
          <motion.button 
            onClick={() => scrollToSection('hero')}
            whileHover={{ scale: 1.05, textShadow: '0 0 10px rgba(0,255,0,0.8)' }}
            whileTap={{ scale: 0.95 }}
            className="relative group cursor-pointer font-mono"
          >
            <div className="absolute -inset-2 bg-green-500/0 group-hover:bg-green-500/10 rounded-lg blur-lg transition-all duration-300"></div>
            <div className="relative px-3 py-1 text-base md:text-lg font-black tracking-widest text-green-400 hover:text-green-300 transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(0,255,0,0.6)]">
              {'<'}RAH{'>'}
            </div>
          </motion.button>

          {/* Desktop Navigation - Terminal Menu */}
          <div className="hidden md:flex items-center gap-0 px-2 py-1 bg-black/30 border border-green-500/20 rounded-lg backdrop-blur-sm">
            {navigation.map((item, index) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.id)}
                onMouseEnter={() => setHoveredItem(index)}
                onMouseLeave={() => setHoveredItem(null)}
                whileHover={{ y: 0 }}
                whileTap={{ y: 0 }}
                className="relative group px-3 py-2 rounded-sm transition-all duration-200 overflow-hidden font-mono text-xs uppercase tracking-wider cursor-pointer"
              >
                {/* Glow background on hover */}
                <motion.div
                  animate={{
                    opacity: hoveredItem === index ? 1 : 0,
                    backgroundColor: hoveredItem === index ? 'rgba(0,255,0,0.08)' : 'rgba(0,255,0,0)',
                  }}
                  transition={{ duration: 0.2 }}
                  className="absolute inset-0 rounded-sm"
                />

                {/* Top border glow on hover */}
                <motion.div
                  animate={{
                    opacity: hoveredItem === index ? 1 : 0,
                    scaleX: hoveredItem === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="absolute top-0 left-2 right-2 h-0.5 bg-green-400 rounded-full origin-center shadow-[0_0_8px_rgba(0,255,0,0.6)]"
                />

                {/* Bottom border glow on hover */}
                <motion.div
                  animate={{
                    opacity: hoveredItem === index ? 1 : 0,
                    scaleX: hoveredItem === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="absolute bottom-0 left-2 right-2 h-0.5 bg-green-400 rounded-full origin-center shadow-[0_0_8px_rgba(0,255,0,0.6)]"
                />

                <span className={`relative z-10 text-xs font-bold transition-all duration-200 ${
                  hoveredItem === index 
                    ? 'text-green-400 drop-shadow-[0_0_6px_rgba(0,255,0,0.6)]' 
                    : 'text-green-600 hover:text-green-500'
                }`}>
                  $ {item.name}
                </span>
              </motion.button>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            {/* Theme Toggle - Matrix Style */}
            <motion.button
              onClick={toggleTheme}
              whileHover={{ scale: 1.1, rotate: 10, textShadow: '0 0 10px rgba(0,255,0,0.8)' }}
              whileTap={{ scale: 0.95 }}
              className="relative p-2 rounded-sm border border-green-500/20 bg-black/40 hover:bg-green-500/5 transition-all duration-300 backdrop-blur-sm group cursor-pointer"
              aria-label="Toggle theme"
            >
              <span className="relative z-10 flex items-center justify-center w-5 h-5 text-green-400 group-hover:text-green-300 font-mono text-xs font-bold">
                {theme === 'light' ? (
                  <motion.span
                    key="moon"
                    initial={{ rotate: -180, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 180, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    ◗
                  </motion.span>
                ) : (
                  <motion.span
                    key="sun"
                    initial={{ rotate: 180, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -180, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    ◕
                  </motion.span>
                )}
              </span>
            </motion.button>

            {/* CTA Button - Terminal Command Style */}
            <motion.button
              onClick={() => scrollToSection('contact')}
              whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(0,255,0,0.4)' }}
              whileTap={{ scale: 0.98 }}
              className="hidden md:flex btn-primary text-xs py-2 px-4 relative group overflow-hidden font-mono uppercase tracking-wider cursor-pointer border border-green-500/60 shadow-[0_0_10px_rgba(0,255,0,0.2)]"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-green-400/20 to-transparent"
                initial={{ x: '-100%' }}
                whileHover={{ x: '200%' }}
                transition={{ duration: 0.5 }}
              />
              <span className="relative z-10">$ ./contact</span>
            </motion.button>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              whileTap={{ scale: 0.95 }}
              className="md:hidden p-2 rounded-sm hover:bg-green-500/5 transition-all duration-200 border border-green-500/20 relative group backdrop-blur-sm cursor-pointer"
              aria-label="Toggle menu"
            >
              <motion.svg
                className="w-5 h-5 relative z-10 text-green-400 group-hover:text-green-300"
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

        {/* Mobile Navigation - Terminal Dropdown */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? 'auto' : 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden bg-black/60 border-t border-green-500/20 backdrop-blur-sm"
        >
          <motion.div className="pb-3 space-y-1 mt-3">
            {navigation.map((item, index) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.id)}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ x: 4, textShadow: '0 0 6px rgba(0,255,0,0.6)' }}
                className="block w-full text-left px-4 py-2.5 rounded-sm text-green-600 hover:text-green-400 hover:bg-green-500/5 transition-all group relative cursor-pointer font-mono text-xs uppercase tracking-wider"
              >
                <span className="font-bold">$ </span>
                <span>{item.name}</span>
                <motion.div
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-green-500 rounded-full opacity-0 group-hover:opacity-100 transition-all shadow-[0_0_4px_rgba(0,255,0,0.6)]"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              </motion.button>
            ))}

            {/* Mobile CTA */}
            <motion.button
              onClick={() => scrollToSection('contact')}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navigation.length * 0.05 + 0.1 }}
              className="block mt-3 mx-2 btn-primary text-center py-2.5 relative group overflow-hidden font-mono uppercase tracking-wider w-[calc(100%-1rem)] cursor-pointer border border-green-500/60 text-xs shadow-[0_0_10px_rgba(0,255,0,0.2)]"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-green-400/20 to-transparent"
                initial={{ x: '-100%' }}
                whileHover={{ x: '200%' }}
                transition={{ duration: 0.5 }}
              />
              <span className="relative z-10">$ ./contact</span>
            </motion.button>
          </motion.div>
        </motion.div>
      </nav>
    </motion.header>
  );
};
