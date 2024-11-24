import { useQuery } from '@tanstack/react-query';
import { useAuthStore } from '../stores/useAuthStore';

export const useSubscription = () => {
  const { user } = useAuthStore();

  return useQuery({
    queryKey: ['subscription', user?.uid],
    queryFn: async () => {
      if (!user) return null;
      const response = await fetch(`${import.meta.env.VITE_API_URL}/subscriptions/${user.uid}`);
      return response.json();
    },
    enabled: !!user,
  });
};