import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import codersclub from '../assets/codersclub.png';

export const Menu = ({ isMenuOpen, toggleMenu, closeMenu, handleScroll }) => {
  const arr = ["About", "Events", "Gallery"];
  const [activeLink, setActiveLink] = useState(null);

  const handleLinkClick = (item) => {
    setActiveLink(item);
    closeMenu();
  };

  const handleLinkClickWithScroll = (item) => {
    handleScroll(item.toLowerCase());
    setActiveLink(item);
    closeMenu();
  };

  const handleRegisterClick = () => {
    handleScroll('registration');
    closeMenu();
  };

  return (
    <>
      <div className="flex items-center justify-between gap-4 ml-[5%] mr-[5%] sm:ml-[10%] sm:mr-[10%] bigpc:px-[4%]">
        <div className="logo z-40">
          <Link to="/">
            <img
              className="rounded-full max-sm:mt-2 w-10 h-10 sm:w-14 sm:h-14 tab:w-16 tab:h-16 lg:w-20 lg:h-20 cursor-pointer"
              src={codersclub}
              alt="Coders Club Logo"
            />
          </Link>
        </div>
        <div className="items hidden tab:block">
          <ul className="flex gap-16 text-[17px]">
            <li key="home" className="text-white hover:text-[#0080FF] cursor-pointer z-50" onClick={() => handleLinkClick('/')}>
              <Link to="/">Home</Link>
            </li>
            {arr.map((item, index) => (
              <li key={index} className="text-white hover:text-[#0080FF] cursor-pointer z-50" onClick={() => handleLinkClickWithScroll(item)}>
                <Link to={`/${item.toLowerCase()}`}>{item}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="register hidden tab:block">
          <button 
            onClick={handleRegisterClick}
            className="hover:bg-white hover:text-[#0080FF] bg-[#0080FF] text-white p-2 rounded-md font-bold text-sm sm:text-base px-4 tracking-wider cursor-pointer">
            Register
          </button>
        </div>
        <div className="hambutton tab:hidden" onClick={toggleMenu}>
          <div className="max-sm:mt-2 relative w-8 h-7 sm:w-10 sm:h-10 flex justify-center items-center z-50 cursor-pointer bg-[#0080FF] rounded-md">
            <div
              className={`flex flex-col justify-center items-center transition-all duration-300 ${isMenuOpen ? '' : '-mt-[20%]'
                }`}
            >
              <span
                className={`block w-5 sm:w-7 h-[3px] bg-white transition-transform duration-300 ease-in-out transform ${isMenuOpen ? 'rotate-45 translate-y-1' : 'translate-y-0'
                  }`}
              ></span>
              <span
                className={`block w-5 sm:w-7 h-[3px] bg-white transition-transform duration-300 ease-in-out ${isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-2'
                  }`}
              ></span>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay Menu */}
      <div
        className={`z-40 fixed inset-0 bg-slate-950 flex flex-col font-bold items-center gap-4 transition-transform duration-500 ease-in-out ${isMenuOpen ? 'transform translate-x-0' : 'transform -translate-x-full'
          }`}
      >
        <ul className="text-4xl tracking-widest text-white text-center mt-20">
          <li
            key="home"
            className="hover:text-[#0080FF] cursor-pointer mb-4"
            onClick={() => handleLinkClickWithScroll('home')}
          >
            <Link to="/">Home</Link>
          </li>
          {arr.map((item, index) => (
            <li
              key={index}
              className="hover:text-[#0080FF] cursor-pointer mb-4"
              onClick={() => handleLinkClickWithScroll(item)}
            >
              <Link to={`/${item.toLowerCase()}`}>{item}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
