import React from 'react';
import { Brain, MessageSquare, Sparkles } from 'lucide-react';
import FeatureLink from './FeatureLink';

const features = [
  {
    icon: <Brain className="w-8 h-8 text-violet-400" />,
    title: "Assistant Personnel",
    description: "Un assistant IA disponible 24/7 pour répondre à vos questions",
    path: "/features/ai-assistant",
    feature: "aiAssistant"
  },
  {
    icon: <Sparkles className="w-8 h-8 text-violet-400" />,
    title: "Apprentissage Continu",
    description: "S'adapte à votre façon de travailler et s'améliore en continu",
    path: "/features/learning",
    feature: "learning"
  },
  {
    icon: <MessageSquare className="w-8 h-8 text-violet-400" />,
    title: "Suggestions Intelligentes",
    description: "Recommandations contextuelles basées sur votre activité",
    path: "/features/suggestions",
    feature: "suggestions"
  }
];

export default function FeaturesSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureLink
              key={index}
              to={feature.path}
              feature={feature.feature}
              className="group"
            >
              <div className="card hover:scale-105 transition-transform duration-300">
                <div className="bg-violet-500/10 p-4 rounded-xl w-16 h-16 flex items-center justify-center mb-4 group-hover:bg-violet-500/20">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            </FeatureLink>
          ))}
        </div>
      </div>
    </section>
  );
}