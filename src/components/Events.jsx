import React, { useState, useEffect } from 'react';
import { BsArrowDownRight } from "react-icons/bs";
import { useNavigate, Link } from 'react-router-dom';
import { eventDetails } from './eventDetails';

const Events = () => {
    const [isRotated, setIsRotated] = useState(false);
    const navigate = useNavigate();

    const handleArrowClick = (url) => {
        setIsRotated(true);
        setTimeout(() => {
            window.scrollTo(0, 0)
            navigate("events" + url);
        }, 500);

        setTimeout(() => {
            setIsRotated(false);
        }, 2000);
    };

    return (
        <div className="flex flex-col justify-center items-center tracking-widest text-white mt-16 max-lg:mt-8 mb-6">
            <div className='text-center'>
                <h3 className='font-extrabold tab:text-[38px] max-tab:text-[20px] mb-3 max-lg:mb-2'>Our Recent <span className='text-[#0080FF]'>Events</span></h3>
                <p className='tab:text-[18px] max-tab:text-[13px] px-[12%] max-smvideo:px-[7%]'>A Glimpse into Our Previous Coding Competitions, Hackathons, Workshops, Seminars, and Memorable Moments</p>
            </div>

            <div className='flex flex-wrap justify-center max-tab:mt-4 mt-6 mb-4 lg:gap-2'>
                {eventDetails.slice(-3).map((event, index) => (
                    <div
                        key={index}
                        className="relative w-full tab:w-[267px] tab:h-[334px] max-tab:w-[500px] max-tab:h-[370px] max-smevent:w-[90%] max-smevent:h-[300px] m-4 overflow-visible group transition-transform duration-300 ease-in-out"
                    >
                        <img
                            className='opacity-90 w-full h-full object-fit tab:object-cover transition-transform duration-300 group-hover:scale-110 max-sm:px-4'
                            src={event.image}
                            alt={event.name}
                        />
                        <div className="absolute bottom-4 left-0 right-0 flex transition-transform duration-300 group-hover:scale-110 justify-between items-center px-4 py-2 bg-black bg-opacity-50 tracking-tight">
                            <div className='max-sm:ml-4'>
                                <div className='text-[12px]'>{event.title}</div>
                                <div className='tracking-normal flex-1 text-left text-[16px] tab:text-[20px] lg:text-[24px] font-extrabold'>
                                    {event.name}
                                </div>
                            </div>
                            <div
                                className={`mt-2 max-sm:mr-3 max-sm:mt-1 tab:-mr-2 w-[45px] h-[45px] rounded-full bg-[#0080FF] justify-center items-center hidden group-hover:flex transition-transform duration-300 ease-in-out ${isRotated ? 'rotate-[315deg]' : 'rotate-[275deg]'}`}
                                onClick={() => handleArrowClick(event.link)}
                            >
                                <BsArrowDownRight size={25} className="text-white h-[60px]" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <Link to='/events'>
                <button className='bg-[#0080FF] px-4 py-2 font-bold rounded-lg text-white text-[14px] transition-colors duration-300 ease-in-out hover:bg-white hover:text-[#0080FF] mb-2'>
                    Explore more Events
                </button>
            </Link>
        </div>
    );
}

export default Events;
