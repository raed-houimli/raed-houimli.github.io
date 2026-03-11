import React from 'react';
import { motion } from 'framer-motion';

export const TechStack: React.FC = () => {
  const stack = [
    { category: 'Backend Development', items: ['FastAPI', 'Node.js', 'Express.js', 'REST APIs', 'GraphQL'] },
    { category: 'Frontend Development', items: ['React.js', 'TypeScript', 'Tailwind CSS', 'Vite'] },
    { category: 'Databases', items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis'] },
    { category: 'Cloud Infrastructure', items: ['AWS', 'Terraform', 'Ansible', 'CloudFormation'] },
    { category: 'Containers and Orchestration', items: ['Docker', 'Kubernetes', 'EKS', 'Helm', 'ArgoCD'] },
    { category: 'CI/CD Automation', items: ['GitHub Actions', 'GitLab CI', 'Jenkins'] },
    { category: 'Observability', items: ['Prometheus', 'Grafana', 'CloudWatch', 'ELK Stack'] },
    { category: 'Languages', items: ['Python', 'JavaScript/TypeScript', 'Bash', 'SQL'] },
  ];

  return (
    <section id="tech-stack" className="section-shell">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-header">
            <p className="kicker mb-3">Tools</p>
            <h2 className="section-title">Technical Stack</h2>
            <p className="section-subtitle">
              Technologies used in software engineering, DevSecOps operations, and cloud-native delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-6xl">
            {stack.map((group, i) => (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.05 }}
                className="card p-4"
              >
                <h3 className="text-base mb-3">{group.category}</h3>
                <div className="flex flex-wrap gap-1.5">
                  {group.items.map(item => (
                    <span
                      key={item}
                      className="tech-badge text-xs"
                    >
                      {item}
                    </span>
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
