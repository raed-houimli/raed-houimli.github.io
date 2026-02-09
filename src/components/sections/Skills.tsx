import React from 'react';
import { motion } from 'framer-motion';
import { skillCategories } from '../../data/content';

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="section-shell bg-surface-light dark:bg-surface-dark">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="section-header">
            <p className="kicker mb-3">Core Competencies</p>
            <h2 className="section-title">Technical Expertise</h2>
            <div className="section-divider mt-6"></div>
          </div>

          {/* Skill Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card-luxe p-4"
                aria-label={`Skill category: ${category.category}`}
              >
                <h3 className="text-lg font-semibold mb-3 text-text-primary-light dark:text-text-primary-dark">
                  {category.category}
                </h3>
                <ul className="space-y-1.5">
                  {category.skills.map((skill, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-text-secondary-light dark:text-text-secondary-dark"
                    >
                      <span className="inline-block w-1 h-1 bg-accent-primary rounded-full mr-2.5 flex-shrink-0"></span>
                      <span className="text-xs">{skill.name}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
