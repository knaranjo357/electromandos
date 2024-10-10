import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import backgroundImg from '../../assets/images/background/page-header-bg-1-1.jpg'; // Asegúrate de que esta ruta sea correcta

function PageHeader({ title, breadcrumb }) {
  return (
    <section
      className="page-header text-start"
      style={{ backgroundImage: `url(${backgroundImg})` }}
      aria-label="Encabezado de página"
    >
      <div className="container">
        <h2 className="page-header__title">{title}</h2>

        <ul className="list-unstyled breadcrumb-one">
          {breadcrumb.map((item, index) => (
            <li key={index}>
              {item.path ? <Link to={item.path}>{item.label}</Link> : <span>{item.label}</span>}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

// Definición de PropTypes para mayor robustez
PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
  breadcrumb: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      path: PropTypes.string, // path es opcional para el último elemento
    })
  ).isRequired,
};

// Valores por defecto en caso de que no se proporcionen props
PageHeader.defaultProps = {
  title: 'Nuestros Servicios',
  breadcrumb: [
    { label: 'Home', path: '/' },
    { label: 'Servicios' },
  ],
};

export default PageHeader;
