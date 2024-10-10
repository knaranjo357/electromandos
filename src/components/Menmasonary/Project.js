import React from 'react'
import { Link } from 'react-router-dom'

function Project() {
  return (
    <>
        <section className="portfolio-grid">
            <div className="container">
                <div className="sec-title text-center">
                <p className="sec-title__tagline">latest project</p>
                
                <h3 className="sec-title__title">Take a Look Our Projects</h3>
              
                </div>
               
                <div className="text-center">
                <ul className="list-unstyled post-filter portfolio-filter">
                    <li data-filter=".filter-item" className="active">
                    <div className="filter-text">Show All</div>
                    
                    </li>
                    <li data-filter=".house">
                    <div className="filter-text">House</div>
                    
                    </li>
                    <li data-filter=".life">
                    <div className="filter-text">Life</div>
                    
                    </li>
                    <li data-filter=".business">
                    <div className="filter-text">Business</div>
                    
                    </li>
                    <li data-filter=".car">
                    <div className="filter-text">Car</div>
                    
                    </li>
                    <li data-filter=".travel">
                    <div className="filter-text">Travel</div>
                    
                    </li>
                    <li data-filter=".study">
                    <div className="filter-text">Study</div>
                    
                    </li>
                </ul>
               
                </div>
                
                <div className="row filter-layout masonary-layout gutter-y-30">
                <div className="col-md-6 col-lg-4 filter-item life">
                    <div className="portfolio-card portfolio-card--two">
                    <div className="portfolio-card__image">
                        <img src="assets/images/portfolio/portfolio-2-2.jpg"  />
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
                
                <div className="col-md-6 col-lg-8 filter-item house">
                    <div className="portfolio-card portfolio-card--two">
                    <div className="portfolio-card__image">
                        <img src="assets/images/portfolio/portfolio-2-1.jpg"  />
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
                
                <div className="col-md-6 col-lg-8 filter-item business life">
                    <div className="portfolio-card portfolio-card--two">
                    <div className="portfolio-card__image">
                        <img src="assets/images/portfolio/portfolio-2-4.jpg"  />
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
                
                <div className="col-md-6 col-lg-4 filter-item house business">
                    <div className="portfolio-card portfolio-card--two">
                    <div className="portfolio-card__image">
                        <img src="assets/images/portfolio/portfolio-2-3.jpg"  />
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
                
                <div className="col-md-6 col-lg-4 filter-item house travel business">
                    <div className="portfolio-card portfolio-card--two">
                    <div className="portfolio-card__image">
                        <img src="assets/images/portfolio/portfolio-2-5.jpg"  />
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
                
                <div className="col-md-6 col-lg-4 filter-item car travel">
                    <div className="portfolio-card portfolio-card--two">
                    <div className="portfolio-card__image">
                        <img src="assets/images/portfolio/portfolio-2-6.jpg"  />
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
                
                <div className="col-md-6 col-lg-4 filter-item travel study">
                    <div className="portfolio-card portfolio-card--two">
                    <div className="portfolio-card__image">
                        <img src="assets/images/portfolio/portfolio-2-7.jpg"  />
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
                
                </div>
                
                <div className="portfolio-grid__btns text-center">
                <Link to="/portfoliogrid" className="thm-btn thm-btn--two portfolio-grid__btn" >
                    <span>
                    View More Project
                    <i className="far fa-arrow-right" />
                    </span>
                </Link>
                
                </div>
                
            </div>
        </section>

    </>
  )
}

export default Project