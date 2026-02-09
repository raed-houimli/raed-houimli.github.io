import { ThemeProvider } from './contexts/ThemeContext';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Layout } from './components/Layout';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Services } from './components/sections/Services';
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
    document.title = 'Raed Houimli | Senior Software Engineer & DevSecOps Specialist | AWS Kubernetes Terraform FastAPI React Node.js CI/CD Infrastructure';
    
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

    setMetaTag('description', 'Raed Houimli - Senior Full-Stack Software Engineer & DevSecOps Specialist. 5+ years expertise in AWS cloud infrastructure, Kubernetes, Terraform, CI/CD automation, FastAPI, Node.js, React.js. Enterprise-grade solutions for global teams.');
    
    // 3. Keywords Meta Tag
    setMetaTag('keywords', 'Raed Houimli, Senior Software Engineer, DevSecOps Engineer, Full Stack Developer, AWS Cloud Architect, Kubernetes Expert, Terraform, CI/CD Pipeline, FastAPI, Node.js, React.js, Infrastructure as Code, Cloud Architecture, DevOps Consulting, Infrastructure Engineer, Backend Developer, Cloud Engineer, Python, TypeScript, Docker, GitOps, Linux, Monitoring, Prometheus, Grafana');
    
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
    setMetaTag('og:title', 'Raed Houimli - Senior Software Engineer & DevSecOps Specialist', true);
    setMetaTag('og:description', '5+ years building enterprise cloud infrastructure & full-stack applications. AWS, Kubernetes, Terraform, CI/CD, FastAPI, React.js expertise.', true);
    setMetaTag('og:type', 'profile', true);
    setMetaTag('og:url', 'https://houimliraed.dev', true);
    setMetaTag('og:image', 'https://avatars.githubusercontent.com/raed-houimli?s=1200', true);
    setMetaTag('og:image:width', '1200', true);
    setMetaTag('og:image:height', '1200', true);
    
    // 6. Twitter Card Tags
    setMetaTag('twitter:card', 'summary_large_image');
    setMetaTag('twitter:title', 'Raed Houimli - Senior Software Engineer & DevSecOps Specialist');
    setMetaTag('twitter:description', 'Full-stack engineer building scalable cloud infrastructure. AWS, Kubernetes, Terraform, FastAPI, React.js');
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
        "jobTitle": "Senior Software Engineer & DevSecOps Specialist",
        "description": "Full-stack software engineer and DevSecOps specialist with 5+ years experience building enterprise cloud infrastructure and scalable web applications",
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
        "name": "Raed Houimli - Software Engineer & DevOps Specialist",
        "description": "Portfolio showcasing 5+ years of full-stack development and DevSecOps engineering expertise",
        "creator": {
          "@type": "Person",
          "@id": "https://houimliraed.dev/#person"
        }
      },
      // Service Schema
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Full-Stack Web Development & DevOps Consulting",
        "provider": {
          "@type": "Person",
          "@id": "https://houimliraed.dev/#person"
        },
        "areaServed": "Worldwide",
        "serviceType": [
          "Full-Stack Development",
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
