import React, { useState } from 'react';

const ContactForm: React.FC = () => {
    const [name, setName] = useState('');
    const [contactNumber, setContactNumber] = useState('');

    return (
        <div>
            <p>WOULD YOU LIKE TO DISCUSS YOUR PROJECT?</p>
            <form >
                <input type="text" value={name} />
                <input type="text" value={contactNumber} />
                <button type='submit' ></button>
            </form>
        </div>
    )
}

export default ContactForm;