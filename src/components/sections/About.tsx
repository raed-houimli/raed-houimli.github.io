import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../../data/content';

export const About: React.FC = () => {
  const expertise = [
    {
      title: 'Senior Software Engineer',
      icon: '💻',
      description: 'Full-stack development with FastAPI, Node.js, and React.js. Building scalable, production-ready applications.',
      skills: ['FastAPI', 'Node.js', 'React.js', 'TypeScript', 'PostgreSQL', 'Redis']
    },
    {
      title: 'DevSecOps Specialist',
      icon: '🔒',
      description: 'Security-first DevOps practices. Implementing SAST, DAST, container security, and compliance automation.',
      skills: ['Security Scanning', 'IAM', 'Secrets Management', 'Compliance', 'Audit Logging']
    },
    {
      title: 'Cloud Infrastructure Architect',
      icon: '☁️',
      description: 'Designing and deploying highly available, multi-region AWS infrastructure with Infrastructure as Code.',
      skills: ['AWS', 'Terraform', 'Kubernetes', 'Docker', 'CI/CD']
    }
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
              Senior Software Engineer and DevSecOps Specialist with 5+ years building enterprise systems
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
                    I'm a <strong>Senior Software Engineer</strong> and <strong>DevSecOps specialist</strong> with over 5 years of experience building production-grade web applications and cloud infrastructure. I specialize in full-stack development (FastAPI, Node.js, React.js) and infrastructure automation (AWS, Kubernetes, Terraform).
                  </p>
                  <p className="text-sm text-text-secondary dark:text-text-dark-secondary leading-relaxed">
                    My career began as a software engineer building backend APIs and full-stack applications, then evolved into DevOps engineering where I architected cloud infrastructure, implemented CI/CD pipelines, and established security best practices for mission-critical government systems.
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
