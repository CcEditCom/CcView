import type { AppProps } from 'next/app';
import '@/assets/main.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
      <Component {...pageProps} />
  );
}
