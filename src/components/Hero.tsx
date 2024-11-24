import React from 'react';
import { ArrowRight, Zap, Shield, Award, Users, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedButton from './AnimatedButton';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 px-4">
      <div className="container max-w-7xl">
        <div className="flex flex-col items-center text-center">
          {/* Main Title */}
          <div className="relative mb-6">
            <h1 className="text-5xl xs:text-6xl sm:text-7xl md:text-8xl font-black tracking-tight heading-gradient animate-shimmer">
              COLLABA
            </h1>
            <div className="absolute -inset-x-10 -bottom-10 bg-gradient-to-r from-violet-500/20 via-fuchsia-500/20 to-violet-500/20 h-px blur-sm" />
          </div>

          {/* Subtitle */}
          <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-white/90 max-w-3xl">
            Façonnons ensemble le futur du travail collaboratif
          </h2>

          {/* Value Proposition */}
          <p className="text-base xs:text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl">
            Transformez votre équipe avec une IA qui comprend vraiment vos besoins.
            <span className="text-violet-400 font-bold"> Réduisez de 70% les tâches répétitives</span> et
            <span className="text-fuchsia-400 font-bold"> multipliez votre productivité par 3</span>.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col xs:flex-row gap-4 mb-12 w-full xs:w-auto">
            <Link to="/get-started" className="group w-full xs:w-auto">
              <AnimatedButton variant="primary">
                Démarrer Gratuitement
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </AnimatedButton>
            </Link>
            <Link to="/demo" className="group w-full xs:w-auto">
              <AnimatedButton variant="secondary">
                <Zap className="w-5 h-5" />
                Voir la Démo
              </AnimatedButton>
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-3 xs:gap-6 mb-8">
            <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-3 py-1.5 xs:px-4 xs:py-2 rounded-full">
              <Shield className="w-4 h-4 text-green-400" />
              <span className="text-xs xs:text-sm">ISO 27001</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-3 py-1.5 xs:px-4 xs:py-2 rounded-full">
              <Award className="w-4 h-4 text-yellow-400" />
              <span className="text-xs xs:text-sm">Leader Gartner</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-3 py-1.5 xs:px-4 xs:py-2 rounded-full">
              <Users className="w-4 h-4 text-blue-400" />
              <span className="text-xs xs:text-sm">50,000+ Users</span>
            </div>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-2 xs:gap-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 xs:w-5 xs:h-5 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <span className="text-base xs:text-lg font-bold">4.9/5</span>
            <span className="text-sm xs:text-base text-gray-400">(2,500+ avis)</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;