import React, { useEffect, useState } from 'react';
import Navlinks from '../Data/Data';
import { NavLink } from 'react-router-dom';

const NavMobile = () => {
    const [Navvisible, setNavvisible] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            return window.scrollY > 20 ? setNavvisible(true) : setNavvisible(false);
        })
    })
    
  return (
    <section className= {`${Navvisible ? 'bg-black' : '  bg-black/10 '} md:hidden w-full bg-black -left-1 top-28 gap-6 absolute flex flex-col items-center rounded-md p-3 duration-300 `}>
        
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
    
    </section>
  )
}

export default NavMobile