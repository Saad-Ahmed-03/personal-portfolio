import React, { useRef, useEffect, useState } from 'react';
import './App.css';
import './css/generic-style.css';
import Header from './components/Header';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import SkillRating from './components/SkillsRating';
import Projects from './components/Projects';
import Blogs from './components/Blogs';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Intrduction from './components/Intrduction';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showScrollTopButton, setShowScrollTopButton] = useState(false);

  const sectionsRef = {
    skills: useRef(null),
    experience: useRef(null),
    skillsRating: useRef(null),
    education: useRef(null),
    projects: useRef(null),
    blogs: useRef(null),
    introduction: useRef(null),
  };

  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Set up scroll observer for hash updates
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.7,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          window.history.replaceState(
            null,
            '',
            `#${entry.target.id}`
          );
        }
      });
    }, observerOptions);

    Object.values(sectionsRef).forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  // Sticky header and scroll-to-top button functionality
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
      setShowScrollTopButton(window.scrollY > 200); // Show button after 200px scroll
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="App main_page">
      {/* Add the "scrolled" class to Header when isScrolled is true */}
      <header className={`App-header ${isScrolled ? 'scrolled' : ''}`}>
        <Header
          scrollToSkills={() => scrollToSection(sectionsRef.skills)}
          scrollToExperience={() => scrollToSection(sectionsRef.experience)}
          scrollToSkillsRate={() => scrollToSection(sectionsRef.skillsRating)}
          scrollToEducate={() => scrollToSection(sectionsRef.education)}
          scrollToProject={() => scrollToSection(sectionsRef.projects)}
          scrollToBlogs={() => scrollToSection(sectionsRef.blogs)}
        />
      </header>

      <div className="App-body">
        <section ref={sectionsRef.introduction} id='introduction' className='section bg-attractive'>
          <Intrduction/>
        </section>
        <hr></hr>
        <section ref={sectionsRef.skills} id="skills" className="section bg-attractive">
          <Skills />
        </section>
        <hr></hr>
        <section ref={sectionsRef.experience} id="work-experience" className="section bg-attractive">
          <Experience />
        </section>
        <hr></hr>
        <section ref={sectionsRef.skillsRating} id="skills-rating" className="section bg-attractive">
          <SkillRating />
        </section>
        <hr></hr>
        <section ref={sectionsRef.education} id="education" className="section bg-attractive">
          <Education />
        </section>
        <hr></hr>
        <section ref={sectionsRef.projects} id="projects" className="section bg-attractive">
          <Projects />
        </section>
        <hr></hr>
        <section ref={sectionsRef.blogs} id="blogs" className="section bg-attractive">
          <Blogs />
        </section>
      </div>
      <hr></hr>
      <footer className="App-footer bg-attractive">
        <Footer />
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTopButton && (
        <button onClick={scrollToTop} className="scroll-to-top">
          ↑
        </button>
      )}
    </div>
  );
}