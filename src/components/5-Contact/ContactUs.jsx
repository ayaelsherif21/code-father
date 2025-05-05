import React from 'react'
import './ContactUs.css'
import { useForm, ValidationError } from '@formspree/react';
import Lottie from "lottie-react";
import contactAnimation from '../../Animation/Contactus.json'
import ContactForm from './ContactForm';

export default function ContactUs() {

  const [state, handleSubmit] = useForm("xldbdkee");

  

  return (
    <div  className="contact">
        <h2 className='contactTitle'>
        <span className='icon-envelope'></span>
        Contact <span style={{color:"var(--mainColor"}}>Us</span>
        </h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit, veritatis.</p>
   <div style={{justifyContent:"space-between"}} className="flex ">
      <ContactForm/>
        <div className="con-animation">
    <Lottie className='contact-Animation'  animationData={contactAnimation} />
    </div>
    </div>
    </div>
  )
}
