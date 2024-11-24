import React from 'react';
import { FileText, Users, History, Lock, Pencil, Share2, Search, Settings } from 'lucide-react';

export default function Documents() {
  return (
    <div className="min-h-screen bg-mesh p-8 pt-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text mb-4">
            Documents Collaboratifs
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Édition en temps réel avec contrôle de versions et suggestions IA
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="glass-effect rounded-xl p-8 text-center group hover:scale-105 transition-transform duration-300">
            <div className="bg-purple-500/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-500/20 transition-colors">
              <Pencil className="w-8 h-8 text-purple-400" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Édition en Temps Réel</h3>
            <p className="text-gray-400">
              Collaborez simultanément sur vos documents avec votre équipe
            </p>
          </div>

          <div className="glass-effect rounded-xl p-8 text-center group hover:scale-105 transition-transform duration-300">
            <div className="bg-purple-500/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-500/20 transition-colors">
              <History className="w-8 h-8 text-purple-400" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Historique Complet</h3>
            <p className="text-gray-400">
              Accédez à l'historique des modifications et restaurez d'anciennes versions
            </p>
          </div>

          <div className="glass-effect rounded-xl p-8 text-center group hover:scale-105 transition-transform duration-300">
            <div className="bg-purple-500/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-500/20 transition-colors">
              <Lock className="w-8 h-8 text-purple-400" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Contrôle d'Accès</h3>
            <p className="text-gray-400">
              Gérez finement les permissions et les droits d'accès
            </p>
          </div>
        </div>

        {/* Document Preview */}
        <div className="glass-effect rounded-xl p-8 mb-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-6">
                Une nouvelle façon de collaborer
              </h2>
              <div className="space-y-6">
                <Feature 
                  icon={<Share2 className="w-5 h-5" />}
                  title="Partage Intelligent"
                  description="Partagez des documents avec des permissions personnalisées"
                />
                <Feature 
                  icon={<Search className="w-5 h-5" />}
                  title="Recherche Avancée"
                  description="Retrouvez instantanément n'importe quel contenu dans vos documents"
                />
                <Feature 
                  icon={<Settings className="w-5 h-5" />}
                  title="Personnalisation"
                  description="Adaptez l'interface à vos besoins et votre façon de travailler"
                />
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-xl" />
              <div className="relative glass-effect rounded-xl p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-8 h-8 rounded-full bg-purple-500/20" />
                  <div className="flex-1">
                    <div className="h-2 bg-white/10 rounded-full w-1/3" />
                    <div className="h-2 bg-white/5 rounded-full w-1/4 mt-2" />
                  </div>
                </div>
                <div className="space-y-3">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="h-2 bg-white/10 rounded-full w-full" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <button className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-full font-medium hover:opacity-90 transition-opacity">
            Commencer à Collaborer
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