import React from 'react';
import { social } from '../Data/Data';
import { Logos } from '../Data/Data';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='text-white w-full py-12 md:py-1 p-2 bg-gradient-to-br from-orange-900/70 to-orange-800 h-full '>
      <div className='mx-auto'>

        <div className='flex flex-col md:flex-row gap-4 items-center justify-around'>

        <div className='w-16 py-3'>

          {
            Logos.map((logs, index) => (

              <img className='object-cover' key={index} src={logs.logimg} alt=''/>
            ))
            
          }
          </div>

          <div className='flex space-x-6 py-3 items-center justify-center'>
            {
              social.map((soc, index) => {
                const {href, icon} = soc;
                return <Link target='_blank' className='hover:-translate-y-3 hover:bg-white hover:text-orange-600 transition-transform duration-300 bg-orange-500 p-3 rounded-full' key={index} to={href}>{icon}</Link>
              })
            }
          </div>

         

          <div>
            <p> &copy; 2024 PatPrimeDesigns,  All Rights Reserved.</p>
          </div>

        </div>

      </div>
    
      
      </footer>
  )
}

export default Footer