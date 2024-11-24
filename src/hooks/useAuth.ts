import { useState, useEffect } from 'react';

interface User {
  id: string;
  email: string;
  plan: 'free' | 'pro' | 'enterprise';
}

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simuler la vérification de l'authentification
    const checkAuth = async () => {
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
      setLoading(false);
    };

    checkAuth();
  }, []);

  const hasAccess = (feature: string): boolean => {
    if (!user) return false;
    
    const featureAccess = {
      chat: ['free', 'pro', 'enterprise'],
      calendar: ['pro', 'enterprise'],
      documents: ['pro', 'enterprise'],
      aiAssistant: ['enterprise'],
      globalAccess: ['pro', 'enterprise'],
      vision: ['pro', 'enterprise'],
      security: ['enterprise']
    };

    return featureAccess[feature]?.includes(user.plan) || false;
  };

  return { user, loading, hasAccess };
}