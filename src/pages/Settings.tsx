import React from 'react';
import { Settings as SettingsIcon, Bell, Lock, User, Globe, CreditCard } from 'lucide-react';

export default function Settings() {
  return (
    <div className="min-h-screen bg-mesh p-8 pt-24">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
            Paramètres
          </h1>
          <p className="text-gray-400">Gérez vos préférences et configurations</p>
        </div>

        <div className="space-y-6">
          {/* Profil */}
          <div className="glass-effect rounded-xl p-6">
            <h2 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <User className="w-5 h-5" />
              Profil
            </h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Nom</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 bg-white/5 rounded-lg border border-white/10 focus:ring-2 focus:ring-purple-500"
                  defaultValue="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 bg-white/5 rounded-lg border border-white/10 focus:ring-2 focus:ring-purple-500"
                  defaultValue="john@example.com"
                />
              </div>
            </div>
          </div>

          {/* Notifications */}
          <div className="glass-effect rounded-xl p-6">
            <h2 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <Bell className="w-5 h-5" />
              Notifications
            </h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">Notifications Email</h3>
                  <p className="text-sm text-gray-400">Recevoir les mises à jour par email</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-800 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                </label>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">Notifications Push</h3>
                  <p className="text-sm text-gray-400">Recevoir les notifications sur le bureau</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-800 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                </label>
              </div>
            </div>
          </div>

          {/* Sécurité */}
          <div className="glass-effect rounded-xl p-6">
            <h2 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <Lock className="w-5 h-5" />
              Sécurité
            </h2>
            <div className="space-y-4">
              <button className="w-full px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors">
                Changer le mot de passe
              </button>
              <button className="w-full px-4 py-2 bg-white/5 hover:bg-white/10 rounded-lg transition-colors">
                Activer l'authentification à deux facteurs
              </button>
            </div>
          </div>

          {/* Facturation */}
          <div className="glass-effect rounded-xl p-6">
            <h2 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <CreditCard className="w-5 h-5" />
              Facturation
            </h2>
            <div className="space-y-4">
              <div className="p-4 bg-white/5 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium">Plan Pro</span>
                  <span className="text-purple-400">9.99€/mois</span>
                </div>
                <p className="text-sm text-gray-400">Prochain paiement le 1er avril 2024</p>
              </div>
              <button className="w-full px-4 py-2 bg-white/5 hover:bg-white/10 rounded-lg transition-colors">
                Gérer l'abonnement
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}