import React, { useState } from 'react'
import './Courses.css'
import { myProjects } from './myCourses'
import { useNavigate } from 'react-router-dom';


export default function Courses() {

  const [currActive, setcurrActive] = useState("all")
  const [Arr, setArr] = useState(myProjects)
  const handleClick = (buttonCategory) => {
    setcurrActive(buttonCategory);
    const newArr =myProjects.filter((item) => { 
        const myCategory = item.category.find((myItem) => { 
          return myItem === buttonCategory
  ;
        })
      return myCategory === buttonCategory
     })
    setArr(newArr)
  }
  return (
    <div className="courses">
            <h4 className='secTitle'>Our <span style={{color:"var(--mainColor)"}}>Courses</span></h4>

    <main className='flex'>
      <section className='flex left-section'>
        <button onClick={()=>{
            setcurrActive("all");
            setArr(myProjects)
        }} className={currActive === "all"? 'active' :null}>All Courses</button>
        <button onClick={()=>{
          handleClick("cs")
        }} className={currActive=== "cs" ?'active' : null}>Programming</button>

        <button onClick={()=>{
         handleClick("art")
        }} className={currActive === "art" ? 'active' :null}>Art</button>
      </section>

      <section className='right-section flex'>
        {Arr.map((item, index) => {
          return(
            <div 
              className="card" 
              key={index}
              style={{cursor: 'pointer'}}
            >
              <div className="card-details">
                <div className="iconTitle flex">
                <img className='flex' src={item.imgPath} alt="img" />
                <p className="text-title">{item.CourseName}</p>
                </div>
             
                <p className="text-body">{item.Details} </p>
                {/* <p className="text-subtitle">By:{item.InstructorName}</p> */}
              </div>
              <button className="card-button">More info</button>
            </div>
  );
})} 
</section>
</main>  
</div>
)
}

