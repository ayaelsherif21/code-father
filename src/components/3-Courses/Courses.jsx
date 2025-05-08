import React, { useState, useEffect } from 'react';
import './Courses.css';
import { myCourses } from './myCourses';
import CourseDetails from './CourseDetails/CourseDetails';

export default function Courses() {
  const [currActive, setCurrActive] = useState("all");
  const [arr, setArr] = useState(myCourses);
  const [selectedCourse, setSelectedCourse] = useState(null);

  const handleClick = (buttonCategory) => {
    setCurrActive(buttonCategory);
    const newArr = myCourses.filter(item => item.category.includes(buttonCategory));
    setArr(newArr);
  };

  const handleCourseClick = (course) => {
    setSelectedCourse(course);
  };

  const closeModal = () => {
    setSelectedCourse(null);
  };

  return (
    <div className="courses">
      <h4 className='secTitle'>Our <span style={{color:"var(--mainColor)"}}>Courses</span></h4>

      <main className='flex'>
        <section className='flex left-section'>
          <button onClick={() => { setCurrActive("all"); setArr(myCourses); }}
            className={currActive === "all" ? 'active' : null}>All Courses</button>
          <button onClick={() => handleClick("cs")}
            className={currActive === "cs" ? 'active' : null}>Programming</button>
          <button onClick={() => handleClick("art")}
            className={currActive === "art" ? 'active' : null}>Art</button>
        </section>

        <section className='right-section flex'>
          {arr.map((item, index) => (
            <div 
              className="card" 
              key={index}
              style={{ position: 'relative', cursor: item.comingSoon ? 'not-allowed' : 'pointer' }}
            >
              <div className="card-details">
                <div className="iconTitle flex">
                  <img loading="lazy" className='flex' src={item.imgPath} alt="img" />
                  <p className="text-title">{item.CourseName}</p>
                </div>
                <p className="text-body">{item.Details}</p>
              </div>
              <button className="card-button"   onClick={() => !item.comingSoon && handleCourseClick(item)}
            disabled={item.comingSoon}
          >
            {item.comingSoon ? "Coming Soon" : "More Info"}
          </button>

          {item.comingSoon && (
            <div className="coming-soon-overlay">
              <span>Coming Soon</span>
            </div>
          )}
            </div>
          ))}
        </section>
      </main>

      {/* Modal: show CourseDetails if selectedCourse exists */}
      {selectedCourse && (
        <div className="modal-overlay">
          <CourseDetails course={selectedCourse} onClose={closeModal} />
        </div>
      )}
    </div>
  );
}
