'use client';

import { ReactNode } from 'react';
import { ExternalLink, Share2 } from 'lucide-react';

interface InfoCardProps {
  variant: 'guide' | 'script' | 'alert';
  title: string;
  content: string;
  children?: ReactNode;
  onShare?: () => void;
  onViewMore?: () => void;
}

export function InfoCard({ variant, title, content, children, onShare, onViewMore }: InfoCardProps) {
  const getVariantStyles = () => {
    switch (variant) {
      case 'guide':
        return 'border-blue-400 border-opacity-30';
      case 'script':
        return 'border-green-400 border-opacity-30';
      case 'alert':
        return 'border-red-400 border-opacity-30';
      default:
        return 'border-white border-opacity-20';
    }
  };

  return (
    <div className={`glass-card p-6 ${getVariantStyles()}`}>
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <div className="flex items-center gap-2">
          {onShare && (
            <button
              onClick={onShare}
              className="p-2 rounded-lg hover:bg-white hover:bg-opacity-10 transition-colors duration-200"
            >
              <Share2 className="w-4 h-4 text-white" />
            </button>
          )}
          {onViewMore && (
            <button
              onClick={onViewMore}
              className="p-2 rounded-lg hover:bg-white hover:bg-opacity-10 transition-colors duration-200"
            >
              <ExternalLink className="w-4 h-4 text-white" />
            </button>
          )}
        </div>
      </div>

      <div className="text-white text-opacity-90 mb-4 leading-relaxed">
        {content}
      </div>

      {children && (
        <div className="mt-4 pt-4 border-t border-white border-opacity-20">
          {children}
        </div>
      )}
    </div>
  );
}
