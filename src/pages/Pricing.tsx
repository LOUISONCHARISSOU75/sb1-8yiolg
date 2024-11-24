import React from 'react';
import { Shield, Zap, Star, Check, ArrowRight } from 'lucide-react';

const plans = [
  {
    name: "Starter",
    price: "0",
    originalPrice: null,
    description: "Pour les petites équipes qui démarrent",
    promotion: "Gratuit pour toujours",
    features: [
      "Jusqu'à 10 membres",
      "2 projets",
      "Chat en temps réel",
      "5 Go stockage",
      "Support communautaire"
    ]
  },
  {
    name: "Pro",
    price: "29",
    originalPrice: "49",
    description: "Pour les équipes en croissance",
    promotion: "40% de réduction - Offre limitée !",
    features: [
      "Membres illimités",
      "Projets illimités",
      "Toutes les intégrations",
      "100 Go stockage",
      "Support prioritaire",
      "Analytics avancés",
      "Contrôles admin"
    ],
    isPopular: true,
    badge: "MEILLEURE OFFRE"
  },
  {
    name: "Enterprise",
    price: "89",
    originalPrice: "149",
    description: "Pour les grandes organisations",
    promotion: "2 mois gratuits si paiement annuel",
    features: [
      "Tout le plan Pro",
      "Stockage illimité",
      "API dédiée",
      "SSO & SCIM",
      "SLA garanti",
      "Support 24/7",
      "Formation dédiée"
    ],
    badge: "PERSONNALISABLE"
  }
];

export default function Pricing() {
  return (
    <div className="min-h-screen bg-dark py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block bg-violet-500/10 text-violet-400 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Zap className="w-4 h-4 inline-block mr-2" />
            Offres Spéciales
          </span>
          <h1 className="text-4xl font-bold heading-gradient mb-4">
            Choisissez le Plan Parfait pour Votre Équipe
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Profitez de nos offres de lancement avec jusqu'à 40% de réduction !
          </p>
        </div>

        {/* Promotion Banner */}
        <div className="max-w-3xl mx-auto mb-16 bg-gradient-to-r from-violet-500/20 to-fuchsia-500/20 rounded-2xl p-6 text-center relative overflow-hidden">
          <div className="absolute inset-0 cyber-grid opacity-20" />
          <Star className="w-8 h-8 text-yellow-400 mx-auto mb-4 animate-pulse" />
          <h3 className="text-xl font-bold mb-2">Offre de Lancement 🚀</h3>
          <p className="text-gray-300">
            Souscrivez maintenant et obtenez <span className="text-violet-400 font-bold">3 mois à -50%</span> + 
            <span className="text-violet-400 font-bold"> 10,000 crédits IA gratuits</span>
          </p>
          <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-violet-500/20 blur-3xl" />
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <div key={index} className={`card relative group ${
              plan.isPopular ? 'border-violet-500/20 shadow-[0_0_30px_rgba(139,92,246,0.2)]' : ''
            }`}>
              {plan.badge && (
                <span className="absolute -top-4 left-1/2 transform -translate-x-1/2 
                               bg-gradient-to-r from-violet-500 to-fuchsia-500 
                               text-white px-4 py-1 rounded-full text-sm font-medium">
                  {plan.badge}
                </span>
              )}
              
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className="text-gray-400 mb-4">{plan.description}</p>
              
              {plan.promotion && (
                <div className="bg-violet-500/10 text-violet-400 px-3 py-1 rounded-full text-sm inline-block mb-4">
                  {plan.promotion}
                </div>
              )}
              
              <div className="mb-6">
                {plan.originalPrice && (
                  <span className="text-gray-500 line-through mr-2">{plan.originalPrice}€</span>
                )}
                <span className="text-4xl font-bold heading-gradient">
                  {plan.price}€
                </span>
                <span className="text-gray-400">/utilisateur/mois</span>
              </div>

              <button className={`w-full btn-primary group mb-8 ${
                plan.isPopular ? 'animate-pulse-slow' : ''
              }`}>
                Commencer Maintenant
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>

              <ul className="space-y-3">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-violet-400" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Hover Effect */}
              <div className="absolute inset-0 border border-violet-500/0 rounded-xl transition-all duration-300 group-hover:border-violet-500/20" />
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="flex items-center justify-center gap-4 mb-8">
            <Shield className="w-5 h-5 text-violet-400" />
            <p className="text-gray-400">
              Garantie satisfait ou remboursé pendant 30 jours
            </p>
          </div>
          <p className="text-gray-400">
            Besoin d'un plan personnalisé ? {' '}
            <a href="#contact" className="text-violet-400 hover:text-violet-300 transition-colors">
              Contactez notre équipe commerciale
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}