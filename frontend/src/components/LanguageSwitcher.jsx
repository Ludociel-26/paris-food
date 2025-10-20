import React from 'react';
import { Globe } from 'lucide-react';
import { Button } from './ui/button';
import { useLanguage } from '../contexts/LanguageContext';

const LanguageSwitcher = () => {
  const { language, changeLanguage } = useLanguage();

  const languages = [
    { code: 'fr', label: 'FR', flag: '🇫🇷' },
    { code: 'en', label: 'EN', flag: '🇬🇧' },
    { code: 'es', label: 'ES', flag: '🇪🇸' }
  ];

  return (
    <div className="flex items-center gap-2 bg-white rounded-lg shadow-md p-2">
      <Globe className="w-4 h-4 text-amber-600" />
      {languages.map((lang) => (
        <Button
          key={lang.code}
          variant={language === lang.code ? 'default' : 'ghost'}
          size="sm"
          onClick={() => changeLanguage(lang.code)}
          className={`${
            language === lang.code
              ? 'bg-amber-600 hover:bg-amber-700 text-white'
              : 'text-amber-700 hover:bg-amber-50'
          } transition-all duration-200 px-3 py-1 text-sm font-medium`}
        >
          <span className="mr-1">{lang.flag}</span>
          {lang.label}
        </Button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;