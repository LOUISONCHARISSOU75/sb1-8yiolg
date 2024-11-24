import React from 'react';
import { Star, Quote, CheckCircle } from 'lucide-react';

const testimonials = [
  {
    quote: "Collaba a transformé notre façon de travailler. Notre productivité a augmenté de 300% !",
    author: "Marie Laurent",
    role: "CEO, TechVision",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    rating: 5
  },
  {
    quote: "L'IA de Collaba comprend parfaitement nos besoins. C'est révolutionnaire.",
    author: "Thomas Dubois",
    role: "CTO, InnovGroup",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container">
        <h2 className="text-4xl font-bold text-center mb-16 heading-gradient">
          Ce que disent nos clients
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="glass-effect rounded-xl p-8 hover:scale-105 transition-transform duration-500"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="relative">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.author}
                    className="w-16 h-16 rounded-full"
                  />
                  <div className="absolute -inset-1 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full blur opacity-50" />
                </div>
                <div>
                  <div className="font-bold text-lg">{testimonial.author}</div>
                  <div className="text-gray-400">{testimonial.role}</div>
                </div>
                <CheckCircle className="w-6 h-6 text-green-400 ml-auto" />
              </div>
              
              <Quote className="w-8 h-8 text-violet-400 mb-4 opacity-50" />
              <p className="text-lg mb-6">{testimonial.quote}</p>
              
              <div className="flex items-center gap-2">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}