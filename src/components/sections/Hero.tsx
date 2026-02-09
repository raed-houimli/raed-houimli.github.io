import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../../data/content';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 pb-16 section-shell overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-8"
          >
            <div className="relative w-52 h-52">
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
                className="absolute -inset-6 rounded-full bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-400 blur-3xl"
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
                className="absolute -inset-3 rounded-full bg-gradient-to-l from-amber-300 via-yellow-500 to-amber-300 blur-2xl"
              />

              {/* Profile image with golden border */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-amber-500 shadow-2xl bg-bg-secondary dark:bg-bg-dark-secondary">
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
                className="absolute -bottom-3 -right-3 w-10 h-10 rounded-full shadow-lg flex items-center justify-center border-4 border-bg dark:border-bg-dark z-20 bg-gradient-to-br from-amber-400 to-yellow-500"
              >
                <motion.span
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-3 h-3 bg-white rounded-full shadow-[0_0_12px_rgba(255,255,255,0.8)]"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              {personalInfo.name}
            </h1>
            
            <p className="text-xl text-text-secondary dark:text-text-dark-secondary mb-8 max-w-2xl mx-auto">
              Full-Stack Engineer & DevOps Specialist building scalable applications and infrastructure. <span className="text-accent font-semibold">FastAPI • Node.js • React.js • AWS • Kubernetes</span>
            </p>

            <p className="text-text-secondary dark:text-text-dark-secondary mb-8 max-w-2xl mx-auto">
              {personalInfo.bio}
            </p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-wrap gap-4 justify-center"
            >
              <motion.button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                Schedule a Call
              </motion.button>

              <motion.button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary"
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
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  );
};
