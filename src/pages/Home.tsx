import { Hero } from '../components/sections/Hero';
import { Services } from '../components/sections/Services';
import { Journey } from '../components/sections/Journey';
import { ProjectsSection } from '../components/sections/ProjectsSection';
import { TechStack } from '../components/sections/TechStack';
import { Education } from '../components/sections/EducationSection';
import { Contact } from '../components/sections/Contact';

export const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <Journey />
      <ProjectsSection />
      <TechStack />
      <Education />
      <Contact />
    </>
  );
};
