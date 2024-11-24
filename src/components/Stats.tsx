import React from 'react';
import StatCard from './StatCard';

export default function Stats() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-violet-500/10 to-fuchsia-500/10 blur-3xl" />
      <div className="container mx-auto px-6 relative">
        <div className="grid md:grid-cols-4 gap-12 text-center">
          <StatCard number="10k+" label="Équipes Innovantes" />
          <StatCard number="99.99%" label="Disponibilité" />
          <StatCard number="500+" label="Intégrations IA" />
          <StatCard number="4.9/5" label="Satisfaction Client" />
        </div>
      </div>
    </section>
  );
}