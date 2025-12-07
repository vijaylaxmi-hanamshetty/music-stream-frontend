'use client';

import React, { useState } from 'react';

interface InputProps {
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  error?: string;
  icon?: React.ReactNode;
  toggleIcon?: React.ReactNode;
  onToggle?: () => void;
}

export default function Input({
  type = 'text',
  placeholder = '',
  value,
  onChange,
  label,
  error,
  icon,
  toggleIcon,
  onToggle,
}: InputProps) {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {label}
        </label>
      )}
      <div className="relative">
        {icon && (
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
            {icon}
          </div>
        )}
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`w-full px-4 py-3 rounded-lg border-2 transition-all duration-300 focus:outline-none ${
            icon ? 'pl-12' : ''
          } ${
            error
              ? 'border-red-500 focus:border-red-600'
              : 'border-gray-200 focus:border-purple-600'
          } ${toggleIcon ? 'pr-12' : ''}`}
        />
        {toggleIcon && (
          <button
            type="button"
            onClick={onToggle}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            {toggleIcon}
          </button>
        )}
      </div>
      {error && (
        <p className="text-red-500 text-sm mt-1">{error}</p>
      )}
    </div>
  );
}
