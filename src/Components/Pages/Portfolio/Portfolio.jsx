import React from 'react';
import Projects from './Projects';

const Portfolio = () => {
  return (
    <section className='w-full h-full bg-slate-700' id='Portfolio'>
      <div className='flex flex-col gap-2 items-center justify-between'>
        <div className='text-center text-lg p-2 text-white'>
          <h3 className='text-3xl font-bold p-2'>Portfolio</h3>
          <span className='font-semibold text-2xl'>My Latest Work</span>
          <p className='p-2 leading-8'>With the xcellence of time and the opportunity to create and discover new things you get to create beautiful & user-friendly work, here is a look at my latest works.</p>
        </div>

        <Projects/>

      </div>
      
      
      
    
    
    
    </section>
  )
}

export default Portfolio