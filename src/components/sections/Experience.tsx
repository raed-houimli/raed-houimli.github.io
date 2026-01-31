import React from 'react';
import { motion } from 'framer-motion';
import { experiences } from '../../data/content';

export const Experience: React.FC = () => {
  const services = [
    {
      icon: '☁️',
      title: 'AWS Cloud Architecture',
      description: 'Design and implement scalable, highly available infrastructure on AWS with best practices for security and cost optimization.',
      features: ['Multi-region deployments', 'Auto-scaling configuration', 'Cost optimization strategies', 'Security hardening']
    },
    {
      icon: '⎈',
      title: 'Kubernetes Orchestration',
      description: 'Container orchestration with Kubernetes/EKS, including cluster setup, service mesh implementation, and workload optimization.',
      features: ['EKS cluster setup', 'Helm chart development', 'Auto-scaling policies', 'Service mesh (Istio)']
    },
    {
      icon: '🔄',
      title: 'CI/CD Automation',
      description: 'Complete CI/CD pipeline implementation with GitHub Actions, GitLab CI, and ArgoCD for automated testing and deployment.',
      features: ['Pipeline design', 'Automated testing', 'GitOps workflows', 'Deployment strategies']
    },
    {
      icon: '🔨',
      title: 'Infrastructure as Code',
      description: 'Terraform-based IaC solutions with module development, state management, and drift detection for reproducible infrastructure.',
      features: ['Terraform modules', 'State management', 'Drift detection', 'Multi-environment setup']
    }
  ];

  const pipeline = [
    { step: 'Development', icon: '💻', tools: ['Git', 'Docker', 'Local K8s'] },
    { step: 'CI/CD', icon: '🔄', tools: ['GitHub Actions', 'GitLab CI', 'Testing'] },
    { step: 'IaC', icon: '🔨', tools: ['Terraform', 'Ansible', 'CloudFormation'] },
    { step: 'Deployment', icon: '🚀', tools: ['Kubernetes', 'ArgoCD', 'Helm'] },
    { step: 'Monitoring', icon: '📊', tools: ['Prometheus', 'Grafana', 'CloudWatch'] },
  ];

  return (
    <section id="experience" className="section-shell relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(14,165,233,0.1),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.08),transparent_50%)]"></div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="kicker mb-3">Full-Stack Infrastructure Engineering</p>
            <h2 className="text-4xl md:text-5xl font-black mb-4">Services & Expertise</h2>
            <p className="text-lg text-text-secondary-light dark:text-text-secondary-dark max-w-3xl mx-auto">
              From full-stack development to cloud infrastructure and DevOps automation – delivering complete solutions from code to production
            </p>
            <div className="section-divider-glow mt-8 max-w-md mx-auto"></div>
          </div>

          {/* Pipeline Visualization */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-20"
          >
            <div className="terminal-window max-w-5xl mx-auto">
              <div className="terminal-header">
                <div className="terminal-dot red"></div>
                <div className="terminal-dot yellow"></div>
                <div className="terminal-dot green"></div>
                <span className="ml-4 text-sm font-semibold text-gray-300">deployment-pipeline.yml</span>
              </div>
              <div className="terminal-body">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                  {pipeline.map((stage, i) => (
                    <motion.div
                      key={stage.step}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                      className="pipeline-step"
                    >
                      <div className="text-3xl mb-2 text-center">{stage.icon}</div>
                      <div className="text-white font-bold text-sm mb-2 text-center">{stage.step}</div>
                      <div className="text-green-400 text-xs space-y-1">
                        {stage.tools.map((tool, idx) => (
                          <div key={idx} className="flex items-center gap-1">
                            <span className="text-green-500">✓</span>
                            <span>{tool}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="service-card"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-5xl">{service.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                    <p className="text-text-secondary-light dark:text-text-secondary-dark text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2 mt-4">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm">
                      <svg className="w-4 h-4 text-accent-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-text-secondary-light dark:text-text-secondary-dark">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Professional Experience Timeline */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold mb-8 text-center">Professional Track Record</h3>
            <div className="timeline-container max-w-4xl mx-auto">
              {experiences.map((exp, idx) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.2 }}
                  className="timeline-item"
                >
                  <div className="enterprise-card">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-bold text-accent-primary mb-1">{exp.company}</h4>
                        <p className="text-lg font-semibold mb-1">{exp.title}</p>
                        <p className="text-sm text-text-muted-light dark:text-text-muted-dark">{exp.period}</p>
                      </div>
                      {idx === 0 && (
                        <span className="badge">Current</span>
                      )}
                    </div>
                    <p className="text-text-secondary-light dark:text-text-secondary-dark mb-4 leading-relaxed">
                      {exp.description}
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                      {exp.highlights.slice(0, 4).map((highlight, i) => (
                        <div key={i} className="flex items-start gap-2 text-sm">
                          <svg className="w-4 h-4 text-accent-secondary mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="text-text-secondary-light dark:text-text-secondary-dark">{highlight}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.slice(0, 6).map(tech => (
                        <span key={tech} className="tech-badge text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
