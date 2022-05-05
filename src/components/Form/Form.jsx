import React from 'react'
import FormInput from '../FormInput/FormInput'
import './form.css'

const Form = () => {
    const handleChange = (e) => {
        e.preventDefault();
    }
  return (
    <section className="form-container">
        <article className="form-wrapper">
            <FormInput onChange={handleChange}/>
            <button className='submit-button'>Submit</button>
        </article>
        
    </section>
  )
}

export default Form