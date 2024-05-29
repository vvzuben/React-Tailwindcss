import React from 'react';
import { Carousel } from 'antd';
import Image from 'next/image';

const SliderPicture: React.FC = () => (
  <Carousel autoplay>
    <div>
      <Image src="/images/canada.svg" alt=":)Not founded" className='w-full' />
    </div>
    <div>
      <Image src="/images/flat.svg" alt=":)Not founded" className='w-full' />
    </div>
    <div>
      <Image src="/images/church.svg" alt=":)Not founded" className='w-full' />
    </div>
  </Carousel>
);

export default SliderPicture;