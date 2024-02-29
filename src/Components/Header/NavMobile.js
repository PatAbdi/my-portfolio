import Navlinks from '../Data/Data';
import {motion, spring} from "framer-motion";
import { NavLink } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

const NavMobile = () => {
    const [Navvisible, setNavvisible] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            return window.scrollY > 20 ? setNavvisible(true) : setNavvisible(false);
        })
    })
    
  return (
    <motion.section

    initial = {{y: 15, opacity: 0}}
   animate = {{y:0, opacity: 1}}
   transition={{delay:.1, type: spring, duration: .3}}
    
    className= {`${Navvisible ? 'bg-black' : '  bg-black/70 '} md:hidden w-full -left-1 top-28 gap-6 absolute flex flex-col items-center rounded-md p-3 duration-300 `}>
        
        {
            Navlinks.map((navs, index) => (
                <NavLink to={navs.path} key={index} className='w-full
                 text-center text-lg   font-semibold p-3 cursor-pointer
                 hover:text-orange-700 hover:border-l-2 hover:border-l-white
                  hover:bg-gray-200/10 hover:translate-x-2 duration-300 hover:px-4'>
                    {navs.display}
                    </NavLink>
            ))
        }
    
    </motion.section>
  )
}

export default NavMobile