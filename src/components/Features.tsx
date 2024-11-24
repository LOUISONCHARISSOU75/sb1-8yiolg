import React from 'react';
import { Brain, Globe, Shield, Zap, MessageSquare, Calendar } from 'lucide-react';
import FeatureCard from './FeatureCard';

export default function Features() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-violet-500/5 to-fuchsia-500/5 blur-3xl" />
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16">
          <span className="inline-block bg-violet-500/10 text-violet-400 px-4 py-2 rounded-full text-sm font-medium mb-4">
            TRANSFORMEZ VOTRE TRAVAIL
          </span>
          <h2 className="text-4xl font-bold heading-gradient mb-4">
            L'Intelligence au Service de Votre Équipe
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Des outils révolutionnaires qui s'adaptent à votre façon de travailler, 
            propulsés par une IA qui apprend et évolue avec vous.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard 
            icon={<Brain className="w-8 h-8 text-violet-400" />}
            title="IA Cognitive Avancée"
            description="Réduisez de 70% le temps passé sur les tâches répétitives grâce à notre IA qui apprend vos habitudes."
          />
          <FeatureCard 
            icon={<MessageSquare className="w-8 h-8 text-violet-400" />}
            title="Communication Instantanée"
            description="Échangez en temps réel avec votre équipe, avec traduction automatique en 50+ langues."
          />
          <FeatureCard 
            icon={<Calendar className="w-8 h-8 text-violet-400" />}
            title="Planning Intelligent"
            description="L'IA trouve automatiquement les meilleurs créneaux pour vos réunions, en tenant compte des fuseaux horaires."
          />
        </div>

        <div className="mt-16 text-center">
          <button className="btn-primary">
            Explorer Toutes les Fonctionnalités
          </button>
        </div>
      </div>
    </section>
  );
}