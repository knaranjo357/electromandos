import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function AboutCompany() {
  const [video, setVideo] = useState(false);

  return (
    <>
      <section className="about-one">
        <div className="container">
          <div className="row gutter-y-60">
            {/* Sección de Imagen y Video */}
            <div className="col-md-12 col-lg-6">
              <div className="about-one__image">
                {/* Actualiza la ruta de la imagen según corresponda */}
                <img src="assets/images/resources/about-1-1.jpg" alt="Electromandos del Oriente" />
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

            {/* Sección de Contenido */}
            <div className="col-md-12 col-lg-6 d-flex">
              <div className="my-auto">
                <div className="about-one__content">
                  <div className="sec-title text-start">
                    <p className="sec-title__tagline">Sobre Nosotros</p>

                    <h3 className="sec-title__title">
                      Liderando el Sector Eléctrico Industrial <br />
                      desde 1990
                    </h3>
                  </div>

                  <p className="about-one__content__text">
                    Electromandos del Oriente S.A.S. fue fundada en Bucaramanga el 18 de marzo de 1990 por César Orlando Peñuela. Desde nuestros inicios, nos hemos dedicado a ofrecer servicios de reparación, asistencia, instalación y asesoría en zonas residenciales e industriales. Con el tiempo, nos especializamos en trabajos industriales, ampliando nuestro portafolio con herramientas y maquinaria de última generación para proporcionar soluciones eléctricas de alta calidad y respaldo a nuestros clientes.
                  </p>

                  {/* Estadísticas de la Empresa */}
                  <ul className="list-unstyled about-one__progress">
                    <li>
                      <h3 className="about-one__progress__title">34+ Años de Experiencia</h3>
                      <div className="bar">
                        <div
                          className="bar-inner count-bar"
                          data-percent="34%"
                          style={{ width: '34%' }}
                        >
                          <div className="count-text">34+</div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <h3 className="about-one__progress__title">200+ Proyectos Completados</h3>
                      <div className="bar">
                        <div
                          className="bar-inner count-bar"
                          data-percent="200%"
                          style={{ width: '200%' }}
                        >
                          <div className="count-text">200+</div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <h3 className="about-one__progress__title">150+ Clientes Satisfechos</h3>
                      <div className="bar">
                        <div
                          className="bar-inner count-bar"
                          data-percent="150%"
                          style={{ width: '150%' }}
                        >
                          <div className="count-text">150+</div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <h3 className="about-one__progress__title">20+ Certificaciones</h3>
                      <div className="bar">
                        <div
                          className="bar-inner count-bar"
                          data-percent="20%"
                          style={{ width: '20%' }}
                        >
                          <div className="count-text">20+</div>
                        </div>
                      </div>
                    </li>
                  </ul>

                  {/* Botones de Acción */}
                  <div className="about-one__btns">
                    <Link to="/about" className="thm-btn thm-btn--three about-one__btn">
                      <span>
                        Conócenos Más
                        <i className="far fa-arrow-right" />
                      </span>
                    </Link>

                    <Link to="/services" className="thm-btn thm-btn--two about-one__btn about-one__btn--two">
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

        {/* Popup de Video */}
        {video && (
          <div className={`YouTubePopUp-Wrap ${video && 'YouTubePopUp-hide'}`} onClick={() => setVideo(false)}>
            <div className="YouTubePopUp-Content">
              <span className="YouTubePopUp-Close" />
              <iframe
                src="https://www.youtube.com/embed/CWCPovmNWK8?autoplay=1"
                allowFullScreen
                title="Electromandos del Oriente Video"
              />
            </div>
          </div>
        )}
      </section>
    </>
  );
}

export default AboutCompany;
