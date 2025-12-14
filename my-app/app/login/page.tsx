'use client';

import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Input from '@/components/Input';
import Button from '@/components/Button';
import Logo from '@/components/Logo';

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Email and password are required');
      return;
    }

    // ✅ Frontend-only simulation
    router.push('/language');
  };

  const handleGoogleLogin = async () => {
    await signIn('google', { callbackUrl: '/language' });
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gray-50">
      <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-8">

        <div className="flex justify-center mb-6">
          <Logo />
        </div>

        <h1 className="text-2xl font-bold text-center mb-2">Welcome Back</h1>
        <p className="text-center text-gray-500 mb-6">
          Sign in to your account
        </p>

        <Button fullWidth onClick={handleGoogleLogin}>
          Continue with Google
        </Button>

        <div className="my-6 text-center text-gray-400">or</div>

        {error && <p className="text-red-600 text-sm mb-4">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="email"
            label="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setError('');
            }}
          />

          <Input
            type={showPassword ? 'text' : 'password'}
            label="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setError('');
            }}
            onToggle={() => setShowPassword(!showPassword)}
          />

          <Button type="submit" fullWidth>
            Sign In
          </Button>
        </form>

        <p className="text-center text-gray-600 text-sm mt-6">
          Don't have an account?{' '}
          <a
            href="/signup"
            className="text-purple-600 font-semibold hover:text-purple-700"
          >
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
}
