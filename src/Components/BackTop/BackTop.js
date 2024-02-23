import React, {useState, useEffect} from 'react';
import { IoIosArrowUp } from "react-icons/io";
import {animateScroll as scroll} from 'react-scroll';



const BackTop = () => {

    const [show, setshow] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            return window.scrollY > 600 ? setshow(true) :
            setshow(false);
        });
    });

    const scrolltop = ()  => {
        scroll.scrollToTop();
    };

  return (
    show && (
        <button
        onClick={() => scrolltop()}
        className='bg-gray-700 w-12 h-12 hover:bg-orange-700 text-white rounded-full
         fixed right-8 bottom-24 flex items-center justify-center transition-all duration-300'>

        <IoIosArrowUp className='w-6 h-6 ' />
        
        </button>
    )
  )
}

export default BackTop