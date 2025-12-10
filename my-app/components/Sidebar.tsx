'use client';

import { useState } from 'react';
import { Home, Search, Music, Heart, Settings, LogOut, User } from 'lucide-react';
import Link from 'next/link';
import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const { data: session } = useSession();

  const handleLogout = async () => {
    await signOut({ callbackUrl: '/login' });
  };

  const navItems = [
    { icon: Home, label: 'Home', href: '#' },
    { icon: Search, label: 'Search', href: '#' },
    { icon: Music, label: 'Playlists', href: '#' },
    { icon: Heart, label: 'Favorites', href: '#' },
    { icon: Settings, label: 'Settings', href: '#' },
  ];

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex flex-col w-64 bg-white border-r border-gray-200 fixed left-0 top-0 h-screen z-40">
        {/* Logo */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-linear-to-br from-purple-500 to-purple-700 rounded-full flex items-center justify-center">
              <Music className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">MusicHub</span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-6 space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.label}
                href={item.href}
                className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-600 hover:text-purple-600 hover:bg-purple-50 transition-all duration-200 group"
              >
                <Icon className="w-5 h-5 group-hover:text-purple-600" />
                <span className="font-medium">{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* User Profile Section */}
        {session?.user && (
          <div className="p-4 border-t border-gray-200">
            <Link
              href="/profile"
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-600 hover:text-purple-600 hover:bg-purple-50 transition-all duration-200 group mb-2"
            >
              {session.user.image ? (
                <div className="relative w-5 h-5 rounded-full overflow-hidden">
                  <Image
                    src={session.user.image}
                    alt={session.user.name || 'User'}
                    fill
                    className="object-cover"
                  />
                </div>
              ) : (
                <User className="w-5 h-5 group-hover:text-purple-600" />
              )}
              <div className="flex-1 min-w-0">
                <span className="font-medium text-xs truncate block">{session.user.name || 'Profile'}</span>
                <span className="text-xs text-gray-500 truncate block">{session.user.email}</span>
              </div>
            </Link>
          </div>
        )}

        {/* Logout */}
        <div className="p-4 border-t border-gray-200">
          <button 
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-600 hover:text-red-600 hover:bg-red-50 transition-all duration-200 group"
          >
            <LogOut className="w-5 h-5 group-hover:text-red-600" />
            <span className="font-medium">Logout</span>
          </button>
        </div>
      </aside>

      {/* Mobile Bottom Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex items-center justify-around h-20 z-40">
        {navItems.slice(0, 4).map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.label}
              href={item.href}
              className="flex flex-col items-center gap-1 px-3 py-2 text-gray-600 hover:text-purple-600 transition-colors"
              title={item.label}
            >
              <Icon className="w-6 h-6" />
              <span className="text-xs">{item.label}</span>
            </Link>
          );
        })}
        {/* Logout on Mobile */}
        <button 
          onClick={handleLogout}
          className="flex flex-col items-center gap-1 px-3 py-2 text-gray-600 hover:text-red-600 transition-colors" 
          title="Logout"
        >
          <LogOut className="w-6 h-6" />
          <span className="text-xs">Logout</span>
        </button>
      </nav>

      {/* Spacer for desktop */}
      <div className="hidden md:block w-64" />
    </>
  );
}
