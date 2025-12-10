'use client';

import { Play, Pause, SkipBack, SkipForward, Volume2 } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

interface BottomPlayerProps {
  trackTitle?: string;
  artistName?: string;
  albumArt?: string;
}

export default function BottomPlayer({
  trackTitle = 'No Track Selected',
  artistName = 'Unknown Artist',
  albumArt = 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=100&h=100&fit=crop',
}: BottomPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(45);

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 md:ml-64 z-50">
      {/* Progress Bar */}
      <div className="h-0.5 sm:h-1 bg-gray-200">
        <div
          className="h-full bg-purple-600 transition-all duration-200"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Player Content */}
      <div className="px-2 sm:px-4 md:px-6 py-2 sm:py-3 flex items-center justify-between gap-2 sm:gap-4">
        {/* Left: Track Info */}
        <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
          <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-lg overflow-hidden bg-gray-200 shrink-0">
            <Image
              src={albumArt}
              alt={trackTitle}
              fill
              className="object-cover"
            />
          </div>
          <div className="truncate min-w-0">
            <p className="text-xs sm:text-sm font-semibold text-gray-900 truncate">{trackTitle}</p>
            <p className="text-xs text-gray-500 truncate">{artistName}</p>
          </div>
        </div>

        {/* Center: Controls */}
        <div className="flex items-center gap-2 sm:gap-4 shrink-0">
          <button className="text-gray-400 hover:text-gray-600 transition-colors hidden sm:block">
            <SkipBack className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-purple-600 text-white flex items-center justify-center hover:bg-purple-700 transition-colors"
          >
            {isPlaying ? (
              <Pause className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" />
            ) : (
              <Play className="w-4 h-4 sm:w-5 sm:h-5 ml-0.5" fill="currentColor" />
            )}
          </button>
          <button className="text-gray-400 hover:text-gray-600 transition-colors hidden sm:block">
            <SkipForward className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>

        {/* Right: Volume */}
        <div className="hidden md:flex items-center gap-2 shrink-0">
          <Volume2 className="w-4 h-4 text-gray-400" />
          <div className="w-16 h-0.5 sm:h-1 bg-gray-200 rounded-full">
            <div className="w-1/2 h-full bg-purple-600 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
