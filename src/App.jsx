import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Menu } from './components/Menu.jsx';
import { Body } from './components/Body.jsx';
import About from './components/About.jsx';
import Events from './components/Events.jsx';
import Registration from './pages/Registration.jsx';
import Footer from './components/Footer.jsx';
import Gallery from './pages/Gallery.jsx';
import EventPage from './pages/EventsPage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import Event1 from './pages/EventPages/Event1.jsx';
import Event2 from './pages/EventPages/Event2.jsx';
import Event3 from './pages/EventPages/Event3.jsx';
import Event4 from './pages/EventPages/Event4.jsx';
import Event5 from './pages/EventPages/Event5.jsx';
import Event6 from './pages/EventPages/Event6.jsx';
import Event7 from './pages/EventPages/Event7.jsx';

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
          <Route 
            path="/events/event2" 
            element={
              <>
                <Event2 />
              </>
            } 
          />
          <Route 
            path="/events/event3" 
            element={
              <>
                <Event3 />
              </>
            } 
          />
          <Route 
            path="/events/event4" 
            element={
              <>
                <Event4 />
              </>
            } 
          />
          <Route 
            path="/events/event5" 
            element={
              <>
                <Event5 />
              </>
            } 
          />
          <Route 
            path="/events/event6" 
            element={
              <>
                <Event6 />
              </>
            } 
          />
          <Route 
            path="/events/event7" 
            element={
              <>
                <Event7 />
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
