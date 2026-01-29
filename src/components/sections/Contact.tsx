import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../../data/content';

export const Contact: React.FC = () => {
  const meetingEmbed =
    personalInfo.meetingUrlEmbed ??
    `${personalInfo.meetingUrl}?hide_event_type_details=1&hide_gdpr_banner=1`;

  return (
    <section id="contact" className="section-shell bg-gradient-to-b from-surface-light to-background-light dark:from-surface-dark dark:to-background-dark relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent-primary/5 rounded-full blur-3xl -z-10"></div>

      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="mb-12">
            <p className="kicker mb-3">Let's Collaborate</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-3">Book a Consultation</h2>
            <p className="text-text-secondary-light dark:text-text-secondary-dark mb-6">
              Schedule a 30-minute strategy session to discuss your infrastructure needs.
            </p>
            <div className="section-divider"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="card-neo p-8">
              <h3 className="text-2xl font-bold mb-5">Select Your Time</h3>
              <p className="text-text-secondary-light dark:text-text-secondary-dark mb-6">
                Choose a time that works best for you. I typically respond within 24 hours.
              </p>
              <div id="booking" className="embed-container mb-6">
                <iframe
                  title="Schedule a consultation"
                  src={meetingEmbed}
                  loading="lazy"
                  allow="fullscreen"
                />
              </div>
              <div className="text-center">
                <p className="text-xs text-text-muted-light dark:text-text-muted-dark mb-3">
                  Calendar not loading?
                </p>
                <a
                  href={personalInfo.meetingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary w-full text-center"
                >
                  Open Calendly →
                </a>
              </div>
            </div>

            <div className="card-neo p-8 flex flex-col items-center justify-center text-center">
              <div className="w-32 h-32 rounded-full overflow-hidden border-3 border-accent-primary/40 mb-6 shadow-lg">
                <img
                  src="/profile.jpg"
                  alt={personalInfo.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold mb-3">{personalInfo.name}</h3>
              <p className="kicker mb-3">Infrastructure & DevOps Consultant</p>
              <p className="text-text-secondary-light dark:text-text-secondary-dark mb-8 leading-relaxed">
                {personalInfo.bio}
              </p>
              <div className="space-y-3 w-full">
                <a href={`mailto:${personalInfo.email}`} className="btn-primary w-full">
                  Send Email
                </a>
                <a
                  href={`tel:${personalInfo.phone}`}
                  className="btn-secondary w-full"
                >
                  Call Me
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
