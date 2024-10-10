import React from 'react'
import Header from '../Menpages/Header/Main'
import Footer from '../Menpages/Footer/Main'
import Bredcom from '../Menfaq/Bredcom'
import First from '../Menfaq/First'
import Second from '../Menfaq/Second'
import Free from '../MenTeam/Free'
import Slider from '../Menpages/GlobleSlider/Main'


function Main() {
  return (
    <>

        <div className="page-wrapper">
            
            <Header/>
            <Bredcom/>
            <First/>
            <Second/>
            <Free/>
            <Slider/>
            <Footer/>

        </div>
    
    </>
  )
}

export default Main