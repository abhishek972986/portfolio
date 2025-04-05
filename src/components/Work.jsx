import React from 'react'
import testi from '../assets/testi0.mp4'
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import Avatar from '@mui/material/Avatar';
import { FaArrowRight } from "react-icons/fa6";
import { motion } from 'framer-motion';
import avatar from '../assets/test.jpg'
import avatar2 from '../assets/avatr.webp'
import avatar3 from '../assets/avatar.webp'
const Work = () => {
  return (
    <div className='h-screen w-full bg-white border rounded-2xl p-6 mt-6'>

      {/* Header */}
      <div className='headbold text-center text-8xl font-bold bottombar'>mY WORK</div>

      {/* Video and Testimonials Grid */}
      <div className='w-full h-fit grid grid-cols-2 gap-7 mt-4'>

        {/* Video Section */}
        <div className="w-full h-full relative">
          <div className='absolute top-0 left-0 z-10 bg-white flex flex-col p-3 rounded-br-4xl inver-cornering'>
            <div className='headon text-3xl mb-2 font-bold'>Hear From Our</div>
            <div className='headon text-3xl mb-2 font-bold'>Satisfied Clients</div>
            <div className='headon text-3xl mb-2 font-bold'>What They Say 💜</div>
          </div>
          <div className='absolute bottom-0 right-0 p-4 rounded-tl-3xl bg-white cornering flex items-center gap-5'>
            <div className='headon text-2xl font-bold'>TESTIMONIALS</div>
            <div className='p-3 rounded-full border bg-amber-400'>
              <FaArrowRight className='text-2xl font-bold -rotate-45' />
            </div>
          </div>
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover rounded-2xl"
          >
            <source src={testi} type="video/mp4" />
          </video>
        </div>

        {/* Testimonials Section */}
        <div className="w-full h-full flex flex-col gap-5 justify-self-end">

          {/* Testimonial Card 1 */}
          <div className='h-[220px] w-full bg-[#f3f3f5] rounded-2xl flex flex-col gap-5 justify-around p-7 relative border-t-4 border-green-600'>
            <div className='flex text-yellow-500'><FaStar /><FaStar /><FaStar /><FaStar /></div>
            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo placeat eos, vel ipsum maxime autem optio inventore magni corrupti corporis accusamus iure, totam enim sed nisi commodi voluptates recusandae animi!</div>
            <div className='flex items-center gap-5'>
              <Avatar alt="Cindy Baker" src={avatar3} />
              <div>
                <div className='headwork font-extralight'>Marks Antony</div>
                <div>Owner of BoB</div>
              </div>
            </div>
            <div className='absolute bottom-0 right-0 p-4 rounded-tl-3xl bg-white cornering'>
              <div className='p-3 rounded-full border bg-orange-400'>
                <FaArrowRight className='text-2xl font-bold' />
              </div>
            </div>
          </div>

          {/* Testimonial Card 2 */}
          <div className='h-[220px] w-full bg-[#f3f3f5] rounded-2xl flex flex-col gap-5 justify-around p-7 relative border-t-4 border-yellow-300'>
            <div className='flex text-yellow-500'><FaStar /><FaStar /><FaStar /><FaStarHalfAlt /></div>
            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo placeat eos, vel ipsum maxime autem optio inventore magni corrupti corporis accusamus iure, totam enim sed nisi commodi voluptates recusandae animi!</div>
            <div className='flex items-center gap-5'>
              <Avatar alt="Cindy Baker" src={avatar2} />
              <div>
                <div className='headwork font-extralight'>Marks Antony</div>
                <div>Owner of BoB</div>
              </div>
            </div>
            <div className='absolute bottom-0 right-0 p-4 rounded-tl-3xl bg-white cornering'>
              <div className='p-3 rounded-full border bg-yellow-300'>
                <FaArrowRight className='text-2xl font-bold -rotate-30' />
              </div>
            </div>
          </div>

          {/* Testimonial Card 3 */}
          <div className='h-[220px] w-full bg-[#f3f3f5] rounded-2xl flex flex-col gap-5 justify-around p-7 relative border-t-4 border-purple-400'>
            <div className='flex text-yellow-500'><FaStar /><FaStar /><FaStar /><FaStarHalfAlt /></div>
            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo placeat eos, vel ipsum maxime autem optio inventore magni corrupti corporis accusamus iure, totam enim sed nisi commodi voluptates recusandae animi!</div>
            <div className='flex items-center gap-5'>
              <Avatar alt="Cindy Baker" src={avatar} />
              <div>
                <div className='headwork font-extralight'>Marks Antony</div>
                <div>Owner of BoB</div>
              </div>
            </div>
            <div className='absolute bottom-0 right-0 p-4 rounded-tl-3xl bg-white cornering'>
              <div className='p-3 rounded-full border bg-purple-600'>
                <FaArrowRight className='text-2xl font-bold -rotate-30' />
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Join Me Section */}
      <div className='h-[90px] bg-gradient-to-r from-blue-500 to-green-800 rounded-2xl flex justify-center items-center mt-6 transition-all duration-700 ease-in-out  hover:scale-[1.02]'>
        <div className='flex items-center gap-6'>
          <span className='headbold text-white text-4xl font-extrabold tracking-wide stroke-2 stroke-black' >Join ME</span>
          <div className='flex items-end gap-2'>
            {Array(3).fill().map((_, index) => (
              <motion.div
                key={index}
                className="w-3 h-3 bg-white rounded-full"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 0.6, repeat: Infinity, delay: index * 0.2 }}
              />
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}

export default Work;
