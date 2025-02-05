'use client'
import React from 'react';
import { useRouter } from 'next/navigation';

const NotFound = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#F6F7F9] px-6 text-center">
      
      
      <h1 className="text-5xl font-extrabold text-blue-600 animate-pulse">404</h1>
      <h2 className="text-2xl font-semibold mt-2 text-gray-800">
        Oops! Page Not Found
      </h2>
      <p className="text-gray-500 mt-2 text-lg">
        The page you are looking for doesn’t exist or may have been moved.
      </p>
      <button
        onClick={() => router.push('/')}
        className="mt-6 px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
      >
        Go Back Home
      </button>
    </div>
  );
};

export default NotFound;
