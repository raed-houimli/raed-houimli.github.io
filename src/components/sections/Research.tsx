import React from 'react';
import { motion } from 'framer-motion';

export const Research: React.FC = () => {
  const interests = [
    'AI for Cybersecurity',
    'Secure Cloud Infrastructure',
    'DevSecOps Automation',
    'MLOps for Secure AI Systems',
    'Autonomous and Intelligent Systems Security',
    'AI/ML applied to distributed cloud environments',
  ];

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
            <p className="section-subtitle mt-3">
              Research-oriented engineering interests focused on secure AI and cloud-native systems, with active motivation to pursue PhD pathways.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="card-luxe p-8 md:p-10"
            >
              <h3 className="text-lg font-semibold mb-3">Research Interests</h3>
              <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark leading-relaxed mb-4">
                Current interests sit at the intersection of cybersecurity, AI/ML, and cloud systems engineering, with emphasis on robust and secure deployment of intelligent infrastructure.
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                {interests.map((topic) => (
                  <span key={topic} className="tech-badge text-xs">
                    {topic}
                  </span>
                ))}
              </div>
              <div className="mt-5 pt-4 border-t border-border-light dark:border-border-dark">
                <p className="text-xs text-text-muted-light dark:text-text-muted-dark">
                  Open to research collaboration and PhD opportunities in Cybersecurity, AI, and AI/ML for distributed cloud systems.
                </p>
              </div>
                </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
