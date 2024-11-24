import { loadStripe } from '@stripe/stripe-js';

// Initialisation de Stripe avec la clé publique
export const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

// Configuration des endpoints de l'API
const API_URL = import.meta.env.VITE_API_URL;

// Fonctions pour interagir avec l'API Stripe
export const stripe = {
  createPaymentIntent: async (amount: number, currency: string = 'eur') => {
    const response = await fetch(`${API_URL}/create-payment-intent`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount, currency }),
    });
    return response.json();
  },

  createSubscription: async (priceId: string, customerId?: string) => {
    const response = await fetch(`${API_URL}/create-subscription`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ priceId, customerId }),
    });
    return response.json();
  },

  getCustomerPortalSession: async (customerId: string) => {
    const response = await fetch(`${API_URL}/customer-portal`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ customerId }),
    });
    return response.json();
  }
};