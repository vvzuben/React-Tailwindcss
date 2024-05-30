import SocialIconSet from '@/components/SocialIconSet';
import React from 'react';

const MenuActive = () => {
    return (
        <div className='p-20 pl-[40%] max-2xl:p-[10%] max-sm:p-10'>
            <div className='flex gap-20 max-[500px]:gap-10'>
                <p className='text-[#4FAFE0] text-5xl vertical-rl rotate-180 max-[500px]:text-3xl'>SITEMAP</p>
                <ul className='flex flex-col gap-4'>
                    <li className='text-xl text-white max-[500px]:text-base'>Home</li>
                    <li className='text-xl text-white max-[500px]:text-base'>About Us</li>
                    <li className='text-xl text-white max-[500px]:text-base'>Services</li>
                    <li className='text-xl text-white max-[500px]:text-base'>Gallery</li>
                    <li className='text-xl text-white max-[500px]:text-base'>Contact Us</li>
                </ul>
            </div>
            <div className='flex gap-20 pt-20 max-[500px]:gap-10'>
                <p className='text-[#4FAFE0] text-5xl vertical-rl rotate-180 mt-auto max-[500px]:text-3xl'>CONTACT</p>
                <ul className='flex flex-col gap-4'>
                    <li className='text-xl text-white max-[500px]:text-base'>Canada</li>
                    <li className='text-xl text-white max-[500px]:text-base'>2380 Wyecroft Road Oakville</li>
                    <li className='text-xl text-white max-[500px]:text-base'>L6L 6W1</li>
                    <li className='text-xl text-white max-[500px]:text-base'>Email:info@westportstructures.com</li>
                    <li className='text-xl text-white max-[500px]:text-base'>Phone:905-465-1728</li>
                    <SocialIconSet color='#3688B6'/>
                </ul>
            </div>
        </div>
    )
}

export default MenuActive;