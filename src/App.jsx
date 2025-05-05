import { useEffect, useState } from 'react'
import Header from './components/1-Header/Header'
import Hero from './components/2-Hero/Hero'
import Courses from './components/3-Courses/Courses'
import Team from './components/4-Team/Team'
import ContactUs from './components/5-Contact/ContactUs'
import Footer from './components/6-Footer/Footer'





function App() {
const [showScrollBtn, setShowScrollBtn] = useState(false);
useEffect(() => {
  window.addEventListener("scroll" , ()=>
  {
    if(window.scrollY > 100){
      setShowScrollBtn(true);
    }
    else{
      setShowScrollBtn(false);
    }
  });
}, []);

  return (
    <>
    <Header/>
    
    <div id='up' className="container">
       <Hero/>
      <div className="divider"/>
      <Courses/>
      <div className="divider"/>
      <Team/>
      <div className="divider"/>
      <ContactUs/>
      <div className="divider"/>
      <Footer/>
  
      <a style={{opacity: showScrollBtn? 1 : 0, transition:"0.4s"}} href="#up">
      <button className="scroll2Top icon-keyboard_arrow_up"></button>
    </a>
   
      
      </div>


    </>
  )
}

export default App
