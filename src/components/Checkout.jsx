import {
  addDoc,
  collection,
  doc,
  getDocs,
  getFirestore,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";

export default function Checkout() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cellphone, setCellphone] = useState("");
  const [orderId, setOrderId] = useState("");
  const [estado, setEstado] = useState(false);
  const [productos, setProductos] = useState([]);

  const db = getFirestore();
  const orderCollection = collection(db, "orders");

  const productsCollection = collection(db, "productos");

  useEffect(() => {
    getDocs(productsCollection).then((res) => {
      setProductos(res.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });
  });

  const { cart, getItemPrice, clearCart } = useContext(CartContext);

  function handleClick() {
    const pedido = {
      buyer: { name, email, cellphone },
      items: cart,
      total: getItemPrice(),
      date: serverTimestamp(),
    };

    addDoc(orderCollection, pedido).then(({ id }) => {
      setOrderId(id);
      setEstado(true);
      clearCart();

      cart.forEach((element) => {
        productos.forEach((product) => {
          if (element.id === product.id) {
            const stockUpdate = doc(db, "productos", product.id);
            updateDoc(stockUpdate, { stock: product.stock - element.quantity });
          }
        });
      });
    });
  }

  function setVariables(target, setter) {
    let valorDepurado = target.value;
    // eslint-disable-next-line default-case
    switch (target.id) {
      case "name":
        valorDepurado = valorDepurado.replace(/[^a-z áéíóúÁÉÍÓÚ]/gi, ""); //Validación básica para no permitir números ni carac. especiales
        break;
      case "telefono":
        valorDepurado = valorDepurado.replace(/[^0-9]/gi, "");
        break;
    }
    target.value = valorDepurado;
    setter(valorDepurado);
  }

  const renderForm = () => {
    return (
      <div className="container mt-5 ">
        <div className="row">
          <div className="col col-lg-6 bg-light">
            <form
              action=""
              onSubmit={(e) => {
                handleClick();
                e.preventDefault();
              }}
            >
              <p className="h5 mt-3">Completá el Formulario de Contacto:</p>
              <div className="mb-3">
                <input
                  onInput={(e) => setVariables(e.target, setName)}
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Nombre"
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  onInput={(e) => setVariables(e.target, setEmail)}
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  onInput={(e) => setVariables(e.target, setCellphone)}
                  type="text"
                  className="form-control"
                  id="telefono"
                  placeholder="Teléfono"
                  maxLength={10}
                  required
                />
              </div>
              <button type="submit" className="btn btn-danger mb-3">
                Finalizar Pedido
              </button>
            </form>
          </div>
          <div className="col offset-md-1 col-lg-5 bg-light">
            <h5 className="mt-3">Detalle del Pedido:</h5>
            <ul className="list-group">
              {cart?.map((item, key) => (
                <div className="" key={item.id}>
                  <li className="list-group-item">
                    Producto: {item.nombre} - Precio: ${item.precio} - Cantidad: {item.quantity}u.
                  </li>
                </div>
              ))}
              <li className="list-group-item bg-danger text-white fw-bolder">
                Total: ${getItemPrice()}
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      {cart.length == 0 && estado === false ? <Navigate to="/" /> : ""}
      {estado === true ? (
        <div className="alert alert-primary" role="alert">
          <p className="h3">¡Felicidades tu compra ha sido aprobada!</p>
          <p className="h2">Tu id de pedido es: <h4 className="text-danger">{orderId}</h4></p>
          <p className="h5">En instantes nos pondremos en contacto con ud.</p>
        </div>
      ) : (
        renderForm()
      )}
    </>
  );
}
