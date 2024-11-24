import React from 'react';
import { Shield, Award, Users, Star, CheckCircle } from 'lucide-react';

const badges = [
  {
    icon: <Shield className="w-6 h-6 text-green-400" />,
    title: "Sécurité Enterprise",
    description: "Certifié ISO 27001"
  },
  {
    icon: <Award className="w-6 h-6 text-yellow-400" />,
    title: "Leader du Marché",
    description: "Gartner Magic Quadrant"
  },
  {
    icon: <Users className="w-6 h-6 text-blue-400" />,
    title: "Communauté Active",
    description: "50,000+ utilisateurs"
  },
  {
    icon: <Star className="w-6 h-6 text-purple-400" />,
    title: "Hautement Noté",
    description: "4.9/5 satisfaction"
  },
  {
    icon: <CheckCircle className="w-6 h-6 text-emerald-400" />,
    title: "Support Premium",
    description: "24/7 disponible"
  }
];

export default function TrustBadges() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {badges.map((badge, index) => (
            <div 
              key={index}
              className="glass-effect rounded-xl p-6 text-center hover:scale-105 transition-transform"
            >
              <div className="flex justify-center mb-4">
                {badge.icon}
              </div>
              <h3 className="font-semibold mb-1">{badge.title}</h3>
              <p className="text-sm text-gray-400">{badge.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}