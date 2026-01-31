import React from 'react';
import { motion } from 'framer-motion';

export const Services: React.FC = () => {
  const services = [
    {
      icon: '☁️',
      title: 'Cloud Infrastructure Design',
      description: 'End-to-end AWS cloud architecture with high availability, security, and cost optimization.',
      deliverables: ['AWS infrastructure setup', 'Multi-region deployment', 'Disaster recovery planning', 'Cost optimization audit'],
      color: 'from-blue-500/10 to-cyan-500/10'
    },
    {
      icon: '⎈',
      title: 'Kubernetes & Container Orchestration',
      description: 'Production-grade Kubernetes clusters with auto-scaling, monitoring, and service mesh implementation.',
      deliverables: ['EKS/K8s cluster setup', 'Helm chart development', 'Service mesh integration', 'Container security'],
      color: 'from-indigo-500/10 to-blue-500/10'
    },
    {
      icon: '🔄',
      title: 'CI/CD Pipeline Automation',
      description: 'Complete DevOps automation from code commit to production deployment with GitOps practices.',
      deliverables: ['GitHub Actions/GitLab CI', 'Automated testing', 'ArgoCD GitOps', 'Deployment strategies'],
      color: 'from-purple-500/10 to-pink-500/10'
    },
    {
      icon: '🔨',
      title: 'Infrastructure as Code',
      description: 'Reproducible, version-controlled infrastructure using Terraform with complete state management.',
      deliverables: ['Terraform modules', 'State management', 'Drift detection', 'Documentation'],
      color: 'from-violet-500/10 to-purple-500/10'
    },
    {
      icon: '📊',
      title: 'Monitoring & Observability',
      description: 'Complete monitoring stack with real-time alerts, dashboards, and performance insights.',
      deliverables: ['Prometheus setup', 'Grafana dashboards', 'CloudWatch integration', 'Alert configuration'],
      color: 'from-orange-500/10 to-red-500/10'
    },
    {
      icon: '🔒',
      title: 'DevSecOps Integration',
      description: 'Security-first approach with automated scanning, secrets management, and compliance checks.',
      deliverables: ['SAST/DAST integration', 'Secrets management', 'Security scanning', 'Compliance audits'],
      color: 'from-red-500/10 to-pink-500/10'
    }
  ];

  const process = [
    { step: '1', title: 'Discovery', desc: 'Understanding your infrastructure needs and challenges' },
    { step: '2', title: 'Design', desc: 'Architecture planning and technology selection' },
    { step: '3', title: 'Implementation', desc: 'Building and deploying the solution' },
    { step: '4', title: 'Optimization', desc: 'Performance tuning and cost optimization' },
    { step: '5', title: 'Support', desc: 'Ongoing monitoring and maintenance' },
  ];

  return (
    <section id="services" className="section-shell relative overflow-hidden bg-gradient-to-b from-background-light to-surface-light dark:from-background-dark dark:to-surface-dark">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(14,165,233,0.08),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.06),transparent_50%)]"></div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
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
            <p className="kicker mb-4">What I Offer</p>
            <h2 className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-accent-primary via-accent-secondary to-accent-primary bg-clip-text text-transparent">
              Consulting Services
            </h2>
            <p className="text-lg md:text-xl text-text-secondary-light dark:text-text-secondary-dark max-w-3xl mx-auto leading-relaxed">
              End-to-end DevOps and infrastructure solutions<br />
              <span className="text-accent-primary font-semibold">from architecture design to production deployment</span>
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group relative"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-accent-primary to-accent-secondary rounded-2xl opacity-0 group-hover:opacity-20 blur transition duration-500"></div>
                <div className="relative service-card h-full">
                  <div className="flex items-start gap-4 mb-4">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center text-3xl shadow-lg`}
                    >
                      {service.icon}
                    </motion.div>
                    <div>
                      <h3 className="text-lg font-bold mb-2 group-hover:text-accent-primary transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-text-secondary-light dark:text-text-secondary-dark text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-border-light/50 dark:border-border-dark/50">
                    <p className="text-xs font-bold uppercase tracking-wider text-accent-primary mb-2">Deliverables</p>
                    <ul className="space-y-1">
                      {service.deliverables.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-text-secondary-light dark:text-text-secondary-dark">
                          <svg className="w-3 h-3 text-accent-primary mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Process Timeline */}
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold mb-3">My Process</h3>
              <p className="text-text-secondary-light dark:text-text-secondary-dark">
                A proven methodology for delivering successful infrastructure projects
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {process.map((item, i) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative"
                >
                  <div className="flex flex-col items-center text-center">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="w-16 h-16 rounded-full bg-gradient-to-br from-accent-primary to-accent-secondary text-white flex items-center justify-center font-bold text-xl mb-3 shadow-lg"
                    >
                      {item.step}
                    </motion.div>
                    <h4 className="font-bold mb-1">{item.title}</h4>
                    <p className="text-xs text-text-secondary-light dark:text-text-secondary-dark leading-snug">{item.desc}</p>
                  </div>
                  {i < process.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-accent-primary to-accent-secondary opacity-30"></div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
