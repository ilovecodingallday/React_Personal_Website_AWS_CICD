import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const submit = () => {
        if (name && email && message) {
            const serviceId = 'service_cf2jzpm';
            const templateId = 'template_z2igz3p';
            const userId = 'vxVOO590i9ohRWNmE';
            const templateParams = {
                name,
                email,
                message
            };

            emailjs.send(serviceId, templateId, templateParams, userId)
                .then(response => console.log(response))
                .then(error => console.log(error));

            setName('');
            setEmail('');
            setMessage('');
            alert('Thank You');
        } else {
            alert('Please fill in all fields.');
        }
    }

    return (
        <>

        <div className="contact-form">
            <input type="text" placeholder="Your Name" value={name} onChange={e => setName(e.target.value)} />
            <input type="email" placeholder="Your email address" value={email} onChange={e => setEmail(e.target.value)} />
            <textarea placeholder="Your message" value={message} onChange={e => setMessage(e.target.value)}></textarea>
            <button onClick={submit}>Send Message</button>

        </div>

        <div className="contact-info">

            <hr />

            <strong>Address:</strong> Somers Point, NJ 08244<br />
            <strong>Email:</strong> MichaelCurtisMcNulty@outlook.com<br />
            <strong>Phone:</strong> 609-900-4291<br />
            <br/>

        </div>

        </>
    );
};

export default Contact;


