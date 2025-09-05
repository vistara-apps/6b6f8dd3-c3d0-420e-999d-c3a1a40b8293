'use client';

import { ReactNode } from 'react';
import { Loader2 } from 'lucide-react';

interface CTAButtonProps {
  variant: 'primary' | 'secondary' | 'iconOnly';
  children: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
  className?: string;
}

export function CTAButton({ 
  variant, 
  children, 
  onClick, 
  disabled = false, 
  loading = false,
  className = ''
}: CTAButtonProps) {
  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return 'btn-primary';
      case 'secondary':
        return 'btn-secondary';
      case 'iconOnly':
        return 'p-3 rounded-lg bg-white bg-opacity-20 hover:bg-opacity-30 transition-all duration-200';
      default:
        return 'btn-primary';
    }
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled || loading}
      className={`${getVariantStyles()} ${className} ${
        disabled || loading ? 'opacity-50 cursor-not-allowed' : ''
      } flex items-center justify-center gap-2`}
    >
      {loading && <Loader2 className="w-4 h-4 animate-spin" />}
      {children}
    </button>
  );
}
