import React, { useState } from 'react';
import { 
  Video, 
  Users, 
  Share2, 
  Layout, 
  MessageSquare, 
  Hand,
  Mic,
  MicOff,
  VideoOff,
  ScreenShare,
  Grid,
  Settings,
  UserPlus,
  Maximize2,
  Minimize2
} from 'lucide-react';

export default function Vision() {
  const [layout, setLayout] = useState<'grid' | 'focus'>('grid');
  const [participants] = useState(Array(6).fill(null)); // Simulé pour la démo
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOff, setIsVideoOff] = useState(false);
  const [isSharing, setIsSharing] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  return (
    <div className="min-h-screen bg-mesh p-8 pt-24">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
              Vision
            </h1>
            <p className="text-gray-400">Réunion en cours : Brainstorming Projet X</p>
          </div>
          <div className="flex items-center gap-4">
            <button className="glass-effect px-4 py-2 rounded-lg flex items-center gap-2">
              <UserPlus className="w-4 h-4" />
              Inviter
            </button>
            <div className="glass-effect px-4 py-2 rounded-lg flex items-center gap-2">
              <Users className="w-4 h-4" />
              <span>42 participants</span>
            </div>
          </div>
        </div>

        {/* Main Video Grid */}
        <div className="glass-effect rounded-2xl p-6 mb-8 relative">
          <div className="absolute top-4 right-4 z-10 flex gap-2">
            <button 
              onClick={() => setLayout(layout === 'grid' ? 'focus' : 'grid')}
              className="p-2 bg-black/40 rounded-lg hover:bg-black/60 transition-colors"
            >
              <Grid className="w-5 h-5" />
            </button>
            <button 
              onClick={() => setIsFullscreen(!isFullscreen)}
              className="p-2 bg-black/40 rounded-lg hover:bg-black/60 transition-colors"
            >
              {isFullscreen ? <Minimize2 className="w-5 h-5" /> : <Maximize2 className="w-5 h-5" />}
            </button>
          </div>

          <div className={`grid gap-4 ${
            layout === 'grid' 
              ? 'grid-cols-2 md:grid-cols-4' 
              : 'grid-cols-1 md:grid-cols-[2fr_1fr]'
          }`}>
            {/* Participant principal (vous) */}
            <div className="aspect-video bg-purple-900/20 rounded-xl relative overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1590086782957-93c06ef21604?w=800&h=450&fit=crop" 
                alt="Participant"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Vous</span>
                  <div className="flex gap-2">
                    {isMuted && <Mic className="w-4 h-4 text-red-400" />}
                    {isVideoOff && <VideoOff className="w-4 h-4 text-red-400" />}
                  </div>
                </div>
              </div>
            </div>

            {/* Autres participants */}
            {participants.map((_, index) => (
              <div key={index} className="aspect-video bg-purple-900/20 rounded-xl relative overflow-hidden">
                <img 
                  src={`https://images.unsplash.com/photo-159008678295${index}-93c06ef21604?w=800&h=450&fit=crop`}
                  alt={`Participant ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Participant {index + 1}</span>
                    <Mic className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Controls */}
        <div className="flex justify-between items-center">
          <div className="flex gap-4">
            <button 
              onClick={() => setIsMuted(!isMuted)}
              className={`p-4 rounded-xl ${
                isMuted ? 'bg-red-500/20 text-red-400' : 'glass-effect'
              }`}
            >
              {isMuted ? <MicOff className="w-6 h-6" /> : <Mic className="w-6 h-6" />}
            </button>
            <button 
              onClick={() => setIsVideoOff(!isVideoOff)}
              className={`p-4 rounded-xl ${
                isVideoOff ? 'bg-red-500/20 text-red-400' : 'glass-effect'
              }`}
            >
              {isVideoOff ? <VideoOff className="w-6 h-6" /> : <Video className="w-6 h-6" />}
            </button>
            <button 
              onClick={() => setIsSharing(!isSharing)}
              className={`p-4 rounded-xl ${
                isSharing ? 'bg-purple-500/20 text-purple-400' : 'glass-effect'
              }`}
            >
              <ScreenShare className="w-6 h-6" />
            </button>
            <button className="p-4 rounded-xl glass-effect">
              <Hand className="w-6 h-6" />
            </button>
          </div>

          <div className="flex gap-4">
            <button className="p-4 rounded-xl glass-effect">
              <MessageSquare className="w-6 h-6" />
            </button>
            <button className="p-4 rounded-xl glass-effect">
              <Settings className="w-6 h-6" />
            </button>
            <button className="px-6 py-4 rounded-xl bg-red-500 hover:bg-red-600 transition-colors">
              Quitter
            </button>
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="glass-effect rounded-xl p-6">
            <div className="bg-purple-500/10 p-3 rounded-lg inline-block mb-4">
              <Users className="w-6 h-6 text-purple-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Jusqu'à 50 participants</h3>
            <p className="text-gray-400">
              Organisez des réunions avec jusqu'à 50 participants en HD
            </p>
          </div>

          <div className="glass-effect rounded-xl p-6">
            <div className="bg-purple-500/10 p-3 rounded-lg inline-block mb-4">
              <Share2 className="w-6 h-6 text-purple-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Partage d'écran</h3>
            <p className="text-gray-400">
              Partagez votre écran ou des applications spécifiques
            </p>
          </div>

          <div className="glass-effect rounded-xl p-6">
            <div className="bg-purple-500/10 p-3 rounded-lg inline-block mb-4">
              <Layout className="w-6 h-6 text-purple-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Dispositions flexibles</h3>
            <p className="text-gray-400">
              Choisissez entre différentes dispositions d'affichage
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}