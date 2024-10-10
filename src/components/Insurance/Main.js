import React from 'react'
import Header from '../Menpages/Header/Main'
import Footer from '../Menpages/Footer/Main'
import Bredcom from '../Meninsurance/Bredcom'
import Whatweoffer from '../Meninsurance/Whatweoffer'
import Offer from '../Meninsurance/Offer'
import Slider from '../Menpages/GlobleSlider/Main'
import Proyectos from '../Menportfolio/proyectos'
function Main() {
  return (
    <>
        <div className="page-wrapper">

            <Header/>
            <Bredcom/>
            <Whatweoffer/>
            <Proyectos/>
            <Offer/>
            <Slider/>
            <Footer/>

        </div>
    </>
  )
}

export default Main