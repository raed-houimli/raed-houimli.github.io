import { Hero } from '../components/sections/Hero';
import { Experience } from '../components/sections/Experience';
import { ProjectsSection } from '../components/sections/ProjectsSection';
import { Skills } from '../components/sections/Skills';
import { Education } from '../components/sections/EducationSection';
import { Contact } from '../components/sections/Contact';

export const Home = () => {
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
