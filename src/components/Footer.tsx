import React from 'react';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="border-t border-violet-900/30 bg-black/40">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-12">
          <div>
            <Logo />
            <p className="text-gray-400 mt-4">
              Façonnons ensemble le futur du travail collaboratif.
            </p>
          </div>
          <FooterColumn 
            title="Produit"
            links={[
              { label: "Fonctionnalités", href: "#" },
              { label: "Tarifs", href: "#" },
              { label: "Sécurité", href: "#" }
            ]}
          />
          <FooterColumn 
            title="Entreprise"
            links={[
              { label: "À propos", href: "#" },
              { label: "Blog", href: "#" },
              { label: "Carrières", href: "#" }
            ]}
          />
          <FooterColumn 
            title="Légal"
            links={[
              { label: "Confidentialité", href: "#" },
              { label: "CGU", href: "#" },
              { label: "RGPD", href: "#" }
            ]}
          />
        </div>
        <div className="border-t border-violet-900/30 mt-12 pt-8 text-center text-gray-400">
          <p>© 2024 Collaba. Propulsé vers le futur.</p>
        </div>
      </div>
    </footer>
  );
}

interface FooterColumnProps {
  title: string;
  links: Array<{ label: string; href: string; }>;
}

function FooterColumn({ title, links }: FooterColumnProps) {
  return (
    <div>
      <h3 className="font-semibold mb-4 text-violet-400">{title}</h3>
      <ul className="space-y-2 text-gray-400">
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.href} className="hover:text-violet-400 transition">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}