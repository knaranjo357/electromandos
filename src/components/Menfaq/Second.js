import React from 'react'

function Second() {
  return (
   <>
        <section className="faq-two">
            <div className="container">
                <div className="row gutter-y-60">
                <div className="col-md-12 col-lg-6 d-flex">
                    <div className="my-auto">
                    <div className="faq-two__content">
                        <div className="sec-title text-start">
                        <p className="sec-title__tagline">Servicios &amp; Precios</p>
                       
                        <h3 className="sec-title__title">
                            Conoce nuestros servicios <br />
                            y planes de precios
                        </h3>
                        
                        </div>
                        
                        <div
                        className="accordion faq-two__accordion"
                        id="faq-two__accordion-2" >
                        <div className="accordion-item faq-two__accordion__item accordion--active">
                            <h2
                            className="accordion-header faq-two__accordion__header"
                            id="faq-two__accordion-2__heading-1" >
                            <button
                                className="accordion-button faq-two__accordion__button"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#faq-two__accordion-2__collapse-1"
                                aria-expanded="true"
                                aria-controls="faq-two__accordion-2__collapse-1" >
                                ¿Qué servicios eléctricos ofrecen?
                                <span className="faq-two__accordion__icon" />
                        
                            </button>
                            </h2>
                            <div id="faq-two__accordion-2__collapse-1"
                            className="accordion-collapse collapse show faq-two__accordion__collapse"
                            aria-labelledby="faq-two__accordion-2__heading-1"
                            data-bs-parent="#faq-two__accordion-2" >
                            <div className="accordion-body faq-two__accordion__body">
                                Ofrecemos una amplia gama de servicios eléctricos industriales, incluyendo diseño, instalación, mantenimiento y automatización de sistemas eléctricos para diversos sectores industriales.
                            </div>
                            </div>
                        </div>
                        <div className="accordion-item faq-two__accordion__item">
                            <h2 className="accordion-header faq-two__accordion__header"
                            id="faq-two__accordion-2__heading-2" >
                            <button
                                className="accordion-button faq-two__accordion__button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#faq-two__accordion-2__collapse-2"
                                aria-expanded="false"
                                aria-controls="faq-two__accordion-2__collapse-2" >
                                ¿Cuál es su experiencia en el sector eléctrico?
                                <span className="faq-two__accordion__icon" />
                            </button>
                            </h2>
                            <div id="faq-two__accordion-2__collapse-2"
                            className="accordion-collapse faq-two__accordion__collapse collapse"
                            aria-labelledby="faq-two__accordion-2__heading-2"
                            data-bs-parent="#faq-two__accordion-2" >
                            <div className="accordion-body faq-two__accordion__body">
                                Contamos con más de 30 años de experiencia en la industria eléctrica, desarrollando proyectos para empresas en los sectores avícola, arrocero, cafetero, y otras industrias a nivel nacional.
                            </div>
                            </div>
                        </div>
                        <div className="accordion-item faq-two__accordion__item">
                            <h2 className="accordion-header faq-two__accordion__header" id="faq-two__accordion-2__heading-3" >
                            <button
                                className="accordion-button faq-two__accordion__button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#faq-two__accordion-2__collapse-3"
                                aria-expanded="false"
                                aria-controls="faq-two__accordion-2__collapse-3" >
                                ¿Cómo garantizan la calidad de los servicios?
                                <span className="faq-two__accordion__icon" />
                            </button>
                            </h2>
                            <div id="faq-two__accordion-2__collapse-3"
                            className="accordion-collapse faq-two__accordion__collapse collapse"
                            aria-labelledby="faq-two__accordion-2__heading-3"
                            data-bs-parent="#faq-two__accordion-2" >
                            <div className="accordion-body faq-two__accordion__body">
                                Garantizamos la calidad de nuestros servicios mediante el uso de herramientas de última tecnología y un equipo técnico altamente capacitado que sigue los más altos estándares de seguridad y eficiencia.
                            </div>
                            </div>
                        </div>
                        <div className="accordion-item faq-two__accordion__item">
                            <h2 className="accordion-header faq-two__accordion__header" id="faq-two__accordion-2__heading-4" >
                            <button className="accordion-button faq-two__accordion__button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-two__accordion-2__collapse-4" aria-expanded="false" aria-controls="faq-two__accordion-2__collapse-4" >
                                ¿Ofrecen mantenimiento preventivo y correctivo?
                                <span className="faq-two__accordion__icon" />
                            </button>
                            </h2>
                            <div id="faq-two__accordion-2__collapse-4" className="accordion-collapse faq-two__accordion__collapse collapse"
                            aria-labelledby="faq-two__accordion-2__heading-4"
                            data-bs-parent="#faq-two__accordion-2" >
                            <div className="accordion-body faq-two__accordion__body">
                                Sí, ofrecemos mantenimiento preventivo y correctivo de subestaciones eléctricas, centros de control de motores (CCM), y otros equipos industriales.
                            </div>
                            </div>
                        </div>
                        <div className="accordion-item faq-two__accordion__item">
                            <h2
                            className="accordion-header faq-two__accordion__header"
                            id="faq-two__accordion-2__heading-5" >
                            <button
                                className="accordion-button faq-two__accordion__button collapsed"
                                type="button"
                                data-bs-toggle="collapse" data-bs-target="#faq-two__accordion-2__collapse-5" aria-expanded="false" aria-controls="faq-two__accordion-2__collapse-5" >
                                ¿Cómo puedo solicitar un presupuesto?
                                <span className="faq-two__accordion__icon" />
                            </button>
                            </h2>
                            <div id="faq-two__accordion-2__collapse-5" className="accordion-collapse faq-two__accordion__collapse collapse"
                            aria-labelledby="faq-two__accordion-2__heading-5"
                            data-bs-parent="#faq-two__accordion-2" >
                            <div className="accordion-body faq-two__accordion__body">
                                Puedes solicitar un presupuesto personalizado a través de nuestra página web o contactándonos directamente por teléfono o correo electrónico. Estaremos encantados de asesorarte.
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    
                    </div>
                   
                </div>
               
                <div className="col-md-12 col-lg-6">
                    <img src="assets/images/resources/faq-1-1.jpg" className="img-fluid"  />
                </div>
               
                </div>
                
            </div>
        </section>

        <section className="faq-two">
            <div className="container">
                <div className="row gutter-y-60">
                <div className="col-md-12 col-lg-6">
                    <img src="assets/images/resources/faq-1-2.jpg" className="img-fluid"  />
                </div>
                
                <div className="col-md-12 col-lg-6 d-flex">
                    <div className="my-auto">
                    <div className="faq-two__content faq-two__content--ml">
                        <div className="sec-title text-start">
                        <p className="sec-title__tagline">Configuración &amp; Privacidad</p>
                        
                        <h3 className="sec-title__title">
                            Aprende sobre nuestra configuración <br />
                            y privacidad
                        </h3>
                       
                        </div>
                        
                        <div className="accordion faq-two__accordion faq-two__accordion--ml" id="faq-two__accordion-3" >
                        <div className="accordion-item faq-two__accordion__item accordion--active">
                            <h2 className="accordion-header faq-two__accordion__header" id="faq-two__accordion-3__heading-1" >
                            <button className="accordion-button faq-two__accordion__button"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#faq-two__accordion-3__collapse-1"
                                aria-expanded="true"
                                aria-controls="faq-two__accordion-3__collapse-1" >
                                ¿Cómo aseguran la privacidad de los datos?
                                <span className="faq-two__accordion__icon" />
                                
                            </button>
                            </h2>
                            <div id="faq-two__accordion-3__collapse-1" className="accordion-collapse collapse show faq-two__accordion__collapse" aria-labelledby="faq-two__accordion-3__heading-1"
                            data-bs-parent="#faq-two__accordion-3" >
                            <div className="accordion-body faq-two__accordion__body">
                                Implementamos estrictas políticas de seguridad para proteger la información de nuestros clientes y cumplir con todas las normativas de privacidad.
                            </div>
                            </div>
                        </div>
                        <div className="accordion-item faq-two__accordion__item">
                            <h2 className="accordion-header faq-two__accordion__header" id="faq-two__accordion-3__heading-2" >
                            <button
                                className="accordion-button faq-two__accordion__button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#faq-two__accordion-3__collapse-2"
                                aria-expanded="false"
                                aria-controls="faq-two__accordion-3__collapse-2" >
                                ¿Cómo manejan la configuración de sistemas eléctricos?
                                <span className="faq-two__accordion__icon" />
                            </button>
                            </h2>
                            <div id="faq-two__accordion-3__collapse-2" className="accordion-collapse faq-two__accordion__collapse collapse"
                            aria-labelledby="faq-two__accordion-3__heading-2"
                            data-bs-parent="#faq-two__accordion-3" >
                            <div className="accordion-body faq-two__accordion__body">
                                Evaluamos tus necesidades y configuramos los sistemas eléctricos de manera personalizada para maximizar la eficiencia y seguridad.
                            </div>
                            </div>
                        </div>
                        <div className="accordion-item faq-two__accordion__item">
                            <h2 className="accordion-header faq-two__accordion__header"
                            id="faq-two__accordion-3__heading-3" >
                            <button className="accordion-button faq-two__accordion__button collapsed" type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#faq-two__accordion-3__collapse-3"
                                aria-expanded="false"
                                aria-controls="faq-two__accordion-3__collapse-3" >
                                ¿Ofrecen soporte técnico post-instalación?
                                <span className="faq-two__accordion__icon" />
                            </button>
                            </h2>
                            <div id="faq-two__accordion-3__collapse-3"
                            className="accordion-collapse faq-two__accordion__collapse collapse"
                            aria-labelledby="faq-two__accordion-3__heading-3"
                            data-bs-parent="#faq-two__accordion-3" >
                            <div className="accordion-body faq-two__accordion__body">
                                Sí, ofrecemos soporte técnico completo y mantenimientos periódicos para asegurar el óptimo funcionamiento de tus sistemas eléctricos.
                            </div>
                            </div>
                        </div>
                        <div className="accordion-item faq-two__accordion__item">
                            <h2 className="accordion-header faq-two__accordion__header" id="faq-two__accordion-3__heading-4" >
                            <button
                                className="accordion-button faq-two__accordion__button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#faq-two__accordion-3__collapse-4"
                                aria-expanded="false"
                                aria-controls="faq-two__accordion-3__collapse-4" >
                                ¿Cómo garantizan la eficiencia de los sistemas?
                                <span className="faq-two__accordion__icon" />
                            </button>
                            </h2>
                            <div id="faq-two__accordion-3__collapse-4" className="accordion-collapse faq-two__accordion__collapse collapse"
                            aria-labelledby="faq-two__accordion-3__heading-4"
                            data-bs-parent="#faq-two__accordion-3" >
                            <div className="accordion-body faq-two__accordion__body">
                                Nuestros sistemas eléctricos están diseñados para maximizar la eficiencia energética y reducir costos operativos a largo plazo.
                            </div>
                            </div>
                        </div>
                        <div className="accordion-item faq-two__accordion__item">
                            <h2 className="accordion-header faq-two__accordion__header" id="faq-two__accordion-3__heading-5" >
                            <button className="accordion-button faq-two__accordion__button collapsed" type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#faq-two__accordion-3__collapse-5"
                                aria-expanded="false"
                                aria-controls="faq-two__accordion-3__collapse-5" >
                                ¿Puedo realizar modificaciones en los sistemas?
                                <span className="faq-two__accordion__icon" />
                            </button>
                            </h2>
                            <div id="faq-two__accordion-3__collapse-5" className="accordion-collapse faq-two__accordion__collapse collapse"
                            aria-labelledby="faq-two__accordion-3__heading-5"
                            data-bs-parent="#faq-two__accordion-3" >
                            <div className="accordion-body faq-two__accordion__body">
                                Sí, ofrecemos servicios de actualización y modificación de sistemas eléctricos para adaptarlos a nuevas necesidades o tecnologías.
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                   
                    </div>
                    
                </div>
                
                </div>
                
            </div>
        </section>

   </>
  )
}

export default Second
