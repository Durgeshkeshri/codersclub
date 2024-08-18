import React from 'react';
import header from '../assets/header.jpg';
import bgvideo from '../assets/bgvideo.mp4';

export const Body = () => {
    return (
        <>
            <div className="flex justify-center items-center flex-col gap-12">
                <div className="flex flex-col justify-center items-center text-white leading-tight">
                    <h1 className='sm:text-[40px] tab:text-[60px] xl:text-[90px] font-bold text-center'>
                        WE <span className='text-[#0080FF]'>CODER'S</span> CLUB
                    </h1>
                    <p className='sm:text-[25px] tab:text-[34px] xl:text-[51px] block text-center mt-4 tracking-wider'>
                        Host Events
                        <img className='w-[75px] h-[25px] lg:w-[120px] lg:h-[36px] md:w-[100px] md:h-[30px] xl:w-[170px] xl:h-[45px] rounded-3xl inline-block ml-2 mr-2' src={header} alt="Event" />
                        Offers
                        <p className='block'> <span className='text-[#0080FF]'>Internship</span> Opportunities</p>
                    </p>
                </div>
                <video
                    className="max-sm:w-[320px] max-sm:h-[320px] max-sm:object-cover smvideo:w-[80%] smvideo:h-[30%] rounded-3xl"
                    src={bgvideo}
                    autoPlay
                    loop
                    muted
                ></video>

            </div>
            <div className='max-sm:text-md text-white flex max-sm:gap-8 smvideo:gap-20 sm:gap-28 md:gap-36 sm:text-[11px] lg:text-[20px] xl:text-[29px] justify-center items-center'>
                <p className="flex items-center max-md:flex-col">
                    <span className='text-[#0080FF] font-bold xl:text-[68px] lg:text-[45px] tab:text-[30px] sm:text-[20px] max-sm:text-lg'>450+</span>
                    <span className="md:ml-2" style={{ marginTop: '6px' }}>Members</span>
                </p>
                <p className="flex items-center max-md:flex-col">
                    <span className='text-[#0080FF] font-bold xl:text-[68px] lg:text-[45px] tab:text-[30px] sm:text-[20px] max-sm:text-lg'>5+</span>
                    <span className="md:ml-2" style={{ marginTop: '6px' }}>Events</span>
                </p>
                <p className="flex items-center max-md:flex-col">
                    <span className='text-[#0080FF] font-bold xl:text-[68px] lg:text-[45px] tab:text-[30px] sm:text-[20px] max-sm:text-lg'>200+</span>
                    <span className="md:ml-2" style={{ marginTop: '6px' }}>Participants</span>
                </p>
            </div>
        </>
    )
}
