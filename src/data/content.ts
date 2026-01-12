import type { Experience, Project, SkillCategory, Education, Certification } from '../types';

export const personalInfo = {
  name: 'Raed Houimli',
  title: 'Software Engineer • Cloud & DevOps',
  location: 'Tunis, Tunisia',
  email: 'houimliraed@hotmail.com',
  github: 'https://github.com/houimliraed',
  linkedin: 'https://linkedin.com/in/houimliraed',
  medium: 'https://medium.com/@houimliraed',
  tagline: 'Building resilient systems and automating infrastructure at scale. 5+ years architecting production-grade solutions in high-security environments.',
};

export const about = {
  summary: `I'm a software engineer with deep expertise in cloud infrastructure, DevOps automation, and backend systems. My work centers on building reliable, scalable architectures that solve real operational challenges.

Over the past 5 years, I've led infrastructure modernization efforts at the Ministry of Defense, migrating legacy systems to cloud-native architectures while maintaining strict security and compliance standards. I specialize in designing CI/CD pipelines, implementing infrastructure as code, and building automated deployment workflows that reduce friction and improve delivery velocity.

I approach problems with a systems thinking mindset—understanding how components interact, anticipating failure modes, and building in observability from the ground up. My technical decisions prioritize long-term maintainability over short-term convenience.`,
};

export const experiences: Experience[] = [
  {
    id: 'mod-tunisia',
    title: 'Software Engineer • DevOps & Cloud Infrastructure',
    company: 'Ministry of Defense of Tunisia',
    location: 'Tunis, Tunisia',
    period: '2020 – 2025',
    description: 'Led infrastructure modernization and DevOps transformation initiatives in a high-security government environment.',
    highlights: [
      'Architected and deployed a containerized microservices platform serving 10,000+ users, reducing deployment time by 70% through automated CI/CD pipelines',
      'Designed and implemented infrastructure-as-code framework using Terraform and Ansible, managing 200+ cloud resources across multi-region deployments',
      'Built comprehensive monitoring and observability stack with Prometheus, Grafana, and ELK, reducing MTTR by 60%',
      'Led security hardening initiatives including zero-trust network architecture, automated vulnerability scanning, and compliance automation',
      'Developed internal developer platform with self-service capabilities, improving team productivity and reducing operational overhead',
      'Established GitOps workflows and branching strategies, enabling safe, auditable infrastructure changes',
    ],
    technologies: [
      'AWS/Azure',
      'Kubernetes',
      'Docker',
      'Terraform',
      'Ansible',
      'Jenkins/GitLab CI',
      'Python',
      'Go',
      'PostgreSQL',
      'Redis',
      'Nginx',
      'Prometheus',
      'Grafana',
      'ELK Stack',
    ],
  },
];

export const skillCategories: SkillCategory[] = [
  {
    category: 'Cloud & DevOps',
    skills: [
      { name: 'AWS (EC2, ECS, Lambda, RDS, S3, CloudFormation)', level: 'expert' },
      { name: 'Azure (VMs, AKS, Functions, Storage)', level: 'advanced' },
      { name: 'Kubernetes & Helm', level: 'expert' },
      { name: 'Docker & Containerization', level: 'expert' },
      { name: 'Terraform & Infrastructure as Code', level: 'expert' },
      { name: 'Ansible & Configuration Management', level: 'advanced' },
      { name: 'CI/CD (Jenkins, GitLab CI, GitHub Actions)', level: 'expert' },
      { name: 'GitOps (ArgoCD, Flux)', level: 'advanced' },
    ],
  },
  {
    category: 'Backend & APIs',
    skills: [
      { name: 'Python (FastAPI, Flask, Django)', level: 'expert' },
      { name: 'Go', level: 'advanced' },
      { name: 'Node.js & TypeScript', level: 'advanced' },
      { name: 'RESTful API Design', level: 'expert' },
      { name: 'gRPC & Protocol Buffers', level: 'intermediate' },
      { name: 'GraphQL', level: 'intermediate' },
    ],
  },
  {
    category: 'Security & Compliance',
    skills: [
      { name: 'Security Hardening & Best Practices', level: 'advanced' },
      { name: 'Secrets Management (Vault, AWS Secrets Manager)', level: 'advanced' },
      { name: 'SSL/TLS & Certificate Management', level: 'advanced' },
      { name: 'OAuth2 & JWT', level: 'advanced' },
      { name: 'Network Security & Firewalls', level: 'advanced' },
    ],
  },
  {
    category: 'Databases & Caching',
    skills: [
      { name: 'PostgreSQL', level: 'expert' },
      { name: 'MySQL/MariaDB', level: 'advanced' },
      { name: 'Redis', level: 'advanced' },
      { name: 'MongoDB', level: 'intermediate' },
      { name: 'Database Design & Optimization', level: 'advanced' },
    ],
  },
  {
    category: 'Observability & Systems',
    skills: [
      { name: 'Prometheus & Grafana', level: 'expert' },
      { name: 'ELK Stack (Elasticsearch, Logstash, Kibana)', level: 'advanced' },
      { name: 'Distributed Tracing (Jaeger, OpenTelemetry)', level: 'intermediate' },
      { name: 'Linux System Administration', level: 'expert' },
      { name: 'Nginx & Load Balancing', level: 'advanced' },
      { name: 'Shell Scripting (Bash)', level: 'expert' },
    ],
  },
];

