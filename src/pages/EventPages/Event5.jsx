import event from '../../ImagesCC/img8.jpg';
import { IoMdCheckmark } from "react-icons/io";
import durgesh from '../../assets/durgesh.jpg'
import anand from '../../assets/anand.jpg'
import danish from '../../assets/danish.jpg'
import ashfaque from '../../assets/ashfaque.jpg' 
import ankit from '../../assets/ankit.jpg'
import akshay from '../../assets/akshay.jpg'
import abhisekh from '../../assets/abhisekh.jpg'
import neha from '../../assets/neha.jpg'
import vinit from '../../assets/vinit.jpg'
import pritesh from '../../assets/pritesh.jpg'
import yash from '../../assets/yash.jpg'
import kabir from '../../assets/kabir.jpg'
import more from '../../assets/more.jpg'
const Event5 = () => {
  const organisers = [
  { name: 'Durgesh Keshri', role: 'President', image: durgesh },
  { name: 'Danish Shaikh', role: 'Vice-President', image: danish },
  { name: 'Ashfaque Shaikh', role: 'Secretary', image: ashfaque },
  { name: 'Abhisekh Gupta', role: 'Technical Head', image: abhisekh },
  { name: 'Anand Gaud', role: 'Core Member', image: anand },
  { name: 'Akshay Sharma', role: 'Core Member', image: akshay },
  { name: 'Ankit Yadav', role: 'Core Member', image: ankit },
  { name: 'Vivek More', role: 'Core Member', image: more },
  { name: 'Neha Yadav', role: 'Core Member', image: neha },
  { name: 'Yash Khatra', role: 'Core Member', image: yash },
  { name: 'Kabirji Vishwakarma', role: 'Core Member', image: kabir },
  { name: 'Pritesh Gupta', role: 'Core Member', image: pritesh },
  { name: 'Vinit Surve', role: 'Core Member', image: vinit },
];
  return ( 
    <div className="text-white sm:px-[3%]">
      <div className='flex flex-col tab:flex-row justify-center xl:px-[8%] tab:px-[6%] tab:gap-8 lap:gap-0 max-tab:px-[6%] max-tab:gap-4 mt-6'>
        <img
          className='w-full h-[300px] object-cover xl:w-[345px] xl:h-[450px] lap:w-[310px] lap:h-[405px] tab:w-[276px] tab:h-[360px] tab:flex-shrink-0'
          src={event}
          alt="Event"
        />
        <div className='xl:pr-[0%] lap:px-[3%] flex flex-col gap-3 tab:ml-0 max-tab:text-left'>
          <h5 className='font-bold lap:text-[51px] tab:text-[31px] text-[26px] max-smvideo:text-[22px] bigpc:text-[70px]'>
            Tech <span className='text-[#0080FF]'>
              Session</span>
          </h5>
          <p className='lap:text-[21px] tab:text-[17px] text-[13px] bigpc:text-[35px]'>
            Date Held: <span className='text-[#0080FF]'>July-26-2k24</span>
          </p>
          <p className='lap:text-[21px] tab:text-[17px] text-[13px] bigpc:text-[35px]'>
          Join us in celebrating the incredible talent and innovation, From intense coding challenges to groundbreaking projects, relive the excitement and highlights of this unforgettable event.
          </p>
        </div>
      </div>

      <div className="lap:text-[22px] tab:text-[19px] text-[13px] px-[6%] xl:px-[8%] flex flex-col gap-3 mt-6 ">
        <p className='tab:text-[38px] font-bold text-[20px]'>Event <span className='text-[#0080FF]'>Overview</span></p>
        <p className='mt-1'>
        The tech session, organized by the Coder's Club, was a key component of the First Year (FY) orientation program for BCA students. The guest speaker for the event was Mr. Mulani, a highly experienced Data Engineer from Aditya Birla Group, with over 7 years of expertise in the technology field. Throughout his career, he has contributed to numerous significant projects, which have honed his skills and provided him with a deep understanding of various technological advancements. During the session, Mr. Mulani provided valuable insights into the growing scope of different tech domains, offering students a broader perspective on current and emerging trends in the industry. He also shared his experiences and knowledge, guiding the students on how to navigate their tech careers effectively. The session was interactive and enlightening, giving attendees an opportunity to learn directly from a seasoned professional and inspiring them to explore the vast opportunities available in the world of technology.</p>
        <p className='lap:text-[28px] text-[#0080FF] font-bold tab:text-[25px] text-[15px]'>Highlights</p>
        <ul>
          <li><IoMdCheckmark className='inline-block text-[#0080FF] mr-2 tab:w-8 tab:h-8 sm:w-6 sm:h-6 w-5 h-5'></IoMdCheckmark>Over 110+ participants</li>
          <li><IoMdCheckmark className='inline-block text-[#0080FF] mr-2 tab:w-8 tab:h-8 sm:w-6 sm:h-6 w-5 h-5'></IoMdCheckmark>Tech Session</li>
          <li><IoMdCheckmark className='inline-block text-[#0080FF] mr-2 tab:w-8 tab:h-8 sm:w-6 sm:h-6 w-5 h-5'></IoMdCheckmark>Industry insights from Suraj Mulani</li>
          <li><IoMdCheckmark className='inline-block text-[#0080FF] mr-2 tab:w-8 tab:h-8 sm:w-6 sm:h-6 w-5 h-5'></IoMdCheckmark>Networking</li>
        </ul>
      </div>
      
      <div className="mt-6 xl:px-[8%] px-[6%] mb-6">
    <p className='font-bold tab:text-[38px] text-[20px] tracking-wider text-center'>
      Event <span className='text-[#0080FF]'>Organisers</span>
    </p>
    <div className="flex flex-wrap gap-16 max-smvideo:gap-6 max-sm:gap-11 justify-center items-center mt-6">
      {organisers.map((organiser, index) => (
        <div key={index} className="flex flex-col justify-center items-center">
          <img className='tab:w-[294px] tab:h-[294px] w-[140px] h-[140px] rounded-full object-fill' src={organiser.image} alt={organiser.name} />
          <p className='tab:text-[32px] text-[18px] mt-2 max-tab:mt-1'>{organiser.name}</p>
          <p className='tab:text-[18px] text-[14px]'>{organiser.role}</p>
        </div>
      ))}
    </div>
  </div>
    </div>
  );
}

export default Event5; 