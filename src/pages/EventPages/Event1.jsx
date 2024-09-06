import React from 'react';
import event from '../../assets/event.jpg';
import { IoMdCheckmark } from "react-icons/io";

const Event1 = () => {
  return (
    <div className="text-white sm:px-[3%]">
      <div className='flex flex-col tab:flex-row justify-center xl:px-[8%] tab:px-[6%] tab:gap-8 lap:gap-0 max-tab:px-[6%] max-tab:gap-4 mt-6'>
        <img
          className='w-full h-[300px] object-fill xl:w-[345px] xl:h-[450px] lap:w-[310px] lap:h-[405px] tab:w-[276px] tab:h-[360px] tab:flex-shrink-0'
          src={event}
          alt="Event"
        />
        <div className='xl:pr-[0%] lap:px-[3%] flex flex-col gap-3 tab:ml-0 max-tab:text-left'>
          <h5 className='font-bold lap:text-[51px] tab:text-[31px] text-[26px] max-smvideo:text-[22px] bigpc:text-[70px]'>
            Code <span className='text-[#0080FF]'>Fusion</span>: A Celebration of Coding Excellence
          </h5>
          <p className='lap:text-[21px] tab:text-[17px] text-[13px] bigpc:text-[35px]'>
            Date Held: <span className='text-[#0080FF]'>Aug 17, 2k23</span>
          </p>
          <p className='lap:text-[21px] tab:text-[17px] text-[13px] bigpc:text-[35px]'>
            Join us in celebrating the incredible talent and innovation, From intense coding challenges to groundbreaking projects, relive the excitement and highlights of this unforgettable event.
          </p>
        </div>
      </div>

      <div className="lap:text-[22px] tab:text-[19px] text-[13px] px-[6%] xl:px-[8%] flex flex-col gap-3 mt-6 ">
        <p className='tab:text-[38px] font-bold text-[20px]'>Event <span className='text-[#0080FF]'>Overview</span></p>
        <p className='mt-1'>The CodeFusion Coding Competition, held on Aug-17-2023 was an exhilarating contest between coders club core team members including Durgesh Keshri, Danish Shaikh, Abhisekh Gupta, Chirag Patil, Vivek Gupta and Vaishnavi shinde, HackerRank platform was used for this contest, Total duration was 2 hours with Total of 5 DSA questions</p>
        <p className='lap:text-[28px] text-[#0080FF] font-bold tab:text-[25px] text-[15px]'>Highlights</p>
        <ul>
          <li><IoMdCheckmark className='inline-block text-[#0080FF] mr-2 tab:w-8 tab:h-8 sm:w-6 sm:h-6 w-5 h-5'></IoMdCheckmark>Contest between core team members</li>
          <li><IoMdCheckmark className='inline-block text-[#0080FF] mr-2 tab:w-8 tab:h-8 sm:w-6 sm:h-6 w-5 h-5'></IoMdCheckmark>Intensive coding challenges</li>
          <li><IoMdCheckmark className='inline-block text-[#0080FF] mr-2 tab:w-8 tab:h-8 sm:w-6 sm:h-6 w-5 h-5'></IoMdCheckmark>Focus on Data Structure and Algorithms</li>
        </ul>
      </div>

      <div className="xl:mx-[8%] mx-[6%] p-4 mt-6 bg-slate-900">
        <div>
          <p className='tab:text-[38px] text-[24px] font-bold'>
            Winners and <span className='text-[#0080FF]'>Awards</span>
          </p>
          <p className='tab:text-[21px] text-[13px] my-2'>
            We are thrilled to recognize the outstanding participants of our DSA-based coding competition. Their deep understanding of data structures, algorithms, and problem-solving skills truly stood out. Here are the top  coders who excelled in the competition:
          </p>
        </div>
        <div>
          <p className='tab:text-[38px] text-[24px] font-bold mt-2'>LeaderBoard:</p>
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
                { rank: 1, name: 'Durgesh Keshri', solved: 5, time: '1:30:45' },
                { rank: 2, name: 'Danish Shaikh', solved: 4, time: '1:45:30' },
                { rank: 3, name: 'Abhisekh Gupta', solved: 3, time: '1:55:10' },
                { rank: 4, name: 'Chirag Patil', solved: 3, time: '1:00:30' },
                { rank: 5, name: 'Vaishnavi Shinde', solved: 2, time: '2:00:00' },

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
    </div>
  );
}

export default Event1; 
