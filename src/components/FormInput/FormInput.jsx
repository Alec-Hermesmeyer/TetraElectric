import React from 'react';
import './forminput.css';

const FormInput = () => {
    
  return (
    <section className='formInput'>
        <label htmlFor="name" className="form-label">Name</label>
        <input type="text" className="form-input" />
        <label htmlFor="email" className="form-label">Email</label>
        <input type="email" className="form-input" />
        <label htmlFor="tel" className="form-label">Phone Number</label>
        <input type="tel" className="form-input" />
        <label htmlFor="message" className="form-label">Message</label>
        <textarea />
    </section>
  )
}

export default FormInput