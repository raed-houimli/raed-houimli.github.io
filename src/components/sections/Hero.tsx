import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../../data/content';

export const Hero: React.FC = () => {
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(personalInfo.linkedin)}`;

  return (
    <section id="home" className="relative overflow-hidden min-h-screen flex items-center -mt-8">
      {/* Enhanced animated background elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent-primary/10 rounded-full blur-3xl opacity-40 float-animation"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent-secondary/10 rounded-full blur-3xl opacity-30 float-animation" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-accent-primary/5 rounded-full blur-2xl opacity-20 float-animation" style={{ animationDelay: '4s' }}></div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          {/* Left: Main Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-2"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block"
            >
              <p className="kicker mb-4 badge-pulse">Infrastructure • Cloud Architecture • DevSecOps</p>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight leading-tight"
            >
              <span className="gradient-text-animated">{personalInfo.name}</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-8 text-text-secondary-light dark:text-text-secondary-dark"
            >
              Enterprise Infrastructure & 
              <span className="text-accent-primary"> DevOps Consultant</span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-lg md:text-xl text-text-muted-light dark:text-text-muted-dark mb-10 leading-relaxed max-w-2xl"
            >
              I help organizations build <span className="font-semibold text-accent-primary">scalable, secure cloud infrastructure</span> and automate deployment pipelines. <span className="font-semibold">5+ years</span> delivering mission-critical systems.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10"
            >
              {[
                { label: 'Experience', value: '5+ Years', icon: '⚡' },
                { label: 'Projects', value: '50+', icon: '🚀' },
                { label: 'Focus', value: 'Cloud', icon: '☁️' },
                { label: 'Expertise', value: 'DevOps', icon: '🔧' }
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                  className="stat-enhanced hover:scale-105 transition-transform cursor-default"
                >
                  <div className="text-2xl mb-1">{stat.icon}</div>
                  <span className="text-xs uppercase tracking-wider font-bold block mb-1">{stat.label}</span>
                  <strong className="text-xl md:text-2xl block">{stat.value}</strong>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary btn-glow text-center"
              >
                <span className="flex items-center justify-center gap-2">
                  Schedule a Consultation
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </motion.a>
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary text-center"
              >
                View Case Studies
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right: Enhanced Profile Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-1"
          >
            <div className="sticky top-24 card-neo p-6 border-2 border-accent-primary/20 hover:border-accent-primary/40 transition-all duration-300">
              {/* Animated glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-accent-primary/20 via-accent-secondary/20 to-accent-primary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="relative">
                {/* Profile Image with enhanced styling */}
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  transition={{ duration: 0.3 }}
                  className="relative mb-6"
                >
                  <div className="absolute -inset-2 bg-gradient-to-br from-accent-primary to-accent-secondary rounded-2xl blur-xl opacity-30 animate-pulse"></div>
                  <div className="relative w-28 h-28 rounded-2xl overflow-hidden border-4 border-accent-primary/60 mx-auto shadow-2xl">
                    <img src="/profile.jpg" alt={personalInfo.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-green-500 rounded-full border-4 border-surface-light dark:border-surface-dark flex items-center justify-center shadow-lg">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                </motion.div>

                {/* Name & Title */}
                <h3 className="text-xl font-bold text-center mb-1">{personalInfo.name}</h3>
                <p className="kicker text-center mb-4 text-xs badge-pulse">Available for Hire</p>

                {/* Bio */}
                <p className="text-center text-text-secondary-light dark:text-text-secondary-dark text-xs mb-4 leading-relaxed px-2">
                  Cloud infrastructure & DevOps specialist with expertise in AWS, Kubernetes, and CI/CD automation.
                </p>

                {/* Quick Stats Grid */}
                <div className="grid grid-cols-2 gap-2 mb-5">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-gradient-to-br from-accent-primary/10 to-accent-primary/5 rounded-lg p-3 text-center border border-accent-primary/20"
                  >
                    <p className="text-xs text-text-muted-light dark:text-text-muted-dark uppercase font-bold mb-1">Response</p>
                    <p className="text-sm font-bold text-accent-primary">24h</p>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-gradient-to-br from-accent-secondary/10 to-accent-secondary/5 rounded-lg p-3 text-center border border-accent-secondary/20"
                  >
                    <p className="text-xs text-text-muted-light dark:text-text-muted-dark uppercase font-bold mb-1">Rating</p>
                    <p className="text-sm font-bold text-accent-secondary">5.0★</p>
                  </motion.div>
                </div>

                {/* QR Code with hover effect */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-white dark:bg-white rounded-xl p-4 mb-4 flex justify-center border-2 border-accent-primary/20 shadow-lg"
                >
                  <div className="w-24 h-24 flex items-center justify-center">
                    <img src={qrCodeUrl} alt="LinkedIn QR Code" className="w-full h-full" loading="lazy" />
                  </div>
                </motion.div>

                {/* Contact Info */}
                <div className="text-center mb-4 space-y-1">
                  <p className="text-xs text-text-muted-light dark:text-text-muted-dark">{personalInfo.email}</p>
                  <p className="text-xs text-text-muted-light dark:text-text-muted-dark">{personalInfo.phone}</p>
                </div>

                {/* CTA Buttons */}
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-primary w-full text-center text-sm py-3 mb-2 btn-glow"
                >
                  <span className="flex items-center justify-center gap-2">
                    Book Consultation
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </span>
                </motion.a>
                
                <motion.a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-secondary w-full text-center text-sm py-3 flex items-center justify-center"
                >
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  Connect on LinkedIn
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <p className="text-xs text-text-muted-light dark:text-text-muted-dark uppercase tracking-wider">Scroll to explore</p>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <svg className="w-6 h-6 text-accent-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
};
