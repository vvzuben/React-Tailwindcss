import React from 'react';
import Image from 'next/image';

const MenuDeActive: React.FC = () => {

    return (
        <div className='flex justify-center'>
            <div className=' absolute top-[400px]'>
                <p className='text-[#4FAFE0] text-9xl max-2xl:text-6xl font-semibold'>SPACES</p>
                <p className='text-[#253439] text-3xl absolute pt-5'>THAT EXCEED</p>
            </div>
            <p className='text-white text-8xl  max-2xl:text-6xl max-2xl:top-[30%] absolute vertical-rl rotate-180 right-20 top-[100px]'>EXPECTATIONS</p>
            <Image src="/images/vector.png" width={49} height={45} alt=":)Not Found" className='absolute bottom-[130px] left-[100px]'/>
        </div>
    )
}

export default MenuDeActive;