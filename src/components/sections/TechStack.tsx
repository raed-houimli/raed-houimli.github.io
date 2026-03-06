import React from 'react';
import { motion } from 'framer-motion';

export const TechStack: React.FC = () => {
  const stack = [
    { category: 'Backend Development', items: ['FastAPI', 'Node.js', 'Express.js', 'REST APIs', 'GraphQL'], icon: '🔧' },
    { category: 'Frontend Development', items: ['React.js', 'TypeScript', 'Tailwind CSS', 'Vite'], icon: '⚛️' },
    { category: 'Databases', items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis'], icon: '🗄️' },
    { category: 'Cloud & Infrastructure', items: ['AWS', 'Terraform', 'Ansible', 'CloudFormation'], icon: '☁️' },
    { category: 'Containers & Orchestration', items: ['Docker', 'Kubernetes', 'EKS', 'Helm', 'ArgoCD'], icon: '⎈' },
    { category: 'CI/CD & Automation', items: ['GitHub Actions', 'GitLab CI', 'Jenkins'], icon: '🔄' },
    { category: 'Monitoring & Observability', items: ['Prometheus', 'Grafana', 'CloudWatch', 'ELK Stack'], icon: '📊' },
    { category: 'Languages', items: ['Python', 'JavaScript/TypeScript', 'Bash', 'SQL'], icon: '💬' },
  ];

  return (
    <section id="tech-stack" className="section-shell bg-surface-light dark:bg-surface-dark">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-header">
            <p className="kicker mb-3">Technology Arsenal</p>
            <h2 className="section-title">Tech Stack</h2>
            <p className="section-subtitle">
              Tooling for DevSecOps, cloud security, and MLOps-oriented engineering workflows
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {stack.map((group, i) => (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="card-luxe p-6 group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{group.icon}</span>
                  <h3 className="font-bold text-xs uppercase tracking-wide leading-tight">{group.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map(item => (
                    <motion.span
                      key={item}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1.5 bg-accent-primary/5 text-accent-primary rounded-lg text-xs font-medium border border-accent-primary/10 hover:border-accent-primary/30 transition-colors"
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
