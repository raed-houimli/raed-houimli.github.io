import React from 'react';
import { motion } from 'framer-motion';
import { experiences } from '../../data/content';

export const Experience: React.FC = () => {
  const ministryEmployer = 'The Ministry of National Defense of Tunisia';
  const ministryRoles = experiences.filter((role) => role.company === ministryEmployer);
  const otherRoles = experiences
    .filter((role) => role.company !== ministryEmployer)
    .sort((a, b) => {
      const aIsDevSecOps = /devsecops/i.test(a.title);
      const bIsDevSecOps = /devsecops/i.test(b.title);
      if (aIsDevSecOps && !bIsDevSecOps) return -1;
      if (!aIsDevSecOps && bIsDevSecOps) return 1;
      return 0;
    });

  const ministryDevSecOpsStack = [
    'Kubernetes',
    'Terraform',
    'Amazon Web Services (AWS)',
    'GitHub Actions',
    'Argo CD',
    'Prometheus',
  ];

  const shortSummary = (description: string) => {
    const firstSentence = description.split('. ')[0]?.trim() || description;
    const normalized = firstSentence.endsWith('.') ? firstSentence : `${firstSentence}.`;
    return normalized.length > 130 ? `${normalized.slice(0, 127)}...` : normalized;
  };

  return (
    <section id="experience" className="section-shell">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-header mb-8">
            <p className="kicker mb-2">Experience</p>
            <h2 className="section-title">Professional Experience</h2>
            <p className="section-subtitle">
              Roles in software engineering, cloud operations, and DevSecOps platform development.
            </p>
          </div>

          <div className="max-w-5xl space-y-4">
            <div className="grid grid-cols-1 gap-3">
              {otherRoles.map((role, index) => (
                <motion.article
                  key={role.id}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: index * 0.05 }}
                  className="card p-5"
                >
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                    <div>
                      <h3 className="text-base leading-tight">{role.title}</h3>
                      <p className="text-sm text-accent">{role.company}</p>
                    </div>
                    <span className="text-xs text-text-muted">{role.period}</span>
                  </div>

                  <p className="text-sm text-text-muted mb-3">{role.location}</p>
                  <p className="text-sm text-text-secondary leading-relaxed mb-3">{shortSummary(role.description)}</p>

                  <div className="flex flex-wrap gap-1.5">
                    {role.technologies.slice(0, 6).map((tech) => (
                      <span key={tech} className="tech-badge text-xs">{tech}</span>
                    ))}
                  </div>
                </motion.article>
              ))}
            </div>

            {ministryRoles.length > 0 && (
              <motion.article
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="card p-5 md:p-6 border-l-4 border-l-accent"
              >
                <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-lg mb-1">{ministryEmployer}</h3>
                    <p className="text-sm text-text-muted">DevSecOps-oriented progression | Tunis, Tunisia</p>
                  </div>
                  <span className="badge">DevSecOps Track</span>
                </div>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {ministryDevSecOpsStack.map((tech) => (
                    <span key={tech} className="tech-badge text-xs">{tech}</span>
                  ))}
                </div>

                <div className="relative pl-4">
                  <div className="absolute left-[0.33rem] top-1 bottom-1 w-px bg-border" aria-hidden="true" />
                  <div className="space-y-3">
                    {ministryRoles.map((role) => (
                      <div key={role.id} className="relative rounded-md border border-border/80 bg-bg-secondary p-3.5">
                        <span className="absolute -left-[0.99rem] top-4 h-2.5 w-2.5 rounded-full bg-accent border border-white" aria-hidden="true" />
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <p className="text-sm font-semibold text-text-primary">{role.title}</p>
                          <span className="text-xs text-text-muted">{role.period}</span>
                        </div>
                        <p className="text-sm text-text-secondary mt-1.5">{shortSummary(role.description)}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.article>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
