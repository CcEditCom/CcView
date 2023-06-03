import Image from 'next/image';
import mountains from '/public/mountains.jpg';

const PlaceholderBlur = () => (
  <div>
    <h1>Placeholder Blur： Image 组件会对内部图像自动生成 blurdataurl 属性，用来 做过渡显示</h1>
    <Image
      alt='Mountains'
      src={mountains}
      placeholder='blur'
      width={700}
      height={475}
      style={{
        maxWidth: '100%',
        height: 'auto'
      }}
    />
  </div>
);

export default PlaceholderBlur;
