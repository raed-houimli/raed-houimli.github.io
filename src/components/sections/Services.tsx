import React from 'react';
import { motion } from 'framer-motion';

export const Services: React.FC = () => {
  const services = [
    {
      title: 'Full-Stack Web Development',
      desc: 'FastAPI, Node.js backends + React.js frontends',
      icon: '💻'
    },
    {
      title: 'Cloud Infrastructure (AWS)',
      desc: 'EC2, VPC, RDS, S3, Lambda, EKS setup',
      icon: '☁️'
    },
    {
      title: 'Infrastructure as Code',
      desc: 'Terraform automation & state management',
      icon: '📝'
    },
    {
      title: 'Kubernetes Orchestration',
      desc: 'Container deployment & auto-scaling',
      icon: '⎈'
    },
    {
      title: 'CI/CD Pipelines',
      desc: 'GitHub Actions & GitLab automation',
      icon: '⚙️'
    },
    {
      title: 'Monitoring & Observability',
      desc: 'Prometheus, Grafana, CloudWatch',
      icon: '📊'
    }
  ];

  return (
    <section id="services" className="section-shell">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="section-header mb-8">
            <p className="kicker mb-2">Services</p>
            <h2 className="section-title">What I Offer</h2>
            <p className="section-subtitle text-sm">
              Full-stack development + cloud infrastructure solutions
            </p>
          </div>

          {/* Services Grid - Compact */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="card-neo p-4 group hover:shadow-lg hover:border-accent-primary/20 transition-all"
              >
                <div className="flex items-start gap-3">
                  <span className="text-2xl flex-shrink-0">{service.icon}</span>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-sm mb-1 group-hover:text-accent-primary transition-colors">
                      {service.title}
                    </h4>
                    <p className="text-xs text-text-secondary-light dark:text-text-secondary-dark leading-relaxed">
                      {service.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-6 text-center"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="btn-primary inline-flex items-center gap-2"
            >
              Schedule Consultation
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
