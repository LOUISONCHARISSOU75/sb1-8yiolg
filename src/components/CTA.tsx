import React from 'react';
import { ArrowRight, Zap } from 'lucide-react';

const CTA: React.FC = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="relative rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-violet-600/90 to-fuchsia-600/90" />
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=2000&q=80')] opacity-10" />
          <div className="relative p-12 text-center">
            <h2 className="text-4xl font-bold mb-6">
              Prêt à Transformer Votre Façon de Travailler ?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Rejoignez plus de 10,000 équipes innovantes qui ont déjà fait le pas vers le futur.
              Essai gratuit de 14 jours, sans engagement.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="btn-primary group text-lg">
                Commencer Gratuitement
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="btn-secondary text-lg">
                <Zap className="w-5 h-5 inline-block mr-2" />
                Voir la Démo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;