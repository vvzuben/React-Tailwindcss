import React from 'react'
import SocialIconSet from '../SocialIconSet';
const Footer: React.FC = () => {
    return (
        <footer className='bg-[#182225] px-[300px] max-xl:px-[100px] p-20 '>
            <div className='flex gap-10 max-lg:flex-col max-lg:m-auto'>
                <div className='w-1/2 flex gap-10 max-lg:w-full max-lg:justify-center'>
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
                <div className='w-1/2 flex gap-20  max-lg:w-full max-lg:justify-center'>
                    <div>
                        <p className='text-[#4FAFE0] text-2xl pt-5'>Follow us</p>
                        <SocialIconSet />
                    </div>
                    <img src="/images/logo.svg" alt=":)Not Found" className="w-[74px] h-[67px] mt-5 max-xl:hidden ml-auto" />
                </div>
            </div>
        </footer>
    )
}
export default Footer;