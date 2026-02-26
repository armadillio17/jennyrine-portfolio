import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, X, Grid } from 'lucide-react';
import { getAllProjects, projectCategories } from '../data/projects';

const Projects = () => {
  // Get all projects from the data file
  const projects = getAllProjects();

  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [modalImage, setModalImage] = useState<number | null>(null);
  const total = projects.length;
  const galleryRef = useRef<HTMLDivElement>(null);

  // Get unique categories with counts
  const categories = projectCategories.map((cat) => ({
    name: cat.name,
    count: cat.images.length,
  }));

  // Get projects for selected category
  const filteredProjects = selectedCategory
    ? projects.filter((p) => p.category === selectedCategory)
    : [];

  const next = () => {
    setCurrent((current + 1) % total);
  };

  const prev = () => {
    setCurrent((current - 1 + total) % total);
  };

  // Get the position for each card relative to current
  const getCardStyle = (index: number) => {
    let diff = index - current;

    // Handle wrapping for circular navigation
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;

    // Only show 3 cards: -1, 0, 1
    if (diff < -1 || diff > 1) {
      return {
        opacity: 0,
        transform: `translateX(${diff > 0 ? 100 : -100}%) scale(0.7)`,
        zIndex: 0,
        pointerEvents: 'none' as const,
      };
    }

    // Center card
    if (diff === 0) {
      return {
        opacity: 1,
        transform: 'translateX(0%) scale(1)',
        zIndex: 20,
        pointerEvents: 'auto' as const,
      };
    }

    // Side cards
    return {
      opacity: 0.5,
      transform: `translateX(${diff * 75}%) scale(0.85)`,
      zIndex: 10,
      pointerEvents: 'auto' as const,
    };
  };

  // Auto-advance every 5 seconds (pauses on hover or when modal is open)
  useEffect(() => {
    if (isPaused || selectedCategory) return;

    const interval = setInterval(() => {
      setCurrent((c) => (c + 1) % total);
    }, 5000);
    return () => clearInterval(interval);
  }, [total, isPaused, selectedCategory]);

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (modalImage !== null) {
          setModalImage(null);
        } else if (selectedCategory) {
          setSelectedCategory(null);
        }
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [selectedCategory, modalImage]);

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-blue-900 to-blue-900/95 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Sample Graphic Designs
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            A showcase of my design work spanning social media, events, and marketing materials.
          </p>
        </div>

        {/* Category Filter Tags */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => setSelectedCategory(category.name)}
              className="group flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-500/50 rounded-full transition-all duration-300"
            >
              <Grid className="w-3.5 h-3.5 text-cyan-400" />
              <span className="text-sm text-gray-300 group-hover:text-white">{category.name}</span>
              <span className="text-xs text-cyan-400 bg-cyan-500/20 px-2 py-0.5 rounded-full">
                {category.count}
              </span>
            </button>
          ))}
        </div>

        {/* Gallery */}
        <div
          ref={galleryRef}
          className="relative h-[420px] md:h-[480px]"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Navigation Buttons */}
          <button
            onClick={prev}
            className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all duration-300 border border-white/10 hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          <button
            onClick={next}
            className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all duration-300 border border-white/10 hover:scale-110"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          {/* Cards */}
          <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
            {projects.map((project, index) => {
              const style = getCardStyle(index);
              const isCurrent = index === current;

              return (
                <div
                  key={index}
                  className="absolute w-[280px] md:w-[360px] h-[380px] md:h-[440px] transition-all duration-500 ease-out cursor-pointer"
                  style={style}
                  onClick={() => {
                    if (!isCurrent) {
                      setCurrent(index);
                    }
                  }}
                >
                  <div
                    className={`w-full h-full bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border transition-all duration-500 ${
                      isCurrent ? 'border-white/20 shadow-2xl shadow-cyan-500/10' : 'border-white/10'
                    }`}
                  >
                    {/* Category Badge - only on current, clickable */}
                    {isCurrent && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedCategory(project.category);
                        }}
                        className="absolute top-4 left-4 z-10 px-3 py-1.5 bg-cyan-500/20 hover:bg-cyan-500/30 backdrop-blur-sm rounded-full text-xs font-medium text-cyan-300 border border-cyan-500/30 transition-all duration-300 hover:scale-105"
                      >
                        {project.category}
                      </button>
                    )}

                    {/* Image */}
                    <div className="relative h-full">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />

                      {/* Gradient overlay */}
                      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-blue-950/95 via-blue-950/50 to-transparent" />

                      {/* Title */}
                      <div className="absolute bottom-0 inset-x-0 p-5">
                        <h3
                          className={`font-semibold text-white transition-all duration-300 ${
                            isCurrent ? 'text-lg md:text-xl' : 'text-sm md:text-base opacity-80'
                          }`}
                        >
                          {project.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="mt-6 flex justify-center">
          <div className="flex items-center gap-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  index === current ? 'w-8 bg-cyan-400' : 'w-1.5 bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Category Modal */}
      {selectedCategory && (
        <div
          className="fixed inset-0 bg-blue-950/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedCategory(null)}
        >
          <div
            className="bg-blue-900/90 backdrop-blur-md rounded-2xl w-full max-w-4xl max-h-[85vh] overflow-hidden border border-white/20"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <div>
                <h3 className="text-2xl font-bold text-white">{selectedCategory}</h3>
                <p className="text-gray-400 text-sm mt-1">
                  {filteredProjects.length} design{filteredProjects.length !== 1 ? 's' : ''}
                </p>
              </div>
              <button
                onClick={() => setSelectedCategory(null)}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-300"
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </div>

            {/* Modal Content - Grid of Projects */}
            <div className="p-6 overflow-y-auto max-h-[calc(85vh-100px)]">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {filteredProjects.map((project, index) => (
                  <button
                    key={index}
                    onClick={() => setModalImage(projects.findIndex((p) => p.image === project.image))}
                    className="group relative aspect-[4/5] rounded-xl overflow-hidden border border-white/10 hover:border-cyan-500/50 transition-all duration-300 hover:scale-[1.02]"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-950/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 inset-x-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-white text-sm font-medium">{project.title}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Full Image Modal */}
      {modalImage !== null && (
        <div
          className="fixed inset-0 bg-blue-950/95 backdrop-blur-md z-[60] flex items-center justify-center p-4"
          onClick={() => setModalImage(null)}
        >
          <button
            onClick={() => setModalImage(null)}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-300 z-10"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          {/* Navigation in full image modal */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              const currentFiltered = filteredProjects.findIndex(
                (p) => p.image === projects[modalImage].image
              );
              const prevIndex = (currentFiltered - 1 + filteredProjects.length) % filteredProjects.length;
              setModalImage(projects.findIndex((p) => p.image === filteredProjects[prevIndex].image));
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-300"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              const currentFiltered = filteredProjects.findIndex(
                (p) => p.image === projects[modalImage].image
              );
              const nextIndex = (currentFiltered + 1) % filteredProjects.length;
              setModalImage(projects.findIndex((p) => p.image === filteredProjects[nextIndex].image));
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-300"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          <div className="max-w-5xl max-h-[85vh] flex flex-col items-center">
            <img
              src={projects[modalImage].image}
              alt={projects[modalImage].title}
              className="max-w-full max-h-[75vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
              loading="lazy"
            />
            <div className="mt-4 text-center">
              <h4 className="text-xl font-semibold text-white">{projects[modalImage].title}</h4>
              <p className="text-cyan-400 text-sm mt-1">{projects[modalImage].category}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
