import React from 'react';
import { motion } from 'framer-motion';
import { experiences } from '../../data/content';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="section-shell">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="section-header mb-8">
            <p className="kicker mb-2">Experience</p>
            <h2 className="section-title">Career Timeline</h2>
            <p className="section-subtitle text-sm">
              5+ years: Full-Stack Development → DevOps Engineering
            </p>
          </div>

          {/* Timeline */}
          <div className="max-w-3xl mx-auto space-y-4">
            {/* Freelance - Current */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="enterprise-card p-4"
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-bold text-sm text-accent-primary">
                      {experiences[0].company}
                    </h3>
                    <motion.span 
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="badge"
                    >
                      Current
                    </motion.span>
                  </div>
                  <p className="font-bold text-xs mb-1">{experiences[0].title}</p>
                  <div className="flex flex-wrap items-center gap-3 text-xs text-text-muted-light dark:text-text-muted-dark">
                    <span>Dec 2025 – Present</span>
                    <span>•</span>
                    <span>{experiences[0].location}</span>
                  </div>
                </div>
              </div>
              <p className="text-xs text-text-secondary-light dark:text-text-secondary-dark mb-2 leading-relaxed">
                {experiences[0].description}
              </p>
              <div className="flex flex-wrap gap-1">
                {experiences[0].technologies.slice(0, 5).map(tech => (
                  <span key={tech} className="tech-badge text-xs">{tech}</span>
                ))}
                {experiences[0].technologies.length > 5 && (
                  <span className="text-xs text-text-muted-light dark:text-text-muted-dark">
                    +{experiences[0].technologies.length - 5}
                  </span>
                )}
              </div>
            </motion.div>

            {/* Ministry of Defense - Combined */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="card-neo p-4 border-l-2 border-accent-primary"
            >
              <div className="mb-4">
                <h3 className="font-bold text-sm text-accent-primary mb-1">
                  Ministry of Defense – Tunisia
                </h3>
                <div className="flex items-center gap-3 text-xs text-text-muted-light dark:text-text-muted-dark">
                  <span>Jul 2020 – Nov 2025</span>
                  <span>•</span>
                  <span>5 years</span>
                </div>
              </div>

              {/* DevOps Role */}
              <div className="mb-4 pb-4 border-b border-border-light/50 dark:border-border-dark/50">
                <p className="font-bold text-xs mb-2 text-text-primary-light dark:text-text-primary-dark">
                  DevOps Engineer (Sep 2023 – Nov 2025)
                </p>
                <p className="text-xs text-text-secondary-light dark:text-text-secondary-dark mb-2 leading-relaxed">
                  {experiences[1].description}
                </p>
                <div className="flex flex-wrap gap-1">
                  {experiences[1].technologies.slice(0, 4).map(tech => (
                    <span key={tech} className="tech-badge text-xs">{tech}</span>
                  ))}
                </div>
              </div>

              {/* Software Role */}
              <div>
                <p className="font-bold text-xs mb-2 text-text-primary-light dark:text-text-primary-dark">
                  Software Engineer (Jul 2020 – Aug 2023)
                </p>
                <p className="text-xs text-text-secondary-light dark:text-text-secondary-dark mb-2 leading-relaxed">
                  {experiences[2].description}
                </p>
                <div className="flex flex-wrap gap-1">
                  {experiences[2].technologies.slice(0, 4).map(tech => (
                    <span key={tech} className="tech-badge text-xs">{tech}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
