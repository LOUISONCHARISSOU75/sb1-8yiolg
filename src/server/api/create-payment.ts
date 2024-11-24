import Stripe from 'stripe';
import { stripeConfig } from '../../lib/stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, stripeConfig);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { paymentMethodId, amount, customerId, email, planId } = req.body;

    // Créer ou récupérer le client
    let customer;
    if (customerId) {
      customer = await stripe.customers.retrieve(customerId);
    } else {
      customer = await stripe.customers.create({
        payment_method: paymentMethodId,
        email: email,
        metadata: {
          planId: planId
        }
      });
    }

    // Créer l'intention de paiement
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'eur',
      customer: customer.id,
      payment_method: paymentMethodId,
      off_session: false,
      confirm: true,
      return_url: `${process.env.NEXT_PUBLIC_URL}/payment-success`,
      metadata: {
        orderId: `ORDER-${Date.now()}`,
        planId: planId
      },
      payment_method_types: ['card'],
      setup_future_usage: 'off_session',
    });

    // Si c'est un abonnement, créer la souscription
    if (planId) {
      const subscription = await stripe.subscriptions.create({
        customer: customer.id,
        items: [{ price: planId }],
        payment_behavior: 'default_incomplete',
        payment_settings: { save_default_payment_method: 'on_subscription' },
        expand: ['latest_invoice.payment_intent'],
      });
    }

    return res.json({
      clientSecret: paymentIntent.client_secret,
      customerId: customer.id,
    });
  } catch (err) {
    console.error('Stripe API error:', err);
    return res.status(500).json({
      error: 'Erreur lors du traitement du paiement',
      details: err instanceof Error ? err.message : 'Unknown error',
    });
  }
}