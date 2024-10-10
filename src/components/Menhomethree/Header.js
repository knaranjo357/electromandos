import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Header() {
    
    const [Mobile, setMobile] = useState()



  return (
    <>
       <header className="main-header">
            <div className="topbar-one">
                <div className="container">
                <p className="topbar-one__left">
                    <i className="fa fa-clock" />
                    <strong>Horarios :</strong>
                    Lunes-Viernes, 8am - 6pm
                </p>
                
                <div className="topbar-one__right">
                   
                    <ul className="list-unstyled topbar-one__social">
                    <li>
                        <Link to="#">
                        <i className="fab fa-facebook-f" />
                        </Link>
                    </li>
                    <li>
                        <Link to="#">
                        <i className="fab fa-twitter" />
                        </Link>
                    </li>
                    <li>
                        <Link to="#">
                        <i className="fab fa-instagram" />
                        </Link>
                    </li>
                    <li>
                        <Link to="#">
                        <i className="fab fa-linkedin-in" />
                        </Link>
                    </li>
                    </ul>
                   
                </div>
                
                </div>
               
            </div>
            <div className="main-header__middle">
                <div className="container">
                <div className="main-header__left">
                    <Link to="/" className="main-header__logo">
                    <img src="assets/images/logo-light.png" alt="Logo de Electromandos del Oriente" style={{width:"100px",height:"auto"}}/>
                    </Link>
                    <Link to="#" className="main-header__toggler mobile-nav__toggler" onClick={() => setMobile(true)}>
                    <span />
                    <span />
                    <span />
                    </Link>
                </div>
                
                <ul className="list-unstyled main-header__info">
                    <li className="main-header__info__item">
                    <div className="main-header__info__icon">
                        <i className="far fa-map-marker-alt" />
                    </div>
                    
                    <div className="main-header__info__content">
                        <span className="main-header__info__name">Ubicación</span>
                        <a
                            href="https://www.google.com/maps/place/ELECTROMANDOS+DEL+ORIENTE/data=!4m7!3m6!1s0x8e681556ce866539:0x7ffa6dcc7af05be8!8m2!3d7.1316291!4d-73.1167447!16s%2Fg%2F11k9bpc393!19sChIJOWWGzlYVaI4R6Fvwesxt-n8?authuser=0&hl=es&rclk=1"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Cra 31 #18-44
                        </a>
                    </div>

                    
                    </li>
                    <li className="main-header__info__item">
                    <div className="main-header__info__icon">
                        <i className="far fa-envelope-open" />
                    </div>
                    
                    <div className="main-header__info__content">
                        <span className="main-header__info__name">Email</span>
                        <Link to="mailto:support@gmail.com">support@gmail.com</Link>
                    </div>
                    
                    </li>
                    <li className="main-header__info__item">
                    <div className="main-header__info__icon">
                        <i className="far fa-phone-plus" />
                    </div>
                    
                    <div className="main-header__info__content">
                        <span className="main-header__info__name">Telefono</span>
                        <Link to="tel:+573153816959">+57 3153816959</Link>
                    </div>
                    
                    </li>
                </ul>
                
                </div>
               
            </div>
            <nav className="main-menu sticky-header">
                <div className="container">
                <ul className="main-menu__list">
                    <li className="menu-item-has-children">
                    <Link to="/">Home</Link>
                    </li>
                    <li className="menu-item-has-children">
                    <Link to="/about">Nosotros</Link>
                    </li>
                    <li className="menu-item-has-children">
                    <Link to="/insurances">Servicios</Link>
                    </li>
                    <li className="menu-item-has-children">
                    <Link to="/portfoliogrid">Productos</Link>
                    </li>
                    <li>
                        <Link to="/faqs">Faq</Link>
                    </li>

                    <li>
                    <Link to="/contact">Contact</Link>
                    </li>
                </ul>
                
                <div className="main-menu__right">
                    <Link to="/contact" className="thm-btn">
                    <span>
                        Obtener una cotización <i className="far fa-arrow-right" />
                    </span>
                    </Link>
                </div>
                
                </div>
               
            </nav>

            <nav className="main-menu sticky-header sticky-header--cloned sticky-fixed">
            <div className="container">
                <ul className="main-menu__list">
                    <li className="menu-item-has-children">
                    <Link to="/">Home</Link>
                    </li>
                    <li className="menu-item-has-children">
                    <Link to="/about">Nosotros</Link>
                    </li>
                    <li className="menu-item-has-children">
                    <Link to="/insurances">Servicios</Link>
                    </li>
                    <li className="menu-item-has-children">
                    <Link to="/portfoliogrid">Productos</Link>
                    </li>
                    <li>
                        <Link to="/faqs">Faq</Link>
                    </li>

                    <li>
                    <Link to="/contact">Contact</Link>
                    </li>
                </ul>
                
                <div className="main-menu__right">
                    <Link to="/contact" className="thm-btn">
                    <span>
                        Obtener una cotización <i className="far fa-arrow-right" />
                    </span>
                    </Link>
                </div>
                
                </div>
            </nav>

       </header>

       {Mobile && 
            <div className={`mobile-nav__wrapper ${"expanded"}`}>
                <div className="mobile-nav__overlay mobile-nav__toggler" />
            
                <div className="mobile-nav__content">
                <Link to="#" className="mobile-nav__close mobile-nav__toggler" onClick={() => setMobile(false)}>
                    <span />
                    <span />
                </Link>
                <div className="logo-box">
                    <Link to="/" aria-label="logo image">
                    <img src="assets/images/logo-light.png" alt="Logo de Electromandos del Oriente" style={{width:"100px",height:"auto"}}/>
                    </Link>
                </div>
                
                <div className="mobile-nav__container">

                    <ul className="mobile-menu__list">
                        <li className="menu-item-has-children current">
                        <Link to="/">
                            Inicio
                        </Link>
                        </li>

                        <li className="menu-item-has-children current">
                            <Link to="/about">
                                Nosotros
                            </Link>
                        </li>

                        <li className="menu-item-has-children current">
                            <Link to="/insurances">
                                Servicios
                            </Link>
                        </li>

                        <li className="menu-item-has-children current">
                            <Link to="/portfoliogrid">
                                Productos
                            </Link>
                        </li>

                        <li className="menu-item-has-children current">
                            <Link to="/faqs">
                                Faqs
                            </Link>
                        </li>

                        <li className="menu-item-has-children current">
                            <Link to="/Contact">
                                Contactanos
                            </Link>
                        </li>
                    </ul>
                </div>

                
                <ul className="list-unstyled footer-one__widget__contact">
                    <li>
                    <i className="far fa-envelope-open" />
                    <Link to="mailto:support@gmail.com">support@gmail.com</Link>
                    </li>
                    <li>
                    <i className="far fa-phone-plus" />
                    <Link to="tel:+000(123)45688">+000 (123) 456 88</Link>
                    </li>
                </ul>
                
                <ul className="list-unstyled footer-one__widget__social">
                    <li>
                    <Link to="#">
                        <i className="fab fa-facebook-f" />
                    </Link>
                    </li>
                    <li>
                    <Link to="#">
                        <i className="fab fa-twitter" />
                    </Link>
                    </li>
                    <li>
                    <Link to="#">
                        <i className="fab fa-linkedin-in" />
                    </Link>
                    </li>
                    <li>
                    <Link to="#">
                        <i className="fab fa-instagram" />
                    </Link>
                    </li>
                </ul>
                
                </div>
                
            </div> 
        }

           
           

    </>
  )
}

export default Header