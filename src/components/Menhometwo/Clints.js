import React from 'react';
import CountUp from 'react-countup';

function Clientes() {
  // Lista de clientes
  const clientes = [
    { nombre: 'Famag Ltda', ubicacion: 'Bucaramanga', logo: 'assets/images/clientes/famag.png' },
    { nombre: 'Metalteco S.A.', ubicacion: 'Girón', logo: 'assets/images/clientes/metalteco.png' },
    { nombre: 'Campollo Cargill', ubicaciones: ['Cartagena', 'Girón'], logo: 'assets/images/clientes/campollo.png' },
    { nombre: 'Gavassa y Cía Ltda', ubicacion: 'Bucaramanga', logo: 'assets/images/clientes/gavassa.png' },
    { nombre: 'Distraves', ubicacion: 'Piedecuesta', logo: 'assets/images/clientes/distraves.png' },
    { nombre: 'Arroz Diana', ubicacion: 'San Martín, Meta', logo: 'assets/images/clientes/arroz-diana.png' },
    { nombre: 'Agrogain', ubicacion: 'Buga', logo: 'assets/images/clientes/agrogain.png' },
    { nombre: 'Italcol', ubicacion: 'Girón', logo: 'assets/images/clientes/italcol.png' },
  ];

  return (
    <section className="clientes seccion-clientes">
      <div className="container">
        <div className="row gutter-y-60">
          {/* Imagen destacada (opcional) */}
          <div className="col-lg-5">
            <div className="clientes__imagen clearfix">
              <img src="assets/images/clientes/imagen-destacada.png" alt="Clientes Destacados" />
            </div>
          </div>

          {/* Contenido de Clientes */}
          <div className="col-lg-7">
            <div className="clientes__contenido">
              <div className="sec-title text-start">
                <p className="sec-title__tagline">Nuestros Clientes</p>
                <h3 className="sec-title__title count-box">
                  Más de <CountUp end={clientes.length} duration={1} /> clientes satisfechos
                </h3>
              </div>

              {/* Lista de Clientes con Logos */}
              <div className="clientes__lista__outer">
                <ul className="list-unstyled clientes__lista">
                  {clientes.map((cliente, index) => (
                    <li key={index}>
                      <a href="#">
                        <img src={cliente.logo} alt={cliente.nombre} />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Alternativa: Lista de Nombres de Clientes sin Logos */}
              {/* 
              <div className="clientes__lista__outer">
                <ul className="list-unstyled clientes__lista">
                  {clientes.map((cliente, index) => (
                    <li key={index}>
                      <strong>{cliente.nombre}</strong> - {cliente.ubicacion || cliente.ubicaciones.join(', ')}
                    </li>
                  ))}
                </ul>
              </div>
              */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Clientes;
