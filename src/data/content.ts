import type { Experience, Project, SkillCategory } from '../types';

export const personalInfo = {
  name: 'Raed Houimli',
  title: ['DevSecOps Engineer', 'Cloud & Security Engineer', 'MLOps Enthusiast'],
  location: 'Tunisia • Remote Consulting',
  email: 'houimliraed@outlook.fr',
  phone: '+216 46 050 431',
  github: 'https://github.com/raed-houimli',
  linkedin: 'https://linkedin.com/in/raed-houimli',
  medium: 'https://medium.com/@raed-houimli',
  tagline: 'DevSecOps engineer focused on secure cloud platforms, MLOps-ready infrastructure, and research-oriented engineering in cybersecurity and AI systems.',
  seoKeywords: 'Raed Houimli, DevSecOps Engineer, MLOps Engineer, Cloud Security, Cybersecurity Research, AI Security, Machine Learning, Secure Cloud Infrastructure, Kubernetes, Terraform, AWS, CI/CD, Distributed Systems',
  meetingUrl: 'https://calendly.com/houimliraed/30min',
  meetingUrlEmbed: 'https://calendly.com/houimliraed/30min?hide_event_type_details=1&hide_gdpr_banner=1',
  bio: 'DevSecOps and cloud engineer with 5+ years of experience in software engineering, infrastructure automation, and security-focused delivery. Currently strengthening research direction toward cybersecurity, AI/ML, and intelligent cloud systems, with the goal of pursuing PhD opportunities.',
};


export const experiences: Experience[] = [
  {
    id: 'freelance-devsecops-engineer',
    title: 'DevSecOps Engineer',
    company: 'Freelance | Self-Employed',
    location: 'Tunis, Tunisia · Remote',
    period: 'Mar 2026 – Present · 1 mo',
    description: 'Building a cloud-native DevSecOps platform for quantitative strategy deployment, using Kubernetes, Terraform, and Amazon Web Services. Implementing secure CI/CD pipelines with GitHub Actions, GitOps workflows via Argo CD, and monitoring with Prometheus and Grafana.',
    highlights: [
      'Employment: Full-time',
      'Skills summary: Kubernetes, DAST and +6 skills',
    ],
    technologies: ['Kubernetes', 'Terraform', 'Amazon Web Services (AWS)', 'GitHub Actions', 'Argo CD', 'Prometheus', 'Grafana', 'DAST'],
  },
  {
    id: 'mod-tunisia-devops',
    title: 'DevOps Engineer',
    company: 'The Ministry of National Defense of Tunisia',
    location: 'Tunis, Tunisia · On-site',
    period: 'Sep 2023 – Dec 2025 · 2 yrs 4 mos',
    description: 'Designed and maintained CI/CD pipelines while provisioning AWS infrastructure using Terraform. Containerized applications with Docker, implementing multi-stage builds to optimize image size and improve deployment efficiency, increasing deployment frequency by 40% and reducing manual operational overhead through infrastructure automation and standardized release workflows.',
    highlights: [
      'Employment: Full-time · 5 yrs 6 mos (company tenure)',
      'Skills summary: Amazon Web Services (AWS), DevOps and +6 skills',
    ],
    technologies: ['Amazon Web Services (AWS)', 'DevOps', 'Terraform', 'Docker', 'CI/CD'],
  },
  {
    id: 'mod-tunisia-software',
    title: 'Software Engineer',
    company: 'The Ministry of National Defense of Tunisia',
    location: 'Tunis, Tunisia · On-site',
    period: 'Mar 2021 – Sep 2023 · 2 yrs 7 mos',
    description: 'Developed and maintained full-stack applications using FastAPI (Python) and React.js, while refactoring and supporting legacy Java systems in a high-security environment. Optimized Oracle database queries and indexing strategies, improving application response times by up to 30% and enhancing overall system reliability and performance.',
    highlights: [
      'Employment: Full-time · 5 yrs 6 mos (company tenure)',
      'Skills summary: Software Design, Troubleshooting and +8 skills',
    ],
    technologies: ['FastAPI', 'React.js', 'Java', 'Oracle', 'Software Design', 'Troubleshooting'],
  },
  {
    id: 'mod-tunisia-technical-support',
    title: 'Technical Support Engineer',
    company: 'The Ministry of National Defense of Tunisia',
    location: 'Tunis, Tunisia · On-site',
    period: 'Jul 2020 – Mar 2021 · 9 mos',
    description: 'Administered Windows Server and Linux environments supporting mission-critical systems, resolving infrastructure and network incidents in production while maintaining over 99.9% system availability through proactive monitoring, root cause analysis, and timely remediation.',
    highlights: [
      'Employment: Full-time · 5 yrs 6 mos (company tenure)',
      'Skills summary: Windows Server, Linux and +3 skills',
    ],
    technologies: ['Windows Server', 'Linux', 'Network Operations', 'Incident Response'],
  },
];

