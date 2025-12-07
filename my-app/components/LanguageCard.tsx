'use client';

import React from 'react';

interface LanguageCardProps {
  language: string;
  nativeLanguage: string;
  code: string;
  isSelected: boolean;
  onClick: () => void;
}

export default function LanguageCard({
  language,
  nativeLanguage,
  code,
  isSelected,
  onClick,
}: LanguageCardProps) {
  return (
    <button
      onClick={onClick}
      className={`w-full p-6 rounded-xl border-2 transition-all duration-300 flex items-center justify-between ${
        isSelected
          ? 'border-purple-600 bg-purple-50'
          : 'border-gray-200 bg-white hover:border-purple-300'
      }`}
    >
      <div className="flex flex-col items-start">
        <span className="text-lg font-semibold text-gray-800">{language}</span>
        <span className="text-sm text-gray-500">{nativeLanguage}</span>
      </div>
      {isSelected && (
        <svg
          className="w-6 h-6 text-purple-600"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>
      )}
    </button>
  );
}
