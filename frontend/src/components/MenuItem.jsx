import React from 'react';
import { Badge } from './ui/badge';
import { Card } from './ui/card';
import { Star } from 'lucide-react';
import { getDietaryLabel } from '../mock';

const MenuItem = ({ item }) => {
  return (
    <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-amber-100">
      <div className="relative">
        <img 
          src={item.image} 
          alt={item.name}
          className="w-full h-48 object-cover"
          loading="lazy"
        />
        {item.featured && (
          <div className="absolute top-3 right-3 bg-amber-600 text-white px-3 py-1 rounded-full flex items-center gap-1 shadow-lg">
            <Star className="w-4 h-4 fill-current" />
            <span className="text-xs font-semibold">Spécialité</span>
          </div>
        )}
      </div>
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-bold text-amber-900 flex-1">{item.name}</h3>
          <span className="text-xl font-bold text-amber-700 ml-2">{item.price}€</span>
        </div>
        <p className="text-sm text-gray-600 mb-3 leading-relaxed">{item.description}</p>
        {item.dietary && item.dietary.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {getDietaryLabel(item.dietary).map((label, index) => (
              <Badge 
                key={index} 
                variant="secondary"
                className="text-xs bg-green-100 text-green-800 border-green-200"
              >
                {label}
              </Badge>
            ))}
          </div>
        )}
      </div>
    </Card>
  );
};

export default MenuItem;