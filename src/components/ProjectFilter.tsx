import { useState } from 'react';

type Category = 'All' | 'DevOps/Cloud' | 'FullStack' | 'ML/AI';

interface ProjectFilterProps {
  onFilterChange: (category: Category) => void;
}

export function ProjectFilter({ onFilterChange }: ProjectFilterProps) {
  const [active, setActive] = useState<Category>('All');
  
  const categories: Category[] = ['All', 'DevOps/Cloud', 'FullStack', 'ML/AI'];
  
  const handleClick = (category: Category) => {
    setActive(category);
    onFilterChange(category);
  };

  return (
    <div className="flex flex-wrap gap-2 mb-8">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => handleClick(category)}
          className={`px-4 py-2 rounded-lg font-medium transition-all ${
            active === category
              ? 'bg-blue-500 text-white'
              : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
