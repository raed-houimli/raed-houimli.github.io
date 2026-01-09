import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../../data/content';

export const Hero: React.FC = () => {
  return (
    <section className="section-padding min-h-[90vh] flex items-center">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl"
          >
            {/* Greeting */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-accent-primary font-medium mb-4"
            >
              Hi, I'm
            </motion.p>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-5xl md:text-6xl lg:text-6xl font-bold mb-4 tracking-tight"
            >
              {personalInfo.name}
            </motion.h1>

            {/* Title */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 text-text-secondary-light dark:text-text-secondary-dark"
            >
              {personalInfo.title}
            </motion.h2>

            {/* Education Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="inline-flex items-center space-x-2 px-4 py-2 bg-accent-primary/10 rounded-full mb-6"
            >
              <svg className="w-5 h-5 text-accent-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span className="text-sm font-semibold text-accent-primary">
                4 Advanced Degrees • Academic Excellence
              </span>
     
            </motion.div>
                        <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="inline-flex items-center space-x-2 px-4 py-2 bg-accent-primary/10 rounded-full mb-6"
            >
              <svg className="w-5 h-5 text-accent-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>

                       <span className="text-sm font-semibold text-accent-primary">
                +5 years of professional Experience • MDN
              </span>
              </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-lg text-text-muted-light dark:text-text-muted-dark mb-12 leading-relaxed"
            >
              {personalInfo.tagline}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a href="#contact" className="btn-primary">
                Get in touch
              </a>
              <a href="#education" className="btn-secondary">
                View education
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column - Profile Picture */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden lg:flex justify-center"
          >
            <div className="relative w-80 h-80">
              {/* Decorative background glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/20 to-accent-secondary/20 rounded-full blur-2xl"></div>
              
              {/* Profile image container */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-accent-primary/30 bg-gradient-to-br from-surface-light to-background-light dark:from-surface-dark dark:to-background-dark">
                {/* Profile picture - place your image at /public/profile.jpg */}
                <img 
                  src="/profile.jpg" 
                  alt="Raed Houimli - Senior Software Engineer and DevOps Architect specializing in cloud infrastructure"
                  className="w-full h-full object-cover"
                  loading="eager"
                  onError={(e) => {
                    // Fallback to placeholder if image doesn't exist
                    e.currentTarget.style.display = 'none';
                    const placeholder = e.currentTarget.nextElementSibling;
                    if (placeholder) {
                      (placeholder as HTMLElement).style.display = 'flex';
                    }
                  }}
                />
                
                {/* Placeholder - shows if profile.jpg doesn't exist */}
                <div className="absolute inset-0 hidden items-center justify-center bg-gradient-to-br from-accent-primary/10 to-accent-secondary/10">
                  <div className="text-center p-6">
                    <svg className="w-32 h-32 text-accent-primary/30 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <p className="text-text-muted-light dark:text-text-muted-dark text-sm font-medium">
                      Add your profile picture<br />
                      <span className="text-xs">Place image at <code className="bg-background-light dark:bg-background-dark px-2 py-1 rounded">/public/profile.jpg</code></span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
