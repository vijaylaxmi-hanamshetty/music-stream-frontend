'use client';

import { Search, Mic } from 'lucide-react';

export default function TopSearchBar() {
  return (
    <div className="sticky top-0 bg-white z-30 border-b border-gray-200">
      <div className="p-2.5 sm:p-3 md:p-4">
        <div className="flex items-center gap-1.5 sm:gap-2 md:gap-3 bg-gray-100 rounded-full px-2.5 sm:px-3 md:px-4 py-1.5 sm:py-2 md:py-3 max-w-lg md:max-w-2xl">
          <Search className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-gray-400 shrink-0" />
          <input
            type="text"
            placeholder="Search songs, artists..."
            className="hidden sm:block flex-1 bg-transparent outline-none text-gray-700 placeholder-gray-400 text-xs sm:text-sm md:text-base"
          />
          <input
            type="text"
            placeholder="Search..."
            className="sm:hidden flex-1 bg-transparent outline-none text-gray-700 placeholder-gray-400 text-xs"
          />
          <Mic className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-gray-400 cursor-pointer hover:text-purple-600 transition-colors shrink-0" />
        </div>
      </div>
    </div>
  );
}
