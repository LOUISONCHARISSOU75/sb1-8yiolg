import React from 'react';
import { Briefcase, MapPin, Clock, ArrowRight } from 'lucide-react';

const jobs = [
  {
    title: "Développeur Full Stack Senior",
    department: "Ingénierie",
    location: "Paris, France",
    type: "CDI",
    description: "Rejoignez notre équipe d'ingénierie pour développer des fonctionnalités innovantes."
  },
  {
    title: "Product Manager",
    department: "Produit",
    location: "Remote",
    type: "CDI",
    description: "Définissez la vision produit et dirigez son développement."
  },
  {
    title: "Customer Success Manager",
    department: "Support Client",
    location: "Lyon, France",
    type: "CDI",
    description: "Aidez nos clients à tirer le meilleur parti de Collaba."
  }
];

export default function Careers() {
  return (
    <div className="min-h-screen bg-mesh p-8 pt-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text mb-4">
            Rejoignez l'aventure
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Construisez l'avenir de la collaboration avec nous
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="glass-effect rounded-xl p-8 text-center">
            <div className="bg-purple-500/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
              <Briefcase className="w-8 h-8 text-purple-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Mission Inspirante</h3>
            <p className="text-gray-400">
              Transformez la façon dont les équipes collaborent à travers le monde
            </p>
          </div>

          <div className="glass-effect rounded-xl p-8 text-center">
            <div className="bg-purple-500/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
              <Clock className="w-8 h-8 text-purple-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Équilibre</h3>
            <p className="text-gray-400">
              Horaires flexibles et télétravail pour un meilleur équilibre vie pro/perso
            </p>
          </div>

          <div className="glass-effect rounded-xl p-8 text-center">
            <div className="bg-purple-500/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
              <MapPin className="w-8 h-8 text-purple-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2">International</h3>
            <p className="text-gray-400">
              Rejoignez une équipe internationale et multiculturelle
            </p>
          </div>
        </div>

        <div className="space-y-6">
          {jobs.map((job, index) => (
            <div key={index} className="glass-effect rounded-xl p-6 hover:scale-[1.02] transition-transform">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-xl font-bold mb-2">{job.title}</h2>
                  <div className="flex gap-4 text-sm text-gray-400 mb-4">
                    <span>{job.department}</span>
                    <span>•</span>
                    <span>{job.location}</span>
                    <span>•</span>
                    <span>{job.type}</span>
                  </div>
                  <p className="text-gray-300">{job.description}</p>
                </div>
                <button className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg transition-colors flex items-center gap-2">
                  Postuler <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}