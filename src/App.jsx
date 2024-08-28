import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Menu } from './components/Menu.jsx';
import { Body } from './components/Body.jsx';
import About from './components/About.jsx';
import Events from './components/Events.jsx';
import Registration from './components/Registration.jsx';
import Footer from './components/Footer.jsx';
import Gallery from './pages/Gallery.jsx';
import EventPage from './pages/Events.jsx';
import AboutPage from './pages/About.jsx';
import Event1 from './pages/Event1.jsx';

function App() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isWideScreen, setWideScreen] = useState(window.innerWidth > 1024);

  useEffect(() => {
    const handleResize = () => {
      setWideScreen(window.innerWidth > 1024);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleScroll = (component) => {
    const element = document.getElementById(component);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.warn(`Element with ID "${component}" not found.`);
    }
  };

  return (
    <Router>
      <div className="bg-slate-950 font-poppins">
        <Menu handleScroll={handleScroll} isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} closeMenu={closeMenu} />

        <Routes>
          <Route 
            path="/" 
            element={
              <>
                <div className="mt-[4%] max-sm:mt-[11%]">
                  <Body />
                </div>
                <About />
                <Events />
                <Registration id="registration" />
              </>
            } 
          />
          <Route 
            path="/about" 
            element={
              <>
                <AboutPage />
                <Registration id="registration" />
              </>
            } 
          />
          <Route 
            path="/events" 
            element={
              <>
                <EventPage/>
              </>
            } 
          />
          <Route 
            path="/gallery" 
            element={
              <>
                <Gallery />
              </>
            } 
          />
          <Route 
            path="/events/event1" 
            element={
              <>
                <Event1 />
              </>
            } 
          />
        </Routes>

        <Footer handleScroll={handleScroll} />
      </div>
    </Router>
  );
}

export default App;
