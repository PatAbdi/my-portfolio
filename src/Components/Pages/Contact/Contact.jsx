import React from 'react';
import { social } from '../../Data/Data';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section className='w-full h-full' id='Contact'>
      <div className='w-full flex flex-col md:flex-row items-center justify-center gap-6 pt-28 p-5' >

        <motion.div 
        
        initial={{x:-50, opacity:0}}
        animate={{x:0, opacity:1}}
        transition={{duration:.5, delay:.5}}

        className='w-9/12 h-[350px] rounded-md'>
          <img className=' w-full h-full object-cover rounded-md' src='../images/jess-bailey-q10VITrVYUM-unsplash.jpg' alt=''/>
        </motion.div>

        <motion.div
         
         initial={{x:50, opacity:0}}
         animate={{x:0, opacity:1}}
         transition={{duration:.5, delay:.5}}
        
        
        className='w-9/12  flex flex-col items-center justify-evenly bg-gradient-to-tr from-orange-700 to-orange-500 rounded-md p-6'>

          <div className='flex flex-col items-center gap-4'>
            <h1 className='text-xl font-bold'>Contact Me</h1>
            <p className='text-center p-3'>Do you have a project you to collaborate, reach out so that we can make it work.</p>
          </div>

          <div className='flex flex-col items-center gap-4'>

          <span className='text-center p-3'>You can reach out through my email address</span>
          <Link className='text-center p-3 font-bold uppercase' to='mailto:patprimedesigns@gmail.com'>PatPrimeDesigns@gmail.com</Link>

          <div className='flex space-x-6 p-6 items-center justify-center'>
            {
              social.map((soc, index) => {
                const {href, icon} = soc;
                return <Link target='_blank' className='hover:-translate-y-3 hover:bg-white hover:text-orange-600 transition-transform duration-300 bg-orange-500 p-3 rounded-full' key={index} to={href}>{icon}</Link>
              })
            }
          </div>

          </div>

        </motion.div>

      </div>

    </section>
  )
}

export default Contact