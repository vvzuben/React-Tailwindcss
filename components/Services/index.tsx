import React from 'react'
import CustomButton from '../CustomButton';

const HistoryContainer: React.FC = () => {
    return (
        <div className='flex min-h-[941px] max-lg:min-h-[698px] bg-secondary'>
            <div className='ml-auto w-[945px] max-[1800px]:w-1/2 max-lg:w-full min-h-[698px] relative'>
                <div className='bg-gray/40 backdrop-blur-md absolute w-full h-[216px] max-lg:h-[100px] max-lg:top-[-100px] top-[-216px] max-lg:justify-center max-lg:flex z-10 p-5'>
                    <p className='absolute font-semibold text-8xl max-lg:text-6xl text-white'>STANDARD</p>
                </div>
                <div className='shadow-xl p-20 max-[500px]:p-10'>
                    <div className='pr-[33%] max-xl:pr-[10%] max-lg:pr-0'>
                        <p className='text-[#253439] text-5xl max-lg:text-4xl max-[500px]:text-3xl'>60 YEARS OF HISTORY</p>
                        <p className='text-white text-2xl max-lg:text-xl pt-10 max-[500px]:text-base'>
                            WESTPORT STRUCTURES INC. IS A DYNAMIC AND MULTI-FACETED
                            PROJECT MANAGEMENT AND DESIGN GROUP LOCATED IN OAKVILLE,
                            ONTARIO
                        </p>
                        <p className='text-white text-2xl pt-6 max-[500px]:text-base'>WE SPECIALIZE</p>
                        <li className='text-white text-2xl max-[500px]:text-base'>PLANNING</li>
                        <li className='text-white text-2xl max-[500px]:text-base'>CIVIL ENGINEERING</li>
                        <li className='text-white text-2xl max-[500px]:text-base'>STRUCTURAL DESIGN</li>
                        <div className='flex'>
                            <li className='text-white text-2xl'></li>
                            <p className='text-white text-2xl max-[500px]:text-base'>PROFESSIONALS WITH CONSTRUCTION SERVICES EXPERTISE</p>
                        </div>
                    </div>
                </div>
                <div className='pt-[120px] max-lg:pt-10 flex max-lg:justify-center max-md:pb-10'>
                    <CustomButton text={"learn more"} />
                </div>
            </div>
        </div>
    )
}
export default HistoryContainer;