import React from 'react';
import { Search, Filter } from 'lucide-react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { mockMenuData } from '../mock';

const MenuFilters = ({ 
  selectedCategory, 
  setSelectedCategory, 
  searchQuery, 
  setSearchQuery,
  selectedDietary,
  setSelectedDietary 
}) => {
  const { categories } = mockMenuData;
  
  const dietaryOptions = [
    { id: 'vegetarian', label: 'Végétarien' },
    { id: 'vegan', label: 'Végétalien' },
    { id: 'gluten-free', label: 'Sans Gluten' },
    { id: 'pescatarian', label: 'Pescétarien' }
  ];

  const toggleDietary = (dietaryId) => {
    setSelectedDietary(prev => 
      prev.includes(dietaryId) 
        ? prev.filter(d => d !== dietaryId)
        : [...prev, dietaryId]
    );
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8 space-y-6">
      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-amber-500 w-5 h-5" />
        <Input
          type="text"
          placeholder="Rechercher un plat..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10 border-amber-200 focus:border-amber-500 focus:ring-amber-500"
        />
      </div>

      {/* Category Filters */}
      <div>
        <div className="flex items-center gap-2 mb-3">
          <Filter className="w-4 h-4 text-amber-700" />
          <h3 className="text-sm font-semibold text-amber-900">Catégories</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button
            variant={selectedCategory === 'all' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setSelectedCategory('all')}
            className={selectedCategory === 'all' ? 'bg-amber-600 hover:bg-amber-700' : 'border-amber-300 text-amber-700 hover:bg-amber-50'}
          >
            Tous
          </Button>
          {categories.map(category => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? 'default' : 'outline'}
              size="sm"
              onClick={() => setSelectedCategory(category.id)}
              className={selectedCategory === category.id ? 'bg-amber-600 hover:bg-amber-700' : 'border-amber-300 text-amber-700 hover:bg-amber-50'}
            >
              {category.name}
            </Button>
          ))}
        </div>
      </div>

      {/* Dietary Filters */}
      <div>
        <h3 className="text-sm font-semibold text-amber-900 mb-3">Régimes Alimentaires</h3>
        <div className="flex flex-wrap gap-2">
          {dietaryOptions.map(option => (
            <Badge
              key={option.id}
              variant={selectedDietary.includes(option.id) ? 'default' : 'outline'}
              className={`cursor-pointer transition-all ${
                selectedDietary.includes(option.id)
                  ? 'bg-green-600 hover:bg-green-700 text-white'
                  : 'border-green-300 text-green-700 hover:bg-green-50'
              }`}
              onClick={() => toggleDietary(option.id)}
            >
              {option.label}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuFilters;