import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      image: '1.jpg',
      title: 'All Souls Day'
    },
    {
      image: '2.jpg',
      title: 'Halloween Costume Winner'
    },
    {
      image: '3.jpg',
      title: 'Halloween Facebook Posting'
    },
    {
      image: '4.jpg',
      title: 'Facebook Posting'
    },
    {
      image: '5.jpg',
      title: 'Rides Passes'
    },
    {
      image: '6.jpg',
      title: 'Tournament Winner'
    },
    {
      image: '7.jpg',
      title: 'Promotional Post'
    },
    {
      image: '8.jpg',
      title: 'Birthday Promos'
    }
  ];

  const [current, setCurrent] = useState(0);
  const total = projects.length;
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setCurrent((current + 1) % total);
      setAnimating(false);
    }, 300);
  };

  const prev = () => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setCurrent((current - 1 + total) % total);
      setAnimating(false);
    }, 300);
  };

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Sample Graphic Designs</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A quick look at a few of my design outputs. Swipe or click through the gallery below.
          </p>
        </div>

        <div className="relative flex items-center">
          <button
            onClick={prev}
            className="absolute left-0 z-10 bg-transparent hover:opacity-80"
            style={{ top: '50%', transform: 'translateY(-50%)' }}
          >
            <ChevronLeft className="w-12 h-12 text-gray-700" />
          </button>

          <div
            className={`flex-1 bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-500 ease-in-out transform ${animating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}
          >
            <img
              src={projects[current].image}
              alt={projects[current].title}
              className="w-full h-96 object-contain"
            />
            <div className="text-center py-4 text-lg font-medium text-gray-800">
              {projects[current].title}
            </div>
          </div>

          <button
            onClick={next}
            className="absolute right-0 z-10 bg-transparent hover:opacity-80"
            style={{ top: '50%', transform: 'translateY(-50%)' }}
          >
            <ChevronRight className="w-12 h-12 text-gray-700" />
          </button>
        </div>

        {/* Slide Indicators */}
        <div className="mt-6 text-center text-sm text-gray-500">
          {current + 1} of {total}
        </div>
      </div>
    </section>
  );
};

export default Projects;
