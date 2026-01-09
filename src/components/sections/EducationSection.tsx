import React from 'react';
import { motion } from 'framer-motion';
import { EducationTimeline } from './EducationTimeline';

export const Education: React.FC = () => {
  return (
    <section id="education" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Education</h2>
            <div className="w-16 h-1 bg-accent-primary rounded-full"></div>
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
