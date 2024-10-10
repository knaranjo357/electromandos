import React from 'react';
import { Link } from 'react-router-dom';

function Work() {
  return (
    <>
      <section className="contact-info">
        <div className="container">
          <div className="row gutter-y-30">
            <div className="col-md-12 col-lg-4">
              <div className="contact-info__card">
                <div className="contact-info__card__icon">
                  <img src="assets/images/icons/contact-info-1-1.png" />
                </div>

                <h3 className="contact-info__card__title">
                  <Link to="/contact">¿Necesitas Ayuda?</Link>
                </h3>

                <p className="contact-info__card__text">
                  Estamos aquí para brindarte soluciones eléctricas industriales.
                </p>

                <Link
                  to="/contact"
                  className="thm-btn thm-btn--three contact-info__card__btn"
                >
                  <span>
                    Contáctanos
                    <i className="far fa-arrow-right" />
                  </span>
                </Link>
              </div>
            </div>

            <div className="col-md-12 col-lg-4">
              <div className="contact-info__card">
                <div className="contact-info__card__icon">
                  <img src="assets/images/icons/contact-info-1-2.png" />
                </div>

                <h3 className="contact-info__card__title">
                  <Link to="/team">Colaboremos Juntos</Link>
                </h3>

                <p className="contact-info__card__text">
                  Somos tu aliado confiable en proyectos industriales.
                </p>

                <Link
                  to="/team"
                  className="thm-btn thm-btn--three contact-info__card__btn"
                >
                  <span>
                    Trabaja con Nosotros
                    <i className="far fa-arrow-right" />
                  </span>
                </Link>
              </div>
            </div>

            <div className="col-md-12 col-lg-4">
              <div className="contact-info__card">
                <div className="contact-info__card__icon">
                  <img src="assets/images/icons/contact-info-1-3.png" />
                </div>

                <h3 className="contact-info__card__title">
                  <Link to="/faqs">Soporte en Línea</Link>
                </h3>

                <p className="contact-info__card__text">
                  Contáctanos para obtener asistencia en soluciones eléctricas.
                </p>

                <Link
                  to="/faqs"
                  className="thm-btn thm-btn--three contact-info__card__btn"
                >
                  <span>
                    Faqs
                    <i className="far fa-arrow-right" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-one">
        <div className="container">
          <div className="row gutter-y-60">
            <div className="col-md-12 col-lg-4">
              <div className="contact-one__content">
                <p className="contact-one__content__tagline">Ponte en Contacto</p>

                <h3 className="contact-one__content__title">
                  No dudes en contactarnos
                </h3>

                <ul className="list-unstyled contact-one__info">
                  <li className="contact-one__info__item">
                    <div className="contact-one__info__icon">
                      <i className="far fa-map-marker-alt" />
                    </div>

                    <div className="contact-one__info__content">
                      <span className="contact-one__info__name">Ubicación</span>
                      <Link to="#">Carrera 27 #12-34, Bucaramanga</Link>
                    </div>
                  </li>

                  <li className="contact-one__info__item">
                    <div className="contact-one__info__icon">
                      <i className="far fa-envelope-open" />
                    </div>

                    <div className="contact-one__info__content">
                      <span className="contact-one__info__name">Correo Electrónico</span>
                      <Link to="mailto:info@electromandos.com">
                        info@electromandos.com
                      </Link>
                    </div>
                  </li>

                  <li className="contact-one__info__item">
                    <div className="contact-one__info__icon">
                      <i className="far fa-phone-plus" />
                    </div>

                    <div className="contact-one__info__content">
                      <span className="contact-one__info__name">Teléfono</span>
                      <Link to="tel:+573001234567">+57 300 123 4567</Link>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-md-12 col-lg-8">
              <form
                action="inc/sendemail.php"
                className="contact-form-validated contact-one__form"
              >
                <h3 className="contact-one__form__title">Envíanos un Mensaje</h3>

                <div className="row">
                  <div className="col-md-6">
                    <input type="text" placeholder="Nombre Completo" name="name" />
                  </div>

                  <div className="col-md-6">
                    <input type="text" placeholder="Número de Teléfono" name="phone" />
                  </div>

                  <div className="col-md-12">
                    <input type="text" placeholder="Correo Electrónico" name="email" />
                  </div>

                  <div className="col-md-12">
                    <textarea
                      name="message"
                      placeholder="Escribe tu mensaje"
                      defaultValue={""}
                    />
                  </div>

                  <div className="col-md-12">
                    <button
                      type="submit"
                      className="thm-btn thm-btn--three contact-one__btn"
                    >
                      <span>
                        Enviar Mensaje
                        <i className="far fa-arrow-right" />
                      </span>
                    </button>
                  </div>
                </div>
              </form>
              <div className="result" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Work;
