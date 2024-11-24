import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Waves } from 'lucide-react';

export default function AmbientAudio() {
  const [isPlaying, setIsPlaying] = useState(false);
  const musicRef = useRef<HTMLAudioElement | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const oscillatorRef = useRef<OscillatorNode | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);

  useEffect(() => {
    // Initialize ambient music
    musicRef.current = new Audio('https://assets.mixkit.co/music/preview/mixkit-peaceful-meditation-573.mp3');
    musicRef.current.loop = true;
    musicRef.current.volume = 0.2;

    // Initialize AudioContext
    audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();

    return () => {
      if (musicRef.current) {
        musicRef.current.pause();
      }
      if (oscillatorRef.current) {
        oscillatorRef.current.disconnect();
      }
      if (audioContextRef.current) {
        audioContextRef.current.close();
      }
    };
  }, []);

  const startBinauralBeat = () => {
    if (!audioContextRef.current) return;

    // Create new oscillator and gain node
    oscillatorRef.current = audioContextRef.current.createOscillator();
    gainNodeRef.current = audioContextRef.current.createGain();

    // Configure oscillator
    oscillatorRef.current.frequency.setValueAtTime(144, audioContextRef.current.currentTime);
    oscillatorRef.current.connect(gainNodeRef.current);
    gainNodeRef.current.connect(audioContextRef.current.destination);
    gainNodeRef.current.gain.setValueAtTime(0.1, audioContextRef.current.currentTime);

    // Start the oscillator
    oscillatorRef.current.start();
  };

  const stopBinauralBeat = () => {
    if (oscillatorRef.current) {
      oscillatorRef.current.stop();
      oscillatorRef.current.disconnect();
      oscillatorRef.current = null;
    }
  };

  const togglePlay = async () => {
    if (!isPlaying) {
      // Resume AudioContext if suspended
      if (audioContextRef.current?.state === 'suspended') {
        await audioContextRef.current.resume();
      }

      // Start playback
      musicRef.current?.play();
      startBinauralBeat();
    } else {
      // Stop playback
      musicRef.current?.pause();
      stopBinauralBeat();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex gap-2">
      <button
        onClick={togglePlay}
        className="p-4 glass-effect rounded-full hover:scale-110 transition-transform duration-300 group relative"
        aria-label={isPlaying ? 'Couper le son' : 'Activer le son'}
      >
        {isPlaying ? (
          <Volume2 className="w-6 h-6 text-violet-400 group-hover:text-violet-300" />
        ) : (
          <VolumeX className="w-6 h-6 text-violet-400 group-hover:text-violet-300" />
        )}
        
        {/* Animated Waves */}
        {isPlaying && (
          <div className="absolute inset-0 flex items-center justify-center">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="absolute w-full h-full border border-violet-400/30 rounded-full animate-ping"
                style={{
                  animationDelay: `${i * 0.5}s`,
                  animationDuration: '3s'
                }}
              />
            ))}
          </div>
        )}
        
        {/* Glow Effect */}
        <div className="absolute inset-0 bg-violet-500/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
      </button>

      {isPlaying && (
        <div className="flex items-center gap-2 px-4 py-2 glass-effect rounded-full text-sm text-violet-400">
          <Waves className="w-4 h-4 animate-pulse" />
          <span>144 Hz</span>
        </div>
      )}
    </div>
  );
}