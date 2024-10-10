import React from 'react';
import { Link } from 'react-router-dom';

function Products() {
  // Lista de productos
  const products = [
    { id: 1, name: 'Variadores de Frecuencia (1/2 - 350HP)', image: 'portfolio-1-1.jpg', category: 'electrico' },
    { id: 2, name: 'Arrancadores Suaves (1/2 - 350HP)', image: 'portfolio-1-2.jpg', category: 'electrico' },
    { id: 3, name: 'Controladores Correctores de Factor de Potencia', image: 'portfolio-1-3.jpg', category: 'electrico' },
    { id: 4, name: 'Analizadores de Red', image: 'portfolio-1-4.jpg', category: 'electrico' },
    { id: 5, name: 'Controladores de Flujo y Temperatura', image: 'portfolio-1-5.jpg', category: 'electrico' },
    { id: 6, name: 'Interfaces HMI', image: 'portfolio-1-6.jpg', category: 'electrico' },
    { id: 7, name: 'PLC, Módulos de Expansión y Módulos Especiales', image: 'portfolio-1-7.jpg', category: 'electrico' },
    { id: 8, name: 'Contactores y Guardamotores', image: 'portfolio-1-8.jpg', category: 'electrico' },
    { id: 9, name: 'Relés Térmicos (Monopolares, Bipolares y Tripolares)', image: 'portfolio-1-9.jpg', category: 'electrico' },
    { id: 10, name: 'Disyuntores Magnéticos', image: 'portfolio-1-10.jpg', category: 'electrico' },
    { id: 11, name: 'Condensadores Cilíndricos y Modulares', image: 'portfolio-1-11.jpg', category: 'electrico' },
    { id: 12, name: 'Reactancias para Rechazo de Armónicos', image: 'portfolio-1-12.jpg', category: 'electrico' },
    { id: 13, name: 'Interruptores Totalizadores Fijos y Regulables', image: 'portfolio-1-13.jpg', category: 'electrico' },
    { id: 14, name: 'Transformadores Secos Elevadores/Reductores de Voltaje', image: 'portfolio-1-14.jpg', category: 'electrico' },
    { id: 15, name: 'Fuentes de Alimentación (100-250V / 24VDC)', image: 'portfolio-1-15.jpg', category: 'electrico' },
    { id: 16, name: 'Relevos (5, 8 y 14 pines a 24VDC/110VAC/220VAC)', image: 'portfolio-1-16.jpg', category: 'electrico' },
    { id: 17, name: 'Bloques de Distribución (2, 3 y 4 fases)', image: 'portfolio-1-17.jpg', category: 'electrico' },
    { id: 18, name: 'Termostatos y Medidores de Humedad', image: 'portfolio-1-18.jpg', category: 'electrico' },
    { id: 19, name: 'Temporizadores Análogos y Digitales', image: 'portfolio-1-19.jpg', category: 'electrico' },
    { id: 20, name: 'Bornas para Control y Potencia', image: 'portfolio-1-20.jpg', category: 'electrico' },
    { id: 21, name: 'Dispositivos de Seguridad (Paradas de Emergencia, Muletillas, Pulsadores)', image: 'portfolio-1-21.jpg', category: 'electrico' },
    { id: 22, name: 'Pilotos (Rojo, Verde, Amarillo, Azul a 24VDC/110VAC/220VAC)', image: 'portfolio-1-22.jpg', category: 'electrico' },
    { id: 23, name: 'Platinas y Varillas de Cobre para barrajes, neutros o tierras', image: 'portfolio-1-23.jpg', category: 'electrico' },
    { id: 24, name: 'Motores Monofásicos y Trifásicos IE3 (1/2HP - 450HP)', image: 'portfolio-1-24.jpg', category: 'motor' },
    { id: 25, name: 'Motores a Prueba de Explosión IE3 (5HP - 250HP)', image: 'portfolio-1-25.jpg', category: 'motor' },
    { id: 26, name: 'Motores Trifásicos para Bombas IE3 (1/2HP - 50HP)', image: 'portfolio-1-26.jpg', category: 'motor' },
    { id: 27, name: 'Motores Refrigerados en Agua IE3 (24HP - 600HP)', image: 'portfolio-1-27.jpg', category: 'motor' },
    { id: 28, name: 'Motorreductores (Concéntricos, Paralelos y Ortogonales de 1:7.5 a 1:100)', image: 'portfolio-1-28.jpg', category: 'motor' },
  ];
  
  return (
    <>
      <section className="portfolio-grid">
        <div className="container">
          <div className="sec-title text-center">
            <p className="sec-title__tagline">Nuestros Productos</p>
            <h3 className="sec-title__title">Ofrecemos una amplia gama de productos eléctricos industriales de alta calidad</h3>
          </div>

          <div className="row filter-layout masonary-layout gutter-y-30">
            {products.map((product) => (
              <div key={product.id} className={`col-md-6 col-lg-4 filter-item ${product.category}`}>
                <div className="portfolio-card">
                  <div className="portfolio-card__image">
                    <img src={`assets/images/portfolio/${product.image}`} alt={product.name} />
                    <div className="portfolio-card__content">
                      <span className="portfolio-card__tagline">Producto Eléctrico</span>
                      <h3 className="portfolio-card__title">
                        <Link to={`/productdetails/${product.id}`}>{product.name}</Link>
                      </h3>
                      <Link to={`/productdetails/${product.id}`} className="portfolio-card__link">
                        <i className="far fa-arrow-right" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Botón para ver más productos */}
          <div className="portfolio-grid__btns text-center">
            <Link to="/products" className="thm-btn thm-btn--two portfolio-grid__btn">
              <span>
                Ver Más Productos
                <i className="far fa-arrow-right" />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Products;
