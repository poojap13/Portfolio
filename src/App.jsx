import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import AchievementsCertifications from './pages/AchievementsCertifications';
import Contact from './pages/Contact';

export default function App() {
  return (
    <Router>
      <Navbar />
      <main className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white scroll-smooth transition-colors duration-500 ease-in-out">
        <Home />
        <About />
        <Skills />
        <Projects />
        <Experience />
        < AchievementsCertifications/>
        <Contact />
      </main>
    </Router>
  );
}
