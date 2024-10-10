import React from 'react';
import { Link } from 'react-router-dom';

function First() {
  return (
    <>
      <section className="faq-one">
        <div className="container">
          <div className="row">
            {/* Columna de Contenido de FAQs */}
            <div className="col-md-12 col-lg-5">
              <div className="faq-one__content">
                <div className="sec-title text-start">
                  <p className="sec-title__tagline">Preguntas Frecuentes</p>

                  <h3 className="sec-title__title">
                    Preguntas Frecuentes <br />
                    Sobre Nuestros Servicios
                  </h3>
                </div>

                <p className="faq-one__text">
                  Resolvemos tus dudas sobre nuestros servicios eléctricos con respuestas claras y detalladas.
                </p>
                <Link className="faq-one__link" to="/about">
                  <span>Conoce Más</span>
                  <i className="far fa-arrow-right" />
                </Link>
              </div>
            </div>

            {/* Columna de Acordeón de FAQs */}
            <div className="col-md-12 col-lg-7">
              <div className="accordion faq-one__accordion" id="faq-one__accordion-1">
                {/* Pregunta 1 */}
                <div className="accordion-item faq-one__accordion__item accordion--active">
                  <h2 className="accordion-header faq-one__accordion__header" id="faq-one__accordion-1__heading-1">
                    <button
                      className="accordion-button faq-one__accordion__button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-one__accordion-1__collapse-1"
                      aria-expanded="true"
                      aria-controls="faq-one__accordion-1__collapse-1"
                    >
                      ¿Qué servicios eléctricos ofrecen?
                      <span className="faq-one__accordion__icon" />
                    </button>
                  </h2>
                  <div
                    id="faq-one__accordion-1__collapse-1"
                    className="accordion-collapse collapse show faq-one__accordion__collapse"
                    aria-labelledby="faq-one__accordion-1__heading-1"
                    data-bs-parent="#faq-one__accordion-1"
                  >
                    <div className="accordion-body faq-one__accordion__body">
                      Ofrecemos una amplia gama de servicios eléctricos industriales, incluyendo diseño, instalación, mantenimiento y automatización de sistemas eléctricos para diversas industrias.
                    </div>
                  </div>
                </div>

                {/* Pregunta 2 */}
                <div className="accordion-item faq-one__accordion__item">
                  <h2 className="accordion-header faq-one__accordion__header" id="faq-one__accordion-1__heading-2">
                    <button
                      className="accordion-button faq-one__accordion__button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-one__accordion-1__collapse-2"
                      aria-expanded="false"
                      aria-controls="faq-one__accordion-1__collapse-2"
                    >
                      ¿Cuál es su experiencia en el sector eléctrico?
                      <span className="faq-one__accordion__icon" />
                    </button>
                  </h2>
                  <div
                    id="faq-one__accordion-1__collapse-2"
                    className="accordion-collapse collapse faq-one__accordion__collapse"
                    aria-labelledby="faq-one__accordion-1__heading-2"
                    data-bs-parent="#faq-one__accordion-1"
                  >
                    <div className="accordion-body faq-one__accordion__body">
                      Con más de 34 años de experiencia en el sector eléctrico industrial, hemos desarrollado y ejecutado numerosos proyectos de alta envergadura que demuestran nuestra capacidad y compromiso.
                    </div>
                  </div>
                </div>

                {/* Pregunta 3 */}
                <div className="accordion-item faq-one__accordion__item">
                  <h2 className="accordion-header faq-one__accordion__header" id="faq-one__accordion-1__heading-3">
                    <button
                      className="accordion-button faq-one__accordion__button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-one__accordion-1__collapse-3"
                      aria-expanded="false"
                      aria-controls="faq-one__accordion-1__collapse-3"
                    >
                      ¿Cómo garantizan la calidad de sus productos?
                      <span className="faq-one__accordion__icon" />
                    </button>
                  </h2>
                  <div
                    id="faq-one__accordion-1__collapse-3"
                    className="accordion-collapse collapse faq-one__accordion__collapse"
                    aria-labelledby="faq-one__accordion-1__heading-3"
                    data-bs-parent="#faq-one__accordion-1"
                  >
                    <div className="accordion-body faq-one__accordion__body">
                      Trabajamos con proveedores reconocidos y utilizamos materiales de primera calidad. Además, nuestros técnicos están altamente capacitados para asegurar que cada instalación cumpla con los estándares más exigentes.
                    </div>
                  </div>
                </div>

                {/* Pregunta 4 */}
                <div className="accordion-item faq-one__accordion__item">
                  <h2 className="accordion-header faq-one__accordion__header" id="faq-one__accordion-1__heading-4">
                    <button
                      className="accordion-button faq-one__accordion__button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-one__accordion-1__collapse-4"
                      aria-expanded="false"
                      aria-controls="faq-one__accordion-1__collapse-4"
                    >
                      ¿Ofrecen soporte técnico y mantenimiento?
                      <span className="faq-one__accordion__icon" />
                    </button>
                  </h2>
                  <div
                    id="faq-one__accordion-1__collapse-4"
                    className="accordion-collapse collapse faq-one__accordion__collapse"
                    aria-labelledby="faq-one__accordion-1__heading-4"
                    data-bs-parent="#faq-one__accordion-1"
                  >
                    <div className="accordion-body faq-one__accordion__body">
                      Sí, ofrecemos servicios de soporte técnico continuo y mantenimiento preventivo para asegurar el óptimo funcionamiento de tus sistemas eléctricos.
                    </div>
                  </div>
                </div>

                {/* Pregunta 5 */}
                <div className="accordion-item faq-one__accordion__item">
                  <h2 className="accordion-header faq-one__accordion__header" id="faq-one__accordion-1__heading-5">
                    <button
                      className="accordion-button faq-one__accordion__button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-one__accordion-1__collapse-5"
                      aria-expanded="false"
                      aria-controls="faq-one__accordion-1__collapse-5"
                    >
                      ¿Cómo puedo solicitar un presupuesto?
                      <span className="faq-one__accordion__icon" />
                    </button>
                  </h2>
                  <div
                    id="faq-one__accordion-1__collapse-5"
                    className="accordion-collapse collapse faq-one__accordion__collapse"
                    aria-labelledby="faq-one__accordion-1__heading-5"
                    data-bs-parent="#faq-one__accordion-1"
                  >
                    <div className="accordion-body faq-one__accordion__body">
                      Puedes solicitar un presupuesto contactándonos a través de nuestro formulario en línea, por teléfono o visitando nuestras oficinas. Estaremos encantados de atender tus necesidades y ofrecerte una solución personalizada.
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

export default First;
