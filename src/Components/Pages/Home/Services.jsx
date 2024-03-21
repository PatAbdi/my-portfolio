import React from 'react';
import {motion} from "framer-motion";
import { services } from '../../Data/Data';


const Services = () => {
  return (
    <section className='w-full'>
        <div className='w-full flex flex-col items-center justify-center'>


                <motion.div 
                initial = {{y:-50, opacity:0}}
                animate = {{y:0, opacity: 1}}
                transition={{duration: .5, delay: .5}}
                
                
                className='text-orange-500 text-center'>

                    <h2 className='text-2xl font-bold p-2'>My Services</h2>
                    <p className='text-lg p-2'>What i Offer my Clients.</p>

                </motion.div>

                <div className=' w-full h-full flex flex-col md:flex-row item-center justify-center gap-7 p-3 text-orange-500'>

                {
                       services.map((serv, index) =>
                        {
                            const{icon,title, desc} = serv;

                            return <motion.div
                            initial = {{y:-50, opacity:0}}
                            animate = {{y:0, opacity: 1}}
                            transition={{duration: .5, delay: .5}}
                            
                            className='bg-gradient-to-br from-orange-900/70 to-orange-800 w-full h-72 md:h-80 md:w-3/12 rounded-xl p-2 shadow-md shadow-pink-600/30
                            group hover:bg-gradient-to-br hover:from-orange-500/30 hover:to-orange-900/60 hover:cursor-pointer tranisition-colors duration-500 group
                            
                            '>
                                <div className='translate-y-0 group-hover:-translate-y-5 transition-transform duration-500'>

                               

                                 <div className='flex items-center p-5 mt-6'>

                                    <div key={index} className='p-3 text-[26px] text-white rounded-full bg-orange-500'>

                                    {icon} </div>

                                    </div>
                                    <h4 key={index} className='p-3 md:tracking-wide text-orange-500 text-start font-bold text-xl'>{title}</h4>


                                    <p key={index} className=' p-2 text-start text-lg text-white'>{desc}</p>

                                
                               



                                </div>
                                </motion.div>
                        })
                    }

                </div>

        </div>

    </section>
  )
}
export default Services