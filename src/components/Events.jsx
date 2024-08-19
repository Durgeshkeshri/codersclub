import React, { useState } from 'react';
import { BsArrowDownRight } from "react-icons/bs";
import '../App.css'
import event from '../assets/event.jpg';

const Events = () => {
    const [isRotated, setIsRotated] = useState(false);
    const tags = ["Coding Competition", "Coding Competition", "Coding Competition"];
    const events = ["CodeFusion 1", "CodeFusion 2", "CodeFusion 3"];

    const handleArrowClick = () => {
        setIsRotated(true);

        // Simulate opening a new page
        setTimeout(() => {
            window.location.href = "https://example.com"; // Replace with the actual URL
        }, 300);

        // Automatically revert back to the original state after 2 seconds
        setTimeout(() => {
            setIsRotated(false);
        }, 2000);
    };

    return (
        <>
            <div className="flex flex-col justify-center items-center tracking-widest text-white mt-16 max-lg:mt-8">
                <div className='text-center'>
                    <h3 className='font-extrabold tab:text-[38px] max-tab:text-[20px] mb-3 max-lg:mb-2'>Our Recent <span className='text-[#0080FF]'>Events</span></h3>
                    <p className='tab:text-[18px] max-tab:text-[13px] px-[12%] max-smvideo:px-[7%]'>A Glimpse into Our Previous Coding Competitions, Hackathons, Workshops, Seminars, and Memorable Moments</p>
                </div>

                <div className='flex flex-wrap justify-center max-tab:mt-4 mt-6 mb-4'>
                    {events.map((eventTitle, index) => (
                        <div
                            key={index}
                            className="relative w-full tab:w-[267px] tab:h-[334px] max-tab:w-[500px] max-tab:h-[370px] max-smevent:w-[90%] max-smevent:h-[300px] m-4 overflow-visible group transition-transform duration-300 ease-in-out"
                        >
                            <img
                                className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 max-sm:px-4'
                                src={event}
                                alt={eventTitle}
                            />
                            <div className="absolute bottom-4 left-0 right-0 flex transition-transform duration-300 group-hover:scale-110 justify-between items-center px-4 py-2 bg-black bg-opacity-50 tracking-tight">
                                <div className='max-sm:ml-4'>
                                    <div className='text-[12px]'>{tags[index]}</div>
                                    <div className='tracking-normal flex-1 text-left text-[16px] tab:text-[20px] lg:text-[24px] font-extrabold'>
                                        {eventTitle}
                                    </div>
                                </div>
                                <div
                                    className={`mt-2 max-sm:mr-3 max-sm:mt-1 tab:-mr-2 w-[45px] h-[45px] rounded-full bg-[#0080FF] justify-center items-center hidden group-hover:flex transition-transform duration-300 ease-in-out ${isRotated ? 'rotate-[315deg]' : 'rotate-[275deg]'}`}
                                    onClick={handleArrowClick}
                                >
                                    <BsArrowDownRight size={25} className="text-white h-[60px]" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <button className='bg-[#0080FF] px-4 py-2 font-bold rounded-lg text-white text-[14px] hidden tab:block transition-colors duration-300 ease-in-out hover:bg-white hover:text-[#0080FF]'>
                    Explore more Events
                </button>

            </div>
        </>
    );
}

export default Events;
