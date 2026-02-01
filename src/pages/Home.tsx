import { Hero } from '../components/sections/Hero';
import { Services } from '../components/sections/Services';
import { Experience } from '../components/sections/Experience';
import { ProjectsSection } from '../components/sections/ProjectsSection';
import { TechStack } from '../components/sections/TechStack';
import { Education } from '../components/sections/EducationSection';
import { Contact } from '../components/sections/Contact';
import { Articles } from '../components/sections/Articles';

export const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <Experience />
      <ProjectsSection />
      <TechStack />
      <Education />
      <Articles />
      <Contact />
    </>
  );
};
