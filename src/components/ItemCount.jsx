import React, { useState } from "react";

export default function ItemCount({ stock, initial, addOn }) {
  const [contador, setContador] = useState(initial);

  const sumar = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };

  const restar = () => {
    if (contador > 0) {
      setContador(contador - 1);
    }
  };

  return (
    <>
      <div className="col-lg-3">
        <div className="card-body">
          <p p className="h4">Stock = {stock} </p>
          <p className="h3">Cantidad = {contador}</p>
          <div class="btn-group" role="group" aria-label="Basic example">
            <button className="btn btn-md btn-primary" onClick={restar}>-</button>
            <button className="btn btn-md btn-primary" onClick={sumar}>+</button>
          </div>
          <p>
          <button
              disabled={stock === 0 || contador === 0}
              className="btn btn-md btn-danger mt-2"
              onClick={() => addOn(contador)}
            >Agregar
          </button>
          </p>
        </div>
      </div>
    </>
  );
}
