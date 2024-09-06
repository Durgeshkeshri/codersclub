import React, { useState, useEffect } from 'react';
import { IoIosArrowForward } from "react-icons/io";
import { Link, useLocation } from 'react-router-dom'; // Ensure Link and useLocation are imported
import { eventDetails } from '../components/eventDetails.jsx';
import event1 from '../assets/event.jpg'; // Import the default image

const Events = () => {
  const years = [2023, 2024];
  const [selectedYear, setSelectedYear] = useState(years[1]);
  const location = useLocation();

  // Scroll to the top of the page when the component mounts or the route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Filter events based on the selected year
  const filteredEvents = eventDetails.filter(event => event.year === selectedYear);

  return (
    <div className="">
      <div className="mt-6 text-white tracking-wider flex flex-col justify-center items-center px-[7%] max-lg:px-[7%] max-tab:px-[9%] max-smevent:px-[3%]">
        <div>
          <div className="text-center">
            <h4 className="font-bold lap:text-[67px] tab:text-[45px] text-[35px]">
              Our <span className="text-[#0080FF]">Events</span>
            </h4>
          </div>
          <div className='mb-6'>
            <ul className="text-[13px] tab:text-[17px] lap:text-[22px] flex gap-4 justify-center">
              {years.map(year => (
                <li
                  key={year}
                  className={`rounded-3xl py-1 px-3 cursor-pointer transition-colors duration-300
                    ${selectedYear === year
                      ? 'bg-[#0080FF] text-white'
                      : 'bg-slate-900 bg-opacity-90 text-gray-300'}
                  `}
                  onClick={() => setSelectedYear(year)}
                >
                  {year}
                </li>
              ))}
            </ul>
          </div>
        </div>
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event, index) => (
            <div key={index} className="flex gap-3 my-3 p-3 hover:bg-slate-900 opacity-90 rounded-2xl max-sm:hover:border hover:border-2 hover:border-[#0080FF]">
              <img
                className="xl:w-[288px] xl:h-[178px] max-xl:w-[205px] max-xl:h-[160px] max-lg:w-[193px] max-lg:h-[151px] max-tab:w-[152px] max-tab:h-[189px] max-md:w-[152px] max-md:h-[170px] max-sm:w-[129px] max-sm:h-[160px] max-smvideo:w-[121px] max-smvideo:h-[151px] rounded-2xl"
                src={event.image}
                alt={event.name}
              />
              <div className="flex flex-col justify-between tab:px-[2%]">
                <div>
                  <p className="font-extrabold lap:text-[35px] tab:text-[30px] text-[22px] max-smvideo:text-[20px]">{event.name}</p>
                  <p className="mt-2 lg:text-[16px] text-[14px] max-smvideo:text-[12px]">{event.description}</p>
                </div>
                <Link to={`/events${event.link}`} onClick={() => window.scrollTo(0, 0)}>
                  <p className="cursor-pointer text-[16px] text-end">
                    <span className='border-b border-[#0080FF]'>Explore<IoIosArrowForward className="inline-block" /></span>
                  </p>
                </Link>
              </div>
              <img
                className="xl:w-[288px] xl:h-[178px] max-xl:w-[205px] max-xl:h-[160px] max-lg:w-[193px] max-lg:h-[151px] rounded-2xl max-tab:hidden"
                src={event.image1}
                alt={event.name}
              />
            </div>
          ))
        ) : (
          <div className="flex gap-3 my-3 p-3 opacity-90 rounded-2xl">
            <img
              className="xl:w-[288px] xl:h-[178px] max-xl:w-[205px] max-xl:h-[160px] max-lg:w-[193px] max-lg:h-[151px] max-tab:w-[152px] max-tab:h-[189px] max-md:w-[152px] max-md:h-[170px] max-sm:w-[129px] max-sm:h-[160px] max-smvideo:w-[121px] max-smvideo:h-[151px] rounded-2xl"
              src={event1}
              alt="No events found"
            />
            <div className="flex flex-col justify-center items-center text-center w-full">
              <p className="font-extrabold lap:text-[35px] tab:text-[30px] text-[22px] max-smvideo:text-[20px] text-gray-400">
                No events found for {selectedYear}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Events;
