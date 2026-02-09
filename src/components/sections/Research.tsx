import React from 'react';
import { motion } from 'framer-motion';

export const Research: React.FC = () => {
  return (
    <section id="research" className="section-shell">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="section-header">
            <h2 className="section-title" aria-label="Research Work by Raed Houimli">Research</h2>
            <div className="w-16 h-1 bg-accent-primary rounded-full" role="presentation"></div>
          </div>

          {/* Placeholder Content */}
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="card-luxe p-12 text-center"
            >
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-accent-primary/10 flex items-center justify-center">
                  <svg className="w-8 h-8 text-accent-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5h.01" />
                  </svg>
                </div>
              </div>
              <p className="text-text-secondary-light dark:text-text-secondary-dark text-lg">
                Research work and publications coming soon
              </p>
              <p className="text-text-muted-light dark:text-text-muted-dark text-sm mt-2">
                Details about research projects, papers, and contributions will be added here
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
