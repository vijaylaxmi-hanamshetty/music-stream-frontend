'use client';

interface FilterTabsProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

export default function FilterTabs({ activeFilter, onFilterChange }: FilterTabsProps) {
  const filters = ['All', 'Moods', 'Genres', 'Top Charts', 'Playlists'];

  return (
    <div className="sticky top-14 sm:top-16 md:top-20 bg-white z-20 border-b border-gray-100">
      <div className="px-2 sm:px-3 md:px-6 py-2 sm:py-3 flex items-center gap-1 sm:gap-2 md:gap-3 overflow-x-auto scrollbar-hide">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => onFilterChange(filter)}
            className={`px-2.5 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 rounded-full font-medium text-xs sm:text-sm md:text-base whitespace-nowrap transition-all duration-200 ${
              activeFilter === filter
                ? 'bg-purple-600 text-white shadow-md'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>
    </div>
  );
}
