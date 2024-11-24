import React, { ReactNode } from 'react';
import { Loader } from 'lucide-react';

interface AnimatedButtonProps {
  children: ReactNode;
  onClick?: () => void;
  loading?: boolean;
  disabled?: boolean;
  variant?: 'primary' | 'secondary';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

export default function AnimatedButton({
  children,
  onClick,
  loading = false,
  disabled = false,
  variant = 'primary',
  className = '',
  type = 'button'
}: AnimatedButtonProps) {
  const baseStyles = "relative overflow-hidden rounded-full font-medium transition-all duration-300";
  const variantStyles = {
    primary: "bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white",
    secondary: "border border-violet-500/20 hover:bg-violet-500/10 text-white"
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`
        ${baseStyles}
        ${variantStyles[variant]}
        ${loading || disabled ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105'}
        ${className}
      `}
    >
      <span className="relative z-10 flex items-center justify-center gap-2 px-6 py-3">
        {loading ? (
          <>
            <Loader className="w-5 h-5 animate-spin" />
            Chargement...
          </>
        ) : (
          children
        )}
      </span>
      
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-fuchsia-600 opacity-0 group-hover:opacity-100 transition-opacity" />
      
      {/* Glow Effect */}
      <div className="absolute -inset-px bg-gradient-to-r from-violet-400 to-fuchsia-400 rounded-full blur opacity-0 group-hover:opacity-30 transition-opacity" />
    </button>
  );
}