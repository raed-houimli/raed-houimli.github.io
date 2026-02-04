import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../../data/content';

export const Hero: React.FC = () => {
  const [activeSkill, setActiveSkill] = useState(0);

  const expertise = [
    { icon: '☁️', text: 'AWS Cloud', color: 'from-cyan-500/10 to-blue-500/10' },
    { icon: '⚙️', text: 'DevOps & IAC', color: 'from-purple-500/10 to-pink-500/10' },
    { icon: '🔒', text: 'Security First', color: 'from-orange-500/10 to-red-500/10' },
    { icon: '📈', text: 'Scalability', color: 'from-green-500/10 to-emerald-500/10' },
  ];

  return (
    <section id="raed-houimli" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 pt-24 pb-16 md:pt-0 md:pb-20">
      {/* Enhanced animated background with more layers */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Particle Layer 1 */}
        <motion.div
          animate={{ 
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl"
        />
        {/* Particle Layer 2 */}
        <motion.div
          animate={{ 
            x: [0, -100, 0],
            y: [0, -50, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl"
        />
        {/* NEW: Particle Layer 3 */}
        <motion.div
          animate={{ 
            x: [0, -80, 0],
            y: [0, 80, 0],
            scale: [1, 1.3, 1]
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear", delay: 2 }}
          className="absolute top-1/2 left-1/4 w-60 h-60 bg-purple-500/15 rounded-full blur-3xl"
        />
      </div>

      {/* Enhanced Grid background with animation */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(56,189,248,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(56,189,248,0.03)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse" 
           style={{ animationDuration: '8s' }} 
      />
      
      {/* Enhanced Radial gradient overlay */}
      <motion.div 
        animate={{ opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.08),transparent_50%)]"
      />

      {/* NEW: Spotlight sweep effect */}
      <div className="absolute inset-0 spotlight-effect opacity-30" />

      <div className="container-custom relative z-10 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Enhanced Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6 md:space-y-8 px-4 md:px-0"
          >
            {/* Enhanced Badge with pulse and glow */}
            <motion.div className="inline-flex">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="px-3 py-2 md:px-4 md:py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 backdrop-blur-sm cursor-pointer relative overflow-hidden group"
              >
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6 }}
                />
                <span className="text-xs font-bold text-cyan-300 uppercase tracking-wider flex items-center gap-2 relative z-10">
                  <motion.span 
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-2 h-2 bg-cyan-400 rounded-full shadow-[0_0_10px_rgba(6,182,212,0.8)]"
                  />
                  Available for Consulting
                </span>
              </motion.div>
            </motion.div>

            {/* Enhanced Main Heading with better reveal */}
            <div className="space-y-2 md:space-y-4 overflow-hidden">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight">
                <motion.span 
                  className="block text-white mb-2"
                  initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
                >
                  Build Secure,
                </motion.span>
                <motion.span 
                  className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent"
                  initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
                >
                  Scalable Infrastructure
                </motion.span>
              </h1>
            </div>

            {/* Enhanced Description with animated border */}
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <motion.div 
                className="absolute -left-3 md:-left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 to-blue-400 rounded-full"
                animate={{ scaleY: [0, 1] }}
                transition={{ delay: 0.9, duration: 0.6 }}
              />
              <p className="text-base md:text-lg text-slate-300 leading-relaxed pl-3 md:pl-4 max-w-xl">
                DevSecOps engineer with <span className="text-cyan-400 font-semibold whitespace-nowrap">5.5+ years</span> building production infrastructure. Specializing in <span className="text-cyan-400 font-semibold">AWS, Kubernetes, and CI/CD automation</span> for global teams.
              </p>
            </motion.div>

            {/* Enhanced Expertise Badges with stagger */}
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3 pt-2 md:pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              {expertise.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.1 + i * 0.1, duration: 0.5, type: "spring" }}
                  whileHover={{ x: 8, scale: 1.02 }}
                  onHoverStart={() => setActiveSkill(i)}
                  className={`flex items-center gap-2 md:gap-3 px-3 py-2 md:px-4 md:py-3 bg-gradient-to-br ${item.color} border border-slate-700/50 rounded-lg hover:border-cyan-500/50 transition-all cursor-pointer group relative overflow-hidden`}
                >
                  <motion.div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <motion.span 
                    animate={activeSkill === i ? { 
                      scale: [1, 1.2, 1], 
                      rotate: [0, 10, -10, 0] 
                    } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-lg md:text-xl relative z-10 flex-shrink-0"
                  >
                    {item.icon}
                  </motion.span>
                  <span className="text-xs md:text-sm font-medium text-slate-300 group-hover:text-white transition-colors relative z-10">
                    {item.text}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* Enhanced CTA Buttons with better effects */}
            <motion.div 
              className="flex flex-wrap gap-3 md:gap-4 pt-2 md:pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.8 }}
            >
              <motion.a
                href="#/contact"
                whileHover={{ scale: 1.05, y: -4 }}
                whileTap={{ scale: 0.98 }}
                className="btn-primary relative group px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-lg shadow-lg hover:shadow-2xl hover:shadow-cyan-500/50 transition-all overflow-hidden text-sm md:text-base"
              >
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '200%' }}
                  transition={{ duration: 0.6 }}
                />
                <span className="relative flex items-center gap-2 z-10 whitespace-nowrap">
                  <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Schedule Call
                </span>
              </motion.a>

              <motion.a
                href="#/projects"
                whileHover={{ scale: 1.05, y: -4 }}
                whileTap={{ scale: 0.98 }}
                className="relative group px-6 py-3 md:px-8 md:py-4 border-2 border-cyan-500 text-cyan-400 font-bold rounded-lg hover:bg-cyan-500/10 transition-all overflow-hidden text-sm md:text-base"
              >
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative flex items-center gap-2 z-10 whitespace-nowrap">
                  View Projects
                  <motion.svg 
                    className="w-4 h-4 md:w-5 md:h-5" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </motion.svg>
                </span>
              </motion.a>
            </motion.div>

            {/* Enhanced Social Links with better hover */}
            <motion.div 
              className="flex gap-3 md:gap-4 pt-2 md:pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.7, duration: 0.8 }}
            >
              {[
                { href: personalInfo.github, label: 'GitHub', icon: 'M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z' },
                { href: personalInfo.linkedin, label: 'LinkedIn', icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' },
                { href: personalInfo.medium, label: 'Medium', icon: 'M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z' },
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.9 + i * 0.1, type: "spring" }}
                  whileHover={{ scale: 1.2, y: -4, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-gradient-to-br from-slate-800 to-slate-900 border border-cyan-500/30 flex items-center justify-center text-cyan-400 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/50 transition-all relative group overflow-hidden flex-shrink-0"
                  aria-label={social.label}
                >
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                  <motion.svg 
                    className="w-4 h-4 md:w-5 md:h-5 relative z-10" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                    animate={{ y: [0, -2, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                  >
                    <path d={social.icon} />
                  </motion.svg>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Floating Cards with Centered Profile */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, y: 50 }} 
            animate={{ opacity: 1, scale: 1, y: 0 }} 
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }} 
            className="hidden lg:flex items-center justify-center"
          >
            <div className="relative w-full max-w-2xl h-[650px]">
              {/* Cloud Native Card - Top Left */}
              <motion.div 
                animate={{ y: [0, -25, 0] }} 
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} 
                className="absolute top-4 left-4 w-52 p-5 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/50 rounded-2xl backdrop-blur-sm shadow-2xl hover:shadow-cyan-500/50 transition-shadow cursor-pointer group"
              >
                <motion.div className="absolute inset-0 bg-gradient-to-br from-cyan-400/0 to-blue-400/0 group-hover:from-cyan-400/10 group-hover:to-blue-400/10 rounded-2xl transition-all" />
                <div className="relative flex items-center gap-3 mb-3">
                  <motion.div 
                    animate={{ rotate: [0, 360] }} 
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }} 
                    className="w-10 h-10 rounded-lg bg-cyan-500/30 flex items-center justify-center flex-shrink-0"
                  >
                    <span className="text-lg">☁️</span>
                  </motion.div>
                  <h4 className="font-bold text-cyan-300 text-sm">Cloud Native</h4>
                </div>
                <p className="text-xs text-slate-300 relative">AWS, Kubernetes, Docker</p>
              </motion.div>

              {/* DevOps Card - Bottom Right */}
              <motion.div 
                animate={{ y: [0, 25, 0] }} 
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }} 
                className="absolute bottom-4 right-4 w-52 p-5 bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/50 rounded-2xl backdrop-blur-sm shadow-2xl hover:shadow-blue-500/50 transition-shadow cursor-pointer group"
              >
                <motion.div className="absolute inset-0 bg-gradient-to-br from-blue-400/0 to-purple-400/0 group-hover:from-blue-400/10 group-hover:to-purple-400/10 rounded-2xl transition-all" />
                <div className="relative flex items-center gap-3 mb-3">
                  <motion.div 
                    animate={{ rotate: [-360, 0] }} 
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }} 
                    className="w-10 h-10 rounded-lg bg-blue-500/30 flex items-center justify-center flex-shrink-0"
                  >
                    <span className="text-lg">⚙️</span>
                  </motion.div>
                  <h4 className="font-bold text-blue-300 text-sm">DevOps Expert</h4>
                </div>
                <p className="text-xs text-slate-300 relative">CI/CD, Terraform, Automation</p>
              </motion.div>

              {/* ML/AI Card - Top Right */}
              <motion.div 
                animate={{ y: [0, -15, 0] }} 
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }} 
                className="absolute top-4 right-4 w-52 p-5 bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/50 rounded-2xl backdrop-blur-sm shadow-2xl hover:shadow-purple-500/50 transition-shadow cursor-pointer group"
              >
                <motion.div className="absolute inset-0 bg-gradient-to-br from-purple-400/0 to-pink-400/0 group-hover:from-purple-400/10 group-hover:to-pink-400/10 rounded-2xl transition-all" />
                <div className="relative flex items-center gap-3 mb-3">
                  <motion.div 
                    animate={{ scale: [1, 1.1, 1], rotate: [0, 10, 0] }} 
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} 
                    className="w-10 h-10 rounded-lg bg-purple-500/30 flex items-center justify-center flex-shrink-0"
                  >
                    <span className="text-lg">🤖</span>
                  </motion.div>
                  <h4 className="font-bold text-purple-300 text-sm">ML/AI</h4>
                </div>
                <p className="text-xs text-slate-300 relative">TensorFlow, PyTorch, LangChain</p>
              </motion.div>

              {/* Full-Stack Card - Bottom Left */}
              <motion.div 
                animate={{ y: [0, 15, 0] }} 
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1.5 }} 
                className="absolute bottom-4 left-4 w-52 p-5 bg-gradient-to-br from-orange-500/20 to-red-500/20 border border-orange-500/50 rounded-2xl backdrop-blur-sm shadow-2xl hover:shadow-orange-500/50 transition-shadow cursor-pointer group"
              >
                <motion.div className="absolute inset-0 bg-gradient-to-br from-orange-400/0 to-red-400/0 group-hover:from-orange-400/10 group-hover:to-red-400/10 rounded-2xl transition-all" />
                <div className="relative flex items-center gap-3 mb-3">
                  <motion.div 
                    animate={{ rotate: [360, 0] }} 
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }} 
                    className="w-10 h-10 rounded-lg bg-orange-500/30 flex items-center justify-center flex-shrink-0"
                  >
                    <span className="text-lg">💻</span>
                  </motion.div>
                  <h4 className="font-bold text-orange-300 text-sm">Full-Stack</h4>
                </div>
                <p className="text-xs text-slate-300 relative">FastAPI, React, Node.js</p>
              </motion.div>

              {/* Center Profile - Fixed Position, Bigger Size */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                <div className="relative">
                  {/* Rotating border rings */}
                  <motion.div 
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute -inset-6 rounded-full"
                  >
                    <div className="w-full h-full rounded-full border-4 border-transparent bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 p-[3px]">
                      <div className="w-full h-full bg-slate-950 rounded-full"></div>
                    </div>
                  </motion.div>

                  {/* Counter-rotating ring */}
                  <motion.div 
                    animate={{ rotate: [360, 0] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute -inset-4 rounded-full opacity-50"
                  >
                    <div className="w-full h-full rounded-full border-2 border-transparent bg-gradient-to-l from-purple-500 via-pink-500 to-cyan-500 p-[2px]">
                      <div className="w-full h-full bg-slate-950 rounded-full"></div>
                    </div>
                  </motion.div>

                  {/* Enhanced Multiple pulsing glow layers */}
                  <motion.div 
                    animate={{ 
                      scale: [1, 1.2, 1], 
                      opacity: [0.4, 0.8, 0.4] 
                    }} 
                    transition={{ duration: 3, repeat: Infinity }} 
                    className="absolute -inset-10 rounded-full bg-gradient-to-r from-cyan-500/50 to-blue-500/40 blur-3xl" 
                  />
                  <motion.div 
                    animate={{ 
                      scale: [1.1, 1, 1.1], 
                      opacity: [0.3, 0.6, 0.3] 
                    }} 
                    transition={{ duration: 4, repeat: Infinity, delay: 0.5 }} 
                    className="absolute -inset-8 rounded-full bg-gradient-to-r from-purple-500/40 to-pink-500/30 blur-2xl" 
                  />
                  <motion.div 
                    animate={{ 
                      scale: [1, 1.15, 1], 
                      opacity: [0.5, 1, 0.5] 
                    }} 
                    transition={{ duration: 2.5, repeat: Infinity, delay: 1 }} 
                    className="absolute -inset-6 rounded-full bg-gradient-to-br from-cyan-400/60 to-blue-400/50 blur-xl" 
                  />

                  {/* Profile image - Much bigger with enhanced glow */}
                  <div className="relative w-48 h-48 rounded-full overflow-hidden border-6 border-slate-950 shadow-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20">
                    {/* Inner glow ring */}
                    <motion.div
                      animate={{ 
                        opacity: [0.3, 0.7, 0.3],
                        scale: [0.98, 1.02, 0.98]
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="absolute inset-0 rounded-full ring-4 ring-cyan-400/50 ring-inset"
                    />
                    
                    <img 
                      src="https://avatars.githubusercontent.com/raed-houimli" 
                      alt={personalInfo.name} 
                      className="w-full h-full object-cover relative z-10" 
                      onError={(e) => { 
                        e.currentTarget.style.display = 'none'; 
                        const parent = e.currentTarget.parentElement; 
                        if (parent) { 
                          parent.innerHTML = `<div class="w-full h-full flex items-center justify-center text-5xl font-black text-cyan-400 bg-gradient-to-br from-cyan-500/20 to-blue-500/20">${personalInfo.name.split(' ').map(n => n[0]).join('')}</div>`; 
                        }
                      }} 
                    />
                    
                    {/* Overlay glow effect */}
                    <motion.div
                      animate={{ 
                        opacity: [0, 0.2, 0]
                      }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                      className="absolute inset-0 bg-gradient-to-br from-cyan-400/30 via-transparent to-blue-400/30 rounded-full"
                    />
                  </div>

                  {/* Status badge on profile */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1.5, type: "spring" }}
                    className="absolute -bottom-2 -right-2 w-10 h-10 bg-green-500 rounded-full shadow-lg flex items-center justify-center border-4 border-slate-950"
                  >
                    <motion.span
                      animate={{ scale: [1, 1.3, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-3 h-3 bg-white rounded-full shadow-[0_0_8px_rgba(255,255,255,0.8)]"
                    />
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
