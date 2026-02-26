import { useState, useEffect, useCallback, useRef } from 'react';

interface Bubble {
  id: number;
  x: number;
  size: number;
  duration: number;
  delay: number;
  isCyan: boolean;
}

// Create a single bubble
const createBubble = (id: number, isInitial: boolean = false): Bubble => ({
  id,
  x: Math.random() * 100,
  size: Math.random() * 12 + 6, // 6-18px
  duration: Math.random() * 40 + 50, // 50-90s to travel full page height
  delay: isInitial ? Math.random() * -40 : 0, // Initial bubbles start mid-animation
  isCyan: Math.random() > 0.5,
});

const BubbleBackground = () => {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);
  const [, setNextId] = useState(0);
  const [pageHeight, setPageHeight] = useState(5000); // Default tall height
  const containerRef = useRef<HTMLDivElement>(null);

  // Remove bubble when animation ends
  const removeBubble = useCallback((id: number) => {
    setBubbles(prev => prev.filter(b => b.id !== id));
  }, []);

  // Track document height
  useEffect(() => {
    const updateHeight = () => {
      const height = Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        5000
      );
      setPageHeight(height);
    };

    updateHeight();
    window.addEventListener('resize', updateHeight);

    // Check periodically as content might load dynamically
    const interval = setInterval(updateHeight, 2000);

    return () => {
      window.removeEventListener('resize', updateHeight);
      clearInterval(interval);
    };
  }, []);

  // Spawn bubbles
  useEffect(() => {
    // Spawn initial bubbles spread across the entire page
    const initial: Bubble[] = [];
    for (let i = 0; i < 40; i++) {
      initial.push(createBubble(i, true));
    }
    setBubbles(initial);
    setNextId(40);

    // Spawn new bubble every 0.6-1.2 seconds
    const spawnInterval = setInterval(() => {
      setNextId(prev => {
        const newBubble = createBubble(prev, false);
        setBubbles(current => [...current, newBubble]);
        return prev + 1;
      });
    }, 600 + Math.random() * 600);

    return () => clearInterval(spawnInterval);
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-x-0 top-0 pointer-events-none z-[5] overflow-hidden"
      style={{ height: `${pageHeight}px` }}
    >
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className={`absolute rounded-full border ${
            bubble.isCyan
              ? 'bg-cyan-400/30 border-cyan-400/40'
              : 'bg-purple-400/25 border-purple-400/35'
          }`}
          style={{
            left: `${bubble.x}%`,
            bottom: '-20px',
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            animation: `bubbleRiseAbsolute ${bubble.duration}s linear forwards`,
            animationDelay: `${bubble.delay}s`,
            ['--page-height' as string]: `${pageHeight}px`,
          }}
          onAnimationEnd={() => removeBubble(bubble.id)}
        />
      ))}

      <style>{`
        @keyframes bubbleRiseAbsolute {
          0% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          2% {
            opacity: 0.7;
          }
          10% {
            transform: translateY(calc(var(--page-height) * -0.1)) translateX(8px);
          }
          20% {
            transform: translateY(calc(var(--page-height) * -0.2)) translateX(-6px);
          }
          30% {
            transform: translateY(calc(var(--page-height) * -0.3)) translateX(10px);
          }
          40% {
            transform: translateY(calc(var(--page-height) * -0.4)) translateX(-4px);
          }
          50% {
            transform: translateY(calc(var(--page-height) * -0.5)) translateX(7px);
          }
          60% {
            transform: translateY(calc(var(--page-height) * -0.6)) translateX(-8px);
          }
          70% {
            transform: translateY(calc(var(--page-height) * -0.7)) translateX(5px);
          }
          80% {
            transform: translateY(calc(var(--page-height) * -0.8)) translateX(-6px);
          }
          90% {
            transform: translateY(calc(var(--page-height) * -0.9)) translateX(4px);
          }
          97% {
            opacity: 0.7;
          }
          100% {
            transform: translateY(calc(var(--page-height) * -1.05)) translateX(0);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default BubbleBackground;
