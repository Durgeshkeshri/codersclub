import './App.css'
import React, { useState, useEffect } from 'react';
import { Menu } from './components/Menu.jsx'
import {Body} from './components/Body.jsx'
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
    <> <div className="bg-slate-950">
     <Menu handleScroll={handleScroll} isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} closeMenu={closeMenu}></Menu>
     <div className="mt-[3%]">
     <Body></Body>
     </div>
     </div>
    </>
  )
}

export default App
