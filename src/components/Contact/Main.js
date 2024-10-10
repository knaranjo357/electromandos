import React from 'react'
import Header from '../Menpages/Header/Main'
import Footer from '../Menpages/Footer/Main'
import Bredcom from '../Mencontact/Bredcom'
import Work from '../Mencontact/Work'
import Slider from '../Menpages/GlobleSlider/Main'

function Main() {
  return (
    <>
        <div className="page-wrapper">
            <Header/>
            <Bredcom/>
            <Work/>
            <Slider/>
            <Footer/>
        </div>
    </>
  )
}

export default Main