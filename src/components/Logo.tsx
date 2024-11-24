import React from 'react';
import { Flame } from 'lucide-react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center gap-2 group relative">
      <div className="relative w-8 h-8 sm:w-10 sm:h-10">
        {/* Animated Flames */}
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute inset-0 animate-float"
            style={{
              animationDelay: `${-i * 0.5}s`,
              zIndex: 3 - i
            }}
          >
            <Flame 
              className={`w-full h-full text-white opacity-${70 - i * 20} animate-pulse-soft`}
              style={{ filter: `blur(${i * 1}px)` }}
            />
          </div>
        ))}
        
        {/* Glow Effects */}
        <div className="absolute inset-0 bg-violet-500/30 blur-xl animate-glow" />
        <div className="absolute inset-0 bg-fuchsia-500/30 blur-lg animate-pulse-soft" 
             style={{ animationDelay: '-1s' }} />
      </div>
      
      {/* Text */}
      <span className="text-lg sm:text-2xl font-black tracking-tight heading-gradient animate-text-shimmer">
        COLLABA
      </span>

      {/* Hover Effects */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-500/20 to-fuchsia-500/20 blur-2xl animate-pulse-soft" />
      </div>
    </div>
  );
};

export default Logo;