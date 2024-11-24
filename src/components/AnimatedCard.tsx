import React, { ReactNode } from 'react';

interface AnimatedCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function AnimatedCard({ children, className = '', delay = 0 }: AnimatedCardProps) {
  return (
    <div 
      className={`
        glass-effect rounded-xl p-6 
        hover:scale-105 hover:shadow-lg hover:shadow-violet-500/25
        transition-all duration-300
        animate-slide-up
        ${className}
      `}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="relative z-10">
        {children}
      </div>
      
      {/* Animated Border */}
      <div className="absolute inset-0 bg-gradient-to-r from-violet-500/20 to-fuchsia-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
      
      {/* Hover Glow */}
      <div className="absolute -inset-px bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-xl opacity-0 group-hover:opacity-20 blur-sm transition-opacity" />
    </div>
  );
}