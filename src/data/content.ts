import type { Experience, Project, SkillCategory, Education, Certification } from '../types';

export const personalInfo = {
  name: 'Raed Houimli',
  title: ['Full-Stack', 'DevOps / Cloud', 'ML / AI'],
  location: 'Tunisia • Remote Available',
  email: 'houimliraed@outlook.fr',
  phone: '+216 46 050 431',
  github: 'https://github.com/houimliraed',
  linkedin: 'https://linkedin.com/in/houimliraed',
  medium: 'https://medium.com/@houimliraed',
  tagline: 'DevOps and Cloud Engineer with 5+ years of experience designing and maintaining production infrastructure.',
};


export const experiences: Experience[] = [
  {
    id: 'mod-tunisia-software',
    title: 'Software Engineer',
    company: 'Ministry of Defense – Tunisia',
    location: 'Tunis, Tunisia',
    period: 'Jul 2020 – Dec 2022',
    description: 'Developed and maintained backend services, managed deployments, and handled application infrastructure in a high-security government environment.',
    highlights: [
      'Developed and maintained backend services using Python (FastAPI) and Node.js with secure REST APIs',
      'Built and maintained deployment scripts for multiple environments (dev, test, production)',
      'Managed environment variables, secrets, and configuration files across applications',
      'Developed Python-based web scraping scripts to collect, process, and normalize external data sources',
      'Modernized and refactored legacy applications, improving system performance and reliability',
      'Assisted in application deployments, versioning, and rollback procedures',
    ],
    technologies: [
      'Python',
      'FastAPI',
      'Node.js',
      'Express.js',
      'PostgreSQL',
      'MySQL',
      'MongoDB',
      'JavaScript',
    ],
  },
  {
    id: 'mod-tunisia-devops',
    title: 'DevOps Engineer',
    company: 'Ministry of Defense – Tunisia',
    location: 'Tunis, Tunisia',
    period: 'Jan 2023 – Nov 2025',
    description: 'Designed and managed AWS infrastructure, implemented CI/CD pipelines, and containerized applications in a high-security government environment.',
    highlights: [
      'Designed and managed AWS infrastructure using Terraform for third-party applications, including environment separation, parameterized configurations, IAM-based access control, and controlled, versioned infrastructure updates',
      'Implemented CI/CD pipelines with GitHub Actions and GitLab CI, reducing deployment time by 40%',
      'Containerized and deployed 15+ applications using Docker for consistent environments',
      'Wrote basic CI scripts for automated build, test, and deployment workflows',
      'Administered Windows Server environments (Active Directory, DNS, DHCP, Group Policies)',
      'Managed and maintained Oracle Database instances (user management, backups, performance tuning)',
      'Automated repetitive user and operational tasks using Python and Bash, significantly reducing user workload',
      'Provided IT support for internal teams, including system troubleshooting and incident resolution',
      'Performed basic network administration (LAN/WAN, TCP/IP, firewall rules, VPN access)',
      'Ensured compliance with strict defense-sector security and access control requirements',
      'Delivered mission-critical systems with high availability and operational reliability',
    ],
    technologies: [
      'AWS',
      'Terraform',
      'Docker',
      'Kubernetes',
      'GitHub Actions',
      'GitLab CI',
      'Python',
      'Bash/Shell',
      'PostgreSQL',
      'MySQL',
      'MongoDB',
      'Redis',
      'Oracle Database',
      'Windows Server',
    ],
  },
];

export const skillCategories: SkillCategory[] = [
  {
    category: 'Cloud Platforms',
    skills: [
      { name: 'AWS (EC2, VPC, IAM, S3, RDS, Lambda, ECS, EKS)', level: 'expert' },
    ],
  },
  {
    category: 'Infrastructure',
    skills: [
      { name: 'Terraform', level: 'expert' },
      { name: 'Ansible', level: 'advanced' },
    ],
  },
  {
    category: 'Containerization',
    skills: [
      { name: 'Docker', level: 'expert' },
      { name: 'Kubernetes', level: 'advanced' },
      { name: 'EKS', level: 'advanced' },
      { name: 'Docker Compose', level: 'advanced' },
    ],
  },
  {
    category: 'CI/CD',
    skills: [
      { name: 'GitHub Actions', level: 'expert' },
      { name: 'GitLab CI', level: 'expert' },
    ],
  },
  {
    category: 'Monitoring',
    skills: [
      { name: 'Prometheus', level: 'intermediate' },
      { name: 'Grafana', level: 'intermediate' },
      { name: 'CloudWatch', level: 'intermediate' },
    ],
  },
  {
    category: 'Languages',
    skills: [
      { name: 'Python', level: 'expert' },
      { name: 'Bash/Shell', level: 'expert' },
      { name: 'JavaScript', level: 'intermediate' },
      { name: 'SQL', level: 'advanced' },
    ],
  },
  {
    category: 'Backend',
    skills: [
      { name: 'FastAPI', level: 'advanced' },
      { name: 'Node.js', level: 'intermediate' },
      { name: 'Express.js', level: 'intermediate' },
      { name: 'REST APIs', level: 'advanced' },
    ],
  },
  {
    category: 'Databases',
    skills: [
      { name: 'PostgreSQL', level: 'advanced' },
      { name: 'MySQL', level: 'advanced' },
      { name: 'MongoDB', level: 'intermediate' },
      { name: 'Redis', level: 'intermediate' },
    ],
  },
  {
    category: 'Security',
    skills: [
      { name: 'DevSecOps', level: 'intermediate' },
      { name: 'IAM', level: 'advanced' },
      { name: 'VPC', level: 'advanced' },
      { name: 'SAST/DAST', level: 'intermediate' },
      { name: 'Secrets Management', level: 'intermediate' },
    ],
  },
];

