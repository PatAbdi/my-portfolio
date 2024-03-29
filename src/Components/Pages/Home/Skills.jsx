import React from 'react';
import {motion} from "framer-motion";
import { Designskills, Developmentskills } from '../../Data/Data';

const Skills = () => {
  return (
    <section className='p-6' id='about'>

    <div className='w-full flex flex-col items-center gap-5'>

        <motion.div
        
        initial={{y:-50, opacity:0}}
        animate={{y:0, opacity:1}}
        transition={{duration:.3, delay:.4}}
        
        className='text-center w-full p-5 text-orange-500'>

          <h4 className='font-bold text-2xl p-3 text-orange-500'>Skills & Proficiency</h4>
          <p className='font-medium text-lg p-2'>With every advancement of technology requires as to be at per with the tecknologies here are a few skills that am procient</p>
       
        </motion.div>

    </div>

     {/* Skills Section */}

     <div className='w-full flex flex-col md:flex-row gap-7 items-center justify-between p-5'>
        
        <div className=' flex w-full  flex-col p-3 text-orange-500'>
          <span className='font-bold text-2xl italic p-3 '>Design Skills</span>

          {
            Designskills.map((design, index) =>
            {

           const{title, proficient} = design;

         return <div className='flex  flex-col gap-5 p-4'>


            <div className='flex justify-between px-1'>
              <p className='font-bold text-lg'>{title}</p>

              <motion.span
            initial={{x:-10, opacity:0}}
            animate={{x:0, opacity:1}}
            transition={{duration:.3, delay:.4}}
           
           >{proficient} </motion.span>
            </div>
            <span key={index} className='w-full h-2 bg-black inline-flex rounded-md'>

              <motion.span
              
              animate={{
                width: `${proficient}`

              }}

              transition={{
                duration: 2
              }}
              className= 'w-[20%] bg-gradient-to-br from-orange-400 to-orange-800 rounded-md'></motion.span>
            </span>
          </div>
           })
          }


        </div>


        <div className=' flex w-full  flex-col p-3 text-orange-500'>
          <span className='font-bold text-2xl italic p-3 '>Development Skills</span>


          {
            Developmentskills.map((develop, index) =>
            {

           const{title,proficient} = develop;

           return <div className='flex  flex-col gap-5 p-4'>


           <div className='flex justify-between px-1'>
             <p className='font-bold text-lg'>{title}</p>

           <motion.span
            initial={{x:10, opacity:0}}
            animate={{x:0, opacity:1}}
            transition={{duration:.3, delay:.4}}
           
           >{proficient} </motion.span>
           </div>
           <span key={index} className='w-full h-2 bg-black inline-flex rounded-md'>

             <motion.span
              
             
             animate={{
               width: `${proficient}`
               

             }}

             transition={{
               duration: 2
             }}
             className= 'w-[20%] bg-gradient-to-br from-orange-400 to-orange-800 rounded-md'></motion.span>
           </span>
         </div>
           })
          }
        </div>



      </div>

    </section>
  )
}

export default Skills