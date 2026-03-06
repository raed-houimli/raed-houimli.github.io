import { useState } from 'react';
import { motion } from 'framer-motion';
import { projects } from '../../data/content';
import { ProjectFilter } from '../ProjectFilter';

type CategoryType = 'All' | 'DevOps/Cloud' | 'FullStack' | 'ML/AI' | 'Cloud Native';

export const ProjectsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>('All');
  const priorityProjectIds = [
    'alphastack-project',
    'phishguard-ai-project',
    'cloudpipelinex-project',
    'networkspark-project',
    'infraui-project',
    'robonav-ai-project',
    'secure-mlops-platform',
    'distributed-ai-observability',
    'zero-trust-delivery-workflow',
  ];
  const priorityRank = new Map(priorityProjectIds.map((projectId, index) => [projectId, index]));
  
  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);
  const sortedProjects = [...filteredProjects].sort((firstProject, secondProject) => {
    const firstRank = priorityRank.get(firstProject.id) ?? Number.MAX_SAFE_INTEGER;
    const secondRank = priorityRank.get(secondProject.id) ?? Number.MAX_SAFE_INTEGER;
    return firstRank - secondRank;
  });
  const currentProjects = sortedProjects.slice(0, 8);

  const handleFilterChange = (category: CategoryType) => {
    setSelectedCategory(category);
  };

  return (
    <section id="projects" className="section-shell">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="section-header mb-6">
            <p className="kicker mb-2">Portfolio</p>
            <h2 className="section-title">Case Studies</h2>
            <p className="section-subtitle text-sm">
              Selected implementations in DevSecOps, secure cloud systems, and automation-driven platform engineering
            </p>
          </div>

          <ProjectFilter onFilterChange={handleFilterChange} />

          {/* Projects Grid - Compact */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {currentProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="card-neo p-3 group hover:shadow-md hover:border-accent-primary/20"
              >
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-bold text-xs leading-tight flex-1">
                    {project.title}
                  </h3>
                  {project.featured && (
                    <span className="badge flex-shrink-0">Featured</span>
                  )}
                </div>
                
                <p className="text-xs text-text-secondary-light dark:text-text-secondary-dark mb-2 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1 mb-2">
                  {project.technologies.slice(0, 3).map(tech => (
                    <span key={tech} className="tech-badge text-xs">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="text-xs text-text-muted-light dark:text-text-muted-dark">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                <div className="flex gap-2 text-xs">
                  {project.github && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-accent-primary hover:underline font-bold"
                    >
                      Code
                    </a>
                  )}
                  {project.live && (
                    <a 
                      href={project.live} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-accent-primary hover:underline font-bold"
                    >
                      Live
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
