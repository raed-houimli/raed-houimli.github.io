import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/content';

const navigation = [
  { name: 'Abstract', id: 'hero' },
  { name: 'Profile', id: 'about' },
  { name: 'Research', id: 'projects' },
  { name: 'Experience', id: 'experience' },
  { name: 'Education', id: 'education' },
  { name: 'Publications', id: 'articles' },
  { name: 'Contact', id: 'contact' },
];

export const Header: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Desktop Profile Sidebar */}
      <motion.aside
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="hidden lg:flex fixed left-0 top-0 h-screen w-[350px] p-6 z-40"
        role="navigation"
        aria-label="Profile and navigation"
      >
        <div className="w-full h-full rounded-xl border border-border bg-surface/95 px-6 py-7 shadow-[0_10px_25px_rgba(0,0,0,0.05)]">
          <button
            onClick={() => scrollToSection('hero')}
            className="block w-full text-left"
            aria-label="Go to abstract"
          >
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.1em] text-muted">Academic Profile</p>
            <h2 className="mt-1 text-[1.28rem] leading-tight">{personalInfo.name}</h2>
          </button>

          <p className="mt-2 text-sm text-text-secondary leading-relaxed">
            DevSecOps, Cloud Security, and AI systems engineering with a research-oriented focus.
          </p>

          <div className="mt-4 space-y-1.5 text-sm text-text-secondary">
            <p>
              <strong className="text-text-primary">Email:</strong>{' '}
              <a href={`mailto:${personalInfo.email}`} className="hover:underline">{personalInfo.email}</a>
            </p>
            <p><strong className="text-text-primary">Location:</strong> {personalInfo.location}</p>
          </div>

          <div className="mt-4 rounded-md border border-border/80 bg-bg-secondary p-3">
            <p className="text-xs font-semibold uppercase tracking-[0.08em] text-text-muted mb-2">Social Links</p>
            <div className="space-y-2 text-sm">
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between rounded border border-border/70 bg-surface px-2.5 py-1.5 hover:border-accent/40">
                <span className="font-medium text-text-primary">LinkedIn</span>
                <span className="text-xs text-text-muted">profile</span>
              </a>
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between rounded border border-border/70 bg-surface px-2.5 py-1.5 hover:border-accent/40">
                <span className="font-medium text-text-primary">GitHub</span>
                <span className="text-xs text-text-muted">repositories</span>
              </a>
              <a href={personalInfo.medium} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between rounded border border-border/70 bg-surface px-2.5 py-1.5 hover:border-accent/40">
                <span className="font-medium text-text-primary">Medium</span>
                <span className="text-xs text-text-muted">articles</span>
              </a>
            </div>
          </div>

          <div className="mt-6 h-px bg-border" />

          <nav className="mt-5 flex flex-col gap-2" aria-label="Section links">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.id)}
                className="w-full rounded-md border border-border/70 bg-bg-secondary px-3 py-2 text-left text-sm font-semibold text-text-secondary transition-colors hover:border-accent/30 hover:bg-surface hover:text-accent"
                aria-label={`Go to ${item.name}`}
                title={`Go to ${item.name}`}
              >
                {item.name}
              </button>
            ))}

          </nav>
        </div>
      </motion.aside>

      {/* Mobile Top Navigation */}
      <motion.nav
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="lg:hidden sticky top-0 z-50 border-b border-border bg-surface/95 backdrop-blur"
        aria-label="Mobile navigation"
        role="navigation"
      >
        <div className="max-w-full overflow-x-auto">
          <div className="flex gap-1 p-2 min-w-min">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.id)}
                className="whitespace-nowrap rounded-md border border-border bg-bg-secondary px-2.5 py-1.5 text-xs font-semibold text-text-secondary"
                aria-label={`Go to ${item.name}`}
                title={`Go to ${item.name}`}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      </motion.nav>
    </>
  );
};
