import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

export default function Cart() {
  const { cart, getItemPrice, clearCart, removeItem } = useContext(CartContext);

  const renderCarrito = () => {
    return (
      <div className="container">
        <h4 className="mt-3">Carrito</h4>
        <table className="table table-striped table-hover mt-5">
          <thead>
            <tr>
              <th scope="col">Producto</th>
              <th scope="col">Precio</th>
              <th scope="col">Cantidad</th>
              <th scope="col">SubTotal</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {cart?.map((item, key) => (
              <tr key={key}>
                <td>{item.nombre}</td>
                <td>${item.precio}</td>
                <td>{item.quantity}</td>
                <td>${item.quantity * item.precio}</td>
                <td>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => removeItem(item.id)}
                  >
                    X
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr style={{ borderWidth: "0" }}>
              <td colSpan={3}></td>
              <td className="table-danger fw-bolder ">
                Total: ${getItemPrice()}
              </td>
            </tr>
            <tr>
              <td colSpan={4}></td>
              <td>
                <button
                  className="btn btn-sm btn-danger mt-3"
                  onClick={() => clearCart()}
                >
                  Vaciar Carrito
                </button>
              </td>
            </tr>
          </tfoot>
        </table>
        <div>
          <Link to={"/"} className="btn btn-secondary mt-3 mr-1">
            Seguir Comprando
          </Link>
          <Link to={"/checkout"} className="btn btn-danger mt-3 mr-1">
            Terminar Compra
          </Link>
        </div>
      </div>
    );
  };

  const renderItemVacios = () => {
    return (
      <div className="container mt-5">
        <h5 className="fs-5 ">No hay elementos en el carrito</h5>
        <Link to={"/"} className="btn btn-primary">
          Volver a Inicio
        </Link>
      </div>
    );
  };

  return <>{cart.length > 0 ? renderCarrito() : renderItemVacios()}</>;
}
