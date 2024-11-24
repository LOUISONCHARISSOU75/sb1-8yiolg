import React from 'react';
import { Shield, Lock, Key, FileCheck } from 'lucide-react';

export default function Security() {
  return (
    <div className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="bg-purple-500/10 text-purple-400 px-4 py-2 rounded-full text-sm font-medium">
            SÉCURITÉ
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-4">
            Votre sécurité est notre priorité
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Nous mettons en œuvre les meilleures pratiques de sécurité pour protéger vos données.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-24">
          <div className="bg-gray-800/30 p-8 rounded-xl">
            <div className="bg-purple-500/10 p-3 rounded-lg inline-block mb-4">
              <Shield className="w-6 h-6 text-purple-400" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Chiffrement de bout en bout</h3>
            <p className="text-gray-400">
              Toutes vos données sont chiffrées en transit et au repos avec les standards les plus élevés.
            </p>
          </div>
          <div className="bg-gray-800/30 p-8 rounded-xl">
            <div className="bg-purple-500/10 p-3 rounded-lg inline-block mb-4">
              <Lock className="w-6 h-6 text-purple-400" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Authentification forte</h3>
            <p className="text-gray-400">
              Support de l'authentification à deux facteurs et intégration SSO pour une sécurité renforcée.
            </p>
          </div>
          <div className="bg-gray-800/30 p-8 rounded-xl">
            <div className="bg-purple-500/10 p-3 rounded-lg inline-block mb-4">
              <Key className="w-6 h-6 text-purple-400" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Contrôle d'accès</h3>
            <p className="text-gray-400">
              Gestion granulaire des permissions et journalisation complète des accès.
            </p>
          </div>
          <div className="bg-gray-800/30 p-8 rounded-xl">
            <div className="bg-purple-500/10 p-3 rounded-lg inline-block mb-4">
              <FileCheck className="w-6 h-6 text-purple-400" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Conformité</h3>
            <p className="text-gray-400">
              Conformité RGPD et certifications de sécurité internationales.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-6">Vous avez des questions sur la sécurité ?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Notre équipe de sécurité est là pour répondre à toutes vos questions.
          </p>
          <button className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 rounded-full font-medium text-lg transition">
            Contacter l'équipe sécurité
          </button>
        </div>
      </div>
    </div>
  );
}