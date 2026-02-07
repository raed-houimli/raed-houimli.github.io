import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../../data/content';

export const Hero: React.FC = () => {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = `> whoami\nraed-houimli\n\n> cat profile.txt\nDevSecOps Engineer | Cloud Infrastructure | Frontend Dev\n\n> system --info\nLocation: Remote • Status: Consulting Available\n\n> access --portfolio\n[success] 5+ years building secure, scalable infrastructure`;

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 15);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-10">
      {/* Matrix-style background */}
      <div className="absolute inset-0 bg-gradient-to-b from-#000000 via-#0a0e27 to-#000000">
        {/* Code rain effect */}
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute font-mono text-xs opacity-20 text-green-500"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: '100vh', opacity: [0, 0.3, 0] }}
            transition={{
              duration: Math.random() * 8 + 8,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
            style={{ left: `${Math.random() * 100}%` }}
          >
            {Math.random().toString(36).substring(7)}
          </motion.div>
        ))}
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Side - Profile Picture */}
          <motion.div
            initial={{ opacity: 0, x: -50, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex justify-center lg:justify-end order-2 lg:order-1"
          >
            <div className="relative">
              {/* Rotating border rings */}
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-4 rounded-full"
              >
                <div className="w-full h-full rounded-full border-2 border-transparent bg-gradient-to-r from-green-500 via-cyan-500 to-green-500 p-[2px]">
                  <div className="w-full h-full bg-black rounded-full"></div>
                </div>
              </motion.div>

              {/* Counter-rotating ring */}
              <motion.div
                animate={{ rotate: [360, 0] }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-2 rounded-full opacity-60"
              >
                <div className="w-full h-full rounded-full border border-transparent bg-gradient-to-l from-green-400 via-green-600 to-green-400 p-[1px]">
                  <div className="w-full h-full bg-black rounded-full"></div>
                </div>
              </motion.div>

              {/* Pulsing glow layers */}
              <motion.div
                animate={{
                  scale: [1, 1.15, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -inset-6 rounded-full bg-gradient-to-r from-green-500/60 to-cyan-500/40 blur-3xl"
              />

              <motion.div
                animate={{
                  scale: [1.1, 1, 1.1],
                  opacity: [0.4, 0.7, 0.4]
                }}
                transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
                className="absolute -inset-4 rounded-full bg-gradient-to-l from-green-400/50 to-green-600/30 blur-2xl"
              />

              {/* Profile Image */}
              <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-black shadow-2xl bg-gradient-to-br from-green-500/20 to-cyan-500/20">
                {/* Inner glow ring */}
                <motion.div
                  animate={{
                    opacity: [0.3, 0.8, 0.3],
                    scale: [0.98, 1.02, 0.98]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute inset-0 rounded-full ring-2 ring-green-400/60 ring-inset"
                />

                <img
                  src="https://avatars.githubusercontent.com/raed-houimli"
                  alt={personalInfo.name}
                  className="w-full h-full object-cover relative z-10"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const parent = e.currentTarget.parentElement;
                    if (parent) {
                      parent.innerHTML = `<div class="w-full h-full flex items-center justify-center text-6xl font-black text-green-400 bg-gradient-to-br from-green-500/20 to-cyan-500/20">${personalInfo.name.split(' ').map(n => n[0]).join('')}</div>`;
                    }
                  }}
                />

                {/* Overlay glow effect */}
                <motion.div
                  animate={{
                    opacity: [0, 0.25, 0]
                  }}
                  transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                  className="absolute inset-0 bg-gradient-to-br from-green-400/40 via-transparent to-cyan-400/30 rounded-full"
                />
              </div>

              {/* Status badge */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.6, type: "spring" }}
                className="absolute -bottom-2 -right-2 w-12 h-12 bg-green-500 rounded-full shadow-lg flex items-center justify-center border-4 border-black z-20"
              >
                <motion.span
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-3.5 h-3.5 bg-white rounded-full shadow-[0_0_12px_rgba(255,255,255,0.8)]"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Terminal Window */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <div className="terminal-container">
              {/* Header */}
              <div className="terminal-header">
                <div className="terminal-dot active"></div>
                <div className="terminal-dot"></div>
                <div className="terminal-dot"></div>
                <span className="ml-2">root@portfolio ~ $</span>
              </div>

              {/* Content */}
              <div className="terminal-content">
                <div className="font-mono text-green-500 whitespace-pre-wrap leading-relaxed">
                  {displayedText}
                  {displayedText.length < fullText.length && (
                    <span className="animate-pulse text-green-400 ml-1">_</span>
                  )}
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.2, duration: 0.6 }}
              className="flex flex-wrap gap-4 mt-8"
            >
              <motion.button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary relative overflow-hidden"
              >
                <span className="relative z-10">$ ./start-consulting.sh</span>
              </motion.button>

              <motion.button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary"
              >
                $ cat projects
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scrolling indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 0.5 }}
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, delay: 2.5 }}
          className="flex justify-center mt-16 text-green-500 absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </div>
    </section>
  );
};
