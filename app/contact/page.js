'use client'
import { useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';

export default function Page() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
        // Clear errors when the field is changed
        setErrors(prevState => ({
            ...prevState,
            [name]: ''
        }));
    };

    const validateForm = () => {
        let isValid = true;
    
        if (!formData.name.trim()) {
            toast.error('Name is required');
            isValid = false;
        }
        if (!formData.email.trim()) {
            toast.error('Email is required');
            isValid = false;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            toast.error('Invalid email format');
            isValid = false;
        }
        if (!formData.message.trim()) {
            toast.error('Message is required');
            isValid = false;
        }
    
        return isValid;
    };

    const handleSubmit = event => {
        event.preventDefault();
        if (validateForm()) {
            console.log(formData);
            toast.success('Form Submitted Successfully')
            // Clear form data after submission
            setFormData({
                name: '',
                email: '',
                message: ''
            });
        }
    };

    return (
        <>
        <Toaster/>
        <div className='contact'>
        <h1>Contact Us</h1>
        <div className='contact-field'>
            <div className="form-card1">
                <div className="form-card2">
                    <form className="form" onSubmit={handleSubmit}>
                        <p className="form-heading">Get In Touch</p>

                        <div className="form-field">
                            <input placeholder="Name" id='name' name='name' className="input-field" type="text" value={formData.name} onChange={handleChange} />
                            
                        </div>

                        <div className="form-field">
                            <input
                                placeholder="Email"
                                className="input-field"
                                type="email"
                                id="email" name="email" value={formData.email} onChange={handleChange}
                            />
                            
                        </div>

                

                        <div className="form-field">
                            <textarea
                                required=""
                                placeholder="Message"
                                cols="30"
                                rows="3"
                                className="input-field"
                                id="message" name="message" value={formData.message} onChange={handleChange}
                            ></textarea>
                            
                        </div>

                        <button className="sendMessage-btn submit">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
            

        </div>
           
        </>

    );
};
