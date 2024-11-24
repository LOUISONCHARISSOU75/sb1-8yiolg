import React from 'react';
import { Link } from 'react-router-dom';
import { Lock, ArrowRight } from 'lucide-react';

interface FeaturePreviewProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  isPremium?: boolean;
  previewImage: string;
  path: string;
}

export default function FeaturePreview({ 
  icon, 
  title, 
  description, 
  isPremium, 
  previewImage, 
  path 
}: FeaturePreviewProps) {
  return (
    <Link 
      to={path}
      className="card relative overflow-hidden group hover:scale-105 transition-all duration-300"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 z-10" />
      
      <img 
        src={previewImage} 
        alt={title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
      />
      
      <div className="relative z-20 h-full flex flex-col">
        <div className="flex-1 p-6">
          <div className="bg-violet-500/20 p-3 rounded-xl w-fit mb-4">
            {icon}
          </div>
          
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-gray-300 text-sm">{description}</p>
        </div>

        <div className="p-6 pt-0 flex items-center justify-between">
          <div className="flex items-center gap-2 text-violet-400 group-hover:text-violet-300 transition-colors">
            <span>{isPremium ? 'Voir la Démo' : 'Explorer'}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
          
          {isPremium && (
            <div className="flex items-center gap-2 text-violet-400/80">
              <Lock className="w-4 h-4" />
              <span className="text-sm">Premium</span>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}