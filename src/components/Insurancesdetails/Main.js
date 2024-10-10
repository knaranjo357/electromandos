import React from 'react'
import Header from '../Menpages/Header/Main'
import Footer from '../Menpages/Footer/Main'
import Bredcom from '../Menindeatils/Bredcom'
import Important from '../Menindeatils/Important'
import Take from '../Menindeatils/Take'
import Offer from '../Meninsurance/Offer'
import Claim from '../Menindeatils/Claim'
import Slider from '../Menpages/GlobleSlider/Main'


function Main() {
  return (
    <>
        <div className="page-wrapper">
            <Header/>
            <Bredcom/>
            <Important/>
            <Take/>
            <Offer/>
            <Claim/>
            <Slider/>
            <Footer/>
        </div>
    </>
  )
}

export default Main