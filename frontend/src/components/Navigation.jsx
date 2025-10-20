import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChefHat, Menu as MenuIcon, X, MapPin, Phone, Mail } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';
import { mockMenuData } from '../mock';

const Navigation = () => {
  const { t } = useLanguage();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { restaurant } = mockMenuData;

  const navItems = [
    { path: '/', label: t.nav.home },
    { path: '/menu', label: t.nav.menu },
    { path: '/location', label: t.nav.location },
    { path: '/gallery', label: t.nav.gallery },
    { path: '/social', label: t.nav.social }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-gradient-to-r from-amber-50 to-orange-50 border-b border-amber-200 sticky top-0 z-50 backdrop-blur-sm bg-opacity-95 shadow-md">
      <div className="container mx-auto px-4">
        {/* Top Bar with Contact Info */}
        <div className="hidden md:flex justify-between items-center py-2 text-xs text-amber-700 border-b border-amber-200">
          <div className="flex gap-4">
            <div className="flex items-center gap-1">
              <MapPin className="w-3 h-3" />
              <span>{restaurant.address}</span>
            </div>
            <div className="flex items-center gap-1">
              <Phone className="w-3 h-3" />
              <span>{restaurant.phone}</span>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <Mail className="w-3 h-3" />
            <span>contact@atmospherejoyeuse.fr</span>
          </div>
        </div>

        {/* Main Navigation */}
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="bg-amber-600 p-2 rounded-full group-hover:bg-amber-700 transition-colors duration-200">
              <ChefHat className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-amber-900">{restaurant.name}</h1>
              <p className="text-xs text-amber-700 italic hidden md:block">{restaurant.tagline}</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-all duration-200 hover:text-amber-700 ${
                  isActive(item.path)
                    ? 'text-amber-700 border-b-2 border-amber-600 pb-1'
                    : 'text-amber-900'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <LanguageSwitcher />
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-3 lg:hidden">
            <LanguageSwitcher />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-amber-900 hover:text-amber-700 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-amber-200 animate-fade-in">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block py-3 px-4 rounded-lg transition-all duration-200 ${
                  isActive(item.path)
                    ? 'bg-amber-600 text-white font-semibold'
                    : 'text-amber-900 hover:bg-amber-100'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;