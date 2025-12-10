'use client';

import { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import TopSearchBar from '@/components/TopSearchBar';
import FilterTabs from '@/components/FilterTabs';
import SectionRow from '@/components/SectionRow';
import BottomPlayer from '@/components/BottomPlayer';

// Dummy track data
const dummyTracks = [
  {
    id: '1',
    title: 'Midnight Dreams',
    artist: 'Luna Echo',
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=200&h=200&fit=crop',
  },
  {
    id: '2',
    title: 'Electric Pulse',
    artist: 'Neon Waves',
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=200&h=200&fit=crop',
  },
  {
    id: '3',
    title: 'Summer Vibes',
    artist: 'Sunny Side',
    image: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=200&h=200&fit=crop',
  },
  {
    id: '4',
    title: 'Ocean Breeze',
    artist: 'Wave Riders',
    image: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=200&h=200&fit=crop',
  },
  {
    id: '5',
    title: 'Cosmic Journey',
    artist: 'Stellar Sound',
    image: 'https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=200&h=200&fit=crop',
  },
  {
    id: '6',
    title: 'Jazz Nights',
    artist: 'Blue Note',
    image: 'https://images.unsplash.com/photo-1511379938547-c1f69b13d835?w=200&h=200&fit=crop',
  },
  {
    id: '7',
    title: 'Rock Anthem',
    artist: 'Stone Echo',
    image: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?w=200&h=200&fit=crop',
  },
  {
    id: '8',
    title: 'Soul Serenade',
    artist: 'Deep Voices',
    image: 'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=200&h=200&fit=crop',
  },
  {
    id: '9',
    title: 'Ambient Peace',
    artist: 'Zen Masters',
    image: 'https://images.unsplash.com/photo-1571330735066-03aaa9429d89?w=200&h=200&fit=crop',
  },
  {
    id: '10',
    title: 'Classical Beauty',
    artist: 'Orchesta',
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=200&h=200&fit=crop',
  },
  {
    id: '11',
    title: 'Hip Hop Flow',
    artist: 'Rhythm Kings',
    image: 'https://images.unsplash.com/photo-1509379827917-abc21ded474e?w=200&h=200&fit=crop',
  },
  {
    id: '12',
    title: 'Electronic Dreams',
    artist: 'Synth Legends',
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=200&h=200&fit=crop',
  },
];

export default function HomePage() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [currentTrack, setCurrentTrack] = useState(dummyTracks[0]);

  return (
    <div className="flex flex-col w-screen h-screen bg-white overflow-hidden">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content - Responsive Layout */}
      <main className="flex-1 flex flex-col w-full md:ml-64 mb-20 sm:mb-24 overflow-y-auto">
        {/* Top Search Bar */}
        <TopSearchBar />

        {/* Filter Tabs */}
        <FilterTabs activeFilter={activeFilter} onFilterChange={setActiveFilter} />

        {/* Trending Now Section */}
        <SectionRow
          title="🔥 Trending Now"
          tracks={dummyTracks.slice(0, 6)}
          onViewAll={() => console.log('View all trending')}
        />

        {/* New Releases Section */}
        <SectionRow
          title="✨ New Releases"
          tracks={dummyTracks.slice(6, 12)}
          onViewAll={() => console.log('View all new releases')}
        />

        {/* Recommended For You Section */}
        <SectionRow
          title="❤️ Recommended For You"
          tracks={dummyTracks}
          onViewAll={() => console.log('View all recommended')}
        />
      </main>

      
    </div>
  );
}
