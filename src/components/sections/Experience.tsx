import React from 'react';
import { motion } from 'framer-motion';
import { experiences } from '../../data/content';

export const Experience: React.FC = () => {
  const services = [
    {
      icon: '☁️',
      title: 'AWS Cloud Architecture',
      description: 'Design and implement scalable, highly available infrastructure on AWS with best practices for security and cost optimization.',
      features: ['Multi-region deployments', 'Auto-scaling configuration', 'Cost optimization strategies', 'Security hardening'],
      color: 'from-blue-500/10 to-cyan-500/10'
    },
    {
      icon: '⎈',
      title: 'Kubernetes Orchestration',
      description: 'Container orchestration with Kubernetes/EKS, including cluster setup, service mesh implementation, and workload optimization.',
      features: ['EKS cluster setup', 'Helm chart development', 'Auto-scaling policies', 'Service mesh (Istio)'],
      color: 'from-indigo-500/10 to-blue-500/10'
    },
    {
      icon: '🔄',
      title: 'CI/CD Automation',
      description: 'Complete CI/CD pipeline implementation with GitHub Actions, GitLab CI, and ArgoCD for automated testing and deployment.',
      features: ['Pipeline design', 'Automated testing', 'GitOps workflows', 'Deployment strategies'],
      color: 'from-purple-500/10 to-pink-500/10'
    },
    {
      icon: '🔨',
      title: 'Infrastructure as Code',
      description: 'Terraform-based IaC solutions with module development, state management, and drift detection for reproducible infrastructure.',
      features: ['Terraform modules', 'State management', 'Drift detection', 'Multi-environment setup'],
      color: 'from-violet-500/10 to-purple-500/10'
    }
  ];

  const pipeline = [
    { step: 'Development', icon: '💻', tools: ['Git', 'Docker', 'Local K8s'], color: 'text-blue-400' },
    { step: 'CI/CD', icon: '🔄', tools: ['GitHub Actions', 'GitLab CI', 'Testing'], color: 'text-green-400' },
    { step: 'IaC', icon: '🔨', tools: ['Terraform', 'Ansible', 'CloudFormation'], color: 'text-purple-400' },
    { step: 'Deployment', icon: '🚀', tools: ['Kubernetes', 'ArgoCD', 'Helm'], color: 'text-cyan-400' },
    { step: 'Monitoring', icon: '📊', tools: ['Prometheus', 'Grafana', 'CloudWatch'], color: 'text-orange-400' },
  ];

  return (
    <section id="experience" className="section-shell relative overflow-hidden bg-gradient-to-b from-background-light via-surface-light to-background-light dark:from-background-dark dark:via-surface-dark dark:to-background-dark">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(14,165,233,0.08),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.06),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header with Icon */}
          <div className="text-center mb-20">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, type: "spring" }}
              className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-accent-primary/20 to-accent-secondary/20 mb-6"
            >
              <svg className="w-8 h-8 text-accent-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </motion.div>
            <p className="kicker mb-4">Full-Stack Infrastructure Engineering</p>
            <h2 className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-accent-primary via-accent-secondary to-accent-primary bg-clip-text text-transparent">
              Services & Expertise
            </h2>
            <p className="text-lg md:text-xl text-text-secondary-light dark:text-text-secondary-dark max-w-3xl mx-auto leading-relaxed">
              From full-stack development to cloud infrastructure and DevOps automation<br />
              <span className="text-accent-primary font-semibold">delivering complete solutions from code to production</span>
            </p>
            <div className="section-divider-glow mt-10 max-w-md mx-auto"></div>
          </div>

          {/* Pipeline Visualization with Enhanced Design */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-24"
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-3">End-to-End Deployment Pipeline</h3>
              <p className="text-text-secondary-light dark:text-text-secondary-dark">
                Complete automation from development to production monitoring
              </p>
            </div>
            
            <div className="terminal-window max-w-6xl mx-auto">
              <div className="terminal-header">
                <div className="terminal-dot red"></div>
                <div className="terminal-dot yellow"></div>
                <div className="terminal-dot green"></div>
                <span className="ml-4 text-sm font-bold text-gray-300 flex items-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  deployment-pipeline.yml
                </span>
              </div>
              <div className="terminal-body">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                  {pipeline.map((stage, i) => (
                    <motion.div
                      key={stage.step}
                      initial={{ opacity: 0, scale: 0.8, y: 20 }}
                      whileInView={{ opacity: 1, scale: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.3 + i * 0.1, type: "spring" }}
                      className="pipeline-step group"
                    >
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="text-4xl mb-3 text-center transition-transform"
                      >
                        {stage.icon}
                      </motion.div>
                      <div className={`${stage.color} font-bold text-base mb-3 text-center`}>
                        {stage.step}
                      </div>
                      <div className="space-y-2">
                        {stage.tools.map((tool, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 + i * 0.1 + idx * 0.05 }}
                            className="flex items-center gap-2 text-green-400 text-xs group-hover:text-green-300 transition-colors"
                          >
                            <svg className="w-3 h-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span className="font-medium">{tool}</span>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Pipeline Flow Arrows */}
                <div className="hidden md:flex items-center justify-between px-8 mt-6 opacity-30">
                  {[...Array(4)].map((_, i) => (
                    <motion.svg
                      key={i}
                      animate={{ x: [0, 10, 0] }}
                      transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                      className="w-8 h-8 text-green-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </motion.svg>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Services Grid with Enhanced Cards */}
          <div className="mb-24">
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold mb-3">Core Service Offerings</h3>
              <p className="text-text-secondary-light dark:text-text-secondary-dark">
                Comprehensive infrastructure solutions tailored to your needs
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {services.map((service, i) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  className="service-card group"
                >
                  {/* Service Header */}
                  <div className="flex items-start gap-5 mb-6">
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      className={`flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-4xl shadow-lg`}
                    >
                      {service.icon}
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-bold mb-2 group-hover:text-accent-primary transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-text-secondary-light dark:text-text-secondary-dark text-sm md:text-base leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  {/* Features Grid */}
                  <div className="grid grid-cols-2 gap-3">
                    {service.features.map((feature, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + idx * 0.1 }}
                        whileHover={{ x: 4 }}
                        className="flex items-start gap-2 p-3 rounded-lg bg-surface-light/50 dark:bg-surface-dark/50 border border-border-light/50 dark:border-border-dark/50 hover:border-accent-primary/30 transition-all"
                      >
                        <svg className="w-5 h-5 text-accent-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm font-medium text-text-secondary-light dark:text-text-secondary-dark">
                          {feature}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Professional Experience Timeline with Better Spacing */}
          <div>
            <div className="text-center mb-16">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, type: "spring" }}
                className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-accent-secondary/20 to-accent-primary/20 mb-6"
              >
                <svg className="w-7 h-7 text-accent-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </motion.div>
              <h3 className="text-3xl md:text-4xl font-bold mb-4">Career Timeline</h3>
              <p className="text-text-secondary-light dark:text-text-secondary-dark text-lg">
                5.5 years of professional experience progressing from Software Engineer to DevOps Engineer
              </p>
            </div>

            <div className="max-w-5xl mx-auto space-y-16">
              {/* Current Freelance Role */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6 }}
              >
                <div className="enterprise-card group">
                  {/* Company & Role Header */}
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6 pb-6 border-b border-border-light/50 dark:border-border-dark/50">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <h4 className="text-2xl font-bold text-accent-primary">
                          {experiences[0].company}
                        </h4>
                        <motion.span
                          animate={{ scale: [1, 1.05, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="badge"
                        >
                          Current
                        </motion.span>
                      </div>
                      <p className="text-xl font-bold mb-2 text-text-primary-light dark:text-text-primary-dark">
                        {experiences[0].title}
                      </p>
                      <div className="flex items-center gap-4 text-sm text-text-muted-light dark:text-text-muted-dark">
                        <span className="flex items-center gap-1">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          {experiences[0].period}
                        </span>
                        <span className="flex items-center gap-1">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          </svg>
                          {experiences[0].location}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-text-secondary-light dark:text-text-secondary-dark mb-6 leading-relaxed text-base">
                    {experiences[0].description}
                  </p>

                  {/* Key Achievements */}
                  <div className="mb-6">
                    <h5 className="font-bold text-sm uppercase tracking-wider mb-4 flex items-center text-accent-secondary">
                      <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                      </svg>
                      Key Achievements
                    </h5>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {experiences[0].highlights.slice(0, 6).map((highlight, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.5 + i * 0.05 }}
                          whileHover={{ x: 4 }}
                          className="flex items-start gap-3 p-3 rounded-lg bg-accent-primary/5 border border-accent-primary/10 hover:border-accent-primary/30 transition-all group/item"
                        >
                          <svg className="w-5 h-5 text-accent-primary flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="text-sm text-text-secondary-light dark:text-text-secondary-dark leading-relaxed">
                            {highlight}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h5 className="font-bold text-sm uppercase tracking-wider mb-3 text-text-muted-light dark:text-text-muted-dark">
                      Tech Stack
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {experiences[0].technologies.map((tech, techIdx) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.6 + techIdx * 0.03 }}
                          whileHover={{ scale: 1.05, y: -2 }}
                          className="tech-badge text-xs"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Ministry of Defense - Combined with Timeline */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="enterprise-card group">
                  {/* Company Header */}
                  <div className="mb-8 pb-6 border-b-2 border-accent-primary/20">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h4 className="text-2xl font-bold text-accent-primary mb-2">
                          Ministry of Defense – Tunisia
                        </h4>
                        <div className="flex items-center gap-4 text-sm text-text-muted-light dark:text-text-muted-dark">
                          <span className="flex items-center gap-1">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            Jul 2020 – Nov 2025
                          </span>
                          <span className="flex items-center gap-1">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            </svg>
                            Tunis, Tunisia
                          </span>
                        </div>
                      </div>
                      <div className="px-4 py-2 bg-gradient-to-r from-accent-primary/10 to-accent-secondary/10 border border-accent-primary/30 rounded-lg">
                        <p className="text-xs font-bold text-accent-primary uppercase">5.5 Years</p>
                      </div>
                    </div>
                    <p className="text-text-secondary-light dark:text-text-secondary-dark leading-relaxed">
                      Progressive career growth from Software Engineer to DevOps Engineer, delivering mission-critical infrastructure and applications for government systems.
                    </p>
                  </div>

                  {/* Roles Timeline */}
                  <div className="relative pl-8">
                    {/* Timeline Line */}
                    <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-primary via-accent-secondary to-accent-primary"></div>

                    {/* DevOps Engineer Role (Most Recent) */}
                    <div className="relative mb-12">
                      {/* Timeline Dot */}
                      <div className="absolute -left-[2.1rem] top-2 w-5 h-5 bg-accent-primary rounded-full border-4 border-surface-light dark:border-surface-dark shadow-lg"></div>

                      <div className="mb-6">
                        <div className="flex items-center gap-3 mb-2">
                          <h5 className="text-xl font-bold text-text-primary-light dark:text-text-primary-dark">
                            DevOps Engineer
                          </h5>
                        </div>
                        <p className="text-sm font-semibold text-text-muted-light dark:text-text-muted-dark mb-3">
                          {experiences[1].period} • 2 years 3 months
                        </p>
                        <p className="text-text-secondary-light dark:text-text-secondary-dark leading-relaxed text-sm mb-4">
                          {experiences[1].description}
                        </p>
                      </div>

                      {/* Achievements */}
                      <div className="mb-4">
                        <h6 className="text-xs font-bold uppercase tracking-wider text-accent-secondary mb-3">Key Achievements</h6>
                        <div className="grid grid-cols-1 gap-3">
                          {experiences[1].highlights.slice(0, 4).map((highlight, i) => (
                            <motion.div
                              key={i}
initial={{ opacity: 0, x: -10 }}
whileInView={{ opacity: 1, x: 0 }}
viewport={{ once: true }}
transition={{ delay: 0.3 + i * 0.05 }}
className="flex items-start gap-2 text-sm p-2 rounded-lg bg-accent-primary/5 hover:bg-accent-primary/10 transition-colors"
>
                              <svg className="w-4 h-4 text-accent-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              <span className="text-text-secondary-light dark:text-text-secondary-dark leading-snug">
                                {highlight}
                              </span>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h6 className="text-xs font-bold uppercase tracking-wider text-text-muted-light dark:text-text-muted-dark mb-2">Technologies</h6>
                        <div className="flex flex-wrap gap-2">
                          {experiences[1].technologies.slice(0, 8).map((tech) => (
                            <span key={tech} className="tech-badge text-xs">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Career Progression Arrow */}
                    <div className="flex justify-center my-6">
                      <motion.div
                        animate={{ y: [0, 4, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="flex flex-col items-center"
                      >
                        <svg className="w-6 h-6 text-accent-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11l5-5m0 0l5 5m-5-5v12" />
                        </svg>
                      </motion.div>
                    </div>

                    {/* Software Engineer Role (Earlier) */}
                    <div className="relative">
                      {/* Timeline Dot */}
                      <div className="absolute -left-[2.1rem] top-2 w-5 h-5 bg-accent-secondary rounded-full border-4 border-surface-light dark:border-surface-dark shadow-lg"></div>

                      <div className="mb-6">
                        <div className="flex items-center gap-3 mb-2">
                          <h5 className="text-xl font-bold text-text-primary-light dark:text-text-primary-dark">
                            Software Engineer
                          </h5>
                        </div>
                        <p className="text-sm font-semibold text-text-muted-light dark:text-text-muted-dark mb-3">
                          Jul 2020 – Aug 2023 • 3 years 2 months
                        </p>
                        <p className="text-text-secondary-light dark:text-text-secondary-dark leading-relaxed text-sm mb-4">
                          {experiences[2].description}
                        </p>
                      </div>

                      {/* Achievements */}
                      <div className="mb-4">
                        <h6 className="text-xs font-bold uppercase tracking-wider text-accent-secondary mb-3">Key Achievements</h6>
                        <div className="grid grid-cols-1 gap-3">
                          {experiences[2].highlights.slice(0, 4).map((highlight, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.5 + i * 0.05 }}
                              className="flex items-start gap-2 text-sm p-2 rounded-lg bg-accent-secondary/5 hover:bg-accent-secondary/10 transition-colors"
                            >
                              <svg className="w-4 h-4 text-accent-secondary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              <span className="text-text-secondary-light dark:text-text-secondary-dark leading-snug">
                                {highlight}
                              </span>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h6 className="text-xs font-bold uppercase tracking-wider text-text-muted-light dark:text-text-muted-dark mb-2">Technologies</h6>
                        <div className="flex flex-wrap gap-2">
                          {experiences[2].technologies.slice(0, 8).map((tech) => (
                            <span key={tech} className="tech-badge text-xs">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
