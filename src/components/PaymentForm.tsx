import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { stripe } from '../lib/stripe';
import AnimatedButton from './AnimatedButton';
import { AlertCircle, CheckCircle } from 'lucide-react';

interface PaymentFormProps {
  amount: number;
  onSuccess?: () => void;
  onError?: (error: string) => void;
}

export default function PaymentForm({ amount, onSuccess, onError }: PaymentFormProps) {
  const stripeInstance = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!stripeInstance || !elements) {
      return;
    }

    setLoading(true);
    setError(null);

    try {
      // Créer l'intention de paiement
      const { clientSecret } = await stripe.createPaymentIntent(amount);

      // Confirmer le paiement
      const { error: stripeError, paymentIntent } = await stripeInstance.confirmCardPayment(
        clientSecret,
        {
          payment_method: {
            card: elements.getElement(CardElement)!,
          },
        }
      );

      if (stripeError) {
        setError(stripeError.message || 'Une erreur est survenue');
        onError?.(stripeError.message || 'Une erreur est survenue');
      } else if (paymentIntent.status === 'succeeded') {
        setSuccess(true);
        onSuccess?.();
      }
    } catch (err) {
      setError('Une erreur est survenue lors du paiement');
      onError?.('Une erreur est survenue lors du paiement');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium mb-2">Informations de paiement</label>
        <div className="w-full px-4 py-3 bg-white/5 rounded-lg border border-white/10 focus-within:ring-2 focus-within:ring-purple-500">
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: '16px',
                  color: '#fff',
                  '::placeholder': {
                    color: '#9ca3af',
                  },
                },
              },
            }}
          />
        </div>
      </div>

      {error && (
        <div className="flex items-center gap-2 text-red-400 bg-red-400/10 p-3 rounded-lg">
          <AlertCircle className="w-5 h-5" />
          {error}
        </div>
      )}

      {success && (
        <div className="flex items-center gap-2 text-green-400 bg-green-400/10 p-3 rounded-lg">
          <CheckCircle className="w-5 h-5" />
          Paiement effectué avec succès !
        </div>
      )}

      <AnimatedButton
        type="submit"
        variant="primary"
        loading={loading}
        disabled={!stripeInstance}
        className="w-full"
      >
        Payer {(amount / 100).toFixed(2)}€
      </AnimatedButton>
    </form>
  );
}