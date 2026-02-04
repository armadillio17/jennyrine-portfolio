import { Briefcase, Headphones, Code, GraduationCap } from 'lucide-react';

const About = () => {
  const experiences = [
    {
      icon: Briefcase,
      title: 'Digital Marketing VA',
      company: 'Vention LTD (UK)',
      period: 'Aug 2025 - Jan 2026',
      highlights: ['Marketing Funnels', 'Webinar Creation', 'Video Production'],
    },
    {
      icon: Code,
      title: 'IT Technical Assistant',
      company: 'Sploop',
      period: 'Apr 2024 - Jun 2025',
      highlights: ['Team Supervision', 'System Maintenance', 'IT Operations'],
    },
    {
      icon: Headphones,
      title: 'Customer Support',
      company: 'Firmoo Opticals',
      period: 'Aug 2023 - Apr 2024',
      highlights: ['Customer Service', 'Sales Support', 'Product Guidance'],
    },
    {
      icon: GraduationCap,
      title: 'Internship',
      company: 'DOST',
      period: 'May 2023 - Aug 2023',
      highlights: ['System Development', 'Hardware Troubleshooting'],
    }
  ];

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      // contactSection.scrollIntoView({ behavior: 'smooth' });

      const headerOffset = 80; // Adjust based on your header height
      const contactPosition = contactSection.getBoundingClientRect().top;
      const offsetPosition = contactPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

    }
  };

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-blue-900 to-blue-900/95 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            About Me
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Results-driven IT specialist with experience in digital marketing, technical support, and system development.
            Passionate about providing efficient solutions and outstanding user experiences.
          </p>
        </div>

        {/* Stats - Simple inline */}
        <div className="flex justify-center gap-8 mb-12">
          <div className="text-center">
            <div className="text-3xl font-bold text-cyan-400">2+</div>
            <div className="text-sm text-gray-400">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-400">4</div>
            <div className="text-sm text-gray-400">NC Certifications</div>
          </div>
        </div>

        {/* Experience Timeline - Clean design */}
        <div className="max-w-2xl mx-auto">
          <div className="space-y-4">
            {experiences.map((exp, index) => {
              const Icon = exp.icon;
              return (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-cyan-400" />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                        <div>
                          <h4 className="text-white font-semibold">{exp.title}</h4>
                          <p className="text-gray-400 text-sm">{exp.company}</p>
                        </div>
                        <span className="text-xs text-cyan-400 bg-cyan-400/10 px-3 py-1 rounded-full">
                          {exp.period}
                        </span>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mt-3">
                        {exp.highlights.map((highlight, hIdx) => (
                          <span
                            key={hIdx}
                            className="text-xs px-2 py-1 rounded-md bg-white/5 text-gray-300 border border-white/10"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-10">
          <button
            onClick={scrollToContact}
            className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
          >
            Let's Work Together
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
