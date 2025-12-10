'use client';

import { ChevronRight } from 'lucide-react';
import MusicCard from './MusicCard';

interface Track {
  id: string;
  title: string;
  artist: string;
  image: string;
}

interface SectionRowProps {
  title: string;
  tracks: Track[];
  onViewAll?: () => void;
}

export default function SectionRow({ title, tracks, onViewAll }: SectionRowProps) {
  return (
    <section className="px-2 sm:px-3 md:px-6 py-3 sm:py-4 md:py-6">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-2.5 sm:mb-3 md:mb-4 gap-2">
        <h2 className="text-base sm:text-lg md:text-2xl font-bold text-gray-900 truncate flex-1">{title}</h2>
        <button
          onClick={onViewAll}
          className="flex items-center gap-0.5 sm:gap-1 text-purple-600 hover:text-purple-700 font-semibold text-xs sm:text-sm transition-colors shrink-0"
        >
          View All
          <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />
        </button>
      </div>

      {/* Scrollable Cards Container */}
      <div className="overflow-x-auto scrollbar-hide -mx-2 sm:-mx-3 md:-mx-6">
        <div className="flex gap-1.5 sm:gap-2 md:gap-3 lg:gap-4 pb-1.5 sm:pb-2 md:pb-2 px-2 sm:px-3 md:px-6">
          {tracks.map((track) => (
            <MusicCard
              key={track.id}
              id={track.id}
              title={track.title}
              artist={track.artist}
              image={track.image}
              onPlay={() => console.log(`Playing: ${track.title}`)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
