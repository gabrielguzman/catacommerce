import React, { useState } from "react";

export default function ItemCount({ stock, initial, addOn }) {
  const [contador, setContador] = useState(initial);

  const sumar = () => {
    if (contador === stock) {
      alert("Superó el stock de este producto.");
    } else {
      setContador(contador + 1);
    }
  };

  const restar = () => {
    if (contador > 1) {
      setContador(contador - 1);
    } else {
      alert("La cantidad de este producto debe ser mayor a 0.");
    }
  };

  return (
    <>
      <div className="col-lg-3">
        <div className="card-body">
          <p p className="text-white h4">Stock = {stock} </p>
          <p className="text-white h3">Cantidad = {contador}</p>
          <div class="btn-group" role="group" aria-label="Basic example">
            <button className="btn btn-md btn-primary" onClick={restar}>-</button>
            <button className="btn btn-md btn-primary" onClick={sumar}>+</button>
          </div>
          <p>
            <button className="btn btn-md btn-danger mt-2" onClick={() => addOn(stock, contador)}>
              Agregar
            </button>
          </p>
        </div>
      </div>
    </>
  );
}
