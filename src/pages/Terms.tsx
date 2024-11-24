import React from 'react';
import { FileText, CheckCircle, AlertCircle } from 'lucide-react';

export default function Terms() {
  return (
    <div className="min-h-screen bg-mesh p-8 pt-24">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text mb-4">
            Conditions Générales d'Utilisation
          </h1>
          <p className="text-xl text-gray-400">
            Les règles d'utilisation de Collaba
          </p>
        </div>

        <div className="glass-effect rounded-xl p-8 space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4">1. Acceptation des Conditions</h2>
            <p className="text-gray-300">
              En utilisant Collaba, vous acceptez d'être lié par les présentes conditions. 
              Si vous n'acceptez pas ces conditions, vous ne devez pas utiliser le service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">2. Description du Service</h2>
            <p className="text-gray-300">
              Collaba est une plateforme de collaboration qui permet aux équipes de communiquer, 
              partager des documents et gérer des projets. Le service inclut :
            </p>
            <ul className="mt-4 space-y-2">
              {[
                "Messagerie en temps réel",
                "Partage de fichiers",
                "Visioconférence",
                "Gestion de projets",
                "Intégrations tierces"
              ].map((feature, index) => (
                <li key={index} className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">3. Obligations de l'Utilisateur</h2>
            <div className="space-y-4">
              <p className="text-gray-300">
                En tant qu'utilisateur, vous vous engagez à :
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <AlertCircle className="w-5 h-5 text-purple-400 flex-shrink-0 mt-1" />
                  <span>Ne pas utiliser le service à des fins illégales</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertCircle className="w-5 h-5 text-purple-400 flex-shrink-0 mt-1" />
                  <span>Respecter les droits de propriété intellectuelle</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertCircle className="w-5 h-5 text-purple-400 flex-shrink-0 mt-1" />
                  <span>Maintenir la confidentialité de vos identifiants</span>
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">4. Tarification et Paiement</h2>
            <p className="text-gray-300">
              Les conditions de paiement et de facturation sont définies dans nos plans tarifaires. 
              Tout retard de paiement peut entraîner la suspension du service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">5. Résiliation</h2>
            <p className="text-gray-300">
              Vous pouvez résilier votre abonnement à tout moment. La résiliation prendra effet 
              à la fin de la période de facturation en cours.
            </p>
          </section>
        </div>

        <div className="mt-8 text-center text-gray-400">
          Pour toute question concernant ces conditions, contactez notre support.
        </div>
      </div>
    </div>
  );
}