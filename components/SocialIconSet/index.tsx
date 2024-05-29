import React from 'react';
import { LinkedinOutlined, FacebookOutlined, TwitterOutlined, InstagramOutlined, SkypeOutlined } from "@ant-design/icons"

const SocialIconSet: React.FC = (props) => {

    return (
        <div className='flex gap-2 pt-5'>
            <button className='text-white bg-transparent hover:bg-white hover:text-primary p-2 border w-10 h-10'><LinkedinOutlined/></button>
            <button className='text-white bg-transparent p-2 border w-10 h-10 hover:bg-white hover:text-primary'><FacebookOutlined/></button>
            <button className='text-white bg-transparent p-2 border w-10 h-10 hover:bg-white hover:text-primary'><InstagramOutlined/></button>
            <button className='text-white bg-transparent p-2 border w-10 h-10 hover:bg-white hover:text-primary'><TwitterOutlined/></button>
            <button className='text-white bg-transparent p-2 border w-10 h-10 hover:bg-white hover:text-primary'><SkypeOutlined/></button>
            <button className='text-white bg-transparent p-2 border w-10 h-10 hover:bg-white hover:text-primary'><LinkedinOutlined/></button>
            <button className='text-white bg-transparent p-2 border w-10 h-10 hover:bg-white hover:text-primary'>A</button>
            <button className='text-white bg-transparent p-2 border w-10 h-10 hover:bg-white hover:text-primary'>!</button>
        </div>
    )
}

export default SocialIconSet;