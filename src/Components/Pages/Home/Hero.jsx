import {motion} from 'framer-motion';
import Typewriter from 'typewriter-effect';
import { heroinfo } from '../../Data/Data';
import React, {  useRef, useState } from 'react';


const rotate_range = 32.5;
const half_rotate_range = 32.5/2;

const Hero = () => {

    const [rotateX, setRotateX] = useState(0);
const [rotateY, setRotateY] = useState(0);

const ref = useRef(null);


const handleMouseMove = (e) => {
  if (!ref.current) return;

  const rect = ref.current.getBoundingClientRect();

  const width = rect.width;
  const height = rect.height;

  const mouseX = (e.clientX - rect.left) * rotate_range;
  const mouseY = (e.clientY - rect.top) * rotate_range;

  const rY = mouseX / width - half_rotate_range;
  const rX = (mouseY / height - half_rotate_range) * -1;

  setRotateX(rX);
  setRotateY(rY);
};

const handleMouseLeave = () => {
  if (!ref.current) return;
  setRotateX(0);
  setRotateY(0);
};


 
  return (
    <div  id='home'
    
    style={{transformStyle: "preserve-3d",}}
    
    
    className='top-0 h-[80vh] m-auto flex flex-col md:flex-row justify-center text-center p-5 bg-gradient-to-br from-orange-900/70 to-orange-800'>
        
            {
                heroinfo.map((herdata, index) => (
               <motion.div 
               initial={{y:-50, opacity:0}}
               animate={{y:0, opacity:1}}
               transition={{duration:.5, delay:.5}}
               
               className='flex flex-col gap-9 p-4 justify-center mt-32 items-center'>
                    <h1 className='text-2xl font-bold'>
                        <Typewriter key={index} options={{strings: [`${herdata.text}`, `${herdata.name}`,`${herdata.post}`,`${herdata.artist}` ],
                    
                    autoStart: true, loop: true
                    }}/>
                    </h1>

                    <p className='text-xl font-medium'>{herdata.desc}</p>

                    
                </motion.div>
                ))
            }

            <div className='flex justify-center items-center w-full h-80 md:mt-72 lg:h-[500px] lg:mt-60 '>

            <motion.div 
                
            initial={{x:50, opacity:0}}
            transition={{duration:.6, delay:.5}}
                
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}

            style={{
              
              transform: "translateZ(75px)",
              transformStyle: "preserve-3d",}}

            animate={{
              rotateX, rotateY,
              x:0, opacity:1
            }}

            className='relative w-9/12 h-5/6 md:w-11/12 lg:w-6/12  lg:h-full flex items-center justify-center bg-gradient-to-br from-pink-500/5 to-pink-600/5 shadow-2xl shadow-black/20 rounded-3xl'
            > 
            
            <motion.div  style={{ transform: "translateZ(75px)", transformStyle: "preserve-3d",}}
             className='absolute inset-1 place-content-center  cursor-pointer '>

                <img className='object-cover ' src='../images/Pascaline@1,25x.png' alt='Hero Cover' />

            </motion.div>

            </motion.div>
            </div>

        
        </div>
  )
}

export default Hero