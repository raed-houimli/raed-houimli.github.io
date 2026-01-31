import type { Experience, Project, SkillCategory } from '../types';

export const personalInfo = {
  name: 'Raed Houimli',
  title: ['Infrastructure Engineer', 'DevOps Consultant', 'Cloud Architect'],
  location: 'Tunisia • Remote Consulting',
  email: 'houimliraed@outlook.fr',
  phone: '+216 46 050 431',
  github: 'https://github.com/houimliraed',
  linkedin: 'https://linkedin.com/in/houimliraed',
  medium: 'https://medium.com/@houimliraed',
  tagline: 'Enterprise infrastructure consultant helping organizations scale securely with AWS, Kubernetes, and DevSecOps best practices.',
  seoKeywords: 'Raed Houimli, DevOps Engineer, Infrastructure Consultant, AWS Expert, Kubernetes Specialist, CI/CD Automation, Cloud Architecture, DevSecOps Professional',
  meetingUrl: 'https://calendly.com/houimliraed/30min',
  meetingUrlEmbed: 'https://calendly.com/houimliraed/30min?hide_event_type_details=1&hide_gdpr_banner=1',
  bio: 'Specialized in designing scalable cloud infrastructure, CI/CD automation, and secure deployment pipelines for mission-critical systems.',
};


