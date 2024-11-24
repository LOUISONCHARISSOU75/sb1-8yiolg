import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Login() {
  return (
    <div className="min-h-screen bg-mesh flex items-center justify-center py-24">
      <div className="w-full max-w-md px-6">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold heading-gradient mb-4">
            Bon retour parmi nous
          </h1>
          <p className="text-gray-400">
            Connectez-vous pour accéder à votre espace
          </p>
        </div>

        <div className="card">
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-3 bg-white/5 rounded-lg border border-white/10 focus:ring-2 focus:ring-violet-500 outline-none"
                placeholder="vous@exemple.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Mot de passe
              </label>
              <input
                type="password"
                className="w-full px-4 py-3 bg-white/5 rounded-lg border border-white/10 focus:ring-2 focus:ring-violet-500 outline-none"
                placeholder="••••••••"
              />
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input type="checkbox" className="w-4 h-4 rounded border-white/10 bg-white/5" />
                <span className="ml-2 text-sm text-gray-400">Se souvenir de moi</span>
              </label>
              <Link to="/forgot-password" className="text-sm text-violet-400 hover:text-violet-300">
                Mot de passe oublié ?
              </Link>
            </div>

            <button type="submit" className="w-full btn-primary flex items-center justify-center gap-2">
              Se connecter
              <ArrowRight className="w-5 h-5" />
            </button>
          </form>

          <div className="mt-6 text-center text-sm text-gray-400">
            Pas encore de compte ?{' '}
            <Link to="/signup" className="text-violet-400 hover:text-violet-300">
              Créer un compte
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}