'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import LanguageCard from '@/components/LanguageCard';
import Button from '@/components/Button';

const languages = [
  { code: 'hi', language: 'हिंदी', nativeLanguage: 'Hindi' },
  { code: 'kn', language: 'ಕನ್ನಡ', nativeLanguage: 'Kannada' },
  { code: 'ta', language: 'தமிழ்', nativeLanguage: 'Tamil' },
  { code: 'en', language: 'English', nativeLanguage: 'English' },
];

export default function LanguageSelectPage() {
  const router = useRouter();
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);

  useEffect(() => {
    // Load saved language preference from localStorage
    const savedLanguage = localStorage.getItem('selectedLanguage');
    if (savedLanguage) {
      setSelectedLanguage(savedLanguage);
    }
  }, []);

  const handleContinue = () => {
    if (selectedLanguage) {
      localStorage.setItem('selectedLanguage', selectedLanguage);
      router.push('/home');
    }
  };

  return (
    <div className="min-h-screen w-full bg-white flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-2">
            Choose Your Language
          </h1>
          <p className="text-center text-gray-500">
            Select the language you prefer to continue
          </p>
        </div>

        {/* Language Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {languages.map((lang) => (
            <LanguageCard
              key={lang.code}
              language={lang.language}
              nativeLanguage={lang.nativeLanguage}
              code={lang.code}
              isSelected={selectedLanguage === lang.code}
              onClick={() => setSelectedLanguage(lang.code)}
            />
          ))}
        </div>

        {/* Continue Button */}
        <Button
          variant="primary"
          fullWidth
          onClick={handleContinue}
          disabled={!selectedLanguage}
          className="text-lg py-4"
        >
          Continue
        </Button>
      </div>
    </div>
  );
}
