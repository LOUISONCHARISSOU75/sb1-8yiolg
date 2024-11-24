import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  Zap, 
  ChevronDown, 
  MessageSquare, 
  Calendar, 
  FileText,
  Bot,
  Globe,
  Lock,
  BarChart,
  Settings,
  CreditCard,
  Video
} from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [featuresOpen, setFeaturesOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setFeaturesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const features = [
    { icon: <MessageSquare className="w-4 h-4" />, name: "Chat", path: "/features/chat" },
    { icon: <Calendar className="w-4 h-4" />, name: "Calendrier", path: "/features/calendar" },
    { icon: <FileText className="w-4 h-4" />, name: "Documents", path: "/features/documents" },
    { icon: <Bot className="w-4 h-4" />, name: "Assistant IA", path: "/features/ai-assistant" },
    { icon: <Globe className="w-4 h-4" />, name: "Accès Global", path: "/features/global-access" },
    { icon: <Lock className="w-4 h-4" />, name: "Sécurité", path: "/features/security" },
    { icon: <Video className="w-4 h-4" />, name: "Vision", path: "/features/vision" }
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'glass-effect py-4' : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2 group">
          <div className="relative">
            <Zap className="w-8 h-8 text-purple-500 animate-pulse-slow" />
            <div className="absolute inset-0 bg-purple-500 blur-lg opacity-50 group-hover:opacity-75 transition-opacity" />
          </div>
          <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
            Collaba
          </span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-8">
          <div className="relative" ref={menuRef}>
            <button 
              className="flex items-center space-x-1 hover:text-purple-400 transition-colors"
              onClick={() => setFeaturesOpen(!featuresOpen)}
            >
              <span>Fonctionnalités</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${featuresOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {featuresOpen && (
              <div className="absolute top-full left-0 mt-2 w-64 glass-effect rounded-xl p-2 border border-white/10">
                {features.map((feature) => (
                  <Link
                    key={feature.path}
                    to={feature.path}
                    className="flex items-center space-x-2 p-3 rounded-lg hover:bg-white/5 transition-colors"
                    onClick={() => setFeaturesOpen(false)}
                  >
                    {feature.icon}
                    <span>{feature.name}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link to="/pricing" className="hover:text-purple-400 transition-colors">
            Tarifs
          </Link>
          
          <Link to="/testimonials" className="hover:text-purple-400 transition-colors">
            Témoignages
          </Link>

          <div className="flex items-center space-x-4">
            <Link to="/dashboard" className="hover:text-purple-400 transition-colors">
              <BarChart className="w-5 h-5" />
            </Link>
            <Link to="/settings" className="hover:text-purple-400 transition-colors">
              <Settings className="w-5 h-5" />
            </Link>
            <Link to="/client-payments" className="hover:text-purple-400 transition-colors">
              <CreditCard className="w-5 h-5" />
            </Link>
          </div>
        </div>

        <Link 
          to="/signup" 
          className="relative group overflow-hidden px-6 py-2 rounded-full font-medium transition-all duration-300"
        >
          <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-600 to-pink-600 group-hover:opacity-90 transition-opacity" />
          <span className="absolute -inset-px bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur opacity-40 group-hover:opacity-100 transition-opacity" />
          <span className="relative">Essai Gratuit</span>
        </Link>
      </div>
    </nav>
  );
}