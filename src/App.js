import React, { useRef, useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import SkillRating from './components/SkillsRating';
import Projects from './components/Projects';
import Blogs from './components/Blogs';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  const sectionsRef = {
    skills: useRef(null),
    experience: useRef(null),
    skillsRating: useRef(null),
    education: useRef(null),
    projects: useRef(null),
    blogs: useRef(null),
  };

  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
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

  // Sticky header functionality
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="App test">
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
        <div ref={sectionsRef.skills} id="skills" className="section">
          <Skills />
        </div>
        <div ref={sectionsRef.experience} id="work-experience" className="section">
          <Experience />
        </div>
        <div ref={sectionsRef.skillsRating} id="skills-rating" className="section">
          <SkillRating />
        </div>
        <div ref={sectionsRef.education} id="education" className="section">
          <Education />
        </div>
        <div ref={sectionsRef.projects} id="projects" className="section">
          <Projects />
        </div>
        <div ref={sectionsRef.blogs} id="blogs" className="section">
          <Blogs />
        </div>
      </div>

      <footer className="App-footer">
        <Footer />
      </footer>
    </div>
  );
}