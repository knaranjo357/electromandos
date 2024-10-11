import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Offer() {
  const [video, setVideo] = useState(false);

  return (
    <>
      <section className="faq-three">
        <div className="container">
          <div className="row gutter-y-60">
            {/* Sección de Imagen y Video */}
            <div className="col-md-12 col-lg-6">
              <div className="about-one__image about-one__image--services">
                {/* Imagen representativa de Electromandos del Oriente S.A.S. */}
                <img src="assets/images/proyectos/hornociclonico.jpg" alt="Electromandos del Oriente S.A.S." style={{ width: '560px', height: '670px', objectFit: 'cover' }}/>
                {/* Enlace para reproducir el video */}
                <Link
                  to="#"
                  className="video-popup about-one__video"
                  onClick={(e) => {
                    e.preventDefault(); // Previene la navegación predeterminada
                    setVideo(true);
                  }}
                >
                  <i className="fa fa-play" />
                  <span>Reproducir</span>
                </Link>
              </div>
            </div>

            {/* Sección de Contenido con FAQs */}
            <div className="col-md-12 col-lg-6 d-flex">
              <div className="my-auto">
                <div className="faq-two__content faq-two__content--services">
                  <div className="sec-title text-start">
                    <p className="sec-title__tagline">¿Por Qué Elegirnos?</p>

                    <h3 className="sec-title__title">
                      Razones por las que <br />
                      nuestros servicios eléctricos son la mejor opción
                    </h3>
                  </div>

                  {/* Acordeón de Preguntas Frecuentes */}
                  <div
                    className="accordion faq-two__accordion faq-two__accordion--ml"
                    id="faq-two__accordion-3"
                  >
                    {/* Pregunta 1 */}
                    <div className="accordion-item faq-two__accordion__item accordion--active">
                      <h2 className="accordion-header faq-two__accordion__header" id="faq-two__accordion-3__heading-1">
                        <button
                          className="accordion-button faq-two__accordion__button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#faq-two__accordion-3__collapse-1"
                          aria-expanded="true"
                          aria-controls="faq-two__accordion-3__collapse-1"
                        >
                          <i className="far fa-check" />
                          Experiencia y Profesionalismo
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
                          Con más de 34 años de experiencia en el sector eléctrico industrial, garantizamos soluciones efectivas y de alta calidad.
                        </div>
                      </div>
                    </div>

                    {/* Pregunta 2 */}
                    <div className="accordion-item faq-two__accordion__item">
                      <h2 className="accordion-header faq-two__accordion__header" id="faq-two__accordion-3__heading-2">
                        <button
                          className="accordion-button faq-two__accordion__button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#faq-two__accordion-3__collapse-2"
                          aria-expanded="false"
                          aria-controls="faq-two__accordion-3__collapse-2"
                        >
                          <i className="far fa-check" />
                          Soporte Técnico Continuo
                          <span className="faq-two__accordion__icon" />
                        </button>
                      </h2>
                      <div
                        id="faq-two__accordion-3__collapse-2"
                        className="accordion-collapse collapse faq-two__accordion__collapse"
                        aria-labelledby="faq-two__accordion-3__heading-2"
                        data-bs-parent="#faq-two__accordion-3"
                      >
                        <div className="accordion-body faq-two__accordion__body">
                          Nuestro equipo técnico está disponible para brindarte soporte y mantenimiento preventivo, asegurando el óptimo funcionamiento de tus sistemas eléctricos.
                        </div>
                      </div>
                    </div>

                    {/* Pregunta 3 */}
                    <div className="accordion-item faq-two__accordion__item">
                      <h2 className="accordion-header faq-two__accordion__header" id="faq-two__accordion-3__heading-3">
                        <button
                          className="accordion-button faq-two__accordion__button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#faq-two__accordion-3__collapse-3"
                          aria-expanded="false"
                          aria-controls="faq-two__accordion-3__collapse-3"
                        >
                          <i className="far fa-check" />
                          Tecnologías de Última Generación
                          <span className="faq-two__accordion__icon" />
                        </button>
                      </h2>
                      <div
                        id="faq-two__accordion-3__collapse-3"
                        className="accordion-collapse collapse faq-two__accordion__collapse"
                        aria-labelledby="faq-two__accordion-3__heading-3"
                        data-bs-parent="#faq-two__accordion-3"
                      >
                        <div className="accordion-body faq-two__accordion__body">
                          Utilizamos herramientas y maquinaria de punta para ofrecer soluciones innovadoras y eficientes en cada proyecto.
                        </div>
                      </div>
                    </div>

                    {/* Pregunta 4 */}
                    <div className="accordion-item faq-two__accordion__item">
                      <h2 className="accordion-header faq-two__accordion__header" id="faq-two__accordion-3__heading-4">
                        <button
                          className="accordion-button faq-two__accordion__button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#faq-two__accordion-3__collapse-4"
                          aria-expanded="false"
                          aria-controls="faq-two__accordion-3__collapse-4"
                        >
                          <i className="far fa-check" />
                          Atención Personalizada
                          <span className="faq-two__accordion__icon" />
                        </button>
                      </h2>
                      <div
                        id="faq-two__accordion-3__collapse-4"
                        className="accordion-collapse collapse faq-two__accordion__collapse"
                        aria-labelledby="faq-two__accordion-3__heading-4"
                        data-bs-parent="#faq-two__accordion-3"
                      >
                        <div className="accordion-body faq-two__accordion__body">
                          Nos enfocamos en entender tus necesidades específicas para ofrecerte soluciones a medida que optimicen tus operaciones industriales.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Popup de Video */}
          {video && (
            <div
              className={`YouTubePopUp-Wrap ${video && 'YouTubePopUp-hide'}`}
              onClick={() => setVideo(false)}
            >
              <div className="YouTubePopUp-Content">
                <span className="YouTubePopUp-Close" />
                <iframe
                  src="https://www.youtube.com/embed/CWCPovmNWK8?autoplay=1"
                  allowFullScreen
                  title="Video de Electromandos del Oriente S.A.S."
                />
              </div>
            </div>
          )}
          </div>
        </section>
      </>
    );
  }

  export default Offer;
