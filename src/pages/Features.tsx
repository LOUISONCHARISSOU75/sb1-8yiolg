import React from 'react';
import { Brain, Globe, Shield, Zap, MessageSquare, Calendar, FileText, Bot } from 'lucide-react';
import FeatureCard from '../components/FeatureCard';

export default function Features() {
  const features = [
    {
      icon: <Brain className="w-8 h-8 text-emerald-400" />,
      title: "IA Cognitive Avancée",
      description: "Assistant virtuel qui apprend et s'adapte à votre façon de travailler."
    },
    {
      icon: <Globe className="w-8 h-8 text-emerald-400" />,
      title: "Collaboration Temps Réel",
      description: "Éditez et communiquez instantanément avec votre équipe."
    },
    {
      icon: <Shield className="w-8 h-8 text-emerald-400" />,
      title: "Sécurité Quantique",
      description: "Protection de nouvelle génération avec chiffrement quantique."
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-emerald-400" />,
      title: "Chat Intelligent",
      description: "Communication contextuelle avec suggestions IA."
    },
    {
      icon: <Calendar className="w-8 h-8 text-emerald-400" />,
      title: "Planning Optimisé",
      description: "Organisation intelligente de votre temps et de vos réunions."
    },
    {
      icon: <FileText className="w-8 h-8 text-emerald-400" />,
      title: "Documents Collaboratifs",
      description: "Édition en temps réel avec contrôle de versions."
    },
    {
      icon: <Bot className="w-8 h-8 text-emerald-400" />,
      title: "Assistant IA",
      description: "Votre copilote personnel pour chaque tâche."
    },
    {
      icon: <Zap className="w-8 h-8 text-emerald-400" />,
      title: "Automatisation",
      description: "Workflows intelligents et actions automatisées."
    }
  ];

  return (
    <div className="container mx-auto px-6 py-32">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 text-transparent bg-clip-text mb-4">
          Fonctionnalités Révolutionnaires
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Découvrez comment Collaba transforme la collaboration d'équipe avec des outils de nouvelle génération.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </div>
  );
}