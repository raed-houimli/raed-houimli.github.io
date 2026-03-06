import React from 'react';
import { motion } from 'framer-motion';
import { experiences } from '../../data/content';

export const Experience: React.FC = () => {
  const ministryEmployer = 'The Ministry of National Defense of Tunisia';
  const ministryRoles = experiences.filter((role) => role.company === ministryEmployer);
  const nonMinistryRoles = experiences.filter((role) => role.company !== ministryEmployer);
  const ministryProgressionOrder = [
    'mod-tunisia-devops',
    'mod-tunisia-software',
    'mod-tunisia-technical-support',
  ];
  const ministryProgressionRoles = ministryProgressionOrder
    .map((roleId) => ministryRoles.find((role) => role.id === roleId))
    .filter((role): role is NonNullable<typeof role> => Boolean(role));

  return (
    <section id="experience" className="section-shell">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="section-header mb-8">
            <p className="kicker mb-2">Experience</p>
            <h2 className="section-title">Career Timeline</h2>
            <p className="section-subtitle text-sm">
              5+ years of progression from software engineering to DevSecOps, with growing focus on secure automation and intelligent cloud systems
            </p>
          </div>

          <div className="max-w-4xl mx-auto relative">
            <div className="hidden md:block absolute left-3 top-0 bottom-0 w-px bg-border-light dark:bg-border-dark" />

            <div className="space-y-5">
              {nonMinistryRoles.map((role, index) => {
                const [employmentMeta, skillsMeta] = role.highlights;

                return (
                  <motion.article
                    key={role.id}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: index * 0.05 }}
                    className="relative md:pl-10"
                  >
                    <span className="hidden md:block absolute left-0 top-5 w-2.5 h-2.5 rounded-full bg-accent-primary" aria-hidden="true" />

                    <div className="card p-5">
                      <div className="flex flex-col gap-2 mb-3">
                        <h3 className="text-base md:text-lg font-semibold text-text-primary-light dark:text-text-primary-dark">
                          {role.title}
                        </h3>
                        <p className="text-sm font-medium text-accent-primary">{role.company}</p>
                        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-text-muted-light dark:text-text-muted-dark">
                          <span>{role.period}</span>
                          <span aria-hidden="true">•</span>
                          <span>{role.location}</span>
                        </div>
                      </div>

                      {employmentMeta && (
                        <p className="text-xs text-text-muted-light dark:text-text-muted-dark mb-1">{employmentMeta}</p>
                      )}
                      {skillsMeta && (
                        <p className="text-xs text-text-muted-light dark:text-text-muted-dark mb-3">{skillsMeta}</p>
                      )}

                      <p className="text-sm leading-relaxed text-text-secondary-light dark:text-text-secondary-dark mb-4">
                        {role.description}
                      </p>

                      <div className="flex flex-wrap gap-1.5">
                        {role.technologies.slice(0, 6).map((tech) => (
                          <span key={tech} className="tech-badge text-xs">{tech}</span>
                        ))}
                        {role.technologies.length > 6 && (
                          <span className="text-xs text-text-muted-light dark:text-text-muted-dark self-center">
                            +{role.technologies.length - 6}
                          </span>
                        )}
                      </div>
                    </div>
                  </motion.article>
                );
              })}

              {ministryRoles.length > 0 && (
                <motion.article
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: nonMinistryRoles.length * 0.05 }}
                  className="relative md:pl-10"
                >
                  <span className="hidden md:block absolute left-0 top-5 w-2.5 h-2.5 rounded-full bg-accent-primary" aria-hidden="true" />

                  <div className="card p-5">
                    <div className="mb-5 pb-4 border-b border-border-light/60 dark:border-border-dark/60">
                      <h3 className="text-base md:text-lg font-semibold text-text-primary-light dark:text-text-primary-dark">
                        The Ministry of National Defense of Tunisia
                      </h3>
                      <p className="text-xs text-text-muted-light dark:text-text-muted-dark mt-1">
                        Full-time · 5 yrs 6 mos · Tunis, Tunisia · On-site
                      </p>
                    </div>

                    <div className="relative pl-7 md:pl-8">
                      <div className="absolute left-2.5 md:left-3 top-3 bottom-3 w-px bg-border-light dark:bg-border-dark" aria-hidden="true" />

                      <div className="space-y-4">
                      {ministryProgressionRoles.map((role, roleIndex) => {
                        const [employmentMeta, skillsMeta] = role.highlights;

                        return (
                          <div key={role.id} className="relative">
                            <span
                              className="absolute -left-[1.42rem] md:-left-[1.62rem] top-6 w-2.5 h-2.5 rounded-full bg-accent-primary border-2 border-surface-light dark:border-surface-dark"
                              aria-hidden="true"
                            />
                            <div className="card-neo p-4 border border-border-light dark:border-border-dark">
                              <h4 className="text-sm md:text-base font-semibold text-text-primary-light dark:text-text-primary-dark mb-1">
                                {role.title}
                              </h4>
                              <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-text-muted-light dark:text-text-muted-dark mb-2">
                                <span>{role.period}</span>
                                <span aria-hidden="true">•</span>
                                <span>{role.location}</span>
                              </div>

                              {employmentMeta && (
                                <p className="text-xs text-text-muted-light dark:text-text-muted-dark mb-1">{employmentMeta}</p>
                              )}
                              {skillsMeta && (
                                <p className="text-xs text-text-muted-light dark:text-text-muted-dark mb-3">{skillsMeta}</p>
                              )}

                              <p className="text-sm leading-relaxed text-text-secondary-light dark:text-text-secondary-dark mb-3">
                                {role.description}
                              </p>

                              <div className="flex flex-wrap gap-1.5">
                                {role.technologies.map((tech) => (
                                  <span key={tech} className="tech-badge text-xs">{tech}</span>
                                ))}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                      </div>
                    </div>
                  </div>
                </motion.article>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
