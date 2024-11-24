import React from 'react';
import { Star, CheckCircle, Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Collaba a transformé notre façon de travailler. Notre productivité a augmenté de 300% !",
    author: "Marie Laurent",
    role: "CEO, TechVision",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
  },
  {
    quote: "L'IA de Collaba comprend parfaitement nos besoins. C'est révolutionnaire.",
    author: "Thomas Dubois",
    role: "CTO, InnovGroup",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
  }
];

export default function SocialProof() {
  return (
    <div className="w-full max-w-4xl">
      {/* Rating */}
      <div className="flex items-center justify-center gap-8 mb-8">
        <div className="flex items-center gap-2">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
            ))}
          </div>
          <span className="text-lg font-bold">4.9/5</span>
        </div>
        <div className="h-6 w-px bg-gray-700" />
        <div className="flex items-center gap-2">
          <CheckCircle className="w-5 h-5 text-green-400" />
          <span>50,000+ Utilisateurs Actifs</span>
        </div>
      </div>

      {/* Testimonials */}
      <div className="grid md:grid-cols-2 gap-6">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="glass-effect rounded-xl p-6">
            <Quote className="w-8 h-8 text-violet-400 mb-4" />
            <p className="text-lg mb-4">{testimonial.quote}</p>
            <div className="flex items-center gap-3">
              <img 
                src={testimonial.image} 
                alt={testimonial.author}
                className="w-10 h-10 rounded-full"
              />
              <div>
                <div className="font-semibold">{testimonial.author}</div>
                <div className="text-sm text-gray-400">{testimonial.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}