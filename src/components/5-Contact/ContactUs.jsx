import { lazy } from "react";
const Lottie = lazy(() => import("lottie-react"));
import './ContactUs.css'
import { useForm, ValidationError } from '@formspree/react';
// import Lottie from "lottie-react";
import contactAnimation from '../../Animation/Contactus.json'
import ContactForm from './ContactForm';

export default function ContactUs() {



  return (
    <div  className="contact">
      <h2 className='contactTitle'>
        <span className='icon-envelope'></span>
        Contact <span style={{color:"var(--mainColor"}}>Us</span>
      </h2>
        <p>Got questions? Let’s connect and help you get started today!</p>
         <ContactForm/>
   </div>
  )
}
