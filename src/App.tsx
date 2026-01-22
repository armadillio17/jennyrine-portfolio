import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BubbleBackground from './components/BubbleBackground';
import JellyfishLoader from './components/JellyfishLoader';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Preload critical images
    const imagesToPreload = [
      '/grad.webp',
      '/designs/event-design/1.webp',
      '/designs/social-media/2.webp',
    ];

    let loadedCount = 0;
    const totalImages = imagesToPreload.length;

    const checkAllLoaded = () => {
      loadedCount++;
      if (loadedCount >= totalImages) {
        // Add a small delay for smoother transition
        setTimeout(() => setIsLoading(false), 500);
      }
    };

    imagesToPreload.forEach((src) => {
      const img = new Image();
      img.onload = checkAllLoaded;
      img.onerror = checkAllLoaded; // Still proceed if image fails
      img.src = src;
    });

    // Fallback: hide loader after 3 seconds max
    const timeout = setTimeout(() => setIsLoading(false), 3000);

    return () => clearTimeout(timeout);
  }, []);

  if (isLoading) {
    return <JellyfishLoader />;
  }

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