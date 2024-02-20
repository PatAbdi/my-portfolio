import React from 'react';
import Home from '../Pages/Home/Home';
import About from '../Pages/About/About';
import Contact from '../Pages/Contact/Contact';
import Portfolio from '../Pages/Portfolio/Portfolio';
import { Route, Routes, Navigate } from 'react-router-dom';

const Routers = () => {
  return (
    <div>
      
      <Routes>
        <Route path='/' element={<Navigate to= '/home'/>}/>

        < Route exact path='/home' element={<Home/>}/>
        < Route path='/about' element={<About/>}/>
        < Route path='/portfolio' element={<Portfolio/>}/>
        < Route path='/contact' element={<Contact/>}/>
        

      </Routes>
      


      </div>
  )
}

export default Routers