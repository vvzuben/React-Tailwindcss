import React from 'react';
import Image from 'next/image';

const Gallery: React.FC = () => {
    return (
        <div className='flex bg-primary gap-10'>
            <div className='w-1/2'>
                <div className='relative w-[835px]'>
                    <Image src="/images/history.svg" alt="): not found" className='absolute w-full min-h-[851px] top-[-851px] z-10' />
                    <div className='p-20 bg-gray max-h-[657px] pl-[300px]'>
                        <p className='text-[#4FAFE0] text-5xl'>LETS BUILD TOGETHER</p>
                        <p className='pt-10 text-white text-2xl'>Our foremost priority at Westport is to create exceptional
                            environments that meet our clients building objectives
                            while exceeding their expectations.
                            Our design solutions are not only functionally appropriate and
                            aesthetically pleasing but also execute t enrich the lives of people
                            and the communities the inhabit.
                        </p>
                    </div>
                </div>
                <div className='max-w-[635px] min-h-[851px] ml-auto mt-20 relative'>
                    <img src="/images/homes.svg" alt=":) Not founded" className='max-w-[635px] min-h-[851px] ' />
                    <footer className='absolute h-[139px] w-full bottom-0 backdrop-blur-md bg-black/50 flex items-center justify-center'>
                        <p className='text-white text-4xl '>CUSTOM RESIDENTIAL HOMES</p>
                    </footer>
                </div>
            </div>
            <div className='w-1/2'>
                <div className='max-w-[635px] min-h-[851px] mt-20 relative'>
                    <img src="/images/commercial.svg" alt=":) Not founded" className='max-w-[635px] min-h-[851px] ' />
                    <footer className='absolute h-[139px] w-full bottom-0 backdrop-blur-md bg-black/50 flex items-center justify-center'>
                        <p className='text-white text-4xl '>COMMERCIAL PROPERTIES</p>
                    </footer>
                </div>
                <div className='max-w-[635px] min-h-[851px] mt-20 relative mb-20'>
                    <img src="/images/multi-family.svg" alt=":) Not founded" className='max-w-[635px] min-h-[851px] ' />
                    <footer className='absolute h-[139px] w-full bottom-0 backdrop-blur-md bg-black/50 flex items-center justify-center'>
                        <p className='text-white text-4xl '>MULTI-FAMILY PROPERTIES</p>
                    </footer>
                </div>
            </div>
        </div>
    )
}

export default Gallery;