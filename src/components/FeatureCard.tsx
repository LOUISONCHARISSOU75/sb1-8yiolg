import React, { ReactNode } from 'react';

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="card hover-card">
      <div className="mb-4 bg-gradient-to-r from-violet-500/10 to-fuchsia-500/10 p-4 rounded-xl inline-block">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 heading-gradient">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}