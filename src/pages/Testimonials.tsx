import React from 'react';
import { Star, CheckCircle } from 'lucide-react';

const testimonials = [
  {
    quote: "Collaba a transformé notre façon de travailler. La collaboration en temps réel est un véritable game-changer.",
    author: "Sophie Martin",
    role: "Directrice Tech chez FrenchTech",
    company: "FrenchTech",
    rating: 5,
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
  },
  {
    quote: "La plateforme la plus intuitive que nous ayons utilisée. C'est devenu indispensable dans notre quotidien.",
    author: "Thomas Dubois",
    role: "Chef de Produit",
    company: "InnovFr",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
  },
  {
    quote: "L'intégration de l'IA dans les fonctionnalités nous fait gagner un temps précieux chaque jour.",
    author: "Marie Lambert",
    role: "Responsable Marketing",
    company: "DigitalFirst",
    rating: 5,
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
  },
  {
    quote: "Le support client est exceptionnel. Nos questions trouvent toujours une réponse rapide et pertinente.",
    author: "Pierre Durand",
    role: "CTO",
    company: "TechStart",
    rating: 5,
    image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
  }
];

export default function Testimonials() {
  return (
    <div className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="bg-purple-500/10 text-purple-400 px-4 py-2 rounded-full text-sm font-medium">
            TÉMOIGNAGES
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-4">
            Ce que nos clients disent
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Découvrez pourquoi les meilleures équipes choisissent Collaba pour leur collaboration.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-800/30 p-8 rounded-2xl">
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="ml-4">
                  <div className="font-semibold">{testimonial.author}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}</div>
                </div>
                <div className="ml-auto">
                  <CheckCircle className="w-6 h-6 text-purple-500" />
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              <p className="text-lg mb-4">{testimonial.quote}</p>
              <div className="text-sm text-gray-400">{testimonial.company}</div>
            </div>
          ))}
        </div>

        <div className="mt-24 text-center">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12">
            <h2 className="text-3xl font-bold mb-6">Prêt à rejoindre ces équipes ?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Commencez votre essai gratuit de 14 jours et découvrez pourquoi tant d'équipes nous font confiance.
            </p>
            <button className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 rounded-full font-medium text-lg transition">
              Démarrer Gratuitement
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}