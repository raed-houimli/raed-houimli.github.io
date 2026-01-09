import React from 'react';
import { motion } from 'framer-motion';
import { education, certifications, personalInfo } from '../../data/content';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="section-padding bg-surface-light dark:bg-surface-dark">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Education & Contact</h2>
            <div className="w-16 h-1 bg-accent-primary rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Education & Certifications */}
            <div className="space-y-12">
              {/* Education */}
              <div>
                <h3 className="text-2xl font-semibold mb-6">Education</h3>
                <div className="space-y-6">
                  {education.map((edu) => (
                    <div key={edu.id} className="card p-6">
                      <h4 className="font-semibold text-lg mb-2">{edu.degree}</h4>
                      <p className="text-text-secondary-light dark:text-text-secondary-dark mb-1">
                        {edu.institution}
                      </p>
                      <div className="flex flex-col md:flex-row md:justify-between text-sm text-text-muted-light dark:text-text-muted-dark">
                        <p>{edu.period}</p>
                        <p>{edu.location}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Certifications */}
              <div>
                <h3 className="text-2xl font-semibold mb-6">Certifications</h3>
                <div className="space-y-4">
                  {certifications.map((cert) => (
                    <div key={cert.id} className="card p-6">
                      <h4 className="font-semibold mb-2">{cert.name}</h4>
                      <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark mb-1">
                        {cert.issuer}
                      </p>
                      <p className="text-sm text-text-muted-light dark:text-text-muted-dark">
                        {cert.date}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Contact */}
            <div>
              <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
              <div className="card p-8">
                <p className="text-text-secondary-light dark:text-text-secondary-dark mb-8 leading-relaxed">
                  I'm currently open to new opportunities and interesting projects. 
                  Whether you have a question or just want to say hi, I'll do my best 
                  to get back to you.
                </p>

                <div className="space-y-6">
                  {/* Email */}
                  <div className="flex items-start">
                    <svg className="w-6 h-6 mr-4 text-accent-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <p className="font-medium mb-1">Email</p>
                      <a 
                        href={`mailto:${personalInfo.email}`}
                        className="text-text-secondary-light dark:text-text-secondary-dark link-hover"
                      >
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>

                  {/* GitHub */}
                  <div className="flex items-start">
                    <svg className="w-6 h-6 mr-4 text-accent-primary flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <p className="font-medium mb-1">GitHub</p>
                      <a 
                        href={personalInfo.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-text-secondary-light dark:text-text-secondary-dark link-hover"
                      >
                        {personalInfo.github.replace('https://', '')}
                      </a>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-start">
                    <svg className="w-6 h-6 mr-4 text-accent-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <p className="font-medium mb-1">Location</p>
                      <p className="text-text-secondary-light dark:text-text-secondary-dark">
                        {personalInfo.location}
                      </p>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="mt-8">
                  <a 
                    href={`mailto:${personalInfo.email}`}
                    className="btn-primary w-full text-center"
                  >
                    Send me an email
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
