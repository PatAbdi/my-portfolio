import {motion} from "framer-motion";
import ProjectCards from './ProjectCards';
import { portfolios } from '../../Data/Data';
import { Navprojects } from '../../Data/Data';
import React, { useEffect, useState } from 'react';

const Projects = () => {

  const [item, setitems] = useState({title: 'all'});
  const [projs, setprojects] = useState([]);
  const [active, setActive] = useState(0);


  useEffect(() => 
  {
    if (item.title === 'all')
    {
      setprojects(portfolios)
    }

    else
    {
      const newProj = portfolios.filter((project) =>
      {
        return project.category.toLowerCase() === item.title
      });

      setprojects(newProj);
    }
  }, [item]);

  const handleClick = (e, index) => 
  {
    setitems({title: e.target.textContent.toLowerCase()}
    )
    
  setActive(index);
  }


  return  <div>
      
      <nav className='mb-12 mx-auto max-w-xl'>
        <ul
        
       
        className='flex flex-col gap-2 md:gap-6 items-center justify-evenly md:flex-row'>
          {
            Navprojects.map((item, index) => 

          {
            return <li
            onClick={(e) =>{
              handleClick(e, index);
            }}

            className={`${active === index ? 'text-white border-b-2 border-orange-500 duration-300 bg-orange-900 rounded-md font-bold' : ''}  text-orange-500 font-medium cursor-pointer p-2`}
            key={index}>{item.title}</li>
          })
          }
        </ul>
      </nav>

      <motion.section
      Layout
     
      
      className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {
          projs.map((item) => {
            return <ProjectCards item={item} key={item.id}/>;
          })
        }
      </motion.section>
    </div>
  
}

export default Projects