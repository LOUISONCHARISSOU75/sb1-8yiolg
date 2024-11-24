import React, { CSSProperties } from 'react';

interface PurpleFlameProps {
  className?: string;
  style?: CSSProperties;
}

export default function PurpleFlame({ className = '', style = {} }: PurpleFlameProps) {
  return (
    <div className={`purple-flame group ${className}`} style={style}>
      <div className="relative w-full h-full">
        {/* Core Flame */}
        <div className="absolute inset-0 bg-gradient-to-t from-violet-600 to-fuchsia-400 animate-pulse-soft" />
        
        {/* Inner Glow */}
        <div className="absolute inset-0 bg-gradient-to-t from-violet-400 to-transparent opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
        
        {/* Outer Glow */}
        <div className="absolute -inset-2 bg-violet-500/30 blur-xl animate-pulse-soft" style={{ animationDelay: '-0.5s' }} />
        
        {/* Particles */}
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-violet-300 rounded-full animate-float"
            style={{
              left: `${50 + (Math.random() - 0.5) * 20}%`,
              bottom: '100%',
              animationDelay: `${Math.random() * -2}s`,
              animationDuration: '3s'
            }}
          />
        ))}
      </div>
    </div>
  );
}