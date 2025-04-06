import React from 'react'
import { FaArrowRight , FaInstagram, FaTwitter , FaLinkedin, FaArrowDown} from "react-icons/fa6";
import { IoMdMale } from "react-icons/io";
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import img1 from '../assets/_ (1).jpeg'
import img2 from '../assets/img1.jpg'
import img3 from '../assets/main.jpg'

// import img4 from '../assets/3D Illustration Collection.jpeg'
import img5 from '../assets/f40536f5c9b8305d82d166b41d3fcefd.jpg'
import { NavLink } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Projects from './Projects';
import Work from './Work';
import {motion} from 'framer-motion'
const Home = () => {
  return (
    <div className='h-full p-3 w-full overflow-x-hidden'>
    <div className='h-full w-full p-6  bg-[#f3f3f5] rounded-2xl border'>
      <motion.div className='flex justify-around items-center h-[100px]' 
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 300,
        duration: 1,
        ease: "easeOut",
      }}
      viewport={{ once: true, amount: 0.2 }}>
        <div className='headon font-extrabold text-3xl flex justify-center items-center '>PORTFOLIO </div>

        <div className='flex justify-center items-center gap-6 font-bold'>
        <div className='bottomline'>
  <NavLink to="/" className={({ isActive }) => (isActive ? "text-[#a3e418] font-bold" : "")}>
    Home
  </NavLink>
</div>
<div className='bottomline'>
  <NavLink to="/about" className={({ isActive }) => (isActive ? "text-[#a3e418] font-bold" : "")}>
    About
  </NavLink>
</div>
<div className='bottomline'>
  <NavLink to="/projects" className={({ isActive }) => (isActive ? "text-[#a3e418] font-bold" : "")}>
    Projects
  </NavLink>
</div>
<div className='bottomline'>
  <NavLink to="/contact" className={({ isActive }) => (isActive ? "text-[#a3e418] font-bold" : "")}>
    Contact Me
  </NavLink>
</div>

        </div>

        <div className='flex justify-center items-center gap-6'>
          <div className='text-xl bottomline'>Log In</div>
          
          <div className='group text-xl font-bold rounded-4xl px-4 py-2 border flex justify-center items-center gap-3 cursor-pointer transition-all duration-500 ease-in-out'>
            Sign Up 
            <span className='bg-[#a3e418] rounded-full p-1.5 outline-none transition-all duration-500 ease-in-out group-hover:rotate-0 group-hover:translate-x-1'>
              <FaArrowRight className='text-2xl rotate-[-30deg] transition-all duration-500 ease-in-out group-hover:rotate-0 ' />
            </span>
          </div>
        </div>
     
      </motion.div>
   {/* Main home  */}
   
      <div className=' grid mt-5 grid-cols-2 w-full h-[100%] gap-5 relative'>
      {/* <div className='absolute left-[49.5%] top-[46.9%] z-10 text-3xl '>🦊</div> */}
      <div className="w-30 h-30 absolute left-[46.5%] top-[40%] bg-white/10 backdrop-blur-3xl border border-white/30 rounded-full flex justify-center items-center spining-text shadow-2xl ">
  {['🧔'," ","W", "E", "B"].map((letter, index) => (
    <span
      key={index}
      className={`absolute font-bold text-black circle-text ${index === 0 ? 'text-4xl' : 'text-xs'}`}

      style={{
        transform: `rotate(${index * 20 + 45}deg) translate(${index === 0 ? '0px' : '50px'})`

      }}
    >
      {letter}
    </span>
  ))}

  {[" ","D", "E", "V", "E", "L", "O", "P", "M", "E", "N", "T"].map((letter, index) => (
    <span
      key={index}
      className="absolute  font-bold text-xs text-black circle-text"
      style={{
        transform: `rotate(${index * 18 + 180}deg) translate(50px) rotate(-${index * 18 + 180}deg)`,
      }}
    >
      {letter}
    </span>
  ))}
</div>







        {/* right home */}
<div className='w-full h-[100%]  p-4 flex flex-col justify-around'>
<motion.div className='flex items-center headin text-7xl justify-start gap-15 tracking-wider' 
initial={{opacity:0 , y:60}}

animate={{opacity:1 , y:0}}
transition={{duration:1, ease:"easeInOut", type:"spring"}}
viewport={{ once: true, amount: 0.2 }}>

Look <div className=' border-3 text-5xl font-extrabold flex items-center gap-4 text-[#74d4cf] border-[#74d4cf] rounded-full pt-4.5 px-5'>
  <div>*</div>
<div>*</div>
<div>*</div></div>
</motion.div>
<br />
<motion.div className='flex items-center headin text-7xl justify-center gap-18'
initial={{opacity:0 , y:60}}

animate={{opacity:1 , y:0}}
transition={{duration:1, ease:"easeInOut", type:"spring" , delay:0.5, stiffness:500}}
viewport={{ once: true, amount: 0.2 }}>
  <IoMdMale className='text-[#a3e418] rotate-45 text-[120px]'/>
beyond

