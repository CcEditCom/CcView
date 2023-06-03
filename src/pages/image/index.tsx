import styles from '@/assets/styles.module.css';
import Image from 'next/image';
import Link from 'next/link';
import type { PropsWithChildren } from 'react';
import vercel from '/public/vercel.png';

const Code = (props: PropsWithChildren<{}>) => (
  <code className={styles.inlineCode} {...props} />
);

const Index = () => (
  <>
    <h2 id='examples'>示例</h2>
    <ul className='p-10'>
      <li>
        <Link href='/image/responsive'>响应窗口</Link>
      </li>
      <li>
        <Link href='/image/fill'>填充父元素</Link>
      </li>
      <li>
        <Link href='/image/placeholder'>模糊占位</Link>
      </li>
      <li>
        <Link href='/image/shimmer'>Shimmer 占位</Link>
      </li>
      <li>
        <Link href='/image/color'>Color 占位</Link>
      </li>
      <li>
        <Link href='/image/background'>文字在图片之上</Link>
      </li>
    </ul>
    <p> Image 组件默认支持懒加载， 最后一张外部图片滚动才能看到 </p>
    <h2 id='internal'>内部 Image</h2>
    <hr className={styles.hr} />
    <Image
      alt='Vercel logo'
      src={vercel}
      width={700}
      height={200}
      style={{
        maxWidth: '100%',
        height: 'auto'
      }}
    />
    <h2 id='external'>外部图片</h2>
    <p>
     外部图片需要在 <Code>next.config.js</Code> 增加 <Code>remotePatterns</Code> 配置.
    </p>
    <Image
      alt='Next.js logo'
      src='https://assets.vercel.com/image/upload/v1538361091/repositories/next-js/next-js-bg.png'
      width={1200}
      height={400}
      style={{
        maxWidth: '100%',
        height: 'auto'
      }}
    />
  </>
);

export default Index;
