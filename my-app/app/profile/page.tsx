'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { Mail, User, LogOut, ArrowLeft } from 'lucide-react';
import { signOut } from 'next-auth/react';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function ProfilePage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login');
    } else if (status === 'authenticated') {
      setIsLoading(false);
    }
  }, [status, router]);

  if (status === 'loading' || isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
          <p className="mt-4 text-gray-600">Loading profile...</p>
        </div>
      </div>
    );
  }

  if (!session) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600">Loading session...</p>
        </div>
      </div>
    );
  }

  const handleLogout = async () => {
    await signOut({ callbackUrl: '/login' });
  };

  // Check if this is a Google account
  const isGoogleAccount = (session?.user as any)?.provider === 'google';
  const userEmail = session?.user?.email || 'Not provided';
  const userName = session?.user?.name || 'Not provided';
  const userImage = session?.user?.image;

  return (
    <div className="min-h-screen bg-white py-8 px-4 sm:px-6 md:ml-64">
      <div className="max-w-2xl mx-auto">
        {/* Back Button */}
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 text-purple-600 hover:text-purple-700 mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back</span>
        </button>

        {/* Profile Card */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Your Profile</h1>

          {/* User Avatar */}
          <div className="flex justify-center mb-8">
            {userImage && !userImage.includes('dicebear') ? (
              <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-purple-600 shadow-lg">
                <Image
                  src={userImage}
                  alt={userName}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            ) : (
              <div className="w-32 h-32 rounded-full bg-linear-to-br from-purple-500 to-purple-700 flex items-center justify-center border-4 border-purple-600 shadow-lg">
                <User className="w-16 h-16 text-white" />
              </div>
            )}
          </div>

          {/* User Information */}
          <div className="space-y-6">
            {/* Name */}
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-2">
                <User className="w-5 h-5 text-purple-600" />
                <label className="text-sm font-semibold text-gray-600 uppercase">Name</label>
              </div>
              <p className="text-lg text-gray-900 font-medium">
                {userName}
              </p>
            </div>

            {/* Email */}
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-2">
                <Mail className="w-5 h-5 text-purple-600" />
                <label className="text-sm font-semibold text-gray-600 uppercase">Email</label>
              </div>
              <p className="text-lg text-gray-900 font-medium break-all">
                {userEmail}
              </p>
            </div>

            {/* Authentication Method */}
            <div className={`rounded-lg p-6 border-l-4 ${
              isGoogleAccount 
                ? 'bg-blue-50 border-blue-500' 
                : 'bg-green-50 border-green-500'
            }`}>
              <div className="flex items-start gap-3">
                <div className="flex-1">
                  <label className={`text-sm font-semibold uppercase block mb-2 ${
                    isGoogleAccount 
                      ? 'text-blue-900' 
                      : 'text-green-900'
                  }`}>
                    Login Method
                  </label>
                  <p className={`text-lg font-medium capitalize ${
                    isGoogleAccount 
                      ? 'text-blue-900' 
                      : 'text-green-900'
                  }`}>
                    {isGoogleAccount 
                      ? '🔐 Google Account'
                      : '📧 Email & Password'
                    }
                  </p>
                  <p className={`text-sm mt-2 ${
                    isGoogleAccount 
                      ? 'text-blue-700' 
                      : 'text-green-700'
                  }`}>
                    {isGoogleAccount
                      ? `You logged in using your Google account`
                      : 'You logged in using email and password'}
                  </p>
                </div>
              </div>
            </div>

            {/* Account Created Info */}
            <div className="bg-purple-50 rounded-lg p-6 border-l-4 border-purple-500">
              <div className="flex items-start gap-3">
                <div className="flex-1">
                  <label className="text-sm font-semibold text-purple-900 uppercase block mb-2">
                    Account Status
                  </label>
                  <p className="text-lg text-purple-900 font-medium">Active</p>
                  <p className="text-sm text-purple-700 mt-2">
                    Your account is verified and ready to use
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Logout Button */}
          <button
            onClick={handleLogout}
            className="w-full mt-8 flex items-center justify-center gap-3 px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg font-semibold transition-colors duration-200 group"
          >
            <LogOut className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
}
