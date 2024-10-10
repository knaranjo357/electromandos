import React from 'react';
import New from './New';
import { Link } from 'react-router-dom';

function WhatWeOffer() {
  return (
    <>
      <section className="service-one">
        <div className="container">
          <div className="sec-title text-center">
            <p className="sec-title__tagline">Lo Que Ofrecemos</p>

            <h3 className="sec-title__title">
              Soluciones Eléctricas de Calidad <br />
              para un Futuro Mejor Juntos
            </h3>
          </div>

          <div className="row gutter-y-60">
            {/* Servicio 1: Diseño e Instalación Eléctrica */}
            <div className="col-md-6 col-lg-3">
              <div className="service-card">
                <div className="service-card__image">
                  <img src="assets/images/services/services-1-1.jpg" alt="Diseño e Instalación Eléctrica" />
                  <div className="service-card__hover">
                    <h3 className="service-card__title">
                      <Link to="/servicesdetails/diseno-instalacion">Diseño e Instalación Eléctrica</Link>
                    </h3>
                    <p className="service-card__text">
                      Ofrecemos servicios completos de diseño e instalación de sistemas eléctricos industriales adaptados a tus necesidades.
                    </p>
                    <Link to="/servicesdetails/diseno-instalacion" className="service-card__link">
                      <i className="far fa-arrow-right" />
                    </Link>
                  </div>
                </div>

                <div className="service-card__content">
                  <h3 className="service-card__title">
                    <Link to="/servicesdetails/diseno-instalacion">Diseño e Instalación Eléctrica</Link>
                  </h3>
                  <Link to="/servicesdetails/diseno-instalacion" className="service-card__link">
                    <i className="far fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Servicio 2: Automatización Industrial */}
            <div className="col-md-6 col-lg-3">
              <div className="service-card">
                <div className="service-card__image">
                  <img src="assets/images/services/services-1-2.jpg" alt="Automatización Industrial" />
                  <div className="service-card__hover">
                    <h3 className="service-card__title">
                      <Link to="/servicesdetails/automatizacion-industrial">Automatización Industrial</Link>
                    </h3>
                    <p className="service-card__text">
                      Implementamos soluciones de automatización para optimizar procesos mecánicos, eléctricos, neumáticos e hidráulicos en tu industria.
                    </p>
                    <Link to="/servicesdetails/automatizacion-industrial" className="service-card__link">
                      <i className="far fa-arrow-right" />
                    </Link>
                  </div>
                </div>

                <div className="service-card__content">
                  <h3 className="service-card__title">
                    <Link to="/servicesdetails/automatizacion-industrial">Automatización Industrial</Link>
                  </h3>
                  <Link to="/servicesdetails/automatizacion-industrial" className="service-card__link">
                    <i className="far fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Servicio 3: Proyectos Eléctricos en Baja Tensión */}
            <div className="col-md-6 col-lg-3">
              <div className="service-card">
                <div className="service-card__image">
                  <img src="assets/images/services/services-1-3.jpg" alt="Proyectos Eléctricos en Baja Tensión" />
                  <div className="service-card__hover">
                    <h3 className="service-card__title">
                      <Link to="/servicesdetails/proyectos-baja-tension">Proyectos Eléctricos en Baja Tensión</Link>
                    </h3>
                    <p className="service-card__text">
                      Diseñamos y ejecutamos proyectos eléctricos en baja tensión, garantizando seguridad y eficiencia en cada instalación.
                    </p>
                    <Link to="/servicesdetails/proyectos-baja-tension" className="service-card__link">
                      <i className="far fa-arrow-right" />
                    </Link>
                  </div>
                </div>

                <div className="service-card__content">
                  <h3 className="service-card__title">
                    <Link to="/servicesdetails/proyectos-baja-tension">Proyectos Eléctricos en Baja Tensión</Link>
                  </h3>
                  <Link to="/servicesdetails/proyectos-baja-tension" className="service-card__link">
                    <i className="far fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Servicio 4: Mantenimientos Preventivos y Correctivos */}
            <div className="col-md-6 col-lg-3">
              <div className="service-card">
                <div className="service-card__image">
                  <img src="assets/images/services/services-1-4.jpg" alt="Mantenimientos Preventivos y Correctivos" />
                  <div className="service-card__hover">
                    <h3 className="service-card__title">
                      <Link to="/servicesdetails/mantenimientos">Mantenimientos Preventivos y Correctivos</Link>
                    </h3>
                    <p className="service-card__text">
                      Realizamos mantenimientos preventivos y correctivos en subestaciones eléctricas, centros de control y tableros de distribución para asegurar su óptimo funcionamiento.
                    </p>
                    <Link to="/servicesdetails/mantenimientos" className="service-card__link">
                      <i className="far fa-arrow-right" />
                    </Link>
                  </div>
                </div>

                <div className="service-card__content">
                  <h3 className="service-card__title">
                    <Link to="/servicesdetails/mantenimientos">Mantenimientos Preventivos y Correctivos</Link>
                  </h3>
                  <Link to="/servicesdetails/mantenimientos" className="service-card__link">
                    <i className="far fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <New />
    </>
  );
}

export default WhatWeOffer;
