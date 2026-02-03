import React from 'react';
import { motion } from 'framer-motion';
import { experiences } from '../../data/content';

export const Experience: React.FC = () => {
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
          {/* Section Header */}
          <div className="text-center mb-20">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, type: "spring" }}
              className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-accent-secondary/20 to-accent-primary/20 mb-6"
            >
              <svg className="w-8 h-8 text-accent-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </motion.div>
            <p className="kicker mb-4">Professional Journey</p>
            <h2 className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-accent-secondary via-accent-primary to-accent-secondary bg-clip-text text-transparent">
              Career Timeline
            </h2>
            <p className="text-lg md:text-xl text-text-secondary-light dark:text-text-secondary-dark max-w-3xl mx-auto leading-relaxed">
              5+ years progression from <span className="font-semibold text-accent-primary">Full-Stack Engineer to DevOps Specialist</span>
            </p>
            <div className="section-divider-glow mt-10 max-w-md mx-auto"></div>
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
                      <h4 className="text-2xl font-bold text-accent-primary">{experiences[0].company}</h4>
                      <motion.span animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 2, repeat: Infinity }} className="badge">Current</motion.span>
                    </div>
                    <p className="text-xl font-bold mb-2">{experiences[0].title}</p>
                    <div className="flex items-center gap-4 text-sm text-text-muted-light dark:text-text-muted-dark">
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                        {experiences[0].period}
                      </span>
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /></svg>
                        {experiences[0].location}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-text-secondary-light dark:text-text-secondary-dark mb-4 leading-relaxed">{experiences[0].description}</p>
                <div className="flex flex-wrap gap-2">
                  {experiences[0].technologies.map(tech => (
                    <span key={tech} className="tech-badge text-xs">{tech}</span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Ministry of Defense - Combined Timeline */}
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
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                          Jul 2020 – Nov 2025
                        </span>
                        <span className="flex items-center gap-1">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /></svg>
                          Tunis, Tunisia
                        </span>
                      </div>
                    </div>
                    <div className="px-4 py-2 bg-gradient-to-r from-accent-primary/10 to-accent-secondary/10 border border-accent-primary/30 rounded-lg">
                      <p className="text-xs font-bold text-accent-primary uppercase"></p>
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
        </motion.div>
      </div>
    </section>
  );
};
