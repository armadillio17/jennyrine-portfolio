// Hero Design Variations
// Preview each design by changing the 'design' prop in Hero.tsx

import { Linkedin, Mail, ArrowRight, Download, Sparkles } from 'lucide-react';

interface HeroDesignProps {
  design: 1 | 2 | 3 | 4 | 5;
  scrollToProjects: () => void;
  scrollToAbout: () => void;
}

const HeroDesigns = ({ design, scrollToProjects }: HeroDesignProps) => {
  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/in/jennyrine-palis-jr-43b4552b2/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:jaypalis1999@gmail.com', label: 'Email' }
  ];

  // Design 1: Classic Split - Profile left, content right
  if (design === 1) {
    return (
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Profile */}
          <div className="flex justify-center lg:justify-center">
            <div className="relative">
              {/* Card */}
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4">
                <div className="absolute top-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />
                <div className="w-52 h-64 md:w-60 md:h-72 rounded-xl overflow-hidden">
                  <img src="/grad.jpg" alt="Jennyrine Palis Jr" className="w-full h-full object-cover" />
                  <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-blue-950/80 to-transparent" />
                </div>
                <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-cyan-400/40 rounded-tl" />
                <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-cyan-400/40 rounded-tr" />
                <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-purple-400/40 rounded-bl" />
                <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-purple-400/40 rounded-br" />
              </div>
              <div className="absolute -z-10 top-3 left-3 w-full h-full bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-2xl" />
            </div>
          </div>

          {/* Right - Content */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 rounded-full border border-cyan-500/20">
              <span className="text-cyan-300 text-sm font-medium">Hello, I'm</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Jennyrine
              <br />
              <span className="bg-gradient-to-r from-cyan-300 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Palis Jr
              </span>
            </h1>

            <div className="flex flex-wrap justify-center lg:justify-start gap-2">
              {['IT Specialist', 'Digital Marketing VA', 'Technical Support'].map((role) => (
                <span key={role} className="px-3 py-1.5 text-sm bg-white/5 border border-white/10 rounded-lg text-gray-300">
                  {role}
                </span>
              ))}
            </div>

            <p className="text-gray-400 leading-relaxed max-w-lg">
              Results-driven specialist with experience in digital marketing, technical support, and system development. Skilled in optimizing systems and building automated workflows.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button onClick={scrollToProjects} className="group flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-400 hover:to-cyan-500 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg shadow-cyan-500/25">
                View My Work
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <a href="/cv.pdf" download className="flex items-center justify-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl font-semibold text-white transition-all">
                Download Resume
              </a>
            </div>

            <div className="flex items-center gap-4 pt-4">
              <span className="text-sm text-gray-500">Connect</span>
              <div className="w-8 h-px bg-gray-600" />
              <div className="flex gap-2">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="p-2.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-gray-400 hover:text-cyan-300 transition-all">
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Design 2: Centered Minimal - Everything centered, clean and simple
  if (design === 2) {
    return (
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Profile */}
          <div className="relative">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden border-2 border-white/10 shadow-xl">
              <img src="/grad.jpg" alt="Jennyrine Palis Jr" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-green-400 rounded-lg border-4 border-blue-900" />
          </div>

          {/* Name */}
          <div className="space-y-2">
            <p className="text-cyan-400 font-medium">Hello, I'm</p>
            <h1 className="text-5xl md:text-7xl font-bold text-white">
              Jennyrine <span className="bg-gradient-to-r from-cyan-300 to-purple-400 bg-clip-text text-transparent">Palis Jr</span>
            </h1>
          </div>

          {/* Roles */}
          <p className="text-xl md:text-2xl text-gray-300 font-light">
            IT Specialist • Digital Marketing VA • Technical Support
          </p>

          {/* Description */}
          <p className="text-gray-400 max-w-2xl leading-relaxed">
            Results-driven specialist with experience in digital marketing, technical support, and system development. Skilled in optimizing systems, building automated workflows, and delivering excellent customer service.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button onClick={scrollToProjects} className="group flex items-center justify-center gap-2 bg-white text-blue-900 px-8 py-4 rounded-full font-semibold hover:bg-cyan-300 transition-all duration-300">
              View My Work
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <a href="/cv.pdf" download className="flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/20 hover:border-white/40 rounded-full font-semibold text-white transition-all">
              <Download className="w-5 h-5" />
              Resume
            </a>
          </div>

          {/* Social */}
          <div className="flex gap-4 pt-4">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="p-3 hover:bg-white/10 rounded-full text-gray-400 hover:text-white transition-all">
                <Icon size={24} />
              </a>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Design 3: Bento Grid - Modern grid layout
  if (design === 3) {
    return (
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Main intro card - spans 2 columns */}
          <div className="md:col-span-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-10">
            <p className="text-cyan-400 font-medium mb-2">Hello, I'm</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Jennyrine <span className="bg-gradient-to-r from-cyan-300 to-purple-400 bg-clip-text text-transparent">Palis Jr</span>
            </h1>
            <p className="text-gray-400 mb-6 max-w-lg">
              Results-driven specialist with experience in digital marketing, technical support, and system development.
            </p>
            <div className="flex flex-wrap gap-2">
              {['IT Specialist', 'Digital Marketing VA', 'Technical Support'].map((role) => (
                <span key={role} className="px-4 py-2 text-sm bg-white/5 border border-white/10 rounded-full text-gray-300">
                  {role}
                </span>
              ))}
            </div>
          </div>

          {/* Profile card */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-4 flex items-center justify-center">
            <div className="w-full aspect-square max-w-[200px] rounded-2xl overflow-hidden">
              <img src="/grad.jpg" alt="Jennyrine Palis Jr" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* CTA card */}
          <div className="bg-gradient-to-br from-cyan-500/20 to-purple-500/20 backdrop-blur-sm border border-white/10 rounded-3xl p-6 flex flex-col justify-center">
            <button onClick={scrollToProjects} className="group flex items-center justify-center gap-2 bg-white text-blue-900 px-6 py-3 rounded-xl font-semibold hover:bg-cyan-300 transition-all w-full mb-3">
              View My Work
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <a href="/cv.pdf" download className="flex items-center justify-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 rounded-xl font-medium text-white transition-all w-full">
              Download Resume
            </a>
          </div>

          {/* Status card */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 flex items-center justify-center gap-3">
            <span className="w-3 h-3 bg-green-400 rounded-full" />
            <span className="text-gray-300">Available for opportunities</span>
          </div>

          {/* Social card */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 flex items-center justify-center gap-4">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 hover:bg-white/10 rounded-xl text-gray-400 hover:text-cyan-300 transition-all">
                <Icon size={22} />
              </a>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Design 4: Bold Typography - Large text focus
  if (design === 4) {
    return (
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="flex flex-col items-center text-center">
          {/* Profile + Badge row */}
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-cyan-400/50">
              <img src="/grad.jpg" alt="Jennyrine Palis Jr" className="w-full h-full object-cover" />
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10">
              <span className="w-2 h-2 bg-green-400 rounded-full" />
              <span className="text-sm text-gray-300">Available for work</span>
            </div>
          </div>

          {/* Giant name */}
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-white leading-none tracking-tight mb-6">
            JENNYRINE
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent">
              PALIS JR
            </span>
          </h1>

          {/* Subtitle */}
          <div className="flex flex-wrap justify-center items-center gap-3 text-lg md:text-xl text-gray-400 mb-8">
            <span>IT Specialist</span>
            <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
            <span>Digital Marketing VA</span>
            <span className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
            <span>Technical Support</span>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button onClick={scrollToProjects} className="group flex items-center justify-center gap-3 bg-cyan-500 hover:bg-cyan-400 text-white px-8 py-4 rounded-full font-semibold transition-all">
              <Sparkles className="w-5 h-5" />
              Explore My Work
            </button>
            <a href="/cv.pdf" download className="flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/20 hover:border-cyan-400/50 rounded-full font-semibold text-white transition-all">
              Download Resume
            </a>
          </div>

          {/* Social */}
          <div className="flex gap-6 mt-12">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-cyan-400 transition-colors">
                <Icon size={24} />
              </a>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Design 5: Asymmetric - Profile right, content left with offset
  if (design === 5) {
    return (
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          {/* Left - Content (takes more space) */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="w-12 h-px bg-cyan-400" />
              <span className="text-cyan-400 text-sm font-medium uppercase tracking-wider">IT Specialist</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
              Hi, I'm
              <br />
              <span className="bg-gradient-to-r from-cyan-300 to-purple-400 bg-clip-text text-transparent">
                Jennyrine
              </span>
            </h1>

            <p className="text-lg text-gray-400 mb-8 max-w-md">
              A results-driven specialist with experience in digital marketing, technical support, and system development. I build automated workflows and deliver excellent service.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              {['Digital Marketing VA', 'Technical Support', 'System Development'].map((skill) => (
                <span key={skill} className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-gray-300">
                  {skill}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={scrollToProjects} className="group flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white px-8 py-4 rounded-xl font-semibold transition-all shadow-lg shadow-cyan-500/20">
                View Projects
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <div className="flex gap-2">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="p-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-gray-400 hover:text-cyan-300 transition-all">
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right - Profile (smaller) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative">
              {/* Main image */}
              <div className="relative w-64 h-80 md:w-72 md:h-96 rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                <img src="/grad.jpg" alt="Jennyrine Palis Jr" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/60 via-transparent to-transparent" />
              </div>

              {/* Decorative element */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-cyan-400/20 rounded-3xl" />

              {/* Floating Jellyfish - Badge style */}
              <div className="absolute bottom-[-4.5rem] -left-6 w-30 h-36 cursor-pointer group">
                <div className="w-full h-full animate-jellyFloat transition-all duration-300 group-hover:scale-110">
                  <svg
                    viewBox="0 0 120 180"
                    className="w-full h-full transition-all duration-500 jellyfish-svg"
                  >
                    <defs>
                      {/* Main bell gradient - more translucent and realistic */}
                      <radialGradient id="jellyBellGrad" cx="50%" cy="25%" r="80%">
                        <stop offset="0%" stopColor="hsla(190, 100%, 95%, 0.95)" />
                        <stop offset="30%" stopColor="hsla(190, 90%, 75%, 0.8)" />
                        <stop offset="60%" stopColor="hsla(200, 85%, 60%, 0.6)" />
                        <stop offset="100%" stopColor="hsla(210, 80%, 45%, 0.3)" />
                      </radialGradient>
                      {/* Inner organ gradient */}
                      <radialGradient id="jellyOrganGrad" cx="50%" cy="40%" r="60%">
                        <stop offset="0%" stopColor="hsla(280, 70%, 80%, 0.6)" />
                        <stop offset="100%" stopColor="hsla(200, 60%, 60%, 0.2)" />
                      </radialGradient>
                      {/* Rim highlight */}
                      <linearGradient id="jellyRimGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="hsla(190, 100%, 80%, 0)" />
                        <stop offset="50%" stopColor="hsla(190, 100%, 90%, 0.8)" />
                        <stop offset="100%" stopColor="hsla(190, 100%, 80%, 0)" />
                      </linearGradient>
                    </defs>

                    {/* Main bell/dome - bigger and more dome-shaped */}
                    <g className="animate-jellyPulse">
                      {/* Outer bell - larger dome */}
                      <path
                        d="M8,62 Q8,5 60,5 Q112,5 112,62 Q112,78 60,85 Q8,78 8,62"
                        fill="url(#jellyBellGrad)"
                      />
                      {/* Bell rim - the frilly edge */}
                      <path
                        d="M12,66 Q22,74 34,68 Q46,78 58,70 Q70,80 82,72 Q94,78 106,68 Q112,74 112,66"
                        fill="none"
                        stroke="url(#jellyRimGrad)"
                        strokeWidth="3"
                        className="animate-jellyRim"
                      />
                      {/* Inner glow layers */}
                      <ellipse cx="60" cy="38" rx="38" ry="28" fill="hsla(190, 100%, 95%, 0.4)" />
                      <ellipse cx="60" cy="34" rx="26" ry="20" fill="hsla(190, 100%, 98%, 0.5)" />
                      {/* Internal organs/gonads */}
                      <ellipse cx="40" cy="50" rx="10" ry="14" fill="url(#jellyOrganGrad)" />
                      <ellipse cx="60" cy="54" rx="9" ry="12" fill="url(#jellyOrganGrad)" />
                      <ellipse cx="80" cy="50" rx="10" ry="14" fill="url(#jellyOrganGrad)" />
                    </g>

                    {/* Oral arms - the thick frilly parts */}
                    <g className="animate-oralArms">
                      <path d="M40,82 Q36,108 44,130 Q38,148 46,165" stroke="hsla(190, 70%, 75%, 0.7)" strokeWidth="4" fill="none" strokeLinecap="round" />
                      <path d="M60,86 Q56,115 64,138 Q58,158 62,175" stroke="hsla(190, 70%, 75%, 0.7)" strokeWidth="4" fill="none" strokeLinecap="round" />
                      <path d="M80,82 Q84,108 76,130 Q82,148 74,165" stroke="hsla(190, 70%, 75%, 0.7)" strokeWidth="4" fill="none" strokeLinecap="round" />
                    </g>

                    {/* Thin trailing tentacles */}
                    <g>
                      <path d="M25,78 Q16,115 24,150 Q14,175 26,195" stroke="hsla(190, 60%, 70%, 0.5)" strokeWidth="1.5" fill="none" strokeLinecap="round" className="animate-tentacle1" />
                      <path d="M35,82 Q28,120 36,155 Q28,180 38,200" stroke="hsla(190, 60%, 70%, 0.4)" strokeWidth="1" fill="none" strokeLinecap="round" className="animate-tentacle2" />
                      <path d="M50,86 Q44,125 52,160 Q44,185 52,205" stroke="hsla(190, 60%, 70%, 0.4)" strokeWidth="1" fill="none" strokeLinecap="round" className="animate-tentacle3" />
                      <path d="M70,86 Q76,125 68,160 Q76,185 68,205" stroke="hsla(190, 60%, 70%, 0.4)" strokeWidth="1" fill="none" strokeLinecap="round" className="animate-tentacle3" />
                      <path d="M85,82 Q92,120 84,155 Q92,180 82,200" stroke="hsla(190, 60%, 70%, 0.4)" strokeWidth="1" fill="none" strokeLinecap="round" className="animate-tentacle2" />
                      <path d="M95,78 Q104,115 96,150 Q106,175 94,195" stroke="hsla(190, 60%, 70%, 0.5)" strokeWidth="1.5" fill="none" strokeLinecap="round" className="animate-tentacle1" />
                    </g>

                    {/* Sparkle/bioluminescence spots */}
                    <circle cx="35" cy="32" r="2.5" fill="hsla(190, 100%, 95%, 0.8)" className="animate-sparkle1" />
                    <circle cx="78" cy="28" r="2" fill="hsla(190, 100%, 95%, 0.7)" className="animate-sparkle2" />
                    <circle cx="55" cy="45" r="1.5" fill="hsla(190, 100%, 95%, 0.6)" className="animate-sparkle3" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Jellyfish animations - lifelike */}
        <style>{`
          @keyframes jellyFloat {
            0%, 100% { transform: translateY(0) rotate(-2deg); }
            25% { transform: translateY(-6px) rotate(0deg); }
            50% { transform: translateY(-12px) rotate(2deg); }
            75% { transform: translateY(-6px) rotate(0deg); }
          }
          @keyframes jellyPulse {
            0% { transform: scale(1, 1); }
            15% { transform: scale(0.88, 1.08); }
            30% { transform: scale(0.92, 1.04); }
            50% { transform: scale(1, 1); }
            100% { transform: scale(1, 1); }
          }
          @keyframes jellyRim {
            0%, 100% { d: path("M18,58 Q25,65 35,60 Q45,68 55,62 Q65,70 75,63 Q85,68 95,60 Q102,65 102,58"); }
            25% { d: path("M18,56 Q25,62 35,58 Q45,64 55,60 Q65,66 75,61 Q85,64 95,58 Q102,62 102,56"); }
            50% { d: path("M18,58 Q25,65 35,60 Q45,68 55,62 Q65,70 75,63 Q85,68 95,60 Q102,65 102,58"); }
          }
          @keyframes oralArms {
            0%, 100% { transform: translateX(0) skewX(0deg); }
            33% { transform: translateX(2px) skewX(2deg); }
            66% { transform: translateX(-2px) skewX(-2deg); }
          }
          @keyframes tentacleFlow1 {
            0%, 100% { transform: rotate(0deg) translateX(0); }
            25% { transform: rotate(5deg) translateX(3px); }
            50% { transform: rotate(0deg) translateX(0); }
            75% { transform: rotate(-5deg) translateX(-3px); }
          }
          @keyframes tentacleFlow2 {
            0%, 100% { transform: rotate(0deg) translateX(0); }
            30% { transform: rotate(-4deg) translateX(-2px); }
            70% { transform: rotate(4deg) translateX(2px); }
          }
          @keyframes tentacleFlow3 {
            0%, 100% { transform: rotate(0deg); }
            40% { transform: rotate(3deg); }
            60% { transform: rotate(-3deg); }
          }
          @keyframes sparkle {
            0%, 100% { opacity: 0.8; transform: scale(1); }
            50% { opacity: 0.3; transform: scale(0.5); }
          }
          @keyframes sparkle2 {
            0%, 100% { opacity: 0.6; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.3); }
          }
          .animate-jellyFloat {
            animation: jellyFloat 4s ease-in-out infinite;
          }
          .animate-jellyPulse {
            animation: jellyPulse 2.5s ease-in-out infinite;
            transform-origin: 60px 40px;
          }
          .animate-jellyRim {
            animation: jellyRim 2.5s ease-in-out infinite;
          }
          .animate-oralArms {
            animation: oralArms 3s ease-in-out infinite;
            transform-origin: center top;
          }
          .animate-tentacle1 {
            animation: tentacleFlow1 3s ease-in-out infinite;
            transform-origin: top center;
          }
          .animate-tentacle2 {
            animation: tentacleFlow2 3.5s ease-in-out infinite;
            transform-origin: top center;
          }
          .animate-tentacle3 {
            animation: tentacleFlow3 4s ease-in-out infinite;
            transform-origin: top center;
          }
          .animate-sparkle1 {
            animation: sparkle 2s ease-in-out infinite;
          }
          .animate-sparkle2 {
            animation: sparkle2 2.5s ease-in-out infinite 0.5s;
          }
          .animate-sparkle3 {
            animation: sparkle 3s ease-in-out infinite 1s;
          }
          .jellyfish-svg {
            filter: drop-shadow(0 0 20px hsla(190, 90%, 60%, 0.6)) drop-shadow(0 0 40px hsla(190, 80%, 50%, 0.3));
          }
          .group:hover .jellyfish-svg {
            filter: drop-shadow(0 0 30px hsla(190, 100%, 70%, 0.9)) drop-shadow(0 0 60px hsla(190, 90%, 60%, 0.7)) drop-shadow(0 0 90px hsla(200, 80%, 50%, 0.5));
          }
        `}</style>
      </div>
    );
  }

  return null;
};

export default HeroDesigns;
