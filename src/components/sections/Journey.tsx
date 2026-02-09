import React from 'react';
import { motion } from 'framer-motion';
import { experiences } from '../../data/content';

export const Journey: React.FC = () => {
  return (
    <section id="journey" className="section-shell relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="section-header">
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
            <p className="kicker mb-4">Career Timeline</p>
            <h2 className="section-title">Professional Journey</h2>
            <p className="section-subtitle">
              From full-stack development to DevOps engineering – <span className="font-semibold text-accent-primary">4+ years building enterprise infrastructure</span>
            </p>
          </div>

          {/* Timeline */}
          <div className="max-w-5xl mx-auto space-y-12">
            {/* Current Freelance */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="enterprise-card"
            >
              {/* ...existing freelance experience card... */}
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
            </motion.div>

            {/* Ministry of Defense - Combined Card */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="enterprise-card"
            >
              {/* ...existing Ministry of Defense combined timeline... */}
              <div className="mb-8 pb-6 border-b-2 border-accent-primary/20">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h4 className="text-2xl font-bold text-accent-primary mb-2">Ministry of Defense – Tunisia</h4>
                    <div className="flex items-center gap-4 text-sm text-text-muted-light dark:text-text-muted-dark">
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                        Jul 2020 – Nov 2024
                      </span>
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /></svg>
                        Tunis, Tunisia
                      </span>
                    </div>
                  </div>
                  <div className="px-4 py-2 bg-gradient-to-r from-accent-primary/10 to-accent-secondary/10 border border-accent-primary/30 rounded-lg">
                    <p className="text-xs font-bold text-accent-primary uppercase">4+ Years</p>
                  </div>
                </div>
                <p className="text-text-secondary-light dark:text-text-secondary-dark leading-relaxed">
                  Progressive career growth from Software Engineer to DevOps Engineer, delivering mission-critical infrastructure and applications for government systems.
                </p>
              </div>

              {/* Roles Timeline */}
              <div className="relative pl-8">
                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-primary via-accent-secondary to-accent-primary"></div>

                {/* DevOps Role */}
                <div className="relative mb-10">
                  <div className="absolute -left-[2.1rem] top-2 w-5 h-5 bg-accent-primary rounded-full border-4 border-surface-light dark:border-surface-dark shadow-lg"></div>
                  <div className="mb-4">
                    <div className="flex items-center gap-3 mb-2">
                      <h5 className="text-lg font-bold">DevOps Engineer</h5>
                      <span className="px-2 py-1 bg-accent-secondary/10 text-accent-secondary text-xs font-bold rounded-full">Promoted</span>
                    </div>
                    <p className="text-sm text-text-muted-light dark:text-text-muted-dark mb-2">Sep 2023 – Nov 2024 • 1y 3m</p>
                    <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">{experiences[1].description}</p>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {experiences[1].technologies.slice(0, 6).map(tech => (<span key={tech} className="tech-badge text-xs">{tech}</span>))}
                  </div>
                </div>

                {/* Career Arrow */}
                <div className="flex justify-center my-6">
                  <motion.div animate={{ y: [0, 4, 0] }} transition={{ duration: 2, repeat: Infinity }} className="flex flex-col items-center">
                    <svg className="w-5 h-5 text-accent-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11l5-5m0 0l5 5m-5-5v12" /></svg>
                    <p className="text-xs font-bold text-accent-primary uppercase">Growth</p>
                  </motion.div>
                </div>

                {/* Software Role */}
                <div className="relative">
                  <div className="absolute -left-[2.1rem] top-2 w-5 h-5 bg-accent-secondary rounded-full border-4 border-surface-light dark:border-surface-dark shadow-lg"></div>
                  <div className="mb-4">
                    <div className="flex items-center gap-3 mb-2">
                      <h5 className="text-lg font-bold">Software Engineer</h5>
                      <span className="px-2 py-1 bg-blue-500/10 text-blue-500 text-xs font-bold rounded-full">Foundation</span>
                    </div>
                    <p className="text-sm text-text-muted-light dark:text-text-muted-dark mb-2">Jul 2020 – Aug 2023 • 3y 2m</p>
                    <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">{experiences[2].description}</p>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {experiences[2].technologies.slice(0, 6).map(tech => (<span key={tech} className="tech-badge text-xs">{tech}</span>))}
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
