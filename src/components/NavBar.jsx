import React from "react";
import CartWidget from "./CartWidget";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="container-fluid navbar-dark bg-dark">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="/#">
            
          <img
              src='img/logoCat.png'
              height='30'
              alt=''
            />
            CataCommerce
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/#">
                  Inicio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#">
                  Ofertas
                </a>
                <Link to={`/`}>VER
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#">
                  Mis Compras
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Categorias
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="/#">
                      Tecnología
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/#">
                      Electrodomesticos
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/#">
                      Moda
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="/#">
                      Ver Más
                    </a>
                  </li>
                </ul>
              </li>
                <li className="nav-item">
                  <a className="nav-link" href="/#">
                    <CartWidget />
                  </a>
                </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

