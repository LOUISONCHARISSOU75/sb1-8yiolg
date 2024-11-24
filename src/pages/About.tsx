import React from 'react';
import { Users, Globe, Award } from 'lucide-react';

export default function About() {
  return (
    <div className="container mx-auto px-6 py-32">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 text-transparent bg-clip-text mb-4">
          Notre Vision du Futur
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Nous créons les outils qui permettent aux équipes de repousser les limites de l'innovation.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <div className="text-center">
          <div className="bg-emerald-500/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
            <Users className="w-8 h-8 text-emerald-400" />
          </div>
          <h3 className="text-xl font-semibold mb-2">10,000+ Équipes</h3>
          <p className="text-gray-400">Font confiance à Collaba pour leur collaboration quotidienne</p>
        </div>
        <div className="text-center">
          <div className="bg-emerald-500/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
            <Globe className="w-8 h-8 text-emerald-400" />
          </div>
          <h3 className="text-xl font-semibold mb-2">20+ Pays</h3>
          <p className="text-gray-400">Utilisent notre plateforme à travers le monde</p>
        </div>
        <div className="text-center">
          <div className="bg-emerald-500/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
            <Award className="w-8 h-8 text-emerald-400" />
          </div>
          <h3 className="text-xl font-semibold mb-2">98% Satisfaction</h3>
          <p className="text-gray-400">De nos utilisateurs recommandent Collaba</p>
        </div>
      </div>

      <div className="bg-gradient-to-r from-emerald-600/20 to-cyan-600/20 rounded-3xl p-12 text-center backdrop-blur-xl">
        <h2 className="text-3xl font-bold mb-6">Rejoignez l'Aventure</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Nous recherchons des talents passionnés pour construire le futur de la collaboration.
        </p>
        <button className="bg-gradient-to-r from-emerald-400 to-cyan-400 text-black px-8 py-4 rounded-full font-medium hover:opacity-90 transition-opacity">
          Voir Nos Offres
        </button>
      </div>
    </div>
  );
}