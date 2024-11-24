import React from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';

const articles = [
  {
    title: "Comment l'IA révolutionne la collaboration d'équipe",
    excerpt: "Découvrez comment l'intelligence artificielle transforme la façon dont les équipes travaillent ensemble.",
    author: "Sophie Martin",
    date: "15 Mars 2024",
    image: "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?w=800&h=400&fit=crop"
  },
  {
    title: "Les meilleures pratiques pour le travail à distance",
    excerpt: "Guide complet pour maintenir une collaboration efficace en télétravail.",
    author: "Thomas Dubois",
    date: "12 Mars 2024",
    image: "https://images.unsplash.com/photo-1577412647305-991150c7d163?w=800&h=400&fit=crop"
  },
  {
    title: "Sécurité des données : les enjeux de 2024",
    excerpt: "Comment protéger vos données d'entreprise dans un monde connecté.",
    author: "Marie Lambert",
    date: "8 Mars 2024",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=400&fit=crop"
  }
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-mesh p-8 pt-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text mb-4">
            Blog Collaba
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Actualités, conseils et bonnes pratiques pour une collaboration efficace
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <article key={index} className="glass-effect rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300">
              <img 
                src={article.image} 
                alt={article.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-bold mb-3 hover:text-purple-400 transition-colors">
                  {article.title}
                </h2>
                <p className="text-gray-400 mb-4">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    {article.author}
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {article.date}
                  </div>
                </div>
                <button className="mt-4 text-purple-400 hover:text-purple-300 flex items-center gap-2 group">
                  Lire plus 
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-full font-medium hover:opacity-90 transition-opacity">
            Voir tous les articles
          </button>
        </div>
      </div>
    </div>
  );
}