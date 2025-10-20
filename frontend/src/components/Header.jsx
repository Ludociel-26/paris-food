import React from 'react';
import { ChefHat, MapPin, Phone } from 'lucide-react';
import { mockMenuData } from '../mock';

const Header = () => {
  const { restaurant } = mockMenuData;

  return (
    <header className="bg-gradient-to-r from-amber-50 to-orange-50 border-b border-amber-200 sticky top-0 z-50 backdrop-blur-sm bg-opacity-95">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="bg-amber-600 p-3 rounded-full">
              <ChefHat className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-amber-900">{restaurant.name}</h1>
              <p className="text-sm text-amber-700 italic">{restaurant.tagline}</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-4 text-sm text-amber-800">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>{restaurant.address}</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>{restaurant.phone}</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;