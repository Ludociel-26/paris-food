import React from 'react';
import { Sun, Moon, Monitor } from 'lucide-react';
import { Button } from './ui/button';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle = () => {
  const { theme, changeTheme } = useTheme();

  const themes = [
    { id: 'light', icon: Sun, label: 'Light' },
    { id: 'dark', icon: Moon, label: 'Dark' },
    { id: 'system', icon: Monitor, label: 'System' }
  ];

  return (
    <div className="flex items-center gap-1 bg-white dark:bg-gray-800 rounded-lg shadow-md p-1">
      {themes.map((t) => {
        const Icon = t.icon;
        return (
          <Button
            key={t.id}
            variant={theme === t.id ? 'default' : 'ghost'}
            size="sm"
            onClick={() => changeTheme(t.id)}
            className={`${
              theme === t.id
                ? 'bg-amber-600 hover:bg-amber-700 text-white'
                : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
            } transition-all duration-200 px-3 py-2`}
            title={t.label}
          >
            <Icon className="w-4 h-4" />
          </Button>
        );
      })}
    </div>
  );
};

export default ThemeToggle;