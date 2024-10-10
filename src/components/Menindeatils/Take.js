import React from 'react'
import { Link } from 'react-router-dom'

function Take() {
  return (
    <>
        <section className="about-two" style={{ backgroundImage: "url(assets/images/background/about-two-bg-1-1.jpg)"}} >
            <div className="container">
                <div className="row gutter-y-60">
                <div className="col-md-12 col-lg-6 d-flex">
                    <div className="my-auto">
                    <div className="about-two__content">
                        <div className="sec-title text-start">
                        <p className="sec-title__tagline">Insurance Benefits</p>
                        
                        <h3 className="sec-title__title">
                            Take our better insurance benefits opportunity
                        </h3>
                       
                        </div>
                        
                        <ul className="list-unstyled about-two__list">
                        <li>
                            <i className="fas fa-check" />
                            <div className="about-two__list__content">
                            <h3 className="about-two__list__title">
                                Provides Protection
                            </h3>
                            
                            <p className="about-two__list__text">
                                Insurance coverage does reduce the impact of loss that on
                                bears in perilous situations. It provides monetary
                                reimbursement
                            </p>
                            
                            </div>
                            
                        </li>
                        <li>
                            <i className="fas fa-check" />
                            <div className="about-two__list__content">
                            <h3 className="about-two__list__title">
                                Provides Certainty Risk Sharing
                            </h3>
                            
                            <p className="about-two__list__text">
                                Demoralized by the charms of pleasure the moment desires
                                they they cannot foresee the pain and trouble that bound
                            </p>
                            
                            </div>
                            
                        </li>
                        <li>
                            <i className="fas fa-check" />
                            <div className="about-two__list__content">
                            <h3 className="about-two__list__title">
                                Economic Growth Capital Generation
                            </h3>
                            
                            <p className="about-two__list__text">
                                The fund generated from the various premiums acts as a
                                pooled investment for the insurance company insurers
                            </p>
                            
                            </div>
                            
                        </li>
                        </ul>
                        
                    </div>
                    
                    </div>
                    
                </div>
                
                <div className="col-md-12 col-lg-6">
                    <div className="about-two__image">
                    <img src="assets/images/resources/about-2-1.jpg" className="img-fluid" alt="" />
                    </div>
                   
                </div>
                
                </div>
                
            </div>
        </section>

        <section className="cta-three">
            <div className="container">
                <div className="cta-three__inner" style={{ backgroundImage: "url(assets/images/background/cta-three-bg-1-1.jpg)"}} >
                <div className="sec-title text-start">
                    <p className="sec-title__tagline">Get free estimate</p>
                   
                    <h3 className="sec-title__title">
                    Get an insurance agenct! started with us
                    </h3>
                   
                </div>
               
                <div className="cta-one__content">
                    <Link href="/pricing" className="thm-btn thm-btn--two cta-one__btn">
                    <span>
                        Get a Quote
                        <i className="far fa-arrow-right" />
                    </span>
                    </Link>
                   
                    <div className="cta-one__info">
                    <div className="cta-one__info__icon">
                        <i className="far fa-phone-plus" />
                    </div>
                    
                    <div className="cta-one__info__content">
                        <span className="cta-one__info__name">Phone No</span>
                        <a href="tel:+000(123)45688">+000 (123) 456 88</a>
                    </div>
                    
                    </div>
                  
                </div>
              
                </div>
                
            </div>
        </section>
    </>
  )
}

export default Take