import Link from 'next/link';
import { useRouter } from 'next/router';
function Home() {
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
            <button onClick={() => router.push('/about')}>
                Click here goes to about
            </button>
        </ul>
    );
}

export default Home;