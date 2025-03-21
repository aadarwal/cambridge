import Link from 'next/link';
import { HomeIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import { useState, useEffect } from 'react';
import Head from 'next/head';

export default function Custom404() {
  // Using the NoSSR approach from _app.js, we can assume we're running on the client
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check system preference for dark mode safely
    try {
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setDarkMode(true);
      }
    } catch (e) {
      console.error('Error checking dark mode preference:', e);
    }
  }, []);

  return (
    <div className={clsx('min-h-screen flex flex-col items-center justify-center p-6', {
      'dark bg-dark-900 text-white': darkMode,
      'bg-gray-100 text-gray-900': !darkMode
    })}>
      <Head>
        <title>404 - Page Not Found | Cambridge Explorer</title>
        <meta name="description" content="Page not found - Cambridge Explorer" />
      </Head>
      <div className="text-center">
        <h1 className="text-9xl font-bold text-primary-600">404</h1>
        <h2 className="text-2xl font-semibold mt-4">Page Not Found</h2>
        <p className={clsx('mt-2', {
          'text-gray-300': darkMode,
          'text-gray-600': !darkMode
        })}>
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Link 
          href="/"
          className={clsx('mt-6 inline-flex items-center px-4 py-2 rounded-md', {
            'bg-primary-600 hover:bg-primary-700 text-white': true
          })}
        >
          <HomeIcon className="h-5 w-5 mr-2" />
          Return to Home
        </Link>
      </div>
    </div>
  );
} 