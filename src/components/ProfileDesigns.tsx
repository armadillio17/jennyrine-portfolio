// Profile Picture Design Options
// Various modern styles - not limited to circular or jellyfish themes

interface ProfileDesignProps {
  design?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
  imageSrc: string;
  alt: string;
}

const ProfileDesigns = ({ design = 1, imageSrc, alt }: ProfileDesignProps) => {
  // Design 1: Hexagon with gradient border
  if (design === 1) {
    return (
      <div className="flex justify-center">
        <div className="relative">
          {/* Glow behind */}
          <div className="absolute inset-0 scale-110 blur-2xl opacity-50">
            <div
              className="w-full h-full"
              style={{
                background: 'linear-gradient(135deg, hsla(190, 80%, 60%, 0.5), hsla(280, 60%, 60%, 0.5))',
                clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
              }}
            />
          </div>

          {/* Hexagon frame */}
          <div
            className="relative w-52 h-60 md:w-60 md:h-68"
            style={{
              clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
              background: 'linear-gradient(135deg, hsla(190, 80%, 60%, 0.8), hsla(280, 60%, 60%, 0.8))',
              padding: '4px',
            }}
          >
            <div
              className="w-full h-full"
              style={{
                clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                overflow: 'hidden',
              }}
            >
              <img
                src={imageSrc}
                alt={alt}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Corner accents */}
          <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-cyan-400 rotate-45" />
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-purple-400 rotate-45" />
        </div>
      </div>
    );
  }

  // Design 2: Diamond/Rhombus shape with floating effect
  if (design === 2) {
    return (
      <div className="flex justify-center">
        <div className="relative" style={{ animation: 'floatGentle 4s ease-in-out infinite' }}>
          {/* Shadow */}
          <div
            className="absolute top-8 left-1/2 -translate-x-1/2 w-40 h-10 bg-black/20 blur-xl rounded-full"
            style={{ animation: 'shadowPulse 4s ease-in-out infinite' }}
          />

          {/* Diamond frame */}
          <div
            className="relative w-48 h-48 md:w-56 md:h-56 rotate-45 overflow-hidden"
            style={{
              borderRadius: '24px',
              boxShadow: '0 20px 60px hsla(190, 80%, 40%, 0.3), 0 0 40px hsla(190, 80%, 60%, 0.2)',
              border: '3px solid hsla(190, 70%, 70%, 0.5)',
            }}
          >
            <img
              src={imageSrc}
              alt={alt}
              className="w-[141%] h-[141%] object-cover -rotate-45 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            />
          </div>

          {/* Decorative dots */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex gap-1">
            <div className="w-2 h-2 rounded-full bg-cyan-400" />
            <div className="w-2 h-2 rounded-full bg-cyan-300" />
            <div className="w-2 h-2 rounded-full bg-cyan-400" />
          </div>

          <style>{`
            @keyframes floatGentle {
              0%, 100% { transform: translateY(0); }
              50% { transform: translateY(-10px); }
            }
            @keyframes shadowPulse {
              0%, 100% { transform: translateX(-50%) scale(1); opacity: 0.2; }
              50% { transform: translateX(-50%) scale(0.8); opacity: 0.1; }
            }
          `}</style>
        </div>
      </div>
    );
  }

  // Design 3: Rounded square with corner cuts (modern tech style)
  if (design === 3) {
    return (
      <div className="flex justify-center">
        <div className="relative group">
          {/* Animated border */}
          <div
            className="absolute -inset-1 rounded-3xl opacity-75"
            style={{
              background: 'linear-gradient(90deg, #06b6d4, #8b5cf6, #06b6d4)',
              backgroundSize: '200% 100%',
              animation: 'borderFlow 3s linear infinite',
            }}
          />

          {/* Main container */}
          <div
            className="relative w-48 h-48 md:w-56 md:h-56 bg-blue-950 p-1"
            style={{
              borderRadius: '24px',
              clipPath: 'polygon(0 15%, 15% 0, 85% 0, 100% 15%, 100% 85%, 85% 100%, 15% 100%, 0 85%)',
            }}
          >
            <div
              className="w-full h-full overflow-hidden"
              style={{
                borderRadius: '20px',
                clipPath: 'polygon(0 15%, 15% 0, 85% 0, 100% 15%, 100% 85%, 85% 100%, 15% 100%, 0 85%)',
              }}
            >
              <img
                src={imageSrc}
                alt={alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          </div>

          {/* Corner brackets */}
          <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-cyan-400 rounded-tl-lg" />
          <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-cyan-400 rounded-tr-lg" />
          <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-purple-400 rounded-bl-lg" />
          <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-purple-400 rounded-br-lg" />

          <style>{`
            @keyframes borderFlow {
              0% { background-position: 0% 50%; }
              100% { background-position: 200% 50%; }
            }
          `}</style>
        </div>
      </div>
    );
  }

  // Design 4: Blob/organic shape
  if (design === 4) {
    return (
      <div className="flex justify-center">
        <div className="relative">
          {/* Animated blob background */}
          <div
            className="absolute -inset-4 opacity-40"
            style={{
              background: 'linear-gradient(135deg, hsla(190, 80%, 60%, 0.6), hsla(280, 60%, 60%, 0.6))',
              borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
              animation: 'blobMorph 8s ease-in-out infinite',
            }}
          />

          {/* Image with blob shape */}
          <div
            className="relative w-52 h-52 md:w-60 md:h-60 overflow-hidden"
            style={{
              borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
              animation: 'blobMorph 8s ease-in-out infinite',
              border: '3px solid hsla(190, 70%, 70%, 0.5)',
              boxShadow: '0 0 40px hsla(190, 80%, 60%, 0.3)',
            }}
          >
            <img
              src={imageSrc}
              alt={alt}
              className="w-full h-full object-cover"
            />
          </div>

          <style>{`
            @keyframes blobMorph {
              0%, 100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
              25% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
              50% { border-radius: 50% 60% 30% 60% / 30% 60% 70% 40%; }
              75% { border-radius: 60% 30% 60% 40% / 70% 40% 50% 60%; }
            }
          `}</style>
        </div>
      </div>
    );
  }

  // Design 5: Card style with offset border
  if (design === 5) {
    return (
      <div className="flex justify-center">
        <div className="relative">
          {/* Offset background card */}
          <div
            className="absolute top-3 left-3 w-48 h-56 md:w-56 md:h-64 rounded-2xl"
            style={{
              background: 'linear-gradient(135deg, hsla(190, 80%, 60%, 0.5), hsla(280, 60%, 60%, 0.5))',
            }}
          />

          {/* Main image card */}
          <div className="relative w-48 h-56 md:w-56 md:h-64 rounded-2xl overflow-hidden border-2 border-white/20 bg-blue-950">
            <img
              src={imageSrc}
              alt={alt}
              className="w-full h-full object-cover"
            />

            {/* Bottom gradient overlay */}
            <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-blue-950/80 to-transparent" />
          </div>

          {/* Accent line */}
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full" />
        </div>
      </div>
    );
  }

  // Design 6: Circle with orbital rings
  if (design === 6) {
    return (
      <div className="flex justify-center">
        <div className="relative w-64 h-64 md:w-72 md:h-72 flex items-center justify-center">
          {/* Orbital rings */}
          <div
            className="absolute w-full h-full rounded-full border border-cyan-400/30"
            style={{ animation: 'orbit 12s linear infinite' }}
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-cyan-400" />
          </div>

          <div
            className="absolute w-[85%] h-[85%] rounded-full border border-purple-400/30"
            style={{ animation: 'orbit 8s linear infinite reverse' }}
          >
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 rounded-full bg-purple-400" />
          </div>

          {/* Profile image */}
          <div
            className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden"
            style={{
              border: '3px solid hsla(190, 70%, 70%, 0.4)',
              boxShadow: '0 0 30px hsla(190, 80%, 60%, 0.3), inset 0 0 30px hsla(190, 80%, 60%, 0.1)',
            }}
          >
            <img
              src={imageSrc}
              alt={alt}
              className="w-full h-full object-cover"
            />
          </div>

          <style>{`
            @keyframes orbit {
              from { transform: rotate(0deg); }
              to { transform: rotate(360deg); }
            }
          `}</style>
        </div>
      </div>
    );
  }

  // Design 7: Polaroid/instant photo style
  if (design === 7) {
    return (
      <div className="flex justify-center">
        <div
          className="relative bg-white/95 p-3 pb-12 rounded-sm shadow-2xl"
          style={{
            transform: 'rotate(-3deg)',
            boxShadow: '0 20px 60px rgba(0,0,0,0.3), 0 0 40px hsla(190, 80%, 60%, 0.2)',
          }}
        >
          {/* Photo */}
          <div className="w-44 h-52 md:w-52 md:h-60 overflow-hidden bg-gray-200">
            <img
              src={imageSrc}
              alt={alt}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Decorative tape */}
          <div
            className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-6 bg-cyan-400/40 backdrop-blur-sm"
            style={{ transform: 'rotate(2deg)' }}
          />

          {/* Subtle corner wear */}
          <div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-bl from-white/50 to-transparent" />
        </div>
      </div>
    );
  }

  // Design 8: Minimal line frame
  if (design === 8) {
    return (
      <div className="flex justify-center">
        <div className="relative">
          {/* Outer frame lines */}
          <div className="absolute -inset-4">
            {/* Top line */}
            <div className="absolute top-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
            {/* Bottom line */}
            <div className="absolute bottom-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent" />
            {/* Left line */}
            <div className="absolute left-0 top-4 bottom-4 w-px bg-gradient-to-b from-transparent via-cyan-400 to-transparent" />
            {/* Right line */}
            <div className="absolute right-0 top-4 bottom-4 w-px bg-gradient-to-b from-transparent via-purple-400 to-transparent" />

            {/* Corner dots */}
            <div className="absolute top-0 left-0 w-2 h-2 rounded-full bg-cyan-400" />
            <div className="absolute top-0 right-0 w-2 h-2 rounded-full bg-cyan-400" />
            <div className="absolute bottom-0 left-0 w-2 h-2 rounded-full bg-purple-400" />
            <div className="absolute bottom-0 right-0 w-2 h-2 rounded-full bg-purple-400" />
          </div>

          {/* Image */}
          <div className="relative w-48 h-48 md:w-56 md:h-56 overflow-hidden rounded-lg">
            <img
              src={imageSrc}
              alt={alt}
              className="w-full h-full object-cover"
            />

            {/* Subtle vignette */}
            <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(0,0,0,0.3)]" />
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default ProfileDesigns;
