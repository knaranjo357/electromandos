import React from 'react'
import { Link } from 'react-router-dom'

function Years() {
  return (
    <>
        
        <section className="team-three">
            <div className="container">
            <div className="row gutter-y-30">
                <div className="col-md-12 col-lg-6">
                <div className="team-three__content">
                    <div className="sec-title text-start">
                    <p className="sec-title__tagline">meet our team</p>
                    
                    <h3 className="sec-title__title">
                        25 Years of experience in insurance services
                    </h3>
                   
                    </div>
                    
                    <div className="team-three__text">
                    We denounce with righteous indignation and dislike men beguiled to
                    and demoralized by the charms of pleasure the moment desire is
                    they they cannot foresee the pain and trouble that are bound
                    </div>
                  
                    <div className="team-three__btns">
                    <Link to="/contact" className="thm-btn thm-btn--three team-three__btn" >
                        <span>
                        Contact Me
                        <i className="far fa-arrow-right" />
                        </span>
                    </Link>
                    
                    </div>
                   
                </div>
               
                </div>
               
                <div className="col-md-12 col-lg-6">
                <ul className="list-unstyled about-one__progress">
                    <li>
                    <h3 className="about-one__progress__title">Quality Security</h3>
                   
                    <div className="bar">
                        <div className="bar-inner count-bar" data-percent="89%" style={{ width: "89%" }}>
                        <div className="count-text">89%</div>
                        </div>
                    </div>
                    </li>
                    <li>
                    <h3 className="about-one__progress__title">Satisfaction Rate</h3>
                   
                    <div className="bar">
                        <div className="bar-inner count-bar" data-percent="73%" style={{ width: "73%" }}>
                        <div className="count-text">73%</div>
                        </div>
                    </div>
                    </li>
                    <li>
                    <h3 className="about-one__progress__title">Marketing</h3>
                   
                    <div className="bar">
                        <div className="bar-inner count-bar" data-percent="94%" style={{ width: "94%" }}>
                        <div className="count-text">94%</div>
                        </div>
                    </div>
                    </li>
                    <li>
                    <h3 className="about-one__progress__title">Development</h3>
                   
                    <div className="bar">
                        <div className="bar-inner count-bar" data-percent="86%" style={{ width: "86%" }}>
                        <div className="count-text">86%</div>
                        </div>
                    </div>
                    </li>
                </ul>
              
                </div>
               
            </div>
          
            </div>
           
        </section>
        

    </>
  )
}

export default Years