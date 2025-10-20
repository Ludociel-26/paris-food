import React, { useState, useMemo } from 'react';
import Header from '../components/Header';
import MenuFilters from '../components/MenuFilters';
import MenuGrid from '../components/MenuGrid';
import Footer from '../components/Footer';
import { mockMenuData } from '../mock';

const MenuPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDietary, setSelectedDietary] = useState([]);

  const filteredItems = useMemo(() => {
    let items = mockMenuData.menuItems;

    // Filter by category
    if (selectedCategory !== 'all') {
      items = items.filter(item => item.category === selectedCategory);
    }

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      items = items.filter(item => 
        item.name.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query)
      );
    }

    // Filter by dietary preferences
    if (selectedDietary.length > 0) {
      items = items.filter(item => 
        selectedDietary.every(diet => item.dietary.includes(diet))
      );
    }

    return items;
  }, [selectedCategory, searchQuery, selectedDietary]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-orange-50 to-amber-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-amber-900 mb-2">Notre Menu</h2>
          <p className="text-lg text-amber-700">Découvrez nos spécialités françaises</p>
        </div>
        
        <MenuFilters 
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          selectedDietary={selectedDietary}
          setSelectedDietary={setSelectedDietary}
        />
        
        <MenuGrid items={filteredItems} />
      </main>
      <Footer />
    </div>
  );
};

export default MenuPage;