// Mock data for L'Atmosphère Joyeuse Restaurant Menu

export const mockMenuData = {
  restaurant: {
    name: "L'Atmosphère Joyeuse",
    tagline: "Cuisine Française Authentique",
    description: "Une expérience culinaire parisienne exceptionnelle",
    address: "42 Rue de la Gastronomie, 75008 Paris",
    phone: "+33 1 42 86 82 82"
  },
  categories: [
    { id: 'entrees', name: 'Entrées', icon: 'Soup' },
    { id: 'plats', name: 'Plats', icon: 'UtensilsCrossed' },
    { id: 'desserts', name: 'Desserts', icon: 'Cake' },
    { id: 'vins', name: 'Vins', icon: 'Wine' },
    { id: 'fromages', name: 'Fromages', icon: 'Beef' }
  ],
  menuItems: [
    // Entrées
    {
      id: 1,
      name: "Vol-au-Vent aux Fruits de Mer",
      category: "entrees",
      description: "Bouchée feuilletée garnie de fruits de mer et sauce crémeuse",
      price: 18,
      image: "https://images.unsplash.com/photo-1621327017866-6fb07e6c96ea?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwxfHxmcmVuY2glMjBjdWlzaW5lfGVufDB8fHx8MTc2MDk0MDA5NXww&ixlib=rb-4.1.0&q=85",
      dietary: ["pescatarian"],
      featured: true
    },
    {
      id: 2,
      name: "Escargots de Bourgogne",
      category: "entrees",
      description: "Escargots traditionnels au beurre persillé",
      price: 16,
      image: "https://images.unsplash.com/photo-1715249792894-43ad23412d3d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwzfHxmcmVuY2glMjBjdWlzaW5lfGVufDB8fHx8MTc2MDk0MDA5NXww&ixlib=rb-4.1.0&q=85",
      dietary: [],
      featured: false
    },
    {
      id: 3,
      name: "Foie Gras Poêlé",
      category: "entrees",
      description: "Foie gras poêlé sur pain d'épices et chutney de figues",
      price: 24,
      image: "https://images.unsplash.com/photo-1695290242164-e595e411424c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NjZ8MHwxfHNlYXJjaHwyfHxlbGVnYW50JTIwcGxhdGluZ3xlbnwwfHx8fDE3NjA5NDAxMDF8MA&ixlib=rb-4.1.0&q=85",
      dietary: [],
      featured: true
    },
    {
      id: 4,
      name: "Soupe à l'Oignon Gratinée",
      category: "entrees",
      description: "Soupe à l'oignon traditionnelle gratinée au fromage",
      price: 14,
      image: "https://images.unsplash.com/photo-1600663791817-d74f5196ba29?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwyfHxmcmVuY2glMjBjdWlzaW5lfGVufDB8fHx8MTc2MDk0MDA5NXww&ixlib=rb-4.1.0&q=85",
      dietary: ["vegetarian"],
      featured: false
    },
    // Plats
    {
      id: 5,
      name: "Boeuf Bourguignon",
      category: "plats",
      description: "Boeuf mijoté au vin rouge de Bourgogne avec légumes",
      price: 32,
      image: "https://images.unsplash.com/photo-1705755402973-009b7877a0f9?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHwxfHxnb3VybWV0JTIwc3RlYWt8ZW58MHx8fHwxNzYwOTQwMTY5fDA&ixlib=rb-4.1.0&q=85",
      dietary: [],
      featured: true
    },
    {
      id: 6,
      name: "Coq au Vin",
      category: "plats",
      description: "Poulet fermier mijoté au vin rouge avec champignons et lardons",
      price: 28,
      image: "https://images.unsplash.com/photo-1750943024048-a4c9912b1425?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NjZ8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwcGxhdGluZ3xlbnwwfHx8fDE3NjA5NDAxMDF8MA&ixlib=rb-4.1.0&q=85",
      dietary: [],
      featured: false
    },
    {
      id: 7,
      name: "Bouillabaisse Marseillaise",
      category: "plats",
      description: "Soupe de poissons méditerranéenne avec rouille et croûtons",
      price: 34,
      image: "https://images.unsplash.com/photo-1751890939642-52aa0d543bd0?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NjZ8MHwxfHNlYXJjaHw0fHxlbGVnYW50JTIwcGxhdGluZ3xlbnwwfHx8fDE3NjA5NDAxMDF8MA&ixlib=rb-4.1.0&q=85",
      dietary: ["pescatarian"],
      featured: true
    },
    {
      id: 8,
      name: "Magret de Canard",
      category: "plats",
      description: "Magret de canard rôti, sauce aux cerises et gratin dauphinois",
      price: 30,
      image: "https://images.unsplash.com/photo-1555178897-7774373fbe9e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHw0fHxnb3VybWV0JTIwc3RlYWt8ZW58MHx8fHwxNzYwOTQwMTY5fDA&ixlib=rb-4.1.0&q=85",
      dietary: [],
      featured: false
    },
    {
      id: 9,
      name: "Ratatouille Provençale",
      category: "plats",
      description: "Légumes méditerranéens mijotés aux herbes de Provence",
      price: 22,
      image: "https://images.pexels.com/photos/65175/pexels-photo-65175.jpeg",
      dietary: ["vegetarian", "vegan", "gluten-free"],
      featured: false
    },
    // Desserts
    {
      id: 10,
      name: "Crème Brûlée",
      category: "desserts",
      description: "Crème vanille caramélisée à la perfection",
      price: 12,
      image: "https://images.unsplash.com/photo-1709037331487-4ed2a6cc4b4a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDF8MHwxfHNlYXJjaHwyfHxmcmVuY2glMjBkZXNzZXJ0c3xlbnwwfHx8fDE3NjA5NDAxMzJ8MA&ixlib=rb-4.1.0&q=85",
      dietary: ["vegetarian", "gluten-free"],
      featured: true
    },
    {
      id: 11,
      name: "Macarons Parisiens",
      category: "desserts",
      description: "Assortiment de macarons aux saveurs variées",
      price: 14,
      image: "https://images.unsplash.com/photo-1513870931673-fa0ab3de2e09?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDF8MHwxfHNlYXJjaHwxfHxmcmVuY2glMjBkZXNzZXJ0c3xlbnwwfHx8fDE3NjA5NDAxMzJ8MA&ixlib=rb-4.1.0&q=85",
      dietary: ["vegetarian", "gluten-free"],
      featured: true
    },
    {
      id: 12,
      name: "Tarte Tatin",
      category: "desserts",
      description: "Tarte aux pommes caramélisées renversée, servie tiède",
      price: 11,
      image: "https://images.unsplash.com/photo-1496890607984-d27fca8a68ad?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDF8MHwxfHNlYXJjaHwzfHxmcmVuY2glMjBkZXNzZXJ0c3xlbnwwfHx8fDE3NjA5NDAxMzJ8MA&ixlib=rb-4.1.0&q=85",
      dietary: ["vegetarian"],
      featured: false
    },
    {
      id: 13,
      name: "Profiteroles",
      category: "desserts",
      description: "Choux garnis de glace vanille, sauce chocolat chaud",
      price: 13,
      image: "https://images.unsplash.com/photo-1709037331487-4ed2a6cc4b4a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDF8MHwxfHNlYXJjaHwyfHxmcmVuY2glMjBkZXNzZXJ0c3xlbnwwfHx8fDE3NjA5NDAxMzJ8MA&ixlib=rb-4.1.0&q=85",
      dietary: ["vegetarian"],
      featured: false
    },
    // Vins
    {
      id: 14,
      name: "Château Margaux 2015",
      category: "vins",
      description: "Grand cru classé de Bordeaux, notes de cassis et de violette",
      price: 180,
      image: "https://images.unsplash.com/photo-1547595628-c61a29f496f0?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDF8MHwxfHNlYXJjaHwxfHx3aW5lfGVufDB8fHx8MTc2MDk0MDEzN3ww&ixlib=rb-4.1.0&q=85",
      dietary: ["vegan"],
      wineType: "red",
      featured: true
    },
    {
      id: 15,
      name: "Chablis Grand Cru 2018",
      category: "vins",
      description: "Vin blanc de Bourgogne, minéral et élégant",
      price: 85,
      image: "https://images.unsplash.com/photo-1585553616435-2dc0a54e271d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDF8MHwxfHNlYXJjaHwzfHx3aW5lfGVufDB8fHx8MTc2MDk0MDEzN3ww&ixlib=rb-4.1.0&q=85",
      dietary: ["vegan"],
      wineType: "white",
      featured: true
    },
    {
      id: 16,
      name: "Champagne Dom Pérignon 2012",
      category: "vins",
      description: "Champagne millésimé d'exception, bulles fines et persistantes",
      price: 220,
      image: "https://images.pexels.com/photos/1123260/pexels-photo-1123260.jpeg",
      dietary: ["vegan"],
      wineType: "champagne",
      featured: true
    },
    {
      id: 17,
      name: "Côtes du Rhône Villages 2019",
      category: "vins",
      description: "Vin rouge équilibré, notes d'épices et de fruits rouges",
      price: 42,
      image: "https://images.unsplash.com/photo-1547595628-c61a29f496f0?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDF8MHwxfHNlYXJjaHwxfHx3aW5lfGVufDB8fHx8MTc2MDk0MDEzN3ww&ixlib=rb-4.1.0&q=85",
      dietary: ["vegan"],
      wineType: "red",
      featured: false
    },
    // Fromages
    {
      id: 18,
      name: "Plateau de Fromages Affinés",
      category: "fromages",
      description: "Sélection de 5 fromages français affinés servis avec pain et confiture",
      price: 18,
      image: "https://images.unsplash.com/photo-1722718461923-c69728f7640b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njl8MHwxfHNlYXJjaHwxfHxmcmVuY2glMjBjaGVlc2V8ZW58MHx8fHwxNzYwOTQwMTY0fDA&ixlib=rb-4.1.0&q=85",
      dietary: ["vegetarian"],
      featured: true
    },
    {
      id: 19,
      name: "Camembert de Normandie AOP",
      category: "fromages",
      description: "Fromage à pâte molle au lait cru, crémeux et savoureux",
      price: 9,
      image: "https://images.unsplash.com/photo-1672529275229-e309fe63692f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njl8MHwxfHNlYXJjaHwyfHxmcmVuY2glMjBjaGVlc2V8ZW58MHx8fHwxNzYwOTQwMTY0fDA&ixlib=rb-4.1.0&q=85",
      dietary: ["vegetarian"],
      featured: false
    },
    {
      id: 20,
      name: "Roquefort AOP",
      category: "fromages",
      description: "Fromage bleu persillé au lait de brebis, puissant et onctueux",
      price: 10,
      image: "https://images.pexels.com/photos/12991629/pexels-photo-12991629.jpeg",
      dietary: ["vegetarian"],
      featured: false
    }
  ]
};

export const getDietaryLabel = (dietary) => {
  const labels = {
    vegetarian: 'Végétarien',
    vegan: 'Végétalien',
    'gluten-free': 'Sans Gluten',
    pescatarian: 'Pescétarien'
  };
  return dietary.map(d => labels[d] || d);
};