import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import '../styles/components.css'; 


const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    if (!isSidebarOpen) {
      document.body.style.overflow = 'hidden'; // Disable scrolling
    } else {
      document.body.style.overflow = 'auto'; 
    }
  };
  

  // Closes the sidebar when switching to a larger screen
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsSidebarOpen(false); 
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // navbar visibility on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setIsNavbarVisible(false);
      } else {
        setIsNavbarVisible(true); 
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header className={`navbar ${isNavbarVisible ? 'visible' : 'hidden'}`}>
      {/* Logo */}
      <div className="navbar__logo">
        <a href="#home">R.I</a>
      </div>

      {/* Links for larger screens */}
      <nav className="navbar__links">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#education">Education</a>
        <a href="#certifications">Certifications</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#hobbies">Hobbies</a>
        <a href="#contact">Contact</a>
      </nav>

      {/* Sidebar toggle button  */}
      <button className="navbar__toggle" onClick={toggleSidebar}>
        {isSidebarOpen ? <FaTimes size={24} /> : <FaBars size={24} />} 
      </button>

      {/* Sidebar */}
      <div className={`navbar__sidebar ${isSidebarOpen ? 'navbar__sidebar--open' : ''}`}>
        <a href="#about" onClick={toggleSidebar}>About</a>
        <a href="#skills" onClick={toggleSidebar}>Skills</a>
        <a href="#education" onClick={toggleSidebar}>Education</a>
        <a href="#certifications" onClick={toggleSidebar}>Certifications</a>
        <a href="#experience" onClick={toggleSidebar}>Experience</a>
        <a href="#projects" onClick={toggleSidebar}>Projects</a>
        <a href="#hobbies" onClick={toggleSidebar}>Hobbies</a>
        <a href="#contact" onClick={toggleSidebar}>Contact</a>
      </div>

      {/* Overlay for sidebar */}
      {isSidebarOpen && <div className="navbar__overlay" onClick={toggleSidebar}></div>}
    </header>
  );
};

export default Header;