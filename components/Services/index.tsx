import React from 'react'
import CustomButton from '../CustomButton';

const HistoryContainer: React.FC = () => {
    return (
        <div className='flex gaf min-h-[941px] bg-secondary'>
            <div className='ml-auto w-[945px] min-h-[698px] relative'>
                <div className='bg-gray/40 backdrop-blur-md absolute w-full h-[216px] top-[-216px] z-10 p-5'>
                    <p className='absolute font-semibold text-8xl text-white'>STANDARD</p>
                </div>
                <div className='shadow-xl p-20'>
                    <div className='pr-[300px]'>
                        <p className='text-[#253439] text-5xl'>60 YEARS OF HISTORY</p>
                        <p className='text-white text-2xl pt-10'>
                            WESTPORT STRUCTURES INC. IS A DYNAMIC AND MULTI-FACETED
                            PROJECT MANAGEMENT AND DESIGN GROUP LOCATED IN OAKVILLE,
                            ONTARIO
                        </p>
                        <p className='text-white text-2xl pt-6'>WE SPECIALIZE</p>
                        <li className='text-white text-2xl'>PLANNING</li>
                        <li className='text-white text-2xl'>CIVIL ENGINEERING</li>
                        <li className='text-white text-2xl'>STRUCTURAL DESIGN</li>
                        <div className='flex'>
                            <li className='text-white text-2xl'></li>
                            <p className='text-white text-2xl'>PROFESSIONALS WITH CONSTRUCTION SERVICES EXPERTISE</p>
                        </div>
                    </div>
                </div>
                <div className='pt-[120px]'>
                    <CustomButton text={"learn more"} />
                </div>
            </div>
        </div>
    )
}
export default HistoryContainer;