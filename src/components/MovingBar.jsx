import project1 from '../assets/project1.webp'
import project2 from '../assets/project2.webp'
import project3 from '../assets/project3.webp'
import project4 from '../assets/project4.mp4'
import project5 from '../assets/project5.webp'
import project6 from '../assets/project6.webp'
import project7 from '../assets/project7.webp'
import project8 from '../assets/project8.webp'
import project9 from '../assets/project9.mp4'
import project10 from '../assets/project10.webp'

const MovingBar = () => {
  return (
    <>
      <div className="page3 mt-10 overflow-hidden">
        <div className="card flex flex-wrap justify-center sm:flex-row items-center w-full gap-4">
          
          <div className="cards carder1 flex items-center gap-2 text-sm sm:text-lg md:text-2xl relative">
            <img 
              src={project1} 
              className="w-full h-auto md:w-[270px] md:h-[270px] rounded-2xl" 
              alt="" 
            />
          </div>

          <div className="cards card2 flex items-center gap-2 text-sm sm:text-lg md:text-2xl">
            <img 
              src={project2} 
              className="w-full h-auto md:w-[270px] md:h-[270px] rounded-2xl" 
              alt="" 
            />
          </div>

          <div className="cards card3 flex items-center gap-2 text-sm sm:text-lg md:text-2xl">
            <img 
              src={project3} 
              className="w-full h-auto md:w-[270px] md:h-[270px] rounded-2xl" 
              alt="" 
            />
          </div>

          <div className="cards card4 flex items-center gap-2 text-sm sm:text-lg md:text-2xl">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-auto md:w-[270px] md:h-[270px] object-cover rounded-2xl"
            >
              <source src={project4} type="video/mp4" />
            </video>
          </div>

          <div className="cards card5 flex items-center gap-2 text-sm sm:text-lg md:text-2xl">
            <img 
              src={project5} 
              className="w-full h-auto md:w-[270px] md:h-[270px] rounded-2xl" 
              alt="" 
            />
          </div>

          <div className="cards card6 flex items-center gap-2 text-sm sm:text-lg md:text-2xl">
            <img 
              src={project6} 
              className="w-full h-auto md:w-[270px] md:h-[270px] rounded-2xl" 
              alt="" 
            />
          </div>

          <div className="cards card7 flex items-center gap-2 text-sm sm:text-lg md:text-2xl">
            <img 
              src={project7} 
              className="w-full h-auto md:w-[270px] md:h-[270px] rounded-2xl" 
              alt="" 
            />
          </div>

          <div className="cards card8 flex items-center gap-2 text-sm sm:text-lg md:text-2xl">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-auto md:w-[270px] md:h-[270px] object-cover rounded-2xl"
            >
              <source src={project9} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>

      {/* Moving bar 2 */}
      <div className="page4 mt-10 overflow-hidden">
        <div className="carder flex flex-wrap justify-center sm:flex-row items-center w-full gap-4">
          
          <div className="carders carder1 flex items-center gap-2 text-sm sm:text-lg md:text-2xl">
            <img 
              src={project10} 
              className="w-full h-auto md:w-[270px] md:h-[270px] rounded-2xl" 
              alt="" 
            />
          </div>

          <div className="carders carder2 flex items-center gap-2 text-sm sm:text-lg md:text-2xl">
            <img 
              src={project2} 
              className="w-full h-auto md:w-[270px] md:h-[270px] rounded-2xl" 
              alt="" 
            />
          </div>

          <div className="carders carder3 flex items-center gap-2 text-sm sm:text-lg md:text-2xl">
            <img 
              src={project8} 
              className="w-full h-auto md:w-[270px] md:h-[270px] rounded-2xl" 
              alt="" 
            />
          </div>

          <div className="carders carder4 flex items-center gap-2 text-sm sm:text-lg md:text-2xl">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-auto md:w-[270px] md:h-[270px] object-cover rounded-2xl"
            >
              <source src={project4} type="video/mp4" />
            </video>
          </div>

          <div className="carders carder5 flex items-center gap-2 text-sm sm:text-lg md:text-2xl">
            <img 
              src={project5} 
              className="w-full h-auto md:w-[270px] md:h-[270px] rounded-2xl" 
              alt="" 
            />
          </div>

          <div className="carders carder6 flex items-center gap-2 text-sm sm:text-lg md:text-2xl">
            <img 
              src={project6} 
              className="w-full h-auto md:w-[270px] md:h-[270px] rounded-2xl" 
              alt="" 
            />
          </div>

          <div className="carders carder7 flex items-center gap-2 text-sm sm:text-lg md:text-2xl">
            <img 
              src={project7} 
              className="w-full h-auto md:w-[270px] md:h-[270px] rounded-2xl" 
              alt="" 
            />
          </div>

          <div className="carders carder8 flex items-center gap-2 text-sm sm:text-lg md:text-2xl">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-auto md:w-[270px] md:h-[270px] object-cover rounded-2xl"
            >
              <source src={project9} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovingBar;