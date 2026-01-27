import React from 'react';
import { motion } from 'framer-motion';
import { EducationTimeline } from './EducationTimeline';

export const Education: React.FC = () => {
  return (
    <section id="education" className="section-padding bg-surface-light dark:bg-surface-dark">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header with Description */}
          <div className="mb-16">
            <div className="flex items-center space-x-3 mb-4">
              <h2 className="text-3xl md:text-4xl font-bold" aria-label="Academic Background of Raed Houimli">Academic Excellence</h2>
              <div className="hidden md:block w-12 h-12 rounded-full bg-accent-primary/10 flex items-center justify-center" role="presentation">
                <svg className="w-6 h-6 text-accent-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>
            <div className="w-16 h-1 bg-accent-primary rounded-full mb-6" role="presentation"></div>
            <p className="text-lg text-text-secondary-light dark:text-text-secondary-dark max-w-3xl leading-relaxed">
              Rigorous multi-disciplinary education spanning <span className="font-semibold">Information Technology, Software Engineering, Mathematics & Data Science, and Cybersecurity Engineering</span>. Advanced degrees from Tunisia's leading institutions.
            </p>
          </div>

          {/* Education Timeline */}
          <div className="max-w-4xl">
            <EducationTimeline />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
