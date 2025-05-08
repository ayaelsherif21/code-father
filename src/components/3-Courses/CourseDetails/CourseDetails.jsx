import React, { useState, useEffect, useRef } from 'react';
import '../../5-Contact/ContactForm.css'
import './CourseDetails.css';
import ContactForm from "../../5-Contact/ContactForm";
import ContactUs from '../../5-Contact/ContactUs';



function CourseDetails({ course, onClose }) {
  const [showContactForm, setShowContactForm] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control the opacity background
  const modalRef = useRef(null);

  // Close the contact form when clicking outside
  const handleClickOutside = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      setShowContactForm(false);
    }
  };

  // Add event listener to handle outside clicks
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleOpenContactForm = () => {
    setShowContactForm(true);
  };

  const handleCloseContactForm = () => {
    setShowContactForm(false);
  };

  // // Function to open modal and apply the opacity effect
  // const openModal = () => {
  //   setIsModalOpen(true);
  // };

  // // Function to close modal and remove the opacity effect
  // const closeModal = () => {
  //   setIsModalOpen(false);
  // };

  return (
    <div className={`course-details flex ${isModalOpen ? 'showModal' : ''}`}>

      {/* Close button (clear icon) */}
      <li><button className='icon-clear' onClick={onClose}></button></li>

      {/* Modal background overlay */}
  
  <div className="leftDiv">
        <div className="flex">
          <img src={course.imgPath} alt={course.CourseName} className="course-image" />
          <h1 className="course-title">{course.CourseName}</h1>
        </div>

        <p className="course-summary">{course.Details}</p>

        <div className="content">
          <h3>Topics</h3>
          <ul className="course-content">
            {Array.isArray(course.content) ? (
              course.content.map((item, idx) => <li key={idx}>{item}</li>)
            ) : (
              <li>Full content coming soon...</li>
            )}
          </ul>
        </div>

        {showContactForm && (
          <div className="modal-overlay">
            <div ref={modalRef} className="modal-content">
              <ContactForm />
              <button className="close-button" onClick={handleCloseContactForm}>
                Close
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="rightDiv flex">
        <div className="course-summary-box">
          <h3 className="instructor-title">Instructor</h3>
          <p className="instructor-name">{course.InstructorName || "Coming Soon"}</p>

          <h3 className="price-title">Course Price</h3>
          <div className="price-info">
            <span className="original-price">${course.price || "0.00"}</span>
            <span className="discounted-price">${course.discountedPrice || "0.00"}</span>
          </div>
          <h3 className="instructor-title">Duration</h3>
          <p className="instructor-name">{course.duration || "Coming Soon"}</p>

          <button className="open-contact-button" onClick={handleOpenContactForm}>
            Contact Us
          </button>

{showContactForm && (
  <div className="modal-overlay">
    <div ref={modalRef} className="modal-content">
      <div className="contact-form-container">
        <ContactUs />
      </div>
      <button className="close-button" onClick={handleCloseContactForm}>
        Close
      </button>
    </div>
  </div>
)}
      
        </div>
  <button className="back-button" onClick={onClose}>
    ← Back
  </button>
      </div>
 
    </div>
    
  );
}

export default CourseDetails;
