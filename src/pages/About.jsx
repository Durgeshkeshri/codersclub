import { useEffect } from 'react';
import Event from '../assets/Event.jpg';
import './About.css';
const About = () => {
  const data = [
    { image: Event, name: 'Durgesh Keshri', title: 'President' },
    { image: Event, name: 'Durgesh Keshri', title: 'President' },
    { image: Event, name: 'Durgesh Keshri', title: 'President' },
    { image: Event, name: 'Durgesh Keshri', title: 'President' },
    { image: Event, name: 'Durgesh Keshri', title: 'President' },
    { image: Event, name: 'Durgesh Keshri', title: 'President' },
    { image: Event, name: 'Durgesh Keshri', title: 'President' },
    { image: Event, name: 'Durgesh Keshri', title: 'President' },
    { image: Event, name: 'Durgesh Keshri', title: 'President' },
    { image: Event, name: 'Durgesh Keshri', title: 'President' },
    { image: Event, name: 'Durgesh Keshri', title: 'President' },
    { image: Event, name: 'Durgesh Keshri', title: 'President' },
    { image: Event, name: 'Durgesh Keshri', title: 'President' },
    { image: Event, name: 'Durgesh Keshri', title: 'President' },
    { image: Event, name: 'Durgesh Keshri', title: 'President' },
    { image: Event, name: 'Durgesh Keshri', title: 'President' },
    // Add more objects here for all 16 items
  ];
  useEffect(() => {
    const textElement = document.querySelector('.text-animate');
    const imageElements = document.querySelectorAll('.image-animate');

    // Trigger text animation
    textElement.classList.add('text-animate');

    // Trigger image animations with delay
    imageElements.forEach((img, index) => {
      setTimeout(() => {
        img.classList.add('image-animate');
      }, 100 * index); // Adding a slight delay for each image
    });

  }, []);
  return (
    <div className='text-white relative'>
      <div className="my-6 flex flex-col justify-center items-center xl:px-[22%] px-[5%] sm:px-[12%] tab:px-[16%] lg:px-[20%] text-center min-h-[400px] relative" style={{ clipPath: 'inset(0px)' }}>

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

      <div className="xl:px-[9%] px-[6%] max-sm:px-[4%] bg-slate-900">
        <div className="py-6">
          <p className='tab:text-[50px] text-[29px] font-bold max-smvideo:mb-4'>Our Story</p>
          <div className="flex gap-2 smvideo:gap-4 justify-center items-stretch tab:gap-6">
            <img className='w-[44%] h-[230px] tab:h-[357px] object-fill max-smevent:min-w-[164px]' src={Event} alt="" />
            <div className="tab:text-[16px] text-[14px] max-smvideo:text-[13px] flex flex-col justify-around h-[230px] tab:h-[357px]">
              <div className="">
                <p className='text-[29px] tab:text-[38px] font-bold tracking-wider max-smvideo:-mt-16 -mt-9 text-animate'>
                  Vision to <span className='text-[#0080FF]'>Reality</span>
                </p>
                <p>Founded at Bharati Vidyapeeth, Kharghar, Coders Club began as a small group of coding enthusiasts and has grown into a dynamic community for all levels.</p>
              </div>
              <div className="tab:hidden flex gap-4 mt-6 max-sm:mt-2 relative sm:left-[60%] smevent:left-[50%] smvideo:left-[40%] left-[17%]" >
                <img className='w-[60px] h-[36px] rotate-12 image-animate' src={Event} alt="" />
                <img className='w-[60px] h-[36px] rotate-12 image-animate' src={Event} alt="" />
              </div>
              <div className='max-tab:hidden xl:mt-14'>
                <p className='text-[28px] font-bold'>Our Journey</p>
                <p>We started with local workshops that sparked excitement and curiosity among aspiring coders. Over time, our offerings expanded to include comprehensive coding projects, exclusive internships, and collaborations with tech leaders. These milestones have allowed us to provide invaluable experiences, foster skill development, and drive innovation. <span className='tab:hidden'>As we continue to grow, our mission remains to empower every member with the tools and opportunities needed to excel in the ever-evolving world of technology.</span></p>
              </div>
            </div>
          </div>
          <div className='tab:hidden mt-6 p-1'>
            <p className='text-[28px] font-bold'>Our Journey</p>
            <p className='mt-2'>We started with local workshops that sparked excitement and curiosity among aspiring coders. Over time, our offerings expanded to include comprehensive coding projects, exclusive internships, and collaborations with tech leaders. These milestones have allowed us to provide invaluable experiences, foster skill development, and drive innovation. <span className='tab:hidden'>As we continue to grow, our mission remains to empower every member with the tools and opportunities needed to excel in the ever-evolving world of technology.</span></p>
          </div>
        </div>
      </div>

      <div className="xl:px-[8%] smevent:px-[6%] mt-6 text-center">
        <div className="flex flex-col justify-center items-center max-smevent:px-[6%]">
          <p className='tab:text-[51px] text-[29px] font-bold'>Meet The <span className='text-[#0080FF]'>Team</span></p>
          <p className='tab:text-[16px] text-[14px] xl:px-[20%]'>At Coders Club, our dedicated team drives our success with expertise, creativity, and passion. Meet the individuals who make our community exceptional and help you thrive.</p>
        </div>
        <div className="flex flex-wrap justify-center mt-6 tab:gap-8 gap-4 max-smvideo:gap-1">
          {data.map((item, index) => (
            <div key={index} className="relative w-[170px] h-[302px] max-smevent:w-[160px] max-smevent:h-[250px] m-2">
              <img className="w-full h-full rounded-2xl" src={item.image} alt={item.name} />
              <div className="absolute bottom-6 w-full text-bold text-center">
                <p className="text-[21px]">{item.name}</p>
                <p className="text-[16px]">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default About;
