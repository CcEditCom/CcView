import Image from 'next/image';
import ccLogo from '@/assets/ccLogo.png';

export default function Loading() {
    return (
        <>
            <Image
                src={ccLogo}
                alt='Picture of the author'
                width={500}
                height={500}
                priority
            />
        </>
    );
}