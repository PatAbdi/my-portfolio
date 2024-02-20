import Navlinks from '../Data/Data';
import NavMobile from './NavMobile';
import React, { useEffect, useState } from 'react';
import { LuSend } from "react-icons/lu";
import { MdClose } from "react-icons/md";
import { CgMenuRight } from "react-icons/cg";
import { Link, NavLink } from 'react-router-dom';

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
   <header className={`${Navvisible ? 'bg-black' : '  bg-black/10 '} w-full text-white fixed p-3 z-50`}>

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
                <NavLink className='hover:border-b-2 hover:border-b-orange-700 hover:text-orange-700 hover:-translate-y-1 transition-all duration-300' to={navs.path} key={index}>{navs.display}</NavLink>
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

     <div className='hidden md:flex w-1/12 items-center bg-gray-600 rounded-md'>

          <button className='w-full flex items-center gap-4 p-4 text-center justify-center font-semibold text-lg cursor-pointer'><Link to='/Contact'>Let's Talk</Link>
          <LuSend />
          </button>
          </div>
        
    </div>
   </header>
  )
}

export default Header