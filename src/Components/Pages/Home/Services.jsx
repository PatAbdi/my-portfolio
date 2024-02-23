import React from 'react';
import { services } from '../../Data/Data';


const Services = () => {
  return (
    <section className='w-full bg-slate-500'>
        <div className='w-full flex flex-col items-center justify-center'>


                <div className='text-white text-center'>

                    <h2 className='text-2xl font-bold p-2'>My Services</h2>
                    <p className='text-lg p-2'>What i Offer my Clients.</p>

                </div>

                <div className='flex flex-col md:flex-row item-center justify-center gap-7 p-3'>

                {
                       services.map((serv, index) =>
                        {
                            const{icon,title, desc} = serv;

                            return <div className='bg-gray-700 w-full md:w-3/12 rounded-xl p-3 shadow-md shadow-pink-600/30'>

                                 <div className='flex items-center gap-3 p-1 pb-18 md:pb-24 text-center justify-center'>
                                {/* <img key={index} className='rounded-lg' src={servimg} alt='serviceimg'/> */}

                                    <div key={index} className=' top-5 p-3 text-[26px] text-white rounded-full bg-orange-500 ml-2'>

                                    {icon} </div>

                                    <h4 key={index} className='p-3 md:p-0 md:tracking-wide text-orange-500 text-center font-bold text-xl'>{title}</h4>
                                    </div>


                                    <p key={index} className=' p-2 text-center text-lg text-white'>{desc}</p>

                                
                               



                                </div>
                        })
                    }

                </div>

        </div>

    </section>
  )
}
export default Services