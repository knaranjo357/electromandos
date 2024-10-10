import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

// Opciones de configuración para OwlCarousel
const options = {
  loop: true,
  nav: false,
  dots: true,
  autoplay: true,
  autoplayHoverPause: true,
  autoplayTimeout: 5000,
  items: 1,
  margin: 0,
  smartSpeed: 700,
};

function Slidertwo() {
  // Lista de testimonios
  const testimonios = [
    {
      nombre: 'Juan Carlos Martínez',
      cargo: 'Gerente de Operaciones',
      empresa: 'AgroIndustria S.A.',
      imagen: 'assets/images/resources/testi-1.png',
      titulo: 'Servicios Eléctricos de Calidad',
      estrellas: 5,
      comentario:
        'Electromandos del Oriente S.A.S. ha superado nuestras expectativas en cada proyecto. Su profesionalismo y atención al detalle aseguran resultados excepcionales.',
    },
    {
      nombre: 'María Fernanda López',
      cargo: 'Directora de Proyectos',
      empresa: 'Cafeteros Unidos',
      imagen: 'assets/images/resources/testi-2.png',
      titulo: 'Profesionales y Confiables',
      estrellas: 5,
      comentario:
        'La automatización de nuestros procesos industriales fue un éxito gracias al equipo de Electromandos del Oriente. Altamente recomendados.',
    },
    {
      nombre: 'Carlos Andrés Gómez',
      cargo: 'Administrador',
      empresa: 'Alimentos del Oriente',
      imagen: 'assets/images/resources/testi-3.png',
      titulo: 'Excelencia en Mantenimiento',
      estrellas: 5,
      comentario:
        'El mantenimiento preventivo realizado por Electromandos ha prolongado la vida útil de nuestras instalaciones eléctricas. Un servicio impecable.',
    },
    // Añade más testimonios según sea necesario
  ];

  // Función para renderizar las estrellas
  const renderStars = (count) => {
    const stars = [];
    for (let i = 0; i < count; i++) {
      stars.push(<i key={i} className="fas fa-star"></i>);
    }
    return stars;
  };

  return (
    <>
      <section className="testimonials-two">
        <img
          src="assets/images/background/testi-2-bg-1.jpg"
          className="testimonials-two__bg"
          alt="Fondo de testimonios"
        />
        <div className="container">
          <div className="sec-title text-start">
            <p className="sec-title__tagline">Testimonios de Clientes</p>
            <h3 className="sec-title__title">Lo que nuestros clientes dicen de nosotros</h3>
          </div>
          <div className="row">
            <div className="col-lg-8">
              <OwlCarousel
                className="thm-owl__carousel owl-with-shadow owl-carousel owl-theme owl-dot-one"
                {...options}
              >
                {testimonios.map((testimonio, index) => (
                  <div className="item" key={index}>
                    <div className="testimonials-card-two" style={{ '--accent-color': '#1da1f2' }}>
                      <div className="testimonials-card-two__top">
                        <div className="testimonials-card-two__info">
                          <div className="testimonials-card-two__image">
                            <img src={testimonio.imagen} alt={`${testimonio.nombre} - ${testimonio.cargo}`} />
                          </div>
                          <div className="testimonials-card-two__info__content">
                            <h3 className="testimonials-card-two__name">{testimonio.nombre}</h3>
                            <p className="testimonials-card-two__designation">{testimonio.cargo}, {testimonio.empresa}</p>
                          </div>
                        </div>
                        <div className="testimonials-card-two__review">
                          <div className="testimonials-card-two__icon">
                            <i className="fab fa-twitter"></i>
                          </div>
                          <div className="testimonials-card-two__review__content">
                            <h3 className="testimonials-card-two__review__title">{testimonio.titulo}</h3>
                            <p className="testimonials-card-two__stars">
                              {renderStars(testimonio.estrellas)}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="testimonials-card-two__content">{testimonio.comentario}</div>
                    </div>
                  </div>
                ))}
              </OwlCarousel>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Slidertwo;
