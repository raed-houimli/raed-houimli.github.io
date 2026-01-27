export interface Role {
  name: string;
  title: string;
  period: string;
  responsibilities?: string[];
  highlights?: string[];
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  highlights: string[];
  technologies: string[];
  roles?: Role[]; 
}

export interface Project {
  id: string;
  title: string;
  description: string;
  problem?: string;
  solution?: string;
  technologies: string[];
  github?: string;
  live?: string;
  featured?: boolean;
  category?: 'DevOps/Cloud' | 'FullStack' | 'ML/AI';
  architecture?: string[];
}

export interface Skill {
  name: string;
  level?: 'expert' | 'advanced' | 'intermediate';
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  period?: string;
  location: string;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
}

export interface Role {
  title: string;
  period: string;
}
