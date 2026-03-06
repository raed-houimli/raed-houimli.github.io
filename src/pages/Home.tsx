import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Hero } from '../components/sections/Hero';
import { Services } from '../components/sections/Services';
import { Experience } from '../components/sections/Experience';
import { ProjectsSection } from '../components/sections/ProjectsSection';
import { TechStack } from '../components/sections/TechStack';
import { Education } from '../components/sections/EducationSection';
import { Contact } from '../components/sections/Contact';
import { Articles } from '../components/sections/Articles';

export const Home = () => {
  useEffect(() => {
    // Update page title
    document.title = 'Raed Houimli - DevSecOps & MLOps Engineer | Cybersecurity and AI Research-Oriented Profile';
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'DevSecOps and cloud security engineer with 5+ years in secure platform delivery, automation, and cloud infrastructure. Research-oriented profile pursuing PhD opportunities in cybersecurity and AI/ML for cloud systems.');
    }
    
    // Update OG tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', 'Raed Houimli - DevSecOps & MLOps Engineer | Cybersecurity and AI Research Focus');
    }
    
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', '5+ years in DevSecOps and secure cloud engineering, with active research interest in cybersecurity, AI, and MLOps for distributed cloud systems.');
    }
    
    // Structured data for pages
    const schemaScript = document.createElement('script');
    schemaScript.type = 'application/ld+json';
    schemaScript.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Raed Houimli - DevSecOps Portfolio",
      "url": "https://houimliraed.dev",
      "creator": {
        "@type": "Person",
        "name": "Raed Houimli",
        "image": "https://avatars.githubusercontent.com/raed-houimli",
        "url": "https://houimliraed.dev"
      },
      "mainEntity": {
        "@type": "Person",
        "name": "Raed Houimli",
        "jobTitle": "DevSecOps and Cloud Security Engineer",
        "description": "Research-oriented engineer focused on cybersecurity, AI/ML, and secure cloud systems"
      }
    });
    document.head.appendChild(schemaScript);
    
    return () => {
      document.head.removeChild(schemaScript);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="page-shell"
    >
      <Hero />
      <Services />
      <Experience />
      <ProjectsSection />
      <TechStack />
      <Education />
      <Articles />
      <Contact />
    </motion.div>
  );
};
