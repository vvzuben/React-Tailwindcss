import React from 'react';
import CustomButton from '../../CustomButton';
import Image from 'next/image'
interface SliderProps{
    sub_title: string;
    title: string;
    description: string;
    img_url: string;
}

const SliderContainer: React.FC<SliderProps> = (props) => {

    const {sub_title, title, description, img_url} = props;

    return (
        <div className='flex max-lg:flex-col min-h-[962px] bg-secondary gap-10'>
            <div className='w-1/2 max-lg:w-full  max-lg:justify-center max-lg:flex'>
                <div className='max-w-[834px]'>
                    <div className='max-w-[834px] max-lg:max-w-[635px] min-h-[540px] max-lg:pt-0 max-xl:p-20 pl-[300px] p-20 bg-black-500 shadow-xl'>
                        <p className='text-2xl'>{sub_title}</p>
                        <p className='text-5xl font-semibold pt-5'>{title}</p>
                        <p className='text-white pt-5 text-2xl'>
                            {description}
                        </p>
                    </div>
                    <div className='pt-20 flex justify-end max-lg:py-10'>
                        <CustomButton text='See all services' />
                    </div>
                </div>
            </div>

            <div className='w-1/2 mt-auto max-lg:w-full max-lg:order-first  max-lg:justify-center max-lg:flex'>
                <Image src={img_url} width={635} height={857} alt=":)Not Founded" className='max-w-[635px] max-h-[857px]' />
            </div>
        </div>
    )
}

export default SliderContainer;