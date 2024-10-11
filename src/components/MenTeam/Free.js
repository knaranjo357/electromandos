import React from 'react';
import { Link } from 'react-router-dom';

function Free() {
  return (
    <>
      <section className="cta-one">
        <div className="container">
          <div className="sec-title text-center">
            <p className="sec-title__tagline">Obtén una Estimación Gratuita</p>

            <h3 className="sec-title__title">
              ¡Solicita un servicio eléctrico! <br />
              Comienza con nosotros
            </h3>
          </div>

          <div className="cta-one__content">
            {/* Botón de Acción */}
            <Link to="/contacto" className="thm-btn thm-btn--three cta-one__btn">
              <span>
                Solicita una Cotización
                <i className="far fa-arrow-right" />
              </span>
            </Link>

            {/* Información de Contacto */}
            <div className="cta-one__info">
              <div className="cta-one__info__icon">
                <i className="far fa-phone-plus" />
              </div>

              <div className="cta-one__info__content">
                <span className="cta-one__info__name">Número de Teléfono</span>
                {/* Cambio de Link a etiqueta <a> con href para enlaces telefónicos */}
                <a href="tel:+573153816959" className="cta-one__info__phone">+57 3153816959</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Free;
