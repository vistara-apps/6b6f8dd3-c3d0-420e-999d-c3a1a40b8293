'use client';

import { useState } from 'react';
import { ChevronDown, MapPin } from 'lucide-react';
import { US_STATES } from '@/lib/constants';

interface StateSelectorProps {
  selectedState: string;
  onStateChange: (state: string) => void;
  variant?: 'default';
}

export function StateSelector({ selectedState, onStateChange, variant = 'default' }: StateSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="glass-card px-4 py-3 w-full flex items-center justify-between hover:bg-opacity-15 transition-all duration-200"
      >
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4 text-white" />
          <span className="text-white">{selectedState || 'Select State'}</span>
        </div>
        <ChevronDown className={`w-4 h-4 text-white transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 glass-card max-h-60 overflow-y-auto z-50">
          {US_STATES.map((state) => (
            <button
              key={state}
              onClick={() => {
                onStateChange(state);
                setIsOpen(false);
              }}
              className="w-full px-4 py-2 text-left text-white hover:bg-white hover:bg-opacity-10 transition-colors duration-200 first:rounded-t-xl last:rounded-b-xl"
            >
              {state}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
