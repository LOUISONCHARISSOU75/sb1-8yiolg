import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, Zap } from 'lucide-react';
import Logo from './Logo';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled || isOpen ? 'glass-effect py-2 sm:py-4' : 'bg-transparent py-4 sm:py-6'
    }`}>
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between">
          {/* Logo - Ajusté pour mobile */}
          <Link 
            to="/" 
            className="relative z-50 transform hover:scale-105 transition-transform duration-300 -ml-2 sm:ml-0"
            onClick={() => setIsOpen(false)}
          >
            <Logo />
          </Link>

          {/* Mobile Menu Button */}
          <button 
            className="relative z-50 p-2 md:hidden hover:bg-white/5 rounded-lg transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/features" className="nav-link">
              Fonctionnalités
            </Link>
            <Link to="/pricing" className="nav-link">
              Tarifs
            </Link>
            <Link to="/about" className="nav-link">
              À propos
            </Link>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Link to="/login" className="nav-link">
              Connexion
            </Link>
            <Link 
              to="/get-started" 
              className="btn-primary py-2 px-4"
            >
              Essai Gratuit
            </Link>
          </div>

          {/* Mobile Menu */}
          <div className={`fixed inset-0 bg-dark/95 backdrop-blur-xl transition-transform duration-300 md:hidden ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}>
            <div className="flex flex-col items-center justify-center min-h-screen gap-8 px-6">
              <Link 
                to="/features" 
                className="text-2xl font-bold hover:text-violet-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Fonctionnalités
              </Link>
              <Link 
                to="/pricing" 
                className="text-2xl font-bold hover:text-violet-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Tarifs
              </Link>
              <Link 
                to="/about" 
                className="text-2xl font-bold hover:text-violet-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                À propos
              </Link>
              <div className="flex flex-col gap-4 w-full mt-8">
                <Link 
                  to="/login" 
                  className="btn-secondary text-center"
                  onClick={() => setIsOpen(false)}
                >
                  Connexion
                </Link>
                <Link 
                  to="/get-started" 
                  className="btn-primary text-center"
                  onClick={() => setIsOpen(false)}
                >
                  Essai Gratuit
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}