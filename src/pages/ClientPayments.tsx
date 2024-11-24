import React from 'react';
import { AlertCircle } from 'lucide-react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import PaymentForm from '../components/PaymentForm';

// Initialiser Stripe avec une clé publique de test pour la démo
const stripePromise = loadStripe('pk_test_sample');

export default function ClientPayments() {
  return (
    <div className="min-h-screen bg-mesh p-8 pt-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text mb-4">
            Paiement Sécurisé
          </h1>
          <p className="text-gray-400">Complétez votre paiement pour accéder à votre abonnement</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Payment Form */}
          <div className="glass-effect rounded-xl p-8">
            <h2 className="text-xl font-semibold mb-6">Informations de paiement</h2>
            <Elements stripe={stripePromise}>
              <PaymentForm />
            </Elements>
          </div>

          {/* Order Summary */}
          <div className="space-y-8">
            <div className="glass-effect rounded-xl p-8">
              <h2 className="text-xl font-semibold mb-6">Récapitulatif</h2>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-400">Plan Pro</span>
                  <span>9.99€/mois</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Crédits IA</span>
                  <span>10,000 crédits</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">TVA (20%)</span>
                  <span>2.00€</span>
                </div>
                <div className="border-t border-white/10 pt-4">
                  <div className="flex justify-between font-semibold">
                    <span>Total</span>
                    <span>11.99€</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-effect rounded-xl p-6">
              <div className="flex items-start gap-4">
                <AlertCircle className="w-6 h-6 text-purple-400 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-purple-400 mb-2">Garantie satisfait ou remboursé</h3>
                  <p className="text-gray-400">
                    Essayez Collaba pendant 14 jours. Si vous n'êtes pas satisfait, nous vous remboursons intégralement.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}