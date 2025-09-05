'use client';

import { useState } from 'react';
import { Video, Square, Mic } from 'lucide-react';

interface RecordButtonProps {
  variant: 'active' | 'inactive';
  onStartRecording: () => void;
  onStopRecording: () => void;
  isRecording: boolean;
}

export function RecordButton({ variant, onStartRecording, onStopRecording, isRecording }: RecordButtonProps) {
  const handleClick = () => {
    if (isRecording) {
      onStopRecording();
    } else {
      onStartRecording();
    }
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <button
        onClick={handleClick}
        className={`record-button ${isRecording ? 'recording' : ''}`}
      >
        {isRecording ? (
          <Square className="w-6 h-6 text-white" />
        ) : (
          <Video className="w-6 h-6 text-white" />
        )}
      </button>
      
      <div className="text-center">
        <p className="text-white font-medium">
          {isRecording ? 'Recording...' : 'Tap to Record'}
        </p>
        <p className="text-white text-opacity-70 text-sm">
          {isRecording ? 'Tap to stop' : 'Audio & Video'}
        </p>
      </div>

      {isRecording && (
        <div className="flex items-center gap-2 glass-card px-3 py-2 rounded-full">
          <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
          <span className="text-white text-sm">Live</span>
        </div>
      )}
    </div>
  );
}
