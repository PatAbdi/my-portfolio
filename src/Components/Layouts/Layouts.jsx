import React, { Fragment } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Routers from '../Routers/Routers';

const Layouts = () => {
  return (

    <Fragment>
        <Header/>
        <div>
          
            <Routers/>
        </div>

        <Footer/>

    </Fragment>
  )
}

export default Layouts