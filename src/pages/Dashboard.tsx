import React from 'react';
import { 
  Users, 
  CreditCard, 
  TrendingUp, 
  Activity,
  DollarSign,
  Clock,
  UserPlus,
  Building,
  ChevronDown,
  Download,
  LineChart,
  BarChart
} from 'lucide-react';

const stats = [
  {
    icon: <Users className="w-5 h-5 text-purple-400" />,
    value: "1,234",
    label: "Utilisateurs actifs",
    change: "+12.3%",
    positive: true
  },
  {
    icon: <CreditCard className="w-5 h-5 text-purple-400" />,
    value: "45,678€",
    label: "Revenu mensuel",
    change: "+8.1%",
    positive: true
  },
  {
    icon: <Activity className="w-5 h-5 text-purple-400" />,
    value: "89.2%",
    label: "Taux d'engagement",
    change: "-2.4%",
    positive: false
  },
  {
    icon: <TrendingUp className="w-5 h-5 text-purple-400" />,
    value: "23.4K",
    label: "Actions IA",
    change: "+15.8%",
    positive: true
  }
];

const recentActivity = [
  {
    user: "Sophie Martin",
    action: "a rejoint l'équipe",
    time: "Il y a 2 heures",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=50&h=50&fit=crop"
  },
  {
    user: "Thomas Dubois",
    action: "a créé un nouveau projet",
    time: "Il y a 4 heures",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop"
  },
  {
    user: "Marie Lambert",
    action: "a utilisé 500 crédits IA",
    time: "Il y a 6 heures",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=50&h=50&fit=crop"
  }
];

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-mesh p-8 pt-24">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
              Tableau de bord
            </h1>
            <p className="text-gray-400">Gérez votre activité en temps réel</p>
          </div>
          <div className="flex gap-4">
            <button className="flex items-center gap-2 glass-effect hover:bg-white/10 px-4 py-2 rounded-lg transition-all duration-300">
              <Download className="w-4 h-4" />
              Exporter
            </button>
            <select className="glass-effect hover:bg-white/10 px-4 py-2 rounded-lg appearance-none pr-8 cursor-pointer transition-all duration-300">
              <option>Derniers 30 jours</option>
              <option>Derniers 7 jours</option>
              <option>Aujourd'hui</option>
            </select>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="glass-effect rounded-xl p-6 hover:scale-105 transition-transform duration-300">
              <div className="flex justify-between items-start mb-4">
                <div className="bg-purple-500/10 p-2 rounded-lg">
                  {stat.icon}
                </div>
                <span className={`text-sm ${stat.positive ? 'text-green-400' : 'text-red-400'}`}>
                  {stat.change}
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-1 bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
                {stat.value}
              </h3>
              <p className="text-gray-400 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Activity Chart */}
          <div className="md:col-span-2 glass-effect rounded-xl p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-semibold">Activité utilisateurs</h2>
              <div className="flex gap-2">
                <button className="px-3 py-1 rounded-lg bg-purple-500/10 text-purple-400 text-sm">Jour</button>
                <button className="px-3 py-1 rounded-lg bg-gray-800/50 text-gray-400 text-sm">Semaine</button>
                <button className="px-3 py-1 rounded-lg bg-gray-800/50 text-gray-400 text-sm">Mois</button>
              </div>
            </div>
            <div className="h-64 flex items-center justify-center">
              <LineChart className="w-12 h-12 text-gray-600" />
              <p className="text-gray-400 ml-4">Graphique d'activité en cours de chargement...</p>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="glass-effect rounded-xl p-6">
            <h2 className="text-lg font-semibold mb-6">Activité récente</h2>
            <div className="space-y-6">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-start gap-4">
                  <img 
                    src={activity.avatar} 
                    alt={activity.user}
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <p>
                      <span className="font-medium">{activity.user}</span>{' '}
                      <span className="text-gray-400">{activity.action}</span>
                    </p>
                    <p className="text-sm text-gray-500">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Usage Analytics */}
        <div className="glass-effect rounded-xl p-6 mt-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-semibold">Utilisation des crédits IA</h2>
            <button className="text-purple-400 hover:text-purple-300 text-sm">
              Voir les détails
            </button>
          </div>
          <div className="h-48 flex items-center justify-center">
            <BarChart className="w-12 h-12 text-gray-600" />
            <p className="text-gray-400 ml-4">Graphique d'utilisation en cours de chargement...</p>
          </div>
        </div>
      </div>
    </div>
  );
}