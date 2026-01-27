import { useState } from 'react';
import { projects } from '../../data/content';
import { ProjectFilter } from '../ProjectFilter';

export function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState<'All' | 'DevOps/Cloud' | 'FullStack' | 'ML/AI'>('All');
  
  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  return (
    <section className="section-padding">
      <div className="container-custom">
        <h2 className="text-3xl font-bold mb-12">Projects</h2>
        <ProjectFilter onFilterChange={setSelectedCategory} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map(project => (
            <div key={project.id} className="card p-6">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map(tech => (
                  <span key={tech} className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200 rounded text-xs">
                    {tech}
                  </span>
                ))}
              </div>
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                  View on GitHub →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
