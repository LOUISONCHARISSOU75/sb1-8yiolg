import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

interface FeatureLinkProps {
  to: string;
  feature: string;
  children: React.ReactNode;
  className?: string;
}

export default function FeatureLink({ to, feature, children, className }: FeatureLinkProps) {
  const { hasAccess } = useAuth();
  const isAccessible = hasAccess(feature);

  return (
    <Link 
      to={isAccessible ? to : '/pricing'} 
      className={`block transition-all duration-300 ${className}`}
    >
      {children}
    </Link>
  );
}