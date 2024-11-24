import React from 'react';

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Cyber Grid */}
      <div className="absolute inset-0 cyber-grid opacity-20 animate-pulse-soft" />
      
      {/* Energy Orbs */}
      {[...Array(5)].map((_, i) => (
        <div
          key={`orb-${i}`}
          className="absolute w-[40rem] h-[40rem] rounded-full animate-float"
          style={{
            background: `radial-gradient(circle, ${
              i % 2 ? 'rgba(139, 92, 246, 0.15)' : 'rgba(236, 72, 153, 0.15)'
            } 0%, transparent 70%)`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${-i * 2}s`,
            filter: 'blur(50px)',
            transform: `scale(${0.5 + Math.random() * 0.5})`
          }}
        />
      ))}

      {/* Matrix Rain Effect */}
      <div className="absolute inset-0 matrix-bg opacity-30" />

      {/* Floating Particles */}
      {[...Array(50)].map((_, i) => (
        <div
          key={`particle-${i}`}
          className="absolute w-1 h-1 bg-violet-400/30 rounded-full animate-float"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * -10}s`,
            animationDuration: `${6 + Math.random() * 4}s`,
            filter: 'blur(1px)'
          }}
        />
      ))}

      {/* Neon Lines */}
      {[...Array(20)].map((_, i) => (
        <div
          key={`line-${i}`}
          className="absolute h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent animate-pulse-soft"
          style={{
            top: `${i * 5}%`,
            left: 0,
            right: 0,
            animationDelay: `${i * 0.1}s`,
            transform: `rotate(${Math.random() * 5 - 2.5}deg)`
          }}
        />
      ))}

      {/* Cyber Glitch Effect */}
      <div className="absolute inset-0 animate-cyber-glitch opacity-30">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-500/10 via-fuchsia-500/10 to-violet-500/10" />
      </div>
    </div>
  );
}