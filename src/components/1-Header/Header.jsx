import React, { useEffect, useState } from 'react'
import './Header.css';
// import {Logo} from '../../images/o-logo1.png';

export default function Header({ scrollToHero, scrollToCourses, scrollToTeam, scrollToContact }) {
  const [showModel, setshowModel] = useState(false)
  const [theme, setTheme] = useState(localStorage.getItem("currMode") ?? "dark" )

  useEffect(() => {
    if(theme === "light"){
      document.body.classList.remove("dark")
      document.body.classList.add("light")
    }
    else{
      document.body.classList.remove("light")
      document.body.classList.add("dark")
    }
  }, [theme])
  
  return (
    <header  className="container flex" >
      <div className="Logo">
      <img className='navLogo' src="../../images/o-logo1.png" alt="" />
      </div>
      
      <button onClick={() => {  
        setshowModel(true);
      }} className='icon-menu navmenu flex'/>
        <nav>
        <ul className='flex' >
          <button onClick={scrollToHero}>Home</button>
          <button onClick={scrollToCourses}>Courses</button>
          <button onClick={scrollToTeam}>Team</button>
          <button onClick={scrollToContact}>Contact</button>
        </ul>
      </nav>
      <button onClick={()=>{
        //Send value to LS
        localStorage.setItem("currMode" ,theme === "dark" ? "light" : "dark")
        // get Value fron LS
        setTheme(localStorage.getItem("currMode"))
      }}
      className='mode flex'>
        {theme === "dark" ?
        <span className='icon-moon-stars'></span> :
        <span className='icon-sun'></span>
      }
        
      </button>
        
     

     {showModel &&(
      <div className="fixed">
      <ul className='model'>
        <li><button className='icon-clear' onClick={() => { setshowModel(false) }}/></li>
        <ul className='flex' >
          <button onClick={scrollToHero}>Home</button>
          <button onClick={scrollToCourses}>Courses</button>
          <button onClick={scrollToTeam}>Team</button>
          <button onClick={scrollToContact}>Contact</button>
        </ul>
      </ul>
      </div>
     )}
  
    </header>
  )
}
