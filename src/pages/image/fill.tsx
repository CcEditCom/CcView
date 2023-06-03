import Image from 'next/image';
import mountains from '/public/mountains.jpg';

const Fill = () => (
  <div>
    <h1 className={'mt-2'} >objectFit：cover 一边撑满，一边裁切</h1>
    <div style={{ position: 'relative', width: '300px', height: '500px' }}>
      <Image
        alt='objectFit：cover 一边撑满，一边裁切'
        src={mountains}
        fill
        sizes='100vw'
        style={{
          objectFit: 'cover'
        }}
      />
    </div>
    <h1 className={'mt-2'} >objectFit：contain 最大边包含</h1>
    <div style={{ position: 'relative', width: '300px', height: '500px' }}>
      <Image
        alt='objectFit：contain 最大边包含'
        src={mountains}
        fill
        sizes='100vw'
        style={{
          objectFit: 'contain'
        }}
      />
    </div>
    <h1 className={'mt-2'}>objectFit：none 超出裁切</h1>
    <div style={{ position: 'relative', width: '300px', height: '500px' }}>
      <Image
        alt='objectFit：none 超出裁切'
        src={mountains}
        quality={100}
        fill
        sizes='100vw'
        style={{
          objectFit: 'none'
        }}
      />
    </div>
  </div>
);

export default Fill;
