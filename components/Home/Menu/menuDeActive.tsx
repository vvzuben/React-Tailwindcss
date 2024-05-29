import React from 'react';

const MenuDeActive: React.FC = () => {

    return (
        <div className='flex justify-center'>
            <div className=' absolute top-[400px]'>
                <p className='text-[#4FAFE0] text-9xl font-semibold'>SPACES</p>
                <p className='text-[#253439] text-3xl absolute pt-5'>THAT EXCEED</p>
            </div>
            <p className='text-white text-8xl absolute vertical-rl rotate-180 right-20 top-[100px]'>EXPECTATIONS</p>
            <img src="/images/vector.png" alt=":)Not Found" className='absolute bottom-[130px] left-[100px]'/>
        </div>
    )
}

export default MenuDeActive;