import React, { useState } from 'react';
import CountUp from 'react-countup';
import { Link } from 'react-router-dom';
import { Waypoint } from 'react-waypoint';

function Main() {
  const [load, setLoad] = useState(false);

  return (
    <>
      <Waypoint onEnter={() => setLoad(true)}>
        <section className="funfact-one">
          {load && (
            <div className="container">
              <div className="sec-title text-center">
                <p className="sec-title__tagline">Estadísticas de la Empresa</p>
                <h3 className="sec-title__title">
                  Nos Complace Compartir Nuestros Logros
                </h3>
              </div>

              <div className="row gutter-y-30">
                {/* Años de Experiencia */}
                <div className="col-md-6 col-lg-6 col-xl-3">
                  <div className="funfact-one__card">
                    <i className="funfact-one__card__icon flaticon-gear" />
                    <h3 className="funfact-one__card__title count-box">
                      <CountUp end={34} duration={3} />+
                    </h3>
                    <p className="funfact-one__card__text">Años de Experiencia</p>
                    <div className="funfact-one__card__shape" />
                  </div>
                </div>

                {/* Proyectos Completados */}
                <div className="col-md-6 col-lg-6 col-xl-3">
                  <div className="funfact-one__card">
                    <i className="funfact-one__card__icon flaticon-project" />
                    <h3 className="funfact-one__card__title count-box">
                      <CountUp end={150} duration={3} />+
                    </h3>
                    <p className="funfact-one__card__text">Proyectos Completados</p>
                    <div className="funfact-one__card__shape" />
                  </div>
                </div>

                {/* Clientes Satisfechos */}
                <div className="col-md-6 col-lg-6 col-xl-3">
                  <div className="funfact-one__card">
                    <i className="funfact-one__card__icon flaticon-user" />
                    <h3 className="funfact-one__card__title count-box">
                      <CountUp end={80} duration={3} />+
                    </h3>
                    <p className="funfact-one__card__text">Clientes Satisfechos</p>
                    <div className="funfact-one__card__shape" />
                  </div>
                </div>

                {/* Certificaciones */}
                <div className="col-md-6 col-lg-6 col-xl-3">
                  <div className="funfact-one__card">
                    <i className="funfact-one__card__icon flaticon-certificate" />
                    <h3 className="funfact-one__card__title count-box">
                      <CountUp end={15} duration={3} />+
                    </h3>
                    <p className="funfact-one__card__text">Certificaciones</p>
                    <div className="funfact-one__card__shape" />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-12 text-center">
                  <div className="funfact-one__info">
                    <span>Encuentra Soluciones Eléctricas de Calidad al Mejor Precio</span>
                    <Link to="/services" className="thm-btn thm-btn--three funfact-one__info__btn">
                      <span>
                        Comenzar
                        <i className="far fa-arrow-right" />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </section>
      </Waypoint>
    </>
  );
}

export default Main;
