import React from 'react'
import Hero from './Hero'
import Services from './Services'
import Skills from './Skills'
import Portfolio from '../Portfolio/Portfolio'

const Home = () => {
  return (
    <section className='text-white w-full h-full '>

      
        <Hero/>

        <Services/>
        <Skills/>
        <Portfolio/>

    
      
      
      
      </section>
  )
}

export default Home