export const skillCategories: SkillCategory[] = [
  {
    category: 'Cloud Platforms',
    skills: [
      { name: 'AWS (EC2, VPC, IAM, S3, RDS, Lambda, ECS, EKS, CloudFormation)', level: 'expert' },
      { name: 'Multi-region & high-availability architecture', level: 'expert' },
    ],
  },
  {
    category: 'Infrastructure as Code',
    skills: [
      { name: 'Terraform (modules, state management, testing)', level: 'expert' },
      { name: 'CloudFormation', level: 'advanced' },
      { name: 'Ansible', level: 'advanced' },
    ],
  },
  {
    category: 'Kubernetes & Orchestration',
    skills: [
      { name: 'Kubernetes (EKS, networking, RBAC, operators)', level: 'expert' },
      { name: 'Helm charts & templating', level: 'advanced' },
      { name: 'Docker & container best practices', level: 'expert' },
      { name: 'ArgoCD & GitOps workflows', level: 'advanced' },
    ],
  },
  {
    category: 'CI/CD & Automation',
    skills: [
      { name: 'GitHub Actions (workflows, runners, orchestration)', level: 'expert' },
      { name: 'GitLab CI/CD', level: 'expert' },
      { name: 'Jenkins', level: 'advanced' },
    ],
  },
  {
    category: 'DevSecOps & Security',
    skills: [
      { name: 'IAM design & least privilege access', level: 'expert' },
      { name: 'Secrets management (AWS Secrets Manager, HashiCorp Vault)', level: 'advanced' },
      { name: 'Network security (VPC, security groups, NACLs)', level: 'advanced' },
      { name: 'SAST/DAST & vulnerability scanning', level: 'intermediate' },
      { name: 'Compliance & audit logging', level: 'intermediate' },
    ],
  },
  {
    category: 'Monitoring & Observability',
    skills: [
      { name: 'Prometheus & Grafana', level: 'advanced' },
      { name: 'CloudWatch & AWS monitoring', level: 'advanced' },
      { name: 'ELK Stack (Elasticsearch, Logstash, Kibana)', level: 'intermediate' },
      { name: 'Incident response & alerting', level: 'advanced' },
    ],
  },
  {
    category: 'Backend & APIs',
    skills: [
      { name: 'FastAPI (async, dependency injection, security)', level: 'expert' },
      { name: 'Node.js & Express.js', level: 'advanced' },
      { name: 'REST API design & OpenAPI', level: 'expert' },
      { name: 'gRPC & protocol buffers', level: 'intermediate' },
    ],
  },
  {
    category: 'Databases',
    skills: [
      { name: 'PostgreSQL (optimization, replication, backup)', level: 'expert' },
      { name: 'MySQL', level: 'advanced' },
      { name: 'MongoDB & NoSQL design', level: 'intermediate' },
      { name: 'Redis (caching, sessions, pub/sub)', level: 'advanced' },
    ],
  },
  {
    category: 'Programming Languages',
    skills: [
      { name: 'Python (scripts, automation, backend)', level: 'expert' },
      { name: 'Bash/Shell scripting', level: 'expert' },
      { name: 'JavaScript/TypeScript', level: 'intermediate' },
      { name: 'SQL', level: 'expert' },
    ],
  },
  {
    category: 'Data & Analytics',
    skills: [
      { name: 'Pandas & data manipulation', level: 'expert' },
      { name: 'NumPy', level: 'expert' },
      { name: 'Data pipeline engineering', level: 'advanced' },
    ],
  },
];

