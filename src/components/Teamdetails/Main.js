import React from 'react'
import Header from '../Menpages/Header/Main'
import Footer from '../Menpages/Footer/Main'
import Bredcom from '../Menteamdetails/Bredcom'
import Aboutteem from '../Menteamdetails/Aboutteem'
import Years from '../Menteamdetails/Years'
import Slider from '../Menpages/GlobleSlider/Main'

function Main() {
  return (
    <>
        <div className="page-wrapper">
                <Header/>
                <Bredcom/>
                <Aboutteem/>
                <Years/>
                <Slider/>
                <Footer/>
        </div>
    </>
  )
}

export default Main