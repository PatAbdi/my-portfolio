import React from 'react'

const ProjectCards = ({item}) => {
  return (
    <div key={item.id} className='w-full flex flex-col gap-4 items-center justify-center p-2'>

        <div className='w-[400px] h-[400px] bg-slate-500/40 p-3 rounded-md shadow-md shadow-purple-600/40 cursor-pointer '>
          <img className=' w-full h-full object-cover rounded-md' src={item.images} alt=''/>
        </div>

        <div className='text-center text-white'>
          <span className='font-semibold  text-sm'>{item.category}</span>
          <h3 className='text-xl font-bold uppercase'>{item.title}</h3>
          
        </div>


    </div>
  )
}

export default ProjectCards