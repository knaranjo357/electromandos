import React from 'react';
import { Link } from 'react-router-dom';
import IonRangeSlider from 'react-ion-slider';

function Claim() {
    const Datashow = (value) => {
        document.getElementById("show").innerHTML = "$" + value;
    };

    return (
        <>
            <section className="steps-one steps-one--home-3">
                <div className="steps-one__bg" style={{ backgroundImage: "url(assets/images/shapes/steps-bg-1-1.png)" }} />
                
                <div className="container">
                    <div className="sec-title text-center">
                        <p className="sec-title__tagline">Cómo Realizar un Proyecto</p>
                        
                        <h3 className="sec-title__title">
                            Aquí están los pasos importantes para <br />
                            desarrollar un proyecto eléctrico con nosotros.
                        </h3>
                    </div>
                    
                    <ul className="list-unstyled steps-one__list">
                        <li>
                            <div className="steps-one__list__icon">
                                <i className="flaticon-insurance-4" />
                                <div className="steps-one__list__caption">Paso 01</div>
                            </div>
                            
                            <h3 className="steps-one__list__title">
                                <Link to="#">Consulta Inicial</Link>
                            </h3>
                            <p className="steps-one__list__text">
                                Contáctanos para una consulta gratuita y discutamos tus necesidades eléctricas.
                            </p>
                        </li>
                        <li>
                            <div className="steps-one__list__icon">
                                <i className="flaticon-portfolio" />
                                <div className="steps-one__list__caption">Paso 02</div>
                            </div>
                            
                            <h3 className="steps-one__list__title">
                                <Link to="#">Planificación y Diseño</Link>
                            </h3>
                            <p className="steps-one__list__text">
                                Creamos un plan detallado adaptado a los requerimientos de tu proyecto.
                            </p>
                        </li>
                        <li>
                            <div className="steps-one__list__icon">
                                <i className="flaticon-workgroup" />
                                <div className="steps-one__list__caption">Paso 03</div>
                            </div>
                            
                            <h3 className="steps-one__list__title">
                                <Link to="#">Ejecución del Proyecto</Link>
                            </h3>
                            <p className="steps-one__list__text">
                                Implementamos el proyecto con precisión, asegurando la calidad en cada fase.
                            </p>
                        </li>
                        <li>
                            <div className="steps-one__list__icon">
                                <i className="flaticon-agreement" />
                                <div className="steps-one__list__caption">Paso 04</div>
                            </div>
                            
                            <h3 className="steps-one__list__title">
                                <Link to="#">Mantenimiento y Soporte</Link>
                            </h3>
                            <p className="steps-one__list__text">
                                Ofrecemos soporte continuo para garantizar que tu instalación funcione sin problemas.
                            </p>
                        </li>
                    </ul>
                </div>
            </section>

            <section className="contact-two contact-two--service contact-two--home-3">
                <div className="container">
                    <div className="row gutter-y-60">
                        <div className="col-md-12 col-lg-6">
                            <div className="contact-two__images">
                                <img src="assets/images/resources/contact-2-3.jpg" alt="Equipo de Electromandos del Oriente S.A.S." />
                            </div>
                        </div>
                        
                        <div className="col-md-12 col-lg-6 d-flex">
                            <div className="my-auto">
                                <form
                                    action="/send-email" // Asegúrate de actualizar esta ruta a tu endpoint de manejo de formularios
                                    className="contact-two__form contact-form-validated"
                                    method="POST"
                                >
                                    <div className="sec-title text-start">
                                        <p className="sec-title__tagline">Obtén una Cotización Gratuita</p>
                                        <h3 className="sec-title__title">
                                            Solicita una cotización para comenzar tu proyecto eléctrico.
                                        </h3>
                                    </div>
                                    
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="contact-two__input">
                                                <div className="contact-two__input__label">
                                                    <i className="far fa-user" />
                                                    <input type="text" placeholder="Nombre Completo" name="name" required />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <div className="contact-two__input">
                                                <div className="contact-two__input__label">
                                                    <i className="far fa-phone-plus" />
                                                    <input type="phone" placeholder="Número de Teléfono" name="phone" required />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <div className="contact-two__input">
                                                <div className="contact-two__input__label">
                                                    <i className="far fa-envelope-open" />
                                                    <input type="email" placeholder="Correo Electrónico" name="email" required />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <div className="contact-two__input">
                                                <div className="contact-two__input__label">
                                                    <select name="serviceType" className="niceselect" required>
                                                        <option value="">Tipo de Servicio</option>
                                                        <option value="Diseño">Diseño</option>
                                                        <option value="Instalación">Instalación</option>
                                                        <option value="Mantenimiento">Mantenimiento</option>
                                                        <option value="Otro">Otro</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <div className="contact-two__input">
                                                <div className="contact-two__input__label">
                                                    <i className="far fa-calendar-alt" />
                                                    <input type="date" placeholder="Fecha de Inicio" name="startDate" required />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-12">
                                            <div className="contact-two__input">
                                                <div className="contact-two__input__title">
                                                    Presupuesto Estimado
                                                </div>
                                                
                                                <div className="contact-two__progress-range">
                                                    <IonRangeSlider
                                                        type={"single"}
                                                        min={0}
                                                        max={90000}
                                                        from={50000}
                                                        onChange={(value) => { Datashow(value.from); }}
                                                        step={100}
                                                        hide_min_max={true}
                                                        className="balance-range-slider"
                                                    />
                                                    <div className="contact-two__balance-box">
                                                        <p className="contact-two__balance" id="show">
                                                            $50,000
                                                        </p>
                                                    </div>
                                                    <input type="hidden" name="estimatedBudget" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-12">
                                            <div className="contact-two__input">
                                                <button
                                                    type="submit"
                                                    className="thm-btn thm-btn--three contact-two__btn"
                                                >
                                                    <span>
                                                        Obtener Cotización
                                                        <i className="far fa-arrow-right" />
                                                    </span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Claim;
