import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../../data/content';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="section-shell pt-10 md:pt-14">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="max-w-4xl"
        >
          <p className="kicker">Abstract</p>
          <h1 className="mt-2">{personalInfo.name}</h1>

          <p className="mt-3 text-lg text-text-secondary">
            Full-stack DevSecOps and cloud security engineer with practical expertise in secure software delivery,
            infrastructure automation, and resilient platform operations.
          </p>

          <p className="mt-4 max-w-3xl text-[1.02rem] text-text-secondary leading-relaxed">
            I currently focus on the intersection of cybersecurity, AI/ML systems, and distributed cloud infrastructures.
            My work combines production-grade engineering with a research-oriented trajectory toward advanced academic
            collaboration and PhD opportunities.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-primary"
            >
              View Research Projects
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-secondary"
            >
              Contact
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
