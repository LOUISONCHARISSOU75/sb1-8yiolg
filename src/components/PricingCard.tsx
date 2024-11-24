import React from 'react';
import { Check } from 'lucide-react';

interface PricingCardProps {
  name: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
}

export default function PricingCard({ name, price, description, features, isPopular }: PricingCardProps) {
  return (
    <div className={`card relative ${isPopular ? 'border-violet-500/20 shadow-[0_0_30px_rgba(139,92,246,0.2)]' : ''}`}>
      {isPopular && (
        <span className="absolute -top-4 left-1/2 transform -translate-x-1/2 
                       bg-gradient-to-r from-violet-500 to-fuchsia-500 
                       text-white px-4 py-1 rounded-full text-sm font-medium">
          Plus Populaire
        </span>
      )}
      
      <h3 className="text-2xl font-bold mb-2">{name}</h3>
      <p className="text-gray-400 mb-4">{description}</p>
      
      <div className="mb-6">
        <span className="text-4xl font-bold heading-gradient">
          {price}€
        </span>
        <span className="text-gray-400">/utilisateur/mois</span>
      </div>

      <button className={`w-full py-3 px-6 rounded-lg font-medium mb-8 transition ${
        isPopular
          ? 'btn-primary'
          : 'btn-secondary'
      }`}>
        {isPopular ? 'Commencer Maintenant' : 'Essayer Gratuitement'}
      </button>

      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center space-x-3">
            <Check className="w-5 h-5 text-violet-400" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}