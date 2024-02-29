import React from 'react';
import {motion} from "framer-motion";

const ProjectCards = ({item}) => {
  return (
    <motion.div

   
    
    
    key={item.id} className='w-full flex flex-col  gap-4 items-center justify-center p-2'>

        <motion.div 
        
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -10, opacity: 0 }}
        transition={{ duration: 0.2 }}
        className='w-[400px] h-[400px] bg-slate-500/40 p-3 rounded-md shadow-md shadow-purple-600/40 cursor-pointer '>
          <img className=' w-full h-full object-cover rounded-md' src={item.images} alt=''/>
        </motion.div>

        <div className='text-center text-white'>
          <span className='font-semibold  text-sm'>{item.category}</span>
          <h3 className='text-xl font-bold uppercase'>{item.title}</h3>
          
        </div>


    </motion.div>
  )
}

export default ProjectCards