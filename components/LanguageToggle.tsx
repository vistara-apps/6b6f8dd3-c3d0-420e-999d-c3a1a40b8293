'use client';

import { Globe } from 'lucide-react';

interface LanguageToggleProps {
  variant?: 'default';
  currentLanguage: 'en' | 'es';
  onLanguageChange: (language: 'en' | 'es') => void;
}

export function LanguageToggle({ variant = 'default', currentLanguage, onLanguageChange }: LanguageToggleProps) {
  return (
    <div className="flex items-center gap-2 glass-card px-3 py-2 rounded-lg">
      <Globe className="w-4 h-4 text-white" />
      <div className="flex items-center gap-1">
        <button
          onClick={() => onLanguageChange('en')}
          className={`px-2 py-1 rounded text-sm transition-colors duration-200 ${
            currentLanguage === 'en' 
              ? 'bg-white bg-opacity-20 text-white' 
              : 'text-white text-opacity-70 hover:text-opacity-100'
          }`}
        >
          EN
        </button>
        <button
          onClick={() => onLanguageChange('es')}
          className={`px-2 py-1 rounded text-sm transition-colors duration-200 ${
            currentLanguage === 'es' 
              ? 'bg-white bg-opacity-20 text-white' 
              : 'text-white text-opacity-70 hover:text-opacity-100'
          }`}
        >
          ES
        </button>
      </div>
    </div>
  );
}
