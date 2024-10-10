import React from 'react';
import { Link } from 'react-router-dom';

function Take() {
  return (
    <>
      <section
        className="service-four"
        style={{
          backgroundImage: 'url(assets/images/background/service-4-bg-1.jpg)',
        }}
      >
        <div className="container">
          <img
            src="assets/images/services/service-4-1.jpg"
            className="wow fadeInRight service-four__bg"
            data-wow-duration="1500ms"
            style={{width:"885px",height:"940px"}}
          />
          <div className="row">
            <div className="col-xl-8">
              <div className="sec-title text-start">
                <p className="sec-title__tagline">Nuestros Servicios</p>

                <h3 className="sec-title__title">
                  Aprovecha la mejor oportunidad <br />
                  en soluciones eléctricas industriales
                </h3>
              </div>

              <ul className="list-unstyled service-four__list">
                <li className="service-four__list__item">
                  <div className="service-card-three">
                    <div className="service-card-three__content">
                      <div className="service-card-three__icon">
                        <i className="flaticon-insurance-1" />
                      </div>

                      <h3 className="service-card-three__title">
                        <Link to="/services">Diseño y Planificación</Link>
                      </h3>
                      <p className="service-card-three__text">
                        Ofrecemos soluciones personalizadas de diseño y planificación para tus proyectos industriales.
                      </p>
                    </div>
                  </div>
                </li>

                <li className="service-four__list__item">
                  <div className="service-card-three">
                    <div className="service-card-three__content">
                      <div className="service-card-three__icon">
                        <i className="flaticon-insurance" />
                      </div>

                      <h3 className="service-card-three__title">
                        <Link to="/services">Instalación Eléctrica</Link>
                      </h3>
                      <p className="service-card-three__text">
                        Instalamos sistemas eléctricos industriales con precisión y calidad asegurada.
                      </p>
                    </div>
                  </div>
                </li>

                <li className="service-four__list__item">
                  <div className="service-card-three">
                    <div className="service-card-three__content">
                      <div className="service-card-three__icon">
                        <i className="flaticon-health-insurance" />
                      </div>

                      <h3 className="service-card-three__title">
                        <Link to="/services">Mantenimiento y Soporte</Link>
                      </h3>
                      <p className="service-card-three__text">
                        Mantenimiento preventivo y correctivo para garantizar el funcionamiento óptimo de tu sistema eléctrico.
                      </p>
                    </div>
                  </div>
                </li>

                <li className="service-four__list__item">
                  <div className="service-card-three">
                    <div className="service-card-three__content">
                      <div className="service-card-three__icon">
                        <i className="flaticon-study" />
                      </div>

                      <h3 className="service-card-three__title">
                        <Link to="/services">Automatización Industrial</Link>
                      </h3>
                      <p className="service-card-three__text">
                        Automatizamos tus procesos industriales con la más alta tecnología disponible en el mercado.
                      </p>
                    </div>
                  </div>
                </li>

                <li className="service-four__list__item">
                  <div className="service-card-three">
                    <div className="service-card-three__content">
                      <div className="service-card-three__icon">
                        <i className="flaticon-insurance-3" />
                      </div>

                      <h3 className="service-card-three__title">
                        <Link to="/services">Corrección de Factor de Potencia</Link>
                      </h3>
                      <p className="service-card-three__text">
                        Mejora la eficiencia de tu sistema eléctrico con soluciones de corrección de factor de potencia.
                      </p>
                    </div>
                  </div>
                </li>

                <li className="service-four__list__item">
                  <div className="service-card-three">
                    <div className="service-card-three__content">
                      <div className="service-card-three__icon">
                        <i className="flaticon-house" />
                      </div>

                      <h3 className="service-card-three__title">
                        <Link to="/services">Sistemas de Energía Renovable</Link>
                      </h3>
                      <p className="service-card-three__text">
                        Implementa soluciones de energía renovable para un consumo energético más eficiente y sostenible.
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Take;
