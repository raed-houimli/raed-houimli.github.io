import React from 'react';
import { motion } from 'framer-motion';
import { experiences } from '../../data/content';

export const Experience: React.FC = () => {
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
            {experiences.map((exp, index) => (
              <motion.article
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card p-8"
                aria-label={`Position: ${exp.title} at ${exp.company}`}
              >
                {/* Header */}
                <div className="mb-6">
                  <h3 className="text-2xl font-semibold mb-2">{exp.title}</h3>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between text-text-secondary-light dark:text-text-secondary-dark mb-2">
                    <p className="font-medium">{exp.company}</p>
                    <p className="text-sm">{exp.period}</p>
                  </div>
                  <p className="text-sm text-text-muted-light dark:text-text-muted-dark">
                    {exp.location}
                  </p>
                </div>

                {/* Description */}
                <p className="text-text-secondary-light dark:text-text-secondary-dark mb-6 leading-relaxed">
                  {exp.description}
                </p>

                {/* Highlights */}
                <div className="mb-6">
                  <h4 className="font-semibold mb-3 text-text-primary-light dark:text-text-primary-dark">
                    Key Achievements
                  </h4>
                  <ul className="space-y-3">
                    {exp.highlights.map((highlight, idx) => (
                      <li
                        key={idx}
                        className="flex items-start text-text-secondary-light dark:text-text-secondary-dark"
                      >
                        <span className="inline-block w-1.5 h-1.5 bg-accent-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="font-semibold mb-3 text-text-primary-light dark:text-text-primary-dark">
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 text-sm bg-background-light dark:bg-background-dark rounded-md text-text-secondary-light dark:text-text-secondary-dark border border-border-light dark:border-border-dark"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
