import React, { useState } from 'react';
import Image from 'next/image';
import LinkedInIcon from '/images/linkedInIcon.svg';

interface IconSetProps {
    color: string;
}

const SocialIconSet: React.FC<IconSetProps> = (props) => {
    const { color } = props;

    return (
        <div className='flex gap-2 max-sm:flex-col pt-5'>
            {
                color == 'white' ?
                    <div className='flex gap-2'>
                        <Image src="/images/Linkedin.svg" width={45} height={45} alt=':)Not Founded' />
                        <Image src="/images/fB.svg" width={45} height={45} alt=':)Not Founded' />
                        <Image src="/images/Instgram.svg" width={45} height={45} alt=':)Not Founded' />
                        <Image src="/images/twitter.svg" width={45} height={45} alt=':)Not Founded' />
                        <Image src="/images/Scribd.svg" width={45} height={45} alt=':)Not Founded' />
                        <Image src="/images/academia.svg" width={45} height={45} alt=':)Not Founded' />
                        <Image src="/images/issue.svg" className='max-[420px]:hidden' width={45} height={45} alt=':)Not Founded' />
                    </div> :
                    <div className='flex gap-2'>
                        <Image src="/images/Linkedin-blue.svg" width={45} height={45} alt=':)Not Founded' />
                        <Image src="/images/fB-blue.svg" width={45} height={45} alt=':)Not Founded' />
                        <Image src="/images/instrgam-blue.svg" width={45} height={45} alt=':)Not Founded' />
                        <Image src="/images/twitter-blue.svg" width={45} height={45} alt=':)Not Founded' />
                        <Image src="/images/Scribd-blue.svg" className='max-[600px]:hidden' width={45} height={45} alt=':)Not Founded' />
                        <Image src="/images/academia-blue.svg" className='max-[600px]:hidden' width={45} height={45} alt=':)Not Founded' />
                        <Image src="/images/issue-blue.svg" className='max-[600px]:hidden' width={45} height={45} alt=':)Not Founded' />
                    </div>
            }
            {
                color == "white" ?
                    <Image src="/images/issue.svg" className='min-[420px]:hidden' width={45} height={45} alt=':)Not Founded' />
                    : <div className='flex gap-2'>
                        <Image src="/images/Scribd-blue.svg" className='min-[600px]:hidden' width={45} height={45} alt=':)Not Founded' />
                        <Image src="/images/academia-blue.svg" className='min-[600px]:hidden' width={45} height={45} alt=':)Not Founded' />
                        <Image src="/images/issue-blue.svg" className='min-[600px]:hidden' width={45} height={45} alt=':)Not Founded' />
                    </div>
            }
        </div>
    )
}

export default SocialIconSet;