import React from 'react';
import { motion } from 'framer-motion';

export const Services: React.FC = () => {
  const serviceCategories = [
    {
      category: 'Infrastructure & Cloud',
      icon: '☁️',
      color: 'from-accent-primary/10 to-accent-secondary/10',
      services: [
        { name: 'AWS Cloud Architecture', desc: 'Multi-region, highly available infrastructure with security & cost optimization' },
        { name: 'Infrastructure as Code', desc: 'Terraform modules, state management, and automated provisioning' },
        { name: 'Network & Security Design', desc: 'VPC architecture, IAM policies, and compliance frameworks' }
      ]
    },
    {
      category: 'DevOps & Automation',
      icon: '⚙️',
      color: 'from-accent-secondary/10 to-accent-primary/10',
      services: [
        { name: 'CI/CD Pipeline Development', desc: 'GitHub Actions, GitLab CI with automated testing & deployment' },
        { name: 'Container Orchestration', desc: 'Kubernetes/EKS cluster setup, Helm charts, service mesh' },
        { name: 'GitOps Implementation', desc: 'ArgoCD workflows for declarative, automated deployments' }
      ]
    },
    {
      category: 'Monitoring & Performance',
      icon: '📊',
      color: 'from-accent-primary/10 to-accent-secondary/10',
      services: [
        { name: 'Observability Stack', desc: 'Prometheus, Grafana, and CloudWatch integration' },
        { name: 'Performance Optimization', desc: 'Resource tuning, auto-scaling, and cost reduction' },
        { name: 'Incident Response', desc: 'Alert configuration, on-call setup, SLA management' }
      ]
    }
  ];

  const deliveryProcess = [
    { phase: 'Discovery', icon: '🔍', activities: ['Infrastructure audit', 'Requirements gathering', 'Architecture review'] },
    { phase: 'Design', icon: '📐', activities: ['Solution architecture', 'Technology selection', 'Migration planning'] },
    { phase: 'Implementation', icon: '🔨', activities: ['Infrastructure setup', 'Pipeline automation', 'Testing & validation'] },
    { phase: 'Optimization', icon: '⚡', activities: ['Performance tuning', 'Cost optimization', 'Security hardening'] },
    { phase: 'Support', icon: '🛡️', activities: ['Monitoring setup', 'Documentation', 'Knowledge transfer'] }
  ];

  return (
    <section id="services" className="section-shell relative overflow-hidden bg-gradient-to-b from-surface-light to-background-light dark:from-surface-dark dark:to-background-dark">
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
            <p className="kicker mb-4">Professional Services</p>
            <h2 className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-accent-primary via-accent-secondary to-accent-primary bg-clip-text text-transparent">
              End-to-End DevOps Solutions
            </h2>
            <p className="text-lg md:text-xl text-text-secondary-light dark:text-text-secondary-dark max-w-3xl mx-auto leading-relaxed">
              From architecture design to production deployment — comprehensive infrastructure services that <span className="text-accent-primary font-semibold">combine 5+ years of development expertise with DevOps automation</span>
            </p>
          </div>

          {/* Service Categories Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-24">
            {serviceCategories.map((category, i) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="service-card group"
              >
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-6 pb-4 border-b border-border-light/50 dark:border-border-dark/50">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center text-3xl shadow-lg`}
                  >
                    {category.icon}
                  </motion.div>
                  <h3 className="text-xl font-bold group-hover:text-accent-primary transition-colors">
                    {category.category}
                  </h3>
                </div>

                {/* Services List */}
                <div className="space-y-4">
                  {category.services.map((service, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + idx * 0.1 }}
                      whileHover={{ x: 4 }}
                      className="group/item"
                    >
                      <h4 className="font-bold text-sm mb-1 group-hover/item:text-accent-primary transition-colors">
                        {service.name}
                      </h4>
                      <p className="text-xs text-text-secondary-light dark:text-text-secondary-dark leading-relaxed">
                        {service.desc}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Delivery Process Timeline */}
          <div className="max-w-6xl mx-auto mb-20">
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold mb-3">Proven Delivery Process</h3>
              <p className="text-text-secondary-light dark:text-text-secondary-dark">
                A systematic approach from initial consultation to production deployment
              </p>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="hidden lg:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-accent-primary via-accent-secondary to-accent-primary opacity-30"></div>

              <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                {deliveryProcess.map((step, i) => (
                  <motion.div
                    key={step.phase}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="relative"
                  >
                    <div className="flex flex-col items-center text-center">
                      {/* Icon Circle */}
                      <motion.div
                        whileHover={{ scale: 1.15, rotate: 10 }}
                        className="relative z-10 w-24 h-24 rounded-full bg-gradient-to-br from-accent-primary to-accent-secondary flex items-center justify-center text-4xl mb-4 shadow-lg border-4 border-surface-light dark:border-surface-dark"
                      >
                        {step.icon}
                      </motion.div>

                      {/* Phase Name */}
                      <h4 className="font-bold text-lg mb-3">{step.phase}</h4>

                      {/* Activities */}
                      <ul className="space-y-2">
                        {step.activities.map((activity, idx) => (
                          <li key={idx} className="text-xs text-text-secondary-light dark:text-text-secondary-dark flex items-center justify-center gap-1">
                            <span className="w-1 h-1 bg-accent-primary rounded-full"></span>
                            {activity}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center"
          >
            <div className="inline-block p-8 rounded-2xl bg-gradient-to-br from-accent-primary/10 to-accent-secondary/10 border-2 border-accent-primary/30">
              <h3 className="text-2xl font-bold mb-3">Ready to Transform Your Infrastructure?</h3>
              <p className="text-text-secondary-light dark:text-text-secondary-dark mb-6 max-w-2xl mx-auto">
                Let's discuss how I can help you build scalable, reliable, and secure infrastructure solutions.
              </p>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary inline-flex items-center gap-2 text-lg px-8 py-4"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Schedule Free Consultation
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
