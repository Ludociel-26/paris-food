import React, { useState, useMemo } from 'react';
import { Search, ChevronDown, ChevronUp } from 'lucide-react';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import MenuItem from '../components/MenuItem';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { useLanguage } from '../contexts/LanguageContext';
import { mockMenuData } from '../mock';

const MenuPageNew = () => {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDietary, setSelectedDietary] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const INITIAL_DISPLAY_COUNT = 12;

  const categories = [
    { id: 'all', name: t.menu.all },
    { id: 'entrees', name: t.categories.entrees },
    { id: 'plats', name: t.categories.plats },
    { id: 'desserts', name: t.categories.desserts },
    { id: 'vins', name: t.categories.vins },
    { id: 'fromages', name: t.categories.fromages }
  ];

  const dietaryOptions = [
    { id: 'vegetarian', label: t.dietary.vegetarian },
    { id: 'vegan', label: t.dietary.vegan },
    { id: 'gluten-free', label: t.dietary['gluten-free'] },
    { id: 'pescatarian', label: t.dietary.pescatarian }
  ];

  const toggleDietary = (dietaryId) => {
    setSelectedDietary(prev => 
      prev.includes(dietaryId) 
        ? prev.filter(d => d !== dietaryId)
        : [...prev, dietaryId]
    );
  };

  // Filter items
  const filteredItems = useMemo(() => {
    let items = mockMenuData.menuItems;

    if (selectedCategory !== 'all') {
      items = items.filter(item => item.category === selectedCategory);
    }

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      items = items.filter(item => 
        item.name.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query)
      );
    }

    if (selectedDietary.length > 0) {
      items = items.filter(item => 
        selectedDietary.every(diet => item.dietary.includes(diet))
      );
    }

    return items;
  }, [selectedCategory, searchQuery, selectedDietary]);

  // Get autocomplete suggestions
  const suggestions = useMemo(() => {
    if (!searchQuery || searchQuery.length < 2) return [];
    
    const query = searchQuery.toLowerCase();
    const matchedItems = mockMenuData.menuItems.filter(item =>
      item.name.toLowerCase().includes(query)
    );
    
    return matchedItems.slice(0, 5).map(item => item.name);
  }, [searchQuery]);

  // Display items (with load more functionality)
  const displayedItems = showAll ? filteredItems : filteredItems.slice(0, INITIAL_DISPLAY_COUNT);
  const hasMore = filteredItems.length > INITIAL_DISPLAY_COUNT;

  const handleSuggestionClick = (suggestion) => {
    setSearchQuery(suggestion);
    setShowSuggestions(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-orange-50 to-amber-50">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-8 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-2">{t.menu.title}</h2>
          <p className="text-lg text-amber-700">{t.menu.subtitle}</p>
        </div>
        
        {/* Filters Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8 space-y-6">
          {/* Search Bar with Autocomplete */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-amber-500 w-5 h-5" />
            <Input
              type="text"
              placeholder={t.menu.search}
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setShowSuggestions(true);
              }}
              onFocus={() => setShowSuggestions(true)}
              onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
              className="pl-10 border-amber-200 focus:border-amber-500 focus:ring-amber-500"
            />
            
            {/* Autocomplete Suggestions */}
            {showSuggestions && suggestions.length > 0 && (
              <div className="absolute z-10 w-full mt-1 bg-white border border-amber-200 rounded-lg shadow-lg overflow-hidden">
                {suggestions.map((suggestion, index) => (
                  <div
                    key={index}
                    onClick={() => handleSuggestionClick(suggestion)}
                    className="px-4 py-2 hover:bg-amber-50 cursor-pointer transition-colors text-gray-700"
                  >
                    {suggestion}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Category Filters */}
          <div>
            <h3 className="text-sm font-semibold text-amber-900 mb-3">{t.menu.categories}</h3>
            <div className="flex flex-wrap gap-2">
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
            <h3 className="text-sm font-semibold text-amber-900 mb-3">{t.menu.dietary}</h3>
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

        {/* Menu Grid */}
        {displayedItems.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-lg text-gray-500">{t.menu.noResults}</p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {displayedItems.map(item => (
                <MenuItem key={item.id} item={item} />
              ))}
            </div>

            {/* Load More Button */}
            {hasMore && (
              <div className="text-center">
                <Button
                  onClick={() => setShowAll(!showAll)}
                  size="lg"
                  className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-6 text-lg group"
                >
                  {showAll ? (
                    <>
                      {t.menu.showLess}
                      <ChevronUp className="ml-2 w-5 h-5 group-hover:-translate-y-1 transition-transform" />
                    </>
                  ) : (
                    <>
                      {t.menu.loadMore} ({filteredItems.length - INITIAL_DISPLAY_COUNT} {t.menu.all})
                      <ChevronDown className="ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform" />
                    </>
                  )}
                </Button>
              </div>
            )}
          </>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default MenuPageNew;
