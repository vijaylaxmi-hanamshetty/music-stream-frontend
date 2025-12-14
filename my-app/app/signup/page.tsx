'use client';

import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Input from '@/components/Input';
import Button from '@/components/Button';
import Logo from '@/components/Logo';

export default function SignupPage() {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const validate = () => {
    const e = { email: '', password: '', confirmPassword: '' };
    if (!email.trim()) e.email = 'Email is required';
    if (password.length < 6) e.password = 'Minimum 6 characters';
    if (password !== confirmPassword)
      e.confirmPassword = 'Passwords do not match';

    setErrors(e);
    return !Object.values(e).some(Boolean);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // ✅ Frontend-only simulation
    router.push('/language');
  };

  const handleGoogleSignup = async () => {
    await signIn('google', { callbackUrl: '/language' });
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gray-50">
      <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-8">

        <div className="flex justify-center mb-6">
          <Logo />
        </div>

        <h1 className="text-2xl font-bold text-center mb-2">Create Account</h1>
        <p className="text-center text-gray-500 mb-6">
          Sign up to start your music journey
        </p>

        <Button fullWidth onClick={handleGoogleSignup}>
          Sign up with Google
        </Button>

        <div className="my-6 text-center text-gray-400">or</div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="email"
            label="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setErrors({ ...errors, email: '' });
            }}
            error={errors.email}
          />

          <Input
            type={showPassword ? 'text' : 'password'}
            label="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setErrors({ ...errors, password: '' });
            }}
            error={errors.password}
            onToggle={() => setShowPassword(!showPassword)}
          />

          <Input
            type={showConfirmPassword ? 'text' : 'password'}
            label="Confirm Password"
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
              setErrors({ ...errors, confirmPassword: '' });
            }}
            error={errors.confirmPassword}
            onToggle={() => setShowConfirmPassword(!showConfirmPassword)}
          />

          <Button type="submit" fullWidth>
            Create Account
          </Button>
        </form>

        <p className="text-center text-gray-600 text-sm mt-6">
          Already have an account?{' '}
          <a
            href="/login"
            className="text-purple-600 font-semibold hover:text-purple-700"
          >
            Sign In
          </a>
        </p>
      </div>
    </div>
  );
}
