import React from 'react';
import { FaGithub, FaWhatsapp, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { VscCallOutgoing } from 'react-icons/vsc';
import { LuMail } from 'react-icons/lu';

const Registration = () => {
  return (
    <div className="text-white bg-slate-900 py-12 tracking-wider">
      <div className="xl:flex justify-center px-[6%] gap-3 bigpc:px-[17%]">
        <div className="textandsocialicons flex justify-evenly flex-col xl:gap-44 gap-8 xl:w-1/2 max-lap:ml-[2%]">

          <div>
            <h4 className="text-[#0080FF] font-bold tab:text-[22px] max-tab:text-[18px]">STAY CONNECTED</h4>
            <p className="tab:text-[50px] max-tab:text-[29px] font-bold">Register For Your Next Events</p>
            <p className="tab:text-[18px] max-tab:text-[13px]">Exciting prizes await you!</p>
          </div>

          <div className="flex flex-col gap-4">
            <div className="text-[14px] tab:text-[17px] flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="bg-[#0080FF] text-2xl p-2 rounded-full">
                  <VscCallOutgoing size={25} />
                </div>
                <div>
                  <p className="font-semibold">Phone</p>
                  <p className="text-sm">+919987400752 / +1234567123</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-[#0080FF] text-2xl p-2 rounded-full">
                  <LuMail size={25} />
                </div>
                <div>
                  <p className="font-semibold">Mail</p>
                  <p className="text-sm">bvdudmscodersclub@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="text-[14px] tab:text-[17px]">
              <p className='mb-2'>Socials</p>
              <div className="flex gap-3">
                <div className="bg-[#0080FF] p-2 rounded-full">
                  <a href="https://github.com/bvdu-codersclub" target="_blank" rel="noopener noreferrer">
                    <FaGithub size={25} />
                  </a>
                </div>
                <div className="bg-[#0080FF] p-2 rounded-full">
                  <a href="https://chat.whatsapp.com/DQoTTIM9wae2qn93rCzwBR" target="_blank" rel="noopener noreferrer">
                    <FaWhatsapp size={25} />
                  </a>
                </div>
                <div className="bg-[#0080FF] p-2 rounded-full">
                  <a href="https://www.instagram.com/_Codersclub_/" target="_blank" rel="noopener noreferrer">
                    <FaInstagram size={25} />
                  </a>
                </div>
                <div className="bg-[#0080FF] p-2 rounded-full">
                  <a href="https://www.linkedin.com/company/bvdu-dms/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin size={25} />
                  </a>
                </div>

              </div>
            </div>
          </div>
        </div>

        <div className="form max-xl:mt-4 xl:w-1/2">
          <p className='tab:text-[22px] text-[13px] mb-2 max-lap:ml-[2%]'>Note: For students from other colleges, include details in the message box.</p>
          <form action="" className="bg-slate-950 p-4 rounded-xl">
            <div className="flex flex-wrap gap-4">
              <input
                type="text"
                placeholder="Name"
                className="bg-slate-900 p-2 rounded-md w-full"
                required
              />
            </div>

            <div className="flex flex-wrap gap-4 mt-4">
              <input
                type="email"
                placeholder="Email"
                className="bg-slate-900 p-2 rounded-md w-full"
                required
              />
            </div>

            <div className="flex flex-wrap gap-4 mt-4">
              <div className="flex w-full gap-4">
                <select className="bg-slate-900 p-2 rounded-md w-1/2" required>
                  <option value="">Course</option>
                  <option value="bca">BCA</option>
                  <option value="bba">BBA</option>
                  <option value="mba">MBA</option>
                  <option value="others">Others</option>
                </select>
                <select className="bg-slate-900 p-2 rounded-md w-1/2" required>
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
                <select className="bg-slate-900 p-2 rounded-md w-1/2" required>
                  <option value="">Division</option>
                  <option value="a">A</option>
                  <option value="b">B</option>
                  <option value="c">C</option>
                  <option value="none">None</option>
                </select>
                <select className="bg-slate-900 p-2 rounded-md w-1/2" required>
                  <option value="">House</option>
                  <option value="kadam">Kadam</option>
                  <option value="kotler">Kotler</option>
                  <option value="tata">Tata</option>
                  <option value="padamsee">Padamsee</option>
                  <option value="chanakya">Chanakya</option>
                  <option value="prahlad">Prahlad</option>
                  <option value="kaizen">Kaizen</option>
                  <option value="none">None</option>
                </select>
              </div>
            </div>

            <div className="mt-4">
              <input
                type="tel"
                placeholder="Phone"
                className="bg-slate-900 p-2 rounded-md w-full"
                required
              />
            </div>

            <div className="mt-4">
              <select className="bg-slate-900 p-2 rounded-md w-full" required>
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
                required
              />
            </div>

            <div className="mt-2 flex justify-end">
              <button className="bg-[#0080FF] p-2 rounded-md w-[100px] hover:bg-white hover:text-[#0080FF] font-semibold">Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;
