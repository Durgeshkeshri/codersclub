import React from 'react'
import group from '../assets/group.jpg';
import ExploreButton from './ExploreButton.jsx'
const About = () => {
  return (
<>
  <div className="">
  <div className="mt-[3%] min-h-[80vh] text-white bg-[#171E24] p-8  2xl:px-28 xl:px-16">
    <div className="flex flex-wrap lap:flex-row justify-center lap:justify-between items-center">
      
      {/* Image Section (appears on top on smaller screens, in row for lap and larger) */}
      <div className="w-full lap:w-auto lap:order-2 flex justify-center lap:justify-end mb-8 lap:mb-0">
        <img 
          className="w-[468px] h-[250px] tab:w-[585px] tab:h-[350px] lap:w-[550px] lap:h-[525px] xl:w-[585px] xl:h-[550px] object-cover rounded-lg" 
          src={group} 
          alt="Group of People" 
        />
      </div>

      {/* Text Section */}
      <div className="w-full max-w-[468px] tab:max-w-[585px] lap:max-w-[550px] lg:max-w-[585px] lap:w-auto lap:order-1 flex flex-col justify-center items-start text-left lap:text-left">
        <div className="text-[#0080FF] tab:text-[20px]">
          ^About Us^
        </div>
        <div className="text-[24px] tab:text-[38px] font-bold my-4">
          Elevate Your Coding Journey at Coders Club!
        </div>
        <div className="text-[16px] tab:text-[18px] leading-relaxed">
          Join Bharati Vidyapeeth, Kharghar's thriving community for coding enthusiasts. Explore coding events, workshops, and exclusive internships. Elevate your skills, collaborate on projects, and connect with industry experts. Let's code the future together!
        </div>

        <div className="flex gap-8 justify-center items-center mt-6 space-x-4">
          <button className="border-2 border-[#222222] rounded-full p-2">
            <ExploreButton></ExploreButton>
          </button>
          <div>
            <p className=" -mt-4 font-extrabold text-[50px] text-[#0080FF]">20K+</p>
            <p className="text-[20px] font-medium">Prize Distribution</p>
          </div>
        </div>
        
      </div>
    </div>
  </div>
  </div>
</>
  )
}

export default About