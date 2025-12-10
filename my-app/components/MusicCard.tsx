'use client';

import { Play, Heart } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

interface MusicCardProps {
  id: string;
  title: string;
  artist: string;
  image: string;
  onPlay?: () => void;
}

export default function MusicCard({ id, title, artist, image, onPlay }: MusicCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div
      className="shrink-0 w-32 sm:w-36 md:w-40 group cursor-pointer"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Album Art Container */}
      <div className="relative mb-2 sm:mb-3 overflow-hidden rounded-lg bg-gray-100 aspect-square">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />

        {/* Favorite Button - Always visible on mobile, hover on desktop */}
        <div className="absolute top-2 right-2 flex md:hidden">
          <button
            onClick={() => setIsFavorite(!isFavorite)}
            className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors shadow-lg ${
              isFavorite
                ? 'bg-red-500 text-white'
                : 'bg-white/20 text-white hover:bg-white/30'
            }`}
          >
            <Heart className="w-4 h-4" fill={isFavorite ? 'currentColor' : 'none'} />
          </button>
        </div>

        {/* Hover Overlay - Desktop only */}
        {isHovering && (
          <div className="hidden md:flex absolute inset-0 bg-black/40 items-center justify-center gap-2 sm:gap-3 transition-opacity duration-200">
            <button
              onClick={onPlay}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-purple-600 text-white flex items-center justify-center hover:bg-purple-700 transition-colors shadow-lg"
            >
              <Play className="w-4 h-4 sm:w-5 sm:h-5 ml-0.5" fill="currentColor" />
            </button>
            <button
              onClick={() => setIsFavorite(!isFavorite)}
              className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-colors shadow-lg ${
                isFavorite
                  ? 'bg-red-500 text-white'
                  : 'bg-white/20 text-white hover:bg-white/30'
              }`}
            >
              <Heart className="w-4 h-4 sm:w-5 sm:h-5" fill={isFavorite ? 'currentColor' : 'none'} />
            </button>
          </div>
        )}
      </div>

      {/* Track Info */}
      <div className="truncate">
        <h3 className="font-semibold text-gray-900 text-xs sm:text-sm truncate group-hover:text-purple-600 transition-colors">
          {title}
        </h3>
        <p className="text-gray-500 text-xs truncate">{artist}</p>
      </div>
    </div>
  );
}
