import React from 'react';
import { Link } from 'react-router-dom';

function Projects() {
  // Lista de proyectos
  const projects = [
    {
      id: 1,
      name: 'Cresta Roja, Bogotá',
      date: '1998',
      location: 'Bogotá',
      description:
        'Suministro, instalación y puesta en marcha del sistema eléctrico en manual y automático para el recibo y almacenamiento (12,000 toneladas) de la planta de concentrados.',
      image: 'a1.jpg',
      category: 'industrial',
    },
    {
      id: 2,
      name: 'Famag Ltda, Bucaramanga',
      date: '1994 - 2002',
      location: 'Bucaramanga',
      description: 'Asesoría eléctrica en diversos proyectos industriales.',
      image: 'a2.jpg',
      category: 'industrial',
    },
    {
      id: 3,
      name: 'Metalteco S.A., Girón',
      date: '2010',
      location: 'Girón',
      description:
        'Montaje de subestación, alumbrado y tomas de servicio para la nueva bodega de ensamble de máquinas.',
      image: 'a3.jpg',
      category: 'industrial',
    },
    {
      id: 4,
      name: 'OPL Santa Marta',
      date: '2010',
      location: 'Santa Marta',
      description:
        'Suministro, montaje y puesta en marcha de subestación y sistema eléctrico para la mecanización de la bodega de almacenamiento de grano.',
      image: 'a4.jpg',
      category: 'industrial',
    },
    {
      id: 5,
      name: 'Molino Delta Andes, Buga',
      date: '2011',
      location: 'Buga',
      description:
        "Suministro, instalación y puesta en marcha de CCM's y acometidas de control y potencia.",
      image: 'a5.jpg',
      category: 'industrial',
    },
    {
      id: 6,
      name: 'Molino de Arroz San Pedro, Cúcuta',
      date: '2012',
      location: 'Cúcuta',
      description: "Suministro de CCM's y acometidas de control y potencia.",
      image: 'a6.jpg',
      category: 'industrial',
    },
    {
      id: 7,
      name: 'Campollo Caribe, Cartagena',
      date: '2013 - 2014',
      location: 'Cartagena',
      description:
        'Suministro, instalación y puesta en marcha del sistema eléctrico de control y potencia manual/automático en la planta de concentrados.',
      image: 'a7.jpg',
      category: 'industrial',
    },
    {
      id: 8,
      name: 'Alimentos Balanceados de Santander (ABS), Girón',
      date: '2014',
      location: 'Girón',
      description: 'Centro de Control de Motores.',
      image: 'a8.jpg',
      category: 'industrial',
    },
    {
      id: 9,
      name: 'Acondesa, Barranquilla',
      date: '',
      location: 'Barranquilla',
      description: 'Automatización de planta de frijol.',
      image: 'a9.jpg',
      category: 'industrial',
    },
    {
      id: 10,
      name: 'Penagos Hermanos, Girón',
      date: '',
      location: 'Girón',
      description: 'Centro de Control de Motores para maquinaria procesadora de café.',
      image: 'a10.jpg',
      category: 'industrial',
    },
    {
      id: 11,
      name: 'Comercializadora La Gran Señora, Barranquilla',
      date: '',
      location: 'Barranquilla',
      description: 'Tablero General de Distribución de 1600 amperios.',
      image: 'a11.jpg',
      category: 'industrial',
    },
    {
      id: 12,
      name: 'Arrocera S y H Vesga SAS Zomac, Aguachica',
      date: '',
      location: 'Aguachica',
      description: 'Banco de condensadores de 200kVAR.',
      image: 'a12.jpg',
      category: 'industrial',
    },
  ];

  return (
    <>
      <section className="portfolio-grid">
        <div className="container">
          <div className="sec-title text-center">
            <p className="sec-title__tagline">Proyectos Destacados</p>
            <h3 className="sec-title__title">
              Hemos desarrollado proyectos de gran envergadura que demuestran nuestra capacidad y compromiso
            </h3>
          </div>

          <div className="row filter-layout masonary-layout gutter-y-30">
            {projects.map((project) => (
              <div key={project.id} className="col-md-6 col-lg-4 filter-item industrial">
                <div className="portfolio-card">
                  <div className="portfolio-card__image">
                    <img 
                      src={`assets/images/proyectos/${project.image}`} 
                      alt={project.name} 
                      style={{ width: '410px', height: '425px', objectFit: 'cover' }} // Tamaño fijo para todas las imágenes
                    />
                    <div className="portfolio-card__content">
                      <span className="portfolio-card__tagline">Proyecto Industrial</span>
                      <h3 className="portfolio-card__title">
                        <Link to={`/projectdetails/${project.id}`}>{project.name}</Link>
                      </h3>
                      <Link to={`/projectdetails/${project.id}`} className="portfolio-card__link">
                        <i className="far fa-arrow-right" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          
        </div>
      </section>
    </>
  );
}

export default Projects;
