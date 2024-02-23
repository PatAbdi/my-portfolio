import React, { useEffect, useState } from 'react';
import { Navprojects } from '../../Data/Data';
import { portfolios } from '../../Data/Data';
import ProjectCards from './ProjectCards';

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
        <ul className='flex flex-col gap-2 md:gap-6 items-center justify-evenly md:flex-row'>
          {
            Navprojects.map((item, index) => 

          {
            return <li
            onClick={(e) =>{
              handleClick(e, index);
            }}

            className={`${active === index ? 'text-orange-700' : ''} cursor-pointer m-4`}
            key={index}>{item.title}</li>
          })
          }
        </ul>
      </nav>

      <section>
        {
          projs.map((item) => {
            return <ProjectCards item={item} key={item.id}/>;
          })
        }
      </section>
    </div>
  
}

export default Projects