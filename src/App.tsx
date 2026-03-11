import { ThemeProvider } from './contexts/ThemeContext';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Layout } from './components/Layout';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Experience } from './components/sections/Experience';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { TechStack } from './components/sections/TechStack';
import { Education } from './components/sections/EducationSection';
import { Articles } from './components/sections/Articles';
import { Contact } from './components/sections/Contact';

function App() {
  useEffect(() => {
    // ============================================
    // PRIMARY SEO OPTIMIZATION
    // ============================================
    
    // 1. Page Title - Keyword-rich, descriptive
    document.title = 'Raed Houimli | DevSecOps & MLOps Engineer | Cybersecurity and AI Research-Oriented Profile';
    
    // 2. Meta Description - 155-160 characters
    const setMetaTag = (name: string, content: string, property?: boolean) => {
      let meta = document.querySelector(property ? `meta[property="${name}"]` : `meta[name="${name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        if (property) meta.setAttribute('property', name);
        else meta.setAttribute('name', name);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    setMetaTag('description', 'Raed Houimli - DevSecOps and cloud security engineer with 5+ years in secure software delivery, cloud automation, and infrastructure engineering. Research-oriented profile pursuing PhD opportunities in cybersecurity, AI, and MLOps for cloud systems.');
    
    // 3. Keywords Meta Tag
    setMetaTag('keywords', 'Raed Houimli, DevSecOps Engineer, MLOps Engineer, Cloud Security Engineer, Cybersecurity Research, AI Security, Machine Learning, Secure Cloud Infrastructure, Distributed Systems, Kubernetes, Terraform, AWS, CI/CD, GitOps, Python');
    
    // 4. Additional SEO Meta Tags
    setMetaTag('author', 'Raed Houimli');
    setMetaTag('robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
    setMetaTag('googlebot', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
    setMetaTag('bingbot', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
    setMetaTag('viewport', 'width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes');
    setMetaTag('theme-color', '#2563eb');
    setMetaTag('mobile-web-app-capable', 'yes');
    setMetaTag('apple-mobile-web-app-capable', 'yes');
    setMetaTag('apple-mobile-web-app-status-bar-style', 'black-translucent');
    
    // 5. Open Graph Tags (Social Media)
    setMetaTag('og:title', 'Raed Houimli - DevSecOps & MLOps Engineer | Cybersecurity and AI Research Focus', true);
    setMetaTag('og:description', 'DevSecOps and cloud security engineer with 5+ years of secure platform delivery and growing research focus in cybersecurity, AI, and MLOps for cloud systems.', true);
    setMetaTag('og:type', 'profile', true);
    setMetaTag('og:url', 'https://houimliraed.dev', true);
    setMetaTag('og:image', 'https://avatars.githubusercontent.com/raed-houimli?s=1200', true);
    setMetaTag('og:image:width', '1200', true);
    setMetaTag('og:image:height', '1200', true);
    
    // 6. Twitter Card Tags
    setMetaTag('twitter:card', 'summary_large_image');
    setMetaTag('twitter:title', 'Raed Houimli - DevSecOps & MLOps Engineer');
    setMetaTag('twitter:description', 'Research-oriented DevSecOps engineer focused on cybersecurity, AI/ML, and secure cloud infrastructure');
    setMetaTag('twitter:image', 'https://avatars.githubusercontent.com/raed-houimli?s=1200');
    setMetaTag('twitter:creator', '@raed-houimli');
    
    // 7. Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://houimliraed.dev');
    
    // 8. Language Tag
    document.documentElement.setAttribute('lang', 'en');
    
    // ============================================
    // STRUCTURED DATA (JSON-LD)
    // ============================================
    
    const structuredData = [
      // Person Schema
      {
        "@context": "https://schema.org",
        "@type": "Person",
        "@id": "https://houimliraed.dev/#person",
        "name": "Raed Houimli",
        "url": "https://houimliraed.dev",
        "image": "https://avatars.githubusercontent.com/raed-houimli",
        "jobTitle": "DevSecOps and Cloud Security Engineer",
        "description": "Research-oriented engineer with 5+ years in secure software delivery, cloud automation, and DevSecOps platform engineering",
        "sameAs": [
          "https://github.com/raed-houimli",
          "https://linkedin.com/in/raed-houimli",
          "https://medium.com/@raed-houimli"
        ],
        "workLocation": {
          "@type": "Place",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "Tunisia",
            "addressRegion": "Remote"
          }
        },
        "knowsAbout": [
          "Software Engineering",
          "MLOps",
          "Cybersecurity Research",
          "Artificial Intelligence",
          "Machine Learning",
          "AI for Cybersecurity",
          "Distributed Cloud Systems",
          "Cloud Infrastructure",
          "DevSecOps",
          "AWS",
          "Kubernetes",
          "Terraform",
          "FastAPI",
          "Node.js",
          "React.js",
          "CI/CD",
          "Infrastructure as Code",
          "Container Orchestration",
          "Microservices",
          "Database Optimization",
          "Security Automation"
        ]
      },
      // Website Schema
      {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "@id": "https://houimliraed.dev/#website",
        "url": "https://houimliraed.dev",
        "name": "Raed Houimli - DevSecOps, MLOps, and Cybersecurity Research-Oriented Portfolio",
        "description": "Portfolio presenting DevSecOps engineering experience with research interests in cybersecurity, AI/ML, and secure cloud systems",
        "creator": {
          "@type": "Person",
          "@id": "https://houimliraed.dev/#person"
        }
      },
      // Service Schema
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "DevSecOps, Cloud Security, and Platform Engineering",
        "provider": {
          "@type": "Person",
          "@id": "https://houimliraed.dev/#person"
        },
        "areaServed": "Worldwide",
        "serviceType": [
          "Full-Stack Development",
          "MLOps Enablement",
          "Cloud Security Engineering",
          "Cloud Infrastructure Design",
          "DevOps Automation",
          "CI/CD Pipeline Development",
          "Kubernetes Orchestration",
          "Infrastructure as Code"
        ]
      }
    ];
    
    // Add all structured data scripts
    structuredData.forEach((schema, index) => {
      let script = document.querySelector(`script[data-schema-id="${index}"]`);
      if (!script) {
        script = document.createElement('script');
        script.type = 'application/ld+json';
        script.setAttribute('data-schema-id', String(index));
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(schema);
    });
    
    // Link Preload (Performance)
    const preconnect = (href: string) => {
      let link = document.querySelector(`link[rel="preconnect"][href="${href}"]`);
      if (!link) {
        link = document.createElement('link');
        link.rel = 'preconnect';
        link.href = href;
        document.head.appendChild(link);
      }
    };
    
    preconnect('https://fonts.googleapis.com');
    preconnect('https://avatars.githubusercontent.com');
    preconnect('https://github.com');
    
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
          <About />
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
