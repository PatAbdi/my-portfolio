import Navlinks from '../Data/Data';
import {motion, spring} from "framer-motion";
import React, { useEffect, useState } from 'react';
import { HashLink as NavLink } from 'react-router-hash-link';

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
    
    className= {`${Navvisible ? 'bg-gradient-to-br from-orange-300 to-orange-800' : '  bg-gradient-to-br from-orange-400 to-orange-800 '} md:hidden w-full -left-1 top-28 gap-6 absolute flex flex-col items-center rounded-md p-3 duration-300 `}>
        
        {
            Navlinks.map((navs, index) => (
                <NavLink to={navs.href} key={index} className='w-full
                 text-center text-lg   font-semibold p-3 cursor-pointer
                 hover:text-white hover:border-l-2 hover:border-l-white
                  hover:bg-orange-900/50 hover:translate-x-2 duration-300 hover:px-4 rounded-md'>
                    {navs.display}
                    </NavLink>
            ))
        }
    
    </motion.section>
  )
}

export default NavMobile