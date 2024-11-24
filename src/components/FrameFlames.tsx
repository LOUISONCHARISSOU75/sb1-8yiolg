import React from 'react';
import PurpleFlame from './PurpleFlame';

export default function FrameFlames() {
  return (
    <div className="fixed inset-0 pointer-events-none">
      {/* Top Flames */}
      <div className="absolute top-0 left-0 right-0 flex justify-around">
        {[...Array(5)].map((_, i) => (
          <PurpleFlame 
            key={`top-${i}`} 
            className="w-24 h-24 -mt-12 transform rotate-180"
            style={{ animationDelay: `${i * 0.2}s` }}
          />
        ))}
      </div>

      {/* Bottom Flames */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-around">
        {[...Array(5)].map((_, i) => (
          <PurpleFlame 
            key={`bottom-${i}`} 
            className="w-24 h-24 -mb-12"
            style={{ animationDelay: `${i * 0.2}s` }}
          />
        ))}
      </div>

      {/* Left Flames */}
      <div className="absolute top-0 bottom-0 left-0 flex flex-col justify-around">
        {[...Array(5)].map((_, i) => (
          <PurpleFlame 
            key={`left-${i}`} 
            className="w-24 h-24 -ml-12 transform -rotate-90"
            style={{ animationDelay: `${i * 0.2}s` }}
          />
        ))}
      </div>

      {/* Right Flames */}
      <div className="absolute top-0 bottom-0 right-0 flex flex-col justify-around">
        {[...Array(5)].map((_, i) => (
          <PurpleFlame 
            key={`right-${i}`} 
            className="w-24 h-24 -mr-12 transform rotate-90"
            style={{ animationDelay: `${i * 0.2}s` }}
          />
        ))}
      </div>
    </div>
  );
}