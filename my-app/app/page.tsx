'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Logo from '@/components/Logo';
import LoaderDots from '@/components/LoaderDots';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/login');
    }, 2000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="min-h-screen w-full bg-white flex flex-col items-center justify-center animate-fade-in">
      <Logo />
      <div className="mt-12">
        <LoaderDots />
      </div>
    </div>
  );
}
