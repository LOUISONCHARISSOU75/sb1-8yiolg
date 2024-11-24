import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

interface ProtectedRouteProps {
  children: React.ReactNode;
  feature?: string;
}

export default function ProtectedRoute({ children, feature }: ProtectedRouteProps) {
  const { user, loading, hasAccess } = useAuth();
  const location = useLocation();

  if (loading) {
    return <div>Chargement...</div>;
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (feature && !hasAccess(feature)) {
    return <Navigate to="/pricing" replace />;
  }

  return <>{children}</>;
}