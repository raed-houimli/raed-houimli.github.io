import React from 'react';
import { motion } from 'framer-motion';
import { experiences } from '../../data/content';

export const Experience: React.FC = () => {
  // Group experiences by company
  const groupedExperiences = experiences.reduce((acc, exp) => {
    const existing = acc.find(item => item.company === exp.company);
    if (existing) {
      existing.positions.push(exp);
    } else {
      acc.push({ company: exp.company, location: exp.location, positions: [exp] });
    }
    return acc;
  }, [] as Array<{ company: string; location: string; positions: typeof experiences }>);

  return (
    <section id="experience" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" aria-label="Professional Experience of Raed Houimli">Experience</h2>
            <div className="w-16 h-1 bg-accent-primary rounded-full" role="presentation"></div>
          </div>

          {/* Experience Items */}
          <div className="space-y-12">
            {groupedExperiences.map((group, index) => (
              <motion.article
                key={group.company}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card p-8"
                aria-label={`Positions at ${group.company}`}
              >
                {/* Company Header */}
                <div className="mb-8">
                  <h3 className="text-2xl font-semibold mb-2">{group.company}</h3>
                  <p className="text-sm text-text-muted-light dark:text-text-muted-dark">
                    {group.location}
                  </p>
                </div>

                {/* Positions */}
                <div className="space-y-8 relative">
                  {/* Timeline line */}
                  {group.positions.length > 1 && (
                    <div className="absolute left-0 top-8 bottom-8 w-0.5 bg-gradient-to-b from-accent-primary via-blue-400 to-accent-primary opacity-30"></div>
                  )}
                  
                  {group.positions.map((exp, posIdx) => (
                    <div
                      key={exp.id}
                      className="relative pl-8"
                    >
                      {/* Timeline dot */}
                      {group.positions.length > 1 && (
                        <div className="absolute left-0 top-6 w-3 h-3 bg-accent-primary rounded-full border-4 border-background-light dark:border-background-dark shadow-lg"></div>
                      )}
                      
                      <div className={posIdx > 0 ? 'border-t border-border-light dark:border-border-dark pt-8 -ml-8 pl-8' : ''}>
                        {/* Position Title and Period */}
                        <div className="mb-4">
                          <h4 className="text-lg font-semibold text-text-primary-light dark:text-text-primary-dark mb-1">
                            {exp.title}
                          </h4>
                          <p className="text-sm text-text-muted-light dark:text-text-muted-dark">
                            {exp.period}
                          </p>
                        </div>

                        {/* Description */}
                        <p className="text-text-secondary-light dark:text-text-secondary-dark mb-4 leading-relaxed text-sm">
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
                                <span className="inline-block w-1.5 h-1.5 bg-accent-primary rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
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
                            {exp.technologies.map((tech, idx) => (
                              <span
                                key={idx}
                                className="px-2 py-1 text-xs bg-background-light dark:bg-background-dark rounded-md text-text-secondary-light dark:text-text-secondary-dark border border-border-light dark:border-border-dark"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
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
