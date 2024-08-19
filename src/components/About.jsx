import React from 'react'
import group from '../assets/group.jpg';
const About = () => {
  return (
<>
  <div className="min-h-[80vh] text-white bg-[#1A1A1A] p-8 lap:px-16">
    <div className="flex flex-wrap lap:flex-row justify-center lap:justify-between items-center">
      
      {/* Image Section (appears on top on smaller screens, in row for lap and larger) */}
      <div className="w-full lap:w-auto lap:order-2 flex justify-center lap:justify-end mb-8 lap:mb-0">
        <img 
          className="w-[468px] h-[250px] tab:w-[585px] tab:h-[350px] lap:w-[585px] lap:h-[550px] object-cover rounded-lg" 
          src={group} 
          alt="Group of People" 
        />
      </div>

      {/* Text Section */}
      <div className="w-full max-w-[468px] tab:max-w-[585px] lap:max-w-[585px] lap:w-auto lap:order-1 flex flex-col justify-center items-start text-left lap:text-left">
        <div className="text-[#0080FF] tab:text-[20px]">
          ^About Us^
        </div>
        <div className="text-[24px] tab:text-[38px] font-bold my-4">
          Elevate Your Coding Journey at Coders Club!
        </div>
        <div className="text-[16px] tab:text-[18px] leading-relaxed">
          Join Bharati Vidyapeeth, Kharghar's thriving community for coding enthusiasts. Explore coding events, workshops, and exclusive internships. Elevate your skills, collaborate on projects, and connect with industry experts. Let's code the future together!
        </div>

        <div className="flex items-center mt-6 space-x-4">
          <button className="bg-blue-500 text-white py-2 px-6 rounded-lg">
            Explore Now
          </button>
          <div className="text-[24px] font-bold">
            20k+ <span className="text-[16px] font-normal">Prize Distribution</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</>
  )
}

export default About