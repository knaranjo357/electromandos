import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import { Link } from 'react-router-dom';

function Latest() {

    const options = {
        loop : true,
        nav : false,
        dots : true,
        autoplay : true,
        autoplayHoverPause : true,
        autoplayTimeout : 5000,
        smartSpeed : 700,
        responsive : {
            "0": {
                items : 1,
                margin : 0
            },
            "576": {
                items : 2,
                margin : 30
            },
            "992": {
                items : 3,
                margin : 30
            }
}};

  return (
    <>
        <section className="portfolio-grid">
            <div className="container">
                <div className="sec-title text-center">
                <p className="sec-title__tagline">latest project</p>
                
                <h3 className="sec-title__title">Related Projects</h3>
             
                </div>
              
                <OwlCarousel className="owl-carousel owl-theme thm-owl__carousel owl-dot-one" {...options}>
                <div className="item">
                    <div className="portfolio-card">
                    <div className="portfolio-card__image">
                        <img src="assets/images/portfolio/portfolio-1-1.jpg"  />
                        <div className="portfolio-card__content">
                        <span className="portfolio-card__tagline">Insurance</span>
                       
                        <h3 className="portfolio-card__title">
                            <Link to="/portfoliodetails">Life Insurance</Link>
                        </h3>
                        <Link to="/portfoliodetails" className="portfolio-card__link">
                            <i className="far fa-arrow-right" />
                        </Link>
                        </div>
                        
                    </div>
                   
                    </div>
                  
                </div>
                
                <div className="item">
                    <div className="portfolio-card">
                    <div className="portfolio-card__image">
                        <img src="assets/images/portfolio/portfolio-1-2.jpg"  />
                        <div className="portfolio-card__content">
                        <span className="portfolio-card__tagline">Insurance</span>
                       
                        <h3 className="portfolio-card__title">
                            <Link to="/portfoliodetails">Health Insurance</Link>
                        </h3>
                        <Link to="/portfoliodetails" className="portfolio-card__link">
                            <i className="far fa-arrow-right" />
                        </Link>
                        </div>
                        
                    </div>
                   
                    </div>
                  
                </div>
                
                <div className="item">
                    <div className="portfolio-card">
                    <div className="portfolio-card__image">
                        <img src="assets/images/portfolio/portfolio-1-3.jpg"  />
                        <div className="portfolio-card__content">
                        <span className="portfolio-card__tagline">Insurance</span>
                       
                        <h3 className="portfolio-card__title">
                            <Link to="/portfoliodetails">House Insurance</Link>
                        </h3>
                        <Link to="/portfoliodetails" className="portfolio-card__link">
                            <i className="far fa-arrow-right" />
                        </Link>
                        </div>
                        
                    </div>
                   
                    </div>
                  
                </div>
                
                <div className="item">
                    <div className="portfolio-card">
                    <div className="portfolio-card__image">
                        <img src="assets/images/portfolio/portfolio-1-4.jpg"  />
                        <div className="portfolio-card__content">
                        <span className="portfolio-card__tagline">Insurance</span>
                       
                        <h3 className="portfolio-card__title">
                            <Link to="/portfoliodetails">Car Insurance</Link>
                        </h3>
                        <Link to="/portfoliodetails" className="portfolio-card__link">
                            <i className="far fa-arrow-right" />
                        </Link>
                        </div>
                        
                    </div>
                   
                    </div>
                  
                </div>
                
                <div className="item">
                    <div className="portfolio-card">
                    <div className="portfolio-card__image">
                        <img src="assets/images/portfolio/portfolio-1-5.jpg"  />
                        <div className="portfolio-card__content">
                        <span className="portfolio-card__tagline">Insurance</span>
                       
                        <h3 className="portfolio-card__title">
                            <Link to="/portfoliodetails">Study Insurance</Link>
                        </h3>
                        <Link to="/portfoliodetails" className="portfolio-card__link">
                            <i className="far fa-arrow-right" />
                        </Link>
                        </div>
                        
                    </div>
                   
                    </div>
                  
                </div>
                
                <div className="item">
                    <div className="portfolio-card">
                    <div className="portfolio-card__image">
                        <img src="assets/images/portfolio/portfolio-1-6.jpg"  />
                        <div className="portfolio-card__content">
                        <span className="portfolio-card__tagline">Insurance</span>
                       
                        <h3 className="portfolio-card__title">
                            <Link to="/portfoliodetails">Family Insurance</Link>
                        </h3>
                        <Link to="/portfoliodetails" className="portfolio-card__link">
                            <i className="far fa-arrow-right" />
                        </Link>
                        </div>
                        
                    </div>
                   
                    </div>
                  
                </div>
                
                <div className="item">
                    <div className="portfolio-card">
                    <div className="portfolio-card__image">
                        <img src="assets/images/portfolio/portfolio-1-7.jpg"  />
                        <div className="portfolio-card__content">
                        <span className="portfolio-card__tagline">Insurance</span>
                       
                        <h3 className="portfolio-card__title">
                            <Link to="/portfoliodetails">Family Insurance</Link>
                        </h3>
                        <Link to="/portfoliodetails" className="portfolio-card__link">
                            <i className="far fa-arrow-right" />
                        </Link>
                        </div>
                        
                    </div>
                   
                    </div>
                  
                </div>
                
                <div className="item">
                    <div className="portfolio-card">
                    <div className="portfolio-card__image">
                        <img src="assets/images/portfolio/portfolio-1-8.jpg"  />
                        <div className="portfolio-card__content">
                        <span className="portfolio-card__tagline">Insurance</span>
                       
                        <h3 className="portfolio-card__title">
                            <Link to="/portfoliodetails">Car Insurance</Link>
                        </h3>
                        <Link to="/portfoliodetails" className="portfolio-card__link">
                            <i className="far fa-arrow-right" />
                        </Link>
                        </div>
                        
                    </div>
                   
                    </div>
                  
                </div>
                
                <div className="item">
                    <div className="portfolio-card">
                    <div className="portfolio-card__image">
                        <img src="assets/images/portfolio/portfolio-1-9.jpg"  />
                        <div className="portfolio-card__content">
                        <span className="portfolio-card__tagline">Insurance</span>
                       
                        <h3 className="portfolio-card__title">
                            <Link to="/portfoliodetails">Business Insurance</Link>
                        </h3>
                        <Link to="/portfoliodetails" className="portfolio-card__link">
                            <i className="far fa-arrow-right" />
                        </Link>
                        </div>
                        
                    </div>
                   
                    </div>
                  
                </div>
                
                </OwlCarousel>
                
            </div>
        </section>

    </>
  )
}

export default Latest