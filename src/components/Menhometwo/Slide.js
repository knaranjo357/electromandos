import React from 'react';
import { Link } from 'react-router-dom';
import Img from '../../assets/images/background/slider-2-1.jpg'; // Asegúrate de que esta ruta sea correcta

function Slide() {
  return (
    <>
      <section
        className="slider-two"
        style={{ backgroundImage: `url(${Img})` }}
      >
        <div className="container">
          <div
            className="slider-two__box wow fadeInUp"
            data-wow-duration="1500ms"
          >
            <h3 className="slider-two__title">
              Líderes en Soluciones Eléctricas Industriales
            </h3>

            <p className="slider-two__text">
              Proveemos servicios de alta calidad en instalación, automatización y mantenimiento eléctrico para optimizar tus procesos industriales.
            </p>

            <div className="slider-two__btns">
              <Link to="/sobre-nosotros" className="thm-btn thm-btn--three slider-two__btn">
                <span>
                  Comenzar
                  <i className="far fa-arrow-right" />
                </span>
              </Link>

              <Link to="/servicios" className="thm-btn thm-btn--three slider-two__btn slider-two__btn--two">
                <span>
                  Aprender Más
                  <i className="far fa-arrow-right" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Slide;
