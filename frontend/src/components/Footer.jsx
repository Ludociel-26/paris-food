import React from 'react';
import { Clock, MapPin, Phone, Mail, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-amber-900 to-amber-950 text-amber-50 mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-amber-200">L'Atmosphère Joyeuse</h3>
            <p className="text-amber-300 italic mb-4">Cuisine Française Authentique</p>
            <p className="text-sm text-amber-200 leading-relaxed">
              Une expérience culinaire parisienne exceptionnelle où tradition et élégance se rencontrent.
            </p>
          </div>

          {/* Horaires */}
          <div>
            <h4 className="text-lg font-semibold mb-4 flex items-center gap-2 text-amber-200">
              <Clock className="w-5 h-5" />
              Horaires d'Ouverture
            </h4>
            <div className="space-y-2 text-sm text-amber-300">
              <div className="flex justify-between">
                <span>Lundi - Vendredi:</span>
                <span className="font-semibold">12h - 14h30, 19h - 22h30</span>
              </div>
              <div className="flex justify-between">
                <span>Samedi:</span>
                <span className="font-semibold">19h - 23h</span>
              </div>
              <div className="flex justify-between">
                <span>Dimanche:</span>
                <span className="font-semibold text-red-400">Fermé</span>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-amber-200">Contact</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2 text-amber-300">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>42 Rue de la Gastronomie<br/>75008 Paris</span>
              </div>
              <div className="flex items-center gap-2 text-amber-300">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span>+33 1 42 86 82 82</span>
              </div>
              <div className="flex items-center gap-2 text-amber-300">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span>contact@atmospherejoyeuse.fr</span>
              </div>
            </div>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-amber-300 hover:text-amber-100 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-amber-300 hover:text-amber-100 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-amber-300 hover:text-amber-100 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-amber-800 mt-8 pt-6 text-center text-sm text-amber-400">
          <p>© 2025 L'Atmosphère Joyeuse. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;