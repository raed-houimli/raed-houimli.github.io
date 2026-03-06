import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../../data/content';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-12 pb-20 md:pt-16 md:pb-24 lg:pt-20 lg:pb-32 section-shell overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-6 md:mb-8"
          >
            <div className="relative w-32 h-32 md:w-40 md:h-40 lg:w-52 lg:h-52">
              {/* Subtle ambient ring */}
              <motion.div
                animate={{
                  scale: [1, 1.08, 1],
                  opacity: [0.2, 0.35, 0.2]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -inset-4 md:-inset-5 lg:-inset-6 rounded-full bg-gradient-to-r from-slate-300 via-slate-400 to-slate-300 dark:from-slate-700 dark:via-slate-600 dark:to-slate-700 blur-2xl"
              />
              
              <motion.div
                animate={{
                  scale: [1.06, 1, 1.06],
                  opacity: [0.24, 0.38, 0.24]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
                className="absolute -inset-2 md:-inset-3 lg:-inset-3 rounded-full bg-gradient-to-l from-slate-200 via-slate-300 to-slate-200 dark:from-slate-700 dark:via-slate-600 dark:to-slate-700 blur-xl"
              />

              {/* Profile image with subtle border */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-2 md:border-4 border-slate-300 dark:border-slate-600 shadow-xl md:shadow-2xl bg-surface-light dark:bg-surface-dark">
                <motion.div
                  animate={{
                    opacity: [0.25, 0.45, 0.25],
                    scale: [0.98, 1.02, 0.98]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute inset-0 rounded-full ring-2 ring-slate-300/80 dark:ring-slate-500/70 ring-inset"
                />

                <img
                  src="https://avatars.githubusercontent.com/raed-houimli"
                  alt={personalInfo.name}
                  className="w-full h-full object-cover relative z-10"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />

                <motion.div
                  animate={{
                    opacity: [0, 0.16, 0]
                  }}
                  transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                  className="absolute inset-0 bg-gradient-to-br from-slate-200/40 via-transparent to-slate-300/40 dark:from-slate-700/30 dark:to-slate-600/30 rounded-full"
                />
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center px-2 md:px-0"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4">
              {personalInfo.name}
            </h1>
            
            <p className="text-base md:text-lg lg:text-xl text-text-secondary dark:text-text-dark-secondary mb-6 md:mb-8 max-w-2xl mx-auto">
              DevSecOps Engineer • Cloud & Security Engineer • MLOps Enthusiast building secure, scalable platforms. <span className="text-accent-primary font-semibold block md:inline">DevSecOps • AI/ML Systems • AWS • Kubernetes</span>
            </p>

            <p className="text-sm md:text-base text-text-secondary dark:text-text-dark-secondary mb-6 md:mb-8 max-w-2xl mx-auto">
              {personalInfo.bio}
            </p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-col md:flex-row flex-wrap gap-3 md:gap-4 justify-center px-2"
            >
              <motion.button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary w-full md:w-auto"
              >
                Schedule a Call
              </motion.button>

              <motion.button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary w-full md:w-auto"
              >
                View Projects
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
        className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2"
      >
        <svg className="w-5 h-5 md:w-6 md:h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  );
};
