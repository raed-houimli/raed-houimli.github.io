import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../../data/content';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background-light via-surface-light to-background-light dark:from-background-dark dark:via-surface-dark dark:to-background-dark">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(14,165,233,0.15),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.12),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      <div className="container-custom relative z-10 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Profile Image with Enhanced Glow */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            className="relative inline-block mb-6"
          >
            {/* Animated Glow Rings */}
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -inset-4 bg-gradient-to-r from-accent-primary to-accent-secondary rounded-full blur-2xl"
            />
            <motion.div
              animate={{ 
                scale: [1, 1.15, 1],
                opacity: [0.5, 0.8, 0.5]
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute -inset-2 bg-gradient-to-r from-accent-secondary to-accent-primary rounded-full blur-xl"
            />
            
            {/* Profile Image */}
            <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-accent-primary/40 shadow-2xl bg-gradient-to-br from-accent-primary/20 to-accent-secondary/20">
              <img
                src="https://avatars.githubusercontent.com/raed-houimli"
                alt={personalInfo.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  // Fallback to a placeholder with initials
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

            {/* Status Badge */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, type: "spring" }}
              className="absolute -bottom-2 -right-2 px-3 py-1 bg-green-500 text-white text-xs font-bold rounded-full shadow-lg flex items-center gap-1.5 border-2 border-surface-light dark:border-surface-dark"
            >
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-2 h-2 bg-white rounded-full"
              />
              Available
            </motion.div>
          </motion.div>

          {/* Name & Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-7xl font-black mb-4 bg-gradient-to-r from-accent-primary via-accent-secondary to-accent-primary bg-clip-text text-transparent leading-tight">
              {personalInfo.name}
            </h1>
            <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
              {personalInfo.title.map((title, i) => (
                <motion.span
                  key={title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="px-4 py-1.5 bg-gradient-to-r from-accent-primary/15 to-accent-secondary/15 border border-accent-primary/30 rounded-full text-sm font-bold"
                >
                  {title}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-8"
          >
            <p className="text-xl md:text-2xl text-text-secondary-light dark:text-text-secondary-dark mb-4 max-w-3xl mx-auto leading-relaxed">
              <span className="font-semibold text-accent-primary">DevSecOps Engineer & Cloud Infrastructure Specialist</span>
              <br />
              Building secure, scalable infrastructure with integrated security, CI/CD automation, and cloud-native solutions
            </p>
            
            {/* Tech badges */}
            <div className="flex flex-wrap justify-center gap-3 mb-6">
              {['AWS', 'Kubernetes', 'Terraform', 'DevSecOps', 'Docker', 'GitOps'].map((tech) => (
                <motion.span
                  key={tech}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="px-4 py-2 bg-gradient-to-r from-accent-primary/10 to-accent-secondary/10 border border-accent-primary/30 text-accent-primary rounded-lg text-sm font-semibold shadow-sm hover:shadow-lg transition-all"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-10"
          >
            <p className="text-base md:text-lg text-text-secondary-light dark:text-text-secondary-dark max-w-4xl mx-auto leading-relaxed">
              I architect enterprise-grade cloud infrastructure from development through production deployment. 
              With a full-stack engineering background and deep expertise in DevOps automation, I deliver 
              complete end-to-end solutions – from backend APIs to CI/CD pipelines to Kubernetes orchestration on AWS.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(14,165,233,0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary text-lg px-8 py-4 shadow-xl"
            >
              <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Schedule Consultation
            </motion.a>

            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary text-lg px-8 py-4"
            >
              View Projects
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex items-center justify-center gap-4 mt-12"
          >
            {[
              { href: personalInfo.github, icon: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z', label: 'GitHub' },
              { href: personalInfo.linkedin, icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z', label: 'LinkedIn' },
              { href: personalInfo.medium, icon: 'M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z', label: 'Medium' },
              { href: `mailto:${personalInfo.email}`, svg: '<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />', label: 'Email', stroke: true }
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.href}
                target={social.href.startsWith('mailto:') ? undefined : '_blank'}
                rel={social.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 rounded-xl bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark flex items-center justify-center text-text-secondary-light dark:text-text-secondary-dark hover:text-accent-primary hover:border-accent-primary/50 transition-all shadow-sm hover:shadow-lg"
                aria-label={social.label}
              >
                {social.svg ? (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" dangerouslySetInnerHTML={{ __html: social.svg }} />
                ) : (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d={social.icon} />
                  </svg>
                )}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-text-muted-light dark:text-text-muted-dark"
        >
          <span className="text-xs font-semibold uppercase tracking-wider">Scroll Down</span>
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
};