export const projects: Project[] = [
  {
    id: 'enterprise-k8s',
    title: 'Enterprise Kubernetes Infrastructure',
    description: 'Designed and deployed production-grade EKS cluster with auto-scaling, networking policies, and RBAC. Multi-AZ setup with 99.99% uptime SLA.',
    problem: 'Organization needed scalable container orchestration with zero downtime deployments.',
    solution: 'Built fully automated EKS infrastructure with Terraform, GitOps deployment, and comprehensive monitoring.',
    technologies: ['Kubernetes', 'EKS', 'Terraform', 'Docker', 'Helm', 'ArgoCD', 'Prometheus', 'Grafana'],
    github: 'https://github.com/houimliraed/enterprise-k8s',
    featured: true,
    category: 'DevOps/Cloud',
    architecture: ['Multi-AZ K8s', 'Auto-scaling', 'GitOps', 'Network Policies']
  },
  {
    id: 'terraform-aws-modules',
    title: 'Reusable Terraform AWS Modules',
    description: 'Library of production-ready Terraform modules for common AWS resources. Standardizes infrastructure provisioning across all projects.',
    problem: 'Each project had different AWS configurations with inconsistent naming, tagging, and security posture.',
    solution: 'Created parameterized, tested Terraform modules for VPC, RDS, ECS, ALB, and S3 with best practices.',
    technologies: ['Terraform', 'AWS', 'HCL', 'Python', 'Testing'],
    github: 'https://github.com/houimliraed/terraform-aws-modules',
    featured: true,
    category: 'DevOps/Cloud',
    architecture: ['IaC', 'Modules', 'Reusability', 'Testing']
  },
  {
    id: 'cicd-pipeline-framework',
    title: 'CI/CD Pipeline Automation Framework',
    description: 'Standardized GitHub Actions workflows for automated testing, building, and deploying applications. Reduces deployment time from hours to minutes.',
    problem: 'Manual deployment processes were error-prone and inconsistent across teams.',
    solution: 'Built reusable GitHub Actions workflows with automated testing, security scanning, and staged deployments.',
    technologies: ['GitHub Actions', 'Docker', 'Python', 'Terraform', 'AWS'],
    github: 'https://github.com/houimliraed/cicd-framework',
    featured: true,
    category: 'DevOps/Cloud',
    architecture: ['CI/CD', 'Automation', 'Security Scanning', 'Multi-stage Deploy']
  },
  {
    id: 'devsecops-pipeline',
    title: 'DevSecOps Pipeline with Security Scanning',
    description: 'End-to-end secure CI/CD pipeline with SAST, DAST, dependency scanning, and container image scanning. Shifts security left in development.',
    problem: 'Security vulnerabilities were discovered late in production, causing expensive patches and downtime.',
    solution: 'Integrated SAST tools, dependency scanning, and container security into CI/CD pipeline with automated blocking of vulnerabilities.',
    technologies: ['GitHub Actions', 'SonarQube', 'Trivy', 'OWASP Dependency Check', 'Docker', 'Kubernetes'],
    github: 'https://github.com/houimliraed/devsecops-pipeline',
    featured: true,
    category: 'DevOps/Cloud',
    architecture: ['Security Scanning', 'SAST', 'Container Security', 'Policy Enforcement']
  },
  {
    id: 'infrastructure-monitoring',
    title: 'Production Monitoring & Observability Stack',
    description: 'Deployed Prometheus, Grafana, and CloudWatch for comprehensive infrastructure and application monitoring with intelligent alerting.',
    problem: 'Legacy monitoring was reactive; incidents discovered by users instead of alerts.',
    solution: 'Built multi-layer observability with metrics, logs, and traces. Configured intelligent alerting with runbooks.',
    technologies: ['Prometheus', 'Grafana', 'CloudWatch', 'ELK Stack', 'AlertManager'],
    featured: true,
    category: 'DevOps/Cloud',
    architecture: ['Monitoring', 'Alerting', 'Dashboards', 'Multi-source']
  },
  {
    id: 'fastapi-backend-service',
    title: 'FastAPI Microservice with Advanced Features',
    description: 'High-performance async FastAPI service with JWT authentication, rate limiting, database optimization, and comprehensive API documentation.',
    problem: 'Legacy REST API was synchronous and couldn\'t handle concurrent requests efficiently.',
    solution: 'Rebuilt with FastAPI async/await, connection pooling, caching layer, and OpenAPI documentation.',
    technologies: ['FastAPI', 'Python', 'PostgreSQL', 'Redis', 'Docker', 'Kubernetes'],
    github: 'https://github.com/houimliraed/fastapi-service',
    featured: true,
    category: 'FullStack',
    architecture: ['Async APIs', 'Database Optimization', 'Caching', 'Authentication']
  },
  {
    id: 'database-optimization',
    title: 'Database Performance Optimization',
    description: 'Optimized PostgreSQL databases through indexing strategy, query optimization, and replication setup. Reduced query time by 80%.',
    problem: 'Slow database queries were causing application bottlenecks and poor user experience.',
    solution: 'Analyzed slow query logs, created strategic indexes, optimized queries, set up read replicas for scaling.',
    technologies: ['PostgreSQL', 'MySQL', 'Performance Analysis', 'Replication'],
    featured: true,
    category: 'DevOps/Cloud',
    architecture: ['Query Optimization', 'Indexing', 'Replication', 'Monitoring']
  },
  {
    id: 'infrastructure-as-code-migration',
    title: 'Infrastructure as Code Migration Project',
    description: 'Migrated 100+ manual AWS resources to Terraform with state management, drift detection, and automated testing.',
    problem: 'Manually created AWS resources were undocumented and difficult to replicate across environments.',
    solution: 'Authored comprehensive Terraform code with modules, automated testing, and CI/CD driven infrastructure changes.',
    technologies: ['Terraform', 'AWS', 'Python', 'GitHub Actions', 'Testing'],
    featured: true,
    category: 'DevOps/Cloud',
    architecture: ['IaC', 'Migration', 'State Management', 'Testing']
  },
  {
    id: 'kubelab-project',
    title: 'KubeLab.io',
    description: 'Production Kubernetes learning platform. Provides isolated sandbox environments for developers to practice container orchestration without risking production infrastructure.',
    problem: 'Developers need hands-on Kubernetes experience in safe environments. Manual setup takes time.',
    solution: 'Built auto-provisioning sandbox platform on AWS EKS. Developers get instant isolated clusters for labs.',
    technologies: ['React', 'TypeScript', 'FastAPI', 'Python', 'Kubernetes', 'Docker', 'AWS EKS', 'PostgreSQL', 'Redis', 'Terraform', 'GitHub Actions'],
    github: 'https://github.com/houimliraed/kubelab',
    live: 'https://kubelab.io',
    featured: true,
    category: 'DevOps/Cloud',
    architecture: ['Kubernetes Sandbox', 'Interactive Labs', 'Auto-scaling', 'Learning Analytics']
  },
  {
    id: 'infraui-project',
    title: 'InfraUI',
    description: 'React front-end deployed on AWS with Terraform and GitHub Actions CI/CD. Uses S3, CloudFront, and ACM for global, secure, and automated deployments.',
    problem: 'Frontend deployments needed secure global delivery and reproducible infrastructure provisioning.',
    solution: 'Provisioned S3, CloudFront, and certificate configuration with Terraform, then automated delivery through GitHub Actions.',
    technologies: ['React', 'Vite', 'Terraform', 'AWS S3', 'CloudFront', 'GitHub Actions', 'ACM', 'Route53'],
    github: 'https://github.com/raed-houimli/the-infraui',
    featured: true,
    category: 'DevOps/Cloud',
    architecture: ['S3 Hosting', 'CloudFront CDN', 'IaC', 'CI/CD']
  },
  {
    id: 'cloudpipelinex-project',
    title: 'CloudPipelineX',
    description: 'CloudOps Pipeline – Full backend with Django REST API, deployed on AWS ECS with load balancers, monitoring via CloudWatch, and infrastructure as code using Terraform. CI/CD handled with GitHub Actions, exposing endpoints with a user interface for easy interaction.',
    problem: 'Backend delivery required consistent deployment, monitoring, and infrastructure lifecycle management across environments.',
    solution: 'Implemented ECS-based deployment architecture with Terraform IaC and GitHub Actions automation for release consistency and observability.',
    technologies: ['Django', 'Python', 'Terraform', 'AWS ECS', 'RDS', 'ECR', 'CloudWatch', 'GitHub Actions', 'Docker', 'PostgreSQL'],
    github: 'https://github.com/raed-houimli/CloudPipelineX',
    featured: true,
    category: 'DevOps/Cloud',
    architecture: ['IaC', 'ECS Deployment', 'Load Balancing', 'CI/CD', 'Monitoring']
  },
  {
    id: 'epicllm-project',
    title: 'EpicLLM',
    description: 'Story generation platform using LangChain and OpenAI API. Demonstrates LLM integration patterns and cost optimization through caching.',
    problem: 'Direct API calls to LLMs get expensive and slow quickly.',
    solution: 'Implemented response caching and batch processing. Deployed on AWS with auto-scaling.',
    technologies: ['FastAPI', 'LangChain', 'OpenAI API', 'React', 'Python', 'AWS', 'Docker', 'GitHub Actions', 'PostgreSQL'],
    github: 'https://github.com/houimliraed/EpicLLM',
    featured: true,
    category: 'ML/AI',
    architecture: ['LLM Integration', 'Caching Strategy', 'Cost Optimization']
  },
  {
    id: 'phishguard-ai-project',
    title: 'PhishGuardAI',
    description: 'A phishing URL detection platform with a FastAPI backend, React frontend for testing URLs, ML classification, GitLab CI/CD, and Terraform-managed AWS infrastructure (including EKS) across multiple environments.',
    problem: 'Security teams need practical phishing detection workflows combining model inference with production-ready platform operations.',
    solution: 'Built an end-to-end detection platform with ML-backed API inference, frontend validation flow, and automated CI/CD plus IaC-based deployments.',
    technologies: ['FastAPI', 'React', 'scikit-learn', 'Python', 'AWS EKS', 'Redis', 'Kubernetes', 'GitLab CI', 'Docker', 'Terraform'],
    github: 'https://github.com/raed-houimli/PhishGuardAI',
    featured: true,
    category: 'DevOps/Cloud',
    architecture: ['ML Model', 'EKS Deployment', 'Caching', 'CI/CD']
  },
  {
    id: 'networkspark-project',
    title: 'NetworkSpark',
    description: 'Social media-style app with a FastAPI backend and React frontend, deployed on AWS via Terraform and GitHub Actions, with monitoring using Prometheus and Grafana.',
    problem: 'Application delivery needed reliable cloud deployment, observability, and repeatable CI/CD workflows.',
    solution: 'Implemented infrastructure automation with Terraform and integrated CI/CD plus metrics monitoring to support stable operations.',
    technologies: ['FastAPI', 'React', 'PostgreSQL', 'Docker', 'Terraform', 'AWS', 'GitHub Actions', 'Prometheus', 'Grafana'],
    github: 'https://github.com/raed-houimli/networkspark',
    featured: true,
    category: 'DevOps/Cloud',
    architecture: ['Microservices', 'Database Optimization', 'Caching', 'Monitoring']
  },
  {
    id: 'robonav-ai-project',
    title: 'RoboNavAI',
    description: 'Autonomous mobile robot (AMR) built with ROS 2 Humble for indoor navigation using LiDAR, camera vision, and ultrasonic sensors as part of a university project, with a CI pipeline simulated on Gazebo and deployed on Jetson Xavier.',
    problem: 'Indoor robot navigation required robust multi-sensor perception and reproducible simulation-to-deployment workflows.',
    solution: 'Developed a ROS 2 navigation stack with sensor fusion, validated behavior in Gazebo CI simulations, and deployed on edge hardware.',
    technologies: ['ROS 2 Humble', 'LiDAR', 'Camera Vision', 'Ultrasonic Sensors', 'Gazebo', 'Nav2', 'Jetson Xavier', 'CI Pipeline'],
    github: 'https://github.com/raed-houimli/RoboNavAI',
    featured: true,
    category: 'ML/AI',
    architecture: ['Multi-Sensor Fusion', 'Indoor Navigation', 'Simulation CI', 'Edge Deployment']
  },
  {
    id: 'alphastack-project',
    title: 'AlphaStack',
    description: 'Building a cloud-native DevSecOps platform for quantitative strategy deployment, using Kubernetes, Terraform, and Amazon Web Services. Implementing secure CI/CD pipelines with GitHub Actions, GitOps workflows via Argo CD, and monitoring with Prometheus and Grafana.',
    problem: 'Quantitative strategy platforms require secure, reproducible, and observable infrastructure for continuous release and controlled operations.',
    solution: 'Designed a cloud-native DevSecOps architecture with GitOps workflows, policy-aware CI/CD, and end-to-end monitoring for resilient deployments.',
    technologies: ['Kubernetes', 'Terraform', 'Amazon Web Services (AWS)', 'GitHub Actions', 'Argo CD', 'Prometheus', 'Grafana', 'DevSecOps'],
    github: 'https://github.com/raed-houimli/AlphaStack',
    featured: true,
    category: 'DevOps/Cloud',
    architecture: ['GitOps', 'Secure CI/CD', 'Cloud-native Platform', 'Observability']
  },
  {
    id: 'secure-mlops-platform',
    title: 'Secure MLOps Platform Blueprint',
    description: 'Reference implementation for secure ML lifecycle orchestration across model training, validation, and deployment stages on cloud infrastructure with policy checks and audit trails.',
    problem: 'MLOps pipelines often lack consistent security controls and traceability across environments.',
    solution: 'Defined a secure-by-design MLOps workflow with role-based controls, environment isolation, and automated validation gates.',
    technologies: ['MLOps', 'Python', 'Kubernetes', 'Terraform', 'CI/CD', 'Security Automation'],
    featured: false,
    category: 'ML/AI',
    architecture: ['Secure Pipeline', 'Model Governance', 'Environment Isolation']
  },
  {
    id: 'distributed-ai-observability',
    title: 'Distributed AI Observability Stack',
    description: 'Observability design for AI-enabled distributed services with unified metrics, logs, and drift-oriented monitoring to improve reliability and incident response.',
    problem: 'Distributed AI services are difficult to monitor consistently across infrastructure and model behavior layers.',
    solution: 'Implemented a cross-layer observability model linking infrastructure telemetry with model-serving performance indicators.',
    technologies: ['Prometheus', 'Grafana', 'CloudWatch', 'Python', 'Distributed Systems'],
    featured: false,
    category: 'ML/AI',
    architecture: ['Cross-layer Monitoring', 'Model Drift Signals', 'Operational Dashboards']
  },
  {
    id: 'zero-trust-delivery-workflow',
    title: 'Zero-Trust Delivery Workflow',
    description: 'Secure software delivery workflow applying zero-trust principles to CI/CD with identity-aware controls, secrets governance, and policy-driven deployment gates.',
    problem: 'Traditional pipelines expose excessive trust assumptions between development, build, and deployment stages.',
    solution: 'Applied identity-scoped execution, artifact verification, and policy-as-code checks before promotion to runtime environments.',
    technologies: ['DevSecOps', 'IAM', 'GitHub Actions', 'Terraform', 'Policy as Code'],
    featured: false,
    category: 'DevOps/Cloud',
    architecture: ['Zero-Trust CI/CD', 'Policy Gates', 'Artifact Trust Chain']
  },
  {
    id: 'terraform-modules',
    title: 'Terraform AWS Modules',
    description: 'Reusable Terraform modules for common AWS resources. Standardizes infrastructure provisioning across projects.',
    problem: 'Each project had different AWS configurations with no consistency.',
    solution: 'Created parameterized modules for VPC, RDS, ECS, ALB, and S3.',
    technologies: ['Terraform', 'AWS', 'HCL'],
    github: 'https://github.com/houimliraed/terraform-modules',
    featured: true,
    category: 'DevOps/Cloud',
    architecture: ['IaC', 'Modularity', 'Reusability']
  },
  {
    id: 'k8s-deployment',
    title: 'Kubernetes Deployment Automation',
    description: 'GitOps implementation with ArgoCD for automated Kubernetes deployments from Git changes.',
    problem: 'Manual kubectl deployments caused inconsistencies and human errors.',
    solution: 'Deployed ArgoCD to sync cluster state with Git repository automatically.',
    technologies: ['Kubernetes', 'ArgoCD', 'Docker', 'GitLab CI'],
    github: 'https://github.com/houimliraed/k8s-gitops',
    featured: true,
    category: 'DevOps/Cloud',
    architecture: ['GitOps', 'Continuous Deployment', 'Automation']
  },
  {
    id: 'fastapi-microservice',
    title: 'FastAPI Microservice Template',
    description: 'Reusable FastAPI template with best practices. Includes authentication, logging, error handling, and health checks.',
    problem: 'Teams were duplicating boilerplate code for each new microservice.',
    solution: 'Created opinionated template with JWT auth, structured logging, and OpenAPI docs.',
    technologies: ['Python', 'FastAPI', 'PostgreSQL', 'Docker'],
    github: 'https://github.com/houimliraed/fastapi-template',
    featured: true,
    category: 'FullStack',
    architecture: ['REST API', 'Authentication', 'Logging']
  },
  {
    id: 'ml-pipeline',
    title: 'ML Data Processing Pipeline',
    description: 'Automated ETL pipeline for ML workflows. Handles data extraction, cleaning, and feature engineering.',
    problem: 'Manual data preparation was time-consuming and error-prone.',
    solution: 'Built Airflow DAG with Spark for distributed processing and version control.',
    technologies: ['Python', 'Pandas', 'Scikit-learn', 'Docker'],
    github: 'https://github.com/houimliraed/ml-pipeline',
    featured: true,
    category: 'ML/AI',
    architecture: ['ETL', 'Feature Engineering', 'Pipeline Automation']
  },
  {
    id: 'anomaly-detection',
    title: 'Time Series Anomaly Detection',
    description: 'LSTM model for detecting anomalies in time-series metrics data. Real-time inference for alerting.',
    problem: 'Static threshold alerts generated too many false positives.',
    solution: 'Trained LSTM model on historical metrics to learn normal patterns. Real-time inference.',
    technologies: ['Python', 'TensorFlow', 'PostgreSQL', 'FastAPI'],
    github: 'https://github.com/houimliraed/anomaly-detection',
    featured: true,
    category: 'ML/AI',
    architecture: ['Deep Learning', 'Time Series', 'Real-time Inference']
  },
  {
    id: 'cloud-native',
    title: 'Cloud Native Application',
    description: 'Refactored application to cloud-native architecture with microservices and Kubernetes.',
    problem: 'Monolithic app couldn\'t scale and had high fixed infrastructure costs.',
    solution: 'Decomposed into microservices on Kubernetes with horizontal auto-scaling.',
    technologies: ['Kubernetes', 'Microservices', 'Docker'],
    github: 'https://github.com/houimliraed/cloud-native',
    featured: true,
    category: 'DevOps/Cloud',
    architecture: ['Microservices', 'Auto-scaling', 'Cloud Native']
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