export const projects: Project[] = [
  {
    id: 'project-1',
    title: 'Infrastructure Automation Platform',
    description: 'Self-service infrastructure provisioning system for development teams',
    problem: 'Manual infrastructure provisioning created bottlenecks and inconsistencies across environments',
    solution: 'Built an automated platform using Terraform modules and GitLab CI, enabling teams to provision standardized infrastructure through pull requests',
    technologies: ['Terraform', 'GitLab CI', 'Python', 'AWS', 'Vault'],
    architecture: ['Infrastructure as Code', 'GitOps', 'Policy as Code', 'Automated Testing'],
    github: 'https://github.com/raedhml/infra-platform', // Placeholder
    featured: true,
  },
  {
    id: 'project-2',
    title: 'Microservices Monitoring Stack',
    description: 'Comprehensive guide observability platform for distributed systems',
    problem: 'Lack of visibility into microservices performance and inter-service dependencies',
    solution: 'Implemented Prometheus, Grafana, and Jaeger for metrics, visualization, and distributed tracing with custom exporters and dashboards',
    technologies: ['Prometheus', 'Grafana', 'Jaeger', 'Go', 'Kubernetes'],
    architecture: ['Service Mesh', 'Distributed Tracing', 'Time-series Metrics', 'Alert Management'],
    github: 'https://github.com/raedhml/monitoring-stack', // Placeholder
    featured: true,
  },
  {
    id: 'project-3 test',
    title: 'Container Security Scanner',
    description: 'Automated vulnerability scanning pipeline for container images',
    problem: 'Security vulnerabilities in container images going undetected until production',
    solution: 'Developed CI/CD integrated security scanner using Trivy and custom policies, blocking deployments with critical CVEs',
    technologies: ['Trivy', 'Python', 'GitLab CI', 'Docker', 'PostgreSQL'],
    architecture: ['Shift-Left Security', 'Policy Enforcement', 'Automated Reporting'],
    github: 'https://github.com/raedhml/container-scanner', // Placeholder
    featured: true,
  },
];

export const education: Education[] = [
  {
    id: 'edu-1',
    degree: 'BSc Information Technology',
    institution: 'ESA (Aeronautical Speciality School)',
    location: 'Tunis, Tunisia',
  },
  {
    id: 'edu-2',
    degree: 'MSc Software Engineering',
    institution: 'ISI (Highter Institute of Informatics)',
    location: 'Tunis, Tunisia',
  },
  {
    id: 'edu-3',
    degree: 'MSc Mathematics and Data Science',
    institution: 'ENSIT (National Engineering School of Tunis)',
    location: 'Tunis, Tunisia',
  },
  {
    id: 'edu-4',
    degree: 'MSc Cybersecurity Engineering',
    institution: 'Tek-Up University',
    location: 'Tunis, Tunisia',
  },
];

export const certifications: Certification[] = [
  {
    id: 'cert-1',
    name: 'AWS Certified Solutions Architect – Associate',
    issuer: 'Amazon Web Services',
    date: '2022',
  },
  {
    id: 'cert-2',
    name: 'Certified Kubernetes Administrator (CKA)',
    issuer: 'Cloud Native Computing Foundation',
    date: '2023',
  },
];
