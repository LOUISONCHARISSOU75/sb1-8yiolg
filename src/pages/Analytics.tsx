import React from 'react';
import { 
  BarChart, 
  LineChart, 
  PieChart, 
  Users, 
  Globe, 
  Clock,
  TrendingUp,
  Activity
} from 'lucide-react';

const metrics = [
  {
    label: "Visiteurs Uniques",
    value: "12,345",
    change: "+12.3%",
    trend: "up",
    icon: <Users className="w-5 h-5 text-purple-400" />
  },
  {
    label: "Temps Moyen",
    value: "4m 32s",
    change: "+5.7%",
    trend: "up",
    icon: <Clock className="w-5 h-5 text-purple-400" />
  },
  {
    label: "Taux de Rebond",
    value: "32.8%",
    change: "-2.1%",
    trend: "down",
    icon: <Activity className="w-5 h-5 text-purple-400" />
  },
  {
    label: "Pages/Session",
    value: "3.7",
    change: "+8.4%",
    trend: "up",
    icon: <Globe className="w-5 h-5 text-purple-400" />
  }
];

const topPages = [
  { path: "/features", views: "3,421", conversion: "4.2%" },
  { path: "/pricing", views: "2,876", conversion: "5.8%" },
  { path: "/about", views: "1,543", conversion: "2.1%" },
  { path: "/blog", views: "987", conversion: "3.4%" }
];

export default function Analytics() {
  return (
    <div className="min-h-screen bg-mesh p-8 pt-24">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
              Analytics
            </h1>
            <p className="text-gray-400">Suivez les performances de votre site</p>
          </div>
          <select className="glass-effect px-4 py-2 rounded-lg">
            <option>Derniers 30 jours</option>
            <option>Derniers 7 jours</option>
            <option>Aujourd'hui</option>
          </select>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {metrics.map((metric, index) => (
            <div key={index} className="glass-effect rounded-xl p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="bg-purple-500/10 p-2 rounded-lg">
                  {metric.icon}
                </div>
                <span className={`text-sm ${
                  metric.trend === 'up' ? 'text-green-400' : 'text-red-400'
                }`}>
                  {metric.change}
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-1">{metric.value}</h3>
              <p className="text-gray-400 text-sm">{metric.label}</p>
            </div>
          ))}
        </div>

        {/* Charts */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="glass-effect rounded-xl p-6">
            <h2 className="text-lg font-semibold mb-6">Visiteurs</h2>
            <div className="h-64 flex items-center justify-center">
              <LineChart className="w-12 h-12 text-gray-600" />
              <p className="text-gray-400 ml-4">Graphique en cours de chargement...</p>
            </div>
          </div>

          <div className="glass-effect rounded-xl p-6">
            <h2 className="text-lg font-semibold mb-6">Sources de Trafic</h2>
            <div className="h-64 flex items-center justify-center">
              <PieChart className="w-12 h-12 text-gray-600" />
              <p className="text-gray-400 ml-4">Graphique en cours de chargement...</p>
            </div>
          </div>
        </div>

        {/* Top Pages */}
        <div className="glass-effect rounded-xl p-6">
          <h2 className="text-lg font-semibold mb-6">Pages les Plus Visitées</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left text-gray-400">
                  <th className="pb-4">Page</th>
                  <th className="pb-4">Vues</th>
                  <th className="pb-4">Taux de Conversion</th>
                  <th className="pb-4">Tendance</th>
                </tr>
              </thead>
              <tbody>
                {topPages.map((page, index) => (
                  <tr key={index} className="border-t border-white/5">
                    <td className="py-4">{page.path}</td>
                    <td className="py-4">{page.views}</td>
                    <td className="py-4">{page.conversion}</td>
                    <td className="py-4">
                      <TrendingUp className="w-5 h-5 text-green-400" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}