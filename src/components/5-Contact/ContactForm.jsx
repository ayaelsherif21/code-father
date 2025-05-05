import React from 'react'
import './ContactUs.css'
import { useForm, ValidationError } from '@formspree/react';
import Lottie from "lottie-react";
import doneAnimation from '../../Animation/done.json'
export default function ContactForm() {
    
      const [state, handleSubmit] = useForm("xldbdkee");
      if (state.succeeded) {
        return<p style={{marginTop:"10px" ,fontSize:"1.4rem" , width:"90%"}} className='flex'>
        < Lottie loop={false} style={{height:50}} animationData={doneAnimation} />
        We will back to you soon!</p>;
    }
  return (
    
    <form onSubmit={handleSubmit}>
       {/* <label htmlFor="name">Your Name:</label> */}
    <div className='flex'>
     
      <input placeholder="Your Name.." required type="name" name="name" id="name" />
      <ValidationError prefix="Name" field="name" errors={state.errors}/>

      <input placeholder="Phone Number.." required type="phone" name="phone" id="phone" />
      <ValidationError prefix="Phone" field="phone" errors={state.errors}/>
      </div>
      <div className='flex'>
      {/* <label htmlFor="email">Email Address:</label> */}
      <input placeholder="Your Email.." required type="email" name="email" id="email" />
      <ValidationError prefix="Email" field="email" errors={state.errors}/>

       {/* <label htmlFor="course">Course Name:</label> */}
       <input placeholder="Course Name.." required type="course" name="course" id="course" />
      <ValidationError prefix="Course" field="course" errors={state.errors}/>
    </div>

    <div className='flex' style={{marginTop:"1.2rem"}}>
      {/* <label htmlFor="message">Your Message: </label> */}
      <textarea placeholder="Send to me your Message.."  required rows={5} cols={10}  name="message" id="message"></textarea>
      <ValidationError prefix="Message" field="message" errors={state.errors}/> 
    </div>
  
    
        
    <button type="submit" disabled={state.submitting} className="submit ">Submit</button>
       
    
    
    
     
    </form>



  )
}
