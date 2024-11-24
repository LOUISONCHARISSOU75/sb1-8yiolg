import React from 'react';
import { Bot, Sparkles, Brain, Zap, MessageSquare, FileText } from 'lucide-react';

export default function AIAssistant() {
  return (
    <div className="min-h-screen bg-mesh p-8 pt-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text mb-4">
            Assistant IA
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Boostez votre productivité avec notre IA intelligente et contextuelle
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="glass-effect rounded-xl p-8 text-center group hover:scale-105 transition-transform duration-300">
            <div className="bg-purple-500/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
              <Bot className="w-8 h-8 text-purple-400" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Assistant Personnel</h3>
            <p className="text-gray-400">
              Un assistant IA disponible 24/7 pour répondre à vos questions
            </p>
          </div>

          <div className="glass-effect rounded-xl p-8 text-center group hover:scale-105 transition-transform duration-300">
            <div className="bg-purple-500/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
              <Brain className="w-8 h-8 text-purple-400" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Apprentissage Continu</h3>
            <p className="text-gray-400">
              S'adapte à votre façon de travailler et s'améliore en continu
            </p>
          </div>

          <div className="glass-effect rounded-xl p-8 text-center group hover:scale-105 transition-transform duration-300">
            <div className="bg-purple-500/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
              <Sparkles className="w-8 h-8 text-purple-400" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Suggestions Intelligentes</h3>
            <p className="text-gray-400">
              Recommandations contextuelles basées sur votre activité
            </p>
          </div>
        </div>

        <div className="glass-effect rounded-xl p-8 mb-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-6">
                Une IA qui comprend vos besoins
              </h2>
              <div className="space-y-6">
                <Feature 
                  icon={<MessageSquare className="w-5 h-5" />}
                  title="Résumés Automatiques"
                  description="Résumés intelligents de vos réunions et conversations"
                />
                <Feature 
                  icon={<FileText className="w-5 h-5" />}
                  title="Analyse de Documents"
                  description="Extraction automatique des informations importantes"
                />
                <Feature 
                  icon={<Zap className="w-5 h-5" />}
                  title="Automatisation"
                  description="Automatisez les tâches répétitives avec l'IA"
                />
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-xl" />
              <div className="relative glass-effect rounded-xl p-6">
                <div className="flex items-center gap-4 mb-4">
                  <Bot className="w-8 h-8 text-purple-400" />
                  <div className="flex-1">
                    <div className="h-2 bg-white/10 rounded-full w-3/4 animate-pulse" />
                  </div>
                </div>
                <div className="space-y-3">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="h-2 bg-white/10 rounded-full w-full animate-pulse" style={{ animationDelay: `${i * 200}ms` }} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <button className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-full font-medium hover:opacity-90 transition-opacity">
            Essayer l'Assistant IA
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