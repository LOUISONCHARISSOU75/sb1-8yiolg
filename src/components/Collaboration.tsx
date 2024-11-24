import React, { useEffect } from 'react';
import { socket } from '../lib/socket';
import { useAuthStore } from '../stores/useAuthStore';

export default function Collaboration() {
  const { user } = useAuthStore();

  useEffect(() => {
    if (!user) return;

    socket.connect();
    socket.emit('join', { userId: user.uid });

    return () => {
      socket.disconnect();
    };
  }, [user]);

  return (
    <div className="collaboration-space">
      {/* Implémentez ici les fonctionnalités de collaboration en temps réel */}
    </div>
  );
}