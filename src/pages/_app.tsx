import { Provider } from 'react-redux';
import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import store from '../store';
import '@/assets/main.css';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const handleStart = (url: string) => {
      console.log(`Loading: ${url}`);
      NProgress.start();
    };

    const handleStop = () => {
      NProgress.done();
    };

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleStop);
    router.events.on('routeChangeError', handleStop);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleStop);
      router.events.off('routeChangeError', handleStop);
    };
  }, [router]);

  return (
    <>
      <Head>
        <title>Cc-View</title>
        <link rel='icon' href='/favicon.ico'/>
      </Head>
      <style jsx>{`
        a {
          margin: 0 10px 0 0;
        }
      `}</style>
      <div className='flex flex-row justify-around justify-center'>
        <Link className='inline-block' href='/'>
          <span> / </span>
        </Link>
        <Link className='inline-block' href='/image'>
          <span> /image组件 </span>
        </Link>
        <Link className='inline-block' href='/svg'>
          <span> /svg组件 </span>
        </Link>
        <Link className='inline-block' href='/cookie'>
          <span>cookie读写  </span>
        </Link>
        <Link className='inline-block' href='/components'>
          <span>components组件引入 </span>
        </Link>
        <Link className='inline-block' href='/form'>
          <span>form表单 </span>
        </Link>
        <Link className='inline-block' href='/redux'>
          <span>redux实例 </span>
        </Link>
        <Link className='inline-block' href='/design/11111'>
          <span>design带参数</span>
        </Link>
        <Link className='inline-block' href='/about'>
          <span>/about</span>
        </Link>
        <Link className='inline-block' href='/login'>
          <span>/login</span>
        </Link>
        <button className='inline-block' onClick={() => router.push('/about')}>
          /about
        </button>
        <button className='inline-block' onClick={() => router.push('/api/user')}>
          get json api
        </button>
      </div>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}
