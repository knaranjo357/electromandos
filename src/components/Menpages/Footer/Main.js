import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <>
      <footer className="footer-two footer-two--home-1">

        <div className="footer-two__top">
          <div className="container">
            <div className="footer-two__top__inner">
              <div className="main-header__left">
                <Link to="/" className="main-header__logo">
                  <img src="assets/images/logo-light.png" alt="Logo de Electromandos del Oriente" style={{width:"100px",height:"auto"}}/>
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
                    <span className="main-header__info__name">Correo Electrónico</span>
                    <Link to="mailto:support@electromandos.com">support@electromandos.com</Link>
                  </div>
                </li>
                <li className="main-header__info__item">
                  <div className="main-header__info__icon">
                    <i className="far fa-phone-plus" />
                  </div>
                  <div className="main-header__info__content">
                    <span className="main-header__info__name">Teléfono</span>
                    <Link to="tel:+573153816959">+57 3153816959</Link>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-two__middle">
          <div className="container">
            <div className="row gutter-y-30">
              <div className="col-md-12 col-lg-3">
                <div className="footer-two__widget footer-two__widget--about">
                  <h3 className="footer-two__widget__title">Nosotros</h3>
                  <p className="footer-two__widget__text">
                    En Electromandos del Oriente, nos comprometemos a ofrecer soluciones eléctricas industriales de calidad y eficiencia.
                  </p>
                  <ul className="list-unstyled footer-two__widget__social">
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

              <div className="col-md-12 col-lg-4">
                <div className="footer-two__widget footer-two__widget--menu">
                  <h3 className="footer-two__widget__title">Enlaces Rápidos</h3>
                  <div className="row">
                    <div className="col-6">
                      <ul className="list-unstyled footer-one__widget__menu">
                        <li>
                          <Link to="/about">Nosotros</Link>
                        </li>
                        <li>
                          <Link to="/insurances">Servicios</Link>
                        </li>
                        <li>
                          <Link to="/team">Nuestro Equipo</Link>
                        </li>
                        <li>
                          <Link to="/contact">Contacto</Link>
                        </li>
                        <li>
                          <Link to="/faqs">Preguntas Frecuentes</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="col-6">
                      <ul className="list-unstyled footer-one__widget__menu">
                        <li>
                          <Link to="/portfoliogrid">Productos</Link>
                        </li>
                        <li>
                          <Link to="/portfoliomasonary">Proyectos</Link>
                        </li>
                        <li>
                          <Link to="/portfoliodetails">Detalles de proyectos</Link>
                        </li>
                        <li>
                          <Link to="/contact">Contáctanos</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-12 col-lg-5">
                <div className="footer-two__widget footer-two__widget--form">
                  <h3 className="footer-two__widget__title">Suscríbete a nuestro boletín</h3>
                  <form action="#" className="mc-form footer-two__widget__form" data-url="MC_FORM_URL">
                    <input type="text" placeholder="Correo Electrónico" />
                    <button type="submit">
                      <i className="far fa-paper-plane" />
                    </button>
                  </form>
                  <div className="mc-form__response" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-two__copyright">
          <div className="container text-center">
            <p className="footer-two__copyright__text">
              Copyright © {new Date().getFullYear()} Electromandos del Oriente, Todos los derechos reservados.
            </p>
          </div>
        </div>

      </footer>
    </>
  );
}

export default Footer;
