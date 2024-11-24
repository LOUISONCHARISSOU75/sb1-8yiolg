import React from 'react';
import { 
  MessageSquare, 
  Calendar, 
  FileText, 
  Bot, 
  Globe, 
  Lock,
  Video,
  Zap,
  Brain
} from 'lucide-react';
import { Link } from 'react-router-dom';
import FeaturePreview from './FeaturePreview';

const features = [
  {
    icon: <Bot className="w-6 h-6" />,
    name: "Assistant Personnel",
    description: "IA qui apprend et s'adapte à votre façon de travailler",
    path: "/features/ai-assistant",
    previewImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop",
    isPremium: true
  },
  {
    icon: <Brain className="w-6 h-6" />,
    name: "Apprentissage Continu",
    description: "Votre assistant évolue avec votre équipe",
    path: "/features/learning",
    previewImage: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&h=400&fit=crop",
    isPremium: true
  },
  {
    icon: <MessageSquare className="w-6 h-6" />,
    name: "Chat Temps Réel",
    description: "Communication instantanée avec votre équipe",
    path: "/features/chat",
    previewImage: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=800&h=400&fit=crop",
    isPremium: false
  },
  {
    icon: <Calendar className="w-6 h-6" />,
    name: "Calendrier Intelligent",
    description: "Planification optimisée par l'IA",
    path: "/features/calendar",
    previewImage: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=800&h=400&fit=crop",
    isPremium: true
  },
  {
    icon: <FileText className="w-6 h-6" />,
    name: "Documents Collaboratifs",
    description: "Édition en temps réel et contrôle de versions",
    path: "/features/documents",
    previewImage: "https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=800&h=400&fit=crop",
    isPremium: true
  },
  {
    icon: <Globe className="w-6 h-6" />,
    name: "Accès Global",
    description: "Travaillez de n'importe où dans le monde",
    path: "/features/global-access",
    previewImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop",
    isPremium: true
  },
  {
    icon: <Video className="w-6 h-6" />,
    name: "Vision",
    description: "Visioconférence nouvelle génération",
    path: "/features/vision",
    previewImage: "https://images.unsplash.com/photo-1516387938699-a93567ec168e?w=800&h=400&fit=crop",
    isPremium: true
  },
  {
    icon: <Lock className="w-6 h-6" />,
    name: "Sécurité Avancée",
    description: "Protection de niveau entreprise",
    path: "/features/security",
    previewImage: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=400&fit=crop",
    isPremium: true
  }
];

export default function FeaturesGrid() {
  return (
    <div className="py-24 bg-dark" id="features">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block bg-violet-500/10 text-violet-400 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Zap className="w-4 h-4 inline-block mr-2" />
            Fonctionnalités
          </span>
          <h2 className="text-4xl font-bold heading-gradient mb-4">
            Une Suite Complète d'Outils
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Découvrez comment Collaba transforme votre façon de travailler avec des outils innovants
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeaturePreview
              key={index}
              icon={feature.icon}
              title={feature.name}
              description={feature.description}
              isPremium={feature.isPremium}
              previewImage={feature.previewImage}
              path={feature.path}
            />
          ))}
        </div>
      </div>
    </div>
  );
}