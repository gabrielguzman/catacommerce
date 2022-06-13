import React from "react";
import '../ownstyle.css';
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="container-fluid footer">
      <div className="container">
        <footer className="mt-5">
          <div className="row pt-3">
            <div className="col-lg-3 col-md">
                <Link className="link-secondary h4" to={`/`}>Inicio
                </Link>
            </div>
            <div className="col-lg-3 col-md">
              <h5 className="text-white">Ofertas</h5>
              <ul className="list-unstyled text-small">
                <li>
                  <Link className="link-secondary" to={`/`}>Categorias
                  </Link>
                </li>
                <li>
                  <Link className="link-secondary" to={`/`}>Top Productos
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md">
              <h5 className="text-white">Franquicias</h5>
              <ul className="list-unstyled text-small">
                <li>
                  <Link className="link-secondary" to={`/`}>Localidades
                  </Link>
                </li>
                <li>
                  <Link className="link-secondary" to={`/`}>Franquicias
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md">
              <h5 className="text-white">Acerca De</h5>
              <ul className="list-unstyled text-small">
                <li>
                  <Link className="link-secondary" to={`/`}>Equipo
                  </Link>
                </li>
                <li>
                  <Link className="link-secondary" to={`/`}>Contacto
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md">
              <small className="d-block mb-3 text-muted">
                Catacommerce©GuzmánGabriel2022
              </small>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
