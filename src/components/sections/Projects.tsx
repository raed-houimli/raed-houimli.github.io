import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '../../data/content';

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="section-header">
            <h2 className="section-title" aria-label="Projects by Raed Houimli">Projects</h2>
            <div className="w-16 h-1 bg-accent-primary rounded-full" role="presentation"></div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card-luxe p-8 transition-shadow duration-300"
                aria-label={`Project: ${project.title} by Raed Houimli`}
              >
                {/* Project Title */}
                <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
                
                {/* Description */}
                <p className="text-text-secondary-light dark:text-text-secondary-dark mb-6">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="font-semibold text-sm uppercase tracking-wide text-text-muted-light dark:text-text-muted-dark mb-2">
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 text-xs bg-background-light dark:bg-background-dark rounded-md text-text-secondary-light dark:text-text-secondary-dark border border-border-light dark:border-border-dark"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Architecture */}
                <div className="mb-6">
                  <h4 className="font-semibold text-sm uppercase tracking-wide text-text-muted-light dark:text-text-muted-dark mb-2">
                    Architecture
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.architecture?.map((arch, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 text-xs bg-accent-primary/10 text-accent-primary rounded-md"
                      >
                        {arch}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex items-center gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm font-medium text-accent-primary hover:underline"
                    >
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                      View Code
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm font-medium text-accent-primary hover:underline"
                    >
                      <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Live Demo
                    </a>
                  )}
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
