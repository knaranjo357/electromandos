import React from 'react'
import Claim from '../Menhomethree/Claim'
import Company from '../Menhomethree/Company'
import Offer from '../Menhomethree/Offer'
import People from '../Menhomethree/People'
import Slider from '../Menhomethree/Slider'
import Take from '../Menhomethree/Take'
import Footer from '../Menpages/Footer/Main'
import Header from '../Menpages/Header/Main'
import Testimonials from '../Menpages/Testimonials/Main'
import Globleslider from '../Menpages/GlobleSlider/Main'

function Main() {
  return (
    <>
        <div className="page-wrapper">
            <Header/>
            <Slider/>
            <Offer/>
            <Company/>
            <Take/>
            <Claim/>
            <People/>
            <Testimonials/>
            <Globleslider/>
            <Footer/>

        </div>
    </>
  )
}

export default Main