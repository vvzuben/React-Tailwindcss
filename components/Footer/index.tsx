import React from 'react'
import SocialIconSet from '../SocialIconSet';
import Image from "next/image";

const Footer: React.FC = () => {
    return (
        <div className='bg-[#182225]'>
            <div className=' px-[300px] max-xl:px-[100px] p-20 max-[500px]:p-7'>
                <div className='flex gap-10 max-[800px]:flex-col max-[500px]:pb-20'>
                    <div className='w-1/2 flex gap-10 w-full'>
                        <div>
                            <p className='text-[#4FAFE0] text-2xl pt-5'> Sitemap</p>
                            <p className='text-white text-base pt-5'>About Us</p>
                            <p className='text-white text-base pt-5'>Contact Us</p>
                            <p className='text-white text-base pt-5' >Services</p>
                            <p className='text-white text-base pt-5'>Gappery</p>
                        </div>
                        <div>
                            <p className='text-[#4FAFE0] text-2xl pt-5'>Contact</p>
                            <p className='text-white text-base pt-5'>Canada</p>
                            <p className='text-white text-base pt-5'>2380 Wyecroft Road Oakville L6L 6W1</p>
                            <p className='text-white text-base pt-5' >Email: info@westportstructures.com</p>
                            <p className='text-white text-base pt-5'>Phone: 905-465-1728</p>
                        </div>
                    </div>
                    <div className='w-1/2 flex gap-20 w-full'>
                        <div className='m-auto'>
                            <p className='text-[#4FAFE0] text-2xl pt-5'>Follow us</p>
                            <SocialIconSet color='white' />
                        </div>
                        <img src="/images/logo.svg" alt=":)Not Found" className="w-[74px] h-[67px] mt-5 max-xl:hidden ml-auto" />
                    </div>
                </div>
            </div>
            <div className='border-t border-white flex justify-center gap-3'>
                <Image src="/images/copyright.svg" width={25} height={25} alt=":)Not Founded" />
                <p className='text-white py-4'>
                    Westport Structures Inc. 2023. All Rights Reserved.
                </p>
            </div>
        </div>

    )
}
export default Footer;