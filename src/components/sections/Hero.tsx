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
              {/* Golden breathing glow rings */}
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -inset-4 md:-inset-5 lg:-inset-6 rounded-full bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-400 blur-2xl md:blur-3xl"
              />
              
              <motion.div
                animate={{
                  scale: [1.1, 1, 1.1],
                  opacity: [0.4, 0.7, 0.4]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
                className="absolute -inset-2 md:-inset-3 lg:-inset-3 rounded-full bg-gradient-to-l from-amber-300 via-yellow-500 to-amber-300 blur-xl md:blur-2xl"
              />

              {/* Profile image with golden border */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-3 md:border-4 border-amber-500 shadow-xl md:shadow-2xl bg-bg-secondary dark:bg-bg-dark-secondary">
                <motion.div
                  animate={{
                    opacity: [0.5, 0.8, 0.5],
                    scale: [0.98, 1.02, 0.98]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute inset-0 rounded-full ring-2 ring-amber-400/60 ring-inset"
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
                    opacity: [0, 0.3, 0]
                  }}
                  transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                  className="absolute inset-0 bg-gradient-to-br from-amber-400/40 via-transparent to-yellow-400/30 rounded-full"
                />
              </div>

              {/* Active status with golden pulse */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.6, type: "spring" }}
                className="absolute -bottom-2 md:-bottom-3 -right-2 md:-right-3 w-8 h-8 md:w-10 md:h-10 lg:w-10 lg:h-10 rounded-full shadow-lg flex items-center justify-center border-3 md:border-4 border-bg dark:border-bg-dark z-20 bg-gradient-to-br from-amber-400 to-yellow-500"
              >
                <motion.span
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-2 h-2 md:w-3 md:h-3 bg-white rounded-full shadow-[0_0_12px_rgba(255,255,255,0.8)]"
                />
              </motion.div>
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
              Full-Stack Engineer & DevOps Specialist building scalable applications and infrastructure. <span className="text-accent font-semibold block md:inline">FastAPI • Node.js • React.js • AWS • Kubernetes</span>
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
