import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function SignUp() {
  return (
    <div className="py-24">
      <div className="container mx-auto px-6 max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Commencez gratuitement</h1>
          <p className="text-gray-400">
            Essai gratuit de 14 jours, aucune carte bancaire requise.
          </p>
        </div>

        <div className="bg-gray-800/50 p-8 rounded-2xl">
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Nom de l'entreprise</label>
              <input
                type="text"
                className="w-full px-4 py-3 bg-gray-900 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
                placeholder="Votre entreprise"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Email professionnel</label>
              <input
                type="email"
                className="w-full px-4 py-3 bg-gray-900 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
                placeholder="vous@entreprise.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Mot de passe</label>
              <input
                type="password"
                className="w-full px-4 py-3 bg-gray-900 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
                placeholder="8 caractères minimum"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 py-4 rounded-lg font-medium flex items-center justify-center"
            >
              Créer mon compte <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </form>

          <p className="text-sm text-gray-400 mt-6 text-center">
            En créant un compte, vous acceptez nos{' '}
            <a href="#" className="text-purple-400 hover:underline">
              Conditions d'utilisation
            </a>{' '}
            et notre{' '}
            <a href="#" className="text-purple-400 hover:underline">
              Politique de confidentialité
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}