</motion.div>
<br />
<div className='flex gap-3'>
<motion.div className='flex items-center headin text-7xl justify-center'
initial={{opacity:0 , y:60}}

animate={{opacity:1 , y:0}}
transition={{duration:1, ease:"easeInOut", type:"spring"}}
viewport={{ once: true, amount: 0.2 }}>limits</motion.div>
<div className='flex items-center text-xs'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima, voluptatibus. Commodi minus labore dignissimos aperiam atque, temporibus repudiandae ut tenetur veritatis. Repellendus fugit ratione 
.</div>
</div>
<br />
<br />
<motion.div  className='flex justify-center items-center gap-4'
initial={{opacity:0 , x:-200}}

animate={{opacity:1 , x:0}}
transition={{duration:1, ease:"easeInOut", type:"spring" , stiffness:200}}
viewport={{ once: true, amount: 0.2 }}>
<AvatarGroup
  renderSurplus={(surplus) => <span>+{surplus.toString()[0]}k</span>}
  total={4251}
  
>
  <Avatar 
    alt="Remy Sharp" 
    src={img1} 
    className="transition-transform duration-200 ease-in-out hover:scale-110 hover:border-2 hover:border-black"
  />
  <Avatar 
    alt="Travis Howard" 
    src={img2} 
    className="transition-transform duration-200 ease-in-out hover:scale-110 hover:border-2 hover:border-black"
  />
  <Avatar 
    alt="Agnes Walker" 
    src={img3} 
    className="transition-transform duration-200 ease-in-out hover:scale-110 hover:border-2 hover:border-black"
  />
  <Avatar 
    alt="Trevor Henderson" 
    src={img2} 
    className="transition-transform duration-200 ease-in-out hover:scale-110 hover:border-2 hover:border-black"
  />
</AvatarGroup>

    <div className='headin  font-bold'>10.2k+
      <div className='headon'>Clients trust Me !!</div>
    </div>
    </motion.div>
<br />
<motion.div 
initial={{opacity:0 , y:160}}

animate={{opacity:1 , y:0}}
transition={{duration:2, ease:"easeInOut", type:"spring", stiffness:200 , delay:0.5}}
viewport={{ once: true, amount: 0.2 }}>
<div className='flex gap-4 justify-center m-3'> <span className='text-xl border-2 py-1 px-4 rounded-full cursor-pointer'>Branding</span><span className='text-xl border-2 py-1 px-4 rounded-full cursor-pointer bg-black text-white'>Web Development</span></div>
<div className='flex gap-4 justify-center'><span className='text-xl border-2 py-1 px-4 rounded-full cursor-pointer'>UI/UX</span><span className='text-xl border-2 py-1 px-4 rounded-full cursor-pointer'>Designing</span><span className='text-xl border-2 py-1 px-4 rounded-full cursor-pointer'>Marketing</span><span className='text-xl border-2 py-1 px-4 rounded-full cursor-pointer'>3D modeling</span></div>
</motion.div>

</div>



{/* ?left home */}
<div 
  className="h-[100%] rounded-2xl shadow-2xs" 
  style={{ backgroundImage: `url(${img5})`, backgroundSize: "cover", backgroundPosition: "center" }}
>


 <div className='h-full  relative'>

<div className='w-full  flex justify-between items-center'>
<div
  className="relative  flex items-center gap-3 bg-[#f3f3f5] p-3 rounded-b-3xl rounded-r-2xl inverted-corner"
  style={{
  
  }}
>
  {/* Content inside the div */}


  {/* <div className="border rounded-tr-2xl  absolute top-0 -right-175 w-175 h-12 bg-transparent rounded-tl-2xl"></div> */}




<span className='bg-black text-white text-xl p-2 rounded-full outline-0 '><FaInstagram className='text-xl font-bold'/></span>
<span className='bg-black text-white text-xl p-2 rounded-full outline-0 '><FaTwitter className='text-xl font-bold'/></span>
<span className='bg-black text-white text-xl p-2 rounded-full outline-0 '> <FaLinkedin className='text-xl font-bold'/></span>

</div>

<div className='group text-xl font-bold rounded-b-2xl  flex justify-center items-center gap-3 cursor-pointer transition-all duration-500 ease-in-out bg-[#f3f3f5] p-3 relative inver-corner'>
            
            <span className='bg-[#a3e418] rounded-full p-1.5 outline-none transition-all duration-500 ease-in-out group-hover:rotate-0 '>
              <FaArrowRight className='text-2xl rotate-[-30deg] transition-all duration-500 ease-in-out group-hover:rotate-0 ' />
            </span>
          </div>
</div>
<div className='absolute bottom-0 right-0 text-xl flex items-center '><div className='p-3 bg-[#f3f3f5] flex items-center gap-3 relative corner rounded-tl-2xl'>Explore In More <FaArrowDown className='font-bold text-xl '/></div></div>

 </div>
</div>
      </div>
    </div>

    <About/>
<Projects/>
<Work/>
    <Contact/>
    </div>
  )
}

export default Home;

