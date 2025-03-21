import '../styles/globals.css';
import Head from 'next/head';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Fix for potential Next.js hydration issues
    if (typeof window !== 'undefined') {
      document.body.className = document.body.className;
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
      <Component {...pageProps} />
    </>
  );
}

export default MyApp; 