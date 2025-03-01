import '../styles/globals.css';

import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: { Component: React.ComponentType, pageProps: any }) {
  return <Component {...pageProps} />;
}

export default MyApp;