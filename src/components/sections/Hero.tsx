import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../../data/content';

export const Hero: React.FC = () => {
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(personalInfo.linkedin)}`;

  const techStack = [
    { name: 'AWS', icon: '☁️', color: '#FF9900' },
    { name: 'Kubernetes', icon: '⎈', color: '#326CE5' },
    { name: 'Terraform', icon: '🔨', color: '#7B42BC' },
    { name: 'Docker', icon: '🐳', color: '#2496ED' },
    { name: 'CI/CD', icon: '🔄', color: '#0ea5e9' },
    { name: 'ML/AI', icon: '🤖', color: '#8b5cf6' },
  ];

  return (
    <section id="home" className="relative overflow-hidden min-h-screen flex items-center pt-20">
      {/* Professional Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-20"></div>
      
      {/* Gradient Orbs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent-primary/10 rounded-full blur-3xl opacity-40 float-animation"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent-secondary/10 rounded-full blur-3xl opacity-30 float-animation" style={{ animationDelay: '2s' }}></div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* Left: Professional Presentation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-2"
          >
            {/* Professional Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-3 mb-6 px-4 py-2 bg-gradient-to-r from-accent-primary/10 via-accent-secondary/10 to-accent-primary/10 border border-accent-primary/30 rounded-full"
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="text-sm font-bold text-accent-primary uppercase tracking-wider">Available for Enterprise Projects</span>
            </motion.div>

            {/* Name & Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 tracking-tight leading-[1.1]"
            >
              <span className="gradient-text-animated">{personalInfo.name}</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mb-8"
            >
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-text-primary-light dark:text-text-primary-dark">
                Senior Infrastructure Engineer &<br />
                <span className="text-accent-primary">DevOps Consultant</span>
              </h2>
              <p className="text-lg text-text-secondary-light dark:text-text-secondary-dark font-medium">
                End-to-End Infrastructure Solutions | AWS • Kubernetes • Terraform
              </p>
            </motion.div>

            {/* Value Proposition */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-10 p-6 bg-gradient-to-br from-surface-light/50 to-background-light/50 dark:from-surface-dark/50 dark:to-background-dark/50 rounded-2xl border border-border-light/50 dark:border-border-dark/50 backdrop-blur-sm"
            >
              <p className="text-base md:text-lg text-text-secondary-light dark:text-text-secondary-dark leading-relaxed">
                I architect <span className="font-bold text-accent-primary">enterprise-grade cloud infrastructure</span> from development through production deployment. With a <span className="font-semibold">full-stack engineering background</span> and deep expertise in <span className="font-semibold">DevOps automation</span>, I deliver <span className="font-bold">complete end-to-end solutions</span> – from backend APIs to CI/CD pipelines to Kubernetes orchestration on AWS.
              </p>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-border-light/50 dark:border-border-dark/50">
                {[
                  { value: '5.5+', label: 'Years' },
                  { value: '50+', label: 'Projects' },
                  { value: '99.9%', label: 'Uptime' }
                ].map((stat, i) => (
                  <div key={i} className="text-center">
                    <div className="text-2xl font-black text-accent-primary mb-1">{stat.value}</div>
                    <div className="text-xs font-semibold text-text-muted-light dark:text-text-muted-dark uppercase tracking-wider">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Core Technologies */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mb-10"
            >
              <h3 className="text-sm font-bold text-text-muted-light dark:text-text-muted-dark uppercase tracking-wider mb-4">Core Technologies</h3>
              <div className="flex flex-wrap gap-3">
                {techStack.map((tech, i) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                    whileHover={{ y: -4, scale: 1.05 }}
                    className="tech-badge cursor-default"
                  >
                    <span className="text-2xl">{tech.icon}</span>
                    <span>{tech.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(14,165,233,0.3)' }}
                whileTap={{ scale: 0.98 }}
                className="btn-primary btn-glow text-center px-8 py-4 text-base font-bold"
              >
                <span className="flex items-center justify-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Schedule Strategy Call
                </span>
              </motion.a>
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="btn-secondary text-center px-8 py-4 text-base font-bold"
              >
                View Case Studies →
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right: Compact Professional Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-1"
          >
            <div className="sticky top-24 space-y-4">
              {/* Profile Card - More Compact */}
              <div className="enterprise-card p-6">
                {/* Profile Image - Now Circular */}
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  className="relative mb-5 flex justify-center"
                >
                  {/* Animated Glow Ring */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                      className="w-40 h-40 rounded-full bg-gradient-to-r from-accent-primary via-accent-secondary to-accent-primary opacity-20 blur-xl"
                    ></motion.div>
                  </div>

                  {/* Profile Image Container */}
                  <div className="relative">
                    {/* Outer Ring */}
                    <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-accent-primary via-accent-secondary to-accent-primary p-[3px]">
                      <div className="w-full h-full rounded-full bg-surface-light dark:bg-surface-dark"></div>
                    </div>
                    
                    {/* Image */}
                    <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-surface-light dark:border-surface-dark shadow-2xl">
                      <img 
                        src="/profile.jpg" 
                        alt={personalInfo.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Status Badge */}
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute -bottom-1 -right-1 px-2.5 py-1 bg-green-500 text-white rounded-full text-[10px] font-bold shadow-lg flex items-center gap-1"
                    >
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-white"></span>
                      </span>
                      <span>Available</span>
                    </motion.div>
                  </div>
                </motion.div>

                {/* Professional Info - Compact */}
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold mb-1">{personalInfo.name}</h3>
                  <p className="text-xs font-bold text-accent-primary uppercase tracking-wider mb-2">Senior Infrastructure Engineer</p>
                  <p className="text-xs text-text-secondary-light dark:text-text-secondary-dark leading-relaxed">
                    Full-stack engineer → DevOps specialist
                  </p>
                </div>

                {/* Professional Metrics - Compact Grid */}
                <div className="grid grid-cols-2 gap-2 mb-4">
                  <div className="metric-showcase py-2">
                    <div className="metric-value text-xl">24h</div>
                    <div className="metric-label text-[0.65rem]">Response</div>
                  </div>
                  <div className="metric-showcase py-2">
                    <div className="metric-value text-xl">5★</div>
                    <div className="metric-label text-[0.65rem]">Rating</div>
                  </div>
                </div>

                {/* Contact Actions - Compact */}
                <div className="space-y-2">
                  <motion.a
                    href="#contact"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="btn-primary w-full text-center text-sm py-2.5 font-bold btn-glow flex items-center justify-center gap-2"
                  >
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    Book Consultation
                  </motion.a>
                  <motion.a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="btn-secondary w-full text-center text-sm py-2.5 font-bold flex items-center justify-center gap-2"
                  >
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    LinkedIn
                  </motion.a>
                </div>
              </div>

              {/* QR Code Card - Separate, More Elegant */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="enterprise-card p-4"
              >
                <div className="flex items-center gap-4">
                  {/* QR Code - Circular Frame */}
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <div className="absolute -inset-1 bg-gradient-to-br from-accent-primary to-accent-secondary rounded-xl opacity-20 blur"></div>
                      <div className="relative bg-white p-2.5 rounded-xl shadow-lg border border-accent-primary/20">
                        <img src={qrCodeUrl} alt="LinkedIn QR" className="w-16 h-16 rounded-lg" loading="lazy" />
                      </div>
                    </div>
                  </div>

                  {/* Text */}
                  <div className="flex-1">
                    <p className="text-xs font-bold text-accent-primary uppercase tracking-wider mb-1">Quick Connect</p>
                    <p className="text-xs text-text-secondary-light dark:text-text-secondary-dark leading-relaxed mb-1">
                      Scan to connect on LinkedIn
                    </p>
                    <a 
                      href={personalInfo.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-accent-primary hover:underline inline-flex items-center gap-1"
                    >
                      View Profile
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Trust Indicators - Compact */}
              <div className="enterprise-card p-3">
                <div className="flex items-center justify-around text-center">
                  <div className="flex items-center gap-1">
                    <svg className="w-3 h-3 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-xs text-text-muted-light dark:text-text-muted-dark font-medium">NDA</span>
                  </div>
                  <div className="w-px h-4 bg-border-light dark:bg-border-dark"></div>
                  <div className="flex items-center gap-1">
                    <svg className="w-3 h-3 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-xs text-text-muted-light dark:text-text-muted-dark font-medium">Enterprise</span>
                  </div>
                  <div className="w-px h-4 bg-border-light dark:bg-border-dark"></div>
                  <div className="flex items-center gap-1">
                    <svg className="w-3 h-3 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-xs text-text-muted-light dark:text-text-muted-dark font-medium">5.5+ Yrs</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <p className="text-xs text-text-muted-light dark:text-text-muted-dark uppercase tracking-wider font-bold">Explore Services</p>
        <motion.div
          animate={{ y: [0, 8, 0] }}
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
