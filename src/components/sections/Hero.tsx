import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../../data/content';

export const Hero: React.FC = () => {
  // Generate QR code URL pointing to LinkedIn profile
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(personalInfo.linkedin)}`;

  return (
    <section id="home" className="section-shell relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent-primary/10 rounded-full blur-3xl opacity-40 -z-10 animate-pulse"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent-secondary/10 rounded-full blur-3xl opacity-30 -z-10"></div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          {/* Left: Main Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-2"
          >
            <p className="kicker mb-4">Infrastructure • Cloud Architecture • DevSecOps</p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-6xl md:text-7xl font-bold mb-4 tracking-tight leading-tight"
            >
              <span className="gradient-text">{personalInfo.name}</span>
            </motion.h1>

            <div className="text-2xl md:text-3xl font-semibold mb-8 text-text-secondary-light dark:text-text-secondary-dark">
              Enterprise Infrastructure & DevOps Consultant
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-lg text-text-muted-light dark:text-text-muted-dark mb-10 leading-relaxed max-w-lg"
            >
              I help organizations build scalable, secure cloud infrastructure and automate deployment pipelines. 5+ years delivering mission-critical systems.
            </motion.p>

            <div className="grid grid-cols-2 gap-4 mb-10">
              <div className="stat">
                <span className="text-xs uppercase tracking-wider font-bold">Experience</span>
                <strong className="text-2xl">5+ Years</strong>
              </div>
              <div className="stat">
                <span className="text-xs uppercase tracking-wider font-bold">Focus</span>
                <strong className="text-2xl">Cloud & DevOps</strong>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="btn-primary">
                Schedule a Consultation
              </a>
              <a href="#projects" className="btn-secondary">
                View Case Studies
              </a>
            </div>
          </motion.div>

          {/* Right: Profile Card Sidebar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-1"
          >
            <div className="sticky top-24 card-neo p-6 border-2 border-accent-primary/20">
              {/* Profile Image */}
              <div className="relative mb-6">
                <div className="absolute -inset-1 bg-gradient-to-br from-accent-primary to-accent-secondary rounded-2xl blur-lg opacity-20"></div>
                <div className="relative w-24 h-24 rounded-2xl overflow-hidden border-2 border-accent-primary/40 mx-auto shadow-lg">
                  <img src="/profile.jpg" alt={personalInfo.name} className="w-full h-full object-cover" />
                </div>
              </div>

              {/* Name & Title */}
              <h3 className="text-xl font-bold text-center mb-1">{personalInfo.name}</h3>
              <p className="kicker text-center mb-4 text-xs">Infrastructure Engineer</p>

              {/* Bio - Shorter */}
              <p className="text-center text-text-secondary-light dark:text-text-secondary-dark text-xs mb-4 leading-relaxed">
                Cloud infrastructure & DevOps specialist.
              </p>

              {/* Details Grid - Compact */}
              <div className="grid grid-cols-2 gap-2 mb-5">
                <div className="bg-accent-primary/5 rounded-lg p-2 text-center">
                  <p className="text-xs text-text-muted-light dark:text-text-muted-dark uppercase font-bold mb-0.5">Exp</p>
                  <p className="text-sm font-bold text-accent-primary">5+</p>
                </div>
                <div className="bg-accent-secondary/5 rounded-lg p-2 text-center">
                  <p className="text-xs text-text-muted-light dark:text-text-muted-dark uppercase font-bold mb-0.5">Focus</p>
                  <p className="text-sm font-bold text-accent-secondary">DevOps</p>
                </div>
              </div>

              {/* QR Code - Functional & Readable */}
              <div className="bg-white dark:bg-white rounded-lg p-3 mb-4 flex justify-center border border-border-light dark:border-border-dark">
                <div className="w-24 h-24 flex items-center justify-center">
                  <img 
                    src={qrCodeUrl} 
                    alt="LinkedIn QR Code" 
                    className="w-full h-full"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Contact Email - Small */}
              <p className="text-xs text-text-muted-light dark:text-text-muted-dark text-center mb-3">
                {personalInfo.email}
              </p>

              {/* CTA Buttons - Compact */}
              <a href="#contact" className="btn-primary w-full text-center text-xs py-2 mb-2">
                Book Now
              </a>
              
              <a 
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary w-full text-center text-xs py-2 flex items-center justify-center"
              >
                <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                Connect
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
