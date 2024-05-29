import React from 'react'
import Home from '@/components/Home';
import AboutUs from '@/components/AboutUs';
import Services from '@/components/Services'
import Gallery from '@/components/Gallery';
import ContactUs from '@/components/ContactUs';

const MainPage: React.FC = () => {
    return (
        <>
            <Home />
            <AboutUs />
            <Services />
            <Gallery />
            <ContactUs />
        </>
    )
}

export default MainPage;