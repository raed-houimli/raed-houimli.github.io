import React from 'react';
import { motion } from 'framer-motion';
import { experiences } from '../../data/content';

export const Experience: React.FC = () => {
  // Group experiences by company and reverse chronological order
  const groupedExperiences = experiences.reduce((acc, exp) => {
    const existing = acc.find(item => item.company === exp.company);
    if (existing) {
      existing.positions.push(exp);
    } else {
      acc.push({ company: exp.company, location: exp.location, positions: [exp] });
    }
    return acc;
  }, [] as Array<{ company: string; location: string; positions: typeof experiences }>);

  // Sort positions in reverse chronological order (newest first)
  groupedExperiences.forEach(group => {
    group.positions.sort((a, b) => {
      const aEnd = new Date(a.period.split(' – ')[1]).getTime();
      const bEnd = new Date(b.period.split(' – ')[1]).getTime();
      return bEnd - aEnd; // Newest first
    });
  });

  return (
    <section id="experience" className="section-shell">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="mb-16">
            <p className="kicker mb-3">Professional Background</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Experience & Track Record</h2>
            <div className="section-divider mt-8"></div>
          </div>

          {/* Experience Items by Company */}
          <div className="space-y-12">
            {groupedExperiences.map((group, groupIndex) => (
              <motion.article
                key={group.company}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: groupIndex * 0.1 }}
                className="card p-8"
              >
                {/* Company Header */}
                <div className="mb-8 pb-6 border-b border-border-light dark:border-border-dark">
                  <h3 className="text-2xl font-bold text-accent-primary mb-2">{group.company}</h3>
                  <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    </svg>
                    {group.location}
                  </p>
                </div>

                {/* Positions - Newest First */}
                <div className="space-y-8 relative">
                  {/* Timeline line */}
                  {group.positions.length > 1 && (
                    <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-primary via-accent-secondary to-accent-primary opacity-30"></div>
                  )}
                  
                  {group.positions.map((exp, posIdx) => (
                    <div key={exp.id} className="relative pl-8">
                      {/* Timeline dot */}
                      {group.positions.length > 1 && (
                        <div className="absolute left-0 top-1.5 w-4 h-4 bg-accent-primary rounded-full border-4 border-surface-light dark:border-surface-dark shadow-lg transform -translate-x-1.5"></div>
                      )}
                      
                      <div>
                        {/* Position Title and Period */}
                        <div className="mb-4 flex items-start justify-between">
                          <div>
                            <h4 className="text-lg font-bold text-text-primary-light dark:text-text-primary-dark mb-1">
                              {exp.title}
                            </h4>
                            <p className="text-sm text-text-muted-light dark:text-text-muted-dark font-semibold">
                              {exp.period}
                            </p>
                          </div>
                          {posIdx === 0 && group.positions.length > 1 && (
                            <span className="badge ml-2">Current Role</span>
                          )}
                        </div>

                        {/* Description */}
                        <p className="text-text-secondary-light dark:text-text-secondary-dark mb-4 leading-relaxed border-l-2 border-accent-primary/30 pl-4">
                          {exp.description}
                        </p>

                        {/* Highlights */}
                        <div className="mb-4">
                          <h5 className="font-semibold mb-2 text-text-primary-light dark:text-text-primary-dark text-sm">
                            Key Achievements
                          </h5>
                          <ul className="space-y-2">
                            {exp.highlights.map((highlight, idx) => (
                              <li
                                key={idx}
                                className="flex items-start text-text-secondary-light dark:text-text-secondary-dark text-sm"
                              >
                                <span className="inline-block w-1.5 h-1.5 bg-accent-secondary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <span>{highlight}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Technologies */}
                        <div>
                          <h5 className="font-semibold mb-2 text-text-primary-light dark:text-text-primary-dark text-sm">
                            Technologies
                          </h5>
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="px-3 py-1 text-xs bg-accent-primary/10 text-accent-primary rounded-md border border-accent-primary/20 font-medium"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Career Progression Separator */}
                        {posIdx < group.positions.length - 1 && (
                          <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="mt-6 pt-6 border-t border-border-light dark:border-border-dark flex justify-center"
                          >
                            <motion.svg
                              animate={{ y: [0, 4, 0] }}
                              transition={{ duration: 2, repeat: Infinity }}
                              className="w-5 h-5 text-accent-primary"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M7 16V4m0 0L3 8m0 0l4 4m10-4v12m0 0l4-4m0 0l-4-4"
                              />
                            </motion.svg>
                          </motion.div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
