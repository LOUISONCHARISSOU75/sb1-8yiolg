import React from 'react';
import { 
  CreditCard, 
  Building2, // Changed from Bank
  DollarSign,
  Download,
  ExternalLink,
  AlertCircle
} from 'lucide-react';

const bankAccounts = [
  {
    bank: "BNP Paribas",
    accountNumber: "FR76 XXXX XXXX XXXX 1234",
    balance: "24,590.50€",
    primary: true
  },
  {
    bank: "Société Générale",
    accountNumber: "FR76 XXXX XXXX XXXX 5678",
    balance: "8,120.75€",
    primary: false
  }
];

const recentPayouts = [
  {
    date: "15 Mars 2024",
    amount: "12,450.00€",
    status: "Complété",
    reference: "PO-2024031501"
  },
  {
    date: "1 Mars 2024",
    amount: "8,920.00€",
    status: "Complété",
    reference: "PO-2024030101"
  },
  {
    date: "15 Février 2024",
    amount: "10,780.00€",
    status: "Complété",
    reference: "PO-2024021501"
  }
];

export default function Payments() {
  return (
    <div className="min-h-screen bg-mesh p-8 pt-24">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
              Paiements
            </h1>
            <p className="text-gray-400">Gérez vos comptes bancaires et suivez vos revenus</p>
          </div>
          <button className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 px-6 py-2 rounded-lg transition-colors duration-300">
            <Building2 className="w-4 h-4" />
            Ajouter un compte
          </button>
        </div>

        {/* Bank Accounts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {bankAccounts.map((account, index) => (
            <div key={index} className="glass-effect rounded-xl p-6 hover:scale-105 transition-transform duration-300">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                  <div className="bg-purple-500/10 p-2 rounded-lg">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{account.bank}</h3>
                    <p className="text-gray-400 text-sm">{account.accountNumber}</p>
                  </div>
                </div>
                {account.primary && (
                  <span className="bg-green-500/10 text-green-400 px-2 py-1 rounded-full text-xs">
                    Principal
                  </span>
                )}
              </div>
              <div className="flex justify-between items-end">
                <div>
                  <p className="text-sm text-gray-400">Solde disponible</p>
                  <p className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
                    {account.balance}
                  </p>
                </div>
                <button className="text-purple-400 hover:text-purple-300 text-sm transition-colors duration-300">
                  Gérer
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Next Payout */}
        <div className="glass-effect rounded-xl p-6 mb-8 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="flex justify-between items-center relative">
            <div>
              <h2 className="text-lg font-semibold mb-2">Prochain versement</h2>
              <p className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
                15,780.25€
              </p>
              <p className="text-sm text-gray-400">Prévu pour le 30 Mars 2024</p>
            </div>
            <button className="glass-effect hover:bg-white/10 px-4 py-2 rounded-lg transition-all duration-300">
              Modifier la date
            </button>
          </div>
        </div>

        {/* Payout History */}
        <div className="glass-effect rounded-xl p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-semibold">Historique des versements</h2>
            <button className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors duration-300">
              <Download className="w-4 h-4" />
              Exporter
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left text-gray-400 text-sm">
                  <th className="pb-4">Date</th>
                  <th className="pb-4">Montant</th>
                  <th className="pb-4">Statut</th>
                  <th className="pb-4">Référence</th>
                  <th className="pb-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {recentPayouts.map((payout, index) => (
                  <tr key={index} className="border-t border-white/5">
                    <td className="py-4">{payout.date}</td>
                    <td className="py-4 font-medium">{payout.amount}</td>
                    <td className="py-4">
                      <span className="bg-green-500/10 text-green-400 px-2 py-1 rounded-full text-sm">
                        {payout.status}
                      </span>
                    </td>
                    <td className="py-4 text-gray-400">{payout.reference}</td>
                    <td className="py-4">
                      <button className="text-purple-400 hover:text-purple-300 transition-colors duration-300">
                        <ExternalLink className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Info Box */}
        <div className="glass-effect rounded-xl p-6 mt-8">
          <div className="flex items-start gap-4">
            <AlertCircle className="w-6 h-6 text-blue-400 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-blue-400 mb-2">Information sur les versements</h3>
              <p className="text-gray-300">
                Les versements sont effectués automatiquement tous les 15 jours. Un solde minimum de 100€ est requis pour déclencher un versement. Les fonds sont généralement disponibles sous 2-3 jours ouvrés.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}