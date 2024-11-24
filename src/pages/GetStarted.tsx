import React from 'react';
import { ArrowRight, Check, Zap } from 'lucide-react';

export default function GetStarted() {
  return (
    <div className="min-h-screen bg-mesh p-8 pt-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block bg-purple-500/10 text-purple-400 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Zap className="w-4 h-4 inline-block mr-2" />
            14 JOURS D'ESSAI GRATUIT
          </span>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text mb-4">
            Commencez Votre Voyage vers le Futur
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Configuration simple en moins de 2 minutes. Aucune carte bancaire requise.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="glass-effect rounded-xl p-8">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Nom de l'entreprise</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-white/5 rounded-lg border border-white/10 focus:ring-2 focus:ring-purple-500 outline-none"
                  placeholder="Votre entreprise"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email professionnel</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-white/5 rounded-lg border border-white/10 focus:ring-2 focus:ring-purple-500 outline-none"
                  placeholder="vous@entreprise.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Mot de passe</label>
                <input
                  type="password"
                  className="w-full px-4 py-3 bg-white/5 rounded-lg border border-white/10 focus:ring-2 focus:ring-purple-500 outline-none"
                  placeholder="8 caractères minimum"
                />
              </div>
              <button type="submit" className="w-full btn-primary">
                Créer mon compte
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </form>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6">Tout ce qui est inclus :</h2>
            <ul className="space-y-4">
              {[
                "Accès complet à toutes les fonctionnalités",
                "Nombre d'utilisateurs illimité",
                "Support prioritaire 24/7",
                "Intégrations illimitées",
                "Stockage cloud 100 Go",
                "Sécurité de niveau entreprise"
              ].map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="bg-purple-500/10 p-1 rounded-full">
                    <Check className="w-4 h-4 text-purple-400" />
                  </div>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}