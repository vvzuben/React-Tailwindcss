import React from 'react';
import CustomButton from '../CustomButton';
import Image from 'next/image'

const ContactUs: React.FC = () => {
    return (
        <div className='flex bg-primary min-h-[941px] gap-10'>
            <div className='w-1/2 mt-auto'>
                <Image src="/images/contactus.svg" alt=":)Not Found" className='max-w-[834px] max-h-[801px]' />
            </div>
            <div className='w-1/2'>
                <form className='bg-gray p-12 w-[635px] h-[801px] pt-[140px]'>
                    <p className="text-[#4FAFE0] text-5xl">WOULD YOU LIKE TO DISCUSS YOUR PROJECT?</p>
                    <input type="text" className="mt-20 border border-white p-2 bg-gray text-white focus:outline-none h-[54px] w-full" placeholder="Name"/>
                    <input type="text" className="mt-10 border border-white p-2 bg-gray text-white focus:outline-none h-[54px] w-full" placeholder="Contact number"/>
                    <div className='mt-10'>
                        <CustomButton text='Contact us' />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ContactUs;