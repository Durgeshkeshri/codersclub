import React from 'react';
import Event from '../assets/Event.jpg';

const About = () => {
  return (
    <div className='text-white relative'>
      <div className="flex flex-col justify-center items-center xl:px-[22%] px-[5%] sm:px-[12%] tab:px-[16%] lg:px-[20%] text-center min-h-[400px] relative" style={{ clipPath: 'inset(0px)' }}>
        
        <div className='div2 tab:w-[20px] tab:h-[44px] w-[15px] h-[24px] flex flex-col gap-[4px] animate-bounce absolute' style={{ top: '20px', marginRight: '80%' }}>
          <div className='w-[15px] tab:w-[20px] h-[20px] bg-[#0080FF]'></div>
          <div className='w-[15px] tab:w-[20px] h-[20px] bg-white'></div>
        </div>

        <p className='xl:text-[68px] text-[45px] max-sm:text-[35px] font-bold leading-tight'><span className='text-[#0080FF]'>Elevate</span> Your Coding Skills at <span className='text-[#0080FF]'>Coders Club</span></p>
        <p className='text-[14px] xl:text-[16px] mt-4 max-smvideo:px-2'>Welcome to Coders Club, the heart of Bharati Vidyapeeth, Kharghar's coding community. Whether you're a beginner or an experienced coder, join us to explore coding, collaborate on projects, and connect with industry experts. Let's code the future together!</p>

        <div className='div1 tab:w-[20px] tab:h-[44px] w-[10px] h-[24px] flex flex-col gap-[4px] animate-bounce absolute' style={{ bottom: '20px', marginLeft: '80%' }}>
          <div className='w-[15px] tab:w-[20px] h-[20px] bg-[#0080FF]'></div>
          <div className='w-[15px] tab:w-[20px] h-[20px] bg-white'></div>
        </div>

      </div>
      <div className="xl:px-[9%] px-[6%]">
        <p className='tab:text-[50px] text-[29px] font-bold'>Our Story</p>
        <div className="flex gap-2 justify-center items-center tab:gap-6">
          <img className='w-[44%] h-[230px] tab:h-[357px] object-fill' src={Event} alt="" />
          <div className="tab:text-[16px] text-[14px] flex flex-col justify-between">
            <p className=' text-[29px] tab:text-[38px] font-bold tracking-wider '>Vision to <span className='text-[#0080FF]'>Reality</span></p>
            <p>Founded at Bharati Vidyapeeth, Kharghar, Coders Club began as a small group of coding enthusiasts and has grown into a dynamic community for all levels.</p>
            <div className="tab:hidden flex gap-4 mt-6">
              <img className='w-[66px] h-[47px] rotate-12' src={Event} alt="" /> 
              <img className='w-[66px] h-[47px] rotate-12' src={Event} alt="" />
            </div>
            <div className='max-tab:hidden mt-14'>
              <p className='text-[28px] font-bold'>Our Journey</p>
              <p>We started with local workshops that sparked excitement and curiosity among aspiring coders. Over time, our offerings expanded to include comprehensive coding projects, exclusive internships, and collaborations with tech leaders. These milestones have allowed us to provide invaluable experiences, foster skill development, and drive innovation. <span className='tab:hidden'>As we continue to grow, our mission remains to empower every member with the tools and opportunities needed to excel in the ever-evolving world of technology.</span> </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;
