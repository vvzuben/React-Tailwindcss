import React from 'react';

interface ButtonTextProps {
    text: string;
}
const CustomButton: React.FC<ButtonTextProps> = (props) => {
    const { text } = props;
    return <button className='bg-white text-[#4FAFE0] h-[50px] w-[200px]'>{text}</button>
}

export default CustomButton;