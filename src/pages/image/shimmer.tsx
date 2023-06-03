import Image from 'next/image';
import { getBase64 } from '@/components/shimmer';

const Shimmer = () => (
  <div>
    <h1>自己提供blurDataURL实现图片模糊加载</h1>
    <Image
      alt='Mountains'
      src='/mountains.jpg'
      placeholder='blur'
      blurDataURL={getBase64()}
      width={700}
      height={475}
      style={{
        maxWidth: '100%',
        height: 'auto'
      }}
    />
  </div>
);

export default Shimmer;
