import React from 'react';
import header from '../assets/header.jpg';
import bgvideo from '../assets/bgvideo.mp4';
import '../App.css'
export const Body = () => {
    return (
        <>  
            <div className="relative">
            <div className="circle"></div>
            <div className="circle-2"></div>
            <div className="circle-3"></div>
            </div>
            <div className="flex justify-center items-center flex-col gap-12 max-sm:px-4">
                <div className="flex flex-col justify-center items-center text-white leading-tight max-smvideo:font-semibold z-20">
                    <h1 className='max-sm:text-[35px] sm:text-[40px] tab:text-[60px] xl:text-[90px] font-bold text-center'>
                        WE <span className='text-[#0080FF]'>CODER'S</span> CLUB
                    </h1>
                    <p className='max-sm:text-[21px] sm:text-[25px] tab:text-[34px] xl:text-[51px] block text-center mt-4 tracking-wider'>
                        Host Events
                        <img className='w-[75px] h-[25px] lg:w-[120px] lg:h-[36px] md:w-[100px] md:h-[30px] xl:w-[170px] xl:h-[45px] rounded-3xl inline-block ml-2 mr-2' src={header} alt="Event" />
                        Offers
                        <p className='block'> <span className='text-[#0080FF]'>Internship</span> Opportunities</p>
                    </p>
                </div>
                <video
                    className="z-20 max-smvideo:-mt-3 max-sm:w-[320px] max-sm:h-[320px] max-sm:object-cover smvideo:w-[80%] smvideo:h-[30%] rounded-3xl brightness-125"
                    src={bgvideo}
                    autoPlay
                    loop
                    muted
                ></video>

            </div>
            <div className='max-sm:mt-[5%] mt-[1%] max-sm:text-[16px] text-white flex max-sm:gap-8 smvideo:gap-16 sm:gap-28 md:gap-14 lg:gap-28 2xl:gap-36 sm:text-[15px] tab:text-[20px] xl:text-[29px] justify-center items-center font-semibold tracking-wide max-sm:mb-[5%]'>
                <p className="flex justify-center items-center max-md:flex-col">
                    <span className='text-[#0080FF] font-bold xl:text-[68px] sm:text-[45px] max-sm:text-[38px]'>450+</span>
                    <span className="-ml-4 md:ml-2 max-sm:-mt-2">Members</span>
                </p>
                <p className="flex items-center max-md:flex-col">
                    <span className='text-[#0080FF] font-bold xl:text-[68px] sm:text-[45px] max-sm:text-[38px]'>5+</span>
                    <span className="sm:-ml-2 md:ml-2 max-sm:-mt-2">Events</span>
                </p>
                <p className="flex items-center max-md:flex-col">
                    <span className='text-[#0080FF] font-bold xl:text-[68px] sm:text-[45px] max-sm:text-[38px]'>200+</span>
                    <span className="sm:-ml-2 md:ml-2 max-sm:-mt-2">Participants</span>
                </p>
            </div>
        </>
    )
}
