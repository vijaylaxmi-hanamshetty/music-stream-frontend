'use client';

export default function LoaderDots() {
  return (
    <div className="flex gap-3 justify-center items-center">
      <span className="w-3 h-3 bg-purple-600 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></span>
      <span className="w-3 h-3 bg-purple-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
      <span className="w-3 h-3 bg-purple-600 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></span>
    </div>
  );
}
