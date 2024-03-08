import React from 'react'
import Hero from './Hero'
import Services from './Services'
import Skills from './Skills'
import Portfolio from '../Portfolio/Portfolio'
import Contact from '../Contact/Contact'

const Home = () => {
  return (
    <section className='text-white w-full h-full '>

      
        <Hero/>

        <Services/>
        <Skills/>
        <Portfolio/>
        <Contact/>

    
      
      
      
      </section>
  )
}

export default Home