export const experiences: Experience[] = [
  {
    id: 'freelancer-current',
    title: 'Freelance DevOps & Infrastructure Consultant',
    company: 'Self-Employed',
    location: 'Tunisia • Remote',
    period: 'Dec 2024 – Present',
    description: 'Providing end-to-end infrastructure consulting and DevOps services to organizations scaling their cloud operations and deployment pipelines.',
    highlights: [
      'Architecting custom AWS infrastructure solutions for enterprise clients',
      'Implementing CI/CD pipelines and GitOps workflows reducing deployment time by 60-70%',
      'Designing Kubernetes clusters with auto-scaling and cost optimization',
      'Providing technical mentorship and DevOps best practices training',
      'Managing infrastructure-as-code projects using Terraform with full state management',
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
    ],
  },
  {
    id: 'mod-tunisia-software',
    title: 'Software Engineer',
    company: 'Ministry of Defense – Tunisia',
    location: 'Tunis, Tunisia',
    period: 'Jul 2020 – Dec 2022',
    description: 'Designed and implemented scalable backend services for mission-critical government applications. Optimized system performance and led technical initiatives across development lifecycle.',
    highlights: [
      'Architected 5+ FastAPI microservices processing 100K+ daily requests with 99.9% uptime',
      'Reduced query latency by 60% through optimized PostgreSQL schemas and indexing strategies',
      'Decreased deployment time from 2 hours to 15 minutes with automated CI/CD pipelines',
      'Led code reviews implementing SOLID principles, achieving 95%+ test coverage',
      'Mentored 2 junior engineers on backend architecture and system design patterns',
    ],
    technologies: [
      'Python',
      'FastAPI',
      'Node.js',
      'PostgreSQL',
      'MySQL',
      'MongoDB',
      'Redis',
      'Docker',
    ],
  },
  {
    id: 'mod-tunisia-devops',
    title: 'DevOps Engineer',
    company: 'Ministry of Defense – Tunisia',
    location: 'Tunis, Tunisia',
    period: 'Jan 2023 – Nov 2024',
    description: 'Led infrastructure transformation by designing cloud architecture, implementing GitOps practices, and establishing production-grade deployment pipelines for 20+ critical applications.',
    highlights: [
      'Managed 50+ AWS resources using Terraform IaC with full state management and drift detection',
      'Built end-to-end CI/CD pipelines reducing deployment time by 70% and enabling 50+ daily deployments',
      'Containerized 20+ legacy applications with Docker, reducing deployment issues by 85%',
      'Implemented Kubernetes cluster with auto-scaling, achieving 40% cost optimization',
      'Established monitoring stack (Prometheus, Grafana, CloudWatch) enabling real-time infrastructure visibility',
      'Automated disaster recovery with RPO of 1 hour and RTO of 30 minutes',
      'Led security hardening reducing incidents by 90% through secrets management and vulnerability scanning',
    ],
    technologies: [
      'AWS',
      'Terraform',
      'Docker',
      'Kubernetes',
      'GitHub Actions',
      'GitLab CI',
      'ArgoCD',
      'Prometheus',
      'Grafana',
      'Python',
      'Bash/Shell',
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
    category: 'Machine Learning',
    skills: [
      { name: 'TensorFlow', level: 'advanced' },
      { name: 'PyTorch', level: 'advanced' },
      { name: 'scikit-learn', level: 'expert' },
      { name: 'Keras', level: 'advanced' },
      { name: 'Deep Learning', level: 'advanced' },
    ],
  },
  {
    category: 'Data Science',
    skills: [
      { name: 'Pandas', level: 'expert' },
      { name: 'NumPy', level: 'expert' },
      { name: 'Matplotlib', level: 'advanced' },
      { name: 'Seaborn', level: 'advanced' },
      { name: 'Statistical Analysis', level: 'expert' },
    ],
  },
  {
    category: 'MLOps',
    skills: [
      { name: 'Model Deployment', level: 'advanced' },
      { name: 'Feature Engineering', level: 'expert' },
      { name: 'Model Monitoring', level: 'intermediate' },
      { name: 'Data Pipelines', level: 'advanced' },
    ],
  },
  {
    category: 'Mathematics',
    skills: [
      { name: 'Linear Algebra', level: 'expert' },
      { name: 'Probability & Statistics', level: 'expert' },
      { name: 'Calculus', level: 'expert' },
      { name: 'Optimization', level: 'advanced' },
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
    id: 'kubelab-project',
    title: 'KubeLab.io',
    description: 'Kubernetes learning platform (Owner & Lead Developer) - Interactive labs, real-time sandbox environments, and tutorials for hands-on container orchestration mastery.',
    problem: 'Developers lack practical, risk-free environments to learn and experiment with Kubernetes in realistic production scenarios.',
    solution: 'Built and maintain a production-grade learning platform featuring auto-provisioning Kubernetes sandboxes, interactive labs with real-time feedback, comprehensive tutorials, and community resources. Deployed on AWS EKS with full CI/CD automation and monitoring.',
    technologies: ['React', 'TypeScript', 'FastAPI', 'Python', 'Kubernetes', 'Docker', 'AWS EKS', 'PostgreSQL', 'Redis', 'Terraform', 'GitHub Actions'],
    github: 'https://github.com/houimliraed/kubelab',
    live: 'https://kubelab.io',
    featured: true,
    category: 'DevOps/Cloud',
    architecture: ['Kubernetes Sandbox Provisioning', 'Interactive Labs', 'Real-time Environments', 'Auto-scaling Infrastructure', 'Learning Analytics', 'Community Platform']
  },
  {
    id: 'infraui-project',
    title: 'InfraUI',
    description: 'React landing page deployed on AWS with Terraform IaC and GitHub Actions CI/CD',
    problem: 'Need for a modern, scalable way to deploy React applications with infrastructure-as-code best practices',
    solution: 'Built a production-ready setup with React (Vite) frontend, Terraform-managed AWS infrastructure (S3 + CloudFront), and automated GitHub Actions workflows for seamless deployment',
    technologies: ['React', 'Vite', 'Terraform', 'AWS S3', 'CloudFront', 'GitHub Actions', 'ACM', 'Route53'],
    github: 'https://github.com/houimliraed/the-infraui',
    featured: true,
    category: 'DevOps/Cloud',
    architecture: ['S3 Static Hosting', 'CloudFront CDN', 'Infrastructure-as-Code', 'CI/CD Automation']
  },
  {
    id: 'cloudpipelinex-project',
    title: 'CloudPipelineX',
    description: 'Full-stack DevOps automation platform with Django backend, AWS ECS deployment, and complete CI/CD pipeline',
    problem: 'Building enterprise-grade DevOps infrastructure with automated deployments, monitoring, and infrastructure management at scale',
    solution: 'Developed production-ready Django REST API with Terraform IaC for AWS resources (ECS, RDS, ALB), GitHub Actions CI/CD pipeline, ECR container registry, CloudWatch monitoring, and S3 state management with DynamoDB locking',
    technologies: ['Django', 'Python', 'Terraform', 'AWS ECS', 'RDS', 'ECR', 'CloudWatch', 'GitHub Actions', 'Docker', 'Nginx', 'PostgreSQL', 'HCL'],
    github: 'https://github.com/houimliraed/CloudPipelineX',
    featured: true,
    category: 'DevOps/Cloud',
    architecture: ['Infrastructure-as-Code', 'ECS Deployment', 'Load Balancing', 'CI/CD Pipeline', 'State Management', 'Monitoring & Observability']
  },
  {
    id: 'epicllm-project',
    title: 'EpicLLM',
    description: 'AI-powered story generator using LangChain on FastAPI backend with ReactJS frontend deployed on AWS',
    problem: 'Creating an interactive storytelling platform that leverages LLMs for dynamic story generation with scalable infrastructure',
    solution: 'Built full-stack application with LangChain integration on FastAPI backend, React frontend for interactive story UI, deployed on AWS with CI/CD automation for seamless updates and scaling',
    technologies: ['FastAPI', 'LangChain', 'OpenAI API', 'React', 'Python', 'AWS', 'Docker', 'GitHub Actions', 'PostgreSQL'],
    github: 'https://github.com/houimliraed/EpicLLM',
    featured: true,
    category: 'ML/AI',
    architecture: ['LLM Integration', 'Generative AI', 'Natural Language Processing', 'FastAPI Backend', 'React Frontend']
  },
  {
    id: 'phishguard-ai-project',
    title: 'PhishGuardAI',
    description: 'ML-powered phishing URL detection system with FastAPI backend, React frontend, and AWS EKS deployment',
    problem: 'Building a scalable phishing detection platform capable of analyzing URLs with ML classification and real-time predictions',
    solution: 'Developed full-stack system with RandomForest ML classifier, FastAPI backend with Redis caching, React dashboard, deployed on AWS EKS with GitLab CI/CD pipeline and automated security scanning',
    technologies: ['FastAPI', 'React', 'Vite', 'scikit-learn', 'Python', 'AWS EKS', 'Redis', 'S3', 'Kubernetes', 'GitLab CI', 'Docker', 'Terraform'],
    github: 'https://github.com/houimliraed/PhishGuardAI',
    featured: true,
    category: 'DevOps/Cloud',
    architecture: ['Machine Learning', 'EKS Deployment', 'Redis Caching', 'CI/CD Pipeline', 'Security Scanning', 'Auto-scaling']
  },
  {
    id: 'networkspark-project',
    title: 'NetworkSpark',
    description: 'Social media-style app with FastAPI backend, React frontend, and full AWS deployment pipeline',
    problem: 'Building a scalable social networking platform with reliable infrastructure and automated deployment workflows',
    solution: 'Architected full-stack application with FastAPI microservices, React frontend, Terraform-managed AWS infrastructure, and CI/CD automation via GitHub Actions with real-time monitoring',
    technologies: ['FastAPI', 'React', 'PostgreSQL', 'Docker', 'Terraform', 'AWS', 'GitHub Actions', 'Prometheus', 'Grafana'],
    github: 'https://github.com/houimliraed/networkspark',
    featured: true,
    category: 'DevOps/Cloud',
    architecture: ['Microservices', 'Docker Containerization', 'Infrastructure-as-Code', 'CI/CD Pipeline', 'Monitoring & Observability']
  },
  {
    id: 'robonav-ai-project',
    title: 'RoboNavAI',
    description: 'Autonomous mobile robot with ROS 2, LiDAR, vision, and multi-sensor fusion for indoor navigation',
    problem: 'Building an autonomous mobile robot capable of real-time navigation, obstacle avoidance, and SLAM mapping',
    solution: 'Developed ROS 2 Humble-based AMR with LiDAR + RealSense camera + ultrasonic sensors, YOLOv8 object detection, Nav2 path planning, and Gazebo simulation pipeline deployed on NVIDIA Jetson Xavier AGX',
    technologies: ['ROS 2 Humble', 'LiDAR', 'YOLOv8', 'OpenCV', 'Gazebo', 'SLAM', 'Nav2', 'NVIDIA Jetson Xavier', 'Docker', 'PCL'],
    github: 'https://github.com/houimliraed/RoboNavAI',
    featured: true,
    category: 'DevOps/Cloud',
    architecture: ['Multi-Sensor Fusion', 'Real-time SLAM', 'Computer Vision', 'Autonomous Navigation', 'Hardware Integration']
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
  {
    id: 'cloud-native',
    title: 'Cloud Native Application',
    description: 'Cloud-native application with microservices and containerization',
    problem: 'Need for scalable, resilient, and maintainable cloud-native applications',
    solution: 'Built cloud-native application with microservices and containerization',
    technologies: ['Cloud Native', 'Microservices', 'Containerization'],
    github: 'https://github.com/houimliraed/cloud-native',
    featured: true,
    category: 'DevOps/Cloud',
    architecture: ['Microservices', 'Containerization', 'Scalability']
  },
];

export const education = [
  {
    id: 'bachelor-systems',
    degree: 'Bachelor of Science in Systems Development',
    institution: 'Aeronautical Specialty School',
    location: 'Tunisia',
  },
  {
    id: 'master-software-eng',
    degree: 'Master of Science in Software Engineering',
    institution: 'Higher Institute of Computer Science',
    location: 'Tunisia',
  },
  {
    id: 'master-math-data',
    degree: 'Master of Science in Applied Mathematics & Data Science',
    institution: 'The National School of Engineering of Tunis',
    location: 'Tunisia',
  },
  {
    id: 'master-security',
    degree: 'Master of Science in Network & Systems Security',
    institution: 'The Private Higher School of Technologies and Engineering',
    location: 'Tunisia',
  },
];
