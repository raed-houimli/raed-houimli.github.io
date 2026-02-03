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
    document.title = 'Raed Houimli - DevSecOps Engineer & Cloud Infrastructure Specialist | houimliraed.dev';
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'DevSecOps Engineer with 5.5+ years building secure, scalable cloud infrastructure. AWS, Kubernetes, Terraform, CI/CD automation. Available for consulting.');
    }
    
    // Update OG tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', 'Raed Houimli - DevSecOps Engineer & Cloud Infrastructure Specialist');
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
        "jobTitle": "DevSecOps Engineer",
        "description": "Building secure, scalable cloud infrastructure"
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
