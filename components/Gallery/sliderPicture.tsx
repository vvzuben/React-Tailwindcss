import React from 'react';
import { Carousel } from 'antd';

const SliderPicture: React.FC = () => (
  <Carousel autoplay>
    <div>
      <img src="/images/canada.svg" alt=":)Not founded" className='w-full' />
    </div>
    <div>
      <img src="/images/flat.svg" alt=":)Not founded" className='w-full' />
    </div>
    <div>
      <img src="/images/church.svg" alt=":)Not founded" className='w-full' />
    </div>
  </Carousel>
);

export default SliderPicture;