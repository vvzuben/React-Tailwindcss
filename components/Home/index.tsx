import React from 'react'
import Menu from './Menu';
import Image from 'next/image';

const Home: React.FC = () => {
    return (
        <div className='bg-primary flex max-lg:flex-col h-[941px] items-center'>
            <Menu />
            <Image src="/images/logo.svg" alt=":( Not Found" width={55} height={40} className='lg:hidden ml-5 mt-5 mr-auto absolute top-0 left-0' />
            <div className='min-xl:mb-10'>
                <Image src="/images/logo.svg" alt=":( Not Found" width={74} height={67} className='mb-4 ml-auto max-lg:hidden' />
                <Image src="/images/home.png" width={665} height={633} className='max-w-[665px] max-h-[633px] max-lg:hidden' alt=':( Not Found' />
            </div>
        </div>
    )
}

export default Home;