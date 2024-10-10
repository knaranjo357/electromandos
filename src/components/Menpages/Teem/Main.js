import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import { Link } from 'react-router-dom';

function Main() {
  const options = {
    loop: true,
    items: 3, // Ajustado para mostrar 3 miembros a la vez
    margin: 30,
    autoplay: true,
    dots: true,
    nav: false,
    autoplayHoverPause: true,
    autoplayTimeout: 5000,
    responsive: {
      "0": {
        items: 1,
        margin: 0
      },
      "576": {
        items: 2,
        margin: 15
      },
      "992": {
        items: 3,
        margin: 30
      },
      "1200": {
        items: 4,
        margin: 30
      }
    }
  };

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

          <OwlCarousel
            className="thm-owl__carousel owl-theme owl-carousel owl-dot-one owl-with-shadow"
            {...options}
          >
            {/* Miembro 1: César Orlando Peñuela */}
            <div className="item">
              <div className="team-card">
                <div className="team-card__image">
                  {/* Actualiza la ruta de la imagen según corresponda */}
                  
                  <img src="assets/images/team/team-1-1.jpg" alt="César Orlando Peñuela" />
                  <div className="team-card__hover">
                    <h3 className="team-card__title">
                      <Link to="/teamdetails/penasuela">César Orlando Peñuela</Link>
                    </h3>
                    <p className="team-card__designation">Jefe y Director General</p>
                    <ul className="list-unstyled team-card__social">
                      <li>
                        <Link to="#"><i className="fab fa-facebook-f" /></Link>
                      </li>
                      <li>
                        <Link to="#"><i className="fab fa-twitter" /></Link>
                      </li>
                      <li>
                        <Link to="#"><i className="fab fa-linkedin-in" /></Link>
                      </li>
                      <li>
                        <Link to="#"><i className="fab fa-instagram" /></Link>
                      </li>
                    </ul>
                    <Link to="/teamdetails/penasuela" className="team-card__hover__link">
                      <i className="far fa-arrow-right" />
                    </Link>
                  </div>
                </div>
                <div className="team-card__content">
                  <h3 className="team-card__title">
                    <Link to="/teamdetails/penasuela">César Orlando Peñuela</Link>
                  </h3>
                  <p className="team-card__designation">Jefe y Director General</p>
                  <Link to="/teamdetails/penasuela" className="team-card__content__link">
                    <i className="far fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Miembro 2: Alejandro */}
            <div className="item">
              <div className="team-card">
                <div className="team-card__image">
                  {/* Actualiza la ruta de la imagen según corresponda */}
                  <img src="assets/images/team/team-1-1.jpg" alt="Alejandro" />
                  <div className="team-card__hover">
                    <h3 className="team-card__title">
                      <Link to="/teamdetails/alejandro">Alejandro</Link>
                    </h3>
                    <p className="team-card__designation">Administrador y Director de Ventas</p>
                    <ul className="list-unstyled team-card__social">
                      <li>
                        <Link to="#"><i className="fab fa-facebook-f" /></Link>
                      </li>
                      <li>
                        <Link to="#"><i className="fab fa-twitter" /></Link>
                      </li>
                      <li>
                        <Link to="#"><i className="fab fa-linkedin-in" /></Link>
                      </li>
                      <li>
                        <Link to="#"><i className="fab fa-instagram" /></Link>
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
            <div className="item">
              <div className="team-card">
                <div className="team-card__image">
                  {/* Actualiza la ruta de la imagen según corresponda */}
                  <img src="assets/images/team/team-1-1.jpg" alt="Gilbert Alvarado" />
                  <div className="team-card__hover">
                    <h3 className="team-card__title">
                      <Link to="/teamdetails/gilbert">Gilbert Alvarado</Link>
                    </h3>
                    <p className="team-card__designation">Ingeniero Mecatrónico y Programador de PLC</p>
                    <ul className="list-unstyled team-card__social">
                      <li>
                        <Link to="#"><i className="fab fa-facebook-f" /></Link>
                      </li>
                      <li>
                        <Link to="#"><i className="fab fa-twitter" /></Link>
                      </li>
                      <li>
                        <Link to="#"><i className="fab fa-linkedin-in" /></Link>
                      </li>
                      <li>
                        <Link to="#"><i className="fab fa-instagram" /></Link>
                      </li>
                    </ul>
                    <Link to="/teamdetails/gilbert" className="team-card__hover__link">
                      <i className="far fa-arrow-right" />
                    </Link>
                  </div>
                </div>
                <div className="team-card__content">
                  <h3 className="team-card__title">
                    <Link to="/teamdetails/gilbert">Gilbert Alvarado</Link>
                  </h3>
                  <p className="team-card__designation">Ingeniero Mecatrónico y Programador de PLC</p>
                  <Link to="/teamdetails/gilbert" className="team-card__content__link">
                    <i className="far fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Miembro 4: Secretaria */}
            <div className="item">
              <div className="team-card">
                <div className="team-card__image">
                  {/* Actualiza la ruta de la imagen según corresponda */}
                  <img src="assets/images/team/team-1-1.jpg" alt="Asistente Administrativa" />
                  <div className="team-card__hover">
                    <h3 className="team-card__title">
                      <Link to="/teamdetails/secretaria">Asistente Administrativa</Link>
                    </h3>
                    <p className="team-card__designation">Asistente Administrativa</p>
                    <ul className="list-unstyled team-card__social">
                      <li>
                        <Link to="#"><i className="fab fa-facebook-f" /></Link>
                      </li>
                      <li>
                        <Link to="#"><i className="fab fa-twitter" /></Link>
                      </li>
                      <li>
                        <Link to="#"><i className="fab fa-linkedin-in" /></Link>
                      </li>
                      <li>
                        <Link to="#"><i className="fab fa-instagram" /></Link>
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
            <div className="item">
              <div className="team-card">
                <div className="team-card__image">
                  {/* Actualiza la ruta de la imagen según corresponda */}
                  <img src="assets/images/team/team-1-1.jpg" alt="Contadora" />
                  <div className="team-card__hover">
                    <h3 className="team-card__title">
                      <Link to="/teamdetails/contadora">Contadora</Link>
                    </h3>
                    <p className="team-card__designation">Gestión Financiera y Contable</p>
                    <ul className="list-unstyled team-card__social">
                      <li>
                        <Link to="#"><i className="fab fa-facebook-f" /></Link>
                      </li>
                      <li>
                        <Link to="#"><i className="fab fa-twitter" /></Link>
                      </li>
                      <li>
                        <Link to="#"><i className="fab fa-linkedin-in" /></Link>
                      </li>
                      <li>
                        <Link to="#"><i className="fab fa-instagram" /></Link>
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

            {/* Miembro 6: Equipo Técnico */}
            <div className="item">
              <div className="team-card">
                <div className="team-card__image">
                  {/* Puedes usar una imagen grupal o individual de los técnicos */}
                  <img src="assets/images/team/team-1-1.jpg" alt="Equipo Técnico" />
                  <div className="team-card__hover">
                    <h3 className="team-card__title">
                      <Link to="/teamdetails/equipo-tecnico">Equipo Técnico</Link>
                    </h3>
                    <p className="team-card__designation">Especialistas en Sistemas Eléctricos</p>
                    <ul className="list-unstyled team-card__social">
                      <li>
                        <Link to="#"><i className="fab fa-facebook-f" /></Link>
                      </li>
                      <li>
                        <Link to="#"><i className="fab fa-twitter" /></Link>
                      </li>
                      <li>
                        <Link to="#"><i className="fab fa-linkedin-in" /></Link>
                      </li>
                      <li>
                        <Link to="#"><i className="fab fa-instagram" /></Link>
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

            {/* Agrega más miembros si es necesario */}
          </OwlCarousel>
        </div>
      </section>
    </>
  );
}

export default Main;
