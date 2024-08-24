import React from 'react';
import event from '../assets/event.jpg';

const Event1 = () => {
  return (
    <div className="">
      <div className='text-white flex flex-col tab:flex-row justify-center xl:px-[6%] tab:px-[6%] tab:gap-8 lap:gap-0 max-tab:px-[6%] max-tab:gap-4 bigpc:px-[11%]'>
        <img 
          className='w-full h-[300px] object-fill xl:w-[345px] xl:h-[450px] lap:w-[310px] lap:h-[405px] tab:w-[276px] tab:h-[360px] tab:flex-shrink-0' 
          src={event} 
          alt="Event" 
        />
        <div className='xl:pr-[6%] lap:px-[3%] flex flex-col gap-3 tab:ml-0 max-tab:text-left'>
          <h5 className='font-bold lap:text-[51px] tab:text-[31px] text-[26px] max-smvideo:text-[22px] bigpc:text-[70px]'>
            Code <span className='text-[#0080FF]'>Fusion</span>: A Celebration of Coding Excellence
          </h5>
          <p className='lap:text-[21px] tab:text-[17px] text-[13px] bigpc:text-[35px]'>
            Date Held: <span className='text-[#0080FF]'>July 23, 2k24</span>
          </p>
          <p className='lap:text-[21px] tab:text-[17px] text-[13px] bigpc:text-[35px]'>
            Join us in celebrating the incredible talent and innovation displayed at [Event Name]. From intense coding challenges to groundbreaking projects, relive the excitement and highlights of this unforgettable event.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Event1;
