import React from 'react';
import { motion } from 'framer-motion';
import { education } from '../../data/content';

export const Education: React.FC = () => {
  return (
    <section id="education" className="section-shell">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <div className="section-header">
            <p className="kicker mb-2">Education</p>
            <h2 className="section-title">Academic Background</h2>
            <p className="section-subtitle">
              Formal training in software engineering, data science, and security systems.
            </p>
          </div>

          <div className="max-w-5xl space-y-3">
            {education.map((degree, index) => (
              <motion.article
                key={degree.id}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.04 }}
                className="card p-4"
              >
                <h3 className="text-base mb-1">{degree.degree}</h3>
                <p className="text-sm text-text-secondary">{degree.institution}</p>
                <p className="text-xs text-text-muted mt-1">{degree.location}</p>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
