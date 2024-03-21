import Navlinks from '../Data/Data';
import NavMobile from './NavMobile';
import {motion} from "framer-motion";
import { LuSend } from "react-icons/lu";
import { MdClose } from "react-icons/md";
import { CgMenuRight } from "react-icons/cg";
import { Link} from 'react-router-dom';
import { HashLink as NavLink } from 'react-router-hash-link';
import React, { useEffect, useState } from 'react';

const Header = () => {
    const [Nav, setNav] = useState(false);
    const [Navvisible, setNavvisible] = useState(false);


    // Useeffect For scroll 


    useEffect(() => {
        window.addEventListener('scroll', () => {
            return window.scrollY > 20 ? setNavvisible(true) : setNavvisible(false);
        })
    })


  return (
   <motion.header
   initial = {{y: -100, opacity: 0}}
   animate = {{y:0, opacity: 1}}

   transition={{delay:.5, duration: .3}}
   
   
   className={`${Navvisible ? 'bg-gradient-to-br from-orange-300 to-orange-800' : '  bg-gradient-to-br from-orange-300/20 to-orange-800/30 '} w-full text-white fixed p-3 shadow-lg shadow-orange-900/30 z-50`}>

    <div className='p-2 w-full flex justify-between md:justify-around items-center'>

    {/* Img Header */}

    <div className='w-16'>

        <Link to='/Home'>
        <img className='object-cover' src='../images/Asset 3@2x.png' alt='headerimg'/>
        </Link>

    </div>

    {/* Navlinks */}
    <div className='hidden md:flex gap-4 text-center items-center font-semibold text-lg'>
    
        {
            Navlinks.map((navs, index) => (
                <NavLink className='hover:border-b-2 hover:border-b-orange-700 hover:text-orange-700 hover:-translate-y-1 transition-all duration-300' to={navs.href}
                activeclass ='active'
                spy={true}
                smooth={true}
                duration={500}
                offset={-70}
                key={index}>{navs.display}</NavLink>
            ))
        }
    </div>

    {/* NavMobile */}

        
    
        {
            Nav && (

                <NavMobile/>
            )
        }
    


     {/* NavMenu */}

     <div
      onClick={() => setNav(!Nav)}
      
      className='md:hidden cursor-pointer'>

        {
            Nav ? <MdClose fontSize={25} /> : <CgMenuRight fontSize={25} />
        }
     
     
     </div>

     <div className='hidden md:flex  items-center bg-gradient-to-br from-orange-900 to-orange-800 rounded-md'>

          <button className='w-full flex items-center gap-4 p-4  text-center justify-center font-semibold text-lg cursor-pointer'><Link to='mailto:patprimedesigns@gmail.com'>Let's Talk</Link>
          <LuSend />
          </button>
          </div>
        
    </div>
   </motion.header>
  )
}

export default Header