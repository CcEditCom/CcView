import { Provider } from 'react-redux';
import type { AppProps } from 'next/app';
import store from '../store';
import '@/assets/main.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
