'use client';

export default function HomePage() {
  return (
    <div className="min-h-screen w-full bg-white p-4 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Welcome to Music Stream
        </h1>
        <p className="text-gray-600 text-lg">
          Your language preference has been saved. The app will start loading your music library.
        </p>
      </div>
    </div>
  );
}
