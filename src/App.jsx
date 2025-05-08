// Optimized App.jsx with lazy loading and scroll performance
import { useEffect, useState, useRef, lazy, Suspense } from 'react';
import Header from './components/1-Header/Header';
import Footer from './components/6-Footer/Footer';
import { myCourses } from './components/3-Courses/myCourses';
import ContactSec from './components/5-Contact/ContactSec';

const Hero = lazy(() => import('./components/2-Hero/Hero'));
const Courses = lazy(() => import('./components/3-Courses/Courses'));
const Team = lazy(() => import('./components/4-Team/Team'));
const ContactUs = lazy(() => import('./components/5-Contact/ContactUs'));
const CourseDetails = lazy(() => import('./components/3-Courses/CourseDetails/CourseDetails'));

function App() {
  const [showScrollBtn, setShowScrollBtn] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);


  const heroRef = useRef(null);
  const coursesRef = useRef(null);
  const teamRef = useRef(null);
  const contactRef = useRef(null);
  const footerRef = useRef(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (ref) => {
    if (ref.current) {
      window.scrollTo({ top: ref.current.offsetTop - 100, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollBtn(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Header 
        scrollToHero={() => scrollToSection(heroRef)}
        scrollToCourses={() => scrollToSection(coursesRef)}
        scrollToTeam={() => scrollToSection(teamRef)}
        scrollToContact={() => scrollToSection(contactRef)}
      />

      <Suspense fallback={<div className="loader">Loading...</div>}>
    
          <div id='up' className="container">
            <div ref={heroRef}><Hero /></div>
            <div className="divider" />

            <div ref={coursesRef}><Courses/></div>
            <div className="divider" />

            <div ref={teamRef}><Team /></div>
            <div className="divider" />

            <div ref={contactRef}><ContactSec /></div>
            <div className="divider" />

            <div ref={footerRef}><Footer /></div>
            

            <button 
              className="scroll2Top icon-keyboard_arrow_up"
              style={{
                opacity: showScrollBtn ? 1 : 0, 
                transition: "0.4s",
                cursor: 'pointer'
              }}
              onClick={scrollToTop}
            />
          </div>
        
      </Suspense>
    </>
  );
}

export default App;
