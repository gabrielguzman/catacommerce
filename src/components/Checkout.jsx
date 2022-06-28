import { addDoc, collection, getFirestore, firebase } from "firebase/firestore";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";

export default function Checkout() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cellphone, setCellphone] = useState("");
  const [orderId, setOrderId] = useState("");
  const [estado, setEstado] = useState(false);

  const db = getFirestore();
  const orderCollection = collection(db, "orders");

  const { cart, getItemPrice, clearCart } = useContext(CartContext);

  function handleClick() {
    let fecha = new Date();
    fecha =
      fecha.getFullYear() +
      "-" +
      fecha.getMonth() +
      "-" +
      fecha.getDay() +
      "-" +
      fecha.getHours() +
      ":" +
      fecha.getMinutes() +
      ":" +
      fecha.getSeconds();

    const pedido = {
      buyer: { name, email, cellphone },
      items: cart,
      total: getItemPrice(),
      date: fecha,
    };

    addDoc(orderCollection, pedido).then(({ id }) => {
      setOrderId(id);
      setEstado(true);
      clearCart();
    });
  }

  const renderForm = () => {
    return (
      <div className="container mt-5 ">
        <div className="row">
          <div className="col col-lg-6 bg-light">
            <p className="h5 mt-3">Completar Formulario de Contacto</p>
            <div className="mb-3">
              <input
                onChange={(e) => setName(e.target.value)}
                type="text"
                className="form-control"
                id="name"
                placeholder="Nombre"
              />
            </div>
            <div className="mb-3">
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                className="form-control"
                id="email"
                placeholder="Email"
              />
            </div>
            <div className="mb-3">
              <input
                onChange={(e) => setCellphone(e.target.value)}
                type="text"
                className="form-control"
                id="telefono"
                placeholder="Teléfono"
              />
            </div>
            <button
              onClick={() => handleClick()}
              type="submit"
              className="btn btn-danger mb-3"
            >
              Finalizar Pedido
            </button>
          </div>
          <div className="col offset-md-1 col-lg-5 bg-light">
            <h5 className="mt-3">Detalle Pedido</h5>
            <ul className="list-group">
              {cart?.map((item, key) => (
                <div className="">
                  <li className="list-group-item">
                    {item.nombre} - ${item.precio} - Cantidad: {item.quantity}
                  </li>
                </div>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      {estado === true ? (
        <div className="alert alert-primary" role="alert">
          Tu id de pedido es: <h4>{orderId}</h4>
        </div>
      ) : (
        renderForm()
      )}
    </>
  );
}
