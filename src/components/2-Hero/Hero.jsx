import React from 'react'
import './Hero.css'
import Lottie from "lottie-react";
import developerAnimation from '../../Animation/Hero.json'
export default function Hero() {
  return (
    <section className='hero flex'>
      <div className="left-bx">
       
        <div className="title">
          <h1>Hello at<span style= {{color:"var(--mainColor)"}}> Code</span> Father Academy</h1>
         {/* <h1>Leave the Bugs. Take the Cannoli <span style= {{color:"var(--mainColor)"}}> Code</span> </h1> */}
          <p className='subTitle'><span style={{color:"var(--title)" , fontSize:"1.01rem"}}>"Leave the Bugs. Take the Cannoli Code"</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore eaque itaque reiciendis laborum ex ut temporibus voluptatem eum hic Lorem, ipsum dolor.</p>
          <button className='heroBtn'>Explore More</button>

       </div>
       <div className="socialMedia flex ">
        <a className="icons icon-github"></a>
        <a className="icons icon-x"></a>
        <a href='https://www.instagram.com/codefatherx/' className="icons icon-instagram"></a>
        <a className="icons icon-facebook"></a>
        <a className="icons icon-linkedin-square"></a>

       </div>
      
      </div>
      <div className="right-box animation">
        <Lottie className='developer-Animation' animationData={developerAnimation} />
      </div>
    </section>
  )
}
