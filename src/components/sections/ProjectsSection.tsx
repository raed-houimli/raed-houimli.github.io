import { useState } from 'react';
import { motion } from 'framer-motion';
import { projects } from '../../data/content';
import { ProjectFilter } from '../ProjectFilter';

type CategoryType = 'All' | 'DevOps/Cloud' | 'FullStack' | 'ML/AI' | 'Cloud Native';

export const ProjectsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>('All');
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 4;
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

  const totalPages = Math.max(1, Math.ceil(sortedProjects.length / projectsPerPage));
  const safePage = Math.min(currentPage, totalPages);
  const startIndex = (safePage - 1) * projectsPerPage;
  const currentProjects = sortedProjects.slice(startIndex, startIndex + projectsPerPage);

  const handleFilterChange = (category: CategoryType) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const changePage = (page: number) => {
    setCurrentPage(page);
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
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
          <div className="section-header mb-6">
            <p className="kicker mb-2">Research and Projects</p>
            <h2 className="section-title">Selected Projects</h2>
            <p className="section-subtitle">
              Implementation-focused projects in cloud engineering, DevSecOps, and applied AI systems.
            </p>
          </div>

          <ProjectFilter onFilterChange={handleFilterChange} />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {currentProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.04 }}
                className="card p-4"
              >
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3 className="text-base leading-tight flex-1">
                    {project.title}
                  </h3>
                  {project.featured && (
                    <span className="badge flex-shrink-0">Key</span>
                  )}
                </div>
                
                <p className="text-sm text-text-secondary mb-3 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-3">
                  {project.technologies.slice(0, 5).map(tech => (
                    <span key={tech} className="tech-badge text-xs">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 5 && (
                    <span className="text-xs text-text-muted self-center">
                      +{project.technologies.length - 5}
                    </span>
                  )}
                </div>

                <div className="flex gap-3 text-sm">
                  {project.github && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-accent hover:underline"
                    >
                      Source
                    </a>
                  )}
                  {project.live && (
                    <a 
                      href={project.live} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-accent hover:underline"
                    >
                      Demo
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {totalPages > 1 && (
            <div className="mt-5 flex items-center justify-center gap-2">
              <button
                onClick={() => changePage(Math.max(1, safePage - 1))}
                disabled={safePage === 1}
                className="px-3 py-1.5 rounded-md text-xs font-medium border border-border disabled:opacity-40"
              >
                Prev
              </button>

              <div className="flex gap-1">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                  <button
                    key={pageNum}
                    onClick={() => changePage(pageNum)}
                    className={`w-8 h-8 rounded-md text-xs font-semibold ${
                      safePage === pageNum
                        ? 'bg-accent text-white'
                        : 'border border-border text-text-secondary hover:text-accent'
                    }`}
                  >
                    {pageNum}
                  </button>
                ))}
              </div>

              <button
                onClick={() => changePage(Math.min(totalPages, safePage + 1))}
                disabled={safePage === totalPages}
                className="px-3 py-1.5 rounded-md text-xs font-medium border border-border disabled:opacity-40"
              >
                Next
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};
