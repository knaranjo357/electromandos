import React from 'react';
import { Link } from 'react-router-dom';

function Servicios() {
  return (
    <>
      <section className="service-two">
        <div className="container">
          <div className="sec-title text-center">
            <p className="sec-title__tagline">Nuestros Servicios</p>
            <h3 className="sec-title__title">Excelentes oportunidades en soluciones eléctricas</h3>
          </div>

          <div className="row gutter-y-50">
            {/* Servicio 1: Instalación Eléctrica */}
            <div className="col-md-6 col-lg-3">
              <div className="service-card-two">
                <div
                  className="service-card-two__bg"
                  style={{ backgroundImage: "url(assets/images/services/instalacion-electrica.jpg)" }}
                  alt="Instalación Eléctrica"
                />
                
                <div className="service-card-two__content">
                  <div className="service-card-two__icon">
                    <i className="flaticon-electrical"></i>
                  </div>
                  
                  <h3 className="service-card-two__title">
                    <Link to="/serviciosdetalles/instalacion-electrica">Instalación Eléctrica</Link>
                  </h3>
                  <p className="service-card-two__text">
                    Soluciones completas de instalación eléctrica para entornos residenciales e industriales.
                  </p>
                  
                  <Link to="/serviciosdetalles/instalacion-electrica" className="service-card-two__link">
                    <i className="far fa-arrow-right"></i>
                  </Link>
                  <div className="service-card-two__shape" />
                </div>
              </div>
            </div>

            {/* Servicio 2: Automatización Industrial */}
            <div className="col-md-6 col-lg-3">
              <div className="service-card-two">
                <div
                  className="service-card-two__bg"
                  style={{ backgroundImage: "url(assets/images/services/automatizacion-industrial.jpg)" }}
                  alt="Automatización Industrial"
                />
                
                <div className="service-card-two__content">
                  <div className="service-card-two__icon">
                    <i className="flaticon-automation"></i>
                  </div>
                  
                  <h3 className="service-card-two__title">
                    <Link to="/serviciosdetalles/automatizacion-industrial">Automatización Industrial</Link>
                  </h3>
                  <p className="service-card-two__text">
                    Implementamos sistemas automatizados para optimizar tus procesos industriales.
                  </p>
                  
                  <Link to="/serviciosdetalles/automatizacion-industrial" className="service-card-two__link">
                    <i className="far fa-arrow-right"></i>
                  </Link>
                  <div className="service-card-two__shape" />
                </div>
              </div>
            </div>

            {/* Servicio 3: Mantenimiento Eléctrico */}
            <div className="col-md-6 col-lg-3">
              <div className="service-card-two">
                <div
                  className="service-card-two__bg"
                  style={{ backgroundImage: "url(assets/images/services/mantenimiento-electrico.jpg)" }}
                  alt="Mantenimiento Eléctrico"
                />
                
                <div className="service-card-two__content">
                  <div className="service-card-two__icon">
                    <i className="flaticon-maintenance"></i>
                  </div>
                  
                  <h3 className="service-card-two__title">
                    <Link to="/serviciosdetalles/mantenimiento-electrico">Mantenimiento Eléctrico</Link>
                  </h3>
                  <p className="service-card-two__text">
                    Mantenemos y optimizamos tus instalaciones eléctricas para garantizar su eficiencia y seguridad.
                  </p>
                  
                  <Link to="/serviciosdetalles/mantenimiento-electrico" className="service-card-two__link">
                    <i className="far fa-arrow-right"></i>
                  </Link>
                  <div className="service-card-two__shape" />
                </div>
              </div>
            </div>

            {/* Servicio 4: Proyectos Eléctricos */}
            <div className="col-md-6 col-lg-3">
              <div className="service-card-two">
                <div
                  className="service-card-two__bg"
                  style={{ backgroundImage: "url(assets/images/services/proyectos-electricos.jpg)" }}
                  alt="Proyectos Eléctricos"
                />
                
                <div className="service-card-two__content">
                  <div className="service-card-two__icon">
                    <i className="flaticon-project-management"></i>
                  </div>
                  
                  <h3 className="service-card-two__title">
                    <Link to="/serviciosdetalles/proyectos-electricos">Proyectos Eléctricos</Link>
                  </h3>
                  <p className="service-card-two__text">
                    Diseño y ejecución de proyectos eléctricos a medida para tus necesidades específicas.
                  </p>
                  
                  <Link to="/serviciosdetalles/proyectos-electricos" className="service-card-two__link">
                    <i className="far fa-arrow-right"></i>
                  </Link>
                  <div className="service-card-two__shape" />
                </div>
              </div>
            </div>

            {/* Servicio 5: Consultoría Eléctrica */}
            <div className="col-md-6 col-lg-3">
              <div className="service-card-two">
                <div
                  className="service-card-two__bg"
                  style={{ backgroundImage: "url(assets/images/services/consultoria-electrica.jpg)" }}
                  alt="Consultoría Eléctrica"
                />
                
                <div className="service-card-two__content">
                  <div className="service-card-two__icon">
                    <i className="flaticon-consulting"></i>
                  </div>
                  
                  <h3 className="service-card-two__title">
                    <Link to="/serviciosdetalles/consultoria-electrica">Consultoría Eléctrica</Link>
                  </h3>
                  <p className="service-card-two__text">
                    Asesoramos en la selección de equipos y diseño de sistemas eléctricos eficientes.
                  </p>
                  
                  <Link to="/serviciosdetalles/consultoria-electrica" className="service-card-two__link">
                    <i className="far fa-arrow-right"></i>
                  </Link>
                  <div className="service-card-two__shape" />
                </div>
              </div>
            </div>

            {/* Servicio 6: Distribución y Comercialización */}
            <div className="col-md-6 col-lg-3">
              <div className="service-card-two">
                <div
                  className="service-card-two__bg"
                  style={{ backgroundImage: "url(assets/images/services/distribucion-comercializacion.jpg)" }}
                  alt="Distribución y Comercialización"
                />
                
                <div className="service-card-two__content">
                  <div className="service-card-two__icon">
                    <i className="flaticon-distribution"></i>
                  </div>
                  
                  <h3 className="service-card-two__title">
                    <Link to="/serviciosdetalles/distribucion-comercializacion">Distribución y Comercialización</Link>
                  </h3>
                  <p className="service-card-two__text">
                    Distribuimos y comercializamos equipos y componentes eléctricos de alta calidad.
                  </p>
                  
                  <Link to="/serviciosdetalles/distribucion-comercializacion" className="service-card-two__link">
                    <i className="far fa-arrow-right"></i>
                  </Link>
                  <div className="service-card-two__shape" />
                </div>
              </div>
            </div>

            {/* Servicio 7: Automatización de Procesos */}
            <div className="col-md-6 col-lg-3">
              <div className="service-card-two">
                <div
                  className="service-card-two__bg"
                  style={{ backgroundImage: "url(assets/images/services/automatizacion-procesos.jpg)" }}
                  alt="Automatización de Procesos"
                />
                
                <div className="service-card-two__content">
                  <div className="service-card-two__icon">
                    <i className="flaticon-automation"></i>
                  </div>
                  
                  <h3 className="service-card-two__title">
                    <Link to="/serviciosdetalles/automatizacion-procesos">Automatización de Procesos</Link>
                  </h3>
                  <p className="service-card-two__text">
                    Optimización y automatización de tus procesos industriales para incrementar la eficiencia.
                  </p>
                  
                  <Link to="/serviciosdetalles/automatizacion-procesos" className="service-card-two__link">
                    <i className="far fa-arrow-right"></i>
                  </Link>
                  <div className="service-card-two__shape" />
                </div>
              </div>
            </div>

            {/* Servicio 8: Energías Renovables */}
            <div className="col-md-6 col-lg-3">
              <div className="service-card-two">
                <div
                  className="service-card-two__bg"
                  style={{ backgroundImage: "url(assets/images/services/energias-renovables.jpg)" }}
                  alt="Energías Renovables"
                />
                
                <div className="service-card-two__content">
                  <div className="service-card-two__icon">
                    <i className="flaticon-solar-power"></i>
                  </div>
                  
                  <h3 className="service-card-two__title">
                    <Link to="/serviciosdetalles/energias-renovables">Energías Renovables</Link>
                  </h3>
                  <p className="service-card-two__text">
                    Implementación de soluciones de energías renovables para un futuro sostenible.
                  </p>
                  
                  <Link to="/serviciosdetalles/energias-renovables" className="service-card-two__link">
                    <i className="far fa-arrow-right"></i>
                  </Link>
                  <div className="service-card-two__shape" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

export default Servicios;
