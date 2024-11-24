import React from 'react';
import { Calendar as CalendarIcon, Clock, Users, Zap, Bell, Calendar as CalendarCheck } from 'lucide-react';

export default function Calendar() {
  return (
    <div className="min-h-screen bg-mesh p-8 pt-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text mb-4">
            Calendrier Intelligent
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Synchronisation parfaite des emplois du temps avec planification automatique par IA
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="glass-effect rounded-xl p-8 text-center group hover:scale-105 transition-transform duration-300">
            <div className="bg-purple-500/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-500/20 transition-colors">
              <Clock className="w-8 h-8 text-purple-400" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Planification IA</h3>
            <p className="text-gray-400">
              L'IA trouve automatiquement les meilleurs créneaux pour vos réunions
            </p>
          </div>

          <div className="glass-effect rounded-xl p-8 text-center group hover:scale-105 transition-transform duration-300">
            <div className="bg-purple-500/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-500/20 transition-colors">
              <Users className="w-8 h-8 text-purple-400" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Calendriers Partagés</h3>
            <p className="text-gray-400">
              Visualisez et coordonnez les emplois du temps de toute l'équipe
            </p>
          </div>

          <div className="glass-effect rounded-xl p-8 text-center group hover:scale-105 transition-transform duration-300">
            <div className="bg-purple-500/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-500/20 transition-colors">
              <Bell className="w-8 h-8 text-purple-400" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Rappels Intelligents</h3>
            <p className="text-gray-400">
              Notifications contextuelles et rappels personnalisés
            </p>
          </div>
        </div>

        {/* Calendar Preview */}
        <div className="glass-effect rounded-xl p-8 mb-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-6">
                Planification intelligente
              </h2>
              <div className="space-y-6">
                <Feature 
                  icon={<CalendarCheck className="w-5 h-5" />}
                  title="Synchronisation Multi-Calendriers"
                  description="Intégration avec Google Calendar, Outlook et autres services"
                />
                <Feature 
                  icon={<Zap className="w-5 h-5" />}
                  title="Suggestions IA"
                  description="L'IA analyse les habitudes et suggère les meilleurs créneaux"
                />
                <Feature 
                  icon={<Users className="w-5 h-5" />}
                  title="Coordination d'Équipe"
                  description="Trouvez facilement des créneaux qui conviennent à tout le monde"
                />
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-xl" />
              <div className="relative glass-effect rounded-xl p-6">
                <div className="grid grid-cols-7 gap-2">
                  {[...Array(7)].map((_, i) => (
                    <div key={i} className="text-center p-2">
                      <div className="text-sm text-gray-400 mb-2">
                        {['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'][i]}
                      </div>
                      <div className={`rounded-lg p-2 ${i === 2 ? 'bg-purple-500/20 text-purple-400' : 'hover:bg-white/5'}`}>
                        {i + 1}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <button className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-full font-medium hover:opacity-90 transition-opacity">
            Essayer la Planification IA
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