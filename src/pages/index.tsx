import type { ReactElement } from 'react';
import Layout from '../components/layout';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import ccLogo from '@/assets/ccLogo.png';

export default function IndexPage() {
    const router = useRouter();

    return (
        <>
            <Image
                src={ccLogo}
                alt='Picture of the author'
                width={500}
                height={500}
                priority
            />
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
        </>
    );
}

IndexPage.getLayout = (page: ReactElement) => {
    return page;
};