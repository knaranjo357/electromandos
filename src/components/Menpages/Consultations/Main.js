import React from 'react';
import { Link } from 'react-router-dom';

function Main() {
  return (
    <>
      <section className="about-three">
        <div
          className="about-three__bg"
          style={{ backgroundImage: "url(assets/images/background/about-3-bg-1-1.jpg)" }}
        ></div>
        <div className="container">
          <div className="row gutter-y-60">
            <div className="col-md-12 col-lg-6">
              <div className="about-three__content">
                <div className="sec-title text-start">
                  <p className="sec-title__tagline">Nuestros Servicios</p>

                  <h3 className="sec-title__title">
                    Soluciones Eléctricas Industriales de Calidad <br />
                    ¿Necesitas Asesoría Especializada?
                  </h3>
                </div>

                <ul className="list-unstyled about-three__list">
                  <li>
                    <div className="about-three__list__icon">
                      <i className="flaticon-electrical" />
                    </div>

                    <div className="about-three__list__content">
                      <h3 className="about-three__list__title">
                        Servicios Integrales Eléctricos
                      </h3>

                      <p className="about-three__list__text">
                        Diseño, instalación y mantenimiento de sistemas eléctricos industriales, garantizando eficiencia y seguridad.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="about-three__list__icon">
                      <i className="flaticon-automation" />
                    </div>

                    <div className="about-three__list__content">
                      <h3 className="about-three__list__title">
                        Automatización Industrial
                      </h3>

                      <p className="about-three__list__text">
                        Implementación de soluciones de automatización para optimizar procesos y aumentar la productividad de tu industria.
                      </p>
                    </div>
                  </li>
                </ul>

                <div className="about-three__btns">
                  <Link to="/team" className="thm-btn thm-btn--two about-three__btn">
                    <span>
                      Nuestro Equipo
                      <i className="far fa-arrow-right" />
                    </span>
                  </Link>

                  <Link to="/services" className="about-three__btn--two">
                    <span>Más Servicios</span>
                    <i className="far fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-12 col-lg-6">
              <div className="about-three__image wow fadeInUp" data-wow-duration="1500ms">
                {/* Actualiza la ruta de la imagen según corresponda */}
                <img src="assets/images/resources/about-3-1.jpg" className="img-fluid" alt="Servicios Electromandos del Oriente" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Main;
