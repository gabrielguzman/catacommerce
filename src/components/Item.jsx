import React from "react";

export default function Item({ producto }) {
  const { nombre, precio, imagen } = producto;

  return (
    <>
      <div className="col-lg-3 col-md-6 col-sm-12">
        <div className="card mt-3">
          <img className="card-img-top" src={imagen} alt="food" />
          <div className="card-body">
            <h5 className="card-title">{nombre}</h5>
            <p className="card-text">${precio}</p>
            <a href="/#" className="btn btn-primary">
              Ver
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
