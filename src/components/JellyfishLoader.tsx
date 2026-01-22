const JellyfishLoader = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-b from-blue-950 via-blue-900 to-blue-950 flex items-center justify-center z-50">
      {/* Ambient underwater particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/30 rounded-full animate-float-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Main jellyfish loader */}
      <div className="relative flex flex-col items-center">
        <div className="w-32 h-40 animate-jellyFloat">
          <svg viewBox="0 0 120 180" className="w-full h-full jellyfish-glow">
            <defs>
              <radialGradient id="loaderBellGrad" cx="50%" cy="25%" r="80%">
                <stop offset="0%" stopColor="hsla(190, 100%, 95%, 0.95)" />
                <stop offset="30%" stopColor="hsla(190, 90%, 75%, 0.8)" />
                <stop offset="60%" stopColor="hsla(200, 85%, 60%, 0.6)" />
                <stop offset="100%" stopColor="hsla(210, 80%, 45%, 0.3)" />
              </radialGradient>
              <radialGradient id="loaderOrganGrad" cx="50%" cy="40%" r="60%">
                <stop offset="0%" stopColor="hsla(280, 70%, 80%, 0.6)" />
                <stop offset="100%" stopColor="hsla(200, 60%, 60%, 0.2)" />
              </radialGradient>
              <linearGradient id="loaderRimGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="hsla(190, 100%, 80%, 0)" />
                <stop offset="50%" stopColor="hsla(190, 100%, 90%, 0.8)" />
                <stop offset="100%" stopColor="hsla(190, 100%, 80%, 0)" />
              </linearGradient>
            </defs>

            {/* Main bell/dome */}
            <g className="animate-jellyPulse">
              <path
                d="M8,62 Q8,5 60,5 Q112,5 112,62 Q112,78 60,85 Q8,78 8,62"
                fill="url(#loaderBellGrad)"
              />
              <path
                d="M12,66 Q22,74 34,68 Q46,78 58,70 Q70,80 82,72 Q94,78 106,68 Q112,74 112,66"
                fill="none"
                stroke="url(#loaderRimGrad)"
                strokeWidth="3"
              />
              <ellipse cx="60" cy="38" rx="38" ry="28" fill="hsla(190, 100%, 95%, 0.4)" />
              <ellipse cx="60" cy="34" rx="26" ry="20" fill="hsla(190, 100%, 98%, 0.5)" />
              <ellipse cx="40" cy="50" rx="10" ry="14" fill="url(#loaderOrganGrad)" />
              <ellipse cx="60" cy="54" rx="9" ry="12" fill="url(#loaderOrganGrad)" />
              <ellipse cx="80" cy="50" rx="10" ry="14" fill="url(#loaderOrganGrad)" />
            </g>

            {/* Oral arms */}
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

            {/* Sparkle spots */}
            <circle cx="35" cy="32" r="2.5" fill="hsla(190, 100%, 95%, 0.8)" className="animate-sparkle1" />
            <circle cx="78" cy="28" r="2" fill="hsla(190, 100%, 95%, 0.7)" className="animate-sparkle2" />
            <circle cx="55" cy="45" r="1.5" fill="hsla(190, 100%, 95%, 0.6)" className="animate-sparkle3" />
          </svg>
        </div>

        {/* Loading text */}
        <div className="mt-8 text-center">
          <p className="text-cyan-300 text-lg font-medium animate-pulse">Loading</p>
          <div className="flex justify-center gap-1 mt-2">
            <span className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
            <span className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
            <span className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
          </div>
        </div>
      </div>

      {/* Styles */}
      <style>{`
        @keyframes jellyFloat {
          0%, 100% { transform: translateY(0) rotate(-2deg); }
          25% { transform: translateY(-8px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(2deg); }
          75% { transform: translateY(-8px) rotate(0deg); }
        }
        @keyframes jellyPulse {
          0% { transform: scale(1, 1); }
          15% { transform: scale(0.88, 1.08); }
          30% { transform: scale(0.92, 1.04); }
          50% { transform: scale(1, 1); }
          100% { transform: scale(1, 1); }
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
        @keyframes floatParticle {
          0%, 100% { transform: translateY(0) translateX(0); opacity: 0.3; }
          50% { transform: translateY(-20px) translateX(10px); opacity: 0.6; }
        }
        .animate-jellyFloat {
          animation: jellyFloat 3s ease-in-out infinite;
        }
        .animate-jellyPulse {
          animation: jellyPulse 2s ease-in-out infinite;
          transform-origin: 60px 40px;
        }
        .animate-oralArms {
          animation: oralArms 2.5s ease-in-out infinite;
          transform-origin: center top;
        }
        .animate-tentacle1 {
          animation: tentacleFlow1 2.5s ease-in-out infinite;
          transform-origin: top center;
        }
        .animate-tentacle2 {
          animation: tentacleFlow2 3s ease-in-out infinite;
          transform-origin: top center;
        }
        .animate-tentacle3 {
          animation: tentacleFlow3 3.5s ease-in-out infinite;
          transform-origin: top center;
        }
        .animate-sparkle1 {
          animation: sparkle 1.5s ease-in-out infinite;
        }
        .animate-sparkle2 {
          animation: sparkle2 2s ease-in-out infinite 0.3s;
        }
        .animate-sparkle3 {
          animation: sparkle 2.5s ease-in-out infinite 0.6s;
        }
        .animate-float-particle {
          animation: floatParticle 4s ease-in-out infinite;
        }
        .jellyfish-glow {
          filter: drop-shadow(0 0 20px hsla(190, 90%, 60%, 0.6)) drop-shadow(0 0 40px hsla(190, 80%, 50%, 0.3));
        }
      `}</style>
    </div>
  );
};

export default JellyfishLoader;
