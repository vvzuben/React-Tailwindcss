import React from 'react'
import Menu from './Menu';
import Image from 'next/image';

const Home: React.FC = () => {
    return (
        <div className='bg-primary flex max-lg:flex-col h-[941px] items-center'>
            <Menu />
            <div>
                <Image src="/images/logo.svg" alt=":( Not Found" width={74} height={67} className='mb-8 ml-auto max-lg:hidden' />
                <Image src="/images/home.svg"  layout='responsive' width={665} height={633} className='max-w-[665px] max-h-[633px] max-lg:hidden' alt=':( Not Found' />
            </div>
        </div>
    )
}

export default Home;