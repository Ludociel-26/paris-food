import React from 'react';
import { Facebook, Instagram, Twitter, MessageCircle, Youtube, Linkedin } from 'lucide-react';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { useLanguage } from '../contexts/LanguageContext';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const SocialPage = () => {
  const { t } = useLanguage();

  const socialNetworks = [
    {
      name: 'Facebook',
      icon: Facebook,
      handle: '@LAtmosphereJoyeuse',
      url: 'https://facebook.com',
      color: 'bg-blue-600 hover:bg-blue-700',
      description: 'Follow us for daily specials and events'
    },
    {
      name: 'Instagram',
      icon: Instagram,
      handle: '@atmosphere_joyeuse',
      url: 'https://instagram.com',
      color: 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700',
      description: 'See our beautiful dishes and ambiance'
    },
    {
      name: 'Twitter',
      icon: Twitter,
      handle: '@AtmosphereJoy',
      url: 'https://twitter.com',
      color: 'bg-sky-500 hover:bg-sky-600',
      description: 'Get real-time updates and news'
    },
    {
      name: 'WhatsApp',
      icon: MessageCircle,
      handle: '+33 1 42 86 82 82',
      url: 'https://wa.me/33142868282',
      color: 'bg-green-600 hover:bg-green-700',
      description: 'Message us for reservations'
    },
    {
      name: 'YouTube',
      icon: Youtube,
      handle: '@LAtmosphereJoyeuse',
      url: 'https://youtube.com',
      color: 'bg-red-600 hover:bg-red-700',
      description: 'Watch our cooking videos'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      handle: 'L’Atmosphère Joyeuse',
      url: 'https://linkedin.com',
      color: 'bg-blue-700 hover:bg-blue-800',
      description: 'Connect with us professionally'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-orange-50 to-amber-50">
      <Navigation />

      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl font-bold text-amber-900 mb-4">{t.social.title}</h1>
          <p className="text-xl text-amber-700">{t.social.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {socialNetworks.map((network, index) => {
            const Icon = network.icon;
            return (
              <Card 
                key={network.name}
                className="p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-amber-100 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className={`${network.color} p-4 rounded-full mb-4 transition-all duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-amber-900 mb-2">{network.name}</h3>
                  <p className="text-amber-700 mb-3 font-medium">{network.handle}</p>
                  <p className="text-gray-600 text-sm mb-4">{network.description}</p>
                  <Button 
                    onClick={() => window.open(network.url, '_blank')}
                    className={`${network.color} text-white w-full`}
                  >
                    Visit {network.name}
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SocialPage;