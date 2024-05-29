import React from 'react';
import CustomButton from '../../CustomButton';

interface SliderProps{
    sub_title: string;
    title: string;
    description: string;
    img_url: string;
}

const SliderContainer: React.FC<SliderProps> = (props) => {

    const {sub_title, title, description, img_url} = props;

    return (
        <div className='flex min-h-[962px] bg-secondary gap-10'>
            <div className='w-1/2'>
                <div className='max-w-[834px] relative'>
                    <div className='max-w-[834px] min-h-[540px] pl-[300px] p-20 bg-black-500 shadow-xl'>
                        <p className='text-2xl'>{sub_title}</p>
                        <p className='text-5xl font-semibold pt-5'>{title}</p>
                        <p className='text-white pt-5 text-2xl'>
                            {description}
                        </p>
                    </div>
                    <div className='pt-20 flex justify-end'>
                        <CustomButton text='See all services' />
                    </div>
                </div>
            </div>

            <div className='w-1/2 mt-auto'>
                <img src={img_url} alt=":)Not Founded" className='max-w-[635px] max-h-[857px]' />
            </div>
        </div>
    )
}

export default SliderContainer;