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
    <div className="flex flex-wrap gap-2 mb-6">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => handleClick(category)}
          className={`filter-chip transition-all ${
            active === category
              ? 'bg-accent text-white border-accent'
              : 'bg-surface text-text-secondary hover:border-accent/40'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};
