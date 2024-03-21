import React from 'react';
import { Link } from 'react-router-dom';
import {motion} from "framer-motion";

const ProjectCards = ({item}) => {
  return (
    <motion.div Layout
    
    key={item.id} className='w-full flex flex-col  gap-4 items-center justify-center p-2'>

      <div className='h-[400px] w-[400px] group relative flex items-center justify-center overflow-hidden cursor-pointer bg-gradient-to-br from-orange-900/30 to-orange-800/30 shadow-md shadow-orange-600/60 rounded-md'>
          <div className="h-96 w-96">
          <img className=' w-full h-full object-cover rounded-md group-hover:scale-125 transition-transform duration-500' src={item.images} alt=''/>
          </div>

          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-orange-800/60 group-hover:from-orange-500/20
           group-hover:via-orange-600/50 group-hover:to-orange-900/80 transition-transform">

           </div>
           <div className=' w-11/12 absolute top-4 left-4 flex items-center justify-between'>

           <Link target='_blank' className='hover:-translate-y-2 hover:bg-white hover:text-orange-600 transition-transform duration-300 bg-orange-500 p-3 rounded-full' to={item.links}>{item.icon}</Link>

           <h2 className='p-1 text-xs font-semibold bg-orange-900/70 rounded-md'>{item.category}</h2>
           </div>


          <div className="absolute inset-0 flex flex-col item-center justify-center px-9 text-center translate-y-[30%]
          group-hover:translate-y-[10%] transition-transform duration-500
          ">

          <h3 className='text-xl font-bold uppercase'>{item.title}</h3>
          
          </div>

        </div>



    </motion.div>
  )
}

export default ProjectCards