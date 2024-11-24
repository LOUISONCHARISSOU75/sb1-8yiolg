import React from 'react';

interface StatCardProps {
  number: string;
  label: string;
}

export default function StatCard({ number, label }: StatCardProps) {
  return (
    <div className="transform hover:scale-105 transition-transform">
      <div className="text-4xl font-bold mb-2 heading-gradient">
        {number}
      </div>
      <div className="text-gray-400">{label}</div>
    </div>
  );
}