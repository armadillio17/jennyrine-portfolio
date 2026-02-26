// Jellyfish Profile Picture Designs
// Change the 'design' prop to switch between designs: 1, 2, 3, 4, or 5

interface JellyfishProfileProps {
  design?: 1 | 2 | 3 | 4 | 5;
  imageSrc: string;
  alt: string;
}

const JellyfishProfile = ({ design = 1, imageSrc, alt }: JellyfishProfileProps) => {
  // Design 1: Jellyfish dome frame with tentacles below - Centered
  if (design === 1) {
    return (
      <div className="flex justify-center">
        <div className="relative">
          {/* Glow effect behind */}
          <div className="absolute inset-0 bg-cyan-400/20 rounded-full blur-3xl scale-150" />

          {/* Main jellyfish container */}
          <div className="relative">
            {/* Outer glow ring */}
            <div
              className="absolute -inset-3 rounded-full opacity-60"
              style={{
                background: 'radial-gradient(circle, hsla(190, 80%, 60%, 0.4) 0%, transparent 70%)',
                animation: 'pulseGlow 3s ease-in-out infinite',
              }}
            />

            {/* Jellyfish dome border */}
            <div
              className="absolute -inset-2 rounded-full"
              style={{
                background: 'linear-gradient(180deg, hsla(190, 80%, 70%, 0.6) 0%, hsla(220, 70%, 60%, 0.4) 50%, hsla(280, 60%, 50%, 0.3) 100%)',
                padding: '3px',
              }}
            />

            {/* Profile image */}
            <img
              src={imageSrc}
              alt={alt}
              className="relative w-48 h-48 md:w-56 md:h-56 rounded-full object-cover border-4 border-white/30"
              style={{
                boxShadow: '0 0 40px hsla(190, 80%, 60%, 0.4), inset 0 0 30px hsla(190, 80%, 80%, 0.2)',
              }}
            />

            {/* Inner highlight */}
            <div
              className="absolute top-2 left-1/2 -translate-x-1/2 w-1/2 h-8 rounded-full opacity-40"
              style={{
                background: 'linear-gradient(180deg, hsla(190, 100%, 90%, 0.8), transparent)',
              }}
            />
          </div>

          {/* Tentacles */}
          <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 flex gap-2 opacity-60">
            {[...Array(7)].map((_, i) => (
              <div
                key={i}
                className="rounded-full"
                style={{
                  width: '3px',
                  height: `${50 + (i % 3) * 20}px`,
                  background: `linear-gradient(180deg, hsla(${190 + i * 10}, 70%, 60%, 0.6), transparent)`,
                  animation: `tentacleWave 2s ease-in-out infinite`,
                  animationDelay: `${i * 0.15}s`,
                }}
              />
            ))}
          </div>

          <style>{`
            @keyframes pulseGlow {
              0%, 100% { transform: scale(1); opacity: 0.6; }
              50% { transform: scale(1.1); opacity: 0.8; }
            }
            @keyframes tentacleWave {
              0%, 100% { transform: translateX(0) scaleY(1); }
              25% { transform: translateX(3px) scaleY(0.95); }
              75% { transform: translateX(-3px) scaleY(1.05); }
            }
          `}</style>
        </div>
      </div>
    );
  }

  // Design 2: Side layout with jellyfish floating beside - Left aligned
  if (design === 2) {
    return (
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
        {/* Profile with jellyfish frame */}
        <div className="relative">
          {/* Bioluminescent glow */}
          <div
            className="absolute -inset-8 rounded-full opacity-50"
            style={{
              background: 'radial-gradient(ellipse at center, hsla(190, 80%, 60%, 0.3), transparent 70%)',
              animation: 'breathe 4s ease-in-out infinite',
            }}
          />

          {/* Jellyfish bell shape frame */}
          <div className="relative">
            <svg
              viewBox="0 0 200 220"
              className="absolute -inset-6 w-[calc(100%+48px)] h-[calc(100%+60px)]"
              style={{ filter: 'drop-shadow(0 0 20px hsla(190, 80%, 60%, 0.5))' }}
            >
              <defs>
                <linearGradient id="jellyfishGrad2" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="hsla(190, 80%, 70%, 0.7)" />
                  <stop offset="50%" stopColor="hsla(220, 70%, 60%, 0.5)" />
                  <stop offset="100%" stopColor="hsla(280, 60%, 50%, 0.3)" />
                </linearGradient>
              </defs>
              {/* Bell outline */}
              <ellipse cx="100" cy="85" rx="85" ry="75" fill="none" stroke="url(#jellyfishGrad2)" strokeWidth="3" />
              {/* Tentacles */}
              {[0, 1, 2, 3, 4].map((i) => (
                <path
                  key={i}
                  d={`M${60 + i * 20},155 Q${55 + i * 20},185 ${50 + i * 20},220`}
                  stroke={`hsla(${190 + i * 15}, 70%, 60%, 0.5)`}
                  strokeWidth="2"
                  fill="none"
                  style={{
                    animation: `sway 3s ease-in-out infinite`,
                    animationDelay: `${i * 0.2}s`,
                  }}
                />
              ))}
            </svg>

            {/* Profile image */}
            <img
              src={imageSrc}
              alt={alt}
              className="relative w-44 h-44 md:w-52 md:h-52 rounded-full object-cover"
              style={{
                boxShadow: '0 0 30px hsla(190, 80%, 60%, 0.3)',
                border: '3px solid hsla(190, 70%, 70%, 0.4)',
              }}
            />
          </div>

          <style>{`
            @keyframes breathe {
              0%, 100% { transform: scale(1); opacity: 0.5; }
              50% { transform: scale(1.15); opacity: 0.7; }
            }
            @keyframes sway {
              0%, 100% { transform: translateX(0); }
              50% { transform: translateX(5px); }
            }
          `}</style>
        </div>
      </div>
    );
  }

  // Design 3: Minimalist glowing orb with subtle tentacle wisps - Centered
  if (design === 3) {
    return (
      <div className="flex justify-center">
        <div className="relative group">
          {/* Outer pulsing rings */}
          <div
            className="absolute -inset-4 rounded-full"
            style={{
              background: 'conic-gradient(from 0deg, hsla(190, 80%, 60%, 0.4), hsla(220, 70%, 60%, 0.3), hsla(280, 60%, 60%, 0.4), hsla(190, 80%, 60%, 0.4))',
              animation: 'rotate 8s linear infinite',
            }}
          />
          <div className="absolute -inset-4 rounded-full bg-blue-900/80" />

          {/* Inner glow */}
          <div
            className="absolute -inset-1 rounded-full"
            style={{
              background: 'linear-gradient(135deg, hsla(190, 80%, 70%, 0.5), hsla(280, 60%, 60%, 0.3))',
              animation: 'pulse 3s ease-in-out infinite',
            }}
          />

          {/* Profile image */}
          <img
            src={imageSrc}
            alt={alt}
            className="relative w-48 h-48 md:w-56 md:h-56 rounded-full object-cover"
            style={{
              border: '2px solid hsla(190, 70%, 70%, 0.5)',
              boxShadow: '0 0 50px hsla(190, 80%, 60%, 0.4), 0 0 100px hsla(220, 70%, 60%, 0.2)',
            }}
          />

          {/* Floating particles */}
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-cyan-400/60"
              style={{
                top: `${20 + (i % 3) * 30}%`,
                left: `${i < 3 ? -10 - i * 5 : 105 + (i - 3) * 5}%`,
                animation: `float ${3 + i * 0.5}s ease-in-out infinite`,
                animationDelay: `${i * 0.3}s`,
              }}
            />
          ))}

          {/* Subtle bottom wisps */}
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-3 opacity-40">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="w-0.5 rounded-full"
                style={{
                  height: `${30 + i * 8}px`,
                  background: `linear-gradient(180deg, hsla(190, 70%, 60%, 0.6), transparent)`,
                  animation: `gentleWave 2.5s ease-in-out infinite`,
                  animationDelay: `${i * 0.2}s`,
                }}
              />
            ))}
          </div>

          <style>{`
            @keyframes rotate {
              from { transform: rotate(0deg); }
              to { transform: rotate(360deg); }
            }
            @keyframes pulse {
              0%, 100% { opacity: 0.5; }
              50% { opacity: 0.8; }
            }
            @keyframes float {
              0%, 100% { transform: translateY(0) scale(1); opacity: 0.6; }
              50% { transform: translateY(-10px) scale(1.2); opacity: 1; }
            }
            @keyframes gentleWave {
              0%, 100% { transform: translateX(0) rotate(0deg); }
              50% { transform: translateX(2px) rotate(3deg); }
            }
          `}</style>
        </div>
      </div>
    );
  }

  // Design 4: Full jellyfish silhouette with profile as the head - Centered, larger
  if (design === 4) {
    return (
      <div className="flex justify-center">
        <div className="relative">
          {/* Background glow */}
          <div
            className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full opacity-40"
            style={{
              background: 'radial-gradient(circle, hsla(190, 80%, 60%, 0.5), transparent 70%)',
              animation: 'glowPulse 4s ease-in-out infinite',
            }}
          />

          {/* Jellyfish body SVG */}
          <svg
            viewBox="0 0 200 280"
            className="w-64 h-80 md:w-72 md:h-96"
            style={{ filter: 'drop-shadow(0 0 25px hsla(190, 80%, 60%, 0.4))' }}
          >
            <defs>
              <radialGradient id="domeGrad4" cx="50%" cy="30%" r="60%">
                <stop offset="0%" stopColor="hsla(190, 80%, 80%, 0.3)" />
                <stop offset="100%" stopColor="hsla(220, 70%, 50%, 0.1)" />
              </radialGradient>
              <clipPath id="domeClip4">
                <ellipse cx="100" cy="70" rx="65" ry="60" />
              </clipPath>
            </defs>

            {/* Outer dome glow */}
            <ellipse cx="100" cy="70" rx="70" ry="65" fill="hsla(190, 80%, 60%, 0.15)" />
            <ellipse cx="100" cy="70" rx="68" ry="63" fill="url(#domeGrad4)" stroke="hsla(190, 70%, 70%, 0.4)" strokeWidth="2" />

            {/* Profile image positioned in dome */}
            <foreignObject x="35" y="10" width="130" height="120" clipPath="url(#domeClip4)">
              <img
                src={imageSrc}
                alt={alt}
                className="w-full h-full object-cover rounded-full"
              />
            </foreignObject>

            {/* Dome highlight */}
            <ellipse cx="85" cy="45" rx="25" ry="12" fill="hsla(190, 100%, 90%, 0.2)" />

            {/* Tentacles with animation */}
            {[0, 1, 2, 3, 4, 5, 6].map((i) => (
              <path
                key={i}
                d={`M${50 + i * 17},130
                   Q${45 + i * 17},170 ${40 + i * 17 + (i % 2 ? 5 : -5)},210
                   Q${35 + i * 17},240 ${45 + i * 17},270`}
                stroke={`hsla(${180 + i * 12}, 70%, 65%, ${0.6 - i * 0.05})`}
                strokeWidth={2.5 - i * 0.2}
                fill="none"
                strokeLinecap="round"
                style={{
                  animation: `tentacleDance 3s ease-in-out infinite`,
                  animationDelay: `${i * 0.15}s`,
                }}
              />
            ))}

            {/* Wispy inner tentacles */}
            {[0, 1, 2].map((i) => (
              <path
                key={`wisp-${i}`}
                d={`M${70 + i * 30},130 Q${65 + i * 30},180 ${75 + i * 30},230`}
                stroke={`hsla(${200 + i * 20}, 60%, 70%, 0.3)`}
                strokeWidth="1.5"
                fill="none"
                style={{
                  animation: `wispFloat 4s ease-in-out infinite`,
                  animationDelay: `${i * 0.3}s`,
                }}
              />
            ))}
          </svg>

          <style>{`
            @keyframes glowPulse {
              0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.4; }
              50% { transform: translate(-50%, -50%) scale(1.2); opacity: 0.6; }
            }
            @keyframes tentacleDance {
              0%, 100% { transform: translateX(0) rotate(0deg); }
              25% { transform: translateX(4px) rotate(2deg); }
              75% { transform: translateX(-4px) rotate(-2deg); }
            }
            @keyframes wispFloat {
              0%, 100% { transform: translateX(0); opacity: 0.3; }
              50% { transform: translateX(3px); opacity: 0.5; }
            }
          `}</style>
        </div>
      </div>
    );
  }

  // Design 5: Asymmetric artistic layout - Profile on the right with decorative jellyfish elements
  if (design === 5) {
    return (
      <div className="flex justify-center md:justify-end md:pr-12">
        <div className="relative">
          {/* Decorative jellyfish on the side */}
          <div
            className="absolute -left-20 md:-left-32 top-1/2 -translate-y-1/2 opacity-40"
            style={{ animation: 'floatSide 6s ease-in-out infinite' }}
          >
            <svg viewBox="0 0 80 120" className="w-16 h-24 md:w-24 md:h-36">
              <defs>
                <radialGradient id="miniJelly5" cx="50%" cy="30%" r="50%">
                  <stop offset="0%" stopColor="hsla(190, 80%, 70%, 0.8)" />
                  <stop offset="100%" stopColor="hsla(220, 70%, 50%, 0.3)" />
                </radialGradient>
              </defs>
              <ellipse cx="40" cy="30" rx="30" ry="25" fill="url(#miniJelly5)" />
              {[0, 1, 2, 3].map((i) => (
                <path
                  key={i}
                  d={`M${20 + i * 15},50 Q${15 + i * 15},75 ${20 + i * 15},100`}
                  stroke={`hsla(${190 + i * 15}, 70%, 65%, 0.5)`}
                  strokeWidth="2"
                  fill="none"
                />
              ))}
            </svg>
          </div>

          {/* Main profile with organic frame */}
          <div className="relative">
            {/* Organic blob shape behind */}
            <div
              className="absolute -inset-6 opacity-50"
              style={{
                background: 'radial-gradient(ellipse at 60% 40%, hsla(190, 80%, 60%, 0.4), hsla(280, 60%, 50%, 0.2), transparent 70%)',
                borderRadius: '60% 40% 50% 50% / 50% 60% 40% 50%',
                animation: 'morphBlob 8s ease-in-out infinite',
              }}
            />

            {/* Glowing border */}
            <div
              className="absolute -inset-1 rounded-full"
              style={{
                background: 'linear-gradient(45deg, hsla(190, 80%, 60%, 0.6), hsla(280, 60%, 60%, 0.4), hsla(190, 80%, 60%, 0.6))',
                backgroundSize: '200% 200%',
                animation: 'gradientShift 4s ease infinite',
              }}
            />
            <div className="absolute -inset-1 rounded-full bg-blue-900/90" style={{ margin: '2px' }} />

            {/* Profile image */}
            <img
              src={imageSrc}
              alt={alt}
              className="relative w-48 h-48 md:w-56 md:h-56 rounded-full object-cover"
              style={{
                boxShadow: '0 0 40px hsla(190, 80%, 60%, 0.3)',
              }}
            />

            {/* Accent dots */}
            <div className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-cyan-400/70" style={{ animation: 'sparkle 2s ease-in-out infinite' }} />
            <div className="absolute -bottom-1 -left-3 w-3 h-3 rounded-full bg-purple-400/60" style={{ animation: 'sparkle 2s ease-in-out infinite 0.5s' }} />
          </div>

          {/* Flowing tentacle accent */}
          <div className="absolute -bottom-12 left-1/4 flex gap-2 opacity-50">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="w-1 rounded-full"
                style={{
                  height: `${40 + i * 12}px`,
                  background: `linear-gradient(180deg, hsla(${190 + i * 20}, 70%, 60%, 0.6), transparent)`,
                  animation: `flow 3s ease-in-out infinite`,
                  animationDelay: `${i * 0.2}s`,
                }}
              />
            ))}
          </div>

          <style>{`
            @keyframes floatSide {
              0%, 100% { transform: translateY(-50%) translateX(0); }
              50% { transform: translateY(-50%) translateX(-10px) translateY(-10px); }
            }
            @keyframes morphBlob {
              0%, 100% { border-radius: 60% 40% 50% 50% / 50% 60% 40% 50%; }
              25% { border-radius: 50% 50% 40% 60% / 60% 50% 50% 40%; }
              50% { border-radius: 40% 60% 50% 50% / 50% 40% 60% 50%; }
              75% { border-radius: 50% 50% 60% 40% / 40% 50% 50% 60%; }
            }
            @keyframes gradientShift {
              0%, 100% { background-position: 0% 50%; }
              50% { background-position: 100% 50%; }
            }
            @keyframes sparkle {
              0%, 100% { transform: scale(1); opacity: 0.7; }
              50% { transform: scale(1.3); opacity: 1; }
            }
            @keyframes flow {
              0%, 100% { transform: translateX(0) scaleY(1); }
              50% { transform: translateX(3px) scaleY(1.05); }
            }
          `}</style>
        </div>
      </div>
    );
  }

  return null;
};

export default JellyfishProfile;
