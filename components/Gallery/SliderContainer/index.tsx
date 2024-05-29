import React from 'react';
import { Carousel } from 'antd';
import Data from './data';
import Slide from './slide';


const SliderContainer: React.FC = () => {

    return (
        <Carousel autoplay>
            {
                Data.map(slider =>
                    <Slide
                        key={slider.img_url}
                        sub_title={slider.sub_title}
                        title={slider.title}
                        description={slider.description}
                        img_url={slider.img_url}
                    />)
            }
        </Carousel>
    )
}

export default SliderContainer;