import '../styles/globals.css';
import Head from 'next/head';
import { useEffect, useState } from 'react';

function MyApp({ Component, pageProps }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Mark component as mounted
    setMounted(true);
    
    // Fix for potential Next.js hydration issues
    if (typeof window !== 'undefined') {
      // Force a re-render to fix any class mismatches
      document.body.className = document.body.className;
    }
  }, []);

  // Optional: Return minimal UI while not mounted to avoid hydration issues
  // This is a safety fallback but usually not needed since pages have their own
  // mounted checks
  
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Interactive guide to philosophy and physics sites in Cambridge" />
        <link rel="icon" href="/favicon.ico" />
        <title>Cambridge Explorer: Philosophy & Physics</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp; 