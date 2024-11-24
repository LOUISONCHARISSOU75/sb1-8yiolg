import React from 'react';
import { MessageSquare, Users, Search, Settings } from 'lucide-react';

export default function Chat() {
  return (
    <div className="min-h-screen bg-mesh p-8 pt-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text mb-4">
            Chat Intelligent
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Communication en temps réel avec historique illimité et recherche avancée
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="glass-effect rounded-xl p-8 text-center">
            <div className="bg-purple-500/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
              <MessageSquare className="w-8 h-8 text-purple-400" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Messages Instantanés</h3>
            <p className="text-gray-400">
              Échangez des messages, fichiers et liens instantanément avec votre équipe
            </p>
          </div>

          <div className="glass-effect rounded-xl p-8 text-center">
            <div className="bg-purple-500/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
              <Users className="w-8 h-8 text-purple-400" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Canaux Organisés</h3>
            <p className="text-gray-400">
              Créez des canaux thématiques pour mieux organiser vos discussions
            </p>
          </div>

          <div className="glass-effect rounded-xl p-8 text-center">
            <div className="bg-purple-500/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
              <Search className="w-8 h-8 text-purple-400" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Recherche Avancée</h3>
            <p className="text-gray-400">
              Retrouvez rapidement n'importe quel message ou fichier partagé
            </p>
          </div>
        </div>

        <div className="glass-effect rounded-xl p-8 mb-16">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center">
              Fonctionnalités Principales
            </h2>
            <div className="space-y-4">
              <Feature 
                title="Messages Structurés"
                description="Organisez vos conversations avec des fils de discussion et des réponses contextuelles"
              />
              <Feature 
                title="Partage de Fichiers"
                description="Partagez et prévisualisez tous types de fichiers directement dans le chat"
              />
              <Feature 
                title="Intégrations"
                description="Connectez vos outils favoris pour une productivité maximale"
              />
              <Feature 
                title="Historique Illimité"
                description="Accédez à tout l'historique de vos conversations sans limite de temps"
              />
            </div>
          </div>
        </div>

        <div className="text-center">
          <button className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-full font-medium hover:opacity-90 transition-opacity">
            Commencer à Chatter
          </button>
        </div>
      </div>
    </div>
  );
}

function Feature({ title, description }) {
  return (
    <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-white/5 transition-colors">
      <div className="bg-purple-500/10 p-2 rounded-lg">
        <Settings className="w-5 h-5 text-purple-400" />
      </div>
      <div>
        <h3 className="font-semibold mb-1">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  );
}