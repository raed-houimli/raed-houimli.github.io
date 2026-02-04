import { ThemeProvider } from './contexts/ThemeContext';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { Experience } from './pages/Experience';
import { Projects } from './pages/Projects';
import { TechStack } from './pages/TechStack';
import { Education } from './pages/Education';
import { Articles } from './pages/Articles';
import { Contact } from './pages/Contact';
import { NotFound } from './pages/NotFound';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Layout>
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/tech-stack" element={<TechStack />} />
              <Route path="/education" element={<Education />} />
              <Route path="/articles" element={<Articles />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </AnimatePresence>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
