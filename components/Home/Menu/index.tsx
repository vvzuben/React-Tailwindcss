import React, { useState } from 'react';
import MenuDeActive from "./menuDeActive";
import MenuActive from "./menuActive";
import { Squash as Hamburger } from "hamburger-react";

const Menu: React.FC = () => {
    const [isOpen, setOpen] = useState(false);

    return (
        <div className='bg-gray w-[945px] max-lg:w-full h-[860px] mt-auto relative'>
            <div className='flex justify-end m-3 '>
                <Hamburger toggled={isOpen} size={35} toggle={setOpen} color='white' />
            </div>
            {
                isOpen ? <MenuActive /> : <MenuDeActive />
            }
            <div className=' max-xl:hidden bg-gray/40 backdrop-blur-md absolute w-full h-[216px] bottom-[-216px] z-10'/>
        </div>
    )
}

export default Menu;