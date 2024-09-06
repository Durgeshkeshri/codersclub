import event from '../../assets/game.jpeg';
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
const Event6 = () => {
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
            Tech <span className='text-[#0080FF]'>Game</span>
          </h5>
          <p className='lap:text-[21px] tab:text-[17px] text-[13px] bigpc:text-[35px]'>
            Date Held: <span className='text-[#0080FF]'>July 23, 2k24</span>
          </p>
          <p className='lap:text-[21px] tab:text-[17px] text-[13px] bigpc:text-[35px]'>
          Join us in celebrating the incredible talent and innovation, From intense coding challenges to groundbreaking projects, relive the excitement and highlights of this unforgettable event.
          </p>
        </div>
      </div>

      <div className="lap:text-[22px] tab:text-[19px] text-[13px] px-[6%] xl:px-[8%] flex flex-col gap-3 mt-6 ">
        <p className='tab:text-[38px] font-bold text-[20px]'>Event <span className='text-[#0080FF]'>Overview</span></p>
        <p className='mt-1'>The tech game, organized by the Coder's Club, was part of the BCA First Year (FY) orientation program. The event featured both solo and group rapid-fire rounds, providing an engaging and competitive atmosphere for the participants. After the competition, students had the opportunity to interact with the core team members of the Coder's Club. Senior core team members shared their experiences and provided guidance to the students, while also narrating the story behind the establishment of the Coder's Club, highlighting its purpose and vision. The winners of the rapid-fire competition were awarded prizes and certificates, adding an exciting conclusion to the event.</p>
        <p className='lap:text-[28px] text-[#0080FF] font-bold tab:text-[25px] text-[15px]'>Highlights</p>
        <ul>
          <li><IoMdCheckmark className='inline-block text-[#0080FF] mr-2 tab:w-8 tab:h-8 sm:w-6 sm:h-6 w-5 h-5'></IoMdCheckmark>Over 110+ participants</li>
          <li><IoMdCheckmark className='inline-block text-[#0080FF] mr-2 tab:w-8 tab:h-8 sm:w-6 sm:h-6 w-5 h-5'></IoMdCheckmark>Rapid-Fire</li>
          <li><IoMdCheckmark className='inline-block text-[#0080FF] mr-2 tab:w-8 tab:h-8 sm:w-6 sm:h-6 w-5 h-5'></IoMdCheckmark>Insightful talks from Core Team of Coder's Club</li>
          <li><IoMdCheckmark className='inline-block text-[#0080FF] mr-2 tab:w-8 tab:h-8 sm:w-6 sm:h-6 w-5 h-5'></IoMdCheckmark>Networking sessions</li>
        </ul>
      </div>

      <div className="xl:mx-[8%] mx-[6%] p-4 mt-6 bg-slate-900">
        <div>
          <p className='tab:text-[38px] text-[24px] font-bold'>
            Winners and <span className='text-[#0080FF]'>Awards</span>
          </p>
          <p className='tab:text-[21px] text-[13px] my-2'>
            We are thrilled to recognize the outstanding participants of our recent Tech based Rapid-fire competition. Their deep understanding of Technology and General Knowledge skills truly stood out. Here are the top students who excelled in the competition:
          </p>
        </div>
        <div>
          <p className='tab:text-[38px] text-[24px] font-bold mt-2'>LeaderBoard Batch-1</p>
          <table className='w-full mt-4 border-collapse border border-[#0080FF]'>
            <thead>
              <tr>
                {['Rank', 'Participant Name', 'Problems Solved', 'Time'].map((heading, index) => (
                  <th
                    key={index}
                    className={`tab:text-[20px] text-[13px] text-left maxsm:p-1 p-2 border-b border-[#0080FF] ${index !== 3 ? 'border-r' : ''
                      } border-[#0080FF]`}>
                    {heading}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                { rank: 1, name: 'John Doe', solved: 10, time: '1:30:45' },
                { rank: 2, name: 'Jane Smith', solved: 9, time: '1:45:30' },
                { rank: 3, name: 'Alex Johnson', solved: 9, time: '1:55:10' },
              ].map((participant, index) => (
                <tr key={index}>
                  <td className='tab:text-[16px] text-[13px] max-sm:w-[15%] max-sm:p-1 p-2 border-r border-[#0080FF]'>{participant.rank}</td>
                  <td className='tab:text-[16px] text-[13px] max-sm:w-[%] w-auto max-sm:p-1 p-2 border-r border-[#0080FF]'>{participant.name}</td>
                  <td className='tab:text-[16px] text-[13px] max-sm:w-[15%] w-auto max-sm:p-1 p-2 border-r border-[#0080FF]'>{participant.solved}</td>
                  <td className='tab:text-[16px] text-[13px] max-sm:w-[25%]max-sm:p-1 p-2'>{participant.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div>
          <p className='tab:text-[38px] text-[24px] font-bold mt-2'>LeaderBoard Batch-2</p>
          <table className='w-full mt-4 border-collapse border border-[#0080FF]'>
            <thead>
              <tr>
                {['Rank', 'Participant Name', 'Problems Solved', 'Time'].map((heading, index) => (
                  <th
                    key={index}
                    className={`tab:text-[20px] text-[13px] text-left maxsm:p-1 p-2 border-b border-[#0080FF] ${index !== 3 ? 'border-r' : ''
                      } border-[#0080FF]`}>
                    {heading}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                { rank: 1, name: 'John Doe', solved: 10, time: '1:30:45' },
                { rank: 2, name: 'Jane Smith', solved: 9, time: '1:45:30' },
                { rank: 3, name: 'Alex Johnson', solved: 9, time: '1:55:10' },
              ].map((participant, index) => (
                <tr key={index}>
                  <td className='tab:text-[16px] text-[13px] max-sm:w-[15%] max-sm:p-1 p-2 border-r border-[#0080FF]'>{participant.rank}</td>
                  <td className='tab:text-[16px] text-[13px] max-sm:w-[%] w-auto max-sm:p-1 p-2 border-r border-[#0080FF]'>{participant.name}</td>
                  <td className='tab:text-[16px] text-[13px] max-sm:w-[15%] w-auto max-sm:p-1 p-2 border-r border-[#0080FF]'>{participant.solved}</td>
                  <td className='tab:text-[16px] text-[13px] max-sm:w-[25%]max-sm:p-1 p-2'>{participant.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

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

export default Event6; 
