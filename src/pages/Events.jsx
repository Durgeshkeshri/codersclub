import { IoIosArrowForward } from "react-icons/io";
import event from '../assets/event.jpg';
const Events = () => {
  return (
    <div className="mt-6 text-white tracking-wider flex flex-col justify-center items-center px-[5%]">
      <div>
        <div className="text-center">
          <h4 className="font-bold lap:text-[67px] tab:text-[45px] text-[35px]">Our <span className="text-[#0080FF]">Events</span></h4>
        </div>
        <div>
          <ul className="text-[13px] tab:text-[17px] lap:text-[22px] flex gap-4 justify-center ">
            <li className="bg-slate-900 bg-opacity-90 rounded-3xl py-1 px-3">2023</li>
            <li className="bg-slate-900 bg-opacity-90 rounded-3xl py-1 px-3">2024</li>
            <li className="bg-slate-900 bg-opacity-90 rounded-3xl py-1 px-3">2025</li>
          </ul>
        </div>
      </div>

      <div className=" flex justify-center items-center mt-2">
        <p className="border-2 border-[#0080FF] w-[80%] px-4"></p>
      </div> 
      <div className="flex gap-3">
        <img className="w-[288px] h-[178px] max-tab:w-[152px] max-tab:h-[189px] rounded-2xl" src={event} alt="" />
        <div className="flex flex-col justify-between tab:px-[2%]">
          <div>
          <p className="font-bold lap:text-[35px] tab:text-[30px] text-[22px]">CodeFusion 1</p>
          <p className="mt-2 lap:text-[16px] text-[13px]">Held on July 15, 2025, top coders tackled HackerRank challenges as individual. <span className="max-smvideo:hidden"> Congratulations to the winners who home cash prizes and tech gadgets!</span></p>
          </div>
          <p className="underline cursor-pointer lap:text-[16px] text-[14px] text-end">Explore <IoIosArrowForward className="inline-block"></IoIosArrowForward></p>
        </div>
        <img className="w-[288px] h-[178px] rounded-2xl max-tab:hidden" src={event} alt="" />
      </div>
    </div>
  )
}

export default Events