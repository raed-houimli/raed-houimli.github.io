import { useState } from 'react';

type Category = 'All' | 'DevOps/Cloud' | 'FullStack' | 'ML/AI' | 'Cloud Native';

interface ProjectFilterProps {
  onFilterChange: (category: Category) => void;
}

export const ProjectFilter = ({ onFilterChange }: ProjectFilterProps) => {
  const [active, setActive] = useState<Category>('All');
  
  const categories: Category[] = ['All', 'DevOps/Cloud', 'FullStack', 'ML/AI', 'Cloud Native'];
  
  const handleClick = (category: Category) => {
    setActive(category);
    onFilterChange(category);
  };

  return (
    <div className="flex flex-wrap gap-3 mb-12">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => handleClick(category)}
          className={`px-4 py-2 rounded-lg font-medium text-sm transition-all ${
            active === category
              ? 'bg-accent-primary text-white'
              : 'bg-border-light dark:bg-border-dark text-text-secondary-light dark:text-text-secondary-dark hover:border-accent-primary/50'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};
