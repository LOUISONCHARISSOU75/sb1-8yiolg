import React from 'react';
import { Star, CheckCircle } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  rating: number;
}

export default function TestimonialCard({ quote, author, role, rating }: TestimonialCardProps) {
  return (
    <div className="p-8 rounded-2xl bg-gray-800/50 hover-card glow-effect">
      <div className="flex items-center mb-4">
        <CheckCircle className="w-8 h-8 text-purple-500" />
        <div className="ml-auto flex">
          {[...Array(rating)].map((_, i) => (
            <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
          ))}
        </div>
      </div>
      <p className="text-lg mb-4">{quote}</p>
      <div>
        <div className="font-semibold gradient-text">{author}</div>
        <div className="text-gray-400">{role}</div>
      </div>
    </div>
  );
}