import React from 'react';
import { motion } from 'framer-motion';
import { education } from '../../data/content';

export const Education: React.FC = () => {
  const bachelor = education[0];
  const masters = education.slice(1);

  return (
    <section id="education" className="section-shell relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/5 via-background-light to-accent-secondary/5 dark:from-accent-primary/3 dark:via-background-dark dark:to-accent-secondary/3"></div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="section-header">
            <p className="kicker mb-2">Academic Foundation</p>
            <h2 className="section-title bg-gradient-to-r from-accent-secondary via-accent-primary to-accent-secondary bg-clip-text text-transparent">
              Education
            </h2>
            <p className="section-subtitle">
              <span className="font-semibold text-accent-primary">Software Engineering, Data Science, and Cybersecurity</span>
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            {/* Bachelor's Degree */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <div className="card-luxe p-5 border-2 border-blue-500/20">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-2xl">🎓</span>
                      <div>
                        <h3 className="font-bold text-accent-primary">{bachelor.degree}</h3>
                        <p className="text-xs text-text-secondary-light dark:text-text-secondary-dark">{bachelor.institution}</p>
                      </div>
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-bold rounded-full">BSc</span>
                </div>
              </div>
            </motion.div>

            {/* Arrow */}
            <motion.div
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex justify-center mb-6"
            >
              <svg className="w-5 h-5 text-accent-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </motion.div>

            {/* Master's Degrees */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {masters.map((degree, index) => {
                const icons = ['💻', '📊', '🔐'];
                const colors = [
                  'border-purple-500/20',
                  'border-green-500/20',
                  'border-red-500/20'
                ];

                return (
                  <motion.div
                    key={degree.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group relative"
                  >
                    <div className={`card-luxe p-4 border-2 ${colors[index]} h-full`}>
                      {/* Step Badge */}
                      <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-gradient-to-br from-accent-primary to-accent-secondary text-white flex items-center justify-center font-bold text-xs shadow-lg">
                        {index + 2}
                      </div>

                      {/* Content */}
                      <div className="flex items-start gap-3 mb-3">
                        <span className="text-2xl">{icons[index]}</span>
                        <div className="flex-1">
                          <h4 className="text-sm font-bold leading-tight">{degree.degree}</h4>
                          <p className="text-xs text-text-muted-light dark:text-text-muted-dark">{degree.institution}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-1.5 text-xs text-text-secondary-light dark:text-text-secondary-dark">
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        </svg>
                        {degree.location}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Stats Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3"
            >
              {[
                { value: '4', label: 'Degrees' },
                { value: '3', label: 'Masters' },
                { value: '3', label: 'Specs' },
                { value: '∞', label: 'Learning' }
              ].map((stat, i) => (
                <div key={i} className="text-center p-4 rounded-lg bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark">
                  <div className="text-2xl font-black text-accent-primary">{stat.value}</div>
                  <div className="text-xs font-bold text-text-muted-light dark:text-text-muted-dark">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
