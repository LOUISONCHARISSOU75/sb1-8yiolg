import React from 'react';
import Hero from '../components/Hero';
import FeaturesGrid from '../components/FeaturesGrid';
import Stats from '../components/Stats';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';
import TrustBadges from '../components/TrustBadges';
import AnimatedBackground from '../components/AnimatedBackground';

const Home: React.FC = () => {
  return (
    <main className="relative overflow-hidden">
      <AnimatedBackground />
      <div className="relative z-10">
        <Hero />
        <TrustBadges />
        <FeaturesGrid />
        <Stats />
        <Testimonials />
        <CTA />
      </div>
    </main>
  );
};

export default Home;