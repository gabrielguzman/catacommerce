import React from "react";
import CartWidget from "./CartWidget";
import { Link } from 'react-router-dom';

const Navbar = ({cantidad}) => {
  return (
    <div className="container-fluid navbar-dark bg-dark">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">
          <img
              src='/img/logoCat.png'
              height='30'
              alt=''
            />
            CataCommerce
          </Link>
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
                <Link className="nav-link active" aria-current="page" to={'/'}>
                  Inicio
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={`/`}>Ofertas
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={`/`}>Mis Compras
                </Link>
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
                    <Link className="dropdown-item" to={`/category/audio`}>Audio
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to={`/category/computacion`}>Computación
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to={`/category/instrumentos_musicales`}>Instrumentos Musicales
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" to={`/`}>Ver más
                    </Link>
                  </li>
                </ul>
              </li>
                <li className="nav-item">
                  <a className="nav-link" href="/#">
                    <CartWidget cantidad = {cantidad}/>
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