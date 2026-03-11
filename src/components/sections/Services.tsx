import React from 'react';
import { motion } from 'framer-motion';

export const Services: React.FC = () => {
  const services = [
    {
      title: 'DevSecOps and Platform Engineering',
      desc: 'Design and implementation of secure software delivery workflows for cloud-native systems.'
    },
    {
      title: 'Cloud Architecture and Security',
      desc: 'Secure-by-default AWS infrastructure patterns, IAM hardening, and network security design.'
    },
    {
      title: 'Infrastructure as Code',
      desc: 'Terraform modules, state strategy, environment promotion, and reproducible deployments.'
    },
    {
      title: 'Kubernetes Operations',
      desc: 'Cluster operations, workload deployment, observability, and production readiness practices.'
    },
    {
      title: 'Research and Technical Collaboration',
      desc: 'Applied collaboration around cybersecurity, AI/ML systems, and resilient cloud platforms.'
    },
    {
      title: 'Mentoring and Knowledge Transfer',
      desc: 'Hands-on guidance for teams adopting DevSecOps, cloud operations, and secure development culture.'
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
          <div className="section-header mb-8">
            <p className="kicker mb-2">Teaching and Services</p>
            <h2 className="section-title">Professional Activities</h2>
            <p className="section-subtitle">
              Consulting and collaboration activities focused on secure software delivery and cloud systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.05 }}
                className="card p-4"
              >
                <h3 className="text-base mb-2">{service.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{service.desc}</p>
                <div className="mt-3 text-xs text-text-muted">Available for remote collaboration.</div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: 0.2 }}
            className="mt-6"
          >
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-primary"
            >
              Contact for Collaboration
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
