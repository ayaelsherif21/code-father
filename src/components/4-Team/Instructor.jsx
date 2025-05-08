import React from 'react'
import './Team.css'
import { myCourses } from '../3-Courses/myCourses'
export default function Instructor({ courseId }) {
  const course = myCourses.find((course) => course.id === courseId);

  if (!course) return <p>Instructor not found.</p>;
  return (
    <section className="team flex">
    <div className="dropdown">
      <input
        className="sr-only"
        name={`state-dropdown-${course.id}`}
        id={`state-dropdown-${course.id}`}
        type="checkbox"
      />
      <label
        htmlFor={`state-dropdown-${course.id}`}
        className="trigger"
        aria-label="dropdown scrollbar"
      >
        <img
          src={course.InstructorImage}
          alt="Profile"
          className="trigger-img"
        />
        <div className="trigger-text">
          <h4>{course.InstructorName}</h4>
          <h5>{course.InstructorTitle}</h5>
        </div>
        <span className="trigger-arrow">›</span>
      </label>

      <ul className="list webkit-scrollbar" role="list" dir="auto">
        {course.InstructorDetails1 && (
          <li className="listitem">
            <article className="article">{course.InstructorDetails1}</article>
          </li>
        )}
        {/* {course.InstructorDetails2 && (
          <li className="listitem">
            <article className="article">{course.InstructorDetails2}</article>
          </li>
        )} */}
        {course.InstructorDetails3 && (
          <li className="listitem">
            <article className="article">{course.InstructorDetails3}</article>
          </li>
        )}
      </ul>
    </div>
  </section>
  )
}
