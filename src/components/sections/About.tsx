import React from 'react';
import { motion } from 'framer-motion';
import { about } from '../../data/content';

export const About: React.FC = () => {
  return (
    <section id="about" className="section-padding bg-surface-light dark:bg-surface-dark">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About</h2>
            <div className="w-16 h-1 bg-accent-primary rounded-full"></div>
          </div>

          {/* Content */}
          <div className="max-w-4xl">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              {about.summary.split('\n\n').map((paragraph, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-text-secondary-light dark:text-text-secondary-dark leading-relaxed mb-6"
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
