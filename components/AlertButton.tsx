'use client';

import { AlertTriangle, Send } from 'lucide-react';

interface AlertButtonProps {
  variant?: 'default';
  onTriggerAlert: () => void;
  disabled?: boolean;
}

export function AlertButton({ variant = 'default', onTriggerAlert, disabled = false }: AlertButtonProps) {
  return (
    <div className="flex flex-col items-center gap-3">
      <button
        onClick={onTriggerAlert}
        disabled={disabled}
        className={`alert-button ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      >
        <AlertTriangle className="w-5 h-5 text-white" />
      </button>
      
      <div className="text-center">
        <p className="text-white font-medium text-sm">Emergency Alert</p>
        <p className="text-white text-opacity-70 text-xs">
          Notify contacts
        </p>
      </div>
    </div>
  );
}
