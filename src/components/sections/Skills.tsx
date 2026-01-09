import React from 'react';
import { motion } from 'framer-motion';
import { skillCategories } from '../../data/content';

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="section-padding bg-surface-light dark:bg-surface-dark">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills</h2>
            <div className="w-16 h-1 bg-accent-primary rounded-full"></div>
          </div>

          {/* Skill Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card p-6"
              >
                <h3 className="text-xl font-semibold mb-4 text-text-primary-light dark:text-text-primary-dark">
                  {category.category}
                </h3>
                <ul className="space-y-2">
                  {category.skills.map((skill, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-text-secondary-light dark:text-text-secondary-dark"
                    >
                      <span className="inline-block w-1.5 h-1.5 bg-accent-primary rounded-full mr-3 flex-shrink-0"></span>
                      <span className="text-sm">{skill.name}</span>
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
