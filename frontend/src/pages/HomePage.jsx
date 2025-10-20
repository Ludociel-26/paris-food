import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { useLanguage } from '../contexts/LanguageContext';
import { mockMenuData } from '../mock';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const HomePage = () => {
  const { t, language } = useLanguage();
  const { menuItems, galleryImages } = mockMenuData;

  // Get featured dishes
  const featuredDishes = menuItems.filter(item => item.featured).slice(0, 6);

  // Get hero image
  const heroImage = galleryImages[0];

  // Translate dish names and descriptions
  const getTranslatedDish = (dish) => {
    const dishTranslations = {
      fr: { name: dish.name, description: dish.description },
      en: {
        1: { name: 'Seafood Vol-au-Vent', description: 'Puff pastry filled with seafood and creamy sauce' },
        3: { name: 'Pan-Seared Foie Gras', description: 'Foie gras on gingerbread with fig chutney' },
        5: { name: 'Beef Bourguignon', description: 'Beef braised in Burgundy red wine with vegetables' },
        7: { name: 'Marseille Bouillabaisse', description: 'Mediterranean fish soup with rouille and croutons' },
        10: { name: 'Crème Brûlée', description: 'Vanilla cream caramelized to perfection' },
        11: { name: 'Parisian Macarons', description: 'Assortment of macarons with various flavors' },
        14: { name: 'Château Margaux 2015', description: 'Bordeaux Grand Cru, notes of blackcurrant and violet' },
        15: { name: 'Chablis Grand Cru 2018', description: 'White Burgundy wine, mineral and elegant' },
        16: { name: 'Dom Pérignon 2012', description: 'Exceptional vintage champagne, fine and persistent bubbles' },
        18: { name: 'Aged Cheese Platter', description: 'Selection of 5 aged French cheeses with bread and jam' }
      },
      es: {
        1: { name: 'Vol-au-Vent de Mariscos', description: 'Hojaldre relleno de mariscos con salsa cremosa' },
        3: { name: 'Foie Gras Salteado', description: 'Foie gras sobre pan de especias con chutney de higos' },
        5: { name: 'Bourguignon de Ternera', description: 'Ternera estofada en vino tinto de Borgoña con verduras' },
        7: { name: 'Bullabesa de Marsella', description: 'Sopa de pescado mediterránea con rouille y picatostes' },
        10: { name: 'Crème Brûlée', description: 'Crema de vainilla caramelizada a la perfección' },
        11: { name: 'Macarons Parisinos', description: 'Surtido de macarons con sabores variados' },
        14: { name: 'Château Margaux 2015', description: 'Gran cru de Burdeos, notas de grosella negra y violeta' },
        15: { name: 'Chablis Grand Cru 2018', description: 'Vino blanco de Borgoña, mineral y elegante' },
        16: { name: 'Dom Pérignon 2012', description: 'Champagne vintage excepcional, burbujas finas y persistentes' },
        18: { name: 'Tabla de Quesos Añejos', description: 'Selección de 5 quesos franceses añejos con pan y mermelada' }
      }
    };

    if (language === 'fr') {
      return { name: dish.name, description: dish.description };
    }
    return dishTranslations[language][dish.id] || { name: dish.name, description: dish.description };
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-orange-50 to-amber-50">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[600px] md:h-[700px] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url(${heroImage.url})`,
            filter: 'brightness(0.6)'
          }}
        />
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl text-white animate-fade-in">
            <p className="text-lg md:text-xl mb-2 text-amber-200">{t.hero.welcome}</p>
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              {mockMenuData.restaurant.name}
            </h1>
            <p className="text-xl md:text-2xl mb-3 text-amber-100 italic">
              {t.hero.tagline}
            </p>
            <p className="text-lg mb-8 text-gray-200 leading-relaxed">
              {t.hero.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/menu">
                <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-6 text-lg group">
                  {t.hero.viewMenu}
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white text-white hover:bg-white hover:text-amber-900 px-8 py-6 text-lg backdrop-blur-sm"
              >
                {t.hero.bookTable}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Dishes Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-3">{t.hero.featuredDishes}</h2>
          <p className="text-lg text-amber-700">{t.menu.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredDishes.map((dish) => {
            const translated = getTranslatedDish(dish);
            return (
              <Card key={dish.id} className="overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-amber-100">
                <div className="relative h-64">
                  <img 
                    src={dish.image} 
                    alt={translated.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 right-3 bg-amber-600 text-white px-3 py-1 rounded-full flex items-center gap-1 shadow-lg">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="text-xs font-semibold">{t.menu.featured}</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-amber-900 flex-1">{translated.name}</h3>
                    <span className="text-2xl font-bold text-amber-700 ml-2">{dish.price}€</span>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{translated.description}</p>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Link to="/menu">
            <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white px-10 py-6 text-lg">
              {t.hero.viewMenu}
            </Button>
          </Link>
        </div>
      </section>

      {/* Restaurant Images Section */}
      <section className="bg-gradient-to-r from-amber-100 to-orange-100 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-3">{t.gallery.title}</h2>
            <p className="text-lg text-amber-700">{t.gallery.subtitle}</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.slice(0, 6).map((image) => (
              <div 
                key={image.id} 
                className="relative h-64 overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <img 
                  src={image.url} 
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/gallery">
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white px-10 py-6 text-lg">
                {t.nav.gallery}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;