import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-blue-950 text-white py-8 relative overflow-hidden">
      {/* Subtle wave pattern at top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500/50 via-purple-500/50 to-cyan-500/50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-gray-400">
              © {new Date().getFullYear()} Jennyrine Palis Jr. All rights reserved.
            </p>
          </div>

          {/* <div className="flex items-center space-x-2 text-gray-400">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-cyan-400 fill-current animate-pulse" />
            <span>and lots of coffee</span>
          </div> */}
        </div>
      </div>

      {/* Decorative bubbles */}
      <div className="absolute bottom-2 left-10 w-2 h-2 rounded-full bg-cyan-400/20 animate-pulse" />
      <div className="absolute bottom-4 left-20 w-1.5 h-1.5 rounded-full bg-purple-400/20 animate-pulse" style={{ animationDelay: '0.5s' }} />
      <div className="absolute bottom-3 right-16 w-2 h-2 rounded-full bg-cyan-400/20 animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-5 right-32 w-1 h-1 rounded-full bg-purple-400/20 animate-pulse" style={{ animationDelay: '1.5s' }} />
    </footer>
  );
};

export default Footer;
