import React, { useState } from 'react';
import { ArrowLeft, MessageSquare, Users, Calendar, FileText, Bot, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function DemoInteractive() {
  const [activeFeature, setActiveFeature] = useState('chat');

  const features = {
    chat: {
      title: "Chat Intelligent",
      description: "Communication en temps réel avec suggestions IA",
      icon: <MessageSquare className="w-6 h-6" />
    },
    team: {
      title: "Gestion d'Équipe",
      description: "Organisation et collaboration simplifiée",
      icon: <Users className="w-6 h-6" />
    },
    calendar: {
      title: "Calendrier",
      description: "Planification intelligente des réunions",
      icon: <Calendar className="w-6 h-6" />
    },
    documents: {
      title: "Documents",
      description: "Édition collaborative en temps réel",
      icon: <FileText className="w-6 h-6" />
    },
    ai: {
      title: "Assistant IA",
      description: "Votre copilote intelligent",
      icon: <Bot className="w-6 h-6" />
    }
  };

  return (
    <div className="min-h-screen bg-mesh p-8 pt-24">
      <div className="max-w-7xl mx-auto">
        <Link 
          to="/demo" 
          className="inline-flex items-center text-gray-400 hover:text-white mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          Retour
        </Link>

        <div className="grid md:grid-cols-[300px_1fr] gap-8">
          {/* Sidebar */}
          <div className="glass-effect rounded-xl p-4">
            <div className="space-y-2">
              {Object.entries(features).map(([key, feature]) => (
                <button
                  key={key}
                  onClick={() => setActiveFeature(key)}
                  className={`w-full flex items-center gap-3 p-3 rounded-lg transition-colors ${
                    activeFeature === key 
                      ? 'bg-violet-500/20 text-violet-400' 
                      : 'hover:bg-white/5'
                  }`}
                >
                  {feature.icon}
                  <div className="text-left">
                    <div className="font-medium">{feature.title}</div>
                    <div className="text-sm text-gray-400">{feature.description}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Main Content */}
          <div className="glass-effect rounded-xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">{features[activeFeature].title}</h2>
              <button className="p-2 hover:bg-white/5 rounded-lg transition-colors">
                <Settings className="w-5 h-5" />
              </button>
            </div>

            <div className="aspect-video bg-black/30 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className="mb-4">{features[activeFeature].icon}</div>
                <p className="text-gray-400">
                  Démo interactive de {features[activeFeature].title.toLowerCase()}...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}