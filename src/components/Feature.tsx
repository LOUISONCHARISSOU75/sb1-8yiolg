import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function Feature({ icon, title, description }: FeatureProps) {
  return (
    <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-white/5 transition-colors">
      <div className="bg-purple-500/10 p-2 rounded-lg">
        {icon}
      </div>
      <div>
        <h3 className="font-semibold mb-1">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  );
}