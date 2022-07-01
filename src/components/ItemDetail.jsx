import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import ItemCount from "./ItemCount";

export default function ItemDetail({ product }) {
  let { addItem, isInCart } = useContext(CartContext);

  function addOn(quantityToAdd) {
    //alert(`Se han agregado: ${quantityToAdd} productos`);
    addItem(product, quantityToAdd);
  }

  return (
    <>
      <div className="container bg-light pb-3 box-1 mt-5">
        <div className="row">
          <h4 className="mt-3">Detalle del Producto</h4>
          <div className="col-lg-6 col-sm-12 mt-3">
            <div className="card">
              <img
                className="card-img-top"
                src={product.imagen}
                alt="product"
              />
            </div>
          </div>
          <div className="col-lg-6 col-sm-12 mt-3">
            <div className="alert alert-dark">
              <h5 className="text-start">Nombre: {product.nombre}</h5>
              <h5 className="text-start">Categoria: {product.categoria}</h5>
              <h5 className="text-start">Precio: ${product.precio}</h5>
            </div>
            <div className="alert alert-dark" role="alert">
              <h4>Descripción del producto</h4>
              <p className="text-start">{product.descripcion}</p>
            </div>
            <div className="text-center fw-bolder alert alert-secondary">
              {isInCart(product.id) ? (
                <div>
                  <p className="fw-bolder">
                    El producto se agregó en el carrito.
                  </p>
                  <Link to={"/cart"} className="btn btn-danger">
                    Terminar mi compra
                  </Link>
                </div>
              ) : (
                <ItemCount stock={product.stock} initial={1} addOn={addOn} />
              )}
            </div>
            {/* LLamo a ItemCount y le envio props como solicita la diapositiva*/}
          </div>
        </div>
      </div>
    </>
  );
}
