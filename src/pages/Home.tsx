import React from 'react';
import { Hero } from '../components/sections/Hero';
import { Experience } from '../components/sections/Experience';
import { Skills } from '../components/sections/Skills';
import { Education } from '../components/sections/EducationSection';
import { ProjectsSection } from '../components/sections/ProjectsSection';
import { Contact } from '../components/sections/Contact';

export const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Experience />
      <ProjectsSection />
      <Skills />
      <Education />
      <Contact />
    </>
  );
};
