import React from 'react'
import Header from '../Menpages/Header/Main'
import Bredcom from '../Menpages/Bredcom/Main'
import Aboutcompany from '../Menpages/Aboutcompany/Main'
import Consultations from '../Menpages/Consultations/Main'
import Teem from '../Menpages/Teem/Main'
import Achievement from '../Menpages/Achievement/Main'
import Globleslider from '../Menpages/GlobleSlider/Main'
import Testimonials from '../Menpages/Testimonials/Main'
import Footer from '../Menpages/Footer/Main'

function Main() {
  return (
    <>
        <div className="page-wrapper">
            <Header/>
            <Bredcom/>
            <Aboutcompany/>
            <Consultations/>
            <Teem/>
            <Achievement/>
            <Globleslider/>
            <Testimonials/>
            <Footer/>
        </div>
    </>
  )
}

export default Main