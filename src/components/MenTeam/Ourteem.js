import React from 'react';
import { Link } from 'react-router-dom';

function Ourteem() {
  return (
    <>
      <section className="team-one">
        <div className="container">
          <div className="sec-title text-center">
            <p className="sec-title__tagline">Conoce a Nuestro Equipo</p>

            <h3 className="sec-title__title">
              Un Equipo Profesional y Dedicado <br />
              Trabajando para Ti
            </h3>
          </div>

          <div className="row">
            {/* Miembro 1: César Orlando Peñuela */}
            <div className="col-md-6 col-lg-4 col-xl-3">
              <div className="team-card">
                <div className="team-card__image">
                  <img src="assets/images/team/team-1-1.jpg" alt="César Orlando Peñuela" />
                  <div className="team-card__hover">
                    <h3 className="team-card__title">
                      <Link to="/teamdetails/penuela">César Orlando Peñuela</Link>
                    </h3>

                    <p className="team-card__designation">Jefe y Director General</p>

                    <ul className="list-unstyled team-card__social">
                      <li>
                        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                          <i className="fab fa-linkedin-in" />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                          <i className="fab fa-instagram" />
                        </a>
                      </li>
                    </ul>

                    <Link to="/teamdetails/penuela" className="team-card__hover__link">
                      <i className="far fa-arrow-right" />
                    </Link>
                  </div>
                </div>

                <div className="team-card__content">
                  <h3 className="team-card__title">
                    <Link to="/teamdetails/penuela">César Orlando Peñuela</Link>
                  </h3>

                  <p className="team-card__designation">Jefe y Director General</p>

                  <Link to="/teamdetails/penuela" className="team-card__content__link">
                    <i className="far fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Miembro 2: Alejandro */}
            <div className="col-md-6 col-lg-4 col-xl-3">
              <div className="team-card">
                <div className="team-card__image">
                  <img src="assets/images/team/team-1-2.jpg" alt="Alejandro" />
                  <div className="team-card__hover">
                    <h3 className="team-card__title">
                      <Link to="/teamdetails/alejandro">Alejandro</Link>
                    </h3>

                    <p className="team-card__designation">Administrador y Director de Ventas</p>

                    <ul className="list-unstyled team-card__social">
                      <li>
                        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                          <i className="fab fa-linkedin-in" />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                          <i className="fab fa-instagram" />
                        </a>
                      </li>
                    </ul>

                    <Link to="/teamdetails/alejandro" className="team-card__hover__link">
                      <i className="far fa-arrow-right" />
                    </Link>
                  </div>
                </div>

                <div className="team-card__content">
                  <h3 className="team-card__title">
                    <Link to="/teamdetails/alejandro">Alejandro</Link>
                  </h3>

                  <p className="team-card__designation">Administrador y Director de Ventas</p>

                  <Link to="/teamdetails/alejandro" className="team-card__content__link">
                    <i className="far fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Miembro 3: Gilbert Alvarado */}
            <div className="col-md-6 col-lg-4 col-xl-3">
              <div className="team-card">
                <div className="team-card__image">
                  <img src="assets/images/team/team-1-3.jpg" alt="Gilbert Alvarado" />
                  <div className="team-card__hover">
                    <h3 className="team-card__title">
                      <Link to="/teamdetails/gilbert-alvarado">Gilbert Alvarado</Link>
                    </h3>

                    <p className="team-card__designation">Ingeniero Mecatrónico y Programador de PLC</p>

                    <ul className="list-unstyled team-card__social">
                      <li>
                        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                          <i className="fab fa-linkedin-in" />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                          <i className="fab fa-instagram" />
                        </a>
                      </li>
                    </ul>

                    <Link to="/teamdetails/gilbert-alvarado" className="team-card__hover__link">
                      <i className="far fa-arrow-right" />
                    </Link>
                  </div>
                </div>

                <div className="team-card__content">
                  <h3 className="team-card__title">
                    <Link to="/teamdetails/gilbert-alvarado">Gilbert Alvarado</Link>
                  </h3>

                  <p className="team-card__designation">Ingeniero Mecatrónico y Programador de PLC</p>

                  <Link to="/teamdetails/gilbert-alvarado" className="team-card__content__link">
                    <i className="far fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Miembro 4: Secretaria */}
            <div className="col-md-6 col-lg-4 col-xl-3">
              <div className="team-card">
                <div className="team-card__image">
                  <img src="assets/images/team/team-1-4.jpg" alt="Asistente Administrativa" />
                  <div className="team-card__hover">
                    <h3 className="team-card__title">
                      <Link to="/teamdetails/secretaria">Asistente Administrativa</Link>
                    </h3>

                    <p className="team-card__designation">Asistente Administrativa</p>

                    <ul className="list-unstyled team-card__social">
                      <li>
                        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                          <i className="fab fa-linkedin-in" />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                          <i className="fab fa-instagram" />
                        </a>
                      </li>
                    </ul>

                    <Link to="/teamdetails/secretaria" className="team-card__hover__link">
                      <i className="far fa-arrow-right" />
                    </Link>
                  </div>
                </div>

                <div className="team-card__content">
                  <h3 className="team-card__title">
                    <Link to="/teamdetails/secretaria">Asistente Administrativa</Link>
                  </h3>

                  <p className="team-card__designation">Asistente Administrativa</p>

                  <Link to="/teamdetails/secretaria" className="team-card__content__link">
                    <i className="far fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Miembro 5: Contadora */}
            <div className="col-md-6 col-lg-4 col-xl-3">
              <div className="team-card">
                <div className="team-card__image">
                  <img src="assets/images/team/team-1-5.jpg" alt="Contadora" />
                  <div className="team-card__hover">
                    <h3 className="team-card__title">
                      <Link to="/teamdetails/contadora">Contadora</Link>
                    </h3>

                    <p className="team-card__designation">Gestión Financiera y Contable</p>

                    <ul className="list-unstyled team-card__social">
                      <li>
                        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                          <i className="fab fa-linkedin-in" />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                          <i className="fab fa-instagram" />
                        </a>
                      </li>
                    </ul>

                    <Link to="/teamdetails/contadora" className="team-card__hover__link">
                      <i className="far fa-arrow-right" />
                    </Link>
                  </div>
                </div>

                <div className="team-card__content">
                  <h3 className="team-card__title">
                    <Link to="/teamdetails/contadora">Contadora</Link>
                  </h3>

                  <p className="team-card__designation">Gestión Financiera y Contable</p>

                  <Link to="/teamdetails/contadora" className="team-card__content__link">
                    <i className="far fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Miembro 6: Equipo Técnico de Electromandos */}
            <div className="col-md-6 col-lg-4 col-xl-3">
              <div className="team-card">
                <div className="team-card__image">
                  <img src="assets/images/team/team-1-6.jpg" alt="Equipo Técnico" />
                  <div className="team-card__hover">
                    <h3 className="team-card__title">
                      <Link to="/teamdetails/equipo-tecnico">Equipo Técnico</Link>
                    </h3>

                    <p className="team-card__designation">Especialistas en Sistemas Eléctricos</p>

                    <ul className="list-unstyled team-card__social">
                      <li>
                        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                          <i className="fab fa-linkedin-in" />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                          <i className="fab fa-instagram" />
                        </a>
                      </li>
                    </ul>

                    <Link to="/teamdetails/equipo-tecnico" className="team-card__hover__link">
                      <i className="far fa-arrow-right" />
                    </Link>
                  </div>
                </div>

                <div className="team-card__content">
                  <h3 className="team-card__title">
                    <Link to="/teamdetails/equipo-tecnico">Equipo Técnico</Link>
                  </h3>

                  <p className="team-card__designation">Especialistas en Sistemas Eléctricos</p>

                  <Link to="/teamdetails/equipo-tecnico" className="team-card__content__link">
                    <i className="far fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Miembro 7: Técnico Senior */}
            <div className="col-md-6 col-lg-4 col-xl-3">
              <div className="team-card">
                <div className="team-card__image">
                  <img src="assets/images/team/team-1-7.jpg" alt="Técnico Senior 1" />
                  <div className="team-card__hover">
                    <h3 className="team-card__title">
                      <Link to="/teamdetails/tecnico-senior-1">Técnico Senior 1</Link>
                    </h3>

                    <p className="team-card__designation">Ingeniero Eléctrico</p>

                    <ul className="list-unstyled team-card__social">
                      <li>
                        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                          <i className="fab fa-linkedin-in" />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                          <i className="fab fa-instagram" />
                        </a>
                      </li>
                    </ul>

                    <Link to="/teamdetails/tecnico-senior-1" className="team-card__hover__link">
                      <i className="far fa-arrow-right" />
                    </Link>
                  </div>
                </div>

                <div className="team-card__content">
                  <h3 className="team-card__title">
                    <Link to="/teamdetails/tecnico-senior-1">Técnico Senior 1</Link>
                  </h3>

                  <p className="team-card__designation">Ingeniero Eléctrico</p>

                  <Link to="/teamdetails/tecnico-senior-1" className="team-card__content__link">
                    <i className="far fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Miembro 8: Técnico Senior */}
            <div className="col-md-6 col-lg-4 col-xl-3">
              <div className="team-card">
                <div className="team-card__image">
                  <img src="assets/images/team/team-1-8.jpg" alt="Técnico Senior 2" />
                  <div className="team-card__hover">
                    <h3 className="team-card__title">
                      <Link to="/teamdetails/tecnico-senior-2">Técnico Senior 2</Link>
                    </h3>

                    <p className="team-card__designation">Ingeniero Mecánico</p>

                    <ul className="list-unstyled team-card__social">
                      <li>
                        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                          <i className="fab fa-linkedin-in" />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                          <i className="fab fa-instagram" />
                        </a>
                      </li>
                    </ul>

                    <Link to="/teamdetails/tecnico-senior-2" className="team-card__hover__link">
                      <i className="far fa-arrow-right" />
                    </Link>
                  </div>
                </div>

                <div className="team-card__content">
                  <h3 className="team-card__title">
                    <Link to="/teamdetails/tecnico-senior-2">Técnico Senior 2</Link>
                  </h3>

                  <p className="team-card__designation">Ingeniero Mecánico</p>

                  <Link to="/teamdetails/tecnico-senior-2" className="team-card__content__link">
                    <i className="far fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Miembro 9: Técnico Junior */}
            <div className="col-md-6 col-lg-4 col-xl-3">
              <div className="team-card">
                <div className="team-card__image">
                  <img src="assets/images/team/team-1-9.jpg" alt="Técnico Junior 1" />
                  <div className="team-card__hover">
                    <h3 className="team-card__title">
                      <Link to="/teamdetails/tecnico-junior-1">Técnico Junior 1</Link>
                    </h3>

                    <p className="team-card__designation">Asistente Técnico</p>

                    <ul className="list-unstyled team-card__social">
                      <li>
                        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                          <i className="fab fa-linkedin-in" />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                          <i className="fab fa-instagram" />
                        </a>
                      </li>
                    </ul>

                    <Link to="/teamdetails/tecnico-junior-1" className="team-card__hover__link">
                      <i className="far fa-arrow-right" />
                    </Link>
                  </div>
                </div>

                <div className="team-card__content">
                  <h3 className="team-card__title">
                    <Link to="/teamdetails/tecnico-junior-1">Técnico Junior 1</Link>
                  </h3>

                  <p className="team-card__designation">Asistente Técnico</p>

                  <Link to="/teamdetails/tecnico-junior-1" className="team-card__content__link">
                    <i className="far fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Miembro 10: Técnico Junior */}
            <div className="col-md-6 col-lg-4 col-xl-3">
              <div className="team-card">
                <div className="team-card__image">
                  <img src="assets/images/team/team-1-10.jpg" alt="Técnico Junior 2" />
                  <div className="team-card__hover">
                    <h3 className="team-card__title">
                      <Link to="/teamdetails/tecnico-junior-2">Técnico Junior 2</Link>
                    </h3>

                    <p className="team-card__designation">Asistente Técnico</p>

                    <ul className="list-unstyled team-card__social">
                      <li>
                        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                          <i className="fab fa-linkedin-in" />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                          <i className="fab fa-instagram" />
                        </a>
                      </li>
                    </ul>

                    <Link to="/teamdetails/tecnico-junior-2" className="team-card__hover__link">
                      <i className="far fa-arrow-right" />
                    </Link>
                  </div>
                </div>

                <div className="team-card__content">
                  <h3 className="team-card__title">
                    <Link to="/teamdetails/tecnico-junior-2">Técnico Junior 2</Link>
                  </h3>

                  <p className="team-card__designation">Asistente Técnico</p>

                  <Link to="/teamdetails/tecnico-junior-2" className="team-card__content__link">
                    <i className="far fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Miembro 11: Técnico Junior */}
            <div className="col-md-6 col-lg-4 col-xl-3">
              <div className="team-card">
                <div className="team-card__image">
                  <img src="assets/images/team/team-1-11.jpg" alt="Técnico Junior 3" />
                  <div className="team-card__hover">
                    <h3 className="team-card__title">
                      <Link to="/teamdetails/tecnico-junior-3">Técnico Junior 3</Link>
                    </h3>

                    <p className="team-card__designation">Asistente Técnico</p>

                    <ul className="list-unstyled team-card__social">
                      <li>
                        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                          <i className="fab fa-linkedin-in" />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                          <i className="fab fa-instagram" />
                        </a>
                      </li>
                    </ul>

                    <Link to="/teamdetails/tecnico-junior-3" className="team-card__hover__link">
                      <i className="far fa-arrow-right" />
                    </Link>
                  </div>
                </div>

                <div className="team-card__content">
                  <h3 className="team-card__title">
                    <Link to="/teamdetails/tecnico-junior-3">Técnico Junior 3</Link>
                  </h3>

                  <p className="team-card__designation">Asistente Técnico</p>

                  <Link to="/teamdetails/tecnico-junior-3" className="team-card__content__link">
                    <i className="far fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Miembro 12: Equipo Técnico */}
            <div className="col-md-6 col-lg-4 col-xl-3">
              <div className="team-card">
                <div className="team-card__image">
                  <img src="assets/images/team/team-1-12.jpg" alt="Equipo Técnico" />
                  <div className="team-card__hover">
                    <h3 className="team-card__title">
                      <Link to="/teamdetails/equipo-tecnico">Equipo Técnico</Link>
                    </h3>

                    <p className="team-card__designation">Especialistas en Sistemas Eléctricos</p>

                    <ul className="list-unstyled team-card__social">
                      <li>
                        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                          <i className="fab fa-linkedin-in" />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                          <i className="fab fa-instagram" />
                        </a>
                      </li>
                    </ul>

                    <Link to="/teamdetails/equipo-tecnico" className="team-card__hover__link">
                      <i className="far fa-arrow-right" />
                    </Link>
                  </div>
                </div>

                <div className="team-card__content">
                  <h3 className="team-card__title">
                    <Link to="/teamdetails/equipo-tecnico">Equipo Técnico</Link>
                  </h3>

                  <p className="team-card__designation">Especialistas en Sistemas Eléctricos</p>

                  <Link to="/teamdetails/equipo-tecnico" className="team-card__content__link">
                    <i className="far fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Añade más miembros si es necesario */}
          </div>
        </div>
      </section>
    </>
  );
}

export default Ourteem;
