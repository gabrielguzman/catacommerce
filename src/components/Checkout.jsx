import { addDoc, collection, getFirestore, firebase } from 'firebase/firestore';
import { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';


export default function Checkout() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [cellphone, setCellphone] = useState('');
    const [orderId, setOrderId] = useState('');
    const [estado, setEstado] = useState(false);
    const [orden, setOrden] = useState({});

    const db = getFirestore();
    const orderCollection = collection(db,'orders');

    const {cart, getItemPrice, clearCart} = useContext(CartContext);

    function handleClick() {
        let fecha = new Date();
        fecha = fecha.getFullYear()+'-'+fecha.getMonth()+'-'+fecha.getDay()+'-'+fecha.getHours()+':'+fecha.getMinutes()+':'+fecha.getSeconds();

        const pedido = {
            buyer: {name, email, cellphone},
            items: cart,
            total: getItemPrice(),
            date: fecha,
        }

        addDoc(orderCollection, pedido).then(({id})=>{
            setOrderId(id);
            setEstado(true);
            setOrden(pedido);
            clearCart();
        });

    }

    const renderForm = () =>{
        return(
        <div className="container mt-5">
        <div className="row">
            <div className="col col-lg-6">
            <div className="mb-3">
                <label htmlFor="name" className="form-label">
                Nombre
                </label>
                <input onChange={(e)=>setName(e.target.value)} type="text" className="form-control" id="name" placeholder='nombre'/>
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">
                Email
                </label>
                <input onChange={(e)=>setEmail(e.target.value)}  type="text" className="form-control" id="email" placeholder='email'/>
            </div>
            <div className="mb-3">
                <label className="form-label" htmlFor="telefono">
                Celular
                </label>
                <input onChange={(e)=>setCellphone(e.target.value)} type="text" className="form-control" id="telefono" />
            </div>
            <button onClick={()=>handleClick()} type="submit" className="btn btn-primary">
                Terminar Compra
            </button>
            </div>
        </div>
      </div>
      )
    }

  console.log(orden);
  return (
    <>
        {estado === true ? 
            <div className="alert alert-primary" role="alert">
               Tu id de pedido es: <h4>{orderId}</h4>
            </div> : renderForm()
        }     
    </>
  );
}
