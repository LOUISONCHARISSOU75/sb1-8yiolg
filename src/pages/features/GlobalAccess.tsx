import React from 'react';
import { Globe, Cloud, Shield, Zap, Laptop, Phone } from 'lucide-react';

export default function GlobalAccess() {
  return (
    <div className="min-h-screen bg-mesh p-8 pt-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text mb-4">
            Accès Global
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Travaillez de n'importe où avec une synchronisation parfaite
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="glass-effect rounded-xl p-8 text-center group hover:scale-105 transition-transform duration-300">
            <div className="bg-purple-500/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
              <Cloud className="w-8 h-8 text-purple-400" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Synchronisation Cloud</h3>
            <p className="text-gray-400">
              Vos données synchronisées en temps réel sur tous vos appareils
            </p>
          </div>

          <div className="glass-effect rounded-xl p-8 text-center group hover:scale-105 transition-transform duration-300">
            <div className="bg-purple-500/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8 text-purple-400" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Accès Sécurisé</h3>
            <p className="text-gray-400">
              Connexion sécurisée depuis n'importe quel appareil
            </p>
          </div>

          <div className="glass-effect rounded-xl p-8 text-center group hover:scale-105 transition-transform duration-300">
            <div className="bg-purple-500/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
              <Zap className="w-8 h-8 text-purple-400" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Performance Optimale</h3>
            <p className="text-gray-400">
              Expérience fluide même avec une connexion limitée
            </p>
          </div>
        </div>

        <div className="glass-effect rounded-xl p-8 mb-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-6">
                Une expérience unifiée
              </h2>
              <div className="space-y-6">
                <Feature 
                  icon={<Laptop className="w-5 h-5" />}
                  title="Applications Desktop"
                  description="Applications natives pour Windows, Mac et Linux"
                />
                <Feature 
                  icon={<Phone className="w-5 h-5" />}
                  title="Applications Mobiles"
                  description="Apps iOS et Android pour rester connecté en déplacement"
                />
                <Feature 
                  icon={<Globe className="w-5 h-5" />}
                  title="Version Web"
                  description="Accédez à Collaba depuis n'importe quel navigateur"
                />
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-xl" />
              <div className="relative glass-effect rounded-xl p-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="aspect-video bg-white/5 rounded-lg p-4 flex items-center justify-center">
                    <Laptop className="w-8 h-8 text-purple-400" />
                  </div>
                  <div className="aspect-video bg-white/5 rounded-lg p-4 flex items-center justify-center">
                    <Phone className="w-8 h-8 text-purple-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <button className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-full font-medium hover:opacity-90 transition-opacity">
            Commencer Maintenant
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