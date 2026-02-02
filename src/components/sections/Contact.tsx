import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../../data/content';

export const Contact: React.FC = () => {
  const [isCalendarLoaded, setIsCalendarLoaded] = useState(false);

  return (
    <section id="contact" className="section-shell bg-gradient-to-b from-surface-light to-background-light dark:from-surface-dark dark:to-background-dark relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent-primary/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-secondary/5 rounded-full blur-3xl -z-10"></div>

      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="mb-12 text-center">
            <p className="kicker mb-3">Let’s Collaborate</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Book a Strategy Call</h2>
            <p className="text-text-secondary-light dark:text-text-secondary-dark text-lg max-w-2xl mx-auto">
              Schedule a 30‑minute consultation to discuss your infrastructure, DevOps, and cloud architecture goals. Professional English communication for global teams.
            </p>
            <div className="section-divider-glow mt-8 max-w-md mx-auto"></div>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
              {/* Left Side - Info Card */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="lg:col-span-2"
              >
                <div className="card-neo p-8 h-full sticky top-24">
                  <div className="flex flex-col items-center text-center mb-6">
                    <motion.div
                      whileHover={{ scale: 1.05, rotate: 3 }}
                      className="relative mb-6"
                    >
                      <div className="absolute -inset-2 bg-gradient-to-r from-accent-primary to-accent-secondary rounded-full blur-xl opacity-40"></div>
                      <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-accent-primary/60 shadow-2xl bg-gradient-to-br from-accent-primary/20 to-accent-secondary/20">
                        <img
                          src="https://avatars.githubusercontent.com/houimliraed"
                          alt={personalInfo.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                            const parent = e.currentTarget.parentElement;
                            if (parent) {
                              parent.innerHTML = `
                                <div class="w-full h-full flex items-center justify-center text-5xl font-black text-accent-primary">
                                  ${personalInfo.name.split(' ').map(n => n[0]).join('')}
                                </div>
                              `;
                            }
                          }}
                        />
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-green-500 rounded-full border-4 border-surface-light dark:border-surface-dark flex items-center justify-center">
                        <span className="text-white text-xs">✓</span>
                      </div>
                    </motion.div>
                    
                    <h3 className="text-2xl font-bold mb-2">{personalInfo.name}</h3>
                    <p className="kicker mb-4">Infrastructure & DevOps Consultant</p>
                    <p className="text-text-secondary-light dark:text-text-secondary-dark leading-relaxed mb-6">
                      {personalInfo.bio}
                    </p>
                  </div>

                  {/* What to Expect */}
                  <div className="mb-6">
                    <h4 className="font-bold text-lg mb-4 flex items-center">
                      <svg className="w-5 h-5 mr-2 text-accent-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      What to Expect
                    </h4>
                    <ul className="space-y-3">
                      {[
                        '30‑minute strategy call (remote)',
                        'Current infrastructure review',
                        'CI/CD + automation roadmap',
                        'Cost & reliability optimization',
                        'Next‑steps action plan'
                      ].map((item, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 + i * 0.1 }}
                          className="flex items-start text-sm text-text-secondary-light dark:text-text-secondary-dark"
                        >
                          <span className="inline-block w-1.5 h-1.5 bg-accent-primary rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
                          {item}
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Contact Options */}
                  <div className="pt-6 border-t border-border-light dark:border-border-dark space-y-3">
                    <h4 className="font-bold text-sm uppercase tracking-wide mb-3">Or Contact Directly</h4>
                    <motion.a
                      href={`mailto:${personalInfo.email}`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="btn-primary w-full flex items-center justify-center"
                    >
                      <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      Send Email
                    </motion.a>
                    <motion.a
                      href={`tel:${personalInfo.phone}`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="btn-secondary w-full flex items-center justify-center"
                    >
                      <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      Call Now
                    </motion.a>
                  </div>
                </div>
              </motion.div>

              {/* Right Side - Calendar */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="lg:col-span-3"
              >
                <div className="card-neo p-8 relative">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">Select Your Time Slot</h3>
                      <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">
                        All times are displayed in your local timezone. Professional English communication available.
                      </p>
                    </div>
                    <div className="hidden md:flex items-center gap-2 px-3 py-2 bg-green-500/10 border border-green-500/30 rounded-lg">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-xs font-semibold text-green-600 dark:text-green-400">Available Now</span>
                    </div>
                  </div>

                  {/* Loading Skeleton */}
                  {!isCalendarLoaded && (
                    <div className="absolute inset-8 flex items-center justify-center bg-surface-light dark:bg-surface-dark rounded-xl">
                      <div className="text-center">
                        <div className="inline-block w-12 h-12 border-4 border-accent-primary/30 border-t-accent-primary rounded-full animate-spin mb-4"></div>
                        <p className="text-sm text-text-muted-light dark:text-text-muted-dark">Loading calendar...</p>
                      </div>
                    </div>
                  )}

                  {/* Calendly Embed */}
                  <div className="relative rounded-xl overflow-hidden border border-border-light dark:border-border-dark shadow-inner" style={{ height: '700px' }}>
                    <iframe
                      title="Schedule a consultation with Raed Houimli"
                      src={`${personalInfo.meetingUrl}?embed_domain=${window.location.hostname}&embed_type=Inline&hide_event_type_details=1&hide_gdpr_banner=1&background_color=ffffff&text_color=0f172a&primary_color=0ea5e9`}
                      width="100%"
                      height="100%"
                      frameBorder="0"
                      onLoad={() => setIsCalendarLoaded(true)}
                      className="rounded-xl"
                    />
                  </div>

                  {/* Fallback Link */}
                  <div className="mt-6 text-center">
                    <p className="text-xs text-text-muted-light dark:text-text-muted-dark mb-2">
                      Calendar not displaying properly?
                    </p>
                    <motion.a
                      href={personalInfo.meetingUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="inline-flex items-center text-sm font-medium text-accent-primary hover:underline"
                    >
                      Open in new window
                      <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Trust Badges - Simplified and Compact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 text-center"
          >
            <div className="flex flex-wrap justify-center items-center gap-6 max-w-2xl mx-auto">
              {[
                { icon: '⚡', text: '24h Response' },
                { icon: '✓', text: 'Free Consultation' },
                { icon: '🔒', text: 'NDA Available' }
              ].map((badge, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2 px-4 py-2 bg-surface-light dark:bg-surface-dark rounded-lg border border-border-light dark:border-border-dark"
                >
                  <span className="text-xl">{badge.icon}</span>
                  <span className="text-sm font-medium">{badge.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
