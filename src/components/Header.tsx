import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // element.scrollIntoView({ behavior: 'smooth' });

      const headerOffset = 80; // Adjust based on your header height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
    }
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300 ${
        isScrolled
          ? 'bg-blue-900/95 backdrop-blur-md shadow-lg shadow-blue-900/20 border-cyan-500/20'
          : 'bg-blue-900/70 backdrop-blur-md border-cyan-400/10'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo - Click to go home */}
          <button
            onClick={() => scrollToSection('home')}
            className="flex items-center gap-2.5 hover:opacity-80 transition-opacity duration-200"
          >
            {/* Jellyfish Line Art Icon */}
            <svg viewBox="0 0 32 40" className="w-7 h-9">
              <defs>
                <linearGradient id="jellyLineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#67e8f9" />
                  <stop offset="100%" stopColor="#c084fc" />
                </linearGradient>
              </defs>
              {/* Bell/dome outline */}
              <path
                d="M4,14 Q4,3 16,3 Q28,3 28,14 Q28,18 16,20 Q4,18 4,14"
                fill="none"
                stroke="url(#jellyLineGrad)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              {/* Tentacles - flowing lines */}
              <path d="M8,18 Q6,26 9,34" stroke="url(#jellyLineGrad)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
              <path d="M13,19 Q11,28 14,38" stroke="url(#jellyLineGrad)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
              <path d="M19,19 Q21,28 18,38" stroke="url(#jellyLineGrad)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
              <path d="M24,18 Q26,26 23,34" stroke="url(#jellyLineGrad)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
            </svg>
            <span className="text-xl font-extrabold bg-gradient-to-r from-cyan-300 to-purple-400 bg-clip-text text-transparent">
              Jennyrine Palis Jr
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-gray-200 hover:text-cyan-300 font-semibold transition-colors duration-200 relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-200 hover:text-cyan-300 transition-colors duration-200"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-blue-900/95 backdrop-blur-md border-t border-cyan-500/20">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left px-3 py-2 text-gray-200 hover:text-cyan-300 hover:bg-cyan-500/10 font-semibold transition-colors duration-200 rounded-lg"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
