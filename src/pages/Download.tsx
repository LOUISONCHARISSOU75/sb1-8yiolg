import React, { useState } from 'react';
import { Download, Monitor, Phone, Laptop, CheckCircle } from 'lucide-react';
import AnimatedButton from '../components/AnimatedButton';

export default function Download() {
  const [downloadStarted, setDownloadStarted] = useState(false);

  const handleDownload = async () => {
    setDownloadStarted(true);
    try {
      // Simuler un délai de téléchargement
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Créer un lien de téléchargement fictif
      const link = document.createElement('a');
      link.href = '/downloads/collaba-setup.exe';
      link.download = 'collaba-setup.exe';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } finally {
      setDownloadStarted(false);
    }
  };

  return (
    <div className="min-h-screen bg-mesh p-8 pt-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text mb-4">
            Téléchargez Collaba
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Accédez à toute la puissance de Collaba sur votre appareil
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="glass-effect rounded-xl p-8 text-center">
            <Monitor className="w-12 h-12 text-purple-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Version Web</h3>
            <p className="text-gray-400 mb-6">
              Accessible depuis n'importe quel navigateur
            </p>
            <a href="https://app.collaba.tech" target="_blank" rel="noopener noreferrer">
              <AnimatedButton variant="secondary">
                Accéder à l'App Web
              </AnimatedButton>
            </a>
          </div>

          <div className="glass-effect rounded-xl p-8 text-center">
            <Laptop className="w-12 h-12 text-purple-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Version Desktop</h3>
            <p className="text-gray-400 mb-6">
              Application native pour Windows, Mac et Linux
            </p>
            <AnimatedButton 
              variant="primary"
              onClick={handleDownload}
              loading={downloadStarted}
            >
              <Download className="w-5 h-5" />
              Télécharger
            </AnimatedButton>
          </div>

          <div className="glass-effect rounded-xl p-8 text-center">
            <Phone className="w-12 h-12 text-purple-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Mobile Apps</h3>
            <p className="text-gray-400 mb-6">
              Applications iOS et Android
            </p>
            <div className="space-y-3">
              <a href="#" className="block">
                <img 
                  src="/app-store-badge.png" 
                  alt="Télécharger sur l'App Store"
                  className="h-10 mx-auto"
                />
              </a>
              <a href="#" className="block">
                <img 
                  src="/google-play-badge.png" 
                  alt="Disponible sur Google Play"
                  className="h-10 mx-auto"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="glass-effect rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-6">Pourquoi télécharger Collaba ?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Performance native optimisée",
              "Notifications système",
              "Intégration avec l'OS",
              "Raccourcis clavier",
              "Mode hors-ligne",
              "Synchronisation automatique"
            ].map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-purple-400" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}