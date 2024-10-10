import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const sponsorsData = [
    {
        id: 1,
        image: '/assets/images/sponsors/agrograin.png',
        alt: 'agrograin',
        link: 'https://www.cliente1.com',
    },
    {
        id: 2,
        image: '/assets/images/sponsors/giana.png',
        alt: 'diana',
        link: 'https://www.cliente2.com',
    },
    {
        id: 3,
        image: '/assets/images/sponsors/distraves.jpg',
        alt: 'Logo de Cliente Global 3',
        link: 'https://www.cliente3.com',
    },
    {
        id: 4,
        image: '/assets/images/sponsors/gavassa.jpg',
        alt: 'Logo de Cliente Global 4',
        link: 'https://www.cliente4.com',
    },
    {
        id: 5,
        image: '/assets/images/sponsors/campollo.jpg',
        alt: 'diana',
        link: 'https://www.cliente2.com',
    },
    {
        id: 6,
        image: '/assets/images/sponsors/metalteco.jpg',
        alt: 'Logo de Cliente Global 3',
        link: 'https://www.cliente3.com',
    },
    {
        id: 7,
        image: '/assets/images/sponsors/FAMAG.jpg',
        alt: 'Logo de Cliente Global 4',
        link: 'https://www.cliente4.com',
    },
    // Puedes agregar más sponsors si es necesario
];

function Sponsors() {
    const options = {
        loop: true,
        items: 2,
        margin: 30,
        autoplay: true,
        autoplayHoverPause: true,
        autoplayTimeout: 5000,
        dots: false,
        nav: false,
        responsive: {
            0: {
                items: 2,
                margin: 30,
            },
            576: {
                items: 3,
                margin: 30,
            },
            992: {
                items: 3,
                margin: 30,
            },
            1200: {
                items: 4,
                margin: 57,
            },
        },
    };

    return (
        <section className="sponsor-one">
            <div className="container">
                <div className="row gutter-y-30 align-items-center">
                    {/* Sección de Texto */}
                    <div className="col-lg-4">
                        <div className="sponsor-one__content">
                            <p className="sponsor-one__tagline">Clientes Globales</p>
                            <h3 className="sponsor-one__title">
                                Más de 150+ clientes globales confían en nosotros
                            </h3>
                        </div>
                    </div>

                    {/* Sección de Logos de Sponsors */}
                    <div className="col-lg-8">
                        <OwlCarousel 
                            className="thm-owl__carousel owl-theme owl-carousel owl-with-shadow owl-dot-one" 
                            {...options}
                        >
                            {sponsorsData.map((sponsor) => (
                                <div className="item" key={sponsor.id}>
                                    <div className="sponsor-one__item">
                                        {sponsor.link ? (
                                            <a href={sponsor.link} target="_blank" rel="noopener noreferrer">
                                                <img 
                                                    src={sponsor.image} 
                                                    alt={sponsor.alt} 
                                                    className="sponsor-one__logo"
                                                />
                                            </a>
                                        ) : (
                                            <img 
                                                src={sponsor.image} 
                                                alt={sponsor.alt} 
                                                className="sponsor-one__logo"
                                                style={{width:"170",height:"60"}}
                                            />
                                        )}
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

export default Sponsors;
