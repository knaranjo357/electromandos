import React from 'react'
import Header from '../Menpages/Header/Main'
import Bredcom from '../MenTeam/Bredcom'
import Aboutcompany from '../MenTeam/Aboutcompany'
import Ourteem from '../MenTeam/Ourteem'
import Free from '../MenTeam/Free'
import Proyectos from '../Menportfolio/proyectos'
import Slider from '../Menpages/GlobleSlider/Main'
import Footer from '../Menpages/Footer/Main'

function Main() {
  return (
    <>
        <div className="page-wrapper">
            <Header/>
            <Bredcom/>
            <Aboutcompany/>
            <Proyectos/>
            <Ourteem/>
            <Free/>
            <Slider/>
            <Footer/>
        </div>
    </>
  )
}

export default Main