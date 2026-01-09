import React from 'react';
import { motion } from 'framer-motion';
import { education } from '../../data/content';

export const EducationTimeline: React.FC = () => {
  const bachelor = education[0];
  const masters = education.slice(1);

  return (
    <div className="space-y-12">
      {/* Bachelor's Degree - Center */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex justify-center"
      >
        <div className="card p-6 w-full max-w-sm">
          <h4 className="font-semibold text-lg mb-2">{bachelor.degree}</h4>
          <p className="text-text-secondary-light dark:text-text-secondary-dark mb-1">
            {bachelor.institution}
          </p>
          <p className="text-sm text-text-muted-light dark:text-text-muted-dark">
            {bachelor.location}
          </p>
        </div>
      </motion.div>

      {/* Arrow Down */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex justify-center"
      >
        <div className="flex flex-col items-center space-y-2">
          <svg
            className="w-6 h-6 text-accent-primary animate-bounce"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </motion.div>

      {/* Master's Degrees - Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {masters.map((edu, index) => (
          <motion.div
            key={edu.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
          >
            <div className="card p-6 h-full">
              <div className="flex items-start space-x-2 mb-3">
                <div className="w-2 h-2 bg-accent-primary rounded-full mt-2 flex-shrink-0"></div>
                <h4 className="font-semibold text-lg">{edu.degree}</h4>
              </div>
              <p className="text-text-secondary-light dark:text-text-secondary-dark mb-2">
                {edu.institution}
              </p>
              <p className="text-sm text-text-muted-light dark:text-text-muted-dark">
                {edu.location}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
