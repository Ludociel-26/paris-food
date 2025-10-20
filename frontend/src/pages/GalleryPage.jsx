import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { mockMenuData } from '../mock';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const GalleryPage = () => {
  const { t } = useLanguage();
  const { galleryImages } = mockMenuData;

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-orange-50 to-amber-50">
      <Navigation />

      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl font-bold text-amber-900 mb-4">{t.gallery.title}</h1>
          <p className="text-xl text-amber-700">{t.gallery.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div 
              key={image.id}
              className="relative h-80 overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <img 
                src={image.url} 
                alt={image.alt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                <p className="text-white p-4 text-sm">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default GalleryPage;