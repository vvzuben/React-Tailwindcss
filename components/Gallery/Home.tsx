import React from 'react';
import Image from 'next/image';

const Gallery: React.FC = () => {
    return (
        <div className='flex bg-primary gap-10 max-xl:flex-col'>
            <div className='w-1/2 max-xl:w-full'>
                <div className='relative '>
                    <Image src="/images/history.svg" alt="): Not found" height={851} width={831} 
                        className='absolute w-full h-[851px] top-[-851px] max-[1700px]:relative max-[1700px]:top-0 max-[1700px]:h-full' 
                    />
                    <div className='p-20 bg-gray max-h-[657px] pl-[300px] max-[1800px]:p-20'>
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
                <div className='max-w-[635px] h-[851px] ml-auto max-[1800px]:mt-20 max-[1800px]:m-auto mt-20 relative'>
                    <Image src="/images/homes.svg" alt=":) Not founded" width={635} height={851}/>
                    <footer className='absolute h-[139px] w-full bottom-0 backdrop-blur-md bg-black/50 flex items-center justify-center'>
                        <p className='text-white text-4xl '>CUSTOM RESIDENTIAL HOMES</p>
                    </footer>
                </div>
            </div>
            <div className='w-1/2 max-[1800px]:m-auto max-xl:w-full'>
                <div className='max-w-[635px] min-h-[851px] mt-20 relative max-[1800px]:m-auto'>
                    <Image width={635} height={851} src="/images/commercial.svg" alt=":) Not founded" />
                    <footer className='absolute h-[139px] w-full bottom-0 backdrop-blur-md bg-black/50 flex items-center justify-center'>
                        <p className='text-white text-4xl '>COMMERCIAL PROPERTIES</p>
                    </footer>
                </div>
                <div className='max-w-[635px] min-h-[851px] mt-20 relative mb-20 max-[1800px]:m-auto max-[1800px]:mt-20 max-[1800px]:mb-20'>
                    <Image width={635} height={851} src="/images/multi-family.svg" alt=":) Not founded" />
                    <footer className='absolute h-[139px] w-full bottom-0 backdrop-blur-md bg-black/50 flex items-center justify-center'>
                        <p className='text-white text-4xl '>MULTI-FAMILY PROPERTIES</p>
                    </footer>
                </div>
            </div>
        </div>
    )
}

export default Gallery;