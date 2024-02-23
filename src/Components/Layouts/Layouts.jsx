import React, { Fragment } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Routers from '../Routers/Routers';
import BackTop from '../BackTop/BackTop';

const Layouts = () => {
  return (

    <Fragment>
        <Header/>
        <div>
          
            <Routers/>
        </div>

        <Footer/>

        <BackTop/>

    </Fragment>
  )
}

export default Layouts