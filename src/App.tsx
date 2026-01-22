import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BubbleBackground from './components/BubbleBackground';

function App() {
  return (
    <div className="min-h-screen bg-blue-900 relative overflow-hidden">
      <Header />
      <main className="relative">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />

      {/* Global bubble system that flows through all sections - placed last to be on top */}
      <BubbleBackground />
    </div>
  );
}

export default App;