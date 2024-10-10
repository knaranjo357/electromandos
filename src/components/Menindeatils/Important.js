import React from 'react'
import CountUp from 'react-countup';


function Important() {
  return (
    <>
        <section className="service-three">
            <div className="container">
                <div className="row gutter-y-60">
                <div className="col-md-12 col-lg-6">
                    <div className="service-three__image">
                    <img src="assets/images/resources/service-3-1.png"  />
                    <div className="service-three__image__caption">
                        <h3 className="count-box service-three__image__caption__count">
                        <CountUp end={25} duration={2}>    </CountUp>
                        </h3>
                       
                        <p className="service-three__image__caption__text">
                          Years Of Experience
                        </p>
                    </div>
                    
                    <div className="service-three__image__check">
                        <i className="flaticon-tick" />
                        <span>Quality Insurance</span>
                    </div>
                 
                    </div>
                   
                </div>
               
                <div className="col-md-12 col-lg-6">
                    <div className="service-three__content">
                    <div className="sec-title text-start">
                        <p className="sec-title__tagline">Important of insurance</p>
                       
                        <h3 className="sec-title__title">
                        Why the role and importance of insurance explained{" "}
                        </h3>
                        
                    </div>
                   
                    <ul className="service-three__list list-unstyled">
                        <li>
                        <i className="fas fa-check" />
                        <h3 className="service-three__list__title">
                            <a href="#">Provide safety and security</a>
                        </h3>
                        
                        </li>
                        <li>
                        <i className="fas fa-check" />
                        <h3 className="service-three__list__title">
                            <a href="#">Generate financial resources</a>
                        </h3>
                        
                        </li>
                        <li>
                        <i className="fas fa-check" />
                        <h3 className="service-three__list__title">
                            <a href="#">Life insurance encourages</a>
                        </h3>
                        
                        </li>
                        <li>
                        <i className="fas fa-check" />
                        <h3 className="service-three__list__title">
                            <a href="#">Promotes economic growth</a>
                        </h3>
                        
                        </li>
                        <li>
                        <i className="fas fa-check" />
                        <h3 className="service-three__list__title">
                            <a href="#">Source of collecting funds</a>
                        </h3>
                        
                        </li>
                        <li>
                        <i className="fas fa-check" />
                        <h3 className="service-three__list__title">
                            <a href="#">Spreading of risk &amp; medical</a>
                        </h3>
                        
                        </li>
                    </ul>
                    
                    </div>
                    
                </div>
               
                </div>
              
            </div>
        </section>
    </>
  )
}

export default Important