import React, { useState } from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";
import { BiLogoTailwindCss } from "react-icons/bi";
import { SiTypescript, SiFigma, SiFramer } from "react-icons/si";
import side from '../assets/side-removebg-preview.png';
import { MdArrowBackIos } from "react-icons/md";
import Animating from './Animating';
import { motion } from "framer-motion";

const About = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [inview, setview] = useState("");

  const cureentnum = document.querySelectorAll('.numbers');
  const speed = 40;

  cureentnum.forEach((curre) => {
    const updatenum = () => {
      const number = parseInt(curre.dataset.number);
      const inner = parseInt(curre.innerHTML);
      const increment = Math.trunc(number / speed);

      if (inner < number) {
        curre.innerHTML = increment + inner;
        setTimeout(updatenum, 140);
      }
    };
    updatenum();
  });

  const renderDiv = () => {
    switch (activeTab) {
      case 0:
        return (
          <div className='text-lg flex flex-col gap-3 items-center'>
            <div className='flex gap-4 items-center'>
              <span>Web Development:</span>
              <FaHtml5 className="text-orange-500 text-3xl" />
              <FaCss3Alt className="text-blue-500 text-3xl" />
              <FaJs className="text-yellow-400 text-3xl" />
              <SiTypescript className="text-blue-700 text-3xl" />
              <FaReact className="text-blue-400 text-3xl" />
              <BiLogoTailwindCss className="text-teal-400 text-3xl" />
            </div>
            <div className='flex gap-4 items-center'>
              <span>UI/UX Design:</span>
              <SiFigma className="text-pink-500 text-3xl" />
              <SiFramer className="text-purple-500 text-3xl" />
            </div>
          </div>
        );
      case 1:
        return <div className='text-lg'><span className="font-bold">Awards:</span> Best Frontend Developer, UI Design Champion</div>;
      case 2:
        return <div className='text-lg'><span className="font-bold">Experience:</span> 3+ years in Frontend Development</div>;
      case 3:
        return <div className='text-lg'><span className="font-bold">Credits:</span> Certified React & UI/UX Designer</div>;
      default:
        return null;
    }
  };

  return (
    <>
      <div className='h-screen p-3 w-full mt-6'>
        <div className='h-full w-full p-4 overflow-hidden bg-[#f3f3f5] rounded-2xl border relative'>
          <div className='headbold text-center text-7xl font-extrabold bottombar'>ABOUT ME</div>

          <div className='w-full h-[80%] grid grid-cols-2 gap-10 justify-center'>
            <img src={side} alt="" className='absolute left-0 w-[380px] bottom-0 z-1' />

            <div className="w-[50%] h-full justify-self-end flex items-center">
              <div className='text-3xl headin flex z-2 flex-col gap-3'>
                <div className='headin tracking-wide'>
                  Captivating <span className="text-[#a3e418] text-4xl font-bold tracking-wider bottomline" style={{ textShadow: "2px 2px 2px #064e3b" }}>Stories</span>
                </div>
                <div className='headin'>birth magnificent</div>
                <div className='headin'>designs.</div>
                <div className='text-base mt-2 leading-relaxed'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus consequatur optio minima neque ipsam, commodi ab fugiat ducimus eaque doloribus facilis adipisci amet non, consectetur magni laudantium cum minus consequuntur.
                </div>
              </div>
            </div>

            <div className="w-[70%] h-[100%] flex items-center flex-col justify-center  ">
              <div className='w-full items-center flex flex-col justify-around gap-3'>
                <div className='flex justify-around w-full'>
                  {["Skills", "Awards", "Experience", "Credits"].map((item, index) => (
                    <div
                      key={index}
                      className={`headin text-lg font-bold cursor-pointer px-3 py-1.5 rounded-lg transition-all ${
                        activeTab === index ? "bg-gray-800 text-white" : "hover:text-gray-600"
                      }`}
                      onClick={() => setActiveTab(index)}
                    >
                      {item}
                    </div>
                  ))}
                </div>

                <div className="mt-4 min-h-[80px]">{renderDiv()}</div>
              </div>

              <div className='mt-6 w-full h-[110px] headin flex justify-around items-center bg-white/30 backdrop-sepia-50 rounded-2xl hover:backdrop-sepia-0 shadow-2xl transition-all duration-500 ease-in-out hover:shadow-2xs'>
                {[
                  { label: "Projects", number: 2000 },
                  { label: "Clients", number: 3000 },
                  { label: "Hours", number: 6000 },
                  { label: "Worked with", number: 5000 }
                ].map((stat, index) => (
                  <div key={index} className="flex flex-col justify-center items-center">
                    <motion.div
                      className={`${inview} headin transition-all ease-in`}
                      data-number={stat.number}
                      whileInView={() => setview("numbers")}
                      onViewportLeave={() => setview("")}
                    >
                      0+
                    </motion.div>
                    <div className='headon font-extrabold text-sm'>{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className='w-full text-center'>
            <div className='up-down'>
              <div className='text-center flex justify-center w-full -rotate-90 items-end'>
                <MdArrowBackIos className='text-4xl text-black color-change font-extrabold' />
              </div>
              <div className='text-center flex justify-center w-full -rotate-90 items-start'>
                <MdArrowBackIos className='text-4xl text-black font-extrabold color-change' />
              </div>
            </div>
          </div>
        </div>
      </div>

      <br />
      {/* <Animating /> */}
    </>
  );
};

export default About;
