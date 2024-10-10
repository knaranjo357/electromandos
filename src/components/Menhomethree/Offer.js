import React from 'react';
import { Link } from 'react-router-dom';

function Offer() {
  return (
    <>
      <section className="about-six">
        <div className="container">
          <div className="sec-title text-center">
            <p className="sec-title__tagline">Lo que Ofrecemos</p>
            <h3 className="sec-title__title">
              Soluciones Eléctricas de Alta Calidad <br />
              para tu Futuro Industrial
            </h3>
          </div>

          <div className="row gutter-y-30">
            <div
              className="col-md-12 col-lg-4 wow fadeInUp"
              data-wow-duration="1500ms"
              data-wow-delay="000ms"
            >
              <div className="about-six__card">
                <div className="about-six__card__icon">
                  <i className="fas fa-check" />
                </div>
                <h3 className="about-six__card__title">
                  <Link to="#">Ahorro Energético</Link>
                </h3>
                <div className="about-six__card__text">
                  En **Electromandos del Oriente S.A.S.**, nos especializamos en
                  soluciones que optimizan el uso de energía, ayudando a reducir costos
                  y mejorar la eficiencia de tus operaciones.
                </div>
                <Link to="/about" className="thm-btn about-six__card__btn">
                  <span>
                    Leer Más
                    <i className="far fa-arrow-right" />
                  </span>
                </Link>
              </div>
            </div>

            <div
              className="col-md-12 col-lg-4 wow fadeInUp"
              data-wow-duration="1500ms"
              data-wow-delay="100ms"
            >
              <div className="about-six__card">
                <div className="about-six__card__icon">
                  <i className="fas fa-check" />
                </div>
                <h3 className="about-six__card__title">
                  <Link to="#">Sistemas Automatizados</Link>
                </h3>
                <div className="about-six__card__text">
                  Ofrecemos soluciones automatizadas para el control eficiente de tus
                  sistemas eléctricos industriales, garantizando la seguridad y
                  continuidad operativa.
                </div>
                <Link to="/about" className="thm-btn about-six__card__btn">
                  <span>
                    Leer Más
                    <i className="far fa-arrow-right" />
                  </span>
                </Link>
              </div>
            </div>

            <div
              className="col-md-12 col-lg-4 wow fadeInUp"
              data-wow-duration="1500ms"
              data-wow-delay="200ms"
            >
              <div className="about-six__card">
                <div className="about-six__card__icon">
                  <i className="fas fa-check" />
                </div>
                <h3 className="about-six__card__title">
                  <Link to="#">Monitoreo en Tiempo Real</Link>
                </h3>
                <div className="about-six__card__text">
                  Implementamos sistemas de monitoreo para que puedas controlar y
                  gestionar el rendimiento de tus instalaciones en tiempo real,
                  asegurando el máximo rendimiento y minimizando interrupciones.
                </div>
                <Link to="/about" className="thm-btn about-six__card__btn">
                  <span>
                    Leer Más
                    <i className="far fa-arrow-right" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Offer;
