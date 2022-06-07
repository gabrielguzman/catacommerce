import React from "react";
import '../ownstyle.css';

export default function Footer() {
  return (
    <div className="container-fluid footer">
      <div className="container">
        <footer className="mt-5">
          <div className="row pt-3">
            <div className="col-lg-3 col-md">
              <a href="/#">
                <h5>Inicio</h5>
              </a>
            </div>
            <div className="col-lg-3 col-md">
              <h5 className="text-white">Ofertas</h5>
              <ul className="list-unstyled text-small">
                <li>
                  <a className="link-secondary" href="/#">
                    Categorias
                  </a>
                </li>
                <li>
                  <a className="link-secondary" href="/#">
                    Top Productos
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md">
              <h5 className="text-white">Franquicias</h5>
              <ul className="list-unstyled text-small">
                <li>
                  <a className="link-secondary" href="/#">
                    Localidades
                  </a>
                </li>
                <li>
                  <a className="link-secondary" href="/#">
                    Top Franquicias
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md">
              <h5 className="text-white">Acerca De</h5>
              <ul className="list-unstyled text-small">
                <li>
                  <a className="link-secondary" href="/#">
                    Equipo
                  </a>
                </li>
                <li>
                  <a className="link-secondary" href="/#">
                    Contacto
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md">
              <small className="d-block mb-3 text-muted">
                GuzmánGabriel©2022
              </small>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
