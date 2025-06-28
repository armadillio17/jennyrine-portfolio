import React from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src="/oceans.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Optional Dark Overlay */}
      <div className="absolute inset-0 bg-black/50 z-0 backdrop-blur-sm" />

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pb-24">
        <div className="space-y-8">
          <div className="space-y-6">
            <div className="space-y-4">
              {/* Profile Picture */}
              <div className="flex justify-center">
                <img
                  src="/grad.jpg"
                  alt="Jennyrine Palis Jr"
                  className="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover shadow-lg border-4 border-white"
                />
              </div>

              <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
                  Jennyrine Palis Jr
                </span>
              </h1>

              <p className="text-xl md:text-4xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
                IT Support Specialist / Customer Service Specialist
              </p>
            </div>

            <p className="text-lg text-gray-200 max-w-6xl mx-auto md:text-1xl">
              Multidisciplinary IT Specialist with strong foundations in technical support, 
              customer service, computer servicing, and supportive skills in web/graphic design and System Maintenance.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/* Updated: View My Work scrolls to #projects */}
            <button
              onClick={scrollToProjects}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              View My Work
            </button>

            <a
              href="https://drive.google.com/file/d/1zvDiDeUvWPjiHSMlt2qubFie3yvM_QrV/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white hover:border-indigo-400 text-white hover:text-indigo-300 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Download Resume
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            {[
              { icon: Github, href: '#', label: 'GitHub' },
              { icon: Linkedin, href: '#', label: 'LinkedIn' },
              { icon: Mail, href: '#', label: 'Email' }
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                className="text-gray-300 hover:text-indigo-300 transition-colors duration-300 transform hover:scale-110"
                aria-label={label}
              >
                <Icon size={24} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Arrow */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <button
          onClick={scrollToAbout}
          className="text-white hover:text-indigo-300 transition-colors duration-300"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;