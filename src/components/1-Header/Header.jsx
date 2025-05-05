import React, { useEffect, useState } from 'react'
import './Header.css';

export default function Header() {
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
      <img className='navLogo' src="./../images/o-logo1.png" alt="" />
      </div>
      
      <button onClick={() => {  
        setshowModel(true);
      }} className='icon-menu navmenu flex'/>
      <nav>
      <ul className='flex'>
        <li><a href="Home">Home</a></li>
        <li><a href="About">About</a></li>
        <li><a href="Courses">Courses</a></li>
        <li><a href="Team">Team</a></li>
        <li><a href="Contact">Contact</a></li>
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
        <li><a href="Home">Home</a></li>
        <li><a href="About">About</a></li>
        <li><a href="Courses">Courses</a></li>
        <li><a href="Team">Team</a></li>
        <li><a href="Contact">Contact</a></li>
      </ul>
      </div>
     )}
  
    </header>
  )
}
