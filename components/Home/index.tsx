import React from 'react'
import Menu from './Menu';
import Image from 'next/image';

const Home: React.FC = () => {
    return (
        <div className='bg-primary flex min-h-[941px] items-center'>
            <div>
                <Menu />
            </div>
            <div>
                <Image src="/images/logo.svg" alt=":( Not Found" width={74} height={67} className='mb-8 ml-auto' />
                <Image src="/images/menubarpage.svg" className='max-w-[665px] max-h-[633px]' alt=':( Not Found' />
            </div>
        </div>
    )
}

export default Home;