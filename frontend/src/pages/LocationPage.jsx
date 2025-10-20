import React from 'react';
import { MapPin, Phone, Mail, Clock, Navigation as NavigationIcon } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { useLanguage } from '../contexts/LanguageContext';
import { mockMenuData } from '../mock';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const LocationPage = () => {
  const { t } = useLanguage();
  const { restaurant } = mockMenuData;

  const openGoogleMaps = () => {
    const address = encodeURIComponent(restaurant.address);
    window.open(`https://www.google.com/maps/search/?api=1&query=${address}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-orange-50 to-amber-50">
      <Navigation />

      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl font-bold text-amber-900 mb-4">{t.location.title}</h1>
          <p className="text-xl text-amber-700">{t.location.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Map Section */}
          <Card className="overflow-hidden shadow-xl border-amber-100">
            <div className="relative h-96 bg-gray-200">
              <iframe
                title="Restaurant Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.2909769891673!2d2.3099!3d48.8738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDjCsDUyJzI1LjciTiAywrAxOCczNS42IkU!5e0!3m2!1sen!2sfr!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                className="absolute inset-0"
              />
            </div>
            <div className="p-6 bg-white">
              <Button 
                onClick={openGoogleMaps}
                className="w-full bg-amber-600 hover:bg-amber-700 text-white flex items-center justify-center gap-2"
              >
                <NavigationIcon className="w-5 h-5" />
                {t.location.directions}
              </Button>
            </div>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="p-6 hover:shadow-xl transition-shadow duration-300 border-amber-100">
              <div className="flex items-start gap-4">
                <div className="bg-amber-100 p-3 rounded-full">
                  <MapPin className="w-6 h-6 text-amber-700" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-amber-900 mb-2">{t.location.address}</h3>
                  <p className="text-gray-700 leading-relaxed">{restaurant.address}</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-xl transition-shadow duration-300 border-amber-100">
              <div className="flex items-start gap-4">
                <div className="bg-amber-100 p-3 rounded-full">
                  <Phone className="w-6 h-6 text-amber-700" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-amber-900 mb-2">{t.location.phone}</h3>
                  <a href={`tel:${restaurant.phone}`} className="text-amber-700 hover:text-amber-900 transition-colors">
                    {restaurant.phone}
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-xl transition-shadow duration-300 border-amber-100">
              <div className="flex items-start gap-4">
                <div className="bg-amber-100 p-3 rounded-full">
                  <Mail className="w-6 h-6 text-amber-700" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-amber-900 mb-2">{t.location.email}</h3>
                  <a href="mailto:contact@atmospherejoyeuse.fr" className="text-amber-700 hover:text-amber-900 transition-colors">
                    contact@atmospherejoyeuse.fr
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-xl transition-shadow duration-300 border-amber-100">
              <div className="flex items-start gap-4">
                <div className="bg-amber-100 p-3 rounded-full">
                  <Clock className="w-6 h-6 text-amber-700" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-amber-900 mb-3">{t.location.hours}</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">{t.footer.mondayFriday}</span>
                      <span className="font-semibold text-amber-800">12h - 14h30, 19h - 22h30</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">{t.footer.saturday}</span>
                      <span className="font-semibold text-amber-800">19h - 23h</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">{t.footer.sunday}</span>
                      <span className="font-semibold text-red-600">{t.footer.closed}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default LocationPage;