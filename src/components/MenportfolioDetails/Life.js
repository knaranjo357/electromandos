import React from 'react'
import { Link } from 'react-router-dom'

function Life() {
  return (
    <>
        <section className="portfolio-details">
            <div className="container">
                <div className="row">
                <div className="col-md-12 col-lg-8">
                    <div className="portfolio-details__content">
                    <div className="sec-title text-start">
                        <p className="sec-title__tagline">life insurance</p>
                        
                        <h3 className="sec-title__title">
                        Things to Look for While <br />
                        Buying Life Insurance
                        </h3>
                       
                    </div>
                    
                    <p className="portfolio-details__text">
                        We denounce with righteous indignation and dislike men beguiled to
                        and demoralized the charms of pleasure the moment desir is they they
                        cannot foresee the pain and trouble the arebound ensue and equal
                        blame belongs to those who fail in their duty autem vel eum iure
                        reprehenderit qui in ea voluptate velit esse quam nihil molestiae
                        consequatur, vel illum
                    </p>
                    <p className="portfolio-details__text">
                        Sed ut perspiciatis unde omnis iste natus error voluptatem
                        accusantium doloremque laudatium totam rem aperiam, eaque ipsa quae
                        ab illo inventore veritatis et quasi architecto beatae vitadicta
                        sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
                    </p>
                    </div>
                    
                </div>
                
                <div className="col-lg-4">
                    <ul className="list-unstyled portfolio-details__list">
                    <li className="portfolio-details__list__title">Project Info</li>
                    <li className="portfolio-details__list__item">
                        <div className="portfolio-details__list__icon">
                        <i className="far fa-user" />
                        </div>
                       
                        <div className="portfolio-details__list__content">
                        <span className="portfolio-details__list__label">Clients</span>
                        <h4 className="portfolio-details__list__name">
                            <Link to="#">Nicholas J. Howard</Link>
                        </h4>
                        </div>
                        
                    </li>
                    <li className="portfolio-details__list__item">
                        <div className="portfolio-details__list__icon">
                        <i className="far fa-ball-pile" />
                        </div>
                       
                        <div className="portfolio-details__list__content">
                        <span className="portfolio-details__list__label">Category</span>
                        <h4 className="portfolio-details__list__name">
                            <Link to="#">Life Insurance</Link>
                        </h4>
                        </div>
                        
                    </li>
                    <li className="portfolio-details__list__item">
                        <div className="portfolio-details__list__icon">
                        <i className="far fa-calendar-alt" />
                        </div>
                       
                        <div className="portfolio-details__list__content">
                        <span className="portfolio-details__list__label">Date</span>
                        <h4 className="portfolio-details__list__name">
                            <Link to="#">November 25, 2022</Link>
                        </h4>
                        </div>
                        
                    </li>
                    <li className="portfolio-details__list__item">
                        <div className="portfolio-details__list__social">
                        <Link to="#">
                            <i className="fab fa-facebook-f" />
                        </Link>
                        <Link to="#">
                            <i className="fab fa-twitter" />
                        </Link>
                        <Link to="#">
                            <i className="fab fa-linkedin-in" />
                        </Link>
                        <Link to="#">
                            <i className="fab fa-instagram" />
                        </Link>
                        </div>
                        
                    </li>
                    </ul>
                  
                </div>
                
                </div>
               
            </div>
        </section>

        <section className="portfolio-thumbnail">
            <div className="container-fluid">
                <img src="assets/images/portfolio/portfolio-d-1-1.jpg" className="img-fluid"  />
            </div>
        </section>

        <section className="portfolio-content">
            <div className="container">
                <div className="row gutter-y-60">
                <div className="col-lg-6">
                    <div className="portfolio-content__content">
                    <h3>Challenge Of Project</h3>
                    <p>
                        On the other hand, we denounce with righteous indignation and
                        dislike men who are so beguiled and demoralized by the charms of
                        pleasure the moment blinded desire, that they cannot foresee the
                        pain and trouble that are bound ensue and equal blame belongs to
                        those who fail in their through weakness which is the same as saying
                        through shrinking from toil and pain.
                    </p>
                    </div>
                    
                </div>
                
                <div className="col-lg-6">
                    <ul className="list-unstyled blog-details__list blog-details__list--portfolio">
                    <li>
                        <i className="far fa-check" />
                        Term insurance plans provide life cover to protect your loved ones
                        at most affordable rates.
                    </li>
                    <li>
                        <i className="far fa-check" />
                        Unit linked insurance plans, better known as ULIPs life insurance
                        with financial investment.
                    </li>
                    <li>
                        <i className="far fa-check" />
                        Savings Plans are life insurance plans that combine the benefits of
                        a life insurance
                    </li>
                    </ul>
                    
                </div>
                
                </div>
               
                <div className="row gutter-y-30">
                <div className="col-md-12 col-lg-6">
                    <img src="assets/images/portfolio/portfolio-d-2-1.jpg"  className="img-fluid" />
                </div>
                
                <div className="col-md-12 col-lg-6">
                    <img src="assets/images/portfolio/portfolio-d-2-2.jpg"  className="img-fluid" />
                </div>
                
                </div>
               
                <div className="row">
                <div className="col-md-12">
                    <h3>Project Summery</h3>
                    <p>
                    But I must explain to you how all this mistaken idea of denouncing
                    pleasure and praising pain was born and I will give you a complete
                    account of the system, and expound the actual teachings of the great
                    explorer of the truth, the master-builder of human happiness. No one
                    rejects, dislikes, or avoids pleasure itself, because it is pleasure,
                    but because those who do not know how to pursue pleasure rationally
                    encounter consequences that are extremely painful.
                    </p>
                </div>
             
                </div>
               
            </div>
        </section>

        <section className="portfolio-pagination">
            <div className="container">
                <ul className="list-unstyled blog-sidebar__post blog-sidebar__post--details blog-sidebar__post--portfolio">
                <li>
                    <img src="assets/images/blog/blog-d-p-1.png"  />
                    <div className="blog-sidebar__post__content">
                    <p className="blog-sidebar__post__date">
                        <i className="far fa-calendar-alt" />
                        November 25, 2022
                    </p>
                    <h4 className="blog-sidebar__post__title">
                        <Link to="/blogdetails">
                        Meet Image Optimization Smashing Book Addy
                        </Link>
                    </h4>
                    
                    </div>
                
                </li>
                <li className="justify-content-center">
                    <Link className="blog-sidebar__post--portfolio__list" to="/portfoliogrid" >
                    <i className="far fa-th" />
                    </Link>
                </li>
                <li>
                    <img src="assets/images/blog/blog-d-p-2.png"  />
                    <div className="blog-sidebar__post__content">
                    <p className="blog-sidebar__post__date">
                        <i className="far fa-calendar-alt" />
                        November 25, 2022
                    </p>
                    <h4 className="blog-sidebar__post__title">
                        <Link to="/blogdetails">
                        Bake Layers Accessibility Testing Into Process
                        </Link>
                    </h4>
                    
                    </div>
                
                </li>
                </ul>
            
            </div>
        </section>


    </>
  )
}

export default Life