import type { ReactElement } from 'react';
import Layout from '../components/layout';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Home() {
    const router = useRouter();

    return (
        <ul>
            <li>
                <Link href='/design/11111'>
                    <span>Go to pages/ design/11111</span>
                </Link>
            </li>
            <li>
                <Link href='/about'>
                    <span>Also goes to about</span>
                </Link>
            </li>
            <li>
                <Link href='/login'>
                    <span>Also goes to login</span>
                </Link>
            </li>
            <li>
                <button onClick={() => router.push('/about')}>
                    Click here goes to about
                </button>
            </li>
            <li>
                <button onClick={() => router.push('/api/user')}>
                    get user json
                </button>
            </li>
        </ul>
    );
}

Home.getLayout = (page: ReactElement) => {
    return (
        <Layout>
           {page}
        </Layout>
    );
};