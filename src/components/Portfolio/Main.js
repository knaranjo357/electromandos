import React from 'react'
import Header from '../Menpages/Header/Main'
import Footer from '../Menpages/Footer/Main'
import Bredcom from '../Menportfolio/Bredcom'
import Latest from '../Menportfolio/Latest'
import Slider from '../Menpages/GlobleSlider/Main'


function Main() {
  return (
   <>
        <div className="page-wrapper">
            <Header/>
            <Bredcom/>
            <Latest/>
            <Slider/>
            <Footer/>
        </div>
   </>
  )
}

export default Main