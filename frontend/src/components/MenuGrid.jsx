import React from 'react';
import MenuItem from './MenuItem';

const MenuGrid = ({ items }) => {
  if (items.length === 0) {
    return (
      <div className="text-center py-16">
        <p className="text-lg text-gray-500">Aucun plat ne correspond à vos critères de recherche.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map(item => (
        <MenuItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default MenuGrid;