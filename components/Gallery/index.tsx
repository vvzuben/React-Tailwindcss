import React from 'react';
import Home from './Home';
import SliderPicture from './sliderPicture';
import SliderContainer from './SliderContainer';
const Gallery: React.FC = () => {
    return(
        <>
        <Home />
        <SliderPicture />
        <SliderContainer />
        </>
    )
}

export default Gallery;