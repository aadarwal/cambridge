import '../styles/globals.css';
import Head from 'next/head';
import { useEffect, useState } from 'react';

function MyApp({ Component, pageProps }) {
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    // Force a re-render after component mounts to fix hydration issues
    setIsMounted(true);
    
    // Apply any necessary client-side only operations
    if (typeof document !== 'undefined') {
      // Apply a known className to body to ensure consistent rendering
      document.body.className = document.body.className || 'js-enabled';
    }
  }, []);
  
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Interactive guide to philosophy and physics sites in Cambridge" />
        <link rel="icon" href="/favicon.ico" />
        <title>Cambridge Explorer: Philosophy & Physics</title>
      </Head>
      {/* Render Component regardless of mounted state, individual pages will handle their own mounted checks */}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp; 