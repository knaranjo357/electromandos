import React from 'react';
import { Link } from 'react-router-dom';

function Offer() {
  return (
    <>
      {/* Sección de Servicios Ofrecidos */}
      <section className="service-one service-one--home-two">
        <div className="service-one--home-two__inner">
          <div className="service-one--home-two__bg" />
          
          <div className="container">
            <div className="sec-title text-center">
              <p className="sec-title__tagline">Nuestros Servicios</p>
              <h3 className="sec-title__title">
                Excelentes soluciones eléctricas para un <br />
                futuro más eficiente
              </h3>
            </div>

            <div className="row gutter-y-60">
              {/* Servicio 1: Automatización Industrial */}
              <div className="col-md-6 col-lg-3">
                <div className="service-card">
                  <div className="service-card__image">
                    <img src="assets/images/services/automatizacion-industrial.jpg" alt="Automatización Industrial" />
                    <div className="service-card__hover">
                      <h3 className="service-card__title">
                        <Link to="/serviciosdetalles/automatizacion-industrial">Automatización Industrial</Link>
                      </h3>
                      <p className="service-card__text">
                        Implementamos sistemas automatizados para optimizar tus procesos industriales.
                      </p>
                      <Link to="/serviciosdetalles/automatizacion-industrial" className="service-card__link">
                        <i className="far fa-arrow-right" />
                      </Link>
                    </div>
                  </div>

                  <div className="service-card__content">
                    <h3 className="service-card__title">
                      <Link to="/serviciosdetalles/automatizacion-industrial">Automatización Industrial</Link>
                    </h3>
                    <Link to="/serviciosdetalles/automatizacion-industrial" className="service-card__link">
                      <i className="far fa-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Servicio 2: Instalación Eléctrica */}
              <div className="col-md-6 col-lg-3">
                <div className="service-card">
                  <div className="service-card__image">
                    <img src="assets/images/services/instalacion-electrica.jpg" alt="Instalación Eléctrica" />
                    <div className="service-card__hover">
                      <h3 className="service-card__title">
                        <Link to="/serviciosdetalles/instalacion-electrica">Instalación Eléctrica</Link>
                      </h3>
                      <p className="service-card__text">
                        Soluciones completas de instalación eléctrica para entornos residenciales e industriales.
                      </p>
                      <Link to="/serviciosdetalles/instalacion-electrica" className="service-card__link">
                        <i className="far fa-arrow-right" />
                      </Link>
                    </div>
                  </div>

                  <div className="service-card__content">
                    <h3 className="service-card__title">
                      <Link to="/serviciosdetalles/instalacion-electrica">Instalación Eléctrica</Link>
                    </h3>
                    <Link to="/serviciosdetalles/instalacion-electrica" className="service-card__link">
                      <i className="far fa-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Servicio 3: Mantenimiento Eléctrico */}
              <div className="col-md-6 col-lg-3">
                <div className="service-card">
                  <div className="service-card__image">
                    <img src="assets/images/services/mantenimiento-electrico.jpg" alt="Mantenimiento Eléctrico" />
                    <div className="service-card__hover">
                      <h3 className="service-card__title">
                        <Link to="/serviciosdetalles/mantenimiento-electrico">Mantenimiento Eléctrico</Link>
                      </h3>
                      <p className="service-card__text">
                        Mantenemos y optimizamos tus instalaciones eléctricas para garantizar su eficiencia y seguridad.
                      </p>
                      <Link to="/serviciosdetalles/mantenimiento-electrico" className="service-card__link">
                        <i className="far fa-arrow-right" />
                      </Link>
                    </div>
                  </div>

                  <div className="service-card__content">
                    <h3 className="service-card__title">
                      <Link to="/serviciosdetalles/mantenimiento-electrico">Mantenimiento Eléctrico</Link>
                    </h3>
                    <Link to="/serviciosdetalles/mantenimiento-electrico" className="service-card__link">
                      <i className="far fa-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Servicio 4: Proyectos Eléctricos */}
              <div className="col-md-6 col-lg-3">
                <div className="service-card">
                  <div className="service-card__image">
                    <img src="assets/images/services/proyectos-electricos.jpg" alt="Proyectos Eléctricos" />
                    <div className="service-card__hover">
                      <h3 className="service-card__title">
                        <Link to="/serviciosdetalles/proyectos-electricos">Proyectos Eléctricos</Link>
                      </h3>
                      <p className="service-card__text">
                        Diseño y ejecución de proyectos eléctricos a medida para tus necesidades específicas.
                      </p>
                      <Link to="/serviciosdetalles/proyectos-electricos" className="service-card__link">
                        <i className="far fa-arrow-right" />
                      </Link>
                    </div>
                  </div>

                  <div className="service-card__content">
                    <h3 className="service-card__title">
                      <Link to="/serviciosdetalles/proyectos-electricos">Proyectos Eléctricos</Link>
                    </h3>
                    <Link to="/serviciosdetalles/proyectos-electricos" className="service-card__link">
                      <i className="far fa-arrow-right" />
                    </Link>
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

export default Offer;
