import { useState, useEffect, useCallback } from 'react';
import { ChevronDown } from 'lucide-react';
import HeroDesigns from './HeroDesigns';

interface Jellyfish {
  id: number;
  startY: number;
  size: number;
  swimDuration: number;
  pulseSpeed: number;
  hue: number;
  opacity: number;
  direction: number;
}

interface Fish {
  id: number;
  y: number;
  size: number;
  speed: number;
  direction: number;
}

// Create a single jellyfish
const createJellyfish = (id: number): Jellyfish => ({
  id,
  startY: Math.random() * 70 + 15,
  size: Math.random() * 35 + 35,
  swimDuration: Math.random() * 12 + 18, // Slower, more graceful (18-30s)
  pulseSpeed: Math.random() * 0.5 + 1.5, // 1.5-2s pulse
  hue: Math.random() * 60 + 180,
  opacity: Math.random() * 0.25 + 0.45,
  direction: Math.random() > 0.5 ? 1 : -1,
});

// Create a single fish
const createFish = (id: number): Fish => ({
  id,
  y: Math.random() * 60 + 20,
  size: Math.random() * 15 + 10,
  speed: Math.random() * 8 + 8,
  direction: Math.random() > 0.5 ? 1 : -1,
});

const Hero = () => {
  const [jellyfish, setJellyfish] = useState<Jellyfish[]>([]);
  const [fish, setFish] = useState<Fish[]>([]);
  const [, setNextJellyId] = useState(0);
  const [, setNextFishId] = useState(0);
  const [heroDesign] = useState<1 | 2 | 3 | 4 | 5>(5);

  // Remove jellyfish when animation ends
  const removeJellyfish = useCallback((id: number) => {
    setJellyfish(prev => prev.filter(j => j.id !== id));
  }, []);

  // Remove fish when animation ends
  const removeFish = useCallback((id: number) => {
    setFish(prev => prev.filter(f => f.id !== id));
  }, []);

  // Spawn new jellyfish periodically
  useEffect(() => {
    // Spawn initial jellyfish
    const initial: Jellyfish[] = [];
    for (let i = 0; i < 8; i++) {
      initial.push(createJellyfish(i));
    }
    setJellyfish(initial);
    setNextJellyId(8);

    // Spawn new jellyfish every 2-4 seconds
    const spawnInterval = setInterval(() => {
      setNextJellyId(prev => {
        const newJelly = createJellyfish(prev);
        setJellyfish(current => [...current, newJelly]);
        return prev + 1;
      });
    }, 2000 + Math.random() * 2000);

    return () => clearInterval(spawnInterval);
  }, []);

  // Spawn fish periodically
  useEffect(() => {
    // Spawn initial fish
    const initial: Fish[] = [];
    for (let i = 0; i < 8; i++) {
      initial.push(createFish(i));
    }
    setFish(initial);
    setNextFishId(8);

    // Spawn new fish every 1.5-3 seconds
    const spawnInterval = setInterval(() => {
      setNextFishId(prev => {
        const newFish = createFish(prev);
        setFish(current => [...current, newFish]);
        return prev + 1;
      });
    }, 1500 + Math.random() * 1500);

    return () => clearInterval(spawnInterval);
  }, []);

  const scrollToAbout = () => {
    const element = document.getElementById('about');
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
  };

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
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
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Ocean gradient background - flows into About section */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950 via-blue-900 to-blue-900 z-0" />

      {/* Static light rays from surface */}
      <div className="absolute top-0 left-[20%] w-32 h-[60%] bg-gradient-to-b from-cyan-200/10 to-transparent blur-2xl transform -skew-x-6" />
      <div className="absolute top-0 left-[50%] w-24 h-[50%] bg-gradient-to-b from-cyan-200/5 to-transparent blur-2xl transform skew-x-3" />
      <div className="absolute top-0 left-[75%] w-28 h-[55%] bg-gradient-to-b from-cyan-200/8 to-transparent blur-2xl transform -skew-x-3" />

      {/* Swimming fish - disappear at edge */}
      <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
        {fish.map((f) => (
          <div
            key={f.id}
            className="absolute"
            style={{
              left: f.direction > 0 ? '-5%' : '105%',
              top: `${f.y}%`,
              width: `${f.size}px`,
              height: `${f.size * 0.5}px`,
              animation: `fishSwim${f.direction > 0 ? 'Right' : 'Left'} ${f.speed}s linear forwards`,
            }}
            onAnimationEnd={() => removeFish(f.id)}
          >
            <svg
              viewBox="0 0 40 20"
              className="w-full h-full"
              style={{
                transform: f.direction < 0 ? 'scaleX(-1)' : 'none',
                opacity: 0.3,
              }}
            >
              <ellipse cx="18" cy="10" rx="12" ry="7" fill="rgba(150, 200, 255, 0.5)" />
              <polygon points="30,10 38,4 38,16" fill="rgba(150, 200, 255, 0.5)" />
              <circle cx="10" cy="8" r="1.5" fill="rgba(255,255,255,0.4)" />
            </svg>
          </div>
        ))}
      </div>

      {/* Swimming jellyfish - disappear at edge */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {jellyfish.map((jelly) => (
          <div
            key={jelly.id}
            className="absolute jelly-swim"
            style={{
              left: jelly.direction > 0 ? '-10%' : '110%',
              top: `${jelly.startY}%`,
              width: `${jelly.size}px`,
              height: `${jelly.size * 1.5}px`,
              animation: `jellyfishSwim${jelly.direction > 0 ? 'Right' : 'Left'} ${jelly.swimDuration}s linear forwards`,
            }}
            onAnimationEnd={() => removeJellyfish(jelly.id)}
          >
            {/* Bobbing layer */}
            <div
              className="w-full h-full"
              style={{
                animation: `jellyfishBob ${jelly.pulseSpeed * 2}s ease-in-out infinite`,
              }}
            >
              {/* Pulsing container for the swim motion */}
              <div
                className="w-full h-full"
                style={{
                  animation: `jellyfishPulse ${jelly.pulseSpeed}s ease-in-out infinite`,
                }}
              >
                {/* Jellyfish SVG */}
                <svg
                  viewBox="0 0 100 150"
                  className="w-full h-full"
                  style={{
                    filter: `drop-shadow(0 0 20px hsla(${jelly.hue}, 80%, 60%, 0.6))`,
                    opacity: jelly.opacity,
                    transform: jelly.direction < 0 ? 'scaleX(-1)' : 'none',
                  }}
                >
                  {/* Bell/dome with pulse animation */}
                  <defs>
                    <radialGradient id={`jellyGrad${jelly.id}`} cx="50%" cy="30%" r="70%">
                      <stop offset="0%" stopColor={`hsla(${jelly.hue}, 90%, 80%, 0.9)`} />
                      <stop offset="50%" stopColor={`hsla(${jelly.hue}, 80%, 60%, 0.7)`} />
                      <stop offset="100%" stopColor={`hsla(${jelly.hue}, 70%, 40%, 0.4)`} />
                    </radialGradient>
                  </defs>
                  <ellipse
                    cx="50"
                    cy="35"
                    rx="40"
                    ry="35"
                    fill={`url(#jellyGrad${jelly.id})`}
                    style={{
                      animation: `bellPulse ${jelly.pulseSpeed}s ease-in-out infinite`,
                      transformOrigin: '50px 35px',
                    }}
                  />
                  {/* Inner glow */}
                  <ellipse
                    cx="50"
                    cy="30"
                    rx="25"
                    ry="20"
                    fill={`hsla(${jelly.hue}, 100%, 90%, 0.3)`}
                  />
                  {/* Tentacles - flowing behind */}
                  {[0, 1, 2, 3, 4].map((t) => (
                    <path
                      key={t}
                      d={`M${30 + t * 10},65 Q${20 + t * 10},100 ${15 + t * 10},140 Q${10 + t * 10},160 ${20 + t * 10},180`}
                      stroke={`hsla(${jelly.hue}, 70%, 70%, 0.6)`}
                      strokeWidth="2.5"
                      fill="none"
                      strokeLinecap="round"
                      style={{
                        animation: `tentacleFlow ${jelly.pulseSpeed}s ease-in-out infinite`,
                        animationDelay: `${t * 0.1}s`,
                        transformOrigin: `${30 + t * 10}px 65px`,
                      }}
                    />
                  ))}
                  {/* Additional wispy tentacles */}
                  {[0, 1, 2].map((t) => (
                    <path
                      key={`wisp-${t}`}
                      d={`M${35 + t * 15},65 Q${30 + t * 15},110 ${25 + t * 15},150 Q${20 + t * 15},180 ${30 + t * 15},200`}
                      stroke={`hsla(${jelly.hue}, 60%, 75%, 0.4)`}
                      strokeWidth="1.5"
                      fill="none"
                      strokeLinecap="round"
                      style={{
                        animation: `tentacleFlow ${jelly.pulseSpeed * 1.2}s ease-in-out infinite`,
                        animationDelay: `${t * 0.15}s`,
                      }}
                    />
                  ))}
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Subtle ambient glow - underwater feel */}
      <div className="absolute top-1/3 -left-32 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 -right-32 w-56 h-56 bg-purple-500/5 rounded-full blur-3xl" />

      {/* Hero Content - Uses HeroDesigns component */}
      <HeroDesigns
        design={heroDesign}
        scrollToProjects={scrollToProjects}
        scrollToAbout={scrollToAbout}
      />

      {/* Scroll Arrow */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <button
          onClick={scrollToAbout}
          className="text-white hover:text-cyan-300 transition-colors duration-300"
        >
          <ChevronDown size={32} />
        </button>
      </div>

      {/* CSS for animations */}
      <style>{`
        .jelly-swim {
          will-change: transform;
        }

        /* Lifelike swimming - gentle wave pattern as it moves across */
        @keyframes jellyfishSwimRight {
          0% { transform: translateX(0) translateY(0); }
          10% { transform: translateX(12vw) translateY(-15px); }
          20% { transform: translateX(24vw) translateY(10px); }
          30% { transform: translateX(36vw) translateY(-20px); }
          40% { transform: translateX(48vw) translateY(5px); }
          50% { transform: translateX(60vw) translateY(-10px); }
          60% { transform: translateX(72vw) translateY(15px); }
          70% { transform: translateX(84vw) translateY(-5px); }
          80% { transform: translateX(96vw) translateY(10px); }
          90% { transform: translateX(108vw) translateY(-15px); }
          100% { transform: translateX(120vw) translateY(0); }
        }

        @keyframes jellyfishSwimLeft {
          0% { transform: translateX(0) translateY(0); }
          10% { transform: translateX(-12vw) translateY(-15px); }
          20% { transform: translateX(-24vw) translateY(10px); }
          30% { transform: translateX(-36vw) translateY(-20px); }
          40% { transform: translateX(-48vw) translateY(5px); }
          50% { transform: translateX(-60vw) translateY(-10px); }
          60% { transform: translateX(-72vw) translateY(15px); }
          70% { transform: translateX(-84vw) translateY(-5px); }
          80% { transform: translateX(-96vw) translateY(10px); }
          90% { transform: translateX(-108vw) translateY(-15px); }
          100% { transform: translateX(-120vw) translateY(0); }
        }

        /* More organic bobbing - like breathing/pulsing upward */
        @keyframes jellyfishBob {
          0% { transform: translateY(0); }
          15% { transform: translateY(-8px); }
          30% { transform: translateY(-18px); }
          45% { transform: translateY(-22px); }
          60% { transform: translateY(-15px); }
          75% { transform: translateY(-5px); }
          100% { transform: translateY(0); }
        }

        /* Propulsion pulse - quick contract, slow release */
        @keyframes jellyfishPulse {
          0% { transform: translateY(0); }
          20% { transform: translateY(-15px); }
          40% { transform: translateY(-18px); }
          100% { transform: translateY(0); }
        }

        /* Bell pulse - quick squeeze, slow expand */
        @keyframes bellPulse {
          0% { transform: scale(1, 1); }
          20% { transform: scale(0.85, 1.12); }
          40% { transform: scale(0.88, 1.08); }
          100% { transform: scale(1, 1); }
        }

        /* Tentacles flowing more naturally */
        @keyframes tentacleFlow {
          0% { transform: rotate(0deg) scaleY(1); }
          25% { transform: rotate(4deg) scaleY(0.97); }
          50% { transform: rotate(-3deg) scaleY(1.02); }
          75% { transform: rotate(2deg) scaleY(0.98); }
          100% { transform: rotate(0deg) scaleY(1); }
        }

        @keyframes fishSwimRight {
          from { transform: translateX(0); }
          to { transform: translateX(110vw); }
        }

        @keyframes fishSwimLeft {
          from { transform: translateX(0); }
          to { transform: translateX(-110vw); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
