import { lazy, memo } from "react";
const Lottie = lazy(() => import("lottie-react"));
import './Hero.css'
// import Lottie from "lottie-react";
import developerAnimation from '../../Animation/Hero.json'
export default memo(function Hero() {
  return (
    <section className='hero flex'>
      <div className="left-bx">
       
        <div className="title">
          <h1>Hello at<span style= {{color:"var(--mainColor)"}}> Code</span> Father Academy</h1>
         {/* <h1>Leave the Bugs. Take the Cannoli <span style= {{color:"var(--mainColor)"}}> Code</span> </h1> */}
          <p className='subTitle'>
            <span style={{color:"var(--title)" , fontSize:"1.01rem"}}>"Leave the Bugs. Take the Cannoli Code"</span>, we offer top-quality tech courses right in the heart of Banha — no need to travel far.
Learn from industry experts in a supportive, hands-on environment designed to boost your skills.
Whether you're a beginner or leveling up, we're here to help you grow.</p>
          {/* <button className='heroBtn'>Explore More</button> */}
          <div className="AcademyInfo">
          <h4><a href="https://www.google.com/maps/place/30%C2%B028'28.1%22N+31%C2%B011'33.8%22E/@30.4744835,31.1901455,17z/data=!3m1!4b1!4m4!3m3!8m2!3d30.4744835!4d31.1927204?hl=en&entry=ttu&g_ep=EgoyMDI1MDUwNS4wIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D" 
          className="icons icon-location"></a> Qalyubia - Banha - Al-Mawqef Street, behind Kazyon</h4>
          <h4> <a className="icons icon-phone1"></a> 01099588475</h4>
          </div>
  
       </div>
       <div className="socialMedia flex ">
        <a className="icons icon-tiktok"></a>
        {/* <a className="icons icon-x"></a> */}
        <a href='https://www.instagram.com/codefatherx/' className="icons icon-instagram"></a>
        <a href='https://www.facebook.com/profile.php?id=61575412117047&mibextid=wwXIfr' className="icons icon-facebook"></a>
        <a className="icons icon-linkedin-square"></a>
        <a href="https://www.google.com/maps/place/30%C2%B028'28.1%22N+31%C2%B011'33.8%22E/@30.4744835,31.1901455,17z/data=!3m1!4b1!4m4!3m3!8m2!3d30.4744835!4d31.1927204?hl=en&entry=ttu&g_ep=EgoyMDI1MDUwNS4wIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D" className="icons icon-location"></a>

       </div>
      
      </div>
      <div className="right-box animation">
        <Lottie className='developer-Animation' animationData={developerAnimation} />
      </div>
    </section>
  )
})
