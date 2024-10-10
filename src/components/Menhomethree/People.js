import React from 'react';
import { Link } from 'react-router-dom';

function People() {
  return (
    <>
      <section
        className="faq-three faq-three--home-3"
        style={{ backgroundImage: 'url(assets/images/shapes/faq-3-home-3-bg.png)' }}
      >
        <div className="container">
          <div className="sec-title text-center">
            <p className="sec-title__tagline">¿Por qué elegirnos?</p>
            <h3 className="sec-title__title">
              ¿Por qué las empresas eligen <br />
              nuestros servicios eléctricos industriales?
            </h3>
          </div>

          <div className="row gutter-y-60">
            <div className="col-md-12 col-lg-6 d-flex">
              <div className="my-auto">
                <div className="faq-two__content faq-two__content--services">
                  <div
                    className="accordion faq-two__accordion faq-two__accordion--ml"
                    id="faq-two__accordion-3"
                  >
                    <div className="accordion-item faq-two__accordion__item accordion--active">
                      <h2
                        className="accordion-header faq-two__accordion__header"
                        id="faq-two__accordion-3__heading-1"
                      >
                        <button
                          className="accordion-button faq-two__accordion__button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#faq-two__accordion-3__collapse-1"
                          aria-expanded="true"
                          aria-controls="faq-two__accordion-3__collapse-1"
                        >
                          <i className="far fa-check" />
                          Beneficios de nuestras soluciones eléctricas
                          <span className="faq-two__accordion__icon" />
                        </button>
                      </h2>
                      <div
                        id="faq-two__accordion-3__collapse-1"
                        className="accordion-collapse collapse show faq-two__accordion__collapse"
                        aria-labelledby="faq-two__accordion-3__heading-1"
                        data-bs-parent="#faq-two__accordion-3"
                      >
                        <div className="accordion-body faq-two__accordion__body">
                          Nuestras soluciones están diseñadas para mejorar la eficiencia,
                          reducir el consumo energético y aumentar la seguridad en los
                          procesos industriales, adaptándonos a cada sector.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item faq-two__accordion__item">
                      <h2
                        className="accordion-header faq-two__accordion__header"
                        id="faq-two__accordion-3__heading-2"
                      >
                        <button
                          className="accordion-button faq-two__accordion__button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#faq-two__accordion-3__collapse-2"
                          aria-expanded="false"
                          aria-controls="faq-two__accordion-3__collapse-2"
                        >
                          <i className="far fa-check" />
                          ¿Qué tan amigable es nuestro equipo?
                          <span className="faq-two__accordion__icon" />
                        </button>
                      </h2>
                      <div
                        id="faq-two__accordion-3__collapse-2"
                        className="accordion-collapse faq-two__accordion__collapse collapse"
                        aria-labelledby="faq-two__accordion-3__heading-2"
                        data-bs-parent="#faq-two__accordion-3"
                      >
                        <div className="accordion-body faq-two__accordion__body">
                          Nuestro equipo altamente capacitado ofrece atención personalizada,
                          asesoría técnica, y soporte continuo para garantizar el éxito de
                          cada proyecto.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item faq-two__accordion__item">
                      <h2
                        className="accordion-header faq-two__accordion__header"
                        id="faq-two__accordion-3__heading-3"
                      >
                        <button
                          className="accordion-button faq-two__accordion__button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#faq-two__accordion-3__collapse-3"
                          aria-expanded="false"
                          aria-controls="faq-two__accordion-3__collapse-3"
                        >
                          <i className="far fa-check" />
                          ¿Por qué elegir nuestros servicios eléctricos?
                          <span className="faq-two__accordion__icon" />
                        </button>
                      </h2>
                      <div
                        id="faq-two__accordion-3__collapse-3"
                        className="accordion-collapse faq-two__accordion__collapse collapse"
                        aria-labelledby="faq-two__accordion-3__heading-3"
                        data-bs-parent="#faq-two__accordion-3"
                      >
                        <div className="accordion-body faq-two__accordion__body">
                          Ofrecemos soluciones integrales desde el diseño hasta la
                          instalación y mantenimiento, utilizando tecnología de punta para
                          maximizar la productividad.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item faq-two__accordion__item">
                      <h2
                        className="accordion-header faq-two__accordion__header"
                        id="faq-two__accordion-3__heading-4"
                      >
                        <button
                          className="accordion-button faq-two__accordion__button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#faq-two__accordion-3__collapse-4"
                          aria-expanded="false"
                          aria-controls="faq-two__accordion-3__collapse-4"
                        >
                          <i className="far fa-check" />
                          Ofertas especiales para proyectos industriales
                          <span className="faq-two__accordion__icon" />
                        </button>
                      </h2>
                      <div
                        id="faq-two__accordion-3__collapse-4"
                        className="accordion-collapse faq-two__accordion__collapse collapse"
                        aria-labelledby="faq-two__accordion-3__heading-4"
                        data-bs-parent="#faq-two__accordion-3"
                      >
                        <div className="accordion-body faq-two__accordion__body">
                          Nos enfocamos en ofrecer soluciones personalizadas y económicas,
                          optimizando costos y mejorando la calidad en cada proyecto.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-12 col-lg-6">
              <div className="faq-three__right">
                <div className="faq-three__box">
                  <div className="faq-three__box__icon">
                    <i className="flaticon-trust" />
                  </div>
                  <h3 className="faq-three__box__title">
                    <Link to="/insurancesdetails">Socios de confianza</Link>
                  </h3>
                  <Link to="/insurancesdetails" className="faq-three__box__link">
                    <i className="far fa-long-arrow-right" />
                  </Link>
                  <div className="faq-three__box__hover">
                    <div className="faq-three__box__hover__icon">
                      <i className="flaticon-trust" />
                    </div>
                    <h3 className="faq-three__box__hover__title">
                      <Link to="/insurancesdetails">Socios de confianza</Link>
                    </h3>
                    <div className="faq-three__box__hover__text">
                      Trabajamos con socios estratégicos que aseguran la mejor calidad en
                      cada proyecto.
                    </div>
                  </div>
                </div>

                <div className="faq-three__box">
                  <div className="faq-three__box__icon">
                    <i className="flaticon-medical-insurance" />
                  </div>
                  <h3 className="faq-three__box__title">
                    <Link to="/insurancesdetails">Protección garantizada</Link>
                  </h3>
                  <Link to="/insurancesdetails" className="faq-three__box__link">
                    <i className="far fa-long-arrow-right" />
                  </Link>
                  <div className="faq-three__box__hover">
                    <div className="faq-three__box__hover__icon">
                      <i className="flaticon-medical-insurance" />
                    </div>
                    <h3 className="faq-three__box__hover__title">
                      <Link to="/insurancesdetails">Protección garantizada</Link>
                    </h3>
                    <div className="faq-three__box__hover__text">
                      Nuestras soluciones eléctricas están diseñadas para garantizar la
                      seguridad de tu infraestructura.
                    </div>
                  </div>
                </div>

                <div className="faq-three__box">
                  <div className="faq-three__box__icon">
                    <i className="flaticon-commercial" />
                  </div>
                  <h3 className="faq-three__box__title">
                    <Link to="/insurancesdetails">Soluciones comerciales</Link>
                  </h3>
                  <Link to="/insurancesdetails" className="faq-three__box__link">
                    <i className="far fa-long-arrow-right" />
                  </Link>
                  <div className="faq-three__box__hover">
                    <div className="faq-three__box__hover__icon">
                      <i className="flaticon-commercial" />
                    </div>
                    <h3 className="faq-three__box__hover__title">
                      <Link to="/insurancesdetails">Soluciones comerciales</Link>
                    </h3>
                    <div className="faq-three__box__hover__text">
                      Ofrecemos soluciones comerciales personalizadas para diferentes
                      industrias.
                    </div>
                  </div>
                </div>

                <div className="faq-three__box">
                  <div className="faq-three__box__icon">
                    <i className="flaticon-agile" />
                  </div>
                  <h3 className="faq-three__box__title">
                    <Link to="/insurancesdetails">Procesos ágiles y eficientes</Link>
                  </h3>
                  <Link to="/insurancesdetails" className="faq-three__box__link">
                    <i className="far fa-long-arrow-right" />
                  </Link>
                  <div className="faq-three__box__hover">
                    <div className="faq-three__box__hover__icon">
                      <i className="flaticon-agile" />
                    </div>
                    <h3 className="faq-three__box__hover__title">
                      <Link to="/insurancesdetails">Procesos ágiles y eficientes</Link>
                    </h3>
                    <div className="faq-three__box__hover__text">
                      Nuestros procesos están diseñados para ser rápidos y eficientes,
                      asegurando tiempos de entrega óptimos.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default People;
