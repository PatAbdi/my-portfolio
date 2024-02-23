import React from 'react';
import Typewriter from 'typewriter-effect';
import { heroinfo } from '../../Data/Data';

const Hero = () => {
  return (
    <div className='top-0 h-[80vh] m-auto flex flex-col md:flex-row justify-center text-center'>
        
            {
                heroinfo.map((herdata, index) => (
        <div className='flex flex-col gap-4 p-4 justify-start mt-32 items-center'>
                    <h1>
                        <Typewriter key={index} options={{strings: [`${herdata.text}`, `${herdata.name}`,`${herdata.post}`,`${herdata.artist}` ],
                    
                    autoStart: true, loop: true
                    }}/>
                    </h1>

                    <p>{herdata.desc}</p>

                    
</div>
                ))
            }


            <div className='w-full rounded-3xl'>

                {/* <img className=' z-40 rounded-3xl object-cover' src='../images/Pascaline@1,25x.png' alt='Hero Cover' /> */}

            </div>

        
        </div>
  )
}

export default Hero