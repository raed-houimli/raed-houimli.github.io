import React from 'react';
import { motion } from 'framer-motion';
import { education } from '../../data/content';

export const Education: React.FC = () => {
  const bachelor = education[0];
  const masters = education.slice(1);

  return (
    <section id="education" className="section-shell relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/5 via-background-light to-accent-secondary/5 dark:from-accent-primary/3 dark:via-background-dark dark:to-accent-secondary/3"></div>
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
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
              </svg>
            </motion.div>
            <p className="kicker mb-4">Academic Foundation</p>
            <h2 className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-accent-secondary via-accent-primary to-accent-secondary bg-clip-text text-transparent">
              Education Journey
            </h2>
            <p className="text-lg md:text-xl text-text-secondary-light dark:text-text-secondary-dark max-w-3xl mx-auto leading-relaxed">
              Multi-disciplinary academic excellence spanning <span className="font-semibold text-accent-primary">Software Engineering, Data Science, and Cybersecurity</span>
            </p>
          </div>

          {/* Foundation Section */}
          <div className="max-w-5xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-full mb-6">
                <svg className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span className="text-sm font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">Foundation</span>
              </div>
            </motion.div>

            {/* Bachelor's Degree - Hero Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative"
            >
              {/* Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-blue-500/20 rounded-2xl blur-2xl opacity-75"></div>
              
              {/* Card */}
              <div className="relative enterprise-card p-8 md:p-10 border-2 border-blue-500/20 hover:border-blue-500/40 transition-all">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="flex-shrink-0 w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center text-5xl shadow-xl border-2 border-blue-500/30"
                  >
                    🎓
                  </motion.div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-bold mb-2 text-accent-primary">
                      {bachelor.degree}
                    </h3>
                    <p className="text-lg font-semibold text-text-secondary-light dark:text-text-secondary-dark mb-2">
                      {bachelor.institution}
                    </p>
                    <div className="flex items-center gap-2 text-sm text-text-muted-light dark:text-text-muted-dark">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      </svg>
                      {bachelor.location}
                    </div>
                  </div>

                  {/* Badge */}
                  <div className="flex-shrink-0">
                    <div className="px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl font-bold text-sm shadow-lg">
                      BSc
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Progression Arrow */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col items-center mb-16"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex flex-col items-center gap-3"
            >
              <div className="w-0.5 h-16 bg-gradient-to-b from-blue-500 to-accent-primary rounded-full"></div>
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent-primary to-accent-secondary flex items-center justify-center shadow-lg">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
              <p className="text-xs font-bold text-accent-primary uppercase tracking-wider">Advanced Specialization</p>
            </motion.div>
          </motion.div>

          {/* Master's Degrees Section */}
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-accent-primary/10 to-accent-secondary/10 border border-accent-primary/20 rounded-full mb-6">
                <svg className="w-5 h-5 text-accent-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
                <span className="text-sm font-bold text-accent-primary uppercase tracking-wider">Master's Programs</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-3">Advanced Expertise</h3>
              <p className="text-text-secondary-light dark:text-text-secondary-dark">
                Three specialized master's degrees in cutting-edge technology domains
              </p>
            </motion.div>

            {/* Master's Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {masters.map((degree, index) => {
                const icons = ['💻', '📊', '🔐'];
                const colors = [
                  'from-purple-500/10 to-pink-500/10',
                  'from-green-500/10 to-emerald-500/10',
                  'from-red-500/10 to-orange-500/10'
                ];
                const borderColors = [
                  'border-purple-500/20 hover:border-purple-500/40',
                  'border-green-500/20 hover:border-green-500/40',
                  'border-red-500/20 hover:border-red-500/40'
                ];

                return (
                  <motion.div
                    key={degree.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.7 + index * 0.15 }}
                    whileHover={{ y: -8, scale: 1.02 }}
                    className="group relative"
                  >
                    {/* Subtle Glow on Hover */}
                    <div className={`absolute -inset-1 bg-gradient-to-br ${colors[index]} rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500`}></div>
                    
                    {/* Card */}
                    <div className={`relative h-full enterprise-card p-6 border-2 ${borderColors[index]} transition-all`}>
                      {/* Step Number */}
                      <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-gradient-to-br from-accent-primary to-accent-secondary text-white flex items-center justify-center font-black text-sm shadow-xl border-2 border-surface-light dark:border-surface-dark">
                        {index + 2}
                      </div>

                      {/* Icon */}
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 10 }}
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${colors[index]} flex items-center justify-center text-4xl mb-4 shadow-lg border border-white/10`}
                      >
                        {icons[index]}
                      </motion.div>

                      {/* Content */}
                      <div className="mb-4">
                        <div className="px-3 py-1 bg-accent-primary/10 text-accent-primary text-xs font-bold rounded-full inline-block mb-3">
                          MSc
                        </div>
                        <h4 className="text-lg font-bold leading-tight mb-3 group-hover:text-accent-primary transition-colors">
                          {degree.degree}
                        </h4>
                        <div className="flex items-start gap-2 text-sm text-text-secondary-light dark:text-text-secondary-dark">
                          <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-accent-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                          </svg>
                          <span className="leading-tight">{degree.institution}</span>
                        </div>
                      </div>

                      {/* Location */}
                      <div className="pt-4 border-t border-border-light/50 dark:border-border-dark/50">
                        <div className="flex items-center gap-2 text-xs text-text-muted-light dark:text-text-muted-dark">
                          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          </svg>
                          {degree.location}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Summary Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="mt-20 max-w-4xl mx-auto"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { value: '4', label: 'Degrees', icon: '🎓' },
                { value: '3', label: 'Masters', icon: '📚' },
                { value: '3', label: 'Specializations', icon: '🎯' },
                { value: '∞', label: 'Learning', icon: '🚀' }
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 1.3 + i * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-6 rounded-2xl bg-gradient-to-br from-surface-light to-background-light dark:from-surface-dark dark:to-background-dark border border-border-light dark:border-border-dark shadow-lg"
                >
                  <div className="text-4xl mb-2">{stat.icon}</div>
                  <div className="text-3xl font-black text-accent-primary mb-1">{stat.value}</div>
                  <div className="text-xs font-bold text-text-muted-light dark:text-text-muted-dark uppercase tracking-wider">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Closing Statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1.5 }}
            className="mt-16 text-center"
          >
            <p className="text-sm text-text-muted-light dark:text-text-muted-dark italic max-w-2xl mx-auto">
              "Continuous learning and cross-disciplinary expertise enable innovative solutions to complex infrastructure challenges"
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
