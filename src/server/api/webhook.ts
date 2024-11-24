import Stripe from 'stripe';
import { stripeConfig } from '../../lib/stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, stripeConfig);
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!;

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const sig = req.headers['stripe-signature'];

  try {
    const event = stripe.webhooks.constructEvent(
      req.body,
      sig,
      webhookSecret
    );

    // Gérer les différents types d'événements
    switch (event.type) {
      case 'payment_intent.succeeded':
        const paymentIntent = event.data.object;
        await handlePaymentSuccess(paymentIntent);
        break;

      case 'payment_intent.payment_failed':
        const failedPayment = event.data.object;
        await handlePaymentFailure(failedPayment);
        break;

      case 'customer.subscription.created':
        const subscription = event.data.object;
        await handleSubscriptionCreated(subscription);
        break;

      case 'customer.subscription.updated':
        const updatedSubscription = event.data.object;
        await handleSubscriptionUpdated(updatedSubscription);
        break;

      case 'customer.subscription.deleted':
        const deletedSubscription = event.data.object;
        await handleSubscriptionDeleted(deletedSubscription);
        break;
    }

    res.json({ received: true });
  } catch (err) {
    console.error('Webhook Error:', err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }
}

async function handlePaymentSuccess(paymentIntent) {
  // Mettre à jour le statut du paiement dans la base de données
  // Envoyer un email de confirmation
  // Mettre à jour les crédits de l'utilisateur
  console.log('Payment succeeded:', paymentIntent.id);
}

async function handlePaymentFailure(paymentIntent) {
  // Gérer l'échec du paiement
  // Notifier l'utilisateur
  console.log('Payment failed:', paymentIntent.id);
}

async function handleSubscriptionCreated(subscription) {
  // Activer l'abonnement pour l'utilisateur
  // Mettre à jour les limites et fonctionnalités
  console.log('Subscription created:', subscription.id);
}

async function handleSubscriptionUpdated(subscription) {
  // Mettre à jour le statut de l'abonnement
  console.log('Subscription updated:', subscription.id);
}

async function handleSubscriptionDeleted(subscription) {
  // Désactiver l'abonnement
  // Mettre à jour les accès utilisateur
  console.log('Subscription deleted:', subscription.id);
}