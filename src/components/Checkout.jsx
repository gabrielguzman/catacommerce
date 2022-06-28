import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';

export default function Checkout() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [cellphone, setCellphone] = useState('');
    const [orderId, setOrderId] = useState('');
    const [estado, setEstado] = useState(false);
 
    const db = getFirestore();
    const orderCollection = collection(db,'orders');

    const {cart, getItemPrice} = useContext(CartContext);

    function handleClick() {
        const pedido = {
            buyer: {name, email, cellphone},
            items: cart,
            total: getItemPrice(),
        }

        //enviar pedido
        addDoc(orderCollection, pedido).then(({id})=>{
            setOrderId(id);
            setEstado(true);
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


  return (
    <>
      {estado === true ? <div> <h4>El id de pedido es: {orderId}</h4> </div> : renderForm() }     
    </>
  );
}
