import React from 'react';
import { Clock, MapPin, Phone, Mail, Facebook, Instagram, Twitter } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { mockMenuData } from '../mock';

const Footer = () => {
  const { t } = useLanguage();
  const { restaurant } = mockMenuData;

  return (
    <footer className="bg-gradient-to-b from-amber-900 to-amber-950 text-amber-50 mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-amber-200">{restaurant.name}</h3>
            <p className="text-amber-300 italic mb-4">{t.hero.tagline}</p>
            <p className="text-sm text-amber-200 leading-relaxed">
              {t.footer.aboutText}
            </p>
          </div>

          {/* Horaires */}
          <div>
            <h4 className="text-lg font-semibold mb-4 flex items-center gap-2 text-amber-200">
              <Clock className="w-5 h-5" />
              {t.footer.hours}
            </h4>
            <div className="space-y-2 text-sm text-amber-300">
              <div className="flex justify-between">
                <span>{t.footer.mondayFriday}</span>
                <span className="font-semibold">12h - 14h30, 19h - 22h30</span>
              </div>
              <div className="flex justify-between">
                <span>{t.footer.saturday}</span>
                <span className="font-semibold">19h - 23h</span>
              </div>
              <div className="flex justify-between">
                <span>{t.footer.sunday}</span>
                <span className="font-semibold text-red-400">{t.footer.closed}</span>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-amber-200">{t.footer.contact}</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2 text-amber-300">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>{restaurant.address}</span>
              </div>
              <div className="flex items-center gap-2 text-amber-300">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span>{restaurant.phone}</span>
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
          <p>© 2025 {restaurant.name}. {t.footer.rights}.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;