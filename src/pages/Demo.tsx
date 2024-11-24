import React, { useState } from 'react';
import { Play, Download, Monitor, Phone, Zap, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedButton from '../components/AnimatedButton';

export default function Demo() {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async () => {
    setIsDownloading(true);
    try {
      // Simuler un délai de téléchargement
      await new Promise(resolve => setTimeout(resolve, 1500));
      window.location.href = '/download';
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div className="min-h-screen bg-mesh p-8 pt-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text mb-4">
            Découvrez Collaba en Action
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Explorez toutes les fonctionnalités qui font de Collaba la plateforme de collaboration du futur
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Link 
            to="/demo/interactive" 
            className="glass-effect rounded-xl p-8 hover:scale-105 transition-transform duration-300"
          >
            <div className="bg-purple-500/10 p-4 rounded-xl w-16 h-16 flex items-center justify-center mb-6">
              <Play className="w-8 h-8 text-purple-400" />
            </div>
            <h2 className="text-2xl font-bold mb-4">Démo Interactive</h2>
            <p className="text-gray-400 mb-6">
              Essayez Collaba directement dans votre navigateur, sans installation requise.
            </p>
            <AnimatedButton variant="primary">
              Lancer la Démo
              <ArrowRight className="w-5 h-5" />
            </AnimatedButton>
          </Link>

          <div 
            onClick={handleDownload}
            className="glass-effect rounded-xl p-8 hover:scale-105 transition-transform duration-300 cursor-pointer"
          >
            <div className="bg-purple-500/10 p-4 rounded-xl w-16 h-16 flex items-center justify-center mb-6">
              <Download className="w-8 h-8 text-purple-400" />
            </div>
            <h2 className="text-2xl font-bold mb-4">Télécharger Collaba</h2>
            <p className="text-gray-400 mb-6">
              Installez l'application et profitez de toutes les fonctionnalités pendant 14 jours.
            </p>
            <AnimatedButton 
              variant="primary"
              loading={isDownloading}
            >
              {isDownloading ? 'Téléchargement...' : 'Télécharger'}
              {!isDownloading && <ArrowRight className="w-5 h-5" />}
            </AnimatedButton>
          </div>
        </div>

        <div className="glass-effect rounded-xl p-8 mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">Disponible sur Toutes les Plateformes</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Monitor className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Web App</h3>
              <p className="text-gray-400">Accessible depuis n'importe quel navigateur</p>
            </div>
            <div className="text-center">
              <Phone className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Mobile</h3>
              <p className="text-gray-400">Applications iOS et Android natives</p>
            </div>
            <div className="text-center">
              <Zap className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Desktop</h3>
              <p className="text-gray-400">Applications Windows, Mac et Linux</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}