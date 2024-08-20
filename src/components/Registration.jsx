import React from 'react';
import { FaGithub, FaWhatsapp, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { VscCallOutgoing } from 'react-icons/vsc';
import { LuMail } from 'react-icons/lu';

const Registration = () => {
  return (
    <div className="text-white bg-slate-900 py-12">
      <div className="xl:flex justify-center px-[6%]">
        <div className="textandsocialicons flex justify-evenly flex-col xl:gap-44 gap-8 xl:w-1/2">

          <div>
            <h4 className="text-[#0080FF] font-bold tab:text-[22px] max-tab:text-[18px]">STAY CONNECTED</h4>
            <p className="tab:text-[50px] max-tab:text-[29px] font-bold">Register For Your Next Events</p>
            <p className="tab:text-[18px] max-tab:text-[13px]">Exciting prizes await you!</p>
          </div>

          <div className="flex flex-col gap-4">
            <div className="text-[14px] tab:text-[17px] flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="bg-[#0080FF] text-2xl p-2 rounded-full">
                  <VscCallOutgoing size={25}/>
                </div>
                <div>
                  <p className="font-semibold">Phone</p>
                  <p className="text-sm">+919987400752 / +1234567123</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-[#0080FF] text-2xl p-2 rounded-full">
                  <LuMail size={25}/>
                </div>
                <div>
                  <p className="font-semibold">Mail</p>
                  <p className="text-sm">bvdudmscodersclub@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="text-[14px] tab:text-[17px]">
              <p>Socials</p>
              <div className="flex gap-3">
                <div className="bg-[#0080FF] p-2 rounded-full">
                  <FaGithub size={25}/>
                </div>
                <div className="bg-[#0080FF] p-2 rounded-full">
                  <FaWhatsapp size={25}/>
                </div>
                <div className="bg-[#0080FF] p-2 rounded-full">
                  <FaInstagram size={25}/>
                </div>
                <div className="bg-[#0080FF] p-2 rounded-full">
                  <FaLinkedin size={25}/>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="form max-xl:mt-4 xl:w-1/2">
          <p className='tab:text-[22px] text-[13px] mb-2'>Note: For students from other colleges, include details in the message box.</p>
          <form action="" className="bg-slate-950 p-4 rounded-md">
            <div className="flex flex-wrap gap-4">
              <input 
                type="text" 
                placeholder="Full Name" 
                className="bg-slate-900 p-2 rounded-md w-full" 
              />
            </div>

            <div className="flex flex-wrap gap-4 mt-4">
              <input 
                type="email" 
                placeholder="Gmail" 
                className="bg-slate-900 p-2 rounded-md w-full" 
              />
            </div>

            <div className="flex flex-wrap gap-4 mt-4">
              <div className="flex w-full gap-4">
                <select className="bg-slate-900 p-2 rounded-md w-1/2">
                  <option value="">Course</option>
                  <option value="bca">BCA</option>
                  <option value="bba">BBA</option>
                  <option value="mba">MBA</option>
                  <option value="others">Others</option>
                </select>
                <select className="bg-slate-900 p-2 rounded-md w-1/2">
                  <option value="">Year</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mt-4">
              <div className="flex w-full gap-4">
                <select className="bg-slate-900 p-2 rounded-md w-1/2">
                  <option value="">Division</option>
                  <option value="a">A</option>
                  <option value="b">B</option>
                  <option value="c">C</option>
                </select>
                <select className="bg-slate-900 p-2 rounded-md w-1/2">
                  <option value="">House</option>
                  <option value="a">A</option>
                  <option value="b">B</option>
                  <option value="c">C</option>
                  <option value="d">D</option>
                  <option value="e">E</option>
                  <option value="f">F</option>
                </select>
              </div>
            </div>

            <div className="mt-4">
              <input 
                type="tel" 
                placeholder="Phone Number" 
                className="bg-slate-900 p-2 rounded-md w-full" 
              />
            </div>

            <div className="mt-4">
              <select className="bg-slate-900 p-2 rounded-md w-full">
                <option value="">Upcoming Events</option>
                <option value="codefusion">Codefusion 3</option>
                <option value="webathon">Webathon</option>
                <option value="rapidfire">Rapidfire</option>
                <option value="workshop">Workshop</option>
              </select>
            </div>

            <div className="mt-4">
              <textarea 
                placeholder="Message" 
                rows="5" 
                className="bg-slate-900 p-2 rounded-md w-full" 
              />
            </div>

            <div className="mt-4 flex justify-end">
              <button className="bg-[#0080FF] p-2 rounded-md w-[100px]">Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;
