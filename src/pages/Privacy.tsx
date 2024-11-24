import React from 'react';
import { Shield, Lock, Eye, FileCheck } from 'lucide-react';

export default function Privacy() {
  return (
    <div className="min-h-screen bg-mesh p-8 pt-24">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text mb-4">
            Politique de Confidentialité
          </h1>
          <p className="text-xl text-gray-400">
            Comment nous protégeons vos données
          </p>
        </div>

        <div className="glass-effect rounded-xl p-8 space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4">Introduction</h2>
            <p className="text-gray-300">
              Chez Collaba, nous prenons la protection de vos données personnelles très au sérieux. 
              Cette politique explique comment nous collectons, utilisons et protégeons vos informations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Collecte des Données</h2>
            <p className="text-gray-300 mb-4">
              Nous collectons uniquement les données nécessaires au bon fonctionnement de nos services :
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Informations de compte (nom, email)</li>
              <li>Données d'utilisation du service</li>
              <li>Informations de paiement</li>
              <li>Logs de connexion</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Protection des Données</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-4 bg-white/5 rounded-lg">
                <Shield className="w-6 h-6 text-purple-400 mb-2" />
                <h3 className="font-semibold mb-2">Chiffrement</h3>
                <p className="text-gray-400">
                  Toutes les données sont chiffrées en transit et au repos
                </p>
              </div>
              <div className="p-4 bg-white/5 rounded-lg">
                <Lock className="w-6 h-6 text-purple-400 mb-2" />
                <h3 className="font-semibold mb-2">Accès Sécurisé</h3>
                <p className="text-gray-400">
                  Authentification forte et contrôles d'accès stricts
                </p>
              </div>
              <div className="p-4 bg-white/5 rounded-lg">
                <Eye className="w-6 h-6 text-purple-400 mb-2" />
                <h3 className="font-semibold mb-2">Transparence</h3>
                <p className="text-gray-400">
                  Vous gardez le contrôle total sur vos données
                </p>
              </div>
              <div className="p-4 bg-white/5 rounded-lg">
                <FileCheck className="w-6 h-6 text-purple-400 mb-2" />
                <h3 className="font-semibold mb-2">Conformité</h3>
                <p className="text-gray-400">
                  Respect du RGPD et des normes internationales
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Vos Droits</h2>
            <p className="text-gray-300 mb-4">
              Vous disposez des droits suivants concernant vos données :
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Droit d'accès à vos données</li>
              <li>Droit de rectification</li>
              <li>Droit à l'effacement</li>
              <li>Droit à la portabilité</li>
              <li>Droit d'opposition</li>
            </ul>
          </section>
        </div>

        <div className="mt-8 text-center text-gray-400">
          Dernière mise à jour : Mars 2024
        </div>
      </div>
    </div>
  );
}