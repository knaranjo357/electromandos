import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CountUp from 'react-countup';

function Company() {
  const [video, setVideo] = useState(false);

  return (
    <>
      <section className="about-one about-one--home-two">
        <div className="container">
          <img
            src="assets/images/shapes/about-1-a-1.png"
            className="about-one--home-two__bg wow fadeInLeft"
            data-wow-duration="1500ms"
            alt="Fondo de la sección sobre nosotros"
          />
          <div className="row gutter-y-60">
            <div className="col-md-12 col-lg-6">
              <div className="about-one__image">
                <img
                  src="assets/images/resources/about-1-1.jpg"
                  alt="Imagen de la empresa"
                />
                <Link
                  to="#"
                  className="video-popup about-one__video"
                  onClick={() => setVideo(true)}
                >
                  <i className="fa fa-play" />
                  <span>Ver Video</span>
                </Link>
              </div>
            </div>

            <div className="col-md-12 col-lg-6 d-flex">
              <div className="my-auto">
                <div className="about-one__content">
                  <div className="sec-title text-start">
                    <p className="sec-title__tagline">Sobre Nosotros</p>

                    <h3 className="sec-title__title">
                      Líderes en Soluciones Eléctricas Industriales
                    </h3>
                  </div>

                  <p className="about-one__content__text">
                    Electromandos del Oriente S.A.S. ha sido un referente en el sector eléctrico desde 1990, ofreciendo servicios de reparación, instalación y asesoría tanto en zonas residenciales como industriales. Con una trayectoria sólida y un portafolio diversificado, nos especializamos en automatización industrial y proyectos eléctricos de alta calidad.
                  </p>

                  <ul className="list-unstyled about-one__progress">
                    <li>
                      <h3 className="about-one__progress__title">Años en el Mercado</h3>
                      <div className="bar">
                        <div
                          className="bar-inner count-bar"
                          data-percent="34%"
                          style={{ width: "34%" }}
                        >
                          <div className="count-text">34 Años</div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <h3 className="about-one__progress__title">Proyectos Realizados</h3>
                      <div className="bar">
                        <div
                          className="bar-inner count-bar"
                          data-percent="12%"
                          style={{ width: "12%" }}
                        >
                          <div className="count-text">12 Proyectos</div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <h3 className="about-one__progress__title">Clientes Satisfechos</h3>
                      <div className="bar">
                        <div
                          className="bar-inner count-bar"
                          data-percent="8%"
                          style={{ width: "8%" }}
                        >
                          <div className="count-text">8 Clientes</div>
                        </div>
                      </div>
                    </li>
                  </ul>

                  <div className="about-one__btns">
                    <Link to="/about" className="thm-btn thm-btn--three about-one__btn">
                      <span>
                        Más Información
                        <i className="far fa-arrow-right" />
                      </span>
                    </Link>

                    <Link to="/servicios" className="thm-btn thm-btn--two about-one__btn about-one__btn--two">
                      <span>
                        Nuestros Servicios
                        <i className="far fa-arrow-right" />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {video && (
          <div className={`YouTubePopUp-Wrap ${video && "YouTubePopUp-hide"}`} onClick={() => setVideo(false)}>
            <div className="YouTubePopUp-Content">
              <span className="YouTubePopUp-Close" />
              <iframe
                src="https://www.youtube.com/embed/CWCPovmNWK8?autoplay=1"
                allowFullScreen
                title="Video de Presentación"
              />
            </div>
          </div>
        )}
      </section>
    </>
  );
}

export default Company;
