import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollEffects from './components/ScrollEffects';

function App() {
  return (
    <div className="bg-brand-white min-h-screen selection:bg-brand-purple/20 selection:text-brand-purple">
      <ScrollEffects />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
