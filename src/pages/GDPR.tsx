import React from 'react';
import { Shield, Lock, FileCheck, User } from 'lucide-react';

export default function GDPR() {
  return (
    <div className="min-h-screen bg-mesh p-8 pt-24">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text mb-4">
            Conformité RGPD
          </h1>
          <p className="text-xl text-gray-400">
            Comment nous respectons et protégeons vos droits selon le RGPD
          </p>
        </div>

        <div className="glass-effect rounded-xl p-8 space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-6">Vos Droits RGPD</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-white/5 rounded-lg">
                <User className="w-6 h-6 text-purple-400 mb-4" />
                <h3 className="font-semibold mb-2">Droit d'Accès</h3>
                <p className="text-gray-400">
                  Accédez à toutes vos données personnelles stockées
                </p>
              </div>
              <div className="p-6 bg-white/5 rounded-lg">
                <Shield className="w-6 h-6 text-purple-400 mb-4" />
                <h3 className="font-semibold mb-2">Droit à l'Oubli</h3>
                <p className="text-gray-400">
                  Demandez la suppression de vos données
                </p>
              </div>
              <div className="p-6 bg-white/5 rounded-lg">
                <Lock className="w-6 h-6 text-purple-400 mb-4" />
                <h3 className="font-semibold mb-2">Droit à la Portabilité</h3>
                <p className="text-gray-400">
                  Exportez vos données dans un format standard
                </p>
              </div>
              <div className="p-6 bg-white/5 rounded-lg">
                <FileCheck className="w-6 h-6 text-purple-400 mb-4" />
                <h3 className="font-semibold mb-2">Droit de Rectification</h3>
                <p className="text-gray-400">
                  Modifiez vos données personnelles à tout moment
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Nos Engagements</h2>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-purple-400 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Protection par Design</h3>
                  <p>La protection des données est intégrée dès la conception de nos services</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Lock className="w-5 h-5 text-purple-400 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Sécurité Maximale</h3>
                  <p>Mesures techniques et organisationnelles pour protéger vos données</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <FileCheck className="w-5 h-5 text-purple-400 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Transparence Totale</h3>
                  <p>Information claire sur l'utilisation de vos données</p>
                </div>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Exercer vos Droits</h2>
            <p className="text-gray-300 mb-6">
              Pour exercer vos droits RGPD ou pour toute question concernant vos données personnelles,
              contactez notre Délégué à la Protection des Données :
            </p>
            <div className="glass-effect p-6 rounded-lg">
              <p className="text-gray-300">Email : dpo@collaba.com</p>
              <p className="text-gray-300">Délai de réponse : 30 jours maximum</p>
            </div>
          </section>
        </div>

        <div className="mt-8 text-center">
          <button className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-full font-medium hover:opacity-90 transition-opacity">
            Gérer mes Préférences RGPD
          </button>
        </div>
      </div>
    </div>
  );
}