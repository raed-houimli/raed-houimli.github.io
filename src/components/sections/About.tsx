import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../../data/content';

export const About: React.FC = () => {
  const currentActivities = [
    'Designing secure CI/CD and GitOps delivery workflows.',
    'Building cloud-native infrastructure with Kubernetes and Terraform.',
    'Contributing to applied engineering projects in cybersecurity and AI systems.',
  ];

  const researchInterests = [
    'AI for Cybersecurity',
    'Secure Cloud Infrastructure',
    'DevSecOps Automation and Verification',
    'MLOps for Secure AI Systems',
    'Distributed Systems and Edge/Cloud Security',
    'AI/ML applied to distributed cloud environments',
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
          <div className="section-header mb-7">
            <p className="kicker mb-2">Profile</p>
            <h2 className="section-title">Professional Summary</h2>
            <p className="section-subtitle">
              DevSecOps and cloud security engineer with 5+ years of experience in software delivery, infrastructure automation, and platform reliability.
            </p>
          </div>

          <div className="max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="card p-5 mb-5"
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-start">
                <div className="w-[86px] h-[86px] rounded-full overflow-hidden border border-border flex-shrink-0">
                  <img src="https://avatars.githubusercontent.com/raed-houimli" alt={personalInfo.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="text-lg mb-2">{personalInfo.name}</h3>
                  <p className="text-[0.98rem] text-text-secondary leading-relaxed mb-3">
                    {personalInfo.bio}
                  </p>
                  <p className="text-[0.98rem] text-text-secondary leading-relaxed">
                    Current objective: contribute to advanced research and industrial collaboration in cybersecurity, trustworthy AI systems, and resilient cloud operations.
                  </p>
                </div>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="card p-5">
                <h3 className="mb-3 text-base">Current Activities</h3>
                <ul className="space-y-2 text-sm text-text-secondary">
                  {currentActivities.map((item) => (
                    <li key={item} className="leading-relaxed">- {item}</li>
                  ))}
                </ul>
              </motion.div>

              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="card p-5">
                <h3 className="mb-3 text-base">Research Interests</h3>
                <ul className="space-y-2 text-sm text-text-secondary">
                  {researchInterests.map((item) => (
                    <li key={item} className="leading-relaxed">- {item}</li>
                  ))}
                </ul>
              </motion.div>
            </div>


          </div>
        </motion.div>
      </div>
    </section>
  );
};
