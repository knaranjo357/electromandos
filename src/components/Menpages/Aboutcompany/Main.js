import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Main() {
    const [video, setVideo] = useState(false);

    return (
        <>
            <section className="about-five">
                <div className="container">
                    <div className="row gutter-y-60">
                        <div className="col-md-12 col-lg-7">
                            <div className="about-one__image">
                                {/* Actualiza la ruta de la imagen según corresponda */}
                                <img src="assets/images/resources/about-5-1.jpg" alt="Electromandos del Oriente" />
                                <Link
                                    to="#"
                                    className="video-popup about-one__video"
                                    onClick={() => setVideo(true)}
                                >
                                    <i className="fa fa-play" />
                                    <span>Ver Video</span>
                                </Link>
                                <div className="about-five__image__caption">
                                    <h3 className="about-five__image__caption__title">
                                        Más de 34 Años de Excelencia en Servicios Eléctricos Industriales
                                    </h3>
                                    <p className="about-five__image__caption__text">
                                        CEO &amp; Fundador
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-12 col-lg-5 d-flex">
                            <div className="my-auto">
                                <div className="about-five__content">
                                    <div className="sec-title text-start">
                                        <p className="sec-title__tagline">Sobre Nosotros</p>
                                        <h3 className="sec-title__title">
                                            Liderando el Sector Eléctrico Industrial desde 1990
                                        </h3>
                                    </div>

                                    <div className="about-five__content__text">
                                        Electromandos del Oriente S.A.S. se estableció en Bucaramanga el 18 de marzo de 1990. Desde nuestros inicios, nos hemos dedicado a ofrecer servicios de reparación, asistencia, instalación y asesoría en zonas residenciales e industriales. Con el tiempo, nos especializamos en trabajos industriales, ampliando nuestro portafolio con herramientas y maquinaria de última generación para proporcionar soluciones eléctricas de alta calidad y respaldo a nuestros clientes.
                                    </div>

                                    <div className="about-five__author">
                                        <div className="about-five__author__image">
                                            {/* Actualiza la ruta de la imagen según corresponda */}
                                            <img src="assets/images/resources/about-5-a-1.png" alt="César Orlando Peñuela" />
                                        </div>

                                        <div className="about-five__author__content">
                                            <h3 className="about-five__author__name">
                                                César Orlando Peñuela
                                            </h3>
                                            <p className="about-five__author__designation">
                                                CEO &amp; Fundador
                                            </p>
                                        </div>

                                        <div className="about-five__author__sign">
                                            {/* Actualiza la ruta de la imagen de la firma según corresponda */}
                                            <img src="assets/images/resources/about-5-a-s.png" alt="Firma" />
                                        </div>
                                    </div>

                                    <div className="about-five__btns">
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

                {video && (
                    <div className={`YouTubePopUp-Wrap ${video && "YouTubePopUp-hide"}`} onClick={() => setVideo(false)}>
                        <div className="YouTubePopUp-Content">
                            <span className="YouTubePopUp-Close" />
                            {/* Reemplaza el enlace del video con el de tu empresa si está disponible */}
                            <iframe
                                src="https://www.youtube.com/embed/CWCPovmNWK8?autoplay=1"
                                allowFullScreen
                                title="Electromandos del Oriente Video"
                            />
                        </div>
                    </div>
                )}
            </section>

            <section className="about-four">
                <div className="container">
                    <div className="row gutter-y-30">
                        <div
                            className="col-md-12 col-lg-4 wow fadeInUp"
                            data-wow-duration="1500ms"
                            data-wow-delay="000ms"
                        >
                            <div className="about-four__card">
                                <div className="about-four__card__icon">
                                    <i className="fas fa-bolt" />
                                </div>

                                <h3 className="about-four__card__title">
                                    <Link to="#">Nuestra Misión</Link>
                                </h3>

                                <div className="about-four__card__text">
                                    Ser una empresa líder en el sector eléctrico industrial, ofreciendo servicios avanzados con excelencia en calidad, creando valor para la empresa, nuestros clientes y la sociedad.
                                </div>
                            </div>
                        </div>

                        <div
                            className="col-md-12 col-lg-4 wow fadeInUp"
                            data-wow-duration="1500ms"
                            data-wow-delay="100ms"
                        >
                            <div className="about-four__card">
                                <div className="about-four__card__icon">
                                    <i className="fas fa-eye" />
                                </div>

                                <h3 className="about-four__card__title">
                                    <Link to="#">Nuestra Visión</Link>
                                </h3>

                                <div className="about-four__card__text">
                                    Ser reconocidos a nivel nacional e internacional como líderes en la comercialización de equipos eléctricos, motores, diseño, automatización industrial de procesos y montajes eléctricos, destacándonos por nuestra innovación y compromiso con la calidad.
                                </div>
                            </div>
                        </div>

                        <div
                            className="col-md-12 col-lg-4 wow fadeInUp"
                            data-wow-duration="1500ms"
                            data-wow-delay="200ms"
                        >
                            <div className="about-four__card">
                                <div className="about-four__card__icon">
                                    <i className="fas fa-heart" />
                                </div>

                                <h3 className="about-four__card__title">
                                    <Link to="#">Nuestros Valores</Link>
                                </h3>

                                <div className="about-four__card__text">
                                    Compromiso, innovación, calidad y servicio al cliente son los pilares que guían nuestras operaciones y relaciones comerciales.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Main;
