import React from "react";
import { Link } from 'react-router-dom';

export default function Item({ producto }) {
  const { id, nombre, precio, imagen } = producto;

  return (
    <>
      <div className="col-lg-3 col-md-6 col-sm-12">
        <div className="card mt-3">
          <img className="card-img-top" src={imagen} alt="food" />
          <hr className="my-3" />
          <div className="card-body">
            <h5 className="card-title">{nombre}</h5>
            <p className="card-text fw-bolder ">${precio}</p>
            <hr className="my-3" />
            <Link to={`/item/${id}`} className="btn btn-primary">
              Ver
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}