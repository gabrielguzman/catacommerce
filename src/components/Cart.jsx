import { render } from '@testing-library/react';
import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import {CartContext} from '../context/CartContext';
import Item from './Item';

export default function Cart() {

  const {cart, getItemPrice, clearCart, removeItem} = useContext(CartContext);

  function renderCarrito(){
    if(cart.length > 0){
      return (
        <div className='container'> 
          <h3>Carrito</h3>
          <table className='table'>
                <thead className='table-info'>
                  <tr>
                    <th >
                      Producto
                    </th>
                    <th>
                      Precio
                    </th>
                    <th>
                      Cantidad
                    </th>
                    <th>
                      SubTotal
                    </th>
                    <th>
                      Acciones
                    </th>
                  </tr>
                </thead>
                <tbody >
                  
          {
            cart?.map((item, key) => (
                  <tr key= {key}>
                    <th>
                    {item.nombre}
                    </th>
                    <th>
                    ${item.precio}
                    </th>
                    <th>
                    {item.quantity}
                    </th>
                    <th>
                    ${item.quantity * item.precio}
                    </th>
                    <th>
                    <button className='btn btn-danger' onClick={()=>removeItem(item.id)}>X</button>
                    </th>
                  </tr>
            ))}
            </tbody>
            <tfoot>
              <tr>
                <td className='h5 bg-warning'>Total: ${getItemPrice()}</td>
              </tr>
            </tfoot>
            </table>
            <div className="btn-group" role="group" aria-label="Basic example">
            <Link to={'/'} className='btn btn-primary' >Seguir Comprando</Link>
            <button className='btn btn-danger' onClick={()=>clearCart()}>Vaciar</button>
            </div>
        </div> 
      );
    }else{
      return (
      <div>
        <h5 className='bg-info'>No hay elementos en el carrito</h5>
        <Link to={'/'} className='btn btn-primary'>Volver a Inicio</Link>
      </div>
      );
    }
  }

  return (
    <>
      {renderCarrito()}
    </>
  )
}
