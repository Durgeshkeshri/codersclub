import './App.css'
import React, { useState, useEffect } from 'react';
import { Menu } from './components/Menu.jsx'
import {Body} from './components/Body.jsx'
import About from './components/About.jsx';
import Events from './components/Events.jsx';
import Registration from './components/Registration.jsx';
import Footer from './components/Footer.jsx';
import Gallery from './pages/Gallery.jsx';
import EventPage from './pages/Events.jsx';
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
  
  const handleScroll =(component) => {
    document.getElementById(component).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <> <div className="bg-slate-950 font-poppins">

     <Menu handleScroll={handleScroll} isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} closeMenu={closeMenu}></Menu>

     <div className="mt-[4%] max-sm:mt-[11%]">
     <Body></Body>
     </div>

     <About></About>
     <Events></Events>
     <Registration></Registration>
     <Footer handleScroll={handleScroll}></Footer>
     <EventPage></EventPage>
     {/* <Gallery></Gallery> */}
     </div>
    </>
  )
}

export default App