import { useState } from 'react';
import { motion } from 'framer-motion';
import { projects } from '../../data/content';
import { ProjectFilter } from '../ProjectFilter';

type CategoryType = 'All' | 'DevOps/Cloud' | 'FullStack' | 'ML/AI' | 'Cloud Native';

export const ProjectsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>('All');
  
  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  return (
    <section id="projects" className="section-shell relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent-primary rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-12">
            <p className="kicker mb-3">Portfolio</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-2">Case Studies</h2>
            <p className="text-text-secondary-light dark:text-text-secondary-dark mb-6 text-sm">
              Real-world solutions for infrastructure automation, CI/CD, and cloud deployment challenges.
            </p>
            <div className="section-divider mt-8"></div>
          </div>

          <ProjectFilter onFilterChange={setSelectedCategory} />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredProjects.map((project, idx) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="card-neo p-5 card-hover group"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-bold leading-tight">{project.title}</h3>
                  {project.featured && <span className="badge text-xs">Featured</span>}
                </div>
                <p className="text-text-secondary-light dark:text-text-secondary-dark mb-4 leading-relaxed text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.technologies.slice(0, 4).map(tech => (
                    <span key={tech} className="px-2 py-0.5 bg-accent-primary/10 text-accent-primary rounded text-xs font-medium">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-2 py-0.5 text-xs text-text-muted-light dark:text-text-muted-dark">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>
                <div className="flex gap-3 text-xs">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-accent-primary hover:underline font-medium">
                      GitHub →
                    </a>
                  )}
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-accent-primary hover:underline font-medium">
                      Live →
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
