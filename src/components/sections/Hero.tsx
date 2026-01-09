import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../../data/content';

export const Hero: React.FC = () => {
  return (
    <section className="section-padding min-h-[80vh] flex items-center">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl"
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
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tight"
          >
            {personalInfo.name}
          </motion.h1>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-8 text-text-secondary-light dark:text-text-secondary-dark"
          >
            {personalInfo.title}
          </motion.h2>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-lg md:text-xl text-text-muted-light dark:text-text-muted-dark max-w-2xl mb-12 leading-relaxed"
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
            <a href="#projects" className="btn-secondary">
              View projects
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
