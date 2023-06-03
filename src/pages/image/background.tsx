import Image from 'next/image';
import styles from '@/assets/styles.module.css';
import mountains from '/public/mountains.jpg';

const BackgroundPage = () => (
  <div>
    <div className={styles.bgWrap}>
      <Image
        alt='Mountains'
        src={mountains}
        placeholder='blur'
        quality={100}
        fill
        sizes='100vw'
        style={{
          objectFit: 'cover'
        }}
      />
    </div>
    <p className={styles.bgText}>
      Image Component
    </p>
  </div>
);

export default BackgroundPage;
