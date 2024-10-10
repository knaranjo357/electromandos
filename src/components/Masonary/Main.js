import React from 'react'
import Header from '../Menpages/Header/Main'
import Footer from '../Menpages/Footer/Main'
import Bredcom from '../Menmasonary/Bredcom'
import Project from '../Menmasonary/Project'
import Slider from '../Menpages/GlobleSlider/Main'

function Main() {
  return (
    <>
        <div className="page-wrapper">
            <Header/>
            <Bredcom/>
            <Project/>
            <Slider/>
            <Footer/>
        </div>
    </>
  )
}

export default Main