import { ThemeProvider } from './contexts/ThemeContext';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Layout } from './components/Layout';
import { Hero } from './components/sections/Hero';
import { Services } from './components/sections/Services';
import { Experience } from './components/sections/Experience';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { TechStack } from './components/sections/TechStack';
import { Education } from './components/sections/EducationSection';
import { Articles } from './components/sections/Articles';
import { Contact } from './components/sections/Contact';

function App() {
  useEffect(() => {
    // Update page metadata
    document.title = 'Raed Houimli - DevSecOps Engineer & Cloud Infrastructure Specialist | 5+ Years Experience';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'DevSecOps Engineer with 5+ years building secure, scalable cloud infrastructure. AWS, Kubernetes, Terraform, CI/CD automation. Available for consulting worldwide.');
    }
  }, []);

  return (
    <ThemeProvider>
      <Layout>
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
      </Layout>
    </ThemeProvider>
  );
}

export default App;
