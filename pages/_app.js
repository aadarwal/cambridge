import '../styles/globals.css';
import Head from 'next/head';
import { useEffect, useState } from 'react';

// This NoSSR component only renders its children on the client side
// This is a more extreme approach to handle hydration mismatches
const NoSSR = ({ children }) => {
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
  }, []);
  
  return isClient ? children : (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 text-gray-900">
      <div className="p-4 text-center">
        <h1 className="text-2xl font-bold mb-2">Cambridge Explorer</h1>
        <p>Loading...</p>
      </div>
    </div>
  );
};

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Apply any necessary client-side only operations
    try {
      if (typeof document !== 'undefined') {
        // Apply a known className to body to ensure consistent rendering
        document.body.className = document.body.className || 'js-enabled';
      }
    } catch (error) {
      console.error('Error in _app.js useEffect:', error);
    }
  }, []);
  
  // This head component is rendered on both server and client
  const headContent = (
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="Interactive guide to philosophy and physics sites in Cambridge" />
      <link rel="icon" href="/favicon.ico" />
      <title>Cambridge Explorer: Philosophy & Physics</title>
    </Head>
  );
  
  // Render strategy: Head always renders, Component only renders on client
  return (
    <>
      {headContent}
      <NoSSR>
        <Component {...pageProps} />
      </NoSSR>
    </>
  );
}

export default MyApp; 