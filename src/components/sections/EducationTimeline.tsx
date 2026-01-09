import React from 'react';
import { motion } from 'framer-motion';
import { education } from '../../data/content';

export const EducationTimeline: React.FC = () => {
  const bachelor = education[0];
  const masters = education.slice(1);

  const getDegreeIcon = (degree: string) => {
    if (degree.includes('BSc')) {
      return (
        <div className="w-12 h-12 rounded-full bg-accent-primary/10 flex items-center justify-center">
          <svg className="w-6 h-6 text-accent-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C6.5 6.253 2 8.997 2 12.5s4.5 6.247 10 6.247m0-13c5.5 0 10 2.744 10 6.247m0 0v13m0-13C21.5 6.253 26 8.997 26 12.5s-4.5 6.247-10 6.247m0 0v13" />
          </svg>
        </div>
      );
    }
    return (
      <div className="w-12 h-12 rounded-full bg-accent-secondary/10 flex items-center justify-center">
        <svg className="w-6 h-6 text-accent-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      </div>
    );
  };

  return (
    <div className="space-y-16">
      {/* Bachelor's Degree - Featured */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex justify-center"
      >
        <div className="relative w-full max-w-lg">
          {/* Decorative background */}
          <div className="absolute inset-0 bg-gradient-to-r from-accent-primary/5 to-accent-secondary/5 rounded-2xl blur-xl"></div>
          
          {/* Card */}
          <div className="relative card p-8 border-2 border-accent-primary/20">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                {getDegreeIcon(bachelor.degree)}
              </div>
              <div className="flex-1">
                <div className="inline-block px-3 py-1 bg-accent-primary/10 rounded-full mb-3">
                  <p className="text-xs font-semibold text-accent-primary uppercase tracking-wider">Academic Excellence</p>
                </div>
                <h4 className="font-bold text-2xl mb-2">{bachelor.degree}</h4>
                <p className="text-text-secondary-light dark:text-text-secondary-dark font-medium mb-1">
                  {bachelor.institution}
                </p>
                <p className="text-sm text-text-muted-light dark:text-text-muted-dark flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                  {bachelor.location}
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Arrow Down - Animated */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex justify-center"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center space-y-2"
        >
          <svg
            className="w-8 h-8 text-accent-primary"
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
          <p className="text-xs font-semibold text-accent-primary uppercase tracking-widest">Advanced Specialization</p>
        </motion.div>
      </motion.div>

      {/* Master's Degrees - Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {masters.map((edu, index) => (
          <motion.div
            key={edu.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 + 0.3 }}
            className="group"
          >
            <div className="relative h-full">
              {/* Glow effect on hover */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-accent-primary/20 to-accent-secondary/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-300"></div>
              
              {/* Card */}
              <div className="relative card p-6 h-full hover:border-accent-primary/30 transition-all duration-300">
                {/* Step indicator */}
                <div className="absolute -top-4 -right-4">
                  <div className="w-10 h-10 rounded-full bg-accent-secondary text-white flex items-center justify-center font-bold text-sm shadow-lg">
                    {index + 2}
                  </div>
                </div>

                {/* Icon */}
                <div className="mb-4">
                  {getDegreeIcon(edu.degree)}
                </div>

                {/* Content */}
                <h4 className="font-bold text-lg mb-2 leading-tight">{edu.degree}</h4>
                
                {/* Institution with icon */}
                <p className="text-text-secondary-light dark:text-text-secondary-dark font-medium mb-3 flex items-start">
                  <span className="inline-block w-1.5 h-1.5 bg-accent-secondary rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                  <span>{edu.institution}</span>
                </p>

                {/* Location */}
                <div className="pt-3 border-t border-border-light dark:border-border-dark">
                  <p className="text-sm text-text-muted-light dark:text-text-muted-dark flex items-center">
                    <svg className="w-3.5 h-3.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    </svg>
                    {edu.location}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Summary stat */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="text-center pt-8"
      >
        <p className="text-sm text-text-muted-light dark:text-text-muted-dark uppercase tracking-widest">
          Progressive Specialization: Foundation → Advanced Mastery
        </p>
      </motion.div>
    </div>
  );
};
