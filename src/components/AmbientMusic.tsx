import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

export default function AmbientMusic() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio('https://assets.mixkit.co/music/preview/mixkit-tech-ambient-2-767.mp3');
    audioRef.current.loop = true;
    audioRef.current.volume = 0.3;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <button
      onClick={togglePlay}
      className="fixed bottom-6 right-6 z-50 p-4 glass-effect rounded-full hover:scale-110 transition-transform duration-300 group"
      aria-label={isPlaying ? 'Couper le son' : 'Activer le son'}
    >
      {isPlaying ? (
        <Volume2 className="w-6 h-6 text-violet-400 group-hover:text-violet-300" />
      ) : (
        <VolumeX className="w-6 h-6 text-violet-400 group-hover:text-violet-300" />
      )}
      
      {/* Glow Effect */}
      <div className="absolute inset-0 bg-violet-500/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
    </button>
  );
}