export const projects: Project[] = [
  {
    id: 'infraui-project',
    title: 'InfraUI',
    description: 'Infrastructure automation and management UI',
    problem: 'Need for a comprehensive UI to manage and visualize infrastructure resources',
    solution: 'Built an interactive platform for managing cloud infrastructure with intuitive dashboards and controls',
    technologies: ['TypeScript', 'React', 'AWS', 'Terraform'],
    github: 'https://github.com/houimliraed/the-infraui',
    featured: true,
    category: 'DevOps/Cloud',
    architecture: []
  },
  {
    id: 'terraform-modules',
    title: 'Terraform AWS Modules',
    description: 'Reusable Terraform modules for AWS infrastructure',
    problem: 'Inconsistent infrastructure provisioning across projects',
    solution: 'Created standardized, parameterized Terraform modules for common AWS resources',
    technologies: ['Terraform', 'AWS', 'HCL'],
    github: 'https://github.com/houimliraed/terraform-modules',
    featured: true,
    category: 'DevOps/Cloud',
    architecture: ['IaC', 'Modular Design', 'Multi-region Support']
  },
  {
    id: 'k8s-deployment',
    title: 'Kubernetes Deployment Automation',
    description: 'Automated Kubernetes deployment pipeline with GitOps',
    problem: 'Manual Kubernetes deployments leading to inconsistencies and downtime',
    solution: 'Implemented GitOps workflow with ArgoCD for automated, declarative deployments',
    technologies: ['Kubernetes', 'ArgoCD', 'Docker', 'GitLab CI'],
    github: 'https://github.com/houimliraed/k8s-gitops',
    featured: true,
    category: 'DevOps/Cloud',
    architecture: ['GitOps', 'Continuous Deployment', 'Self-Healing']
  },
  {
    id: 'fastapi-microservice',
    title: 'FastAPI Microservice Template',
    description: 'Production-ready FastAPI microservice with best practices',
    problem: 'Lack of standardized backend service structure',
    solution: 'Created reusable FastAPI template with authentication, logging, and error handling',
    technologies: ['Python', 'FastAPI', 'PostgreSQL', 'Docker'],
    github: 'https://github.com/houimliraed/fastapi-template',
    featured: true,
    category: 'FullStack',
    architecture: ['REST API', 'Database Design', 'Authentication']
  },
  {
    id: 'react-dashboard',
    title: 'React Admin Dashboard',
    description: 'Full-featured admin dashboard for system monitoring',
    problem: 'Need for real-time system monitoring and management interface',
    solution: 'Built responsive React dashboard with real-time data visualization and controls',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js'],
    github: 'https://github.com/houimliraed/react-dashboard',
    featured: true,
    category: 'FullStack',
    architecture: ['Component-based UI', 'Real-time Updates', 'Responsive Design']
  },
  {
    id: 'ml-pipeline',
    title: 'ML Data Processing Pipeline',
    description: 'Automated machine learning data processing and model training',
    problem: 'Manual data preparation slowing down ML model iteration',
    solution: 'Built automated ETL pipeline with Python for data cleaning, feature engineering, and model training',
    technologies: ['Python', 'Pandas', 'Scikit-learn', 'Docker'],
    github: 'https://github.com/houimliraed/ml-pipeline',
    featured: true,
    category: 'ML/AI',
    architecture: ['ETL Pipeline', 'Feature Engineering', 'Model Training']
  },
  {
    id: 'anomaly-detection',
    title: 'Time Series Anomaly Detection',
    description: 'ML model for detecting anomalies in time-series data',
    problem: 'Unable to detect system anomalies in production logs',
    solution: 'Developed LSTM-based anomaly detection model with real-time inference',
    technologies: ['Python', 'TensorFlow', 'PostgreSQL', 'FastAPI'],
    github: 'https://github.com/houimliraed/anomaly-detection',
    featured: true,
    category: 'ML/AI',
    architecture: ['Deep Learning', 'Time Series Analysis', 'Real-time Inference']
  },
];

export const education: Education[] = [
  {
    id: 'edu-1',
    degree: 'Bachelor\'s in Systems Development',
    institution: 'Aeronautical Specialty School',
    location: 'Tunisia',
  },
  {
    id: 'edu-2',
    degree: 'Master\'s Degree in Software Engineering',
    institution: 'Higher Institute of Computer Science',
    location: 'Tunisia',

  },
  {
    id: 'edu-3',
    degree: 'Master\'s Degree in Applied Mathematics & Data Science',
    institution: 'The National School of Engineering of Tunis',
    location: 'Tunisia',
 
  },
  {
    id: 'edu-4',
    degree: 'Master\'s Degree in Network & Systems Security',
    institution: 'The Private Higher School of Technologies and Engineering',
    location: 'Tunisia',

  },
];

export const certifications: Certification[] = [
  {
    id: 'cert-1',
    name: 'AWS Cloud Technology Consultant',
    issuer: 'AWS (edX)',
    date: '2024',
  },
  {
    id: 'cert-2',
    name: 'DevOps and AI on AWS – CI/CD for Generative AI',
    issuer: 'AWS',
    date: '2024',
  },
  {
    id: 'cert-3',
    name: 'Certified Kubernetes Administrator (CKA)',
    issuer: 'Cloud Native Computing Foundation',
    date: 'Ongoing',
  },
];
