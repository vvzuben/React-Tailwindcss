import SocialIconSet from '@/components/SocialIconSet';
import React from 'react';

const MenuActive = () => {
    return (
        <div className='p-20 pl-[40%] max-2xl:p-[10%]'>
            <div className='flex gap-20'>
                <p className='text-[#4FAFE0] text-5xl vertical-rl rotate-180'>SITEMAP</p>
                <ul className='flex flex-col gap-4'>
                    <li className='text-xl text-white'>Home</li>
                    <li className='text-xl text-white'>About Us</li>
                    <li className='text-xl text-white'>Services</li>
                    <li className='text-xl text-white'>Gallery</li>
                    <li className='text-xl text-white'>Contact Us</li>
                </ul>
            </div>
            <div className='flex gap-20 pt-20'>
                <p className='text-[#4FAFE0] text-5xl vertical-rl rotate-180 mt-auto'>CONTACT</p>
                <ul className='flex flex-col gap-4'>
                    <li className='text-xl text-white'>Canada</li>
                    <li className='text-xl text-white'>2380 Wyecroft Road Oakville</li>
                    <li className='text-xl text-white'>L6L 6W1</li>
                    <li className='text-xl text-white'>Email:info@westportstructures.com</li>
                    <li className='text-xl text-white'>Phone:905-465-1728</li>
                    <SocialIconSet />
                </ul>
            </div>
        </div>
    )
}

export default MenuActive;