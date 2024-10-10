import React from 'react';
import { Link } from 'react-router-dom';

function Gallery() {
  return (
    <>
      {/* Sección de Galería de Proyectos */}
      <section className="portfolio-one">
        <div className="container">
          <div className="portfolio-one__top">
            <div className="sec-title text-start">
              <p className="sec-title__tagline">Galería de Proyectos</p>
              <h3 className="sec-title__title">Explora nuestros proyectos realizados</h3>
            </div>

            <div className="portfolio-one__btns">
              <Link to="/portfoliogrid" className="thm-btn thm-btn--three portfolio-one__btn">
                <span>
                  Ver Más
                  <i className="far fa-arrow-right" />
                </span>
              </Link>
            </div>
          </div>

          <div className="row gutter-y-30">
            {/* Reemplaza estos elementos con tus proyectos reales */}
            <div className="col-md-6 col-lg-4">
              <div className="portfolio-card portfolio-card--two portfolio-card--three">
                <div className="portfolio-card__image">
                  <img src="assets/images/portfolio/proyecto-1.jpg" alt="Proyecto 1" />
                  <div className="portfolio-card__content">
                    <h3 className="portfolio-card__title">
                      <Link to="/portfoliodetails">Instalación Industrial</Link>
                    </h3>
                    <span className="portfolio-card__tagline">Proyectos Industriales</span>
                    <Link to="/portfoliodetails" className="portfolio-card__link">
                      <i className="far fa-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="portfolio-card portfolio-card--two portfolio-card--three">
                <div className="portfolio-card__image">
                  <img src="assets/images/portfolio/proyecto-2.jpg" alt="Proyecto 2" />
                  <div className="portfolio-card__content">
                    <h3 className="portfolio-card__title">
                      <Link to="/portfoliodetails">Automatización de Procesos</Link>
                    </h3>
                    <span className="portfolio-card__tagline">Automatización</span>
                    <Link to="/portfoliodetails" className="portfolio-card__link">
                      <i className="far fa-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="portfolio-card portfolio-card--two portfolio-card--three">
                <div className="portfolio-card__image">
                  <img src="assets/images/portfolio/proyecto-3.jpg" alt="Proyecto 3" />
                  <div className="portfolio-card__content">
                    <h3 className="portfolio-card__title">
                      <Link to="/portfoliodetails">Mantenimiento Eléctrico</Link>
                    </h3>
                    <span className="portfolio-card__tagline">Mantenimiento</span>
                    <Link to="/portfoliodetails" className="portfolio-card__link">
                      <i className="far fa-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* Añade más proyectos según sea necesario */}
          </div>
        </div>
      </section>

      {/* Sección de Llamada a la Acción para Presupuestos */}
      <section className="cta-three">
        <div className="container">
          <div
            className="cta-three__inner"
            style={{ backgroundImage: "url(assets/images/background/cta-three-bg-1-1.jpg)" }}
          >
            <div className="sec-title text-start">
              <p className="sec-title__tagline">Solicita un Presupuesto</p>
              <h3 className="sec-title__title">
                ¡Inicia tu proyecto eléctrico con nosotros!
              </h3>
            </div>

            <div className="cta-one__content">
              <Link to="/pricing" className="thm-btn thm-btn--two cta-one__btn">
                <span>
                  Solicitar Presupuesto
                  <i className="far fa-arrow-right" />
                </span>
              </Link>

              <div className="cta-one__info">
                <div className="cta-one__info__icon">
                  <i className="far fa-phone-plus" />
                </div>

                <div className="cta-one__info__content">
                  <span className="cta-one__info__name">Teléfono</span>
                  <Link to="tel:+000(123)45688">+000 (123) 456 88</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Fortalezas de la Empresa */}
      <section
        className="faq-three faq-three--home-3 faq-three--home-2"
        style={{ backgroundImage: "url(assets/images/shapes/faq-3-home-2-bg.png)" }}
      >
        <div className="container">
          <div className="row gutter-y-60">
            <div className="col-md-12 col-lg-6">
              <div className="faq-three--home-2__images">
                <img src="assets/images/resources/faq-3-home-2-1.jpg" alt="Fortalezas 1" />
                <img src="assets/images/resources/faq-3-home-2-2.jpg" alt="Fortalezas 2" />
                <div className="about-five__image__caption">
                  <h3 className="about-five__image__caption__title">
                    34 Años de Experiencia en Servicios Eléctricos
                  </h3>
                  <p className="about-five__image__caption__text">
                    CEO &amp; Fundador
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-12 col-lg-6">
              <div className="sec-title text-start">
                <p className="sec-title__tagline">Obtén Consultas</p>
                <h3 className="sec-title__title">
                  ¿Buscas un agente eléctrico o necesitas asesoría?
                </h3>
              </div>

              <div className="faq-three__right">
                {/* Fortalezas de la Empresa */}
                <div className="faq-three__box">
                  <div className="faq-three__box__icon">
                    <i className="flaticon-trust" />
                  </div>

                  <h3 className="faq-three__box__title">
                    <Link to="/serviciosdetalles">Partners Confiables</Link>
                  </h3>

                  <Link to="/serviciosdetalles" className="faq-three__box__link">
                    <i className="far fa-long-arrow-right" />
                  </Link>

                  <div className="faq-three__box__hover">
                    <div className="faq-three__box__hover__icon">
                      <i className="flaticon-trust" />
                    </div>

                    <h3 className="faq-three__box__hover__title">
                      <Link to="/serviciosdetalles">Partners Confiables</Link>
                    </h3>

                    <div className="faq-three__box__hover__text">
                      Nos asociamos con los mejores proveedores para garantizar calidad.
                    </div>
                  </div>
                </div>

                <div className="faq-three__box">
                  <div className="faq-three__box__icon">
                    <i className="flaticon-medical-insurance" />
                  </div>

                  <h3 className="faq-three__box__title">
                    <Link to="/serviciosdetalles">Soluciones Personalizadas</Link>
                  </h3>

                  <Link to="/serviciosdetalles" className="faq-three__box__link">
                    <i className="far fa-long-arrow-right" />
                  </Link>

                  <div className="faq-three__box__hover">
                    <div className="faq-three__box__hover__icon">
                      <i className="flaticon-medical-insurance" />
                    </div>

                    <h3 className="faq-three__box__hover__title">
                      <Link to="/serviciosdetalles">Soluciones Personalizadas</Link>
                    </h3>

                    <div className="faq-three__box__hover__text">
                      Adaptamos nuestras soluciones a las necesidades específicas de cada cliente.
                    </div>
                  </div>
                </div>

                <div className="faq-three__box">
                  <div className="faq-three__box__icon">
                    <i className="flaticon-commercial" />
                  </div>

                  <h3 className="faq-three__box__title">
                    <Link to="/serviciosdetalles">Eficiencia y Calidad</Link>
                  </h3>

                  <Link to="/serviciosdetalles" className="faq-three__box__link">
                    <i className="far fa-long-arrow-right" />
                  </Link>

                  <div className="faq-three__box__hover">
                    <div className="faq-three__box__hover__icon">
                      <i className="flaticon-commercial" />
                    </div>

                    <h3 className="faq-three__box__hover__title">
                      <Link to="/serviciosdetalles">Eficiencia y Calidad</Link>
                    </h3>

                    <div className="faq-three__box__hover__text">
                      Implementamos las mejores prácticas para asegurar resultados óptimos.
                    </div>
                  </div>
                </div>

                <div className="faq-three__box">
                  <div className="faq-three__box__icon">
                    <i className="flaticon-agile" />
                  </div>

                  <h3 className="faq-three__box__title">
                    <Link to="/serviciosdetalles">Procesos Simplificados</Link>
                  </h3>

                  <Link to="/serviciosdetalles" className="faq-three__box__link">
                    <i className="far fa-long-arrow-right" />
                  </Link>

                  <div className="faq-three__box__hover">
                    <div className="faq-three__box__hover__icon">
                      <i className="flaticon-agile" />
                    </div>

                    <h3 className="faq-three__box__hover__title">
                      <Link to="/serviciosdetalles">Procesos Simplificados</Link>
                    </h3>

                    <div className="faq-three__box__hover__text">
                      Facilitamos la gestión de tus proyectos con procesos claros y eficientes.
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

export default Gallery;
