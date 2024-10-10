import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import { Link } from 'react-router-dom';

function Slider() {
  const options = {
    items: 1,
    margin: 0,
    animateIn: 'fadeIn',
    dots: false,
    nav: true,
    animateOut: 'slideOutDown',
    navText: [
      '<span class="far fa-arrow-left"></span>',
      '<span class="far fa-arrow-right"></span>',
    ],
  };

  return (
    <>
      <section className="slider-one">
        <OwlCarousel className="thm-owl__carousel owl-carousel owl-theme" {...options}>
          <div className="item">
            <div className="slider-one__item">
              <div
                className="slider-one__image"
                style={{ backgroundImage: 'url(assets/images/background/slider-1-1.jpg)' }}
              />
              <div className="container">
                <p className="slider-one__text">Bienvenido a Electromandos del Oriente</p>

                <h2 className="slider-one__title">
                  Desarrollamos Soluciones Eléctricas Industriales
                </h2>

                <div className="slider-one__btns">
                  <Link to="/about" className="thm-btn thm-btn--three slider-one__btn">
                    <span>
                      Conoce Más
                      <i className="far fa-arrow-right" />
                    </span>
                  </Link>

                  <Link
                    to="/services"
                    className="thm-btn thm-btn--three slider-one__btn slider-one__btn--two"
                  >
                    <span>
                      Nuestros Servicios
                      <i className="far fa-arrow-right" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="item">
            <div className="slider-one__item">
              <div
                className="slider-one__image"
                style={{ backgroundImage: 'url(assets/images/background/slider-1-2.jpg)' }}
              />
              <div className="container">
                <p className="slider-one__text">Bienvenido a Electromandos del Oriente</p>

                <h2 className="slider-one__title">
                  Soluciones Integrales para tus Proyectos Industriales
                </h2>

                <div className="slider-one__btns">
                  <Link to="/about" className="thm-btn thm-btn--three slider-one__btn">
                    <span>
                      Conoce Más
                      <i className="far fa-arrow-right" />
                    </span>
                  </Link>

                  <Link
                    to="/projects"
                    className="thm-btn thm-btn--three slider-one__btn slider-one__btn--two"
                  >
                    <span>
                      Ver Proyectos
                      <i className="far fa-arrow-right" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="item">
            <div className="slider-one__item">
              <div
                className="slider-one__image"
                style={{ backgroundImage: 'url(assets/images/background/slider-1-3.jpg)' }}
              />
              <div className="container">
                <p className="slider-one__text">Bienvenido a Electromandos del Oriente</p>

                <h2 className="slider-one__title">
                  Optimización y Mantenimiento Eléctrico para tu Industria
                </h2>

                <div className="slider-one__btns">
                  <Link to="/about" className="thm-btn thm-btn--three slider-one__btn">
                    <span>
                      Conoce Más
                      <i className="far fa-arrow-right" />
                    </span>
                  </Link>

                  <Link
                    to="/contact"
                    className="thm-btn thm-btn--three slider-one__btn slider-one__btn--two"
                  >
                    <span>
                      Contáctanos
                      <i className="far fa-arrow-right" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </OwlCarousel>
      </section>
    </>
  );
}

export default Slider;
