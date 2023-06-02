import Image from 'next/image';
import ccLogo from '@/assets/ccLogo.png';

export async function getServerSideProps() {
  await new Promise(resolve => {
    setTimeout(resolve, 5000);
  });
  return { props: {}};
}

export default function IndexPage() {
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
