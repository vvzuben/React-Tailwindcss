import React from 'react';
import { Carousel } from 'antd';
import Image from 'next/image';

const SliderPicture: React.FC = () => (
  <Carousel autoplay>
    <div>
      <Image src="/images/gallery-5.png" width={1920} height={962} alt=":)Not founded" className='w-full' />
    </div>
    <div>
      <Image src="/images/gallery-6.png" width={1920} height={962} alt=":)Not founded" className='w-full' />
    </div>
    <div>
      <Image src="/images/gallery-7.png" width={1920} height={962} alt=":)Not founded" className='w-full' />
    </div>
  </Carousel>
);

export default SliderPicture;