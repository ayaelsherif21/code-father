import { useEffect, useState , useRef } from 'react'
import Header from './components/1-Header/Header'
import Hero from './components/2-Hero/Hero'
import Courses from './components/3-Courses/Courses'
import Team from './components/4-Team/Team'
import ContactUs from './components/5-Contact/ContactUs'
import Footer from './components/6-Footer/Footer'



function App() {
  const [showScrollBtn, setShowScrollBtn] = useState(false);
  const heroRef = useRef(null);
  const coursesRef = useRef(null);
  const teamRef = useRef(null);
  const contactRef = useRef(null);
  const footerRef = useRef(null);

// Scroll to top function
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

// Scroll to section function
const scrollToSection = (ref) => {
  window.scrollTo({
    top: ref.current.offsetTop - 100, // Adjust for header height if needed
    behavior: 'smooth'
  });
};

useEffect(() => {
  const handleScroll = () => {
    if (window.scrollY > 100) {
      setShowScrollBtn(true);
    } else {
      setShowScrollBtn(false);
    }
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  return (
    <>
    {/* Pass scroll functions to Header */}
    <Header 
      scrollToHero={() => scrollToSection(heroRef)}
      scrollToCourses={() => scrollToSection(coursesRef)}
      scrollToTeam={() => scrollToSection(teamRef)}
      scrollToContact={() => scrollToSection(contactRef)}
    />
    
    <div id='up' className="container">
      {/* Add refs to each section */}
      <div ref={heroRef}>
        <Hero/>
      </div>
      <div className="divider"/>
      
      <div ref={coursesRef}>
        <Courses/>
      </div>
      <div className="divider"/>
      
      <div ref={teamRef}>
        <Team/>
      </div>
      <div className="divider"/>
      
      <div ref={contactRef}>
        <ContactUs/>
      </div>
      <div className="divider"/>
      
      <div ref={footerRef}>
        <Footer/>
      </div>

      {/* Update scroll to top button to use our function */}
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
  </>
)
}

export default App
