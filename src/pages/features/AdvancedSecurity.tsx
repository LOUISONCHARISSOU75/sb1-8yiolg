import React from 'react';
import { Shield, Lock, Key, FileCheck, Eye, UserCheck, AlertTriangle, Settings } from 'lucide-react';

export default function AdvancedSecurity() {
  return (
    <div className="min-h-screen bg-mesh p-8 pt-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text mb-4">
            Sécurité Avancée
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Protection de niveau entreprise pour vos données sensibles
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="glass-effect rounded-xl p-8 text-center group hover:scale-105 transition-transform duration-300">
            <div className="bg-purple-500/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
              <Lock className="w-8 h-8 text-purple-400" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Chiffrement E2E</h3>
            <p className="text-gray-400">
              Chiffrement de bout en bout de toutes vos données
            </p>
          </div>

          <div className="glass-effect rounded-xl p-8 text-center group hover:scale-105 transition-transform duration-300">
            <div className="bg-purple-500/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
              <Key className="w-8 h-8 text-purple-400" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Authentification 2FA</h3>
            <p className="text-gray-400">
              Double authentification pour une sécurité renforcée
            </p>
          </div>

          <div className="glass-effect rounded-xl p-8 text-center group hover:scale-105 transition-transform duration-300">
            <div className="bg-purple-500/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
              <Eye className="w-8 h-8 text-purple-400" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Audit Logs</h3>
            <p className="text-gray-400">
              Suivi détaillé de toutes les actions utilisateurs
            </p>
          </div>
        </div>

        <div className="glass-effect rounded-xl p-8 mb-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-6">
                Sécurité sans compromis
              </h2>
              <div className="space-y-6">
                <Feature 
                  icon={<UserCheck className="w-5 h-5" />}
                  title="Contrôle d'Accès"
                  description="Gestion fine des permissions utilisateurs"
                />
                <Feature 
                  icon={<AlertTriangle className="w-5 h-5" />}
                  title="Détection des Menaces"
                  description="Protection proactive contre les attaques"
                />
                <Feature 
                  icon={<Settings className="w-5 h-5" />}
                  title="Configuration Avancée"
                  description="Paramètres de sécurité personnalisables"
                />
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-xl" />
              <div className="relative glass-effect rounded-xl p-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-white/5 rounded-lg">
                    <Shield className="w-6 h-6 text-green-400" />
                    <div className="flex-1">
                      <div className="h-2 bg-green-400/20 rounded-full w-full" />
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-white/5 rounded-lg">
                    <Lock className="w-6 h-6 text-purple-400" />
                    <div className="flex-1">
                      <div className="h-2 bg-purple-400/20 rounded-full w-3/4" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <button className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-full font-medium hover:opacity-90 transition-opacity">
            Découvrir nos mesures de sécurité
          </button>
        </div>
      </div>
    </div>
  );
}

function Feature({ icon, title, description }) {
  return (
    <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-white/5 transition-colors">
      <div className="bg-purple-500/10 p-2 rounded-lg">
        {icon}
      </div>
      <div>
        <h3 className="font-semibold mb-1">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  );
}