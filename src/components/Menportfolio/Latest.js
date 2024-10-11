import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Products() {
  // Estado para almacenar el término de búsqueda
  const [searchTerm, setSearchTerm] = useState('');

  // Lista de productos
  const products = [
    { id: 1, name: 'Variadores de Frecuencia (1/2 - 350HP)', image: 'p1.jpg', category: 'electrico' },
    { id: 2, name: 'Arrancadores Suaves (1/2 - 350HP)', image: 'p2.jpg', category: 'electrico' },
    { id: 3, name: 'Controladores Correctores de Factor de Potencia', image: 'p3.jpg', category: 'electrico' },
    { id: 4, name: 'Analizadores de Red', image: 'p4.jpg', category: 'electrico' },
    { id: 5, name: 'Controladores de Flujo y Temperatura', image: 'p5.jpg', category: 'electrico' },
    { id: 6, name: 'Interfaces HMI', image: 'p6.jpg', category: 'electrico' },
    { id: 7, name: 'PLC, Módulos de Expansión y Módulos Especiales', image: 'p7.jpg', category: 'electrico' },
    { id: 8, name: 'Contactores y Guardamotores', image: 'p8.jpg', category: 'electrico' },
    { id: 9, name: 'Relés Térmicos (Monopolares, Bipolares y Tripolares)', image: 'p9.jpg', category: 'electrico' },
    { id: 10, name: 'Disyuntores Magnéticos', image: 'p10.jpg', category: 'electrico' },
    { id: 11, name: 'Condensadores Cilíndricos y Modulares', image: 'p11.jpg', category: 'electrico' },
    { id: 12, name: 'Reactancias para Rechazo de Armónicos', image: 'p12.jpg', category: 'electrico' },
    { id: 13, name: 'Interruptores Totalizadores Fijos y Regulables', image: 'p13.jpg', category: 'electrico' },
    { id: 14, name: 'Transformadores Secos Elevadores/Reductores de Voltaje', image: 'p14.jpg', category: 'electrico' },
    { id: 15, name: 'Fuentes de Alimentación (100-250V / 24VDC)', image: 'p15.jpg', category: 'electrico' },
    { id: 16, name: 'Relevos (5, 8 y 14 pines a 24VDC/110VAC/220VAC)', image: 'p16.jpg', category: 'electrico' },
    { id: 17, name: 'Bloques de Distribución (2, 3 y 4 fases)', image: 'p17.jpg', category: 'electrico' },
    { id: 18, name: 'Termostatos y Medidores de Humedad', image: 'p18.jpg', category: 'electrico' },
    { id: 19, name: 'Temporizadores Análogos y Digitales', image: 'p19.jpg', category: 'electrico' },
    { id: 20, name: 'Bornas para Control y Potencia', image: 'p20.jpg', category: 'electrico' },
    { id: 21, name: 'Dispositivos de Seguridad (Paradas de Emergencia, Muletillas, Pulsadores)', image: 'p21.jpg', category: 'electrico' },
    { id: 22, name: 'Pilotos (Rojo, Verde, Amarillo, Azul a 24VDC/110VAC/220VAC)', image: 'p22.jpg', category: 'electrico' },
    { id: 23, name: 'Platinas y Varillas de Cobre para barrajes, neutros o tierras', image: 'p23.jpg', category: 'electrico' },
    { id: 24, name: 'Motores Monofásicos y Trifásicos IE3 (1/2HP - 450HP)', image: 'p24.jpg', category: 'motor' },
    { id: 25, name: 'Motores a Prueba de Explosión IE3 (5HP - 250HP)', image: 'p25.jpg', category: 'motor' },
    { id: 26, name: 'Motores Trifásicos para Bombas IE3 (1/2HP - 50HP)', image: 'p26.jpg', category: 'motor' },
    { id: 27, name: 'Motores Refrigerados en Agua IE3 (24HP - 600HP)', image: 'p27.jpg', category: 'motor' },
    { id: 28, name: 'Motorreductores (Concéntricos, Paralelos y Ortogonales de 1:7.5 a 1:100)', image: 'p28.jpg', category: 'motor' },
  ];

  // Filtrar productos según el término de búsqueda
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <section className="portfolio-grid">
        <div className="container">
          {/* Campo de texto para buscar productos */}
          <div className="search-bar">
            <input
              type="text"
              placeholder="Buscar productos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="form-control"
              style={{ marginBottom: '20px', padding: '10px' }}
            />
          </div>

          <div className="row filter-layout masonary-layout gutter-y-30">
            {filteredProducts.map((product) => (
              <div key={product.id} className={`col-md-6 col-lg-4 filter-item ${product.category}`}>
                <div className="portfolio-card">
                  <div className="portfolio-card__image">
                    <img
                      src={`assets/images/productos/${product.image}`}
                      alt={product.name}
                      style={{ width: '410px', height: '425px', objectFit: 'cover' }} // Establecer tamaño fijo
                    />
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
        </div>
      </section>
    </>
  );
}

export default Products;
