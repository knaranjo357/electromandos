import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

// Datos para los testimonios
const testimonials = [
    {
        id: 1,
        image: '/assets/images/resources/testi-1-1.png',
        name: 'Juan Pérez',
        designation: 'Gerente de Operaciones',
        company: 'AgroIndustria S.A.',
        content: 'Electromandos del Oriente ha transformado nuestra planta con soluciones eléctricas de alta calidad. Su profesionalismo y atención al detalle son excepcionales.',
        review: 'Excelentes Servicios',
        stars: 5,
        accentColor: '#1da1f2',
        socialIcon: 'fab fa-linkedin',
    },
    {
        id: 2,
        image: '/assets/images/resources/testi-1-2.png',
        name: 'María López',
        designation: 'Directora de Ingeniería',
        company: 'Alimentos del Norte Ltda.',
        content: 'El equipo de Electromandos del Oriente demostró una gran capacidad técnica y compromiso en la ejecución de nuestro proyecto eléctrico. Muy recomendados.',
        review: 'Equipo Experto',
        stars: 5,
        accentColor: '#e60023',
        socialIcon: 'fab fa-twitter',
    },
    {
        id: 3,
        image: '/assets/images/resources/testi-1-3.png',
        name: 'Carlos Ramírez',
        designation: 'Supervisor de Mantenimiento',
        company: 'Industria Café S.A.',
        content: 'Gracias a Electromandos del Oriente, hemos optimizado nuestros sistemas eléctricos, aumentando la eficiencia y reduciendo costos operativos.',
        review: 'Resultados Garantizados',
        stars: 5,
        accentColor: '#1da1f2',
        socialIcon: 'fab fa-facebook-f',
    },
    // Añade más testimonios según sea necesario
];

function Testimonials() {
    const options = {
        items: 1,
        margin: 30,
        loop: true,
        dots: true,
        smartSpeed: 700,
        nav: false,
        responsive: {
            0: {
                items: 1,
                margin: 0
            },
            576: {
                items: 1,
                margin: 30
            },
        },
    };

    return (
        <section className="testimonials-one testimonials-one--about">
            <div className="container">
                <img 
                    src="/assets/images/resources/testi-c-1-2.jpg" 
                    alt="Fondo de testimonios de Electromandos del Oriente S.A.S."
                    className="testimonials-one__bg wow fadeInUp"
                    data-wow-duration="1500ms" 
                    style={{width:"630px", height:"515px"}}
                />
                <div className="row">
                    <div className="col-lg-12">
                        <div className="sec-title text-start">
                            <p className="sec-title__tagline">Nuestros Testimonios</p>
                            <h3 className="sec-title__title">
                                Lo que Nuestros Clientes Dicen <br />
                                Sobre Nosotros
                            </h3>
                        </div>

                        <OwlCarousel 
                            className="thm-owl__carousel owl-theme owl-carousel owl-with-shadow owl-dot-one" 
                            {...options}
                        >
                            {testimonials.map((testimonial) => (
                                <div className="item" key={testimonial.id}>
                                    <div 
                                        className="testimonials-card" 
                                        style={{ "--accent-color": testimonial.accentColor }}
                                    >
                                        <div className="testimonials-card__top">
                                            <div className="testimonials-card__image">
                                                <img 
                                                    src={testimonial.image} 
                                                    alt={`Foto de ${testimonial.name} en ${testimonial.company}`} 
                                                />
                                            </div>
                                            <div className="testimonials-card__top__content">
                                                <h3 className="testimonials-card__name">{testimonial.name}</h3>
                                                <p className="testimonials-card__designation">{testimonial.designation} en {testimonial.company}</p>
                                            </div>
                                        </div>
                                        <div className="testimonials-card__content">
                                            {testimonial.content}
                                        </div>
                                        <div className="testimonials-card__bottom">
                                            <div className="testimonials-card__icon">
                                                <i className={testimonial.socialIcon} aria-hidden="true"></i>
                                            </div>
                                            <div className="testimonials-card__bottom__content">
                                                <h3 className="testimonials-card__review">{testimonial.review}</h3>
                                                <p className="testimonials-card__stars">
                                                    {[...Array(5)].map((star, index) => (
                                                        <i className="fas fa-star" key={index} aria-hidden="true"></i>
                                                    ))}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </OwlCarousel>
                    </div>
                </div>       
            </div>
        </section>
    );
}

export default Testimonials;
