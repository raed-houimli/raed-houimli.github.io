import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../../data/content';

export const About: React.FC = () => {
  const expertise = [
    {
      title: 'DevSecOps Engineer',
      icon: '💻',
      description: 'Designing and operating secure delivery pipelines and cloud-native platforms with reliability, auditability, and automation as core principles.',
      skills: ['CI/CD Security', 'Kubernetes', 'Terraform', 'GitOps', 'SAST/DAST', 'Observability']
    },
    {
      title: 'Cloud & Security Engineer',
      icon: '🔒',
      description: 'Building resilient cloud infrastructure with strong security controls across identity, networking, secrets management, and compliance workflows.',
      skills: ['AWS', 'IAM', 'Secrets Management', 'Network Security', 'Compliance', 'Audit Logging']
    },
    {
      title: 'MLOps & Research-Oriented Engineer',
      icon: '☁️',
      description: 'Exploring AI/ML-driven security and cloud operations through practical engineering, with strong motivation to contribute to academic research and PhD work.',
      skills: ['MLOps', 'AI for Security', 'Distributed Systems', 'Secure AI Pipelines', 'Cloud Automation']
    }
  ];

  const researchInterests = [
    'AI for Cybersecurity',
    'Secure Cloud Infrastructure',
    'DevSecOps Automation',
    'MLOps for Secure AI Systems',
    'Autonomous and Intelligent Systems Security',
    'AI/ML applied to distributed cloud environments',
  ];

  const achievements = [
    { number: '5+', label: 'Years Experience' },
    { number: '18+', label: 'Production Projects' },
    { number: '4', label: 'University Degrees' },
    { number: '50+', label: 'AWS Resources Managed' }
  ];

  return (
    <section id="about" className="section-shell">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="section-header mb-8">
            <p className="kicker mb-2">Who I Am</p>
            <h2 className="section-title">About Me</h2>
            <p className="section-subtitle text-sm">
              DevSecOps engineer with strong software and cloud security foundations, actively pursuing research opportunities and PhD positions in cybersecurity and AI/ML systems
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Introduction */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="card p-6 mb-6"
            >
              <div className="flex items-start gap-4">
                <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-accent flex-shrink-0">
                  {/* Golden glow for About section pic too */}
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="absolute -inset-3 rounded-full bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-400 blur-lg"
                  />
                  <img
                    src="https://avatars.githubusercontent.com/raed-houimli"
                    alt={personalInfo.name}
                    className="w-full h-full object-cover relative z-10"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">{personalInfo.name}</h3>
                  <p className="text-sm text-text-secondary dark:text-text-dark-secondary leading-relaxed mb-3">
                    I am a <strong>DevSecOps Engineer</strong> with a strong background in software engineering, cloud technologies, and cybersecurity. Over the past 5+ years, I have worked across secure application delivery, infrastructure automation, and production operations in high-responsibility environments.
                  </p>
                  <p className="text-sm text-text-secondary dark:text-text-dark-secondary leading-relaxed">
                    My current direction is research-oriented: I am actively seeking opportunities and PhD pathways in <strong>Cybersecurity</strong>, <strong>Artificial Intelligence</strong>, and <strong>Machine Learning</strong>, especially where AI/ML intersects with secure cloud infrastructure and distributed systems.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Expertise Areas */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              {expertise.map((area, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="card p-4"
                >
                  <div className="text-3xl mb-3">{area.icon}</div>
                  <h4 className="font-bold text-sm mb-2">{area.title}</h4>
                  <p className="text-xs text-text-secondary dark:text-text-dark-secondary mb-3 leading-relaxed">
                    {area.description}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {area.skills.slice(0, 3).map((skill) => (
                      <span key={skill} className="tech-badge text-xs">
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="card p-5 mb-6"
            >
              <h3 className="text-base font-bold mb-3">Research Interests</h3>
              <p className="text-xs text-text-secondary dark:text-text-dark-secondary mb-3 leading-relaxed">
                My research interests focus on secure and intelligent computing systems, with emphasis on practical impact for cloud-native engineering and resilient AI infrastructure.
              </p>
              <div className="flex flex-wrap gap-1.5">
                {researchInterests.map((topic) => (
                  <span key={topic} className="tech-badge text-xs">{topic}</span>
                ))}
              </div>
            </motion.div>

            {/* Achievements */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="card p-4"
            >
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {achievements.map((stat, i) => (
                  <div key={i} className="text-center">
                    <div className="text-2xl font-black text-accent mb-1">
                      {stat.number}
                    </div>
                    <div className="text-xs font-bold text-text-muted dark:text-text-dark-muted">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
