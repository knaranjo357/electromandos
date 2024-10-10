import React from 'react';
import CountUp from 'react-countup';
import { Link } from 'react-router-dom';

function Company() {
  return (
    <>
      <section className="service-five">
        <div className="container">
          <div className="row gutter-y-60">
            <div className="col-md-12 col-lg-6 text-center">
              <div className="service-three__image">
                <img src="assets/images/services/service-5-1.png" alt="Electromandos del Oriente S.A.S." style={{width:"655px", height:"620px"}}/>
                <div className="service-three__image__caption text-start">
                  <h3 className="count-box service-three__image__caption__count">
                    <CountUp end={34} duration={2} /> {/* Años de experiencia */}
                  </h3>
                  <p className="service-three__image__caption__text">
                    Años de Experiencia
                  </p>
                </div>
                <div className="service-three__image__check">
                  <i className="flaticon-tick" />
                  <span>Calidad Garantizada</span>
                </div>
              </div>
            </div>

            <div className="col-md-12 col-lg-6">
              <div className="service-five__content">
                <div className="sec-title text-start">
                  <p className="sec-title__tagline">Sobre la Empresa</p>
                  <h3 className="sec-title__title">
                    Soluciones Eléctricas Industriales de Alta Calidad
                  </h3>
                </div>
                <div className="service-five__text">
                  En <strong>Electromandos del Oriente S.A.S.</strong>, nos especializamos en la implementación de soluciones eléctricas industriales que maximizan la eficiencia y garantizan la seguridad operativa en cada proyecto. Con más de 25 años de experiencia, hemos desarrollado proyectos en sectores clave como avícola, alimentario, y más.
                </div>
                <div className="service-five__btns">
                  <Link to="/about" className="thm-btn about-one__btn">
                    <span>
                      Conoce Más
                      <i className="far fa-arrow-right" />
                    </span>
                  </Link>
                  <Link to="/insurances" className="thm-btn thm-btn--two about-one__btn about-one__btn--two">
                    <span>
                      Nuestros Servicios
                      <i className="far fa-arrow-right" />
                    </span>
                  </Link>
                </div>
                <ul className="service-five__list list-unstyled">
                  <li>
                    <div className="service-five__list__icon">
                      <i className="flaticon-management" />
                    </div>
                    <h3 className="service-five__list__title">+.5k</h3> {/* Clientes activos */}
                    <p className="service-five__list__text">Clientes Activos</p>
                  </li>
                  <li>
                    <div className="service-five__list__icon">
                      <i className="flaticon-rating" />
                    </div>
                    <h3 className="service-five__list__title">99%</h3> {/* Satisfacción de los clientes */}
                    <p className="service-five__list__text">Satisfacción de Clientes</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Company;
